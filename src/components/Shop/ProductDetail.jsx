import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_DATA } from '../../data/mockData';
import useCartStore from '../../store/cartStore';
import { formatCurrency } from '../../utils/helpers';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = MOCK_DATA.products.find((p) => p.id === parseInt(id));
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);
  const [showAdded, setShowAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Product not found</h2>
        <button
          onClick={() => navigate('/shop')}
          className="mt-6 px-6 py-3 bg-emerald-500 text-white font-bold rounded-lg"
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-600 animate-slideDown">
        <button onClick={() => navigate('/shop')} className="hover:text-emerald-600">
          Shop
        </button>
        <span>›</span>
        <span className="text-gray-900 font-semibold">{product.name}</span>
      </nav>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="animate-slideRight">
          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl h-96 flex items-center justify-center text-9xl shadow-2xl sticky top-24">
            {product.image}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6 animate-slideLeft">
          {/* Discount Badge */}
          {product.discount > 0 && (
            <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              {product.discount}% OFF - Limited Time!
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl font-black text-gray-900">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-2xl ${
                    i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-5xl font-bold text-emerald-600">
              {formatCurrency(product.price)}
            </span>
            {product.originalPrice > product.price && (
              <div className="space-y-1">
                <span className="text-xl text-gray-500 line-through">
                  {formatCurrency(product.originalPrice)}
                </span>
                <p className="text-sm text-green-600 font-semibold">
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
              className={`font-semibold text-lg ${
                product.inStock ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          {/* Unit */}
          <div className="bg-gray-100 rounded-lg p-4">
            <p className="text-gray-600 text-sm">Unit Size</p>
            <p className="text-gray-900 font-bold text-lg">{product.unit}</p>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Description</h2>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 bg-emerald-50 p-3 rounded-lg"
                >
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="text-gray-800">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Seller Info */}
          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
            <p className="text-sm text-gray-600">Sold by</p>
            <p className="text-gray-900 font-bold text-lg">{product.seller}</p>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="space-y-4 pt-6 border-t-2 border-gray-200">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 bg-gray-200 rounded-lg font-bold text-gray-700 hover:bg-emerald-500 hover:text-white transition-colors"
                >
                  −
                </button>
                <span className="text-2xl font-bold text-gray-900 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 bg-gray-200 rounded-lg font-bold text-gray-700 hover:bg-emerald-500 hover:text-white transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {showAdded ? '✓ Added to Cart!' : '🛒 Add to Cart'}
            </button>

            <button
              onClick={() => {
                handleAddToCart();
                navigate('/shop/cart');
              }}
              disabled={!product.inStock}
              className="w-full py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="pt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 animate-slideUp">
            Related Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((prod, index) => (
              <div
                key={prod.id}
                onClick={() => navigate(`/shop/product/${prod.id}`)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer card-hover animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-40 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-5xl">
                  {prod.image}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                    {prod.name}
                  </h3>
                  <p className="text-emerald-600 font-bold text-xl">
                    {formatCurrency(prod.price)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
