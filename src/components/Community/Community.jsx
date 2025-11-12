import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { MOCK_DATA } from '../../data/mockData';
import PostCard from './PostCard';

const Community = () => {
  const { theme } = useTheme();
  const [posts] = useState(MOCK_DATA.community);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      alert('Post submitted! (Demo)');
      setNewPost('');
    }
  };

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
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div style={{ animation: 'slideDown 0.6s ease-out' }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2">
              Community Forum
            </h1>
            <p className={`text-sm sm:text-base font-semibold ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Connect with farmers, share experiences, and get advice
            </p>
          </div>

          {/* Post Creation */}
          <div 
            className={`rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border-2 transition-all ${
              theme === 'dark'
                ? 'bg-zinc-900 border-gray-800'
                : 'bg-white border-gray-200'
            }`}
            style={{ animation: 'slideUp 0.6s ease-out' }}
          >
            <form onSubmit={handlePostSubmit} className="space-y-4">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="What's on your mind? Share your farming experience..."
                className={`w-full px-4 py-3 border-2 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 resize-none h-24 sm:h-32 text-sm sm:text-base transition-all ${
                  theme === 'dark'
                    ? 'bg-black border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-200'
                }`}
              />
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg sm:rounded-xl hover:shadow-lg transition-all transform hover:scale-[1.02] text-sm sm:text-base"
              >
                📝 Post to Community
              </button>
            </form>
          </div>

          {/* Stats Bar */}
          <div 
            className={`rounded-xl sm:rounded-2xl shadow-lg p-4 border-2 ${
              theme === 'dark'
                ? 'bg-zinc-900 border-gray-800'
                : 'bg-white border-gray-200'
            }`}
            style={{ animation: 'slideUp 0.6s ease-out 0.1s backwards' }}
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  450+
                </p>
                <p className={`text-xs sm:text-sm font-semibold ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Members
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  {posts.length}
                </p>
                <p className={`text-xs sm:text-sm font-semibold ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Posts
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Live
                </p>
                <p className={`text-xs sm:text-sm font-semibold ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Active Now
                </p>
              </div>
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-4">
            {posts.map((post, index) => (
              <PostCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Load More Button */}
          <button 
            className={`w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base transition-all hover:scale-[1.02] ${
              theme === 'dark'
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            style={{ animation: 'slideUp 0.6s ease-out 0.5s backwards' }}
          >
            Load More Posts
          </button>
        </div>
      </div>
    </>
  );
};

export default Community;
