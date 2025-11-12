import React from 'react';

const HeroSection = ({ onNavigate, theme }) => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 animate-slideLeft">
          <div className="space-y-4">
            <h1 className={`text-5xl md:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Smart Farming with{' '}
              <span className="gradient-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                AI-Powered
              </span>{' '}
              Insights
            </h1>
            <p className={`text-xl leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Maximize your crop yield, minimize losses, and connect with buyers.
              Your personal AI farming assistant is here to transform your agriculture journey.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <button
              onClick={() => onNavigate('/register')}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
            </button>
            <button
              onClick={() => onNavigate('/login')}
              className={`px-8 py-4 border-2 font-bold rounded-lg transition-all ${
                theme === 'dark'
                  ? 'border-emerald-400 text-emerald-400 hover:bg-emerald-400/10'
                  : 'border-emerald-500 text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              Login to Account
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <div>
              <p className="text-3xl font-bold gradient-text bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                50K+
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Active Farmers
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                156
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Verified Buyers
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                ₹45L+
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Transaction Value
              </p>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative h-96 lg:h-full flex items-center justify-center animate-float">
          <div className={`absolute inset-0 rounded-3xl blur-3xl ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10' 
              : 'bg-gradient-to-br from-emerald-300/20 to-teal-300/20'
          }`}></div>
          <div className="relative text-center space-y-8">
            <div className="text-8xl mb-8 animate-bounce-in">🌾</div>
            <div className="space-y-6 text-5xl">
              <div className="animate-float" style={{ animationDelay: '0s' }}>
                🌱
              </div>
              <div className="animate-float" style={{ animationDelay: '0.5s' }}>
                🚜
              </div>
              <div className="animate-float" style={{ animationDelay: '1s' }}>
                🌻
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
