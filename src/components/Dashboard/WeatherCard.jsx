import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const WeatherCard = ({ weather }) => {
  const { theme } = useTheme();

  return (
    <div 
      className={`rounded-xl sm:rounded-2xl shadow-xl overflow-hidden transition-all ${
        theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
      }`}
      style={{ animation: 'slideUp 0.6s ease-out' }}
    >
      <div className="p-5 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Weather
            </h2>
            <p className={`text-xs sm:text-sm font-semibold mt-1 ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`}>
              Real-time forecast
            </p>
          </div>
          <div className={`text-xs px-3 py-1 rounded-full font-bold ${
            theme === 'dark' ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-100 text-blue-700'
          }`}>
            Live
          </div>
        </div>

        {/* Current Weather */}
        <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 ${
          theme === 'dark' 
            ? 'bg-blue-900/20 border-blue-800' 
            : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100'
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-xs font-bold uppercase mb-2 ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
              }`}>
                Current
              </p>
              <div className="flex items-baseline gap-2">
                <p className={`text-4xl sm:text-5xl lg:text-6xl font-black ${
                  theme === 'dark' ? 'text-white' : 'text-blue-900'
                }`}>
                  {weather.current.temp}
                </p>
                <p className={`text-xl sm:text-2xl ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  °C
                </p>
              </div>
              <p className={`text-sm font-semibold mt-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {weather.current.condition}
              </p>
            </div>
            <div className="text-5xl sm:text-6xl">☀️</div>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className={`rounded-xl p-4 border-2 ${
            theme === 'dark'
              ? 'bg-blue-900/20 border-blue-800'
              : 'bg-blue-50 border-blue-200'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <p className={`text-xs font-bold uppercase ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
              }`}>
                Humidity
              </p>
              <span className="text-xl">💧</span>
            </div>
            <p className={`text-2xl font-black ${
              theme === 'dark' ? 'text-white' : 'text-blue-700'
            }`}>
              {weather.current.humidity}%
            </p>
          </div>

          <div className={`rounded-xl p-4 border-2 ${
            theme === 'dark'
              ? 'bg-cyan-900/20 border-cyan-800'
              : 'bg-cyan-50 border-cyan-200'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <p className={`text-xs font-bold uppercase ${
                theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'
              }`}>
                Wind
              </p>
              <span className="text-xl">💨</span>
            </div>
            <p className={`text-2xl font-black ${
              theme === 'dark' ? 'text-white' : 'text-cyan-700'
            }`}>
              {weather.current.windSpeed}
            </p>
          </div>
        </div>

        {/* Forecast */}
        <div>
          <p className={`text-xs font-bold uppercase mb-3 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
          }`}>
            5-Day Forecast
          </p>
          <div className="grid grid-cols-5 gap-2">
            {weather.forecast.map((day, i) => (
              <div
                key={i}
                className={`rounded-lg p-2 text-center border-2 transition-all hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <p className={`text-[10px] font-bold mb-1 uppercase ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                }`}>
                  {day.day}
                </p>
                <p className="text-2xl mb-1">{day.icon}</p>
                <p className="text-[10px] font-bold">
                  <span className="text-red-500">{day.high}°</span>/
                  <span className="text-blue-500">{day.low}°</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
