import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { MOCK_DATA } from '../../data/mockData';
import useCartStore from '../../store/cartStore';
import { formatCurrency } from '../../utils/helpers';

const ProductDetail = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { id } = useParams();
  const navigate = useNavigate();
  const product = MOCK_DATA.products.find((p) => p.id === parseInt(id));
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);
  const [showAdded, setShowAdded] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (!product) {
    return (
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center ${
        isDark ? 'bg-black' : 'bg-white'
      }`}>
        <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Product not found
        </h2>
        <button
          onClick={() => navigate('/shop')}
          className="mt-6 px-6 py-3 bg-emerald-500 text-white font-bold rounded-lg hover:shadow-lg transition-all"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setShowAdded(true);
    setTimeout(() => {
      setShowAdded(false);
    }, 2000);
  };

  const relatedProducts = MOCK_DATA.products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8">
        {/* Breadcrumb */}
        <nav className={`flex items-center gap-2 text-xs sm:text-sm animate-slideDown ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <button onClick={() => navigate('/shop')} className="hover:text-emerald-600 transition-colors">
            Shop
          </button>
          <span>›</span>
          <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {product.name}
          </span>
        </nav>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="animate-slideRight">
            <div className={`bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl sm:rounded-3xl h-64 sm:h-80 lg:h-96 flex items-center justify-center shadow-2xl sticky top-4 sm:top-24 overflow-hidden ${
              isDark ? 'border-2 border-gray-800' : ''
            }`}>
              {!imageError && product.image && product.image.startsWith('http') ? (
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-6xl sm:text-7xl lg:text-9xl">{product.image?.startsWith('http') ? '📦' : product.image}</span>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 sm:space-y-6 animate-slideLeft">
            {/* Discount Badge */}
            {product.discount > 0 && (
              <div className="inline-block bg-red-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold animate-pulse shadow-lg">
                {product.discount}% OFF - Limited Time!
              </div>
            )}

            {/* Title */}
            <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl sm:text-2xl ${
                      i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className={`text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-600">
                {formatCurrency(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <div className="space-y-1">
                  <span className={`text-lg sm:text-xl line-through ${
                    isDark ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {formatCurrency(product.originalPrice)}
                  </span>
                  <p className="text-xs sm:text-sm text-green-600 font-semibold">
                    You save: {formatCurrency(product.originalPrice - product.price)}
                  </p>
                </div>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-3">
              <span
                className={`w-3 h-3 rounded-full ${
                  product.inStock ? 'bg-green-500 animate-pulse' : 'bg-red-500'
                }`}
              ></span>
              <span
                className={`font-semibold text-base sm:text-lg ${
                  product.inStock ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Unit */}
            <div className={`rounded-lg p-3 sm:p-4 ${
              isDark ? 'bg-gray-900 border border-gray-800' : 'bg-gray-100'
            }`}>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Unit Size</p>
              <p className={`font-bold text-base sm:text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {product.unit}
              </p>
            </div>

            {/* Description */}
            <div>
              <h2 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Description
              </h2>
              <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Key Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-2 p-2 sm:p-3 rounded-lg ${
                      isDark ? 'bg-emerald-900/30 border border-emerald-800' : 'bg-emerald-50'
                    }`}
                  >
                    <span className="text-emerald-600 font-bold text-sm sm:text-base">✓</span>
                    <span className={`text-xs sm:text-sm ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Seller Info */}
            <div className={`rounded-lg p-3 sm:p-4 border-l-4 border-blue-500 ${
              isDark ? 'bg-blue-900/20 border-blue-700' : 'bg-blue-50'
            }`}>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Sold by</p>
              <p className={`font-bold text-base sm:text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {product.seller}
              </p>
            </div>

            {/* Quantity & Add to Cart */}
            <div className={`space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t-2 ${
              isDark ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <div>
                <label className={`block text-xs sm:text-sm font-semibold mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Quantity
                </label>
                <div className="flex items-center gap-3 sm:gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bold transition-colors ${
                      isDark
                        ? 'bg-gray-800 text-gray-300 hover:bg-emerald-600 hover:text-white border border-gray-700'
                        : 'bg-gray-200 text-gray-700 hover:bg-emerald-500 hover:text-white'
                    }`}
                  >
                    −
                  </button>
                  <span className={`text-xl sm:text-2xl font-bold min-w-[3rem] text-center ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bold transition-colors ${
                      isDark
                        ? 'bg-gray-800 text-gray-300 hover:bg-emerald-600 hover:text-white border border-gray-700'
                        : 'bg-gray-200 text-gray-700 hover:bg-emerald-500 hover:text-white'
                    }`}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base lg:text-lg"
              >
                {showAdded ? '✓ Added to Cart!' : '🛒 Add to Cart'}
              </button>

              <button
                onClick={() => {
                  handleAddToCart();
                  navigate('/shop/cart');
                }}
                disabled={!product.inStock}
                className={`w-full py-3 sm:py-4 font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base lg:text-lg ${
                  isDark
                    ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-8 sm:pt-12">
            <h2 className={`text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 animate-slideUp ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Related Products
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {relatedProducts.map((prod, index) => {
                const [relImageError, setRelImageError] = useState(false);
                return (
                  <div
                    key={prod.id}
                    onClick={() => {
                      navigate(`/shop/product/${prod.id}`);
                      window.scrollTo(0, 0);
                    }}
                    className={`rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all hover:scale-105 animate-slideUp ${
                      isDark ? 'bg-zinc-900 border border-gray-800' : 'bg-white'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-square bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center overflow-hidden">
                      {!relImageError && prod.image && prod.image.startsWith('http') ? (
                        <img
                          src={prod.image}
                          alt={prod.name}
                          loading="lazy"
                          onError={() => setRelImageError(true)}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-4xl sm:text-5xl">{prod.image?.startsWith('http') ? '📦' : prod.image}</span>
                      )}
                    </div>
                    <div className="p-3 sm:p-4">
                      <h3 className={`font-bold text-sm sm:text-base mb-2 line-clamp-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {prod.name}
                      </h3>
                      <p className="text-emerald-600 font-bold text-base sm:text-xl">
                        {formatCurrency(prod.price)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
