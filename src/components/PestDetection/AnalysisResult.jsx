import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const AnalysisResult = ({ result }) => {
  const { theme } = useTheme();

  const getSeverityColor = (severity) => {
    if (severity === 'High') return 'red';
    if (severity === 'Medium') return 'orange';
    return 'yellow';
  };

  const severityColor = getSeverityColor(result.severity);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6" style={{ animation: 'slideUp 0.6s ease-out' }}>
      {/* 1. Main Result */}
      <div className={`rounded-xl shadow-xl p-4 sm:p-6 border-l-4 ${
        theme === 'dark'
          ? `bg-${severityColor}-900/20 border-${severityColor}-500`
          : `bg-${severityColor}-50 border-${severityColor}-500`
      }`}>
        <h2 className={`text-lg sm:text-xl font-bold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Analysis Result
        </h2>
        
        <div className="space-y-4">
          <div>
            <p className={`text-xs font-bold uppercase mb-1 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Disease Detected
            </p>
            <p className={`text-xl sm:text-2xl font-black text-${severityColor}-600`}>
              {result.diseaseName}
            </p>
          </div>

          <div className={`p-3 rounded-lg ${
            theme === 'dark' ? 'bg-black/30' : 'bg-white'
          }`}>
            <p className={`text-xs font-bold uppercase mb-2 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Confidence Level
            </p>
            <div className="flex items-center gap-3">
              <div className={`flex-1 h-2.5 rounded-full overflow-hidden ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <div
                  className={`h-full bg-gradient-to-r from-${severityColor}-400 to-${severityColor}-600`}
                  style={{ width: `${result.confidence}%` }}
                ></div>
              </div>
              <p className={`font-bold text-sm min-w-fit text-${severityColor}-600`}>
                {result.confidence}%
              </p>
            </div>
          </div>

          <div className={`p-3 rounded-lg ${
            theme === 'dark' ? 'bg-black/30' : 'bg-white'
          }`}>
            <p className={`text-xs font-bold uppercase mb-1 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Recommended Action
            </p>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {result.recommendedAction}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Severity & Impact */}
      <div className={`rounded-xl shadow-xl p-4 sm:p-6 ${
        theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
      }`}>
        <h3 className={`text-lg font-bold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Impact Assessment
        </h3>
        <div className="space-y-3">
          <div className={`p-3 rounded-lg ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
          }`}>
            <p className={`text-xs font-bold uppercase mb-1 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Severity Level
            </p>
            <p className={`text-lg font-black text-${severityColor}-600`}>
              {result.severity}
            </p>
          </div>
          <div className={`p-3 rounded-lg ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
          }`}>
            <p className={`text-xs font-bold uppercase mb-1 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Affected Area
            </p>
            <p className={`text-lg font-black ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {result.affectedArea}
            </p>
          </div>
          <div className={`p-3 rounded-lg ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
          }`}>
            <p className={`text-xs font-bold uppercase mb-1 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Estimated Yield Loss
            </p>
            <p className={`text-lg font-black text-${severityColor}-600`}>
              {result.estimatedYieldLoss}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Preventative Measures */}
      <div className={`rounded-xl shadow-xl p-4 sm:p-6 border-l-4 ${
        theme === 'dark'
          ? 'bg-blue-900/20 border-blue-500'
          : 'bg-blue-50 border-blue-500'
      }`}>
        <h3 className={`text-lg font-bold mb-3 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Preventative Measures
        </h3>
        <p className={`text-sm leading-relaxed ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {result.preventativeMeasures}
        </p>
      </div>

      {/* 4. Organic Alternatives */}
      <div className={`rounded-xl shadow-xl p-4 sm:p-6 border-l-4 ${
        theme === 'dark'
          ? 'bg-green-900/20 border-green-500'
          : 'bg-green-50 border-green-500'
      }`}>
        <h3 className={`text-lg font-bold mb-3 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Organic Alternatives
        </h3>
        <p className={`text-sm leading-relaxed ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {result.organicAlternatives}
        </p>
      </div>

      {/* 5. Action Timeline */}
      <div className={`lg:col-span-2 rounded-xl shadow-xl p-4 sm:p-6 ${
        theme === 'dark' ? 'bg-zinc-900' : 'bg-gradient-to-r from-purple-50 to-pink-50'
      }`}>
        <h3 className={`text-lg font-bold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Action Timeline
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className={`p-3 rounded-lg text-center ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <p className="text-xl font-black text-red-600 mb-1">Now</p>
            <p className={`text-xs ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Isolate affected plants
            </p>
          </div>
          <div className={`p-3 rounded-lg text-center ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <p className="text-xl font-black text-orange-600 mb-1">24hrs</p>
            <p className={`text-xs ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Apply treatment
            </p>
          </div>
          <div className={`p-3 rounded-lg text-center ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <p className="text-xl font-black text-green-600 mb-1">7 days</p>
            <p className={`text-xs ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Monitor progress
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResult;
