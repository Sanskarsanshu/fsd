import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_DATA } from '../../data/mockData';
import ProductCard from './ProductCard';
import useCartStore from '../../store/cartStore';

const Shop = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const cartCount = useCartStore((state) => state.getCount());

  const filteredProducts = MOCK_DATA.products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 animate-slideDown">Agri Shop</h1>
          <p className="text-gray-600 animate-slideUp">Buy fertilizers, tools, and supplies</p>
        </div>
        
        {/* Cart Button */}
        <button
          onClick={() => navigate('/shop/cart')}
          className="relative px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg hover:shadow-lg transition-all animate-slideDown"
        >
          <span className="flex items-center gap-2">
            🛒 Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative animate-slideUp" style={{ animationDelay: '0.1s' }}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-lg"
        />
        <span className="absolute right-4 top-4 text-2xl">🔍</span>
      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto pb-2 animate-slideUp" style={{ animationDelay: '0.2s' }}>
        {MOCK_DATA.categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
              selectedCategory === cat.id
                ? 'bg-emerald-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-emerald-500'
            }`}
          >
            <span className="text-xl">{cat.icon}</span>
            <span>{cat.name}</span>
            <span className="text-xs opacity-75">({cat.count})</span>
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-2xl text-gray-600">No products found</p>
          </div>
        ) : (
          filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default Shop;
