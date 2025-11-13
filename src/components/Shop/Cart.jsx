import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import useCartStore from '../../store/cartStore';
import CartItem from './CartItem';
import { formatCurrency } from '../../utils/helpers';

const Cart = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { items, getTotal, clearCart } = useCartStore();
  const total = getTotal();

  if (items.length === 0) {
    return (
      <div className={`min-h-screen p-4 sm:p-6 lg:p-8 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 py-16">
            <div className="text-6xl sm:text-8xl">🛒</div>
            <h2 className={`text-2xl sm:text-3xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Your cart is empty
            </h2>
            <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
              Add some products to get started!
            </p>
            <button
              onClick={() => navigate('/shop')}
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg hover:shadow-lg transition-all text-sm sm:text-base"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen p-4 sm:p-6 lg:p-8 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black' : 'bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50'
    }`}>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Shopping Cart
            </h1>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {items.length} items
            </p>
          </div>
          <button
            onClick={() => navigate('/shop')}
            className={`px-4 py-2 font-semibold rounded-lg transition-colors text-sm ${
              theme === 'dark'
                ? 'text-emerald-400 hover:bg-emerald-900/30'
                : 'text-emerald-600 hover:bg-emerald-50'
            }`}>
            ← Shop
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            {items.map((item, index) => (
              <CartItem key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* Order Summary */}
          <div className={`rounded-xl shadow-xl p-4 sm:p-6 h-fit sticky top-4 ${
            theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
          }`}>
            <h2 className={`text-lg sm:text-xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Order Summary
            </h2>

            <div className="space-y-3 mb-4">
              <div className={`flex justify-between text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <span>Subtotal</span>
                <span className="font-semibold">{formatCurrency(total)}</span>
              </div>
              <div className={`flex justify-between text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <span>Delivery</span>
                <span className="font-semibold text-green-600">FREE</span>
              </div>
              <div className={`border-t pt-3 ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <div className="flex justify-between text-lg sm:text-xl font-bold">
                  <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Total</span>
                  <span className="text-emerald-600">{formatCurrency(total)}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate('/shop/checkout')}
              className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg hover:shadow-lg transition-all mb-2 text-sm sm:text-base"
            >
              Checkout
            </button>

            <button
              onClick={clearCart}
              className={`w-full py-2.5 font-semibold rounded-lg transition-all text-sm ${
                theme === 'dark'
                  ? 'bg-red-900/30 text-red-400 hover:bg-red-900/50'
                  : 'bg-red-50 text-red-600 hover:bg-red-100'
              }`}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
