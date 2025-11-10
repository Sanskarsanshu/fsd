import React, { useState, useEffect, useRef } from 'react';

const FarmConditions = ({ conditions }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getHealthStatus = (value) => {
    if (value > 80) return { label: '✅ Excellent', color: 'emerald', bg: 'from-emerald-400 to-emerald-600' };
    if (value > 60) return { label: '⚠️ Good', color: 'amber', bg: 'from-amber-400 to-amber-600' };
    if (value > 40) return { label: '⚡ Fair', color: 'blue', bg: 'from-blue-400 to-blue-600' };
    return { label: '❌ Critical', color: 'red', bg: 'from-red-400 to-red-600' };
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white rounded-3xl shadow-2xl p-8 overflow-hidden group perspective-1000"
      style={{
        animation: 'rotate3D 8s ease-in-out infinite',
      }}
    >
      {/* Animated Background Aurora */}
      <div
        className="absolute inset-0 opacity-30 animate-aurora"
        style={{
          background: 'linear-gradient(45deg, #10b981, #14b8a6, #10b981)',
          backgroundSize: '400% 400%',
        }}
      ></div>

      {/* 3D Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-particles-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              '--tx': `${(Math.random() - 0.5) * 200}px`,
              '--ty': `${(Math.random() - 0.5) * 200}px`,
              animation: `particles-float ${2 + Math.random() * 3}s ease-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Scan Line Effect */}
      <div className="absolute inset-0 opacity-5 animate-scan pointer-events-none" style={{
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 4px)',
      }}></div>

      <div className="relative z-10">
        {/* Premium Header */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b-2 border-emerald-200">
          <div className="space-y-2">
            <h2 className="text-4xl font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-lg animate-neon-glow">
              🌾 Farm Health Monitor
            </h2>
            <p className="text-sm text-emerald-700 font-bold flex items-center gap-2">
              <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg neon-glow"></span>
              LIVE • Real-time Environmental Analytics
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-xl opacity-30 animate-neon-glow"></div>
            <div className="relative text-6xl animate-rotate3D drop-shadow-xl">🌾</div>
          </div>
        </div>

        {/* Premium Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Average', value: '85%', icon: '📊', color: 'from-blue-400 to-blue-600' },
            { label: 'Current Peak', value: `${Math.max(...conditions.map(c => c.value))}%`, icon: '⬆️', color: 'from-emerald-400 to-emerald-600' },
            { label: 'Status', value: 'OPTIMAL', icon: '✨', color: 'from-purple-400 to-purple-600' },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-4 border-2 border-white/50 transform hover:scale-105 transition-all duration-300 cursor-pointer group/stat"
              style={{ animation: `data-pulse 2s ease-in-out infinite` }}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-xs text-gray-600 font-bold uppercase">{stat.label}</p>
                  <p className={`text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </p>
                </div>
                <div className="text-3xl group-hover/stat:animate-spin transition-all">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Conditions Cards */}
        <div className="space-y-5">
          {conditions.map((condition, index) => {
            const status = getHealthStatus(condition.value);
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="group/card relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transform: isHovered ? 'perspective(1000px) rotateY(5deg)' : 'perspective(1000px) rotateY(0)',
                  transition: 'transform 0.3s ease-out',
                }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>

                {/* Main Card */}
                <div className="relative glass rounded-2xl p-6 border-2 border-white/60 hover:border-emerald-300 transition-all duration-300 transform hover:scale-[1.02] preserve-3d">
                  {/* Hologram Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/0 via-teal-400/10 to-cyan-400/0 opacity-0 group-hover/card:opacity-100 transition-opacity animate-hologram"></div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <p className="font-bold text-lg flex items-center gap-3 group-hover/card:text-emerald-600 transition-colors">
                        <span className="text-3xl animate-rotate3D drop-shadow-lg">
                          {condition.name === 'Soil Moisture' && '💧'}
                          {condition.name === 'Nutrient Levels' && '🌱'}
                          {condition.name === 'Overall Farm Health' && '✨'}
                        </span>
                        <span className="text-gray-900">{condition.name}</span>
                      </p>
                      <div className="text-3xl font-black bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent animate-neon-glow drop-shadow-lg">
                        {condition.value}%
                      </div>
                    </div>

                    {/* Premium Progress Bar */}
                    <div className="mb-4">
                      <div className="relative h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full overflow-hidden border-2 border-gray-300 shadow-inner">
                        {/* Animated Fill */}
                        <div
                          className={`h-full bg-gradient-to-r ${condition.color} rounded-full transition-all duration-500 relative overflow-hidden group-hover/card:shadow-lg`}
                          style={{ width: `${condition.value}%` }}
                        >
                          {/* Shimmer Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-70 animate-shimmer"></div>

                          {/* Moving Dots */}
                          <div className="absolute inset-0 flex items-center gap-2 pl-2">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="w-2 h-2 bg-white rounded-full opacity-70"
                                style={{
                                  animation: `bounce 0.6s ease-in-out infinite`,
                                  animationDelay: `${i * 0.15}s`,
                                }}
                              />
                            ))}
                          </div>

                          {/* Glow */}
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 to-teal-400/0 group-hover/card:from-emerald-400/30 group-hover/card:to-teal-400/30 transition-all"></div>
                        </div>

                        {/* Animated Border */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/0 to-teal-400/0 group-hover/card:from-emerald-400/20 group-hover/card:to-teal-400/20 transition-all"></div>
                      </div>

                      {/* Percentage Labels */}
                      <div className="mt-2 flex justify-between text-xs font-bold text-gray-700">
                        <span>0%</span>
                        <span className="text-emerald-600 animate-pulse">{condition.value}% Healthy</span>
                        <span>100%</span>
                      </div>
                    </div>

                    {/* Status Indicators */}
                    <div className="flex justify-between items-center">
                      {/* Dots Indicator */}
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 transform hover:scale-125 ${
                              (i + 1) * 20 <= condition.value
                                ? `bg-gradient-to-r ${condition.color} shadow-md`
                                : 'bg-gray-300'
                            }`}
                          ></div>
                        ))}
                      </div>

                      {/* Status Badge */}
                      <span
                        className={`text-xs font-bold px-4 py-2 rounded-full bg-gradient-to-r ${status.bg} text-white shadow-lg animate-neon-glow`}
                      >
                        {status.label}
                      </span>
                    </div>

                    {/* Mini Sparkles */}
                    {isHovered && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-pulse"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                              animation: `bounce ${0.5 + Math.random() * 0.5}s ease-in-out infinite`,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Premium Status Card */}
        <div className="mt-8 relative group/status">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-20 group-hover/status:opacity-40 transition-all duration-300 animate-neon-glow"></div>
          <div className="relative glass rounded-2xl p-6 border-2 border-emerald-300/50 transform hover:scale-[1.02] transition-all duration-300 preserve-3d">
            <div className="flex items-start gap-4">
              <div className="text-6xl animate-hologram drop-shadow-lg">🌟</div>
              <div className="flex-1 space-y-2">
                <p className="text-emerald-900 font-black text-lg">✓ System Status: OPTIMAL</p>
                <p className="text-emerald-700 font-semibold leading-relaxed">
                  All farm metrics are within normal parameters. Advanced AI monitoring indicates excellent growth conditions for the next 7 days.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    Live Monitoring
                  </span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></span>
                    AI Optimized
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { icon: '📊', label: 'Analytics', color: 'from-blue-500 to-blue-600' },
            { icon: '🔔', label: 'Alerts', color: 'from-purple-500 to-purple-600' },
            { icon: '⚙️', label: 'Settings', color: 'from-emerald-500 to-teal-600' },
          ].map((btn, i) => (
            <button
              key={i}
              className={`px-4 py-3 bg-gradient-to-r ${btn.color} text-white rounded-xl font-bold hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 animate-neon-glow`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <span className="text-lg animate-rotate3D">{btn.icon}</span>
              <span className="hidden sm:inline">{btn.label}</span>
            </button>
          ))}
        </div>

        {/* Status Indicator */}
        <div className="mt-6 text-center text-xs text-gray-600 font-bold">
          <p>
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2 shadow-lg" style={{
              boxShadow: '0 0 10px rgba(34, 197, 94, 0.8)'
            }}></span>
            Last updated: Just now • Next update in 30 seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default FarmConditions;
