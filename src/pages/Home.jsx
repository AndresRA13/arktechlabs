import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Zap, Layers, Globe, Shield, Star,
  Sparkles, CheckCircle2, Code, Cpu, TrendingUp,
  Users, Award, Clock, ChevronRight, Play, Terminal,
  Database, Cloud, Smartphone, Brain
} from 'lucide-react';
import ArktechLogo from '../assets/Arktech.png';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const agencyTaglines = [
  'Desarrollo de Software',
  'Diseño UI/UX Premium',
  'Soluciones Cloud & IA',
  'Apps Móviles Nativas',
];

const techMarquee = [
  { name: 'React 19', color: 'from-cyan-400 to-blue-500' },
  { name: 'Node.js', color: 'from-emerald-400 to-green-600' },
  { name: 'Next.js', color: 'from-slate-400 to-gray-600' },
  { name: 'Flutter', color: 'from-blue-400 to-cyan-500' },
  { name: 'React Native', color: 'from-sky-400 to-blue-600' },
  { name: 'TypeScript', color: 'from-blue-600 to-sky-600' },
  { name: 'AWS', color: 'from-amber-500 to-orange-600' },
  { name: 'MongoDB', color: 'from-green-500 to-emerald-700' },
  { name: 'PostgreSQL', color: 'from-blue-500 to-indigo-600' },
  { name: 'Docker', color: 'from-sky-400 to-blue-600' },
  { name: 'Figma', color: 'from-violet-500 to-purple-500' },
  { name: 'OpenAI', color: 'from-emerald-400 to-teal-500' },
];

const statsData = [
  { icon: Layers, value: '150+', label: 'Proyectos Creados', color: 'from-violet-600 to-purple-600', shadow: 'shadow-violet-500/25' },
  { icon: Users, value: '80+', label: 'Clientes Globales', color: 'from-cyan-500 to-blue-500', shadow: 'shadow-cyan-500/25' },
  { icon: Award, value: '12', label: 'Premios Digitales', color: 'from-amber-500 to-orange-500', shadow: 'shadow-amber-500/20' },
  { icon: TrendingUp, value: '99%', label: 'Tasa de Éxito', color: 'from-emerald-500 to-teal-500', shadow: 'shadow-emerald-500/20' },
];

const highlights = [
  {
    icon: Code,
    gradient: 'from-violet-600 to-purple-600',
    shadow: 'shadow-violet-500/30',
    title: 'Arquitectura de Alto Rendimiento',
    desc: 'Construimos software escalable con arquitecturas modernas, código limpio y estándares de industria que garantizan crecimiento sostenible a largo plazo.',
    accent: 'text-violet-600 dark:text-violet-400',
    badge: 'bg-violet-500/10 border-violet-500/25',
    tag: 'Engineering',
  },
  {
    icon: Sparkles,
    gradient: 'from-cyan-500 to-blue-600',
    shadow: 'shadow-cyan-500/30',
    title: 'Diseño WOW UI/UX',
    desc: 'Interfaces que cautivan desde el primer clic. Glassmorphism, micro-animaciones y paletas armónicas para una experiencia de usuario memorable.',
    accent: 'text-cyan-600 dark:text-cyan-400',
    badge: 'bg-cyan-500/10 border-cyan-500/25',
    tag: 'Design',
  },
  {
    icon: Zap,
    gradient: 'from-amber-500 to-orange-500',
    shadow: 'shadow-amber-500/30',
    title: 'Entrega Ágil & Soporte 24/7',
    desc: 'Metodologías ágiles, entregas puntuales y soporte continuo. Tu proyecto siempre en manos expertas desde el día uno hasta el lanzamiento.',
    accent: 'text-amber-600 dark:text-amber-400',
    badge: 'bg-amber-500/10 border-amber-500/25',
    tag: 'Delivery',
  },
];

const Home = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % agencyTaglines.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden pt-20">
      <SEO
        title="ArkTech Labs — Agencia de Desarrollo de Software Premium | México"
        description="ArkTech Labs es la agencia líder en desarrollo de software en México y España. Especialistas en React, Node.js, Flutter, AWS, diseño UI/UX y automatización con IA. +150 proyectos exitosos."
        keywords="arktech labs, agencia software mexico, desarrollo web react, aplicaciones moviles flutter, diseño UI UX profesional, soluciones cloud, empresa de software"
        path="/"
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative py-12 lg:py-20">
        {/* Background blobs */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-violet-500/10 dark:bg-violet-500/8 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/6 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/4 rounded-full blur-3xl animate-blob animation-delay-4000" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-100" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-center lg:text-left space-y-7"
            >
              {/* Agency badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-violet-500/30 bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs sm:text-sm font-semibold shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
                </span>
                <span>Agencia de Software · Disponible para proyectos</span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.06]">
                Construimos el{' '}
                <span className="text-gradient-primary">Futuro</span>
                <br />
                Digital de tu empresa
              </h1>

              {/* Dynamic tagline */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={taglineIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2.5 text-xl sm:text-2xl font-bold text-violet-600 dark:text-violet-400"
                  >
                    <ChevronRight size={22} className="text-cyan-500" />
                    <span>{agencyTaglines[taglineIndex]}</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Somos una agencia de desarrollo de software de élite. Convertimos tu visión en productos digitales excepcionales con la más alta tecnología, diseño premium y experiencia de 8+ años en el mercado global.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Link
                  to="/contact"
                  className="btn-neon relative group overflow-hidden inline-flex items-center justify-center px-8 py-4 rounded-2xl text-white font-bold text-base"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Solicitar Consultoría Gratis
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl glass-card font-bold text-base text-gray-800 dark:text-gray-100 hover:border-violet-500/40 transition-all duration-300 group border border-violet-100/60 dark:border-violet-500/15"
                >
                  <Play size={16} className="text-violet-500 group-hover:scale-110 transition-transform" />
                  Ver Portafolio
                </Link>
              </div>

              {/* Trust badges */}
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 border-t border-violet-200/50 dark:border-violet-500/10 text-sm">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                  <CheckCircle2 className="text-emerald-500" size={16} />
                  <span>150+ Proyectos Entregados</span>
                </div>
                <div className="h-4 w-px bg-violet-200 dark:bg-violet-900 hidden sm:block" />
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                  <Star className="text-amber-500 fill-amber-500" size={16} />
                  <span>80+ Clientes Satisfechos</span>
                </div>
                <div className="h-4 w-px bg-violet-200 dark:bg-violet-900 hidden sm:block" />
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                  <Globe className="text-violet-500" size={16} />
                  <span>8+ Años de Experiencia</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column – Agency Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              {/* Glow halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-cyan-500 rounded-3xl opacity-15 blur-3xl animate-pulse" />

              {/* Dashboard card */}
              <div className="relative glass-card rounded-3xl overflow-hidden shadow-2xl shadow-violet-500/15 border border-violet-200/50 dark:border-violet-500/20">
                {/* Header */}
                <div className="px-4 py-3 bg-violet-50/90 dark:bg-[#0d0f1a]/95 border-b border-violet-100/80 dark:border-violet-500/15 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <div className="w-5 h-5 rounded-md overflow-hidden ml-1 shadow-sm shadow-violet-500/30">
                      <img src={ArktechLogo} alt="ArkTech" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs font-mono text-gray-500 dark:text-gray-400 font-semibold">
                      ArkTech — Panel de Control
                    </span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-semibold border border-emerald-500/20">
                    ● EN VIVO
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 space-y-5">
                  {/* Chart bars */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Proyectos activos este mes</p>
                      <p className="text-xs font-bold text-violet-600 dark:text-violet-400">↑ 12%</p>
                    </div>
                    <div className="h-16 bg-violet-500/8 dark:bg-violet-500/5 rounded-xl flex items-end gap-1.5 p-2">
                      {[35, 60, 45, 80, 55, 90, 70, 95, 65, 85, 72, 88].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-violet-600 to-cyan-400 rounded-sm opacity-85 transition-all duration-300"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-violet-500/8 border border-violet-500/15">
                      <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">24+</div>
                      <div className="text-[11px] text-gray-500 dark:text-gray-400 font-semibold">Proyectos Activos</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-cyan-500/8 border border-cyan-500/15">
                      <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">99%</div>
                      <div className="text-[11px] text-gray-500 dark:text-gray-400 font-semibold">Tasa de Éxito</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-500/8 border border-emerald-500/15">
                      <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">8+</div>
                      <div className="text-[11px] text-gray-500 dark:text-gray-400 font-semibold">Años de Exp.</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-amber-500/8 border border-amber-500/15">
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">80+</div>
                      <div className="text-[11px] text-gray-500 dark:text-gray-400 font-semibold">Clientes</div>
                    </div>
                  </div>

                  {/* Tech stack row */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {['React', 'Node', 'AWS', 'Flutter', 'AI'].map((t, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-violet-500/8 text-violet-600 dark:text-violet-400 text-[10px] font-bold border border-violet-500/15">
                        {t}
                      </span>
                    ))}
                    <span className="text-[10px] text-gray-400 font-semibold">+30 más</span>
                  </div>

                  {/* Footer */}
                  <div className="pt-2 border-t border-violet-100/80 dark:border-violet-500/10 flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1.5 text-emerald-500 font-semibold">
                      <CheckCircle2 size={14} /> Sistema Operativo
                    </span>
                    <span className="font-mono">ArkTech v3.0</span>
                  </div>
                </div>
              </div>

              {/* Floating badge bottom-left */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl glass-card shadow-xl shadow-violet-500/20 border border-violet-200/50 dark:border-violet-500/20 z-20"
              >
                <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-violet-500/40">
                  <img src={ArktechLogo} alt="ArkTech" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">ArkTech Agency</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400">Software Premium</div>
                </div>
              </motion.div>

              {/* Floating badge top-right */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl glass-card shadow-xl shadow-cyan-500/20 border border-violet-200/50 dark:border-violet-500/20 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/35">
                  <Sparkles size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">Diseño Premium</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400">UI/UX Glassmorphism</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TECH MARQUEE ─────────────────────────────────── */}
      <section className="py-10 bg-white/70 dark:bg-[#0d0f1a]/80 backdrop-blur-md border-y border-violet-100/80 dark:border-violet-500/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-5 text-center">
          <p className="text-xs font-mono font-bold tracking-widest text-violet-500/60 dark:text-violet-400/50 uppercase">
            // Stack Tecnológico que Dominamos
          </p>
        </div>
        <div className="relative flex overflow-x-hidden">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/90 dark:from-[#030712]/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/90 dark:from-[#030712]/90 to-transparent z-10 pointer-events-none" />
          <div className="py-2 animate-marquee whitespace-nowrap flex items-center gap-6">
            {[...techMarquee, ...techMarquee, ...techMarquee].map((tech, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card hover:scale-105 transition-transform duration-300 cursor-default border border-violet-100/80 dark:border-violet-500/12 shadow-sm"
              >
                <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${tech.color}`} />
                <span className="font-semibold text-sm text-gray-700 dark:text-gray-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────── */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`p-6 rounded-3xl glass-card border border-violet-100/80 dark:border-violet-500/12 text-center space-y-3 shadow-lg ${stat.shadow} hover:${stat.shadow} transition-all duration-300 card-shimmer`}
              >
                <div className={`mx-auto w-14 h-14 rounded-2xl bg-gradient-to-tr ${stat.color} flex items-center justify-center text-white shadow-lg ${stat.shadow}`}>
                  <stat.icon size={26} />
                </div>
                <div className="text-3xl font-extrabold text-gray-900 dark:text-white">{stat.value}</div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY ARKTECH ──────────────────────────────────── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block">
              Ventajas Competitivas
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
              ¿Por qué elegir{' '}
              <span className="text-gradient-primary">ArkTech?</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
              Combinamos visión creativa con excelencia técnica para entregar productos de software excepcionales que transforman negocios reales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-3xl glass-card glass-card-hover border border-violet-100/80 dark:border-violet-500/12 space-y-5 card-shimmer"
              >
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.gradient} flex items-center justify-center text-white shadow-lg ${item.shadow} group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={28} />
                  </div>
                  <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border ${item.badge} ${item.accent}`}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${item.badge} ${item.accent}`}>
                  <CheckCircle2 size={12} />
                  Garantizado
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BOTTOM BANNER ────────────────────────────── */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden text-center p-12 sm:p-20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-700 via-purple-700 to-cyan-700" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-7">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white/90 text-xs font-bold tracking-wider uppercase">
                <Sparkles size={12} /> Consultoría Gratuita
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white">
                ¿Listo para transformar<br />tu empresa?
              </h2>
              <p className="text-violet-200 max-w-2xl mx-auto text-base sm:text-xl">
                Nuestro equipo de ingenieros y diseñadores está listo para hacer realidad tu visión digital. Hablemos de tu proyecto hoy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-violet-700 font-bold shadow-xl shadow-black/20 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 group"
                >
                  Solicitar Consultoría <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/30 text-white font-bold hover:bg-white/25 transition-all duration-300"
                >
                  Ver Proyectos
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
