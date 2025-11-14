import React, { useState } from 'react';

const FAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: '💬', label: 'Chat', color: 'bg-blue-500' },
    { icon: '🤖', label: 'AI Help', color: 'bg-purple-500' },
    { icon: '📞', label: 'Support', color: 'bg-red-500' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-30">
      {/* Action buttons */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 space-y-3 animate-slideUp">
          {actions.map((action, index) => (
            <button
              key={index}
              className={`flex items-center gap-3 ${action.color} text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-lg">{action.icon}</span>
              <span className="font-semibold text-sm pr-2">{action.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Main FAB button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-2xl transform transition-all duration-300 hover:scale-110 animate-pulse-glow"
      >
        {isOpen ? '✕' : '💬'}
      </button>
    </div>
  );
};

export default FAB;
