import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const FarmConditions = ({ conditions }) => {
  const { theme } = useTheme();

  return (
    <div 
      className={`rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 lg:p-8 ${
        theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
      }`}
      style={{ animation: 'slideUp 0.6s ease-out 0.1s backwards' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Farm Health
          </h2>
          <p className={`text-xs sm:text-sm font-semibold mt-1 flex items-center gap-2 ${
            theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
          }`}>
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Live Monitoring
          </p>
        </div>
        <div className="text-4xl sm:text-5xl">🌾</div>
      </div>

      {/* Conditions */}
      <div className="space-y-4">
        {conditions.map((condition, i) => (
          <div
            key={i}
            className={`rounded-xl p-4 border-2 transition-all ${
              theme === 'dark'
                ? 'bg-gray-800/50 border-gray-700'
                : 'bg-gray-50 border-gray-200'
            }`}
            style={{ animation: `slideUp 0.5s ease-out ${i * 0.08}s backwards` }}
          >
            <div className="flex items-center justify-between mb-3">
              <p className={`font-bold text-sm ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {condition.name}
              </p>
              <p className="text-xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                {condition.value}%
              </p>
            </div>
            <div className={`h-3 rounded-full overflow-hidden ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
            }`}>
              <div
                className={`h-full bg-gradient-to-r ${condition.color} transition-all duration-500`}
                style={{ width: `${condition.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmConditions;
