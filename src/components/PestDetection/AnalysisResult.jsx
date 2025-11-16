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
    <div className="space-y-6" style={{ animation: 'slideUp 0.6s ease-out' }}>
      {/* Main Result Card */}
      <div className={`rounded-xl shadow-xl p-6 border-l-4 ${
        severityColor === 'red'
          ? theme === 'dark' ? 'bg-red-900/20 border-red-500' : 'bg-red-50 border-red-500'
          : severityColor === 'orange'
          ? theme === 'dark' ? 'bg-orange-900/20 border-orange-500' : 'bg-orange-50 border-orange-500'
          : theme === 'dark' ? 'bg-yellow-900/20 border-yellow-500' : 'bg-yellow-50 border-yellow-500'
      }`}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{result.status}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                severityColor === 'red'
                  ? 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300'
                  : severityColor === 'orange'
                  ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300'
                  : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300'
              }`}>
                {result.severity} Severity
              </span>
            </div>
            <h2 className={`text-3xl font-black mb-2 ${
              severityColor === 'red'
                ? 'text-red-600 dark:text-red-400'
                : severityColor === 'orange'
                ? 'text-orange-600 dark:text-orange-400'
                : 'text-yellow-600 dark:text-yellow-400'
            }`}>
              {result.diseaseName}
            </h2>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {result.type} • {result.cropType} • Detected with {result.confidence}% confidence
            </p>
          </div>
        </div>

        {/* Confidence Bar */}
        <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-black/30' : 'bg-white'}`}>
          <p className={`text-xs font-bold uppercase mb-2 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Confidence Level
          </p>
          <div className="flex items-center gap-3">
            <div className={`flex-1 h-3 rounded-full overflow-hidden ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
            }`}>
              <div
                className={`h-full ${
                  severityColor === 'red'
                    ? 'bg-gradient-to-r from-red-400 to-red-600'
                    : severityColor === 'orange'
                    ? 'bg-gradient-to-r from-orange-400 to-orange-600'
                    : 'bg-gradient-to-r from-yellow-400 to-yellow-600'
                }`}
                style={{ width: `${result.confidence}%` }}
              ></div>
            </div>
            <p className={`font-bold text-lg min-w-fit ${
              severityColor === 'red'
                ? 'text-red-600 dark:text-red-400'
                : severityColor === 'orange'
                ? 'text-orange-600 dark:text-orange-400'
                : 'text-yellow-600 dark:text-yellow-400'
            }`}>
              {result.confidence}%
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Analysis Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Validation Metrics */}
        <div className={`rounded-xl shadow-xl p-6 ${
          theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
        }`}>
          <h3 className={`text-lg font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Image Validation
          </h3>
          <div className="space-y-3">
            <div className={`p-3 rounded-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
              <p className={`text-xs font-bold uppercase mb-1 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Validation Confidence
              </p>
              <p className={`text-lg font-black ${
                theme === 'dark' ? 'text-green-400' : 'text-green-600'
              }`}>
                {result.validation.validation_confidence}
              </p>
            </div>
            <div className={`p-3 rounded-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
              <p className={`text-xs font-bold uppercase mb-1 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Criteria Passed
              </p>
              <p className={`text-lg font-black ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {result.validation.criteria_passed}
              </p>
            </div>
            <div className={`p-3 rounded-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
              <p className={`text-xs font-bold uppercase mb-1 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Vegetation Coverage
              </p>
              <p className={`text-lg font-black ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {result.validation.metrics.vegetation_coverage}
              </p>
            </div>
          </div>
        </div>

        {/* Impact Assessment */}
        <div className={`rounded-xl shadow-xl p-6 ${
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
              <p className={`text-lg font-black ${
                severityColor === 'red'
                  ? 'text-red-600 dark:text-red-400'
                  : severityColor === 'orange'
                  ? 'text-orange-600 dark:text-orange-400'
                  : 'text-yellow-600 dark:text-yellow-400'
              }`}>
                {result.severity}
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
              <p className={`text-lg font-black ${
                severityColor === 'red'
                  ? 'text-red-600 dark:text-red-400'
                  : severityColor === 'orange'
                  ? 'text-orange-600 dark:text-orange-400'
                  : 'text-yellow-600 dark:text-yellow-400'
              }`}>
                {result.estimatedYieldLoss}
              </p>
            </div>
            <div className={`p-3 rounded-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
              <p className={`text-xs font-bold uppercase mb-1 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Image Quality
              </p>
              <p className={`text-lg font-black ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {result.validation.metrics.image_sharpness}
              </p>
            </div>
          </div>
        </div>

        {/* Recommended Action */}
        <div className={`rounded-xl shadow-xl p-6 border-l-4 ${
          theme === 'dark'
            ? 'bg-red-900/20 border-red-500'
            : 'bg-red-50 border-red-500'
        }`}>
          <h3 className={`text-lg font-bold mb-3 flex items-center gap-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <span>⚠️</span> Immediate Action Required
          </h3>
          <p className={`text-sm leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {result.recommendedAction}
          </p>
        </div>

        {/* Alternative Predictions */}
        <div className={`rounded-xl shadow-xl p-6 ${
          theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
        }`}>
          <h3 className={`text-lg font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Alternative Predictions
          </h3>
          <div className="space-y-2">
            {result.alternatives.slice(0, 3).map((alt, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className={`text-sm font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {alt.class}
                  </p>
                  <p className={`text-xs font-bold ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {alt.confidence}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preventative Measures */}
        <div className={`rounded-xl shadow-xl p-6 border-l-4 ${
          theme === 'dark'
            ? 'bg-blue-900/20 border-blue-500'
            : 'bg-blue-50 border-blue-500'
        }`}>
          <h3 className={`text-lg font-bold mb-3 flex items-center gap-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <span>🛡️</span> Preventative Measures
          </h3>
          <p className={`text-sm leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {result.preventativeMeasures}
          </p>
        </div>

        {/* Organic Alternatives */}
        <div className={`rounded-xl shadow-xl p-6 border-l-4 ${
          theme === 'dark'
            ? 'bg-green-900/20 border-green-500'
            : 'bg-green-50 border-green-500'
        }`}>
          <h3 className={`text-lg font-bold mb-3 flex items-center gap-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <span>🌱</span> Organic Alternatives
          </h3>
          <p className={`text-sm leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {result.organicAlternatives}
          </p>
        </div>
      </div>

      {/* Action Timeline */}
      <div className={`rounded-xl shadow-xl p-6 ${
        theme === 'dark' ? 'bg-zinc-900' : 'bg-gradient-to-r from-purple-50 to-pink-50'
      }`}>
        <h3 className={`text-lg font-bold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Action Timeline
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className={`p-4 rounded-lg text-center ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <p className="text-2xl font-black text-red-600 mb-1">Now</p>
            <p className={`text-xs ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Isolate affected plants
            </p>
          </div>
          <div className={`p-4 rounded-lg text-center ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <p className="text-2xl font-black text-orange-600 mb-1">24hrs</p>
            <p className={`text-xs ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Apply treatment
            </p>
          </div>
          <div className={`p-4 rounded-lg text-center ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <p className="text-2xl font-black text-green-600 mb-1">7 days</p>
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
