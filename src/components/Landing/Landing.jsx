import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import CTASection from './CTASection';
// import './Landing.css';
const Landing = () => {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="landing-container min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
      {/* Floating background elements */}
      <div className="floating-element floating-element-1"></div>
      <div className="floating-element floating-element-2"></div>
      <div className="floating-element floating-element-3"></div>

      {/* Navigation Overlay */}
      <div
        className={`nav-overlay ${showNav ? 'active' : ''}`}
        onClick={() => setShowNav(false)}
      ></div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 animate-slideDown">
            <div className="text-3xl">🌾</div>
            <div className="text-2xl font-black gradient-text">Krishi Sakhi</div>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setShowNav(!showNav)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6"
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

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-4 animate-slideDown">
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-2 text-emerald-600 font-semibold hover:bg-emerald-50 rounded-lg transition-colors"
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
        </div>

        {/* Mobile Menu */}
        {showNav && (
          <div className="lg:hidden bg-white border-t border-gray-100 p-4 space-y-3 animate-slideDown">
            <button
              onClick={() => {
                navigate('/login');
                setShowNav(false);
              }}
              className="w-full px-6 py-2 text-emerald-600 font-semibold hover:bg-emerald-50 rounded-lg transition-colors text-left"
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
        <HeroSection onNavigate={navigate} />
        <FeaturesSection />
        <CTASection onGetStarted={() => navigate('/register')} />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🌾</span> Krishi Sakhi
              </h3>
              <p className="text-sm text-gray-400">Empowering farmers with AI-powered solutions</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Weather Intelligence</a></li>
                <li><a href="#" className="hover:text-white transition">Pest Detection</a></li>
                <li><a href="#" className="hover:text-white transition">Marketplace</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 Krishi Sakhi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
