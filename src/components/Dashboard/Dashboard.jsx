import React, { useEffect } from 'react';
import { MOCK_DATA } from '../../data/mockData';
import WeatherCard from './WeatherCard';
import FarmConditions from './FarmConditions';
import YieldPrediction from './YieldPrediction';
import MarketPrices from './MarketPrices';
import AISuggestions from './AISuggestions';
import UpcomingTasks from './UpcomingTasks';

const Dashboard = ({ onShowToast }) => {
  useEffect(() => {
    onShowToast?.('Welcome to your Farm Dashboard! 🌾', 'success');
  }, [onShowToast]);

  const stats = [
    { icon: '🌾', title: 'Active Fields', value: '5', color: 'from-emerald-400 to-teal-500', count: 5 },
    { icon: '📊', title: 'Total Yield', value: '250 kg', color: 'from-blue-400 to-cyan-500', count: 250 },
    { icon: '💰', title: 'Revenue', value: '₹45,000', color: 'from-green-400 to-emerald-500', count: 45 },
    { icon: '⚠️', title: 'Weather Alerts', value: '2 new', color: 'from-red-400 to-orange-500', count: 2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 p-6 sm:p-8 space-y-8 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-300/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-300/5 rounded-full blur-3xl animate-float-slow"></div>

      <div className="relative z-10">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8 animate-slideDown">
          <div>
            <h1 className="text-5xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-gray-600 font-semibold mt-2">Welcome to your farm management center</p>
          </div>
          <div className="hidden md:block text-6xl animate-wave">👋</div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative overflow-hidden"
              style={{
                animation: `slideUp 0.5s ease-out ${0.1 * i}s both`,
              }}
            >
              {/* Card Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl group-hover:from-emerald-50 group-hover:to-teal-50 transition-all duration-300"></div>

              {/* Animated Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-all duration-300 rounded-2xl`}
              ></div>

              {/* Content */}
              <div className="relative p-6 h-full border-2 border-gray-200 group-hover:border-emerald-300 rounded-2xl transition-all transform hover:scale-105 hover:shadow-xl">
                {/* Icon Background */}
                <div
                  className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 group-hover:shadow-lg transition-all transform group-hover:scale-110 group-hover:rotate-6`}
                >
                  <span className="text-4xl block">{stat.icon}</span>
                </div>

                {/* Text Content */}
                <h3 className="text-gray-600 text-sm font-bold uppercase tracking-widest mb-2">
                  {stat.title}
                </h3>
                <p className="text-3xl font-black text-gray-900 mb-2">{stat.value}</p>

                {/* Progress Indicator */}
                <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 animate-pulse-glow`}
                    style={{
                      width: `${(stat.count / 100) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Weather & Conditions */}
          <div className="lg:col-span-2 space-y-8">
            <WeatherCard weather={MOCK_DATA.weather} />
            <FarmConditions conditions={MOCK_DATA.farmConditions} />
            <MarketPrices prices={MOCK_DATA.marketPrices} />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <YieldPrediction yield={MOCK_DATA.yieldPrediction} />
            <AISuggestions suggestions={MOCK_DATA.aiSuggestions} />
          </div>
        </div>

        {/* Bottom Section - Tasks */}
        <UpcomingTasks tasks={MOCK_DATA.upcomingTasks} />

        {/* Recent Activity & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-8 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-gray-900">Recent Activity</h2>
              <div className="text-4xl animate-bounce-in">📝</div>
            </div>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-emerald-50 hover:to-teal-50 transition-all transform hover:scale-102 hover:shadow-md group/activity"
                  style={{
                    animation: `slideUp 0.5s ease-out ${0.1 * i}s both`,
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold transform group-hover/activity:scale-110 transition-transform">
                    ✓
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">Field {i} watered successfully</p>
                    <p className="text-sm text-gray-600">{2 + i} hours ago</p>
                  </div>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 animate-slideLeft" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-gray-900">Quick Actions</h2>
              <div className="text-4xl animate-bounce-in">⚡</div>
            </div>
            <div className="space-y-3">
              {[
                { icon: '🌾', label: 'Add Field', color: 'from-emerald-500 to-teal-600' },
                { icon: '📸', label: 'Upload Image', color: 'from-blue-500 to-cyan-600' },
                { icon: '📊', label: 'View Report', color: 'from-purple-500 to-pink-600' },
              ].map((action, i) => (
                <button
                  key={i}
                  className={`w-full px-4 py-4 bg-gradient-to-r ${action.color} text-white rounded-xl hover:shadow-lg transition-all transform hover:scale-105 font-bold flex items-center justify-center gap-2 text-lg group`}
                  style={{
                    animation: `slideUp 0.5s ease-out ${0.1 * i}s both`,
                  }}
                >
                  <span className="text-2xl group-hover:animate-spin">{action.icon}</span>
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
