import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Chatbot = ({ onShowToast }) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! How can I help you today? 👋', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return 'Hello! How can I assist you with your farming needs today?';
    } else if (lowerMessage.includes('pest') || lowerMessage.includes('disease')) {
      return 'For pest detection, please visit our Pest Detection page. You can upload images of your crops there for instant analysis.';
    } else if (lowerMessage.includes('scheme') || lowerMessage.includes('subsidy')) {
      return 'Check out our Schemes section to find government schemes and subsidies available for farmers in your area.';
    } else if (lowerMessage.includes('price') || lowerMessage.includes('market')) {
      return 'Visit our Marketplace to check current prices and connect with buyers. We provide real-time market data!';
    } else if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      return 'I\'m here to help! You can ask me about pest detection, market prices, government schemes, or any farming-related queries.';
    } else {
      return 'Thank you for your message! Our support team will get back to you within 24 hours. For immediate assistance, please call our helpline.';
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: botResponse,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const quickReplies = [
    'Pest detection help',
    'Government schemes',
    'Market prices',
    'Contact support'
  ];

  const handleQuickReply = (reply) => {
    setInput(reply);
  };

  const handleClose = () => {
    navigate('/dashboard', { replace: true });
  };

  return (
    <div className={`min-h-full p-4 sm:p-6 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto max-w-4xl h-full">
        <div className={`rounded-lg shadow-xl transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } border flex flex-col`} style={{ height: 'calc(100vh - 200px)' }}>
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 sm:p-6 rounded-t-lg flex items-center gap-4">
            <button
              onClick={handleClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              title="Back to Dashboard"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="flex-1">
              <h1 className="text-white text-xl font-bold">Krishi-Sakhi Support</h1>
              <p className="text-blue-100 text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Online - We typically reply within minutes
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
          }`}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
                <div className={`max-w-[75%] sm:max-w-[70%] rounded-lg p-3 shadow-md ${
                  msg.type === 'user'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-br-none'
                    : theme === 'dark'
                    ? 'bg-gray-700 text-white rounded-bl-none'
                    : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
                }`}>
                  <p className="text-sm sm:text-base">{msg.text}</p>
                  <p className={`text-xs mt-1 ${
                    msg.type === 'user' ? 'text-blue-100' : theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start animate-fadeIn">
                <div className={`rounded-lg p-3 shadow-md ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-white border border-gray-200'
                }`}>
                  <div className="flex gap-1">
                    <span className={`w-2 h-2 rounded-full animate-bounce ${
                      theme === 'dark' ? 'bg-gray-400' : 'bg-gray-500'
                    }`} style={{ animationDelay: '0ms' }}></span>
                    <span className={`w-2 h-2 rounded-full animate-bounce ${
                      theme === 'dark' ? 'bg-gray-400' : 'bg-gray-500'
                    }`} style={{ animationDelay: '150ms' }}></span>
                    <span className={`w-2 h-2 rounded-full animate-bounce ${
                      theme === 'dark' ? 'bg-gray-400' : 'bg-gray-500'
                    }`} style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className={`px-4 pb-2 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <p className={`text-xs mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Quick replies:
              </p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickReply(reply)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all hover:scale-105 ${
                      theme === 'dark'
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSend} className={`p-4 border-t ${
            theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
          }`}>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className={`flex-1 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  theme === 'dark'
                    ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600'
                    : 'bg-gray-100 text-gray-800 placeholder-gray-500 border-gray-300'
                } border`}
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <span className="hidden sm:inline">Send</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
