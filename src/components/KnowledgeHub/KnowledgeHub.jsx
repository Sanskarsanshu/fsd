import React, { useState } from 'react';
import { MOCK_DATA } from '../../data/mockData';
import ArticleCard from './ArticleCard';
import ArticleModal from './ArticleModal';

const KnowledgeHub = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = MOCK_DATA.articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Knowledge Hub</h1>
        <p className="text-gray-600 mt-2">Learn farming techniques, pest control, and best practices</p>
      </div>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-lg"
        />
        <span className="absolute right-4 top-4 text-2xl">🔍</span>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-2xl text-gray-600">No articles found</p>
          </div>
        ) : (
          filtered.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              index={index}
              onRead={() => setSelectedArticle(article)}
            />
          ))
        )}
      </div>

      {/* Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
};

export default KnowledgeHub;
