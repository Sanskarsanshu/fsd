import React from 'react';

const YieldPrediction = ({ yield: yieldData }) => {
  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl shadow-2xl p-8 card-hover animate-slideUp relative overflow-hidden group" style={{ animationDelay: '0.2s' }}>
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-orange-400/0 group-hover:from-amber-400/5 group-hover:to-orange-400/5 transition-all duration-300"></div>
      
      {/* Decorative Elements */}
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-amber-300/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-orange-300/10 rounded-full blur-2xl animate-float-slow"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black text-gray-900 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Yield Prediction
            </h2>
            <p className="text-sm text-amber-700 mt-1">AI-powered forecast</p>
          </div>
          <div className="text-5xl animate-bounce-in">🌾</div>
        </div>

        <div className="space-y-5">
          {/* Expected Crop */}
          <div className="group/item relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-orange-200 rounded-2xl blur-xl opacity-0 group-hover/item:opacity-50 transition-all duration-300"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 border-2 border-amber-100 hover:border-amber-300 transition-all duration-300 transform hover:scale-102">
              <p className="text-amber-700 text-xs font-bold uppercase tracking-widest mb-2">Expected Crop</p>
              <p className="text-4xl font-black bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                {yieldData.crop}
              </p>
              <div className="mt-3 h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow"></div>
            </div>
          </div>

          {/* Predicted Yield */}
          <div className="group/item relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-2xl blur-xl opacity-0 group-hover/item:opacity-50 transition-all duration-300"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 transform hover:scale-102">
              <p className="text-emerald-700 text-xs font-bold uppercase tracking-widest mb-2">Predicted Yield</p>
              <div className="flex items-center gap-3">
                <p className="text-4xl font-black text-emerald-600">{yieldData.predicted}</p>
                <div className="text-3xl animate-heartbeat">📈</div>
              </div>
            </div>
          </div>

          {/* Confidence Level */}
          <div className="group/item relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-2xl blur-xl opacity-0 group-hover/item:opacity-50 transition-all duration-300"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-blue-700 text-xs font-bold uppercase tracking-widest mb-1">Confidence Level</p>
                  <p className="text-3xl font-black text-blue-600">{yieldData.confidence}%</p>
                </div>
                <div className="text-4xl animate-spin-slow">🎯</div>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="relative h-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full overflow-hidden border border-blue-200">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 rounded-full transition-all duration-1000 relative overflow-hidden"
                  style={{ 
                    width: `${yieldData.confidence}%`,
                    boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)'
                  }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-shimmer"></div>
                </div>
              </div>
              <div className="mt-2 flex justify-between text-xs text-gray-600">
                <span>0%</span>
                <span className="font-bold text-blue-600">{yieldData.confidence}% Accurate</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="mt-6 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-4 border-l-4 border-amber-500 animate-slideUp">
          <p className="text-sm text-amber-900 font-semibold">
            💡 Based on current weather, soil conditions, and historical data
          </p>
        </div>
      </div>
    </div>
  );
};

export default YieldPrediction;
