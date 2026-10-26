import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Compass, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[85vh] pt-24 flex items-center justify-center relative px-4">
      <div className="text-center glass-card p-10 sm:p-16 rounded-3xl border border-gray-200/80 dark:border-white/10 max-w-lg mx-auto shadow-2xl relative z-10 space-y-6">
        
        {/* Animated Icon */}
        <motion.div
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 10, opacity: 1 }}
          transition={{
            rotate: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            opacity: { duration: 0.5 }
          }}
          className="inline-block p-6 rounded-3xl bg-gradient-to-tr from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/30"
        >
          <Compass size={56} strokeWidth={1.8} />
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-7xl sm:text-8xl font-extrabold text-gradient-primary tracking-tight"
        >
          404
        </motion.h1>

        {/* Message */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Página No Encontrada
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
            Parece que te has desplazado a una ruta inexistente en el ciberespacio.
          </p>
        </div>

        {/* Home Button */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <ArrowLeft size={16} />
            <span>Volver al Inicio</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
