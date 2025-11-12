import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const SchemeCard = ({ scheme, index, onLearnMore }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
        theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
      }`}
      style={{ animation: `slideUp 0.5s ease-out ${index * 0.1}s backwards` }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 sm:p-5 text-white">
        <h3 className="text-base sm:text-lg font-bold mb-1">
          {scheme.title}
        </h3>
        <p className="text-xs sm:text-sm text-white/90">
          {scheme.description}
        </p>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 space-y-3">
        {/* Eligibility */}
        <div>
          <p className={`text-xs font-bold uppercase mb-1 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Eligibility
          </p>
          <p className={`text-sm font-semibold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {scheme.eligibility}
          </p>
        </div>

        {/* Amount */}
        <div className={`rounded-lg p-3 ${
          theme === 'dark' 
            ? 'bg-emerald-900/20 border border-emerald-500/30' 
            : 'bg-emerald-50 border border-emerald-200'
        }`}>
          <p className={`text-xs font-bold uppercase mb-1 ${
            theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
          }`}>
            Amount
          </p>
          <p className="text-lg sm:text-xl font-black text-emerald-600">
            {scheme.amount}
          </p>
        </div>

        {/* Button */}
        <button
          onClick={onLearnMore}
          className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all text-sm"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SchemeCard;
