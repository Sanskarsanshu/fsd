import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import UploadSection from './UploadSection';
import AnalysisResult from './AnalysisResult';

const PestDetection = () => {
  const { theme } = useTheme();
  const [image, setImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  // Multiple pest detection results
  const pestResults = [
    {
      diseaseName: 'Leaf Blight',
      confidence: 94,
      severity: 'High',
      recommendedAction: 'Apply fungicide immediately and remove infected leaves',
      preventativeMeasures: 'Ensure proper spacing between plants for air circulation',
      organicAlternatives: 'Use neem oil spray or copper-based fungicides',
      affectedArea: '35%',
      estimatedYieldLoss: '15-20%'
    },
    {
      diseaseName: 'Aphid Infestation',
      confidence: 88,
      severity: 'Medium',
      recommendedAction: 'Spray with insecticidal soap or introduce natural predators',
      preventativeMeasures: 'Regular monitoring and early detection is key',
      organicAlternatives: 'Use ladybugs or lacewings as biological control',
      affectedArea: '20%',
      estimatedYieldLoss: '8-12%'
    },
    {
      diseaseName: 'Powdery Mildew',
      confidence: 91,
      severity: 'Medium',
      recommendedAction: 'Apply sulfur-based fungicide and improve ventilation',
      preventativeMeasures: 'Avoid overhead watering and maintain plant hygiene',
      organicAlternatives: 'Mix baking soda solution (1 tbsp per gallon of water)',
      affectedArea: '28%',
      estimatedYieldLoss: '10-15%'
    },
    {
      diseaseName: 'Root Rot',
      confidence: 85,
      severity: 'High',
      recommendedAction: 'Reduce watering and improve soil drainage immediately',
      preventativeMeasures: 'Use well-draining soil and avoid overwatering',
      organicAlternatives: 'Apply beneficial bacteria like Bacillus subtilis',
      affectedArea: '40%',
      estimatedYieldLoss: '20-30%'
    },
    {
      diseaseName: 'Caterpillar Damage',
      confidence: 92,
      severity: 'Low',
      recommendedAction: 'Manual removal or apply Bt (Bacillus thuringiensis)',
      preventativeMeasures: 'Use row covers and inspect plants regularly',
      organicAlternatives: 'Handpick caterpillars or use diatomaceous earth',
      affectedArea: '15%',
      estimatedYieldLoss: '5-8%'
    },
  ];

  const handleImageUpload = (file) => {
    setImage(file);
    simulateAnalysis();
  };

  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      // Get random result
      const randomResult = pestResults[Math.floor(Math.random() * pestResults.length)];
      setResult(randomResult);
      setHistory((prev) => [{ id: Date.now(), ...randomResult }, ...prev.slice(0, 4)]);
      setIsAnalyzing(false);
    }, 2000);
  };

  const keyframeStyles = `
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  return (
    <>
      <style>{keyframeStyles}</style>
      <div className={`min-h-screen p-4 sm:p-6 lg:p-8 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50'
      }`}>
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div style={{ animation: 'slideDown 0.6s ease-out' }}>
            <h1 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2">
              Pest Detection
            </h1>
            <p className={`text-sm sm:text-base font-semibold ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Upload images to detect pests and diseases
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Upload Section */}
            <div className="lg:col-span-2">
              <UploadSection
                image={image}
                isAnalyzing={isAnalyzing}
                onUpload={handleImageUpload}
              />
            </div>

            {/* History */}
            <div 
              className={`rounded-xl shadow-xl p-4 sm:p-6 ${
                theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
              }`}
              style={{ animation: 'slideUp 0.6s ease-out' }}
            >
              <h2 className={`text-lg font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Recent Scans
              </h2>
              <div className="space-y-2">
                {history.length === 0 ? (
                  <p className={`text-center py-4 text-sm ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    No scans yet
                  </p>
                ) : (
                  history.map((item) => (
                    <div
                      key={item.id}
                      className={`p-3 rounded-lg transition-all hover:scale-105 cursor-pointer ${
                        theme === 'dark'
                          ? 'bg-gray-800 hover:bg-gray-700'
                          : 'bg-gradient-to-r from-gray-50 to-gray-100 hover:shadow-md'
                      }`}
                    >
                      <p className={`font-semibold text-sm ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.diseaseName}
                      </p>
                      <p className={`text-xs mt-1 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {item.confidence}% confidence
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Result */}
          {result && <AnalysisResult result={result} />}
        </div>
      </div>
    </>
  );
};

export default PestDetection;
