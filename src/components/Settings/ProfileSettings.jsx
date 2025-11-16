import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../hooks/useAuth';

const ProfileSettings = ({ onShowToast }) => {
  const { theme } = useTheme();
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [bio, setBio] = useState('');

  useEffect(() => {
    if (user) {
      setBio(user.bio || '');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/auth/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': Bearer ${token}
        },
        body: JSON.stringify({ bio }),
      });

      if (!response.ok) {
        throw new Error('Failed to update bio');
      }

      const data = await response.json();
      onShowToast && onShowToast('Bio updated successfully!', 'success');
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating bio:', error);
      onShowToast && onShowToast('Failed to update bio', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className={`rounded-xl shadow-xl p-6 sm:p-8 ${
      theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
    }`}>
      {/* Profile Section */}
      <div className="flex flex-col items-center text-center mb-8">
        {/* Profile Picture Circle */}
        <div className="relative mb-6">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-4xl sm:text-5xl shadow-2xl">
            {getInitials(user?.name)}
          </div>
          {/* Optional: Edit icon on hover */}
          <button className={`absolute bottom-2 right-2 w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 ${
            theme === 'dark'
              ? 'bg-gray-700 text-white hover:bg-gray-600'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </div>

        {/* Username */}
        <h2 className={`text-2xl sm:text-3xl font-bold mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {user?.username || 'User Name'}
        </h2>

        {/* Email */}
        <p className={`text-sm sm:text-base mb-6 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {user?.email || 'user@example.com'}
        </p>

        {/* Stats or Badges (Optional) */}
        <div className="flex gap-4 mb-6">
          <div className={`px-4 py-2 rounded-full ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            <span className={`text-xs font-semibold ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              🌾 Farmer
            </span>
          </div>
          <div className={`px-4 py-2 rounded-full ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            <span className={`text-xs font-semibold ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              ✅ Verified
            </span>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className={`border-t pt-6 ${
        theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-lg font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h3>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all text-sm"
            >
              Edit Bio
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            disabled={!isEditing}
            rows={6}
            className={`w-full px-4 py-3 rounded-lg border transition-all resize-none ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-700 text-white disabled:bg-gray-900 disabled:text-gray-400'
                : 'bg-white border-gray-300 text-gray-900 disabled:bg-gray-50 disabled:text-gray-600'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Tell us about yourself and your farming experience..."
          />

          {/* Action Buttons */}
          {isEditing && (
            <div className="flex gap-3 mt-4">
              <button
                type="submit"
                disabled={isSaving}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
              >
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setBio(user?.bio || '');
                }}
                className={`flex-1 px-6 py-3 font-semibold rounded-lg transition-all ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                Cancel
              </button>
            </div>
          )}
        </form>
      </div>

      {/* Additional Profile Info (Optional) */}
      <div className={`mt-6 pt-6 border-t ${
        theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <h3 className={`text-lg font-bold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Profile Details
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📱</span>
            <div>
              <p className={`text-xs font-semibold ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Phone
              </p>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {user?.phone || 'Not provided'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">📍</span>
            <div>
              <p className={`text-xs font-semibold ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Location
              </p>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {user?.location || 'Not provided'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌾</span>
            <div>
              <p className={`text-xs font-semibold ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Farm Size
              </p>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {user?.farmSize || 'Not provided'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌱</span>
            <div>
              <p className={`text-xs font-semibold ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Crop Types
              </p>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {user?.cropTypes || 'Not provided'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;