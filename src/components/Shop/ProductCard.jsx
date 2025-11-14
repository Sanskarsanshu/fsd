import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import useCartStore from '../../store/cartStore';

const ProductCard = ({ product, index }) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);
  const [showAdded, setShowAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addItem(product);
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 1500);
  };

  return (
    <div
      className={`rounded-lg sm:rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer relative ${
        theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
      }`}
      style={{ animation: `slideUp 0.5s ease-out ${index * 0.05}s backwards` }}
      onClick={() => navigate(`/shop/product/${product.id}`)}
    >
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold z-10">
          {product.discount}%
        </div>
      )}

      {/* Added Notification */}
      {showAdded && (
        <div className="absolute inset-0 bg-emerald-500/90 flex items-center justify-center z-20">
          <div className="text-white text-center">
            <div className="text-2xl sm:text-3xl mb-1">✓</div>
            <p className="font-bold text-xs sm:text-sm">Added!</p>
          </div>
        </div>
      )}

      {/* Image - Square Aspect Ratio */}
      <div className="aspect-square bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-4xl sm:text-5xl">
        {product.image}
      </div>

      {/* Content */}
      <div className="p-2 sm:p-3 space-y-1 sm:space-y-2">
        <h3 className={`text-xs sm:text-sm font-bold line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-1 sm:gap-2">
          <span className="text-sm sm:text-base font-black text-emerald-600">
            ₹{product.price}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-[10px] sm:text-xs text-gray-500 line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-xs sm:text-sm ${
                i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'
              }`}>
                ★
              </span>
            ))}
          </div>
          <span className={`text-[10px] sm:text-xs ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            ({product.reviews})
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full py-1.5 sm:py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded text-xs sm:text-sm hover:shadow-lg transition-all disabled:opacity-50"
        >
          {product.inStock ? '+ Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
