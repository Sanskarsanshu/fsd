import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const FutureFeatures = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Features data
  const futureAdvancements = [
    {
      title: 'Satellite Farm Monitoring',
      description: 'Track your farm health from space using advanced satellite imagery',
      details: [
        'Real-time crop health monitoring via satellite',
        'Automated disease and pest detection',
        'Precision irrigation recommendations',
        'Yield prediction with 95% accuracy',
        'Integration with weather forecasting'
      ]
    },
    {
      title: 'Blockchain Marketplace',
      description: 'Secure, transparent trading platform powered by blockchain technology',
      details: [
        'Direct farmer-to-buyer transactions',
        'Smart contracts for guaranteed payments',
        'Transparent pricing and supply chain',
        'Reduced middleman costs by 40%',
        'Crypto payment options available'
      ]
    },
    {
      title: 'AI Voice Assistant',
      description: 'Talk to your farming assistant in your local language',
      details: [
        'Voice commands in 15+ Indian languages',
        'Hands-free farm management',
        'Real-time weather and market updates',
        'Personalized farming advice',
        'Works offline with basic features'
      ]
    },
    {
      title: 'Drone Crop Monitoring',
      description: 'Automated aerial surveillance of your entire farm',
      details: [
        'Daily automated drone flights',
        'High-resolution field mapping',
        'Pest hotspot identification',
        'Fertilizer application guidance',
        'Water stress detection'
      ]
    },
    {
      title: 'Farm Equipment Sharing',
      description: 'Rent or lend farming equipment with nearby farmers',
      details: [
        'Equipment rental marketplace',
        'GPS tracking for rented items',
        'Insurance coverage included',
        'Save 60% on equipment costs',
        'Community rating system'
      ]
    },
    {
      title: 'Crop Insurance Automation',
      description: 'AI-powered instant crop insurance claims',
      details: [
        'Automated damage assessment',
        'Instant claim processing',
        'Satellite-based verification',
        'No paperwork required',
        'Claims settled within 48 hours'
      ]
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const keyframeStyles = `
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  const icons = ['🛰️', '💳', '🎤', '🚁', '🚜', '🛡️'];
  const colors = [
    'from-purple-500 to-blue-500',
    'from-emerald-500 to-teal-500',
    'from-pink-500 to-rose-500',
    'from-orange-500 to-red-500',
    'from-indigo-500 to-purple-500',
    'from-cyan-500 to-blue-500'
  ];

  return (
    <>
      <style>{keyframeStyles}</style>
      <div className={`min-h-screen p-4 sm:p-6 lg:p-8 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50'
      }`}>
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div 
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden"
            style={{ animation: 'slideDown 0.6s ease-out' }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h1 className="text-2xl sm:text-3xl font-black mb-2">
                🚀 Coming Soon
              </h1>
              <p className="text-sm sm:text-base text-white/90">
                Exciting features to transform farming
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div 
            className={`rounded-xl p-4 ${
              theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
            }`}
            style={{ animation: 'slideUp 0.6s ease-out 0.1s backwards' }}
          >
            <div className="flex items-center justify-around text-center">
              <div>
                <p className="text-lg sm:text-xl font-black text-purple-600">Q1 2026</p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Satellite
                </p>
              </div>
              <div className="w-6 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div>
                <p className="text-lg sm:text-xl font-black text-pink-600">Q2 2026</p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Blockchain
                </p>
              </div>
              <div className="w-6 h-0.5 bg-gradient-to-r from-pink-500 to-red-500"></div>
              <div>
                <p className="text-lg sm:text-xl font-black text-red-600">Q3 2026</p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  More...
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {futureAdvancements.map((feature, index) => (
              <div
                key={index}
                className={`rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
                }`}
                style={{ animation: `slideUp 0.5s ease-out ${index * 0.1}s backwards` }}
              >
                {/* Color Header */}
                <div className={`h-1.5 bg-gradient-to-r ${colors[index]}`}></div>

                <div className="p-4 sm:p-5">
                  {/* Icon */}
                  <div className="text-3xl sm:text-4xl mb-3">
                    {icons[index]}
                  </div>

                  {/* Title & Description */}
                  <h3 className={`text-base sm:text-lg font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-xs sm:text-sm mb-4 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {feature.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    {feature.details.slice(0, 3).map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-500 text-sm mt-0.5">✓</span>
                        <span className={`text-xs ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {detail}
                        </span>
                      </div>
                    ))}
                    {feature.details.length > 3 && (
                      <p className={`text-xs italic ${
                        theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                      }`}>
                        +{feature.details.length - 3} more features
                      </p>
                    )}
                  </div>

                  {/* Status Badge */}
                  <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-bold mb-3 ${
                    theme === 'dark'
                      ? 'bg-yellow-900/30 text-yellow-400'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></span>
                    In Development
                  </div>

                  {/* Notify Button */}
                  <button className={`w-full py-2 font-semibold rounded-lg transition-all text-xs sm:text-sm ${
                    theme === 'dark'
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    🔔 Notify Me
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div 
            className={`rounded-xl shadow-xl p-4 sm:p-6 ${
              theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
            }`}
            style={{ animation: 'slideUp 0.6s ease-out 0.3s backwards' }}
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xl sm:text-2xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  6+
                </p>
                <p className={`text-xs font-semibold ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  New Features
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  2026
                </p>
                <p className={`text-xs font-semibold ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Launch Year
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  100%
                </p>
                <p className={`text-xs font-semibold ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Free
                </p>
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <div 
            className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white text-center shadow-2xl relative overflow-hidden"
            style={{ animation: 'slideUp 0.6s ease-out 0.4s backwards' }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl font-black mb-2">
                Stay Updated
              </h2>
              <p className="mb-4 sm:mb-6 text-sm text-white/90">
                Get notified when features launch
              </p>
              
              {subscribed ? (
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto">
                  <p className="text-base sm:text-lg font-bold">✓ Subscribed Successfully!</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-4 py-2.5 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white text-sm"
                  />
                  <button 
                    type="submit"
                    className="px-5 py-2.5 bg-white text-emerald-600 font-bold rounded-lg hover:bg-gray-100 transition-all text-sm"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FutureFeatures;
