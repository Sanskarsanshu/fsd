import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';

const OrderSuccess = () => {
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 animate-bounce-in">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="inline-block p-6 bg-green-100 rounded-full mb-4 animate-pulse">
            <div className="text-6xl">✓</div>
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-2">Order Placed Successfully!</h1>
          <p className="text-xl text-gray-600">Thank you for your purchase</p>
        </div>

        {/* Order Details */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Order ID</p>
              <p className="text-2xl font-bold text-emerald-600">{orderId}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Amount</p>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(total)}</p>
            </div>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Information</h2>
          <div className="bg-gray-50 rounded-xl p-6 space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Name</p>
                <p className="font-semibold text-gray-900">{formData.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-semibold text-gray-900">{formData.phone}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-semibold text-gray-900">{formData.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Delivery Address</p>
              <p className="font-semibold text-gray-900">
                {formData.address}, {formData.city}, {formData.state} - {formData.pincode}
              </p>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Method</h2>
          <div className="bg-emerald-50 rounded-xl p-6 border-2 border-emerald-500">
            <div className="flex items-center gap-3">
              <span className="text-3xl">💵</span>
              <div>
                <p className="font-bold text-gray-900">Cash on Delivery</p>
                <p className="text-sm text-gray-600">Pay {formatCurrency(total)} when you receive your order</p>
              </div>
            </div>
          </div>
        </div>

        {/* Expected Delivery */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border-l-4 border-blue-500">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🚚</span>
            <div>
              <p className="font-bold text-gray-900">Expected Delivery</p>
              <p className="text-gray-700">Your order will be delivered in 3-5 business days</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handlePrint}
            className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
          >
            🖨️ Print Receipt
          </button>
          <button
            onClick={() => navigate('/shop')}
            className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="flex-1 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-all"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
