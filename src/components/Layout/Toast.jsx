import React, { useEffect } from 'react';

const Toast = ({ show, message, type = 'success', onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 1000); // Changed to 1 second
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  const config = {
    success: { bg: 'bg-emerald-500', icon: '✓' },
    error: { bg: 'bg-red-500', icon: '✕' },
    warning: { bg: 'bg-amber-500', icon: '!' },
    info: { bg: 'bg-blue-500', icon: 'ℹ' },
  };

  const { bg, icon } = config[type] || config.success;

  const keyframeStyles = `
    @keyframes slideInUp {
      0% {
        opacity: 0;
        transform: translateY(100px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideOutDown {
      0% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(100px);
      }
    }

    @keyframes progressBar {
      0% { width: 100%; }
      100% { width: 0%; }
    }
  `;

  return (
    <>
      <style>{keyframeStyles}</style>
      <div
        className={`fixed bottom-6 right-6 flex flex-col gap-2 z-50 transition-all duration-300 ${
          show ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        style={{
          animation: show ? 'slideInUp 0.3s ease-out' : 'slideOutDown 0.3s ease-out',
        }}
      >
        <div className={`flex items-center gap-3 px-6 py-4 ${bg} text-white rounded-lg shadow-2xl min-w-[300px] relative overflow-hidden`}>
          {/* Icon with animation */}
          <span className="text-2xl font-bold animate-bounce" style={{ animationDuration: '0.6s' }}>
            {icon}
          </span>
          
          {/* Message */}
          <p className="font-medium flex-1">{message}</p>

          {/* Close button */}
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors ml-2"
          >
            ✕
          </button>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 h-1 bg-white/30">
            <div
              className="h-full bg-white"
              style={{
                animation: 'progressBar 1s linear forwards',
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toast;
