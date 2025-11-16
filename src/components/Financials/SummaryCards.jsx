import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { formatCurrency } from '../../utils/helpers';

const SummaryCards = ({ data }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const cards = [
    { 
      title: 'Total Income', 
      value: data.income, 
      colorLight: 'from-emerald-400 to-emerald-600', 
      colorDark: 'from-emerald-500 to-emerald-700',
      icon: '📈' 
    },
    { 
      title: 'Total Expenses', 
      value: data.expenses, 
      colorLight: 'from-red-400 to-red-600', 
      colorDark: 'from-red-500 to-red-700',
      icon: '💸' 
    },
    { 
      title: 'Net Profit', 
      value: data.profit, 
      colorLight: 'from-blue-400 to-blue-600', 
      colorDark: 'from-blue-500 to-blue-700',
      icon: '💰' 
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br ${isDark ? card.colorDark : card.colorLight} rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl p-4 sm:p-6 text-white transform hover:scale-105 transition-all duration-300 animate-slideUp`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-white/90 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                {card.title}
              </p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold break-words">
                {formatCurrency(card.value)}
              </p>
            </div>
            <div className="text-3xl sm:text-4xl opacity-80 ml-2">
              {card.icon}
            </div>
          </div>
          <div className="mt-3 sm:mt-4 h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white w-3/4 transition-all duration-500"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
