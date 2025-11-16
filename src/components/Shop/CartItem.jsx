import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import useCartStore from '../../store/cartStore';
import { formatCurrency } from '../../utils/helpers';

const CartItem = ({ item, index }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { updateQuantity, removeItem } = useCartStore();
  const [imageError, setImageError] = React.useState(false);

  return (
    <div
      className={`rounded-lg sm:rounded-xl shadow-lg p-2 sm:p-3 transition-all hover:shadow-xl ${
        isDark ? 'bg-zinc-900 border border-gray-800' : 'bg-white'
      }`}
      style={{ animation: `slideUp 0.5s ease-out ${index * 0.05}s backwards` }}
    >
      {/* Remove Button - Top Right */}
      <div className="flex justify-end mb-1">
        <button
          onClick={() => removeItem(item.id)}
          className="text-red-500 hover:text-red-700 font-bold text-base sm:text-lg transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Image - Square */}
      <div className="aspect-square bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center mb-2 overflow-hidden">
        {!imageError && item.image && item.image.startsWith('http') ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-3xl sm:text-4xl">{item.image?.startsWith('http') ? '📦' : item.image}</span>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1 sm:space-y-2">
        <h3 className={`text-xs sm:text-sm font-bold line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem] ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {item.name}
        </h3>
        
        <p className={`text-[10px] sm:text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {item.unit}
        </p>

        <p className="text-sm sm:text-base font-bold text-emerald-600">
          {formatCurrency(item.price)}
        </p>

        {/* Quantity Controls */}
        <div className={`flex items-center justify-center gap-2 rounded-lg p-1 ${
          isDark ? 'bg-gray-800' : 'bg-gray-100'
        }`}>
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className={`w-6 h-6 sm:w-7 sm:h-7 rounded font-bold transition-colors text-sm ${
              isDark
                ? 'bg-gray-700 text-white hover:bg-emerald-600'
                : 'bg-white text-gray-700 hover:bg-emerald-500 hover:text-white'
            }`}
          >
            −
          </button>
          <span className={`font-bold min-w-[1.5rem] text-center text-xs sm:text-sm ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className={`w-6 h-6 sm:w-7 sm:h-7 rounded font-bold transition-colors text-sm ${
              isDark
                ? 'bg-gray-700 text-white hover:bg-emerald-600'
                : 'bg-white text-gray-700 hover:bg-emerald-500 hover:text-white'
            }`}
          >
            +
          </button>
        </div>

        {/* Total Price */}
        <p className={`text-center text-sm sm:text-base font-black ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {formatCurrency(item.price * item.quantity)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
