import React, { useEffect } from 'react';

const Toast = ({ show, message, type = 'success', onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  const bgColor = {
    success: 'bg-emerald-500',
    error: 'bg-red-500',
    warning: 'bg-amber-500',
    info: 'bg-blue-500',
  }[type];

  const icon = {
    success: '✓',
    error: '✕',
    warning: '!',
    info: 'i',
  }[type];

  return (
    <div
      className={`fixed top-6 right-6 flex items-center gap-3 px-6 py-4 ${bgColor} text-white rounded-lg shadow-lg z-50 transition-all duration-300 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}
    >
      <span className="text-xl font-bold">{icon}</span>
      <p className="font-medium">{message}</p>
    </div>
  );
};

export default Toast;
