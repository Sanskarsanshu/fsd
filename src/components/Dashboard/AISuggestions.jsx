import React, { useState } from 'react';

const AISuggestions = ({ suggestions }) => {
  const [dismissedSuggestions, setDismissedSuggestions] = useState([]);

  const toggleDismiss = (index) => {
    setDismissedSuggestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const visibleSuggestions = suggestions.filter(
    (_, index) => !dismissedSuggestions.includes(index)
  );

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-3xl shadow-2xl p-8 card-hover animate-slideUp overflow-hidden relative group" style={{ animationDelay: '0.2s' }}>
      {/* Animated Background Elements */}
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-purple-300/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-pink-300/10 rounded-full blur-3xl animate-float-slow"></div>

      {/* Animated Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse-glow"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI Suggestions
            </h2>
            <p className="text-sm text-purple-600 font-semibold mt-1">
              {visibleSuggestions.length} recommendations for you
            </p>
          </div>
          <div className="text-5xl animate-bounce-in">🤖</div>
        </div>

        {/* Suggestions Grid */}
        <div className="space-y-4 mb-6">
          {visibleSuggestions.map((suggestion, index) => (
            <div
              key={index}
              className="group/suggestion relative overflow-hidden"
              style={{
                animation: `slideUp 0.5s ease-out ${0.1 * index}s both`,
              }}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-pink-300 rounded-2xl blur-lg opacity-0 group-hover/suggestion:opacity-20 transition-all"></div>

              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 border-2 border-purple-100 hover:border-purple-300 transition-all transform hover:scale-102 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 text-3xl animate-float" style={{ animationDelay: `${0.2 * index}s` }}>
                    {suggestion.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-gray-800 font-semibold leading-relaxed">
                      {suggestion.text}
                    </p>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => toggleDismiss(index)}
                    className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-200 hover:bg-red-500 text-gray-600 hover:text-white transition-all flex items-center justify-center transform hover:scale-110 font-bold text-lg"
                  >
                    ×
                  </button>
                </div>

                {/* Animated Bottom Line */}
                <div className="mt-3 h-0.5 w-full bg-gradient-to-r from-purple-300 via-pink-300 to-transparent rounded-full"></div>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {visibleSuggestions.length === 0 && (
            <div className="text-center py-8 animate-slideUp">
              <div className="text-5xl mb-4 animate-bounce-in">✨</div>
              <p className="text-gray-600 font-semibold">No active suggestions</p>
              <p className="text-sm text-gray-500 mt-1">You're all caught up!</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        {visibleSuggestions.length > 0 && (
          <div className="flex gap-3">
            <button className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg transition-all transform hover:scale-105">
              💡 View All
            </button>
            <button
              onClick={() => setDismissedSuggestions([])}
              className="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition-all"
            >
              🔄 Restore
            </button>
          </div>
        )}

        {/* AI Badge */}
        <div className="mt-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-4 border-l-4 border-purple-500 animate-pulse-glow">
          <p className="text-sm text-purple-900 font-semibold">
            🎯 Powered by AI - These recommendations are based on your farm data and weather patterns
          </p>
        </div>
      </div>
    </div>
  );
};

export default AISuggestions;
