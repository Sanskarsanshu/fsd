import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../hooks/useAuth';

const FeedbackForm = ({ onShowToast }) => {
  const { theme } = useTheme();
  const { user } = useAuth();
  const [feedback, setFeedback] = useState({
    category: 'general',
    subject: '',
    message: '',
    rating: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    { value: 'general', label: 'General Feedback', icon: '💬' },
    { value: 'bug', label: 'Bug Report', icon: '🐛' },
    { value: 'feature', label: 'Feature Request', icon: '✨' },
    { value: 'improvement', label: 'Improvement Suggestion', icon: '📈' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!feedback.subject || !feedback.message) {
      onShowToast && onShowToast('Please fill in all required fields', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...feedback,
          userId: user?._id,
          userName: user?.name,
          userEmail: user?.email,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit feedback');
      }

      onShowToast && onShowToast('Thank you for your feedback!', 'success');
      setFeedback({
        category: 'general',
        subject: '',
        message: '',
        rating: 0,
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      onShowToast && onShowToast('Failed to submit feedback. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`rounded-xl shadow-xl p-6 ${
      theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
    }`}>
      <div className="mb-6">
        <h2 className={`text-xl font-bold mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Submit Feedback
        </h2>
        <p className={`text-sm ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          We value your feedback! Help us improve Krishi-Sakhi.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category */}
        <div>
          <label className={`block text-sm font-semibold mb-3 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Feedback Category
          </label>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setFeedback(prev => ({ ...prev, category: cat.value }))}
                className={`p-4 rounded-lg border-2 transition-all ${
                  feedback.category === cat.value
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : theme === 'dark'
                    ? 'border-gray-700 bg-gray-800 hover:bg-gray-700'
                    : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="text-2xl mb-2">{cat.icon}</div>
                <div className={`text-sm font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {cat.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div>
          <label className={`block text-sm font-semibold mb-3 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            How would you rate your experience?
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setFeedback(prev => ({ ...prev, rating: star }))}
                className="text-3xl transition-transform hover:scale-110"
              >
                {star <= feedback.rating ? '⭐' : '☆'}
              </button>
            ))}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Subject *
          </label>
          <input
            type="text"
            value={feedback.subject}
            onChange={(e) => setFeedback(prev => ({ ...prev, subject: e.target.value }))}
            className={`w-full px-4 py-3 rounded-lg border transition-all ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-700 text-white'
                : 'bg-white border-gray-300 text-gray-900'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Brief summary of your feedback"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Message *
          </label>
          <textarea
            value={feedback.message}
            onChange={(e) => setFeedback(prev => ({ ...prev, message: e.target.value }))}
            rows={6}
            className={`w-full px-4 py-3 rounded-lg border transition-all resize-none ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-700 text-white'
                : 'bg-white border-gray-300 text-gray-900'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Please provide detailed feedback..."
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
