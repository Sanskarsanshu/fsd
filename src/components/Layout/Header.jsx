import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../hooks/useAuth';

const Header = ({ onMenuClick, userName, userEmail }) => {
  const [showUserMenu, setShowUserMenu] = React.useState(false);
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const isDark = theme === 'dark';

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const keyframeStyles = `
    @keyframes slideDown {
      0% { opacity: 0; transform: translateY(-10px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes bellRing {
      0%, 100% { transform: rotate(0deg); }
      10%, 30% { transform: rotate(-15deg); }
      20%, 40% { transform: rotate(15deg); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `;

  return (
    <>
      <style>{keyframeStyles}</style>
      <header className={`shadow-md transition-colors duration-300 ${
        isDark ? 'bg-zinc-900' : 'bg-white'
      }`}>
        <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 flex items-center justify-between">
          {/* Left Section - Menu & Title */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <button
              onClick={onMenuClick}
              className={`lg:hidden p-1.5 sm:p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
              aria-label="Toggle sidebar"
            >
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Krishi Sakhi
              </h1>
              <p className={`text-[10px] sm:text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Smart Farming Assistant
              </p>
            </div>
          </div>

          {/* Right Section - Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-1.5 sm:p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
              aria-label="Toggle theme"
            >
              <span className="text-xl sm:text-2xl">{isDark ? '☀️' : '🌙'}</span>
            </button>

            {/* Notification Icon */}
            <button 
              onClick={() => navigate('/notifications')}
              className={`p-1.5 sm:p-2 rounded-lg transition-all duration-300 relative hover:scale-110 ${
                isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
              aria-label="Notifications"
            >
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ animation: 'bellRing 2s ease-in-out infinite' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full" style={{ animation: 'pulse 1s ease-in-out infinite' }}></span>
            </button>

            {/* Settings Icon - Hidden on very small screens */}
            <button 
              onClick={() => navigate('/settings')}
              className={`hidden xs:block p-1.5 sm:p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-90 ${
                isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
              aria-label="Settings"
            >
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>

            {/* User Avatar & Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className={`flex items-center gap-1.5 sm:gap-2 md:gap-3 p-1 sm:p-1.5 md:p-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                  isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              >
                <div className="text-right hidden md:block">
                  <p className={`text-xs sm:text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {userName || 'Farmer'}
                  </p>
                  <p className={`text-[10px] sm:text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {userEmail || 'user@example.com'}
                  </p>
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg hover:shadow-xl transition-shadow text-sm sm:text-base">
                  {userName?.charAt(0).toUpperCase() || 'K'}
                </div>
              </button>

              {/* User Menu Dropdown */}
              {showUserMenu && (
                <div
                  className={`absolute right-0 mt-2 w-44 sm:w-48 rounded-lg shadow-xl border z-50 ${
                    isDark ? 'bg-zinc-900 border-gray-800' : 'bg-white border-gray-200'
                  }`}
                  style={{ animation: 'slideDown 0.3s ease-out' }}
                >
                  <div className={`p-3 sm:p-4 border-b ${isDark ? 'border-gray-800' : 'border-gray-100'}`}>
                    <p className={`text-xs sm:text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {userName}
                    </p>
                    <p className={`text-[10px] sm:text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'} truncate`}>
                      {userEmail}
                    </p>
                  </div>
                  <div className="p-2">
                    <button 
                      onClick={() => {
                        navigate('/settings');
                        setShowUserMenu(false);
                      }}
                      className={`w-full px-3 sm:px-4 py-2 text-left text-xs sm:text-sm rounded transition-colors flex items-center gap-2 ${
                        isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span>👤</span> Profile
                    </button>
                    <button 
                      onClick={() => {
                        navigate('/settings');
                        setShowUserMenu(false);
                      }}
                      className={`w-full px-3 sm:px-4 py-2 text-left text-xs sm:text-sm rounded transition-colors flex items-center gap-2 ${
                        isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span>⚙️</span> Settings
                    </button>
                    <button 
                      onClick={() => {
                        navigate('/chatbot');
                        setShowUserMenu(false);
                      }}
                      className={`w-full px-3 sm:px-4 py-2 text-left text-xs sm:text-sm rounded transition-colors flex items-center gap-2 ${
                        isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span>📞</span> Support
                    </button>
                    <div className={`my-2 border-t ${isDark ? 'border-gray-800' : 'border-gray-100'}`}></div>
                    <button 
                      onClick={() => {
                        handleLogout();
                        setShowUserMenu(false);
                      }}
                      className={`w-full px-3 sm:px-4 py-2 text-left text-xs sm:text-sm rounded transition-colors flex items-center gap-2 ${
                        isDark ? 'text-red-400 hover:bg-red-900/20' : 'text-red-600 hover:bg-red-50'
                      }`}
                    >
                      <span>🚪</span> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
