import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-96 h-96 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-white/10 rounded-full animate-bounce-slow"></div>
      </div>

      {/* Loader content */}
      <div className="relative z-10 text-center space-y-6">
        {/* Logo */}
        <div className="text-6xl font-black text-white drop-shadow-lg animate-float">
          🌾
        </div>

        {/* Text */}
        <div className="space-y-2">
          <h1 className="text-5xl font-black text-white drop-shadow-lg">
            Krishi Sakhi
          </h1>
          <p className="text-xl text-emerald-50 font-medium animate-pulse">
            Your AI Farming Assistant
          </p>
        </div>

        {/* Spinner */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>

        {/* Loading text */}
        <p className="text-emerald-50 text-sm font-medium">
          Preparing your dashboard...
        </p>
      </div>

      {/* Bottom floating elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-white/10 rounded-lg transform rotate-45 animate-float" style={{ animationDelay: '0.2s' }}></div>
      <div className="absolute top-1/4 right-10 w-16 h-16 bg-white/5 rounded-lg transform -rotate-12 animate-float" style={{ animationDelay: '0.4s' }}></div>
    </div>
  );
};

export default Loader;
