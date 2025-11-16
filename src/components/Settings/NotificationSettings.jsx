import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const NotificationSettings = ({ onShowToast }) => {
  const { theme } = useTheme();
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: false,
    marketUpdates: true,
    pestAlerts: true,
    weatherAlerts: true,
    schemeUpdates: false,
    communityUpdates: false,
  });

  const handleToggle = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    // Save notification preferences
    onShowToast && onShowToast('Notification preferences saved!', 'success');
  };

  const NotificationToggle = ({ label, description, enabled, onToggle }) => (
    <div className={`p-4 rounded-lg ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className={`font-semibold mb-1 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {label}
          </h3>
          <p className={`text-sm ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {description}
          </p>
        </div>
        <button
          onClick={onToggle}
          className={`relative w-14 h-7 rounded-full transition-all ${
            enabled
              ? 'bg-gradient-to-r from-blue-500 to-purple-500'
              : theme === 'dark'
              ? 'bg-gray-700'
              : 'bg-gray-300'
          }`}
        >
          <div
            className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
              enabled ? 'translate-x-7' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Communication Channels */}
      <div className={`rounded-xl shadow-xl p-6 ${
        theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
      }`}>
        <h2 className={`text-xl font-bold mb-6 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Communication Channels
        </h2>
        <div className="space-y-3">
          <NotificationToggle
            label="Email Notifications"
            description="Receive notifications via email"
            enabled={notifications.emailNotifications}
            onToggle={() => handleToggle('emailNotifications')}
          />
          <NotificationToggle
            label="Push Notifications"
            description="Receive push notifications on your device"
            enabled={notifications.pushNotifications}
            onToggle={() => handleToggle('pushNotifications')}
          />
          <NotificationToggle
            label="SMS Notifications"
            description="Receive notifications via SMS"
            enabled={notifications.smsNotifications}
            onToggle={() => handleToggle('smsNotifications')}
          />
        </div>
      </div>

      {/* Content Preferences */}
      <div className={`rounded-xl shadow-xl p-6 ${
        theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
      }`}>
        <h2 className={`text-xl font-bold mb-6 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Content Preferences
        </h2>
        <div className="space-y-3">
          <NotificationToggle
            label="Market Updates"
            description="Get updates on crop prices and market trends"
            enabled={notifications.marketUpdates}
            onToggle={() => handleToggle('marketUpdates')}
          />
          <NotificationToggle
            label="Pest & Disease Alerts"
            description="Receive alerts about pest outbreaks in your area"
            enabled={notifications.pestAlerts}
            onToggle={() => handleToggle('pestAlerts')}
          />
          <NotificationToggle
            label="Weather Alerts"
            description="Get weather updates and warnings"
            enabled={notifications.weatherAlerts}
            onToggle={() => handleToggle('weatherAlerts')}
          />
          <NotificationToggle
            label="Government Scheme Updates"
            description="Stay informed about new schemes and subsidies"
            enabled={notifications.schemeUpdates}
            onToggle={() => handleToggle('schemeUpdates')}
          />
          <NotificationToggle
            label="Community Updates"
            description="Receive updates from the farming community"
            enabled={notifications.communityUpdates}
            onToggle={() => handleToggle('communityUpdates')}
          />
        </div>
      </div>

      <button
        onClick={handleSave}
        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
      >
        Save Preferences
      </button>
    </div>
  );
};

export default NotificationSettings;