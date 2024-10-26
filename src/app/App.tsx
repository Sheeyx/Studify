// import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header';
import HeroSection from '../screens/home/HeroSection';
import WhyStudify from '../screens/home/WhyStudify';
import HowWorks from '../screens/home/HowWorks';
import AboutCompany from '../screens/home/AboutCompany';
import PricePackage from '../screens/home/PricePackage';
import OurResults from '../screens/home/OurResults';
import Login from '../screens/admin/components/Login';
import AdminDashboard from '../screens/admin';
import PrivateRoute from '../screens/admin/components/PrivateRoute';
import CustomerReview from '../screens/home/CustomerReview';
import FAQ from '../screens/home/Faq';


function App() {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';
  const isLoginPage = location.pathname === '/login';

  return (
    <div>
      {!isAdminPage && !isLoginPage && <Header />}

      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <WhyStudify />
            <HowWorks />
            <AboutCompany />
            <PricePackage />
            <OurResults />
            <CustomerReview />
            <FAQ />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<PrivateRoute component={AdminDashboard} />} /> {/* Protect admin route */}
      </Routes>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
