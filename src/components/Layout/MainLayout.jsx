// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import Header from './Header';
// import Dashboard from '../Dashboard/Dashboard';
// import Financials from '../Financials/Financials';
// import PestDetection from '../PestDetection/PestDetection';
// import Marketplace from '../Marketplace/Marketplace';
// import KnowledgeHub from '../KnowledgeHub/KnowledgeHub';
// import Schemes from '../Schemes/Schemes';
// import Community from '../Community/Community';
// import FutureFeatures from '../Future/FutureFeatures';
// import FAB from './FAB';
// import Toast from '../Shared/Toast';
// import { useAuth } from '../../hooks/useAuth';

// const MainLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
//   const { user } = useAuth();
//   const location = useLocation();

//   const handleShowToast = (message, type = 'success') => {
//     setToast({ show: true, message, type });
//     setTimeout(() => {
//       setToast({ show: false, message: '', type: 'success' });
//     }, 3000);
//   };

//   // Render component based on current path
//   const renderContent = () => {
//     switch (location.pathname) {
//       case '/dashboard':
//         return <Dashboard onShowToast={handleShowToast} />;
//       case '/financials':
//         return <Financials onShowToast={handleShowToast} />;
//       case '/pest-detection':
//         return <PestDetection onShowToast={handleShowToast} />;
//       case '/marketplace':
//         return <Marketplace onShowToast={handleShowToast} />;
//       case '/knowledge-hub':
//         return <KnowledgeHub onShowToast={handleShowToast} />;
//       case '/schemes':
//         return <Schemes onShowToast={handleShowToast} />;
//       case '/community':
//         return <Community onShowToast={handleShowToast} />;
//       case '/future-features':
//         return <FutureFeatures onShowToast={handleShowToast} />;
//       default:
//         return <Dashboard onShowToast={handleShowToast} />;
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-50 overflow-hidden">
//       {/* Desktop Sidebar */}
//       <div className="hidden lg:block w-64 bg-white shadow-xl flex-shrink-0 border-r border-gray-200">
//         <Sidebar isOpen={true} setIsOpen={() => {}} />
//       </div>

//       {/* Mobile Sidebar Overlay */}
//       {sidebarOpen && (
//         <div
//           className="lg:hidden fixed inset-0 bg-black/50 z-30 transition-all duration-300"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* Mobile Sidebar */}
//       <div
//         className={`lg:hidden fixed left-0 top-0 h-screen w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ${
//           sidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
//       </div>

//       {/* Main Content Wrapper */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Header */}
//         <div className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
//           <Header
//             onMenuClick={() => setSidebarOpen(!sidebarOpen)}
//             userName={user?.name}
//             userEmail={user?.email}
//           />
//         </div>

//         {/* Scrollable Main Content */}
//         <main className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
//           <div className="w-full">
//             {renderContent()}
//           </div>
//         </main>
//       </div>

//       {/* FAB Button */}
//       <FAB />

//       {/* Toast Notification */}
//       {toast.show && (
//         <Toast
//           show={toast.show}
//           message={toast.message}
//           type={toast.type}
//           onClose={() => setToast({ show: false, message: '', type: 'success' })}
//         />
//       )}
//     </div>
//   );
// };

// export default MainLayout;
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from '../Dashboard/Dashboard';
import Financials from '../Financials/Financials';
import PestDetection from '../PestDetection/PestDetection';
import Marketplace from '../Marketplace/Marketplace';
import KnowledgeHub from '../KnowledgeHub/KnowledgeHub';
import Schemes from '../Schemes/Schemes';
import Community from '../Community/Community';
import FutureFeatures from '../Future/FutureFeatures';
import Shop from '../Shop/Shop';
import ProductDetail from '../Shop/ProductDetail';
import Cart from '../Shop/Cart';
import Checkout from '../Shop/Checkout';
import OrderSuccess from '../Shop/OrderSuccess';
import FAB from './FAB';
import Toast from '../Shared/Toast';
import { useAuth } from '../../hooks/useAuth';

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const { user } = useAuth();
  const location = useLocation();

  const handleShowToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 3000);
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
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 bg-white shadow-xl flex-shrink-0 border-r border-gray-200">
        <Sidebar isOpen={true} setIsOpen={() => {}} />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30 transition-all duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed left-0 top-0 h-screen w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      </div>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
          <Header
            onMenuClick={() => setSidebarOpen(!sidebarOpen)}
            userName={user?.name}
            userEmail={user?.email}
          />
        </div>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="w-full">
            {renderContent()}
          </div>
        </main>
      </div>

      {/* FAB Button */}
      <FAB />

      {/* Toast Notification */}
      {toast.show && (
        <Toast
          show={toast.show}
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: '', type: 'success' })}
        />
      )}
    </div>
  );
};

export default MainLayout;
