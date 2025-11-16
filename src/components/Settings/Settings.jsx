import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../hooks/useAuth';
// import ProfileSettings from './ProfileSettings';
import ProfileSettings from './ProfileSettings';
import AccountSettings from './AccountSettings';
import NotificationSettings from './NotificationSettings';
import FeedbackForm from './FeedbackForm';

const Settings = ({ onShowToast }) => {
  const { theme } = useTheme();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: '👤' },
    { id: 'account', name: 'Account', icon: '⚙' },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
    { id: 'feedback', name: 'Feedback', icon: '💬' },
  ];

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
        theme === 'dark' ? 'bg-black' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'
      }`}>
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Header */}
          <div style={{ animation: 'slideDown 0.6s ease-out' }}>
            <h1 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
              Settings
            </h1>
            <p className={`text-sm sm:text-base font-semibold ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Manage your account and preferences
            </p>
          </div>

          {/* Tabs */}
          <div 
            className={`rounded-xl shadow-xl p-2 ${
              theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
            }`}
            style={{ animation: 'slideUp 0.6s ease-out 0.1s backwards' }}
          >
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-[120px] px-4 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                      : theme === 'dark'
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div style={{ animation: 'slideUp 0.6s ease-out 0.2s backwards' }}>
            {activeTab === 'profile' && <ProfileSettings onShowToast={onShowToast} />}
            {activeTab === 'account' && <AccountSettings onShowToast={onShowToast} />}
            {activeTab === 'notifications' && <NotificationSettings onShowToast={onShowToast} />}
            {activeTab === 'feedback' && <FeedbackForm onShowToast={onShowToast} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;