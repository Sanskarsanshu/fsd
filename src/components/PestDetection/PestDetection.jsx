import React, { useState } from 'react';
import { MOCK_DATA } from '../../data/mockData';
import UploadSection from './UploadSection';
import AnalysisResult from './AnalysisResult';

const PestDetection = () => {
  const [image, setImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleImageUpload = (file) => {
    setImage(file);
    simulateAnalysis();
  };

  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setResult(MOCK_DATA.pestReport);
      setHistory((prev) => [{ id: Date.now(), ...MOCK_DATA.pestReport }, ...prev.slice(0, 4)]);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Pest Detection</h1>
        <p className="text-gray-600 mt-2">Upload images to detect pests and diseases</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upload Section */}
        <div className="lg:col-span-2">
          <UploadSection
            image={image}
            isAnalyzing={isAnalyzing}
            onUpload={handleImageUpload}
          />
        </div>

        {/* History */}
        <div className="bg-white rounded-2xl shadow-lg p-6 card-hover animate-slideUp">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Scans</h2>
          <div className="space-y-3">
            {history.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No scans yet</p>
            ) : (
              history.map((item, index) => (
                <div
                  key={item.id}
                  className="p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                >
                  <p className="font-semibold text-sm text-gray-900">{item.diseaseName}</p>
                  <p className="text-xs text-gray-600 mt-1">{item.confidence}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Result */}
      {result && <AnalysisResult result={result} />}
    </div>
  );
};

export default PestDetection;
