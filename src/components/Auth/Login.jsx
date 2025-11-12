import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../context/ThemeContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    email: 'demo@farmer.com',
    password: 'password123',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (!formData.email || !formData.password) {
        setError('Please fill all fields');
        setLoading(false);
        return;
      }

      if (!formData.email.includes('@')) {
        setError('Please enter a valid email');
        setLoading(false);
        return;
      }

      const userData = {
        id: Math.random(),
        email: formData.email,
        name: formData.email.split('@')[0],
        farmName: 'My Farm',
      };

      login(userData);
      setLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  const keyframeStyles = `
    @keyframes slideIn {
      0% { opacity: 0; transform: translateX(-30px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideInRight {
      0% { opacity: 0; transform: translateX(30px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `;

  return (
    <div className="fixed inset-0 w-screen h-screen flex overflow-hidden">
      <style>{keyframeStyles}</style>
{/* 
      Theme Toggle Button
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-2.5 bg-white dark:bg-black backdrop-blur-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-emerald-200 dark:border-emerald-500"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <span className="text-xl">☀️</span> : <span className="text-xl">🌙</span>}
      </button> */}

      {/* LEFT SIDE - Info Panel */}
      <div className={`hidden lg:flex lg:w-1/2 ${theme === 'dark' ? 'bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600' : 'bg-gradient-to-br from-teal-400 via-emerald-400 to-cyan-400'} p-12 flex-col justify-center items-center relative overflow-hidden transition-all duration-300`}>
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" style={{ animation: 'pulse 2s ease-in-out infinite', animationDelay: '1s' }}></div>
        
        {/* Animated Icons */}
        <div className="absolute top-1/4 right-1/4 text-6xl opacity-20" style={{ animation: 'float 3s ease-in-out infinite' }}>🌿</div>
        <div className="absolute bottom-1/3 left-1/4 text-5xl opacity-20" style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '1s' }}>🌱</div>

        {/* Content */}
        <div className="relative z-10 text-center" style={{ animation: 'slideIn 0.8s ease-out' }}>
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
              WELCOME TO<br />KRISHI SAKHI
            </h1>
            <div className="h-1 w-32 bg-white/50 mx-auto rounded-full mb-6"></div>
          </div>

          <p className="text-white/90 text-lg md:text-xl max-w-md mx-auto leading-relaxed mb-8">
            We want you to feel at home with us! We're here to make sure you have everything you need to feel{' '}
            <span className="font-bold text-white">comfortable, confident</span>, and ready to make an{' '}
            <span className="font-bold text-white">impact</span>.
          </p>

          {/* Logo/Brand */}
          <div className={`mt-12 ${theme === 'dark' ? 'bg-white' : 'bg-white/95'} rounded-3xl px-8 py-6 inline-block shadow-2xl`}>
            <div className="flex items-center gap-4">
              <div className="text-6xl" style={{ animation: 'float 2s ease-in-out infinite' }}>🌾</div>
              <h2 className="text-4xl font-black bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Krishi Sakhi
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - Login Form */}
      <div className={`w-full lg:w-1/2 relative flex items-center justify-center p-6 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        {/* Background Image Overlay (only in light mode) */}
        {theme === 'light' && (
          <>
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200')` }}></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-emerald-50/50 to-teal-50/50"></div>
          </>
        )}

        {/* Dark Mode Background Pattern */}
        {theme === 'dark' && (
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          </div>
        )}

        {/* Form Container */}
        <div className="relative z-10 w-full max-w-md" style={{ animation: 'slideInRight 0.8s ease-out' }}>
          <div className={`${theme === 'dark' ? 'bg-zinc-900 border-emerald-500/30' : 'bg-white border-emerald-200'} backdrop-blur-xl rounded-3xl p-8 border-2 shadow-2xl transition-all duration-300`}>
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}>
                Welcome Back
              </h2>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Login to your farm dashboard
              </p>
            </div>

            {/* Google Login */}
            <button className={`w-full ${theme === 'dark' ? 'bg-white hover:bg-gray-100' : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'} text-gray-800 font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-3 mb-6 transition-all duration-300 shadow-md`}>
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Login with Google</span>
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className={`flex-1 h-px ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
              <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>or</span>
              <div className={`flex-1 h-px ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  *Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  placeholder="demo@farmer.com"
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-black border-gray-700 text-white placeholder-gray-600 focus:border-emerald-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500'
                  }`}
                  style={{ boxShadow: focused === 'email' ? '0 0 0 3px rgba(16, 185, 129, 0.1)' : 'none' }}
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => setFocused('password')}
                  onBlur={() => setFocused(null)}
                  placeholder="••••••••••"
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-black border-gray-700 text-white placeholder-gray-600 focus:border-emerald-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500'
                  }`}
                  style={{ boxShadow: focused === 'password' ? '0 0 0 3px rgba(16, 185, 129, 0.1)' : 'none' }}
                />
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg text-sm">
                  ⚠️ {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3.5 rounded-xl transition-all duration-300 disabled:opacity-50 shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>Logging in...</span>
                  </>
                ) : (
                  <span>Login to Dashboard</span>
                )}
              </button>
            </form>

            <div className="text-center mt-6">
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Don't have an account?{' '}
                <Link to="/register" className="text-emerald-500 hover:text-emerald-400 font-semibold transition-colors">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Logo Banner */}
      <div className={`lg:hidden absolute top-0 left-0 right-0 ${theme === 'dark' ? 'bg-gradient-to-r from-emerald-600 to-teal-600' : 'bg-gradient-to-r from-teal-500 to-emerald-500'} p-4 text-center z-20`}>
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl">🌾</span>
          <h2 className="text-xl font-black text-white">Krishi Sakhi</h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
