import React from 'react';

const PostCard = ({ post, index }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-6 card-hover animate-slideUp"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {post.avatar}
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="font-bold text-gray-900">{post.user}</p>
          <p className="text-gray-700 mt-2">{post.post}</p>

          {/* Stats */}
          <div className="flex items-center gap-6 mt-4 text-gray-600 text-sm">
            <button className="hover:text-red-500 transition-colors flex items-center gap-1">
              ❤️ {post.likes}
            </button>
            <button className="hover:text-blue-500 transition-colors flex items-center gap-1">
              💬 {post.replies}
            </button>
            <button className="hover:text-emerald-500 transition-colors">↗️ Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
