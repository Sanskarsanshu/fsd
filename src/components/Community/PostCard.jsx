import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const PostCard = ({ post, index }) => {
  const { theme } = useTheme();
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
      setLiked(false);
    } else {
      setLikesCount(likesCount + 1);
      setLiked(true);
    }
  };

  return (
    <div
      className={`rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
        theme === 'dark'
          ? 'bg-zinc-900 border-gray-800 hover:border-emerald-500'
          : 'bg-white border-gray-200 hover:border-emerald-300'
      }`}
      style={{ animation: `slideUp 0.5s ease-out ${index * 0.1}s backwards` }}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        {/* Avatar */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg flex-shrink-0">
          {post.avatar}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* User Info */}
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1 min-w-0">
              <p className={`font-bold text-sm sm:text-base truncate ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {post.user}
              </p>
              <p className={`text-xs ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
              }`}>
                2 hours ago
              </p>
            </div>
            
            {/* Menu Button */}
            <button className={`p-2 rounded-lg transition-colors ${
              theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
            }`}>
              <svg className={`w-5 h-5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </button>
          </div>

          {/* Post Content */}
          <p className={`text-sm sm:text-base leading-relaxed mb-4 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {post.post}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 sm:gap-6 text-sm">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 sm:gap-2 font-semibold transition-all hover:scale-110 ${
                liked
                  ? 'text-red-500'
                  : theme === 'dark'
                  ? 'text-gray-400 hover:text-red-500'
                  : 'text-gray-600 hover:text-red-500'
              }`}
            >
              <span className="text-base sm:text-lg">{liked ? '❤️' : '🤍'}</span>
              <span className="text-xs sm:text-sm">{likesCount}</span>
            </button>

            <button className={`flex items-center gap-1.5 sm:gap-2 font-semibold transition-all hover:scale-110 ${
              theme === 'dark'
                ? 'text-gray-400 hover:text-blue-400'
                : 'text-gray-600 hover:text-blue-500'
            }`}>
              <span className="text-base sm:text-lg">💬</span>
              <span className="text-xs sm:text-sm">{post.replies}</span>
            </button>

            <button className={`flex items-center gap-1.5 sm:gap-2 font-semibold transition-all hover:scale-110 ${
              theme === 'dark'
                ? 'text-gray-400 hover:text-emerald-400'
                : 'text-gray-600 hover:text-emerald-500'
            }`}>
              <span className="text-base sm:text-lg">🔗</span>
              <span className="text-xs sm:text-sm hidden sm:inline">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
