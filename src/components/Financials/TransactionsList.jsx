import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { formatCurrency, formatDate } from '../../utils/helpers';

const TransactionsList = ({ transactions }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? transactions : transactions.filter((t) => t.type === filter);

  return (
    <div className={`${isDark ? 'bg-black border border-gray-800' : 'bg-white'} rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 transition-all duration-300 animate-slideUp`} style={{ animationDelay: '0.3s' }}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 sm:mb-6">
        <h2 className={`text-lg sm:text-xl lg:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Recent Transactions
        </h2>
        <div className="flex gap-2 flex-wrap">
          {['all', 'income', 'expense'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 sm:px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
                filter === f
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : isDark 
                    ? 'bg-gray-900 text-gray-300 hover:bg-gray-800 border border-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="block sm:hidden space-y-3">
        {filtered.map((transaction) => (
          <div
            key={transaction.id}
            className={`${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-gray-50'} rounded-lg p-4 space-y-2`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {transaction.description}
                </p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                  {formatDate(transaction.date)}
                </p>
              </div>
              <p className={`font-bold text-lg ${transaction.type === 'income' ? 'text-emerald-500' : 'text-red-500'}`}>
                {transaction.type === 'income' ? '+' : '-'} {formatCurrency(transaction.amount)}
              </p>
            </div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
              isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
            }`}>
              {transaction.category || transaction.type}
            </span>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`${isDark ? 'border-b-2 border-gray-800' : 'border-b-2 border-gray-200'}`}>
              <th className={`text-left py-3 px-4 font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Description
              </th>
              <th className={`text-left py-3 px-4 font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Category
              </th>
              <th className={`text-left py-3 px-4 font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Date
              </th>
              <th className={`text-right py-3 px-4 font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((transaction) => (
              <tr
                key={transaction.id}
                className={`${isDark ? 'border-b border-gray-800 hover:bg-gray-900' : 'border-b border-gray-100 hover:bg-gray-50'} transition-colors`}
              >
                <td className="py-4 px-4">
                  <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {transaction.description}
                  </p>
                </td>
                <td className="py-4 px-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {transaction.category || transaction.type}
                  </span>
                </td>
                <td className={`py-4 px-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {formatDate(transaction.date)}
                </td>
                <td className={`py-4 px-4 text-right font-bold ${transaction.type === 'income' ? 'text-emerald-500' : 'text-red-500'}`}>
                  {transaction.type === 'income' ? '+' : '-'} {formatCurrency(transaction.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsList;
