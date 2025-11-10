import React, { useRef } from 'react';

const UploadSection = ({ image, isAnalyzing, onUpload }) => {
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('border-emerald-500', 'bg-emerald-50');
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('border-emerald-500', 'bg-emerald-50');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('border-emerald-500', 'bg-emerald-50');
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      onUpload(file);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-slideUp">
      <div
        className="border-2 border-dashed border-gray-300 p-12 text-center transition-all cursor-pointer hover:border-emerald-500"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        {image ? (
          <div className="space-y-4">
            <img
              src={URL.createObjectURL(image)}
              alt="preview"
              className="w-full h-64 object-cover rounded-lg"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Change Image
            </button>
          </div>
        ) : isAnalyzing ? (
          <div className="space-y-4">
            <div className="inline-block">
              <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin"></div>
            </div>
            <p className="text-lg font-semibold text-gray-700">Analyzing image...</p>
            <p className="text-sm text-gray-600">Please wait while we scan for pests and diseases</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-5xl">📸</div>
            <p className="text-lg font-semibold text-gray-900">Upload Plant Image</p>
            <p className="text-gray-600">Drag and drop or click to select</p>
            <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
          </div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default UploadSection;
