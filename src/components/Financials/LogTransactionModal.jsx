import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Modal from '../Shared/Modal';

const LogTransactionModal = ({ isOpen, onClose, onSubmit }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const [formData, setFormData] = useState({
    type: 'income',
    description: '',
    amount: '',
    category: 'Sales',
    date: new Date().toISOString().split('T')[0],
  });

  const expenseCategories = ['Fertilizers', 'Seeds', 'Labor', 'Equipment', 'Water', 'Pesticides', 'Other'];
  const incomeCategories = ['Sales', 'Subsidy', 'Grant', 'Other'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      type: 'income',
      description: '',
      amount: '',
      category: 'Sales',
      date: new Date().toISOString().split('T')[0],
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Log Transaction" size="md">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Type */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Type
          </label>
          <div className="flex gap-4">
            {['income', 'expense'].map((t) => (
              <label key={t} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value={t}
                  checked={formData.type === t}
                  onChange={handleChange}
                  className="w-4 h-4 accent-emerald-500"
                />
                <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Description
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            className={`w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-emerald-200 transition-all ${
              isDark 
                ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-emerald-500'
            }`}
            required
          />
        </div>

        {/* Amount */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Amount (₹)
          </label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="0"
            className={`w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-emerald-200 transition-all ${
              isDark 
                ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-emerald-500'
            }`}
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-emerald-200 transition-all ${
              isDark 
                ? 'bg-gray-900 border-gray-700 text-white focus:border-emerald-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-emerald-500'
            }`}
          >
            {(formData.type === 'expense' ? expenseCategories : incomeCategories).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-emerald-200 transition-all ${
              isDark 
                ? 'bg-gray-900 border-gray-700 text-white focus:border-emerald-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-emerald-500'
            }`}
            required
          />
        </div>

        {/* Buttons */}
        <div className={`flex gap-3 sm:gap-4 pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <button
            type="button"
            onClick={onClose}
            className={`flex-1 px-4 py-2.5 font-semibold rounded-lg transition-all ${
              isDark 
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-4 py-2.5 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-all shadow-lg hover:shadow-xl"
          >
            Log Transaction
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default LogTransactionModal;
