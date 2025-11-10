import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../store/cartStore';

const ProductCard = ({ product, index }) => {
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);
  const [showAdded, setShowAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addItem(product);
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 2000);
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover animate-slideUp cursor-pointer relative"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => navigate(`/shop/product/${product.id}`)}
    >
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10 animate-pulse">
          {product.discount}% OFF
        </div>
      )}

      {/* Added to Cart Notification */}
      {showAdded && (
        <div className="absolute inset-0 bg-emerald-500/90 flex items-center justify-center z-20 animate-bounce-in">
          <div className="text-white text-center">
            <div className="text-4xl mb-2">✓</div>
            <p className="font-bold">Added to Cart!</p>
          </div>
        </div>
      )}

      {/* Product Image */}
      <div className="h-48 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-6xl">
        {product.image}
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-3">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600">{product.unit}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}>
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-emerald-600">₹{product.price}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
          )}
        </div>

        {/* Stock Status */}
        <div className="flex items-center gap-2 text-sm">
          <span className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
          <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
