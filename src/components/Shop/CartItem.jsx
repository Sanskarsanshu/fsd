import React from 'react';
import useCartStore from '../../store/cartStore';
import { formatCurrency } from '../../utils/helpers';

const CartItem = ({ item, index }) => {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-6 flex gap-6 animate-slideUp"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Product Image */}
      <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
        {item.image}
      </div>

      {/* Product Info */}
      <div className="flex-1 space-y-2">
        <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-600">{item.unit}</p>
        <p className="text-xl font-bold text-emerald-600">{formatCurrency(item.price)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex flex-col items-end justify-between">
        <button
          onClick={() => removeItem(item.id)}
          className="text-red-500 hover:text-red-700 font-bold transition-colors"
        >
          ✕
        </button>

        <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="w-8 h-8 bg-white rounded-lg font-bold text-gray-700 hover:bg-emerald-500 hover:text-white transition-colors"
          >
            −
          </button>
          <span className="font-bold text-gray-900 min-w-[2rem] text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 bg-white rounded-lg font-bold text-gray-700 hover:bg-emerald-500 hover:text-white transition-colors"
          >
            +
          </button>
        </div>

        <p className="text-lg font-bold text-gray-900">
          {formatCurrency(item.price * item.quantity)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
