import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { MOCK_DATA } from '../../data/mockData';
import ArticleCard from './ArticleCard';
import ArticleModal from './ArticleModal';

const KnowledgeHub = () => {
  const { theme } = useTheme();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = MOCK_DATA.articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <div className={`min-h-screen p-4 sm:p-6 lg:p-8 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50'
      }`}>
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div style={{ animation: 'slideDown 0.6s ease-out' }}>
            <h1 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2">
              Knowledge Hub
            </h1>
            <p className={`text-sm sm:text-base font-semibold ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Learn farming techniques, pest control, and best practices
            </p>
          </div>

          {/* Search */}
          <div 
            className="relative"
            style={{ animation: 'slideUp 0.6s ease-out 0.1s backwards' }}
          >
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full px-4 sm:px-6 py-3 sm:py-4 border-2 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 text-sm sm:text-base transition-all ${
                theme === 'dark'
                  ? 'bg-zinc-900 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-200'
              }`}
            />
            <span className="absolute right-4 top-3 sm:top-4 text-xl sm:text-2xl">🔍</span>
          </div>

          {/* Stats */}
          <div 
            className={`rounded-xl p-4 ${
              theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
            }`}
            style={{ animation: 'slideUp 0.6s ease-out 0.2s backwards' }}
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xl sm:text-2xl font-black text-emerald-600">
                  {filtered.length}
                </p>
                <p className={`text-xs font-semibold ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Articles
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-blue-600">
                  24
                </p>
                <p className={`text-xs font-semibold ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Videos
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-purple-600">
                  5+
                </p>
                <p className={`text-xs font-semibold ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Categories
                </p>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filtered.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  No articles found
                </p>
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
        </div>

        {/* Modal */}
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      </div>
    </>
  );
};

export default KnowledgeHub;
