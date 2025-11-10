import React from 'react';

const ArticleCard = ({ article, index, onRead }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover animate-slideUp cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={onRead}
    >
      {/* Image */}
      <div className="h-48 bg-gradient-to-br from-emerald-300 to-teal-500 flex items-center justify-center text-6xl">
        {article.image}
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
            {article.category}
          </span>
          <span className="text-xs text-gray-600">{article.readTime} min read</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900">{article.title}</h3>
        <p className="text-gray-600 text-sm">{article.excerpt}</p>

        <button className="w-full py-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
