import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MealsPage from './pages/MealsPage';
import MissionPage from './pages/MissionPage';
import ContactPage from './pages/ContactPage';
import AdminLeadsPage from './pages/AdminLeadsPage';
import AdminLoginPage from './pages/AdminLoginPage';

// ScrollToTop component to ensure page scrolls to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/meals" element={<MealsPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin/leads" element={<AdminLeadsPage />} />
            <Route path="/admin/login" element={<AdminLoginPage />} />
            {/* Redirect any other routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;