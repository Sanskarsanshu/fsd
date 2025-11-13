import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../context/ThemeContext';

const VerifyOTP = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const { forgotPassword } = useAuth();
  
  const email = location.state?.email;
  
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resending, setResending] = useState(false);
  const [timer, setTimer] = useState(60);
  
  const inputRefs = useRef([]);

  // Redirect if no email
  useEffect(() => {
    if (!email) {
      navigate('/forgot-password');
    }
  }, [email, navigate]);

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = pastedData.split('');
    setOtp([...newOtp, ...Array(6 - newOtp.length).fill('')]);
    
    // Focus last filled input
    const lastIndex = Math.min(pastedData.length, 5);
    inputRefs.current[lastIndex]?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join('');

    if (otpValue.length !== 6) {
      setError('Please enter complete OTP');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Navigate to reset password page with email and OTP
      navigate('/reset-password', { state: { email, otp: otpValue } });
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('OTP verification error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (timer > 0) return;

    setResending(true);
    setError('');

    try {
      const result = await forgotPassword(email);

      if (result.success) {
        setTimer(60);
        setOtp(['', '', '', '', '', '']);
        inputRefs.current[0]?.focus();
      } else {
        setError(result.message || 'Failed to resend OTP');
      }
    } catch (err) {
      setError('Failed to resend OTP. Please try again.');
    } finally {
      setResending(false);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 ${theme === 'dark' ? 'bg-black' : 'bg-gradient-to-br from-emerald-50 to-teal-50'}`}>
      <div className={`w-full max-w-md ${theme === 'dark' ? 'bg-zinc-900 border-emerald-500/30' : 'bg-white border-emerald-200'} backdrop-blur-xl rounded-3xl p-8 border-2 shadow-2xl`}>
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">📬</span>
          </div>
          <h2 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}>
            Verify OTP
          </h2>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Enter the 6-digit code sent to
          </p>
          <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}>
            {email}
          </p>
        </div>

        {/* OTP Input */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-2 justify-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className={`w-12 h-14 text-center text-2xl font-bold border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-black border-gray-700 text-white focus:border-emerald-500'
                    : 'bg-white border-gray-300 text-gray-900 focus:border-emerald-500'
                }`}
                style={{
                  boxShadow: digit ? '0 0 0 3px rgba(16, 185, 129, 0.1)' : 'none'
                }}
              />
            ))}
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg text-sm flex items-center gap-2">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || otp.join('').length !== 6}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3.5 rounded-xl transition-all duration-300 disabled:opacity-50 shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                <span>Verifying...</span>
              </>
            ) : (
              <>
                <span>Verify OTP</span>
                <span>→</span>
              </>
            )}
          </button>
        </form>

        {/* Resend OTP */}
        <div className="text-center mt-6">
          {timer > 0 ? (
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Resend OTP in <span className="font-bold text-emerald-500">{timer}s</span>
            </p>
          ) : (
            <button
              onClick={handleResendOTP}
              disabled={resending}
              className={`text-sm font-semibold transition-colors ${
                theme === 'dark' ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-500'
              } disabled:opacity-50`}
            >
              {resending ? 'Resending...' : 'Resend OTP'}
            </button>
          )}
        </div>

        {/* Back to Forgot Password */}
        <div className="text-center mt-4">
          <Link 
            to="/forgot-password" 
            className={`text-sm font-semibold transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-500'}`}
          >
            ← Change Email
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
