import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import useCartStore from '../../store/cartStore';
import { formatCurrency } from '../../utils/helpers';

const Checkout = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();
  const { items, getTotal, clearCart } = useCartStore();
  const total = getTotal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [imageError, setImageError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate order processing
    setTimeout(() => {
      const orderId = 'ORD' + Date.now();
      setLoading(false);
      clearCart();
      navigate('/shop/order-success', { state: { orderId, formData, total } });
    }, 2000);
  };

  if (items.length === 0) {
    navigate('/shop/cart');
    return null;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-black' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="animate-slideDown">
          <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Checkout
          </h1>
          <p className={`mt-1 sm:mt-2 text-sm sm:text-base ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Complete your order
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className={`rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 animate-slideUp ${
              isDark ? 'bg-zinc-900 border border-gray-800' : 'bg-white'
            }`}>
              <h2 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Delivery Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className={`block text-xs sm:text-sm font-semibold mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-200 transition-all text-sm sm:text-base ${
                      isDark
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-emerald-500'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs sm:text-sm font-semibold mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-200 transition-all text-sm sm:text-base ${
                      isDark
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-emerald-500'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs sm:text-sm font-semibold mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-200 transition-all text-sm sm:text-base ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-emerald-500'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs sm:text-sm font-semibold mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Complete Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-200 transition-all text-sm sm:text-base ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-emerald-500'
                  }`}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                <div>
                  <label className={`block text-xs sm:text-sm font-semibold mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-200 transition-all text-sm sm:text-base ${
                      isDark
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-emerald-500'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs sm:text-sm font-semibold mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-200 transition-all text-sm sm:text-base ${
                      isDark
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-emerald-500'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs sm:text-sm font-semibold mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Pincode *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-200 transition-all text-sm sm:text-base ${
                      isDark
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-emerald-500'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs sm:text-sm font-semibold mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Order Notes (Optional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Any special instructions..."
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-200 transition-all text-sm sm:text-base ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-emerald-500'
                  }`}
                />
              </div>

              {/* Payment Method */}
              <div className={`border-t-2 pt-4 sm:pt-6 ${
                isDark ? 'border-gray-800' : 'border-gray-200'
              }`}>
                <h3 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Payment Method
                </h3>
                <div className={`p-3 sm:p-4 rounded-lg border-2 ${
                  isDark
                    ? 'bg-emerald-900/20 border-emerald-700'
                    : 'bg-emerald-50 border-emerald-500'
                }`}>
                  <div className="flex items-center gap-3">
                    <input type="radio" checked readOnly className="w-4 h-4 sm:w-5 sm:h-5 accent-emerald-500" />
                    <div>
                      <p className={`font-bold text-sm sm:text-base ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Cash on Delivery
                      </p>
                      <p className={`text-xs sm:text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Pay when you receive your order
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg hover:shadow-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Processing Order...
                  </>
                ) : (
                  <>
                    Place Order
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className={`rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 sticky top-4 animate-slideLeft ${
              isDark ? 'bg-zinc-900 border border-gray-800' : 'bg-white'
            }`}>
              <h2 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Order Summary
              </h2>

              <div className="space-y-3 mb-4 sm:mb-6 max-h-64 overflow-y-auto">
                {items.map((item) => {
                  const hasError = imageError[item.id];
                  return (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 overflow-hidden">
                        {!hasError && item.image && item.image.startsWith('http') ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                            onError={() => setImageError(prev => ({ ...prev, [item.id]: true }))}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span>{item.image?.startsWith('http') ? '📦' : item.image}</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-semibold text-xs sm:text-sm line-clamp-1 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {item.name}
                        </p>
                        <p className={`text-[10px] sm:text-xs ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          Qty: {item.quantity}
                        </p>
                        <p className="text-xs sm:text-sm font-bold text-emerald-600">
                          {formatCurrency(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className={`space-y-3 border-t-2 pt-3 sm:pt-4 ${
                isDark ? 'border-gray-800' : 'border-gray-200'
              }`}>
                <div className={`flex justify-between text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <span>Subtotal</span>
                  <span className="font-semibold">{formatCurrency(total)}</span>
                </div>
                <div className={`flex justify-between text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <span>Delivery</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className={`flex justify-between text-lg sm:text-xl font-bold border-t-2 pt-3 ${
                  isDark ? 'text-white border-gray-800' : 'text-gray-900 border-gray-200'
                }`}>
                  <span>Total</span>
                  <span className="text-emerald-600">{formatCurrency(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
