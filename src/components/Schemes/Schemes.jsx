import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { MOCK_DATA } from '../../data/mockData';
import SchemeCard from './SchemeCard';
import SchemeModal from './SchemeModal';

const Schemes = () => {
  const { theme } = useTheme();
  const [selectedScheme, setSelectedScheme] = useState(null);

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

  return (
    <>
      <style>{keyframeStyles}</style>
      <div className={`min-h-screen p-4 sm:p-6 lg:p-8 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50'
      }`}>
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div 
            className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-xl"
            style={{ animation: 'slideDown 0.6s ease-out' }}
          >
            <h1 className="text-2xl sm:text-3xl font-black mb-2">
              Government Schemes
            </h1>
            <p className="text-sm sm:text-base text-white/90">
              Access subsidies and support programs for farmers
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Easy Application', desc: 'Simple process', color: 'blue' },
              { title: 'Direct Benefits', desc: 'Money to bank', color: 'emerald' },
              { title: 'Quick Approval', desc: 'Fast processing', color: 'purple' },
            ].map((info, i) => (
              <div
                key={i}
                className={`rounded-lg p-4 border-l-4 border-${info.color}-500 ${
                  theme === 'dark' 
                    ? `bg-${info.color}-900/20` 
                    : `bg-${info.color}-50`
                }`}
                style={{ animation: `slideUp 0.6s ease-out ${i * 0.1}s backwards` }}
              >
                <p className={`font-bold text-sm sm:text-base mb-1 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {info.title}
                </p>
                <p className={`text-xs ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {info.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Schemes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {MOCK_DATA.schemes.map((scheme, index) => (
              <SchemeCard
                key={scheme.id}
                scheme={scheme}
                index={index}
                onLearnMore={() => setSelectedScheme(scheme)}
              />
            ))}
          </div>
        </div>

        {/* Modal */}
        <SchemeModal
          scheme={selectedScheme}
          onClose={() => setSelectedScheme(null)}
        />
      </div>
    </>
  );
};

export default Schemes;
