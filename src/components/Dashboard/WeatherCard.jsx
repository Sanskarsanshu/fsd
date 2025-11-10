import React from 'react';

const WeatherCard = ({ weather }) => {
  const getWeatherAnimation = (temp) => {
    if (temp > 30) return 'animate-float-slow';
    if (temp > 25) return 'animate-bounce-slow';
    return 'animate-float';
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden card-hover animate-slideUp relative group">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Animated Header Background */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-pulse-glow"></div>

      <div className="relative p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Weather
            </h2>
            <p className="text-sm text-blue-600 font-semibold mt-1">Real-time forecast</p>
          </div>
          <div className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold animate-pulse">
            Live
          </div>
        </div>

        {/* Current Weather */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
          <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-700 text-sm font-bold uppercase tracking-widest mb-2">Current Weather</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-6xl font-black text-blue-900">{weather.current.temp}</p>
                  <p className="text-3xl text-blue-600 mb-2">°C</p>
                </div>
                <p className="text-lg text-gray-700 font-semibold mt-2">{weather.current.condition}</p>
              </div>
              <div className={`text-8xl ${getWeatherAnimation(weather.current.temp)} drop-shadow-lg`}>
                {weather.current.temp > 25 ? '☀️' : '🌤️'}
              </div>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Humidity */}
          <div className="group/item relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-400 rounded-2xl blur-lg opacity-0 group-hover/item:opacity-20 transition-all"></div>
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all transform hover:scale-105">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-blue-700 font-bold uppercase tracking-wider">Humidity</p>
                <span className="text-2xl animate-float">💧</span>
              </div>
              <p className="text-3xl font-black text-blue-700">{weather.current.humidity}%</p>
              <div className="mt-2 h-1 w-full bg-blue-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500"
                  style={{ width: `${weather.current.humidity}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Wind Speed */}
          <div className="group/item relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-cyan-400 rounded-2xl blur-lg opacity-0 group-hover/item:opacity-20 transition-all"></div>
            <div className="relative bg-gradient-to-br from-cyan-50 to-cyan-100 p-5 rounded-2xl border-2 border-cyan-200 hover:border-cyan-400 transition-all transform hover:scale-105">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-cyan-700 font-bold uppercase tracking-wider">Wind Speed</p>
                <span className="text-2xl animate-wave">💨</span>
              </div>
              <p className="text-3xl font-black text-cyan-700">{weather.current.windSpeed}</p>
              <p className="text-xs text-cyan-600 font-semibold mt-1">km/h</p>
            </div>
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div>
          <p className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">5-Day Forecast</p>
          <div className="grid grid-cols-5 gap-2">
            {weather.forecast.map((day, index) => (
              <div
                key={index}
                className="group/day relative"
                style={{
                  animation: `slideUp 0.5s ease-out ${0.1 * index}s both`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-400 rounded-xl blur-lg opacity-0 group-hover/day:opacity-30 transition-all"></div>
                <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl p-3 text-center border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all transform hover:scale-110 cursor-pointer">
                  <p className="text-xs font-bold text-gray-700 mb-2 uppercase">{day.day}</p>
                  <p className="text-3xl mb-2 animate-float" style={{ animationDelay: `${0.2 * index}s` }}>
                    {day.icon}
                  </p>
                  <p className="text-xs font-bold text-gray-700">
                    <span className="text-red-500">{day.high}°</span>
                    <span className="text-gray-400 mx-1">/</span>
                    <span className="text-blue-500">{day.low}°</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Alert */}
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-4 border-l-4 border-blue-500 animate-pulse-glow">
          <p className="text-sm text-blue-900 font-semibold">
            ⚠️ Light rain expected in 6 hours - Consider delaying irrigation
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
