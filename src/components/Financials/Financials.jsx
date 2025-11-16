import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { MOCK_DATA } from '../../data/mockData';
import SummaryCards from './SummaryCards';
import IncomeExpenseChart from './IncomeExpenseChart';
import ExpenseBreakdown from './ExpenseBreakdown';
import TransactionsList from './TransactionsList';
import LogTransactionModal from './LogTransactionModal';

const Financials = ({ showToast }) => {
  const { theme } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2`}>
              Financials Dashboard
            </h1>
            <p className={`mt-1 sm:mt-2 text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Track your farm's financial performance
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all w-full sm:w-auto text-sm sm:text-base shadow-lg hover:shadow-xl"
          >
            + Log Transaction
          </button>
        </div>

        {/* Summary Cards */}
        <SummaryCards data={MOCK_DATA.financials.summary} />

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-2">
            <IncomeExpenseChart data={MOCK_DATA.financials.chartData} />
          </div>
          <div>
            <ExpenseBreakdown data={MOCK_DATA.financials.expenseBreakdown} />
          </div>
        </div>

        {/* Transactions */}
        <TransactionsList transactions={MOCK_DATA.financials.transactions} />

        {/* Modal */}
        <LogTransactionModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={(data) => {
            showToast('Transaction logged successfully');
            setShowModal(false);
          }}
        />
      </div>
    </div>
  );
};

export default Financials;
