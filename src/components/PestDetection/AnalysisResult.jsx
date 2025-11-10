import React from 'react';

const AnalysisResult = ({ result }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-slideUp">
      {/* Main Result */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg p-6 border-l-4 border-red-500">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Analysis Result</h2>
        
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 font-semibold mb-1">Disease Detected</p>
            <p className="text-2xl font-bold text-red-600">{result.diseaseName}</p>
          </div>

          <div className="p-4 bg-white rounded-lg">
            <p className="text-sm text-gray-600 font-semibold mb-2">Confidence Level</p>
            <div className="flex items-center gap-4">
              <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-400 to-red-600"
                  style={{ width: `${result.confidence}%` }}
                ></div>
              </div>
              <p className="font-bold text-red-600 min-w-fit">{result.confidence}%</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-lg">
            <p className="text-sm text-gray-600 font-semibold mb-2">Recommended Action</p>
            <p className="text-gray-700">{result.recommendedAction}</p>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="space-y-6">
        {/* Preventative Measures */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-6 border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Preventative Measures</h3>
          <p className="text-gray-700 leading-relaxed">{result.preventativeMeasures}</p>
        </div>

        {/* Organic Alternatives */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-6 border-l-4 border-emerald-500">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Organic Alternatives</h3>
          <p className="text-gray-700 leading-relaxed">{result.organicAlternatives}</p>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResult;
