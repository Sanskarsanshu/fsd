import React from 'react';

const MarketPrices = ({ prices }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 card-hover animate-slideUp overflow-hidden relative group" style={{ animationDelay: '0.1s' }}>
      {/* Decorative Background */}
      <div className="absolute -right-20 top-10 w-40 h-40 bg-emerald-200/10 rounded-full blur-3xl animate-float-slow"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Market Prices
            </h2>
            <p className="text-sm text-emerald-600 font-semibold mt-1">Real-time mandi rates</p>
          </div>
          <div className="text-5xl animate-bounce-in">💰</div>
        </div>

        {/* Price List */}
        <div className="space-y-3">
          {prices.map((item, index) => (
            <div
              key={index}
              className="group/price relative"
              style={{
                animation: `slideUp 0.5s ease-out ${0.08 * index}s both`,
              }}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-2xl blur-lg opacity-0 group-hover/price:opacity-20 transition-all"></div>

              {/* Card */}
              <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 hover:from-emerald-50 hover:to-teal-50 rounded-2xl p-5 border-2 border-gray-200 hover:border-emerald-300 transition-all transform hover:scale-102 hover:shadow-lg cursor-pointer">
                <div className="flex items-center justify-between">
                  {/* Left Side */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl animate-float" style={{ animationDelay: `${0.2 * index}s` }}>
                        🌾
                      </span>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">{item.name}</p>
                        <p className="text-sm text-gray-600">Updated 5 mins ago</p>
                      </div>
                    </div>
                  </div>

                  {/* Middle - Price */}
                  <div className="text-center mx-4">
                    <p className="text-2xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      {item.price}
                    </p>
                  </div>

                  {/* Right - Trend */}
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg font-bold text-sm transition-all ${
                        item.trend === 'up'
                          ? 'bg-green-100 text-green-700 animate-pulse-glow'
                          : item.trend === 'down'
                          ? 'bg-red-100 text-red-700 animate-pulse-glow'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span className="text-xl animate-heartbeat">
                        {item.trend === 'up' ? '📈' : item.trend === 'down' ? '📉' : '→'}
                      </span>
                      <span>{item.change}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Line */}
                <div className="mt-3 h-0.5 w-full bg-gradient-to-r from-gray-300 to-transparent rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button className="w-full mt-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl hover:from-emerald-600 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-lg group flex items-center justify-center gap-2">
          <span>View All Prices</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>

        {/* Market Info */}
        <div className="mt-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-4 border-l-4 border-emerald-500 animate-pulse-glow">
          <p className="text-sm text-emerald-900 font-semibold">
            📍 Prices from nearest Mandi - Last updated 5 minutes ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketPrices;
