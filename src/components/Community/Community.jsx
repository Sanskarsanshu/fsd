import React, { useState } from 'react';
import { MOCK_DATA } from '../../data/mockData';
import PostCard from './PostCard';

const Community = () => {
  const [posts] = useState(MOCK_DATA.community);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      alert('Post submitted! (Demo)');
      setNewPost('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Community Forum</h1>
        <p className="text-gray-600 mt-2">Connect with farmers, share experiences, and get advice</p>
      </div>

      {/* Post Creation */}
      <div className="bg-white rounded-2xl shadow-lg p-6 animate-slideUp">
        <form onSubmit={handlePostSubmit} className="space-y-4">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="What's on your mind? Share your farming experience..."
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 resize-none h-24"
          />
          <button
            type="submit"
            className="w-full py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
          >
            Post
          </button>
        </form>
      </div>

      {/* Posts */}
      <div className="space-y-4">
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Community;
