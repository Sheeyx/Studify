import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Header from "./components/header";
import HeroSection from "../screens/home/HeroSection";
import WhyStudify from "../screens/home/WhyStudify";
import HowWorks from "../screens/home/HowWorks";
import AboutCompany from "../screens/home/AboutCompany";
import PricePackage from "../screens/home/PricePackage";
import OurResults from "../screens/home/OurResults";
import Login from "../screens/admin/auth/Login";
import AdminDashboard from "../screens/admin";
import PrivateRoute from "../screens/admin/auth/PrivateRoute";
import FAQ from "../screens/home/Faq";
import Footer from "./components/footer";
import CustomerReview from "../screens/home/CustomerReview";
import ContactUs from "../screens/home/ContactUs";

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");
  const isLoginPage = location.pathname === "/login";

  return (
    <div>
      {!isAdminPage && !isLoginPage && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <WhyStudify />
              <HowWorks />
              <AboutCompany />
              <PricePackage />
              <OurResults />
              <CustomerReview />
              <ContactUs />
              <FAQ />
              {/* <Footer /> */}
            </>
          }
        />
        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<Navigate to="/login" replace />} />

        {/* Protect all admin routes */}
        <Route
          path="/admin/*"
          element={<PrivateRoute component={AdminDashboard} />}
        />
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