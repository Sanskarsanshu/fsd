import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from '../Dashboard/Dashboard';
import Financials from '../Financials/Financials';
import PestDetection from '../PestDetection/PestDetection';
import Marketplace from '../Marketplace/Marketplace';
import KnowledgeHub from '../KnowledgeHub/KnowledgeHub';
import Schemes from '../Schemes/Schemes';
import Community from '../Community/Community';
// import FutureFeatures from '../Future/FutureFeatures';
import Shop from '../Shop/Shop';
import ProductDetail from '../Shop/ProductDetail';
import Cart from '../Shop/Cart';
import Checkout from '../Shop/Checkout';
import OrderSuccess from '../Shop/OrderSuccess';
import FAB from './FAB';
import Toast from '../Shared/Toast';
import { useAuth } from '../../hooks/useAuth';
import FutureFeatures from '../Future/FutureFeatures';

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const { user } = useAuth();
  const { theme } = useTheme();
  const location = useLocation();

  const handleShowToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  // Render component based on current path
  const renderContent = () => {
    const path = location.pathname;
    
    // Shop routes
    if (path === '/shop') return <Shop onShowToast={handleShowToast} />;
    if (path.startsWith('/shop/product/')) return <ProductDetail onShowToast={handleShowToast} />;
    if (path === '/shop/cart') return <Cart onShowToast={handleShowToast} />;
    if (path === '/shop/checkout') return <Checkout onShowToast={handleShowToast} />;
    if (path === '/shop/order-success') return <OrderSuccess onShowToast={handleShowToast} />;

    // Other routes
    switch (path) {
      case '/dashboard':
        return <Dashboard onShowToast={handleShowToast} />;
      case '/financials':
        return <Financials onShowToast={handleShowToast} />;
      case '/pest-detection':
        return <PestDetection onShowToast={handleShowToast} />;
      case '/marketplace':
        return <Marketplace onShowToast={handleShowToast} />;
      case '/knowledge-hub':
        return <KnowledgeHub onShowToast={handleShowToast} />;
      case '/schemes':
        return <Schemes onShowToast={handleShowToast} />;
      case '/community':
        return <Community onShowToast={handleShowToast} />;
      case '/future-features':
        return <FutureFeatures onShowToast={handleShowToast} />;
      default:
        return <Dashboard onShowToast={handleShowToast} />;
    }
  };

  return (
    <div className={`flex h-screen overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black' : 'bg-gray-50'
    }`}>
      {/* Sidebar - Always mounted but hidden on mobile */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col overflow-hidden w-full lg:w-auto">
        {/* Header - Sticky */}
        <div className={`sticky top-0 z-20 shadow-sm transition-colors duration-300 ${
          theme === 'dark' 
            ? 'bg-zinc-900 border-gray-800' 
            : 'bg-white border-gray-200'
        } border-b`}>
          <Header
            onMenuClick={() => setSidebarOpen(!sidebarOpen)}
            userName={user?.name}
            userEmail={user?.email}
          />
        </div>

        {/* Scrollable Main Content */}
        <main className={`flex-1 overflow-y-auto transition-colors duration-300 ${
          theme === 'dark' ? 'bg-black' : 'bg-gray-50'
        }`}>
          <div className="w-full min-h-full">
            {renderContent()}
          </div>
        </main>
      </div>

      {/* FAB Button */}
      <FAB />

      {/* Toast Notification */}
      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ show: false, message: '', type: 'success' })}
      />
    </div>
  );
};

export default MainLayout;
