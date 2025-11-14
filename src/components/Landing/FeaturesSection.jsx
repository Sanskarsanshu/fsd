import React from 'react';

const FeaturesSection = ({ theme }) => {
  const features = [
    {
      icon: '🌤️',
      title: 'Weather Intelligence',
      description: 'Real-time weather data and predictions for better farming decisions',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: '🐛',
      title: 'Pest Detection',
      description: 'AI-powered image recognition to detect pests and diseases early',
      color: 'from-red-400 to-orange-500',
    },
    {
      icon: '💰',
      title: 'Financial Management',
      description: 'Track income, expenses, and profit with detailed analytics',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: '🛒',
      title: 'Direct Marketplace',
      description: 'Connect with verified buyers and get best prices for your produce',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: '📚',
      title: 'Knowledge Base',
      description: 'Learn farming techniques and best practices from experts',
      color: 'from-amber-400 to-orange-500',
    },
    {
      icon: '👥',
      title: 'Community Support',
      description: 'Share experiences and get advice from fellow farmers',
      color: 'from-indigo-400 to-purple-500',
    },
  ];

  return (
    <section className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 rounded-3xl my-20 ${
      theme === 'dark' 
        ? 'bg-gray-900/50 backdrop-blur-sm' 
        : 'bg-white/50 backdrop-blur-sm'
    }`}>
      <div className="text-center mb-16 animate-slideUp">
        <h2 className={`text-4xl md:text-5xl font-black mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Powerful Features for Modern Farmers
        </h2>
        <p className={`text-xl max-w-2xl mx-auto ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Everything you need to succeed in farming is here
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-lg p-8 card-hover animate-slideUp relative overflow-hidden group transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-gray-800 hover:bg-gray-700' 
                : 'bg-white hover:shadow-2xl'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Gradient background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            ></div>

            <div className="relative z-10">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {feature.title}
              </h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                {feature.description}
              </p>
            </div>

            {/* Glow effect on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-300 -z-10`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
