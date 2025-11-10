import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: 'demo@farmer.com',
    password: 'password123',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [focused, setFocused] = useState(null);
  const [particles, setParticles] = useState([]);
  const [circles, setCircles] = useState([]);

  // Generate particles on mount
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 5 + 1,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setParticles(newParticles);

    const newCircles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 150 + 100,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 2,
    }));
    setCircles(newCircles);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

  // All keyframe animations in one style tag
  const keyframeStyles = `
    @keyframes floatParticle {
      0% {
        transform: translateY(100vh) translateX(0) scale(1) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100vh) translateX(150px) scale(0.5) rotate(360deg);
        opacity: 0;
      }
    }

    @keyframes floatOrbX {
      0%, 100% { 
        transform: translateX(0) translateY(0) scale(1);
      }
      33% { 
        transform: translateX(30px) translateY(-20px) scale(1.1);
      }
      66% { 
        transform: translateX(-30px) translateY(20px) scale(0.9);
      }
    }

    @keyframes floatOrbY {
      0%, 100% { 
        transform: translateY(0) translateX(0) scale(1);
      }
      25% { 
        transform: translateY(-35px) translateX(15px) scale(1.05);
      }
      50% { 
        transform: translateY(0) translateX(0) scale(1);
      }
      75% { 
        transform: translateY(35px) translateX(-15px) scale(0.95);
      }
    }

    @keyframes pulseGlowCard {
      0%, 100% {
        box-shadow: 0 0 20px rgba(16, 185, 129, 0.3), 
                    0 0 40px rgba(16, 185, 129, 0.1),
                    inset 0 0 30px rgba(255, 255, 255, 0.2);
        transform: scale(1);
      }
      50% {
        box-shadow: 0 0 40px rgba(16, 185, 129, 0.6), 
                    0 0 80px rgba(16, 185, 129, 0.3),
                    inset 0 0 50px rgba(255, 255, 255, 0.3);
        transform: scale(1.01);
      }
    }

    @keyframes slideUpForm {
      0% {
        opacity: 0;
        transform: translateY(40px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes inputFocusGlow {
      0% {
        box-shadow: 0 0 0px rgba(16, 185, 129, 0);
      }
      100% {
        box-shadow: 0 0 20px rgba(16, 185, 129, 0.5), 
                    0 0 40px rgba(16, 185, 129, 0.3),
                    inset 0 0 10px rgba(16, 185, 129, 0.1);
      }
    }

    @keyframes inputFocusTeal {
      0% {
        box-shadow: 0 0 0px rgba(13, 148, 136, 0);
      }
      100% {
        box-shadow: 0 0 20px rgba(13, 148, 136, 0.5), 
                    0 0 40px rgba(13, 148, 136, 0.3),
                    inset 0 0 10px rgba(13, 148, 136, 0.1);
      }
    }

    @keyframes buttonGradientShift {
      0% {
        background-position: 0% center;
      }
      50% {
        background-position: 100% center;
      }
      100% {
        background-position: 0% center;
      }
    }

    @keyframes slideDownError {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes shimmerWave {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }

    @keyframes pulseRing {
      0% {
        transform: scale(0.95);
        opacity: 1;
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
      }
      50% {
        box-shadow: 0 0 0 20px rgba(16, 185, 129, 0);
      }
      100% {
        transform: scale(1.3);
        opacity: 0;
        box-shadow: 0 0 0 40px rgba(16, 185, 129, 0);
      }
    }

    @keyframes orbPulse {
      0%, 100% {
        filter: blur(60px);
        opacity: 0.25;
        transform: scale(1);
      }
      50% {
        filter: blur(80px);
        opacity: 0.5;
        transform: scale(1.15);
      }
    }

    @keyframes bounceInIcon {
      0% {
        opacity: 0;
        transform: scale(0.3) rotateZ(-90deg);
      }
      50% {
        opacity: 1;
        transform: scale(1.1);
      }
      100% {
        opacity: 1;
        transform: scale(1) rotateZ(0deg);
      }
    }

    @keyframes glowText {
      0%, 100% {
        text-shadow: 0 0 10px rgba(16, 185, 129, 0.5),
                     0 0 20px rgba(6, 182, 212, 0.3);
      }
      50% {
        text-shadow: 0 0 20px rgba(16, 185, 129, 0.8), 
                     0 0 30px rgba(6, 182, 212, 0.6),
                     0 0 40px rgba(16, 185, 129, 0.4);
      }
    }

    @keyframes gradientBgShift {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    @keyframes rotateDivider {
      0% {
        transform: scaleX(0);
        opacity: 0;
      }
      100% {
        transform: scaleX(1);
        opacity: 1;
      }
    }

    @keyframes floatCorner {
      0%, 100% {
        transform: rotate(45deg) translateY(0) translateX(0);
        opacity: 0.5;
      }
      50% {
        transform: rotate(45deg) translateY(20px) translateX(-20px);
        opacity: 0.8;
      }
    }

    @keyframes scanLines {
      0% {
        transform: translateY(-100%);
      }
      100% {
        transform: translateY(100%);
      }
    }

    @keyframes shimmerCard {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }

    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(60px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Utility Classes */
    .particle {
      animation: floatParticle linear infinite;
    }

    .orb-x {
      animation: floatOrbX 8s ease-in-out infinite;
    }

    .orb-y {
      animation: floatOrbY 10s ease-in-out infinite;
    }

    .pulse-glow-card {
      animation: pulseGlowCard 3s ease-in-out infinite;
    }

    .slide-up {
      animation: slideUpForm 0.6s ease-out forwards;
    }

    .input-focus-emerald {
      animation: inputFocusGlow 0.3s ease-out forwards;
    }

    .input-focus-teal {
      animation: inputFocusTeal 0.3s ease-out forwards;
    }

    .button-gradient {
      animation: buttonGradientShift 4s ease infinite;
      background-size: 200% 100%;
    }

    .slide-down-error {
      animation: slideDownError 0.5s ease-out forwards;
    }

    .shimmer {
      animation: shimmerWave 2s infinite;
    }

    .shimmer-card {
      animation: shimmerCard 3s infinite;
    }

    .bounce-icon {
      animation: bounceInIcon 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .glow-text {
      animation: glowText 2s ease-in-out infinite;
    }

    .orb-pulse {
      animation: orbPulse 4s ease-in-out infinite;
    }

    .pulse-ring {
      animation: pulseRing 2s ease-out infinite;
    }

    .rotate-divider {
      animation: rotateDivider 0.5s ease-out forwards;
    }

    .float-corner {
      animation: floatCorner 4s ease-in-out infinite;
    }

    .fade-in-up {
      animation: fadeInUp 0.8s ease-out forwards;
    }
  `;

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4 overflow-hidden">
      <style>{keyframeStyles}</style>

      {/* ========== BACKGROUND LAYER ========== */}

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main gradient shift background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
            backgroundSize: '400% 400%',
            animation: 'gradientBgShift 15s ease infinite',
            opacity: 0.05,
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={`particle-${particle.id}`}
            className="particle absolute rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animation: `floatParticle ${particle.duration}s linear infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Animated Background Circles/Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {circles.map((circle) => (
          <div
            key={`circle-${circle.id}`}
            className="absolute rounded-full orb-pulse"
            style={{
              left: `${circle.left}%`,
              top: `${circle.top}%`,
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              background: `radial-gradient(circle, rgba(16, 185, 129, 0.2), transparent 70%)`,
              animation: `floatOrbX ${circle.duration}s ease-in-out infinite, orbPulse ${circle.duration}s ease-in-out infinite`,
              animationDelay: `${circle.delay}s`,
              transform: 'translate(-50%, -50%)',
            }}
          ></div>
        ))}

        {/* Large decorative orbs */}
        <div
          className="absolute w-96 h-96 rounded-full orb-x orb-pulse"
          style={{
            top: '15%',
            left: '10%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent)',
          }}
        ></div>

        <div
          className="absolute w-96 h-96 rounded-full orb-y orb-pulse"
          style={{
            bottom: '15%',
            right: '10%',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent)',
            animationDelay: '1s',
          }}
        ></div>

        <div
          className="absolute w-72 h-72 rounded-full orb-x orb-pulse"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(13, 148, 136, 0.2), transparent)',
            animationDelay: '2s',
          }}
        ></div>

        {/* Pulsing rings */}
        <div
          className="absolute pulse-ring"
          style={{
            top: '25%',
            left: '15%',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            border: '2px solid rgba(16, 185, 129, 0.3)',
          }}
        ></div>

        <div
          className="absolute pulse-ring"
          style={{
            bottom: '20%',
            right: '12%',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: '2px solid rgba(6, 182, 212, 0.3)',
            animationDelay: '1s',
          }}
        ></div>
      </div>

      {/* ========== MAIN CONTENT ========== */}

      <div className="relative z-10 w-full max-w-md">
        {/* Outer glow effect */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl opacity-0 blur-3xl transition-opacity duration-500"
          style={{
            opacity: focused ? 0.4 : 0.15,
          }}
        ></div>

        {/* Main Card */}
        <div
          className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border-2 border-white/40 pulse-glow-card overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(255,255,255,0.92))',
          }}
        >
          {/* Shimmer overlay */}
          <div
            className="absolute inset-0 shimmer-card rounded-3xl"
            style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.3), rgba(255,255,255,0))',
              backgroundSize: '200% 100%',
              pointerEvents: 'none',
            }}
          ></div>

          {/* Scan lines effect */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 2px)',
              animation: 'scanLines 8s linear infinite',
            }}
          ></div>

          {/* Card Content */}
          <div className="relative z-10 space-y-6">
            {/* Header Section */}
            <div className="text-center space-y-3">
              <div className="flex justify-center mb-4">
                <div
                  className="bounce-icon"
                  style={{
                    fontSize: '3.5rem',
                  }}
                >
                  🌾
                </div>
              </div>

              <h2
                className="text-4xl font-black glow-text"
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #0d9488 50%, #06b6d4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'slideUpForm 0.6s ease-out forwards',
                  animationDelay: '0.1s',
                }}
              >
                Welcome Back
              </h2>

              <p
                className="text-gray-600 text-sm font-medium"
                style={{
                  animation: 'slideUpForm 0.6s ease-out forwards',
                  animationDelay: '0.2s',
                }}
              >
                Login to your farm dashboard
              </p>
            </div>

            {/* Demo Info Box */}
            <div
              className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-cyan-500 p-4 rounded-lg border-2 border-cyan-100"
              style={{
                animation: 'slideUpForm 0.6s ease-out forwards',
                animationDelay: '0.3s',
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.1)',
              }}
            >
              <p className="text-xs text-gray-600 font-bold mb-2">
                <span className="text-cyan-600">✨ Demo Credentials:</span>
              </p>
              <div className="space-y-1 text-xs text-gray-700">
                <p>
                  📧 <span className="font-mono bg-white/60 px-2 py-1 rounded">demo@farmer.com</span>
                </p>
                <p>
                  🔑 <span className="font-mono bg-white/60 px-2 py-1 rounded">password123</span>
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div
                className="space-y-2"
                style={{
                  animation: 'slideUpForm 0.6s ease-out forwards',
                  animationDelay: '0.4s',
                }}
              >
                <label className="block text-sm font-bold text-gray-800">
                  📧 Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    placeholder="farmer@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none transition-all duration-300 font-medium text-gray-900 placeholder-gray-400"
                    style={{
                      boxShadow:
                        focused === 'email'
                          ? '0 0 20px rgba(16, 185, 129, 0.5), 0 0 40px rgba(16, 185, 129, 0.3), inset 0 0 10px rgba(16, 185, 129, 0.1)'
                          : 'none',
                      borderColor: focused === 'email' ? '#10b981' : '#d1d5db',
                    }}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div
                className="space-y-2"
                style={{
                  animation: 'slideUpForm 0.6s ease-out forwards',
                  animationDelay: '0.5s',
                }}
              >
                <label className="block text-sm font-bold text-gray-800">
                  🔒 Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => setFocused('password')}
                    onBlur={() => setFocused(null)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none transition-all duration-300 font-medium text-gray-900 placeholder-gray-400"
                    style={{
                      boxShadow:
                        focused === 'password'
                          ? '0 0 20px rgba(13, 148, 136, 0.5), 0 0 40px rgba(13, 148, 136, 0.3), inset 0 0 10px rgba(13, 148, 136, 0.1)'
                          : 'none',
                      borderColor: focused === 'password' ? '#0d9488' : '#d1d5db',
                    }}
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div
                  className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700 text-sm rounded-lg font-semibold"
                  style={{
                    animation: 'slideDownError 0.5s ease-out forwards',
                    boxShadow: '0 0 15px rgba(239, 68, 68, 0.2)',
                  }}
                >
                  ⚠️ {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full relative group overflow-hidden rounded-xl"
                style={{
                  animation: 'slideUpForm 0.6s ease-out forwards',
                  animationDelay: '0.6s',
                }}
              >
                {/* Glow background */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-75 group-hover:opacity-100 blur-lg transition-all duration-300"
                  style={{
                    animation: 'buttonGradientShift 4s ease infinite',
                    backgroundSize: '200% 100%',
                  }}
                ></div>

                {/* Button Content */}
                <div
                  className="relative bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group-hover:shadow-2xl"
                  style={{
                    boxShadow: focused ? '0 0 20px rgba(16, 185, 129, 0.5)' : 'none',
                  }}
                >
                  {loading ? (
                    <>
                      <span
                        className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full"
                        style={{
                          animation: 'spin 0.8s linear infinite',
                        }}
                      ></span>
                      <span>Logging in...</span>
                    </>
                  ) : (
                    <>
                      <span>🚀</span>
                      <span>Login to Dashboard</span>
                    </>
                  )}
                </div>
              </button>
            </form>

            {/* Divider */}
            <div
              className="relative flex items-center gap-4"
              style={{
                animation: 'slideUpForm 0.6s ease-out forwards',
                animationDelay: '0.7s',
              }}
            >
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent rotate-divider"></div>
              <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Or</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent rotate-divider"></div>
            </div>

            {/* Register Link */}
            <div
              className="text-center pt-2"
              style={{
                animation: 'slideUpForm 0.6s ease-out forwards',
                animationDelay: '0.8s',
              }}
            >
              <p className="text-gray-700 text-sm font-medium">
                Don't have an account?{' '}
                <Link
                  to="/register"
                  className="font-bold transition-all duration-300 relative inline-block group"
                  style={{
                    background: 'linear-gradient(135deg, #10b981, #0d9488, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Register here
                  <span
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:w-full transition-all duration-300"
                    style={{
                      width: '0%',
                    }}
                  ></span>
                </Link>
              </p>
            </div>
          </div>

          {/* Corner Decorations */}
          <div
            className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-emerald-200/10 to-transparent rounded-lg transform float-corner opacity-50"
            style={{
              pointerEvents: 'none',
            }}
          ></div>
          <div
            className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-cyan-200/10 to-transparent rounded-lg transform float-corner opacity-50"
            style={{
              pointerEvents: 'none',
              animationDelay: '1s',
            }}
          ></div>
        </div>

        {/* Bottom Branding */}
        <p
          className="text-center text-xs text-gray-600 mt-8 font-semibold"
          style={{
            animation: 'slideUpForm 0.6s ease-out forwards',
            animationDelay: '0.9s',
          }}
        >
          🌱 Powered by{' '}
          <span
            className="glow-text"
            style={{
              background: 'linear-gradient(135deg, #10b981, #0d9488, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Krishi Sakhi
          </span>{' '}
          - Smart Farm Assistant
        </p>
      </div>
    </div>
  );
};

export default Login;
