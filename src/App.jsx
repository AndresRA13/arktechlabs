import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/navbar';
import Loader from './components/Loader';
import BackgroundEffects from './components/BackgroundEffects';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './context/ThemeContext';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <BackgroundEffects />
          <AnimatePresence mode="wait">
            {loading ? (
              <Loader key="loader" />
            ) : (
              <div key="app" className="min-h-screen bg-[#f8f7ff] dark:bg-[#030712] text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans flex flex-col relative z-10">
                <Navbar />
                <main className="flex-grow">
                  <AnimatedRoutes />
                </main>
                <Footer />
              </div>
            )}
          </AnimatePresence>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
