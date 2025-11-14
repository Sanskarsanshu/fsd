import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Header = ({ onMenuClick, userName, userEmail }) => {
  const [showUserMenu, setShowUserMenu] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  const keyframeStyles = `
    @keyframes slideDown {
      0% { 
        opacity: 0; 
        transform: translateY(-10px); 
      }
      100% { 
        opacity: 1; 
        transform: translateY(0); 
      }
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
        theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
      }`}>
        <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Left Section - Menu & Title */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
              aria-label="Toggle sidebar"
            >
              <svg
                className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
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
            <div>
              <h1 className={`text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent`}>
                Krishi Sakhi
              </h1>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Smart Farming Assistant
              </p>
            </div>
          </div>

          {/* Right Section - User Menu */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <span className="text-2xl">☀️</span>
              ) : (
                <span className="text-2xl">🌙</span>
              )}
            </button>

            {/* Notification Icon */}
            <button className={`p-2 rounded-lg transition-all duration-300 relative hover:scale-110 ${
              theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
            }`}>
              <svg
                className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
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
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" style={{ animation: 'pulse 1s ease-in-out infinite' }}></span>
            </button>

            {/* Settings Icon */}
            <button className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-90 ${
              theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
            }`}>
              <svg
                className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
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
                className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                  theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              >
                <div className="text-right hidden sm:block">
                  <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {userName || 'Farmer'}
                  </p>
                  <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    {userEmail || 'user@example.com'}
                  </p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg hover:shadow-xl transition-shadow">
                  {userName?.charAt(0).toUpperCase() || 'K'}
                </div>
              </button>

              {/* User Menu Dropdown */}
              {showUserMenu && (
                <div
                  className={`absolute right-0 mt-2 w-48 rounded-lg shadow-xl border z-50 ${
                    theme === 'dark'
                      ? 'bg-zinc-900 border-gray-800'
                      : 'bg-white border-gray-200'
                  }`}
                  style={{ animation: 'slideDown 0.3s ease-out' }}
                >
                  <div className={`p-4 border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-100'}`}>
                    <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {userName}
                    </p>
                    <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      {userEmail}
                    </p>
                  </div>
                  <div className="p-2">
                    <button className={`w-full px-4 py-2 text-left text-sm rounded transition-colors ${
                      theme === 'dark'
                        ? 'text-gray-300 hover:bg-gray-800'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}>
                      👤 Profile
                    </button>
                    <button className={`w-full px-4 py-2 text-left text-sm rounded transition-colors ${
                      theme === 'dark'
                        ? 'text-gray-300 hover:bg-gray-800'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}>
                      ⚙️ Settings
                    </button>
                    <button className={`w-full px-4 py-2 text-left text-sm rounded transition-colors ${
                      theme === 'dark'
                        ? 'text-gray-300 hover:bg-gray-800'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}>
                      📞 Support
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
