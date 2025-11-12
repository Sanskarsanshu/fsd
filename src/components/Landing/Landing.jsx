import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import CTASection from './CTASection';

const Landing = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [showNav, setShowNav] = useState(false);

  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' 
        : 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50'
    }`}>
      {/* Floating background elements */}
      <div className={`absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full blur-[100px] animate-pulse ${
        theme === 'dark' ? 'bg-emerald-500/10' : 'bg-emerald-200/20'
      }`}></div>
      <div className={`absolute bottom-[15%] right-[10%] w-[400px] h-[400px] rounded-full blur-[100px] animate-pulse ${
        theme === 'dark' ? 'bg-teal-500/10' : 'bg-teal-200/20'
      }`} style={{ animationDelay: '2s' }}></div>
      <div className={`absolute top-[50%] right-[20%] w-[250px] h-[250px] rounded-full blur-[100px] animate-pulse ${
        theme === 'dark' ? 'bg-cyan-500/10' : 'bg-cyan-200/20'
      }`} style={{ animationDelay: '4s' }}></div>

      {/* Navigation Overlay */}
      <div
        className={`fixed inset-0 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          showNav ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } ${theme === 'dark' ? 'bg-black/70' : 'bg-black/50'}`}
        onClick={() => setShowNav(false)}
      ></div>

      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-black/80 border-gray-800' 
          : 'bg-white/80 border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="text-3xl">🌾</div>
            <div className={`text-2xl font-black bg-gradient-to-r bg-clip-text text-transparent ${
              theme === 'dark' 
                ? 'from-emerald-400 via-teal-400 to-cyan-400' 
                : 'from-emerald-500 via-teal-500 to-cyan-500'
            }`}>
              Krishi Sakhi
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'hover:bg-gray-800' 
                  : 'hover:bg-gray-100'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <span className="text-2xl">☀️</span>
              ) : (
                <span className="text-2xl">🌙</span>
              )}
            </button>

            <button
              onClick={() => navigate('/login')}
              className={`px-6 py-2 font-semibold rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'text-emerald-400 hover:bg-emerald-900/30'
                  : 'text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => navigate('/register')}
              className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Theme Toggle - Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <span className="text-xl">☀️</span>
              ) : (
                <span className="text-xl">🌙</span>
              )}
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setShowNav(!showNav)}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
            >
              <svg
                className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={showNav ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showNav && (
          <div className={`lg:hidden border-t p-4 space-y-3 transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-black border-gray-800' 
              : 'bg-white border-gray-100'
          }`}>
            <button
              onClick={() => {
                navigate('/login');
                setShowNav(false);
              }}
              className={`w-full px-6 py-2 font-semibold rounded-lg transition-colors text-left ${
                theme === 'dark'
                  ? 'text-emerald-400 hover:bg-emerald-900/30'
                  : 'text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => {
                navigate('/register');
                setShowNav(false);
              }}
              className="w-full px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        <HeroSection onNavigate={navigate} theme={theme} />
        <FeaturesSection theme={theme} />
        <CTASection onGetStarted={() => navigate('/register')} theme={theme} />
      </div>

      {/* Footer */}
      <footer className={`py-12 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-black text-gray-400' 
          : 'bg-gray-900 text-gray-300'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className={`font-bold mb-4 flex items-center gap-2 ${
                theme === 'dark' ? 'text-gray-100' : 'text-white'
              }`}>
                <span className="text-2xl">🌾</span> Krishi Sakhi
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                Empowering farmers with AI-powered solutions
              </p>
            </div>
            <div>
              <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-gray-100' : 'text-white'}`}>
                Features
              </h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className={`transition ${theme === 'dark' ? 'hover:text-emerald-400' : 'hover:text-white'}`}>Weather Intelligence</a></li>
                <li><a href="#" className={`transition ${theme === 'dark' ? 'hover:text-emerald-400' : 'hover:text-white'}`}>Pest Detection</a></li>
                <li><a href="#" className={`transition ${theme === 'dark' ? 'hover:text-emerald-400' : 'hover:text-white'}`}>Marketplace</a></li>
              </ul>
            </div>
            <div>
              <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-gray-100' : 'text-white'}`}>
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className={`transition ${theme === 'dark' ? 'hover:text-emerald-400' : 'hover:text-white'}`}>About Us</a></li>
                <li><a href="#" className={`transition ${theme === 'dark' ? 'hover:text-emerald-400' : 'hover:text-white'}`}>Blog</a></li>
                <li><a href="#" className={`transition ${theme === 'dark' ? 'hover:text-emerald-400' : 'hover:text-white'}`}>Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-gray-100' : 'text-white'}`}>
                Legal
              </h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className={`transition ${theme === 'dark' ? 'hover:text-emerald-400' : 'hover:text-white'}`}>Privacy Policy</a></li>
                <li><a href="#" className={`transition ${theme === 'dark' ? 'hover:text-emerald-400' : 'hover:text-white'}`}>Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className={`border-t pt-8 text-center text-sm ${
            theme === 'dark' ? 'border-gray-800' : 'border-gray-800'
          }`}>
            <p>&copy; 2025 Krishi Sakhi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
