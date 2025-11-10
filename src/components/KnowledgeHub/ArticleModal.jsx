import React from 'react';
import Modal from '../Shared/Modal';

const ArticleModal = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <Modal isOpen={!!article} onClose={onClose} title={article.title} size="2xl">
      <div className="space-y-6">
        {/* Image */}
        <div className="h-64 bg-gradient-to-br from-emerald-300 to-teal-500 rounded-lg flex items-center justify-center text-8xl">
          {article.image}
        </div>

        {/* Meta */}
        <div className="flex items-center gap-4">
          <span className="text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full text-sm font-bold">
            {article.category}
          </span>
          <span className="text-gray-600 text-sm">📖 {article.readTime} minute read</span>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none">
          <p className="text-gray-700 leading-relaxed">
            {article.excerpt} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* CTA */}
        <button className="w-full py-3 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors">
          Share Article
        </button>
      </div>
    </Modal>
  );
};

export default ArticleModal;
