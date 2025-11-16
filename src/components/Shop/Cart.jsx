import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import useCartStore from '../../store/cartStore';
import CartItem from './CartItem';
import { formatCurrency } from '../../utils/helpers';

const Cart = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();
  const { items, getTotal, clearCart } = useCartStore();
  const total = getTotal();

  if (items.length === 0) {
    return (
      <div className={`min-h-screen flex items-center justify-center p-4 ${
        isDark ? 'bg-black' : 'bg-gray-50'
      }`}>
        <div className="text-center">
          <div className="text-6xl sm:text-8xl mb-4">🛒</div>
          <h2 className={`text-2xl sm:text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Your cart is empty
          </h2>
          <p className={`mb-6 text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Add some products to get started!
          </p>
          <button
            onClick={() => navigate('/shop')}
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Shopping Cart
            </h1>
            <p className={`mt-1 text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {items.length} item{items.length !== 1 ? 's' : ''} in your cart
            </p>
          </div>
          <button
            onClick={clearCart}
            className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
              isDark
                ? 'bg-red-900/30 text-red-400 hover:bg-red-900/50 border border-red-800'
                : 'bg-red-100 text-red-600 hover:bg-red-200'
            }`}
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Cart Items - 4x4 Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {items.map((item, index) => (
                <CartItem key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Order Summary - Sticky */}
          <div className="lg:col-span-1">
            <div className={`rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 sticky top-4 ${
              isDark ? 'bg-zinc-900 border border-gray-800' : 'bg-white'
            }`}>
              <h2 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Order Summary
              </h2>

              <div className={`space-y-3 sm:space-y-4 border-t-2 pt-4 ${
                isDark ? 'border-gray-800' : 'border-gray-200'
              }`}>
                <div className={`flex justify-between text-sm sm:text-base ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <span>Subtotal</span>
                  <span className="font-semibold">{formatCurrency(total)}</span>
                </div>
                <div className={`flex justify-between text-sm sm:text-base ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <span>Delivery</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className={`flex justify-between text-lg sm:text-xl font-bold border-t-2 pt-3 sm:pt-4 ${
                  isDark ? 'text-white border-gray-800' : 'text-gray-900 border-gray-200'
                }`}>
                  <span>Total</span>
                  <span className="text-emerald-600">{formatCurrency(total)}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/shop/checkout')}
                className="w-full mt-6 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg hover:shadow-xl transition-all text-sm sm:text-base"
              >
                Proceed to Checkout
              </button>

              <button
                onClick={() => navigate('/shop')}
                className={`w-full mt-3 py-3 sm:py-4 font-semibold rounded-lg transition-all text-sm sm:text-base ${
                  isDark
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
