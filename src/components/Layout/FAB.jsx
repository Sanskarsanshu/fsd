import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const FAB = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const actions = [
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ), 
      label: 'Chat Support', 
      action: () => console.log('Chat Support'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ), 
      label: 'Call Us', 
      action: () => console.log('Call Us'),
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ), 
      label: 'Email', 
      action: () => console.log('Email'),
      gradient: 'from-purple-500 to-pink-500'
    },
  ];

  const keyframeStyles = `
    @keyframes slideUpFade {
      0% {
        opacity: 0;
        transform: translateY(20px) scale(0.8);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(180deg); }
    }

    @keyframes pulse {
      0%, 100% {
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
      }
      50% {
        box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
      }
    }

    @keyframes wiggle {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(-10deg); }
      75% { transform: rotate(10deg); }
    }
  `;

  return (
    <>
      <style>{keyframeStyles}</style>
      
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30">
        {/* Action buttons */}
        {isOpen && (
          <div className="absolute bottom-16 sm:bottom-20 right-0 space-y-2 sm:space-y-3">
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={() => {
                  action.action();
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group ${
                  theme === 'dark'
                    ? 'bg-zinc-800 text-white'
                    : 'bg-white text-gray-800'
                }`}
                style={{
                  animation: `slideUpFade 0.3s ease-out ${index * 0.1}s backwards`,
                }}
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r ${action.gradient} flex items-center justify-center text-white shadow-lg`}>
                  {action.icon}
                </div>
                <span className={`text-xs sm:text-sm font-semibold pr-3 sm:pr-4 whitespace-nowrap max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300 ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Main FAB button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center font-bold text-xl sm:text-2xl relative overflow-hidden group ${
            isOpen ? 'bg-gradient-to-r from-red-500 to-rose-500' : 'bg-gradient-to-r from-emerald-500 to-teal-600'
          }`}
          style={{
            animation: isOpen ? '' : 'pulse 2s infinite',
          }}
        >
          {/* Rotating icon */}
          <div
            style={{
              animation: isOpen ? 'rotate 0.3s ease-out' : '',
            }}
          >
            {isOpen ? (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ animation: 'wiggle 1s ease-in-out infinite' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </div>

          {/* Ripple effect on hover */}
          <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
        </button>

        {/* Tooltip */}
        {!isOpen && (
          <div className={`absolute bottom-full right-0 mb-2 px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
            theme === 'dark'
              ? 'bg-zinc-800 text-white'
              : 'bg-gray-800 text-white'
          }`}>
            Need Help?
          </div>
        )}
      </div>
    </>
  );
};

export default FAB;
