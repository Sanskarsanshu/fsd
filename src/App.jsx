// // import React, { useState, useEffect } from 'react';
// // import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// // import { ThemeProvider } from './context/ThemeContext';
// // import { AuthProvider } from './context/AuthContext';

// // import Loader from './components/Shared/Loader';
// // import Login from './components/Auth/Login';
// // import Register from './components/Auth/Register';
// // import Landing from './components/Landing/Landing';
// // import MainLayout from './components/Layout/MainLayout';
// // import { useAuth } from './hooks/useAuth';

// // const AppContent = () => {
// //   const { isAuthenticated } = useAuth();
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setIsLoading(false);
// //     }, 2500);

// //     return () => clearTimeout(timer);
// //   }, []);

// //   if (isLoading) {
// //     return <Loader />;
// //   }

// //   return (
// //     <Routes>
// //       {/* Public Routes */}
// //       <Route path="/" element={<Landing />} />
// //       <Route path="/login" element={<Login />} />
// //       <Route path="/register" element={<Register />} />

// //       {/* Protected Routes */}
// //       <Route path="/dashboard" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
// //       <Route path="/financials" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
// //       <Route path="/pest-detection" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
// //       <Route path="/marketplace" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
// //       <Route path="/knowledge-hub" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
// //       <Route path="/schemes" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
// //       <Route path="/community" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
// //       <Route path="/future-features" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />

// //       {/* Shop Routes */}
// //       <Route path="/shop" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
// //       <Route path="/shop/product/:id" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
// //       <Route path="/shop/cart" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
// //       <Route path="/shop/checkout" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
// //       <Route path="/shop/order-success" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />

// //       {/* Fallback */}
// //       <Route path="*" element={<Navigate to="/" replace />} />
// //     </Routes>
// //   );
// // };

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <ThemeProvider>
// //         <AuthProvider>
// //           <AppContent />
// //         </AuthProvider>
// //       </ThemeProvider>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { ThemeProvider } from './context/ThemeContext';
// import { AuthProvider } from './context/AuthContext';

// import Loader from './components/Shared/Loader';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import ForgotPassword from './components/Auth/ForgotPassword';
// import VerifyOTP from './components/Auth/VerifyOTP';
// import ResetPassword from './components/Auth/ResetPassword';
// import VerifyEmail from './components/Auth/VerifyEmail';
// import Landing from './components/Landing/Landing';
// import MainLayout from './components/Layout/MainLayout';
// import ProtectedRoute from './components/ProtectedRoute';

// const AppContent = () => {
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
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/forgot-password" element={<ForgotPassword />} />
//       <Route path="/verify-otp" element={<VerifyOTP />} />
//       <Route path="/reset-password" element={<ResetPassword />} />
//       <Route path="/verify-email/:token" element={<VerifyEmail />} />

//       {/* Protected Routes - Dashboard */}
//       <Route 
//         path="/dashboard" 
//         element={
//           <ProtectedRoute>
//             <MainLayout />
//           </ProtectedRoute>
//         } 
//       />

//       {/* Protected Routes - Main Features */}
//       <Route 
//         path="/financials" 
//         element={
//           <ProtectedRoute>
//             <MainLayout />
//           </ProtectedRoute>
//         } 
//       />
//       <Route 
//         path="/pest-detection" 
//         element={
//           <ProtectedRoute>
//             <MainLayout />
//           </ProtectedRoute>
//         } 
//       />
//       <Route 
//         path="/marketplace" 
//         element={
//           <ProtectedRoute>
//             <MainLayout />
//           </ProtectedRoute>
//         } 
//       />
//       <Route 
//         path="/knowledge-hub" 
//         element={
//           <ProtectedRoute>
//             <MainLayout />
//           </ProtectedRoute>
//         } 
//       />
//       <Route 
//         path="/schemes" 
//         element={
//           <ProtectedRoute>
//             <MainLayout />
//           </ProtectedRoute>
//         } 
//       />
//       <Route 
//         path="/community" 
//         element={
//           <ProtectedRoute>
//             <MainLayout />
//           </ProtectedRoute>
//         } 
//       />
//       <Route 
//         path="/future-features" 
//         element={
//           <ProtectedRoute>
//             <MainLayout />
//           </ProtectedRoute>
//         } 
//       />

//       {/* Protected Routes - Shop */}
//       <Route 
//         path="/shop" 
//         element={
//           <ProtectedRoute>
//             <MainLayout />
//           </ProtectedRoute>
//         } 
//       />
//       <Route 
//         path="/shop/product/:id" 
//         element={
//           <ProtectedRoute>
//             <MainLayout />
//           </ProtectedRoute>
//         } 
//       />
//       <Route 
//         path="/shop/cart" 
//         element={
//           <ProtectedRoute>
//             <MainLayout />
//           </ProtectedRoute>
//         } 
//       />
//       <Route 
//         path="/shop/checkout" 
//         element={
//           <ProtectedRoute>
//             <MainLayout />
//           </ProtectedRoute>
//         } 
//       />
//       <Route 
//         path="/shop/order-success" 
//         element={
//           <ProtectedRoute>
//             <MainLayout />
//           </ProtectedRoute>
//         } 
//       />

//       {/* Fallback */}
//       <Route path="*" element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// };

// function App() {
//   return (
//     <BrowserRouter>
//       <ThemeProvider>
//         <AuthProvider>
//           <AppContent />
//         </AuthProvider>
//       </ThemeProvider>
//     </BrowserRouter>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

import Loader from './components/Shared/Loader';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgotPassword from './components/Auth/ForgotPassword';
import VerifyOTP from './components/Auth/VerifyOTP';
import ResetPassword from './components/Auth/ResetPassword';
import VerifyEmail from './components/Auth/VerifyEmail';
import Landing from './components/Landing/Landing';
import MainLayout from './components/Layout/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';

const AppContent = () => {
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
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<VerifyOTP />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/verify-email/:token" element={<VerifyEmail />} />

      {/* Protected Routes - Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      />

      {/* Protected Routes - Main Features */}
      <Route
        path="/financials"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/pest-detection"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/marketplace"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/knowledge-hub"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/schemes"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/community"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/future-features"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      />

      {/* Protected Routes - Shop */}
      <Route
        path="/shop"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/shop/product/:id"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/shop/cart"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/shop/checkout"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/shop/order-success"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      />

      {/* Protected Routes - Contact/Support */}
      <Route
        path="/chatbot"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/contact/email"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/contact/call"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      />
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
