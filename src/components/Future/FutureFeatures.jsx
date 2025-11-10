import React from 'react';
import { MOCK_DATA } from '../../data/mockData';

const FutureFeatures = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl p-8 text-white shadow-lg">
        <h1 className="text-4xl font-bold mb-2">🚀 Coming Soon</h1>
        <p className="text-white/90">Exciting new features to transform your farming experience</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_DATA.futureAdvancements.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover animate-slideUp"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Header */}
            <div className={`h-2 bg-gradient-to-r ${index === 0 ? 'from-purple-400 to-blue-500' : 'from-emerald-400 to-teal-500'}`}></div>

            <div className="p-8">
              <div className="text-5xl mb-4">{index === 0 ? '🛰️' : '💳'}</div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>

              <div className="space-y-3">
                {feature.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-emerald-500 font-bold">▪</span>
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                Notify Me
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-12 text-white text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6 text-emerald-50">Subscribe to get notified when these features launch</p>
        <div className="flex gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
          />
          <button className="px-6 py-3 bg-white text-emerald-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default FutureFeatures;
