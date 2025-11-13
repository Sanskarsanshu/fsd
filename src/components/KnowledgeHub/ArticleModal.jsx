import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Modal from '../Shared/Modal';

const ArticleModal = ({ article, onClose }) => {
  const { theme } = useTheme();

  if (!article) return null;

  // Extract YouTube video ID
  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(article.videoUrl);

  return (
    <Modal isOpen={!!article} onClose={onClose} title={article.title} size="2xl">
      <div className="space-y-5">
        {/* Video or Image */}
        {videoId ? (
          <div className="relative pt-[56.25%] rounded-lg overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={article.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="h-64 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center text-7xl">
            {article.image}
          </div>
        )}

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs sm:text-sm">
          <span className={`px-3 py-1 rounded-full font-bold ${
            theme === 'dark'
              ? 'bg-emerald-900/50 text-emerald-400'
              : 'bg-emerald-100 text-emerald-700'
          }`}>
            {article.category}
          </span>
          <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            📖 {article.readTime} min read
          </span>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <p className={`text-sm leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {article.excerpt}
          </p>
          <p className={`text-sm leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris.
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4 border-t">
          {videoId && (
            <a
              href={article.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors text-center text-sm"
            >
              Watch on YouTube
            </a>
          )}
          <button className="flex-1 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all text-sm">
            Share Article
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ArticleModal;
