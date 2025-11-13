import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ArticleCard = ({ article, index, onRead }) => {
  const { theme } = useTheme();
  
  // Extract YouTube video ID from URL
  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(article.videoUrl);
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;

  return (
    <div
      className={`rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
        theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
      }`}
      style={{ animation: `slideUp 0.5s ease-out ${index * 0.1}s backwards` }}
      onClick={onRead}
    >
      {/* Image/Video Preview */}
      <div className="relative h-48 overflow-hidden group">
        {thumbnailUrl ? (
          <>
            <img 
              src={thumbnailUrl} 
              alt={article.title}
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-5xl">
            {article.image}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className={`font-bold px-2.5 py-1 rounded-full ${
            theme === 'dark'
              ? 'bg-emerald-900/50 text-emerald-400'
              : 'bg-emerald-100 text-emerald-700'
          }`}>
            {article.category}
          </span>
          <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            {article.readTime} min
          </span>
        </div>

        <h3 className={`text-base sm:text-lg font-bold line-clamp-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {article.title}
        </h3>
        
        <p className={`text-xs sm:text-sm line-clamp-2 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {article.excerpt}
        </p>

        <button className={`w-full py-2 font-semibold transition-colors text-sm ${
          theme === 'dark'
            ? 'text-emerald-400 hover:text-emerald-300'
            : 'text-emerald-600 hover:text-emerald-700'
        }`}>
          {videoId ? 'Watch Video →' : 'Read More →'}
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
