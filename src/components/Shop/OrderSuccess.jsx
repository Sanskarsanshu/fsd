import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { formatCurrency } from '../../utils/helpers';

const OrderSuccess = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();
  const location = useLocation();
  const { orderId, formData, total } = location.state || {};

  if (!orderId) {
    navigate('/shop');
    return null;
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-black' : 'bg-gray-50'
    }`}>
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className={`rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 animate-bounce-in ${
          isDark ? 'bg-zinc-900 border border-gray-800' : 'bg-white'
        }`}>
          {/* Success Icon */}
          <div className="text-center mb-6 sm:mb-8">
            <div className={`inline-block p-4 sm:p-6 rounded-full mb-3 sm:mb-4 animate-pulse ${
              isDark ? 'bg-green-900/30' : 'bg-green-100'
            }`}>
              <div className="text-4xl sm:text-5xl lg:text-6xl">✓</div>
            </div>
            <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-black mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Order Placed Successfully!
            </h1>
            <p className={`text-base sm:text-lg lg:text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Thank you for your purchase
            </p>
          </div>

          {/* Order Details */}
          <div className={`rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 ${
            isDark
              ? 'bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-800'
              : 'bg-gradient-to-r from-emerald-50 to-teal-50'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <p className={`text-xs sm:text-sm mb-1 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Order ID
                </p>
                <p className="text-xl sm:text-2xl font-bold text-emerald-600">{orderId}</p>
              </div>
              <div>
                <p className={`text-xs sm:text-sm mb-1 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Total Amount
                </p>
                <p className={`text-xl sm:text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {formatCurrency(total)}
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="mb-6 sm:mb-8">
            <h2 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Delivery Information
            </h2>
            <div className={`rounded-lg sm:rounded-xl p-4 sm:p-6 space-y-3 ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50'
            }`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <p className={`text-xs sm:text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Name
                  </p>
                  <p className={`font-semibold text-sm sm:text-base ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {formData.name}
                  </p>
                </div>
                <div>
                  <p className={`text-xs sm:text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Phone
                  </p>
                  <p className={`font-semibold text-sm sm:text-base ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {formData.phone}
                  </p>
                </div>
              </div>
              <div>
                <p className={`text-xs sm:text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Email
                </p>
                <p className={`font-semibold text-sm sm:text-base ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {formData.email}
                </p>
              </div>
              <div>
                <p className={`text-xs sm:text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Delivery Address
                </p>
                <p className={`font-semibold text-sm sm:text-base ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {formData.address}, {formData.city}, {formData.state} - {formData.pincode}
                </p>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-6 sm:mb-8">
            <h2 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Payment Method
            </h2>
            <div className={`rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 ${
              isDark
                ? 'bg-emerald-900/20 border-emerald-700'
                : 'bg-emerald-50 border-emerald-500'
            }`}>
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl">💵</span>
                <div>
                  <p className={`font-bold text-sm sm:text-base ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Cash on Delivery
                  </p>
                  <p className={`text-xs sm:text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Pay {formatCurrency(total)} when you receive your order
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expected Delivery */}
          <div className={`rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 border-l-4 ${
            isDark
              ? 'bg-blue-900/20 border-blue-700'
              : 'bg-blue-50 border-blue-500'
          }`}>
            <div className="flex items-start gap-3">
              <span className="text-2xl sm:text-3xl">🚚</span>
              <div>
                <p className={`font-bold text-sm sm:text-base ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Expected Delivery
                </p>
                <p className={`text-xs sm:text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-700'
                }`}>
                  Your order will be delivered in 3-5 business days
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={handlePrint}
              className="flex-1 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-xl transition-all text-sm sm:text-base"
            >
              🖨️ Print Receipt
            </button>
            <button
              onClick={() => navigate('/shop')}
              className="flex-1 py-2.5 sm:py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg hover:shadow-xl transition-all text-sm sm:text-base"
            >
              Continue Shopping
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className={`flex-1 py-2.5 sm:py-3 font-bold rounded-lg transition-all text-sm sm:text-base ${
                isDark
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border-2 border-gray-700'
                  : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
