import React, { useState } from 'react';
import { MOCK_DATA } from '../../data/mockData';
import SummaryCards from './SummaryCards';
import IncomeExpenseChart from './IncomeExpenseChart';
import ExpenseBreakdown from './ExpenseBreakdown';
import TransactionsList from './TransactionsList';
import LogTransactionModal from './LogTransactionModal';

const Financials = ({ showToast }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Financials Dashboard</h1>
          <p className="text-gray-600 mt-2">Track your farm's financial performance</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
        >
          + Log Transaction
        </button>
      </div>

      {/* Summary Cards */}
      <SummaryCards data={MOCK_DATA.financials.summary} />

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
  );
};

export default Financials;
