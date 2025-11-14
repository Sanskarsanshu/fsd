import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

import Loader from './components/Shared/Loader';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Landing from './components/Landing/Landing';
import MainLayout from './components/Layout/MainLayout';
import { useAuth } from './hooks/useAuth';

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
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route path="/dashboard" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
      <Route path="/financials" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
      <Route path="/pest-detection" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
      <Route path="/marketplace" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
      <Route path="/knowledge-hub" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
      <Route path="/schemes" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
      <Route path="/community" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
      <Route path="/future-features" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
      
      {/* Shop Routes */}
      <Route path="/shop" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
      <Route path="/shop/product/:id" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
      <Route path="/shop/cart" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
      <Route path="/shop/checkout" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />
      <Route path="/shop/order-success" element={isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />} />

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
