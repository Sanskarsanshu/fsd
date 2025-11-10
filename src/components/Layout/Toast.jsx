import React, { useEffect } from 'react';

const Toast = ({ show, message, type = 'success', onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
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

  return (
    <div
      className={`fixed bottom-6 right-6 flex items-center gap-3 px-6 py-4 ${bg} text-white rounded-lg shadow-lg z-50 transition-all duration-300 animate-slide-fade-in ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
      }`}
    >
      <span className="text-xl font-bold">{icon}</span>
      <p className="font-medium">{message}</p>
    </div>
  );
};

export default Toast;
