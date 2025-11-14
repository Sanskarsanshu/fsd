import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const AISuggestions = ({ suggestions }) => {
  const { theme } = useTheme();
  const [dismissed, setDismissed] = useState([]);
  const visible = suggestions.filter((_, i) => !dismissed.includes(i));

  return (
    <div 
      className={`rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 ${
        theme === 'dark' ? 'bg-zinc-900' : 'bg-gradient-to-br from-purple-50 to-pink-50'
      }`}
      style={{ animation: 'slideUp 0.6s ease-out 0.3s backwards' }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            AI Suggestions
          </h2>
          <p className={`text-xs font-semibold mt-1 ${
            theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
          }`}>
            {visible.length} tips
          </p>
        </div>
        <div className="text-3xl sm:text-4xl">🤖</div>
      </div>

      <div className="space-y-3">
        {visible.map((suggestion, i) => (
          <div
            key={i}
            className={`rounded-xl p-4 border-2 ${
              theme === 'dark'
                ? 'bg-gray-800/50 border-gray-700'
                : 'bg-white/80 border-purple-100'
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{suggestion.icon}</span>
              <p className={`text-sm font-semibold flex-1 ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}>
                {suggestion.text}
              </p>
              <button
                onClick={() => setDismissed([...dismissed, i])}
                className={`w-6 h-6 rounded-lg transition-all ${
                  theme === 'dark'
                    ? 'bg-gray-700 hover:bg-red-600 text-gray-400'
                    : 'bg-gray-200 hover:bg-red-500 text-gray-600 hover:text-white'
                }`}
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AISuggestions;
