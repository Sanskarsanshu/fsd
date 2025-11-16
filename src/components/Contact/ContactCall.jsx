import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const ContactCall = ({ onShowToast }) => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const callContacts = [
    {
      department: 'Customer Support',
      phone: '+91 1800-XXX-XXXX',
      hours: 'Mon-Sat: 9 AM - 6 PM IST',
      description: 'For general support and farming-related queries',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      department: 'Technical Support',
      phone: '+91 1800-YYY-YYYY',
      hours: '24/7 Available',
      description: 'For urgent technical issues and app-related problems',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      department: 'Sales & Partnerships',
      phone: '+91 1800-ZZZ-ZZZZ',
      hours: 'Mon-Fri: 10 AM - 5 PM IST',
      description: 'For business inquiries and partnership opportunities',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      department: 'Emergency Helpline',
      phone: '+91 1800-AAA-AAAA',
      hours: '24/7 Available',
      description: 'For urgent farming emergencies and crisis support',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      gradient: 'from-red-500 to-rose-500'
    }
  ];

  const handleClose = () => {
    navigate('/dashboard', { replace: true });
  };

  return (
    <div className={`min-h-full p-4 sm:p-6 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto max-w-4xl">
        <div className={`rounded-lg shadow-xl transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } border p-6 sm:p-8`}>
          
          {/* Header with Close Button */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={handleClose}
              className={`p-2 rounded-full transition-all hover:scale-110 ${
                theme === 'dark' 
                  ? 'hover:bg-gray-700 text-gray-300' 
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
              title="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h1 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                Call Us
              </h1>
              <p className={`text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Speak directly with our team
              </p>
            </div>
            <div className="w-10"></div> {/* Spacer for centering */}
          </div>

          <div className="space-y-4">
            {callContacts.map((contact, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-lg border-2 transition-all hover:shadow-lg group ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 hover:border-green-500'
                    : 'bg-gray-50 border-gray-200 hover:border-green-500'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.gradient} text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                      {contact.department}
                    </h3>
                    <a
                      href={`tel:${contact.phone.replace(/\D/g, '')}`}
                      className={`text-2xl font-bold mb-3 block bg-gradient-to-r ${contact.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                    >
                      {contact.phone}
                    </a>
                    <div className="flex items-center gap-2 mb-2">
                      <svg className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {contact.hours}
                      </span>
                    </div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      {contact.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className={`mt-6 p-4 rounded-lg border ${
            theme === 'dark' 
              ? 'bg-blue-900/20 border-blue-800' 
              : 'bg-blue-50 border-blue-200'
          }`}>
            <div className="flex items-start gap-3">
              <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-500'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>Note:</strong> Standard call charges may apply. For international callers, please check with your service provider for rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCall;
