import React, { useState } from 'react';
import { MOCK_DATA } from '../../data/mockData';
import BuyerCard from './BuyerCard';

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'vegetables', 'fruits', 'grains', 'spices'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Marketplace</h1>
        <p className="text-gray-600 mt-2">Connect with verified buyers for your produce</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg card-hover animate-slideUp">
          <p className="text-white/80 text-sm">Active Buyers</p>
          <p className="text-4xl font-bold mt-2">156</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg card-hover animate-slideUp" style={{ animationDelay: '0.1s' }}>
          <p className="text-white/80 text-sm">Successful Deals</p>
          <p className="text-4xl font-bold mt-2">1,234</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg card-hover animate-slideUp" style={{ animationDelay: '0.2s' }}>
          <p className="text-white/80 text-sm">Total Value</p>
          <p className="text-4xl font-bold mt-2">₹45L+</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-emerald-500 text-white'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-emerald-500'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Buyers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_DATA.buyers.map((buyer, index) => (
          <BuyerCard key={buyer.id} buyer={buyer} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
