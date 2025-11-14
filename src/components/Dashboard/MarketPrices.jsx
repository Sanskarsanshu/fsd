import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const MarketPrices = ({ prices }) => {
  const { theme } = useTheme();

  return (
    <div 
      className={`rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 lg:p-8 ${
        theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
      }`}
      style={{ animation: 'slideUp 0.6s ease-out 0.2s backwards' }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Market Prices
          </h2>
          <p className={`text-xs sm:text-sm font-semibold mt-1 ${
            theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
          }`}>
            Real-time rates
          </p>
        </div>
        <div className="text-4xl sm:text-5xl">💰</div>
      </div>

      <div className="space-y-3">
        {prices.map((item, i) => (
          <div
            key={i}
            className={`rounded-xl p-4 border-2 transition-all ${
              theme === 'dark'
                ? 'bg-gray-800/50 border-gray-700'
                : 'bg-gray-50 border-gray-200'
            }`}
            style={{ animation: `slideUp 0.5s ease-out ${i * 0.08}s backwards` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌾</span>
                <div>
                  <p className={`font-bold text-sm ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.name}
                  </p>
                  <p className={`text-xs ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                  }`}>
                    5 mins ago
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  {item.price}
                </p>
                <div className={`text-xs font-bold px-2 py-0.5 rounded ${
                  item.trend === 'up'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {item.trend === 'up' ? '↑' : '↓'} {item.change}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketPrices;
