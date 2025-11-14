import React from 'react';
import { formatCurrency } from '../../utils/helpers';

const SummaryCards = ({ data }) => {
  const cards = [
    { title: 'Total Income', value: data.income, color: 'from-emerald-400 to-emerald-600', icon: '📈' },
    { title: 'Total Expenses', value: data.expenses, color: 'from-red-400 to-red-600', icon: '💸' },
    { title: 'Net Profit', value: data.profit, color: 'from-blue-400 to-blue-600', icon: '💰' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-gradient-to-br rounded-2xl shadow-lg p-6 text-white card-hover animate-slideUp"
          style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm font-medium mb-2">{card.title}</p>
              <p className="text-3xl font-bold">{formatCurrency(card.value)}</p>
            </div>
            <div className="text-4xl opacity-80">{card.icon}</div>
          </div>
          <div className="mt-4 h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white w-3/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
