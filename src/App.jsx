// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import Loader from './components/Shared/Loader';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import Landing from './components/Landing/Landing';
// import MainLayout from './components/Layout/MainLayout';
// import { useAuth } from './hooks/useAuth';

// const AuthPage = ({ isLogin }) => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl animate-float"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-float-slow"></div>
//       </div>

//       <div className="relative z-10 w-full max-w-md">
//         <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 animate-slideUp">
//           {isLogin ? <Login /> : <Register />}
//         </div>

//         <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-200/10 rounded-lg transform rotate-45 animate-float"></div>
//         <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-200/10 rounded-lg transform -rotate-45 animate-float-slow"></div>
//       </div>
//     </div>
//   );
// };

// const AppContent = () => {
//   const { isAuthenticated } = useAuth();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2500);

//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return <Loader />;
//   }

//   return (
//     <Routes>
//       {/* Public Routes */}
//       <Route path="/" element={<Landing />} />
//       <Route path="/login" element={<AuthPage isLogin={true} />} />
//       <Route path="/register" element={<AuthPage isLogin={false} />} />

//       {/* Protected Routes - CHANGED: Remove /* wildcards */}
//       <Route
//         path="/dashboard"
//         element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />}
//       />
//       <Route
//         path="/financials"
//         element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />}
//       />
//       <Route
//         path="/pest-detection"
//         element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />}
//       />
//       <Route
//         path="/marketplace"
//         element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />}
//       />
//       <Route
//         path="/knowledge-hub"
//         element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />}
//       />
//       <Route
//         path="/schemes"
//         element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />}
//       />
//       <Route
//         path="/community"
//         element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />}
//       />
//       <Route
//         path="/future-features"
//         element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />}
//       />

//       {/* Fallback */}
//       <Route path="*" element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// };

// function App() {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <AppContent />
//       </AuthProvider>
//     </BrowserRouter>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Loader from './components/Shared/Loader';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Landing from './components/Landing/Landing';
import MainLayout from './components/Layout/MainLayout';
import { useAuth } from './hooks/useAuth';

const AuthPage = ({ isLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 animate-slideUp">
          {isLogin ? <Login /> : <Register />}
        </div>

        <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-200/10 rounded-lg transform rotate-45 animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-200/10 rounded-lg transform -rotate-45 animate-float-slow"></div>
      </div>
    </div>
  );
};

const AppContent = () => {
  const { isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<AuthPage isLogin={true} />} />
      <Route path="/register" element={<AuthPage isLogin={false} />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />}
      />
      <Route
        path="/financials"
        element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />}
      />
      <Route
        path="/pest-detection"
        element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />}
      />
      <Route
        path="/marketplace"
        element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />}
      />
      <Route
        path="/knowledge-hub"
        element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />}
      />
      <Route
        path="/schemes"
        element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />}
      />
      <Route
        path="/community"
        element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />}
      />
      <Route
        path="/future-features"
        element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />}
      />
      
      {/* Shop Routes */}
      <Route
        path="/shop"
        element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />}
      />
      <Route
        path="/shop/product/:id"
        element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />}
      />
      <Route
        path="/shop/cart"
        element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />}
      />
      <Route
        path="/shop/checkout"
        element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />}
      />
      <Route
        path="/shop/order-success"
        element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />}
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
