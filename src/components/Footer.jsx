import React from 'react';
import { Link } from 'react-router-dom';
import {
  Twitter, Instagram, Linkedin, Github, ArrowUp, Heart, Mail, MapPin
} from 'lucide-react';
import ArktechLogo from '../assets/Arktech.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Nosotros', path: '/about' },
    { label: 'Servicios', path: '/services' },
    { label: 'Portafolio', path: '/projects' },
    { label: 'Precios', path: '/skills' },
    { label: 'Contacto', path: '/contact' },
  ];

  const serviceLinks = [
    'Diseño UI/UX',
    'Desarrollo Web',
    'Optimización SEO',
    'Apps Móviles',
    'Soluciones Cloud',
    'Automatización IA',
  ];

  const legalLinks = [
    'Política de Privacidad',
    'Términos de Servicio',
    'Preguntas Frecuentes',
  ];

  const socials = [
    { icon: Twitter,   href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin,  href: '#', label: 'LinkedIn' },
    { icon: Github,    href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="relative z-10 border-t border-violet-200/60 dark:border-violet-500/15 bg-white/50 dark:bg-[#0d0f1a]/95 backdrop-blur-xl">

      {/* Top gradient accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-violet-200/60 dark:border-violet-500/12">

          {/* ── Brand col ── */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo + wordmark */}
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-xl shadow-violet-500/30 group-hover:shadow-violet-500/55 group-hover:scale-105 transition-all duration-300">
                <img
                  src={ArktechLogo}
                  alt="ArkTech Logo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-violet-500/0 group-hover:bg-violet-500/10 transition-colors duration-300 rounded-2xl" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-xl tracking-tight text-gray-900 dark:text-white">
                  Ark<span className="text-gradient-primary">Tech.</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 dark:text-gray-400 mt-0.5">
                  Digital Agency
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
              Liderando la transformación digital con soluciones de software innovadoras, elegantes y escalables para empresas de todo el mundo.
            </p>

            {/* Contact brief */}
            <div className="space-y-2.5">
              <a
                href="mailto:hola@arktech.com"
                className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
              >
                <Mail size={14} className="text-violet-500 group-hover:scale-110 transition-transform flex-shrink-0" />
                hola@arktech.com
              </a>
              <div className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                <MapPin size={14} className="text-cyan-500 flex-shrink-0" />
                Ciudad de México / Madrid
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  className="p-2.5 rounded-xl glass-card border border-violet-200/60 dark:border-violet-500/15 text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/40 hover:scale-110 transition-all duration-300 hover:shadow-sm hover:shadow-violet-500/20"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Navigation ── */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full group-hover:w-3 transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full group-hover:w-3 transition-all duration-300" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Legal + Status ── */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Soporte
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full group-hover:w-3 transition-all duration-300" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>

            {/* Status badge */}
            <div className="mt-6 p-4 rounded-2xl glass-card border border-violet-200/60 dark:border-violet-500/15 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                En línea &amp; Operativo
              </div>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">
                Respondemos en menos de 24h. Soporte disponible para clientes activos.
              </p>
              <Link
                to="/contact"
                className="block w-full py-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-xs font-bold text-center shadow-md shadow-violet-500/25 hover:shadow-violet-500/45 hover:scale-[1.02] transition-all duration-300"
              >
                Contáctanos →
              </Link>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3">
            {/* Mini logo */}
            <div className="w-6 h-6 rounded-lg overflow-hidden shadow-sm shadow-violet-500/20">
              <img src={ArktechLogo} alt="ArkTech" className="w-full h-full object-cover" />
            </div>
            <p>&copy; {currentYear} ArkTech. Todos los derechos reservados.</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              Hecho con <Heart size={13} className="text-red-500 fill-red-500" /> por el equipo ArkTech
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl glass-card hover:bg-violet-100/80 dark:hover:bg-violet-900/30 text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-all cursor-pointer border border-violet-200/60 dark:border-violet-500/15 hover:scale-110"
              title="Volver arriba"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
