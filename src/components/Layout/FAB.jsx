import React, { useState } from 'react';

const FAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: '💬', label: 'Chat Support', action: () => console.log('Chat Support') },
    { icon: '📞', label: 'Call Us', action: () => console.log('Call Us') },
    { icon: '📧', label: 'Email', action: () => console.log('Email') },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-30">
      {/* Action buttons */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 space-y-3 animate-slideUp">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={() => {
                action.action();
                setIsOpen(false);
              }}
              className="flex items-center gap-3 bg-white rounded-full shadow-lg p-3 hover:shadow-xl transition-all transform hover:scale-105 group"
            >
              <span className="text-xl">{action.icon}</span>
              <span className="text-sm font-medium pr-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Main FAB button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 flex items-center justify-center font-bold text-2xl"
      >
        {isOpen ? '✕' : '?'}
      </button>
    </div>
  );
};

export default FAB;
