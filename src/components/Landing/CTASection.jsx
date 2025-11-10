import React from 'react';

const CTASection = ({ onGetStarted }) => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-2xl animate-slideUp">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float-slow"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Ready to Transform Your Farming?
            </h2>
            <p className="text-xl text-emerald-50 max-w-2xl mx-auto">
              Join thousands of farmers using Krishi Sakhi to increase yield and profitability
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onGetStarted}
              className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started Free
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
              Watch Demo
            </button>
          </div>

          {/* Features list */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-white text-sm font-semibold">
            <div className="flex items-center gap-2">
              <span>✓</span> Free for 30 days
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span> No credit card required
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span> 24/7 support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
