import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const LowConfidenceResult = ({ data }) => {
  const { theme } = useTheme();

  return (
    <div className="space-y-6" style={{ animation: 'slideUp 0.6s ease-out' }}>
      {/* Warning Card */}
      <div className={`rounded-xl shadow-xl p-6 border-l-4 ${
        theme === 'dark'
          ? 'bg-orange-900/20 border-orange-500'
          : 'bg-orange-50 border-orange-500'
      }`}>
        <div className="flex items-start gap-4">
          <div className="text-4xl">⚠️</div>
          <div className="flex-1">
            <h2 className={`text-2xl font-bold mb-2 ${
              theme === 'dark' ? 'text-orange-400' : 'text-orange-700'
            }`}>
              Low Confidence Detection
            </h2>
            <p className={`text-base mb-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {data.message}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-3 rounded-lg ${
                theme === 'dark' ? 'bg-black/30' : 'bg-white'
              }`}>
                <p className={`text-xs font-bold uppercase mb-1 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Current Confidence
                </p>
                <p className={`text-xl font-black ${
                  theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                }`}>
                  {data.confidence}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${
                theme === 'dark' ? 'bg-black/30' : 'bg-white'
              }`}>
                <p className={`text-xs font-bold uppercase mb-1 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Required Threshold
                </p>
                <p className={`text-xl font-black ${
                  theme === 'dark' ? 'text-green-400' : 'text-green-600'
                }`}>
                  {data.threshold_required}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Top 3 Guesses */}
        <div className={`rounded-xl shadow-xl p-6 ${
          theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
        }`}>
          <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <span>🔍</span> Top 3 Possible Matches
          </h3>
          <div className="space-y-3">
            {data.top_3_guesses.map((guess, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg border-l-4 ${
                  idx === 0 
                    ? theme === 'dark'
                      ? 'bg-orange-900/20 border-orange-500'
                      : 'bg-orange-50 border-orange-500'
                    : theme === 'dark'
                    ? 'bg-gray-800 border-gray-600'
                    : 'bg-gray-50 border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className={`font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    #{idx + 1} {guess.class}
                  </p>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    idx === 0
                      ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300'
                      : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                  }`}>
                    {guess.confidence}
                  </span>
                </div>
                <div className={`h-2 rounded-full overflow-hidden ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div
                    className={`h-full ${
                      idx === 0
                        ? 'bg-gradient-to-r from-orange-400 to-orange-600'
                        : 'bg-gradient-to-r from-gray-400 to-gray-600'
                    }`}
                    style={{ width: guess.confidence }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Possible Reasons */}
        <div className={`rounded-xl shadow-xl p-6 ${
          theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
        }`}>
          <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <span>💡</span> Possible Reasons
          </h3>
          <ul className="space-y-2">
            {data.possible_reasons.map((reason, idx) => (
              <li
                key={idx}
                className={`flex items-start gap-2 p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <span className="text-orange-500 mt-0.5">•</span>
                <span className={`text-sm ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {reason}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Validation Info */}
        <div className={`rounded-xl shadow-xl p-6 border-l-4 ${
          theme === 'dark'
            ? 'bg-green-900/20 border-green-500'
            : 'bg-green-50 border-green-500'
        }`}>
          <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <span>✅</span> Image Validation Passed
          </h3>
          <div className="space-y-2">
            <div className={`p-3 rounded-lg ${
              theme === 'dark' ? 'bg-black/30' : 'bg-white'
            }`}>
              <p className={`text-xs font-bold uppercase mb-1 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Validation Confidence
              </p>
              <p className={`text-lg font-black ${
                theme === 'dark' ? 'text-green-400' : 'text-green-600'
              }`}>
                {data.validation_passed.validation_confidence}
              </p>
            </div>
            <div className={`p-3 rounded-lg ${
              theme === 'dark' ? 'bg-black/30' : 'bg-white'
            }`}>
              <p className={`text-xs font-bold uppercase mb-1 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Criteria Passed
              </p>
              <p className={`text-lg font-black ${
                theme === 'dark' ? 'text-green-400' : 'text-green-600'
              }`}>
                {data.validation_passed.criteria_passed}
              </p>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className={`rounded-xl shadow-xl p-6 border-l-4 ${
          theme === 'dark'
            ? 'bg-blue-900/20 border-blue-500'
            : 'bg-blue-50 border-blue-500'
        }`}>
          <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <span>📸</span> Recommendations
          </h3>
          <ul className="space-y-2">
            <li className={`flex items-start gap-2 text-sm ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <span className="text-blue-500">•</span>
              Take a clearer, well-lit photo
            </li>
            <li className={`flex items-start gap-2 text-sm ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <span className="text-blue-500">•</span>
              Focus on the affected area
            </li>
            <li className={`flex items-start gap-2 text-sm ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <span className="text-blue-500">•</span>
              Ensure symptoms are clearly visible
            </li>
            <li className={`flex items-start gap-2 text-sm ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <span className="text-blue-500">•</span>
              Try uploading multiple angles
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LowConfidenceResult;
