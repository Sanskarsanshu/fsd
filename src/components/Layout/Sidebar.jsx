import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAuth();

  const menuItems = [
 { icon: '📊', label: 'Dashboard', path: '/dashboard' },
  { icon: '💰', label: 'Financials', path: '/financials' },
  { icon: '🛒', label: 'Shop', path: '/shop' }, // ADD THIS
  { icon: '🔍', label: 'Pest Detection', path: '/pest-detection' },
  { icon: '🏪', label: 'Marketplace', path: '/marketplace' },
  { icon: '📚', label: 'Knowledge Hub', path: '/knowledge-hub' },
  { icon: '📋', label: 'Schemes', path: '/schemes' },
  { icon: '👥', label: 'Community', path: '/community' },
  { icon: '🚀', label: 'Future Features', path: '/future-features' }
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div
        className={`fixed left-0 top-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 lg:relative lg:transform-none flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🌾</div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Krishi Sakhi</h1>
              <p className="text-xs text-gray-500">Farm Assistant</p>
            </div>
          </div>
        </div>

        {/* User Info */}
        {user && (
          <div className="px-6 py-4 bg-emerald-50 border-b border-gray-200">
            <p className="text-xs text-gray-500 mb-1">Logged in as</p>
            <p className="font-semibold text-gray-900 truncate text-sm">{user.name}</p>
            <p className="text-xs text-gray-600 truncate">{user.email}</p>
          </div>
        )}

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname.includes(item.path);
            return (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 font-medium transition-all text-sm"
          >
            <span className="text-xl">🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
