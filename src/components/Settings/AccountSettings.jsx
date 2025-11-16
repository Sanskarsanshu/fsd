import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../hooks/useAuth';

const AccountSettings = ({ onShowToast }) => {
  const { theme } = useTheme();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    
    if (passwords.newPassword !== passwords.confirmPassword) {
      onShowToast && onShowToast('Passwords do not match', 'error');
      return;
    }

    if (passwords.newPassword.length < 6) {
      onShowToast && onShowToast('Password must be at least 6 characters', 'error');
      return;
    }

    if (passwords.currentPassword === passwords.newPassword) {
      onShowToast && onShowToast('New password must be different from current password', 'error');
      return;
    }

    setIsChangingPassword(true);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          currentPassword: passwords.currentPassword,
          newPassword: passwords.newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to change password');
      }

      onShowToast && onShowToast('Password changed successfully! Please login again.', 'success');
      
      // Clear password fields
      setPasswords({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });

      // Logout user after 2 seconds
      setTimeout(async () => {
        await logout();
        navigate('/login');
      }, 2000);

    } catch (error) {
      console.error('Error changing password:', error);
      onShowToast && onShowToast(error.message || 'Failed to change password', 'error');
    } finally {
      setIsChangingPassword(false);
    }
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      onShowToast && onShowToast('Account deletion feature coming soon', 'info');
    }
  };

  return (
    <div className="space-y-6">
      {/* Change Password */}
      <div className={`rounded-xl shadow-xl p-6 ${
        theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
      }`}>
        <h2 className={`text-xl font-bold mb-6 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Change Password
        </h2>

        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label className={`block text-sm font-semibold mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Current Password
            </label>
            <input
              type="password"
              value={passwords.currentPassword}
              onChange={(e) => setPasswords(prev => ({ ...prev, currentPassword: e.target.value }))}
              className={`w-full px-4 py-3 rounded-lg border transition-all ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter current password"
              required
            />
          </div>

          <div>
            <label className={`block text-sm font-semibold mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              New Password
            </label>
            <input
              type="password"
              value={passwords.newPassword}
              onChange={(e) => setPasswords(prev => ({ ...prev, newPassword: e.target.value }))}
              className={`w-full px-4 py-3 rounded-lg border transition-all ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter new password (min 6 characters)"
              required
            />
          </div>

          <div>
            <label className={`block text-sm font-semibold mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Confirm New Password
            </label>
            <input
              type="password"
              value={passwords.confirmPassword}
              onChange={(e) => setPasswords(prev => ({ ...prev, confirmPassword: e.target.value }))}
              className={`w-full px-4 py-3 rounded-lg border transition-all ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Confirm new password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isChangingPassword}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
          >
            {isChangingPassword ? 'Changing Password...' : 'Change Password'}
          </button>

          <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            ℹ️ You will be logged out after changing your password
          </p>
        </form>
      </div>

      {/* Danger Zone */}
      <div className={`rounded-xl shadow-xl p-6 border-2 ${
        theme === 'dark'
          ? 'bg-red-900/20 border-red-500'
          : 'bg-red-50 border-red-300'
      }`}>
        <h2 className={`text-xl font-bold mb-4 ${
          theme === 'dark' ? 'text-red-400' : 'text-red-700'
        }`}>
          Danger Zone
        </h2>
        <p className={`text-sm mb-4 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <button
          onClick={handleDeleteAccount}
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;
