import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Send, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ArktechLogo from '../assets/Arktech.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Servicios', path: '/services' },
    { name: 'Portafolio', path: '/projects' },
    { name: 'Precios', path: '/skills' },
    { name: 'Contacto', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300 pointer-events-none">
      <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 pointer-events-auto ${
        scrolled
          ? 'glass-card py-2 px-5 shadow-2xl shadow-violet-900/20 dark:shadow-violet-500/10'
          : 'bg-white/60 dark:bg-[#0d0f1a]/60 backdrop-blur-xl py-3 px-5 border border-violet-100/50 dark:border-violet-500/10'
      }`}>
        <div className="flex items-center justify-between">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-violet-500/40 group-hover:shadow-violet-500/65 group-hover:scale-105 transition-all duration-300">
              <img
                src={ArktechLogo}
                alt="ArkTech Logo"
                className="w-full h-full object-cover"
              />
              {/* Glow overlay on hover */}
              <div className="absolute inset-0 bg-violet-500/0 group-hover:bg-violet-500/15 transition-colors duration-300 rounded-xl" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-[1.15rem] tracking-tight text-gray-900 dark:text-white">
                Ark<span className="text-gradient-primary">Tech.</span>
              </span>
              <span className="text-[9px] uppercase font-mono tracking-widest text-violet-500/70 dark:text-violet-400/60 mt-0.5">
                Digital Agency
              </span>
            </div>
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden md:flex items-center space-x-0.5 bg-violet-50/80 dark:bg-violet-950/30 p-1.5 rounded-full border border-violet-100/80 dark:border-violet-500/15">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400'
                }`}
              >
                {isActive(link.path) && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full shadow-md shadow-violet-500/40"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </nav>

          {/* ── Desktop Actions ── */}
          <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-violet-50 dark:bg-violet-950/50 text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:scale-105 transition-all duration-300 border border-violet-100/80 dark:border-violet-500/15 cursor-pointer"
              aria-label="Cambiar tema"
            >
              {theme === 'dark'
                ? <Sun size={18} className="text-amber-400" />
                : <Moon size={18} className="text-violet-600" />}
            </button>

            <Link
              to="/contact"
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-violet-500/35 hover:shadow-violet-500/55 hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <Sparkles size={15} className="flex-shrink-0" />
              <span>Solicitar Proyecto</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </div>

          {/* ── Mobile Buttons ── */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-violet-50 dark:bg-violet-950/50 border border-violet-100/80 dark:border-violet-500/15 text-gray-600 dark:text-gray-300"
            >
              {theme === 'dark'
                ? <Sun size={18} className="text-amber-400" />
                : <Moon size={18} className="text-violet-600" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-violet-50 dark:bg-violet-950/50 text-gray-800 dark:text-gray-200 hover:bg-violet-100 dark:hover:bg-violet-900/50 transition-colors border border-violet-100/80 dark:border-violet-500/15"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Side Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 md:hidden pointer-events-auto"
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 h-screen w-full max-w-xs bg-white dark:bg-[#0d0f1a] z-50 shadow-2xl shadow-violet-900/30 md:hidden flex flex-col border-l border-violet-100 dark:border-violet-500/15 pointer-events-auto"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-violet-100 dark:border-violet-900/50">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-9 h-9 rounded-xl overflow-hidden shadow-lg shadow-violet-500/35">
                    <img src={ArktechLogo} alt="ArkTech" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-extrabold text-gray-900 dark:text-white">
                    Ark<span className="text-gradient-primary">Tech.</span>
                  </span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl bg-violet-50 dark:bg-violet-900/50 text-gray-600 dark:text-gray-300"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer links */}
              <div className="flex-1 flex flex-col justify-between px-6 py-6 overflow-y-auto">
                <div className="flex flex-col space-y-1.5">
                  {links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                        isActive(link.path)
                          ? 'bg-gradient-to-r from-violet-500/15 to-cyan-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-violet-900/30'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive(link.path) && (
                        <div className="w-2 h-2 rounded-full bg-violet-500 shadow-sm shadow-violet-500/60" />
                      )}
                    </Link>
                  ))}
                </div>

                {/* CTA button */}
                <div className="mt-6 space-y-3">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-center shadow-lg shadow-violet-500/35 flex items-center justify-center gap-2 hover:shadow-violet-500/50 transition-shadow"
                  >
                    <Send size={18} />
                    Solicitar Proyecto
                  </Link>
                  <p className="text-[11px] text-center text-gray-400 dark:text-gray-500">
                    Consultoría inicial 100% gratuita
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
