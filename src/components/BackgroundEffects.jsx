import React, { useEffect, useState } from 'react';

const BackgroundEffects = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Interactive Cursor Glow - Violet/Cyan */}
      <div
        className="hidden md:block absolute w-[600px] h-[600px] rounded-full opacity-20 dark:opacity-12 transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
          background: 'radial-gradient(circle, rgba(124,58,237,0.55) 0%, rgba(6,182,212,0.25) 45%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Animated Color Orbs - Violet/Cyan family */}
      <div className="absolute -top-60 -left-60 w-[600px] h-[600px] bg-violet-500/12 dark:bg-violet-600/10 rounded-full blur-[150px] animate-blob" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-400/12 dark:bg-cyan-500/8 rounded-full blur-[150px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-purple-500/10 dark:bg-purple-600/7 rounded-full blur-[150px] animate-blob animation-delay-4000" />

      {/* Extra deep orb for dark mode depth */}
      <div className="hidden dark:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-violet-900/15 rounded-full blur-[200px]" />

      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
    </div>
  );
};

export default BackgroundEffects;
