import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArktechLogo from '../assets/Arktech.png';
import { useTheme } from '../context/ThemeContext';



/* ── Partícula flotante ── */
const FloatingParticle = ({ delay, x, size, duration, isDark }) => (
  <motion.div
    className={`absolute rounded-full blur-sm ${isDark ? 'bg-violet-500/25' : 'bg-violet-400/20'}`}
    style={{ left: `${x}%`, width: size, height: size }}
    initial={{ y: '110vh', opacity: 0 }}
    animate={{ y: '-10vh', opacity: [0, 0.5, 0.5, 0] }}
    transition={{ duration, delay, repeat: Infinity, ease: 'linear', times: [0, 0.1, 0.9, 1] }}
  />
);

/* ── Hex dot ── */
const HexDot = ({ angle, radius, delay }) => {
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-sm bg-gradient-to-tr from-violet-500 to-cyan-400"
      style={{ left: '50%', top: '50%', marginLeft: -4, marginTop: -4 }}
      animate={{ x: [0, x, 0], y: [0, y, 0], opacity: [0.2, 1, 0.2], scale: [0.6, 1.2, 0.6] }}
      transition={{ duration: 3, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  );
};

/* ── Barra de progreso segmentada ── */
const SegmentBar = ({ progress, isDark }) => {
  const segments = 20;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: segments }).map((_, i) => {
        const filled = (i / segments) * 100 <= progress;
        return (
          <motion.div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-150 ${
              filled
                ? 'bg-gradient-to-r from-violet-500 to-cyan-400 shadow-sm shadow-violet-500/50'
                : isDark ? 'bg-white/10' : 'bg-violet-200/60'
            }`}
            style={{ width: i % 4 === 0 ? 6 : 4 }}
            animate={filled ? { opacity: [0.7, 1, 0.7] } : { opacity: 1 }}
            transition={filled ? { duration: 1.5, repeat: Infinity } : {}}
          />
        );
      })}
    </div>
  );
};

/* ═══════════════════════════════════════════
   LOADER PRINCIPAL
═══════════════════════════════════════════ */
const Loader = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [progress, setProgress] = useState(0);
  const [glitch, setGlitch]     = useState(false);

  /* Progreso suave */
  useEffect(() => {
    const steps = [
      { to: 25,  delay: 200  },
      { to: 55,  delay: 500  },
      { to: 80,  delay: 900  },
      { to: 100, delay: 1300 },
    ];
    const timers = steps.map(({ to, delay }) =>
      setTimeout(() => setProgress(to), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  /* Efecto glitch ocasional */
  useEffect(() => {
    const run = () => { setGlitch(true); setTimeout(() => setGlitch(false), 120); };
    const t1 = setTimeout(run, 600);
    const t2 = setTimeout(run, 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const particles = Array.from({ length: 18 }, (_, i) => ({
    delay: i * 0.35,
    x: 3 + (i * 23) % 94,
    size: 4 + (i % 5) * 3,
    duration: 5 + (i % 4) * 1.5,
  }));

  const hexAngles = [0, 45, 90, 135, 180, 225, 270, 315];

  /* ── Tokens de color por tema ── */
  const t = {
    /* Fondo principal */
    bg: isDark
      ? 'radial-gradient(ellipse at 60% 40%, #12012b 0%, #030712 55%, #000d1a 100%)'
      : 'radial-gradient(ellipse at 60% 40%, #ede9fe 0%, #f8f7ff 55%, #e0f2fe 100%)',

    /* Grid */
    gridLine: isDark
      ? 'rgba(124,58,237,0.15)'
      : 'rgba(124,58,237,0.10)',

    /* Scanlines */
    scanline: isDark ? 'rgba(0,0,0,0.08)' : 'rgba(124,58,237,0.04)',

    /* Orbs */
    orbTop: isDark
      ? 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%)'
      : 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 65%)',
    orbBottom: isDark
      ? 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 65%)'
      : 'radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 65%)',

    /* Inner circle behind logo */
    innerBg: isDark
      ? 'radial-gradient(ellipse at 60% 40%, #12012b 0%, #030712 100%)'
      : 'radial-gradient(ellipse at 60% 40%, #ede9fe 0%, #f8f7ff 100%)',

    tagline: isDark ? 'text-white/40' : 'text-violet-400/70',
    progressLabel: isDark ? 'text-white/40' : 'text-violet-400/80',
    progressValue: isDark ? 'text-violet-400' : 'text-violet-600',

    /* Corner bracket border */
    cornerBorder: isDark ? 'rgba(124,58,237,0.4)' : 'rgba(124,58,237,0.3)',

    /* Bottom line */
    bottomLine: isDark
      ? 'linear-gradient(90deg, transparent, rgba(124,58,237,0.6), rgba(6,182,212,0.6), transparent)'
      : 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(6,182,212,0.5), transparent)',
  };

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
        style={{ background: t.bg }}
      >

        {/* ── Grid animado ── */}
        <div
          className="absolute inset-0 opacity-100 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(${t.gridLine} 1px, transparent 1px),
              linear-gradient(90deg, ${t.gridLine} 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* ── Scanlines ── */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${t.scanline} 2px, ${t.scanline} 4px)`,
          }}
        />

        {/* ── Partículas flotantes ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p, i) => (
            <FloatingParticle key={i} {...p} isDark={isDark} />
          ))}
        </div>

        {/* ── Orb superior ── */}
        <motion.div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: t.orbTop }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* ── Orb inferior ── */}
        <motion.div
          className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: t.orbBottom }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* ═══════════════════ ZONA CENTRAL ═══════════════════ */}
        <div className="relative z-20 flex flex-col items-center gap-8 px-6 w-full max-w-sm">

          {/* ── Logo con anillos ── */}
          <div className="relative flex items-center justify-center" style={{ width: 200, height: 200 }}>

            {/* Anillo cónico giratorio */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent 75%, rgba(124,58,237,0.8) 100%)',
                padding: 2,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-full h-full rounded-full" style={{ background: t.innerBg }} />
            </motion.div>

            {/* Anillo SVG degradado */}
            <motion.svg
              className="absolute"
              width={160} height={160}
              viewBox="0 0 160 160"
              fill="none"
            >
              <motion.circle
                cx="80" cy="80" r="72"
                stroke="url(#lg1)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="452"
                animate={{ strokeDashoffset: [452, 0, 452] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <defs>
                <linearGradient id="lg1" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
                  <stop offset="0%"   stopColor="#7c3aed" />
                  <stop offset="50%"  stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                </linearGradient>
              </defs>
            </motion.svg>

            {/* Anillo punteado inverso */}
            <motion.div
              className="absolute w-28 h-28 rounded-full border border-dashed border-cyan-500/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />

            {/* Hex dots */}
            {hexAngles.map((angle, i) => (
              <HexDot key={i} angle={angle} radius={62} delay={i * 0.38} />
            ))}

            {/* Logo central */}
            <motion.div
              className="relative z-10 w-24 h-24 rounded-2xl overflow-hidden"
              animate={{
                boxShadow: [
                  '0 0 30px rgba(124,58,237,0.5), 0 0 60px rgba(124,58,237,0.2)',
                  '0 0 50px rgba(6,182,212,0.6), 0 0 80px rgba(6,182,212,0.25)',
                  '0 0 30px rgba(124,58,237,0.5), 0 0 60px rgba(124,58,237,0.2)',
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src={ArktechLogo}
                alt="ArkTech"
                className="w-full h-full object-cover"
                style={{
                  filter: glitch ? 'hue-rotate(90deg) brightness(1.3)' : 'none',
                  transform: glitch ? 'translateX(2px) skewX(-2deg)' : 'none',
                  transition: 'filter 0.05s, transform 0.05s',
                }}
              />
            </motion.div>
          </div>

          {/* ── Nombre ── */}
          <div className="text-center space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className={`text-3xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              Ark
              <span style={{
                background: 'linear-gradient(90deg, #a78bfa, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Tech.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`text-[11px] font-mono tracking-[0.3em] uppercase ${t.tagline}`}
            >
              Digital Agency · Software Development
            </motion.p>
          </div>

          {/* ── Progreso segmentado ── */}
          <div className="w-full space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className={t.progressLabel}>INICIALIZANDO SISTEMA</span>
              <motion.span
                className={`font-bold ${t.progressValue}`}
                key={progress}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {progress}%
              </motion.span>
            </div>
            <SegmentBar progress={progress} isDark={isDark} />
          </div>

        </div>

        {/* ── Línea decorativa inferior ── */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-px"
          style={{ background: t.bottomLine }}
          animate={{ opacity: [0.4, 1, 0.4], scaleX: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* ── Corner brackets ── */}
        {[
          'top-4 left-4',
          'top-4 right-4',
          'bottom-4 left-4',
          'bottom-4 right-4',
        ].map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute ${pos} w-6 h-6 pointer-events-none`}
            style={{
              borderTop:    i < 2     ? `1px solid ${t.cornerBorder}` : 'none',
              borderBottom: i >= 2    ? `1px solid ${t.cornerBorder}` : 'none',
              borderLeft:   i % 2 === 0 ? `1px solid ${t.cornerBorder}` : 'none',
              borderRight:  i % 2 === 1 ? `1px solid ${t.cornerBorder}` : 'none',
            }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}

      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
