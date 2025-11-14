from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from PIL import Image
import torch
import torch.nn as nn
from torchvision import transforms, models
import json
import io
from pathlib import Path

# Initialize FastAPI
app = FastAPI(title="Crop Disease Detection API", version="4.0")

# Configuration
CHECKPOINT_DIR = Path("checkpoints")
IMAGE_SIZE = 300
DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")
CONFIDENCE_THRESHOLD = 0.5

# ============== STAGE 1: LEAF DETECTION MODEL ==============
# Load pre-trained ResNet18 for leaf detection
leaf_detector = models.resnet18(weights=models.ResNet18_Weights.IMAGENET1K_V1)
leaf_detector = leaf_detector.to(DEVICE)
leaf_detector.eval()

# ImageNet class IDs that are leaf/plant related
PLANT_CLASS_IDS = {
    # Vegetables
    936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947,
    # Fruits  
    948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959,
    # Vegetables (continued)
    960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971,
    # Plants and leaves
    973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984,
    985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998
}

# Human/animal class IDs to reject
HUMAN_ANIMAL_CLASS_IDS = set(range(0, 398))  # Animals, humans, objects

leaf_transform = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

def detect_leaf(image):
    """
    STAGE 1: Detect if image contains a plant/leaf using pre-trained model
    Returns: (is_leaf, analysis_dict)
    """
    try:
        # Preprocess
        input_tensor = leaf_transform(image).unsqueeze(0).to(DEVICE)
        
        # Get predictions
        with torch.no_grad():
            outputs = leaf_detector(input_tensor)
            probabilities = torch.softmax(outputs, dim=1)[0]
        
        # Get top 10 predictions
        top10_prob, top10_idx = torch.topk(probabilities, 10)
        
        # Calculate confidence for plant/leaf categories
        plant_confidence = 0.0
        human_animal_confidence = 0.0
        top_plant_class = None
        
        for prob, idx in zip(top10_prob, top10_idx):
            idx_val = idx.item()
            prob_val = prob.item()
            
            if idx_val in PLANT_CLASS_IDS:
                plant_confidence += prob_val
                if top_plant_class is None:
                    top_plant_class = idx_val
            
            if idx_val in HUMAN_ANIMAL_CLASS_IDS:
                human_animal_confidence += prob_val
        
        # Decision logic
        is_leaf = plant_confidence > 0.15 and human_animal_confidence < 0.6
        
        return is_leaf, {
            "is_leaf_detected": is_leaf,
            "plant_confidence": f"{plant_confidence * 100:.2f}%",
            "human_animal_confidence": f"{human_animal_confidence * 100:.2f}%",
            "top_prediction_confidence": f"{top10_prob[0].item() * 100:.2f}%",
            "detection_model": "ResNet18 (ImageNet)"
        }
    
    except Exception as e:
        # If detection fails, reject image to be safe
        return False, {
            "error": str(e),
            "is_leaf_detected": False,
            "message": "Leaf detection failed"
        }

# ============== STAGE 2: DISEASE DETECTION MODEL ==============
class CropClassifier(nn.Module):
    def __init__(self, num_classes):
        super().__init__()
        self.model = models.efficientnet_b3(weights=None)
        in_features = self.model.classifier[1].in_features
        self.model.classifier[1] = nn.Linear(in_features, num_classes)
    
    def forward(self, x):
        return self.model(x)

# Load class names
with open(CHECKPOINT_DIR / "class_names.json", "r") as f:
    class_names = json.load(f)

num_classes = len(class_names)

# Load YOUR trained disease detection model
disease_model = CropClassifier(num_classes).to(DEVICE)
checkpoint = torch.load(CHECKPOINT_DIR / "best_model.pth", map_location=DEVICE)
disease_model.load_state_dict(checkpoint['model_state_dict'])
disease_model.eval()

print(f"✅ Leaf detector loaded on {DEVICE}")
print(f"✅ Disease model (YOUR MODEL) loaded on {DEVICE}")
print(f"✅ Number of disease classes: {num_classes}")

# Disease model preprocessing
disease_transform = transforms.Compose([
    transforms.Resize(320),
    transforms.CenterCrop(IMAGE_SIZE),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

@app.get("/")
def root():
    """Health check endpoint"""
    return {
        "status": "online",
        "message": "Crop Disease Detection API - Two Stage Detection",
        "version": "4.0",
        "model_accuracy": f"{checkpoint['val_acc']:.2f}%",
        "num_classes": num_classes,
        "device": str(DEVICE),
        "pipeline": [
            "Stage 1: Leaf Detection (ResNet18 - ImageNet)",
            "Stage 2: Disease Classification (YOUR trained model)"
        ]
    }

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    """
    Two-stage prediction:
    1. Detect if image contains a leaf (reject if not)
    2. Predict disease using YOUR trained model
    """
    try:
        # Read image
        image_bytes = await file.read()
        image = Image.open(io.BytesIO(image_bytes)).convert('RGB')
        
        # Validate dimensions
        if image.size[0] < 50 or image.size[1] < 50:
            return JSONResponse(
                status_code=400,
                content={
                    "success": False,
                    "error": "Image too small",
                    "message": "Minimum size: 50x50 pixels"
                }
            )
        
        # ============== STAGE 1: LEAF DETECTION ==============
        is_leaf, leaf_analysis = detect_leaf(image)
        
        if not is_leaf:
            return JSONResponse(
                status_code=400,
                content={
                    "success": False,
                    "error": "No leaf detected",
                    "message": "This image does not contain a plant leaf. Please upload a clear photo of a crop leaf.",
                    "stage": "Leaf Detection (Stage 1)",
                    "analysis": leaf_analysis,
                    "suggestion": "Upload a close-up image of a plant leaf showing the entire leaf surface"
                }
            )
        
        # ============== STAGE 2: DISEASE DETECTION ==============
        # Preprocess for YOUR disease model
        input_tensor = disease_transform(image).unsqueeze(0).to(DEVICE)
        
        # Predict using YOUR trained model
        with torch.no_grad():
            outputs = disease_model(input_tensor)
            probabilities = torch.softmax(outputs, dim=1)[0]
            confidence, predicted_idx = torch.max(probabilities, dim=0)
        
        predicted_class = class_names[predicted_idx.item()]
        confidence_score = confidence.item()
        
        # Check confidence threshold
        if confidence_score < CONFIDENCE_THRESHOLD:
            return JSONResponse(
                status_code=400,
                content={
                    "success": False,
                    "error": "Low confidence",
                    "message": "Disease prediction confidence is too low. Image may be unclear.",
                    "stage": "Disease Detection (Stage 2)",
                    "details": {
                        "confidence": f"{confidence_score * 100:.2f}%",
                        "threshold": f"{CONFIDENCE_THRESHOLD * 100:.0f}%"
                    },
                    "leaf_analysis": leaf_analysis
                }
            )
        
        # Get top 3 predictions
        top3_prob, top3_idx = torch.topk(probabilities, min(3, num_classes))
        top3_predictions = [
            {
                "disease": class_names[idx.item()],
                "confidence": f"{prob.item() * 100:.2f}%"
            }
            for prob, idx in zip(top3_prob, top3_idx)
        ]
        
        is_healthy = "healthy" in predicted_class.lower()
        
        return {
            "success": True,
            "stage_1_leaf_detection": leaf_analysis,
            "stage_2_disease_prediction": {
                "disease": predicted_class,
                "confidence": f"{confidence_score * 100:.2f}%",
                "is_healthy": is_healthy,
                "status": "Healthy crop ✓" if is_healthy else "Disease detected ⚠",
                "crop_type": predicted_class.split()[0]
            },
            "top_3_predictions": top3_predictions,
            "filename": file.filename
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")

@app.get("/classes")
def get_classes():
    """Get all disease classes"""
    return {
        "num_classes": num_classes,
        "classes": class_names
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
