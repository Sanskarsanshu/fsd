import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { MOCK_DATA } from '../../data/mockData';
import WeatherCard from './WeatherCard';
import FarmConditions from './FarmConditions';
import MarketPrices from './MarketPrices';
import AISuggestions from './AISuggestions';

const Dashboard = ({ onShowToast }) => {
  const { theme } = useTheme();
  const hasShownToast = useRef(false);

  useEffect(() => {
    // Only show toast once when component mounts
    if (!hasShownToast.current && onShowToast) {
      onShowToast('Welcome to your Farm Dashboard! 🌾', 'success');
      hasShownToast.current = true;
    }
  }, []); // Empty dependency array - runs only once

  const stats = [
    { icon: '🌾', title: 'Active Fields', value: '5', gradient: 'from-emerald-500 to-teal-500', percent: 80 },
    { icon: '📊', title: 'Total Yield', value: '250 kg', gradient: 'from-blue-500 to-cyan-500', percent: 65 },
    { icon: '💰', title: 'Revenue', value: '₹45,000', gradient: 'from-green-500 to-emerald-500', percent: 90 },
    { icon: '⚠️', title: 'Alerts', value: '2 new', gradient: 'from-red-500 to-orange-500', percent: 40 },
  ];

  const keyframeStyles = `
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes shimmer {
      from { background-position: -200% center; }
      to { background-position: 200% center; }
    }
  `;

  return (
    <>
      <style>{keyframeStyles}</style>
      <div className={`min-h-screen p-4 sm:p-6 lg:p-8 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50'
      }`}>
        {/* Header */}
        <div 
          className="mb-6 sm:mb-8" 
          style={{ animation: 'slideDown 0.6s ease-out' }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2">
            Dashboard
          </h1>
          <p className={`text-sm sm:text-base font-semibold ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Farm management overview
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                theme === 'dark'
                  ? 'bg-zinc-900 border-gray-800 hover:border-emerald-500'
                  : 'bg-white border-gray-200 hover:border-emerald-300'
              }`}
              style={{ animation: `slideUp 0.5s ease-out ${i * 0.1}s backwards` }}
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.gradient} mb-3`}>
                <span className="text-xl sm:text-2xl">{stat.icon}</span>
              </div>
              <h3 className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 sm:mb-2 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.title}
              </h3>
              <p className={`text-xl sm:text-2xl lg:text-3xl font-black mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {stat.value}
              </p>
              <div className={`h-1 sm:h-1.5 w-full rounded-full overflow-hidden ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
              }`}>
                <div
                  className={`h-full bg-gradient-to-r ${stat.gradient} transition-all duration-1000`}
                  style={{ width: `${stat.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <WeatherCard weather={MOCK_DATA.weather} />
            <FarmConditions conditions={MOCK_DATA.farmConditions} />
            <MarketPrices prices={MOCK_DATA.marketPrices} />
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-4 sm:space-y-6">
            <AISuggestions suggestions={MOCK_DATA.aiSuggestions} />
            
            {/* Quick Actions */}
            <div 
              className={`rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-xl ${
                theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
              }`}
              style={{ animation: 'slideUp 0.6s ease-out 0.4s backwards' }}
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className={`text-lg sm:text-xl font-black ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Quick Actions
                </h2>
                <span className="text-2xl sm:text-3xl">⚡</span>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { icon: '🌾', label: 'Add Field', gradient: 'from-emerald-500 to-teal-600' },
                  { icon: '📸', label: 'Scan Pest', gradient: 'from-blue-500 to-cyan-600' },
                  { icon: '📊', label: 'View Report', gradient: 'from-purple-500 to-pink-600' },
                ].map((action, i) => (
                  <button
                    key={i}
                    className={`w-full px-4 py-3 bg-gradient-to-r ${action.gradient} text-white rounded-lg sm:rounded-xl hover:shadow-lg transition-all transform hover:scale-105 font-semibold text-sm sm:text-base flex items-center justify-center gap-2`}
                  >
                    <span className="text-lg sm:text-xl">{action.icon}</span>
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
