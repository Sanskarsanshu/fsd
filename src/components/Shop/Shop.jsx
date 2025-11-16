import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { MOCK_DATA } from '../../data/mockData';
import ProductCard from './ProductCard';
import useCartStore from '../../store/cartStore';

const Shop = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const isDark = theme === 'dark';
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const cartCount = useCartStore((state) => state.getCount());

  const filteredProducts = MOCK_DATA.products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const keyframeStyles = `
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  return (
    <>
      <style>{keyframeStyles}</style>
      <div className={`min-h-screen p-3 sm:p-4 md:p-6 lg:p-8 transition-colors duration-300 ${
        isDark ? 'bg-black' : 'bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50'
      }`}>
        <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-4" style={{ animation: 'slideDown 0.6s ease-out' }}>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-1">
                Agri Shop
              </h1>
              <p className={`text-xs sm:text-sm font-semibold ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Buy fertilizers, tools, and supplies
              </p>
            </div>
            
            {/* Cart Button */}
            <button
              onClick={() => navigate('/shop/cart')}
              className="relative px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg hover:shadow-lg transition-all text-sm sm:text-base"
            >
              🛒 Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Search */}
          <div className="relative" style={{ animation: 'slideUp 0.6s ease-out 0.1s backwards' }}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full px-4 sm:px-6 py-2.5 sm:py-3 md:py-4 border-2 rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base transition-all ${
                isDark
                  ? 'bg-zinc-900 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-200'
              }`}
            />
            <span className="absolute right-3 sm:right-4 top-2 sm:top-2.5 md:top-3 text-lg sm:text-xl md:text-2xl">🔍</span>
          </div>

          {/* Categories */}
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin" style={{ animation: 'slideUp 0.6s ease-out 0.2s backwards' }}>
            {MOCK_DATA.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 sm:px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all text-xs sm:text-sm ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                    : isDark
                    ? 'bg-zinc-900 text-gray-300 border border-gray-700 hover:border-emerald-500'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-emerald-500'
                }`}
              >
                <span className="text-base sm:text-lg">{cat.icon}</span>
                <span className="ml-1 sm:ml-2">{cat.name}</span>
                <span className="ml-1 text-[10px] sm:text-xs opacity-75">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Products Grid - 4 columns on all screens */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {filteredProducts.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className={`text-base sm:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  No products found
                </p>
              </div>
            ) : (
              filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
