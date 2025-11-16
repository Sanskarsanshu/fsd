import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../context/ThemeContext';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [particles, setParticles] = useState([]);

  // Generate particles for background animation
  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const menuItems = [
    { 
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ), 
      label: 'Dashboard', 
      path: '/dashboard',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ), 
      label: 'Financials', 
      path: '/financials',
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ), 
      label: 'Shop', 
      path: '/shop',
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ), 
      label: 'Pest Detection', 
      path: '/pest-detection',
      gradient: 'from-red-500 to-orange-500'
    },
    { 
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ), 
      label: 'Marketplace', 
      path: '/marketplace',
      gradient: 'from-amber-500 to-yellow-500'
    },
    { 
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ), 
      label: 'Knowledge Hub', 
      path: '/knowledge-hub',
      gradient: 'from-indigo-500 to-blue-500'
    },
    { 
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ), 
      label: 'Schemes', 
      path: '/schemes',
      gradient: 'from-teal-500 to-cyan-500'
    },
    { 
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ), 
      label: 'Community', 
      path: '/community',
      gradient: 'from-pink-500 to-rose-500'
    },
    { 
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ), 
      label: 'Future Features', 
      path: '/future-features',
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const keyframeStyles = `
    @keyframes slideUpFromBottom {
      0% { opacity: 0; transform: translateY(30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes floatUp {
      0% { transform: translateY(100vh) translateX(0) rotate(0deg); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(-20px) translateX(${Math.random() * 100 - 50}px) rotate(360deg); opacity: 0; }
    }
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 5px currentColor, 0 0 10px currentColor; }
      50% { box-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor; }
    }
  `;

  return (
    <>
      <style>{keyframeStyles}</style>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 lg:hidden z-30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container - Responsive Width */}
      <div
        className={`fixed left-0 top-0 h-screen w-60 sm:w-64 shadow-2xl transform transition-all duration-300 z-40 lg:relative lg:transform-none flex flex-col relative overflow-hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${isDark ? 'bg-gradient-to-b from-zinc-900 to-black' : 'bg-gradient-to-b from-white to-gray-50'}`}
      >
        {/* Animated Particles Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className={`absolute rounded-full ${
                isDark ? 'bg-gradient-to-r from-emerald-400 to-teal-400' : 'bg-gradient-to-r from-emerald-500 to-teal-500'
              }`}
              style={{
                left: `${particle.left}%`,
                bottom: '-10px',
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: isDark ? 0.4 : 0.3,
                animation: `floatUp ${particle.duration}s linear infinite`,
                animationDelay: `${particle.delay}s`,
                filter: 'blur(1px)',
                boxShadow: isDark ? '0 0 10px rgba(16, 185, 129, 0.5)' : '0 0 8px rgba(16, 185, 129, 0.4)',
              }}
            ></div>
          ))}
        </div>

        {/* Logo - Responsive */}
        <div className={`p-4 sm:p-6 border-b relative z-10 ${
          isDark ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="text-3xl sm:text-4xl animate-bounce" style={{ animationDuration: '2s', filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.5))' }}>
              🌾
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Krishi Sakhi
              </h1>
              <p className={`text-[9px] sm:text-[10px] font-semibold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                SMART FARMING ASSISTANT
              </p>
            </div>
          </div>
        </div>

        {/* Menu Items - Scrollable with Responsive Spacing */}
        <nav className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-1.5 sm:space-y-2 relative z-10 scrollbar-thin scrollbar-thumb-emerald-500 scrollbar-track-transparent">
          {menuItems.map((item, index) => {
            const isActive = location.pathname.includes(item.path);
            return (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 relative overflow-hidden group ${
                  isActive
                    ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg shadow-emerald-500/50`
                    : isDark
                    ? 'text-gray-300 hover:bg-gray-800/50 hover:shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100 hover:shadow-md'
                }`}
                style={{
                  animation: `slideUpFromBottom 0.6s ease-out ${index * 0.08}s backwards`,
                }}
              >
                {/* Shimmer effect on active */}
                {isActive && (
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    style={{
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 3s infinite',
                    }}
                  ></div>
                )}

                {/* Icon with glow effect */}
                <div className={`relative z-10 transition-all duration-300 ${
                  isActive ? 'scale-110' : 'group-hover:scale-110'
                }`}>
                  {item.icon}
                </div>

                {/* Label - Responsive Font */}
                <span className="font-semibold text-xs sm:text-sm relative z-10 tracking-wide">
                  {item.label}
                </span>

                {/* Active indicator dot */}
                {isActive && (
                  <div 
                    className="absolute right-2 sm:right-3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"
                    style={{ animation: 'glow 2s ease-in-out infinite' }}
                  ></div>
                )}

                {/* Hover gradient background */}
                {!isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Logout Button - Responsive */}
        <div className={`p-3 sm:p-4 border-t relative z-10 ${
          isDark ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all text-xs sm:text-sm hover:scale-105 shadow-lg ${
              isDark
                ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white hover:shadow-red-500/50'
                : 'bg-gradient-to-r from-red-500 to-rose-500 text-white hover:shadow-red-500/50'
            }`}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
