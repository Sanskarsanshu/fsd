// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
// import { useTheme } from '../../context/ThemeContext';

// const Register = () => {
//   const navigate = useNavigate();
//   const { register } = useAuth();
//   const { theme, toggleTheme } = useTheme();
//   const [formData, setFormData] = useState({
//     name: '',
//     farmName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     cropType: 'coconut',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [focused, setFocused] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setError('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill all required fields');
//       setLoading(false);
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       setLoading(false);
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters');
//       setLoading(false);
//       return;
//     }

//     setTimeout(() => {
//       const userData = {
//         id: Math.random(),
//         name: formData.name,
//         email: formData.email,
//         farmName: formData.farmName,
//         cropType: formData.cropType,
//       };

//       register(userData);
//       setLoading(false);
//       navigate('/dashboard');
//     }, 1500);
//   };

//   const crops = ['coconut', 'banana', 'rice', 'wheat', 'sugarcane', 'cotton'];

//   const keyframeStyles = `
//     @keyframes slideIn {
//       0% { opacity: 0; transform: translateX(-30px); }
//       100% { opacity: 1; transform: translateX(0); }
//     }
//     @keyframes slideInRight {
//       0% { opacity: 0; transform: translateX(30px); }
//       100% { opacity: 1; transform: translateX(0); }
//     }
//     @keyframes float {
//       0%, 100% { transform: translateY(0px); }
//       50% { transform: translateY(-20px); }
//     }
//     @keyframes pulse {
//       0%, 100% { opacity: 1; }
//       50% { opacity: 0.5; }
//     }
//     .custom-scrollbar::-webkit-scrollbar { width: 6px; }
//     .custom-scrollbar::-webkit-scrollbar-track { 
//       background: ${theme === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.05)'}; 
//       border-radius: 10px; 
//     }
//     .custom-scrollbar::-webkit-scrollbar-thumb { 
//       background: rgba(16, 185, 129, 0.5); 
//       border-radius: 10px; 
//     }
//     .custom-scrollbar::-webkit-scrollbar-thumb:hover { 
//       background: rgba(16, 185, 129, 0.7); 
//     }
//   `;

//   return (
//     <div className="fixed inset-0 w-screen h-screen flex overflow-hidden">
//       <style>{keyframeStyles}</style>

//       {/* Theme Toggle
//       <button
//         onClick={toggleTheme}
//         className="fixed top-4 right-4 z-50 p-2.5 bg-white dark:bg-black backdrop-blur-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-emerald-200 dark:border-emerald-500"
//         aria-label="Toggle theme"
//       >
//         {theme === 'dark' ? <span className="text-xl">☀️</span> : <span className="text-xl">🌙</span>}
//       </button> */}

//       {/* LEFT SIDE */}
//       <div className={`hidden lg:flex lg:w-1/2 ${theme === 'dark' ? 'bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600' : 'bg-gradient-to-br from-teal-400 via-emerald-400 to-cyan-400'} p-12 flex-col justify-center items-center relative overflow-hidden transition-all duration-300`}>
//         <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" style={{ animation: 'pulse 2s ease-in-out infinite', animationDelay: '1s' }}></div>
        
//         <div className="absolute top-1/4 right-1/4 text-6xl opacity-20" style={{ animation: 'float 3s ease-in-out infinite' }}>🌿</div>
//         <div className="absolute bottom-1/3 left-1/4 text-5xl opacity-20" style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '1s' }}>🌱</div>

//         <div className="relative z-10 text-center" style={{ animation: 'slideIn 0.8s ease-out' }}>
//           <div className="mb-8">
//             <h1 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
//               JOIN US<br />TODAY
//             </h1>
//             <div className="h-1 w-32 bg-white/50 mx-auto rounded-full mb-6"></div>
//           </div>

//           <p className="text-white/90 text-lg md:text-xl max-w-md mx-auto leading-relaxed mb-8">
//             Start your journey with <span className="font-bold text-white">Krishi Sakhi</span>! Create your account and unlock powerful farming tools to{' '}
//             <span className="font-bold text-white">grow smarter</span> and{' '}
//             <span className="font-bold text-white">harvest better</span>.
//           </p>

//           <div className={`mt-12 ${theme === 'dark' ? 'bg-white' : 'bg-white/95'} rounded-3xl px-8 py-6 inline-block shadow-2xl`}>
//             <div className="flex items-center gap-4">
//               <div className="text-6xl" style={{ animation: 'float 2s ease-in-out infinite' }}>🌾</div>
//               <h2 className="text-4xl font-black bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
//                 Krishi Sakhi
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE - Register Form */}
//       <div className={`w-full lg:w-1/2 relative flex items-center justify-center p-6 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
//         {theme === 'light' && (
//           <>
//             <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200')` }}></div>
//             <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-emerald-50/50 to-teal-50/50"></div>
//           </>
//         )}

//         {theme === 'dark' && (
//           <div className="absolute inset-0 bg-black">
//             <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
//           </div>
//         )}

//         <div className="relative z-10 w-full max-w-md" style={{ animation: 'slideInRight 0.8s ease-out' }}>
//           <div className={`${theme === 'dark' ? 'bg-zinc-900 border-emerald-500/30' : 'bg-white border-emerald-200'} backdrop-blur-xl rounded-3xl p-6 border-2 shadow-2xl max-h-[90vh] flex flex-col transition-all duration-300`}>
//             {/* Header */}
//             <div className="text-center mb-4 flex-shrink-0">
//               <h2 className={`text-2xl md:text-3xl font-bold mb-1 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}>
//                 Join Krishi Sakhi
//               </h2>
//               <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
//                 Create your farm account
//               </p>
//             </div>

//             {/* Scrollable Form */}
//             <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
//               <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-4">
//                 <div>
//                   <label className={`block text-xs font-semibold mb-1.5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
//                     👤 Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     onFocus={() => setFocused('name')}
//                     onBlur={() => setFocused(null)}
//                     placeholder="Your name"
//                     className={`w-full px-3 py-2.5 border-2 rounded-xl text-sm focus:outline-none transition-all ${
//                       theme === 'dark'
//                         ? 'bg-black border-gray-700 text-white placeholder-gray-600 focus:border-emerald-500'
//                         : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500'
//                     }`}
//                     style={{ boxShadow: focused === 'name' ? '0 0 0 3px rgba(16, 185, 129, 0.1)' : 'none' }}
//                   />
//                 </div>

//                 <div>
//                   <label className={`block text-xs font-semibold mb-1.5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
//                     🏡 Farm Name
//                   </label>
//                   <input
//                     type="text"
//                     name="farmName"
//                     value={formData.farmName}
//                     onChange={handleChange}
//                     onFocus={() => setFocused('farmName')}
//                     onBlur={() => setFocused(null)}
//                     placeholder="Your farm name"
//                     className={`w-full px-3 py-2.5 border-2 rounded-xl text-sm focus:outline-none transition-all ${
//                       theme === 'dark'
//                         ? 'bg-black border-gray-700 text-white placeholder-gray-600 focus:border-emerald-500'
//                         : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500'
//                     }`}
//                     style={{ boxShadow: focused === 'farmName' ? '0 0 0 3px rgba(16, 185, 129, 0.1)' : 'none' }}
//                   />
//                 </div>

//                 <div>
//                   <label className={`block text-xs font-semibold mb-1.5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
//                     📧 Email *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     onFocus={() => setFocused('email')}
//                     onBlur={() => setFocused(null)}
//                     placeholder="farmer@example.com"
//                     className={`w-full px-3 py-2.5 border-2 rounded-xl text-sm focus:outline-none transition-all ${
//                       theme === 'dark'
//                         ? 'bg-black border-gray-700 text-white placeholder-gray-600 focus:border-emerald-500'
//                         : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500'
//                     }`}
//                     style={{ boxShadow: focused === 'email' ? '0 0 0 3px rgba(16, 185, 129, 0.1)' : 'none' }}
//                   />
//                 </div>

//                 <div>
//                   <label className={`block text-xs font-semibold mb-1.5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
//                     🌾 Primary Crop
//                   </label>
//                   <select
//                     name="cropType"
//                     value={formData.cropType}
//                     onChange={handleChange}
//                     className={`w-full px-3 py-2.5 border-2 rounded-xl text-sm focus:outline-none transition-all ${
//                       theme === 'dark'
//                         ? 'bg-black border-gray-700 text-white focus:border-emerald-500'
//                         : 'bg-white border-gray-300 text-gray-900 focus:border-emerald-500'
//                     }`}
//                   >
//                     {crops.map((crop) => (
//                       <option key={crop} value={crop}>
//                         {crop.charAt(0).toUpperCase() + crop.slice(1)}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className={`block text-xs font-semibold mb-1.5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
//                     🔒 Password *
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     onFocus={() => setFocused('password')}
//                     onBlur={() => setFocused(null)}
//                     placeholder="Create password"
//                     className={`w-full px-3 py-2.5 border-2 rounded-xl text-sm focus:outline-none transition-all ${
//                       theme === 'dark'
//                         ? 'bg-black border-gray-700 text-white placeholder-gray-600 focus:border-emerald-500'
//                         : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500'
//                     }`}
//                     style={{ boxShadow: focused === 'password' ? '0 0 0 3px rgba(16, 185, 129, 0.1)' : 'none' }}
//                   />
//                   <p className={`text-[10px] mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
//                     Min 6 characters
//                   </p>
//                 </div>

//                 <div>
//                   <label className={`block text-xs font-semibold mb-1.5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
//                     🔑 Confirm Password *
//                   </label>
//                   <input
//                     type="password"
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     onFocus={() => setFocused('confirmPassword')}
//                     onBlur={() => setFocused(null)}
//                     placeholder="Confirm password"
//                     className={`w-full px-3 py-2.5 border-2 rounded-xl text-sm focus:outline-none transition-all ${
//                       theme === 'dark'
//                         ? 'bg-black border-gray-700 text-white placeholder-gray-600 focus:border-emerald-500'
//                         : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500'
//                     }`}
//                     style={{ boxShadow: focused === 'confirmPassword' ? '0 0 0 3px rgba(16, 185, 129, 0.1)' : 'none' }}
//                   />
//                 </div>
//               </div>

//               <div className="flex-shrink-0 mt-4 space-y-3">
//                 {error && (
//                   <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-2.5 rounded-lg text-xs">
//                     ⚠️ {error}
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3 rounded-xl transition-all duration-300 disabled:opacity-50 shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2 text-sm"
//                 >
//                   {loading ? (
//                     <>
//                       <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
//                       <span>Creating...</span>
//                     </>
//                   ) : (
//                     <span>Create Account</span>
//                   )}
//                 </button>

//                 <div className="text-center">
//                   <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
//                     Already have an account?{' '}
//                     <Link to="/login" className="text-emerald-500 hover:text-emerald-400 font-semibold transition-colors">
//                       Login here
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Banner */}
//       <div className={`lg:hidden absolute top-0 left-0 right-0 ${theme === 'dark' ? 'bg-gradient-to-r from-emerald-600 to-teal-600' : 'bg-gradient-to-r from-teal-500 to-emerald-500'} p-4 text-center z-20`}>
//         <div className="flex items-center justify-center gap-2">
//           <span className="text-2xl">🌾</span>
//           <h2 className="text-xl font-black text-white">Krishi Sakhi</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../context/ThemeContext';

const Register = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    bio: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Frontend validation
    if (!formData.username || !formData.email || !formData.password) {
      setError('Please fill all required fields');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    try {
      // Call signup API
      const result = await signup({
        username: formData.username,
        email: formData.email,
        password: formData.password,
        bio: formData.bio || undefined
      });

      if (result.success) {
        setSuccess('Account created! Please check your email to verify your account.');
        
        // Clear form
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          bio: '',
        });

        // Redirect to login after 3 seconds
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        setError(result.message || 'Registration failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Signup error:', err);
    } finally {
      setLoading(false);
    }
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
    .custom-scrollbar::-webkit-scrollbar { width: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { 
      background: ${theme === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.05)'}; 
      border-radius: 10px; 
    }
    .custom-scrollbar::-webkit-scrollbar-thumb { 
      background: rgba(16, 185, 129, 0.5); 
      border-radius: 10px; 
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { 
      background: rgba(16, 185, 129, 0.7); 
    }
  `;

  return (
    <div className="fixed inset-0 w-screen h-screen flex overflow-hidden">
      <style>{keyframeStyles}</style>

      {/* LEFT SIDE */}
      <div className={`hidden lg:flex lg:w-1/2 ${theme === 'dark' ? 'bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600' : 'bg-gradient-to-br from-teal-400 via-emerald-400 to-cyan-400'} p-12 flex-col justify-center items-center relative overflow-hidden transition-all duration-300`}>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" style={{ animation: 'pulse 2s ease-in-out infinite', animationDelay: '1s' }}></div>
        
        <div className="absolute top-1/4 right-1/4 text-6xl opacity-20" style={{ animation: 'float 3s ease-in-out infinite' }}>🌿</div>
        <div className="absolute bottom-1/3 left-1/4 text-5xl opacity-20" style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '1s' }}>🌱</div>

        <div className="relative z-10 text-center" style={{ animation: 'slideIn 0.8s ease-out' }}>
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
              JOIN US<br />TODAY
            </h1>
            <div className="h-1 w-32 bg-white/50 mx-auto rounded-full mb-6"></div>
          </div>

          <p className="text-white/90 text-lg md:text-xl max-w-md mx-auto leading-relaxed mb-8">
            Start your journey with <span className="font-bold text-white">Krishi Sakhi</span>! Create your account and unlock powerful farming tools to{' '}
            <span className="font-bold text-white">grow smarter</span> and{' '}
            <span className="font-bold text-white">harvest better</span>.
          </p>

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

      {/* RIGHT SIDE - Register Form */}
      <div className={`w-full lg:w-1/2 relative flex items-center justify-center p-6 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        {theme === 'light' && (
          <>
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200')` }}></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-emerald-50/50 to-teal-50/50"></div>
          </>
        )}

        {theme === 'dark' && (
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          </div>
        )}

        <div className="relative z-10 w-full max-w-md" style={{ animation: 'slideInRight 0.8s ease-out' }}>
          <div className={`${theme === 'dark' ? 'bg-zinc-900 border-emerald-500/30' : 'bg-white border-emerald-200'} backdrop-blur-xl rounded-3xl p-6 border-2 shadow-2xl max-h-[90vh] flex flex-col transition-all duration-300`}>
            {/* Header */}
            <div className="text-center mb-4 flex-shrink-0">
              <h2 className={`text-2xl md:text-3xl font-bold mb-1 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}>
                Join Krishi Sakhi
              </h2>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Create your farm account
              </p>
            </div>

            {/* Scrollable Form */}
            <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
              <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-4">
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    👤 Username *
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    onFocus={() => setFocused('username')}
                    onBlur={() => setFocused(null)}
                    placeholder="Your username"
                    required
                    className={`w-full px-3 py-2.5 border-2 rounded-xl text-sm focus:outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-black border-gray-700 text-white placeholder-gray-600 focus:border-emerald-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500'
                    }`}
                    style={{ boxShadow: focused === 'username' ? '0 0 0 3px rgba(16, 185, 129, 0.1)' : 'none' }}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    📧 Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    placeholder="farmer@example.com"
                    required
                    className={`w-full px-3 py-2.5 border-2 rounded-xl text-sm focus:outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-black border-gray-700 text-white placeholder-gray-600 focus:border-emerald-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500'
                    }`}
                    style={{ boxShadow: focused === 'email' ? '0 0 0 3px rgba(16, 185, 129, 0.1)' : 'none' }}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    📝 Bio (Optional)
                  </label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    onFocus={() => setFocused('bio')}
                    onBlur={() => setFocused(null)}
                    placeholder="Tell us about yourself..."
                    rows="2"
                    maxLength="200"
                    className={`w-full px-3 py-2.5 border-2 rounded-xl text-sm focus:outline-none transition-all resize-none ${
                      theme === 'dark'
                        ? 'bg-black border-gray-700 text-white placeholder-gray-600 focus:border-emerald-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500'
                    }`}
                    style={{ boxShadow: focused === 'bio' ? '0 0 0 3px rgba(16, 185, 129, 0.1)' : 'none' }}
                  />
                  <p className={`text-[10px] mt-1 text-right ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                    {formData.bio.length}/200
                  </p>
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    🔒 Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => setFocused('password')}
                    onBlur={() => setFocused(null)}
                    placeholder="Create password"
                    required
                    className={`w-full px-3 py-2.5 border-2 rounded-xl text-sm focus:outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-black border-gray-700 text-white placeholder-gray-600 focus:border-emerald-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500'
                    }`}
                    style={{ boxShadow: focused === 'password' ? '0 0 0 3px rgba(16, 185, 129, 0.1)' : 'none' }}
                  />
                  <p className={`text-[10px] mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                    Min 6 characters
                  </p>
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    🔑 Confirm Password *
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    onFocus={() => setFocused('confirmPassword')}
                    onBlur={() => setFocused(null)}
                    placeholder="Confirm password"
                    required
                    className={`w-full px-3 py-2.5 border-2 rounded-xl text-sm focus:outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-black border-gray-700 text-white placeholder-gray-600 focus:border-emerald-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500'
                    }`}
                    style={{ boxShadow: focused === 'confirmPassword' ? '0 0 0 3px rgba(16, 185, 129, 0.1)' : 'none' }}
                  />
                  {formData.confirmPassword && (
                    <p className={`text-[10px] mt-1 ${
                      formData.password === formData.confirmPassword 
                        ? 'text-green-500' 
                        : 'text-red-500'
                    }`}>
                      {formData.password === formData.confirmPassword 
                        ? '✓ Passwords match' 
                        : '✗ Passwords do not match'}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex-shrink-0 mt-4 space-y-3">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-2.5 rounded-lg text-xs">
                    ⚠️ {error}
                  </div>
                )}

                {success && (
                  <div className="bg-green-500/10 border border-green-500/50 text-green-400 p-2.5 rounded-lg text-xs">
                    ✓ {success}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3 rounded-xl transition-all duration-300 disabled:opacity-50 shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2 text-sm"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      <span>Creating Account...</span>
                    </>
                  ) : (
                    <span>Create Account</span>
                  )}
                </button>

                <div className="text-center">
                  <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Already have an account?{' '}
                    <Link to="/login" className="text-emerald-500 hover:text-emerald-400 font-semibold transition-colors">
                      Login here
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile Banner */}
      <div className={`lg:hidden absolute top-0 left-0 right-0 ${theme === 'dark' ? 'bg-gradient-to-r from-emerald-600 to-teal-600' : 'bg-gradient-to-r from-teal-500 to-emerald-500'} p-4 text-center z-20`}>
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl">🌾</span>
          <h2 className="text-xl font-black text-white">Krishi Sakhi</h2>
        </div>
      </div>
    </div>
  );
};

export default Register;
