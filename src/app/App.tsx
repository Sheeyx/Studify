import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';

// Components
import Header from './components/header';
import Footer from './components/footer';
import HeroSection from '../screens/home/HeroSection';
import WhyStudify from '../screens/home/WhyStudify';
import Process from '../screens/home/Process';
import AboutCompany from '../screens/home/AboutCompany';
import PricePackage from '../screens/home/PricePackage';
import OurResults from '../screens/home/OurResults';
import CustomerReview from '../screens/home/CustomerReview';
import ContactUs from '../screens/home/ContactUs';
import FAQ from '../screens/home/Faq';

// Admin
import Login from '../screens/admin/auth/Login';
import AdminDashboard from '../screens/admin';
import PrivateRoute from '../screens/admin/auth/PrivateRoute';
import { Article } from '@mui/icons-material';
import Articles from '../screens/home/Article';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');
  const isLoginPage = location.pathname === '/login';

  return (
    <div>
      {/* Only show header on non-admin pages */}
      {!isAdminPage && !isLoginPage && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <WhyStudify />
              <Process />
              <AboutCompany />
              <Articles />
              <PricePackage />
              <OurResults />
              <CustomerReview />
              <ContactUs />
              <FAQ />
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Navigate to="/login" replace />} />

        {/* Protected admin routes */}
        <Route path="/admin/*" element={<PrivateRoute component={AdminDashboard} />} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
