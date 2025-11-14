import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import useCartStore from '../../store/cartStore';
import { formatCurrency } from '../../utils/helpers';

const CartItem = ({ item, index }) => {
  const { theme } = useTheme();
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div
      className={`rounded-xl shadow-lg p-3 sm:p-4 flex gap-3 sm:gap-4 transition-all ${
        theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
      }`}
      style={{ animation: `slideUp 0.5s ease-out ${index * 0.1}s backwards` }}
    >
      {/* Image */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0">
        {item.image}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className={`text-sm sm:text-base font-bold line-clamp-1 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {item.name}
        </h3>
        <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {item.unit}
        </p>
        <p className="text-base sm:text-lg font-bold text-emerald-600 mt-1">
          {formatCurrency(item.price)}
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-end justify-between">
        <button
          onClick={() => removeItem(item.id)}
          className="text-red-500 hover:text-red-700 font-bold text-lg"
        >
          ✕
        </button>

        <div className={`flex items-center gap-2 rounded-lg p-1 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
        }`}>
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className={`w-6 h-6 sm:w-7 sm:h-7 rounded font-bold transition-colors ${
              theme === 'dark'
                ? 'bg-gray-700 text-white hover:bg-emerald-600'
                : 'bg-white text-gray-700 hover:bg-emerald-500 hover:text-white'
            }`}
          >
            −
          </button>
          <span className={`font-bold min-w-[1.5rem] text-center text-sm ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className={`w-6 h-6 sm:w-7 sm:h-7 rounded font-bold transition-colors ${
              theme === 'dark'
                ? 'bg-gray-700 text-white hover:bg-emerald-600'
                : 'bg-white text-gray-700 hover:bg-emerald-500 hover:text-white'
            }`}
          >
            +
          </button>
        </div>

        <p className={`text-sm sm:text-base font-bold ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {formatCurrency(item.price * item.quantity)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
