import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin, Send, CheckCircle2, Clock, Sparkles, MessageSquare,
  ArrowRight, Globe, Shield, Users
} from 'lucide-react';
import SEO from '../components/SEO';

const contactDetails = [
  {
    icon: Mail,
    gradient: 'from-violet-600 to-purple-600',
    shadow: 'shadow-violet-500/20',
    title: 'Escríbenos a',
    value: 'hola@arktech.com',
    href: 'mailto:hola@arktech.com',
  },
  {
    icon: Phone,
    gradient: 'from-cyan-500 to-blue-600',
    shadow: 'shadow-cyan-500/20',
    title: 'Llámanos',
    value: '+1 (555) 000-0000',
    href: 'tel:+15550000000',
  },
  {
    icon: MapPin,
    gradient: 'from-emerald-400 to-teal-500',
    shadow: 'shadow-emerald-500/20',
    title: 'Ubicación',
    value: 'Ciudad de México / Madrid',
    href: '#',
  },
  {
    icon: Clock,
    gradient: 'from-amber-400 to-orange-500',
    shadow: 'shadow-amber-500/20',
    title: 'Horario',
    value: 'Lun – Vie, 9am – 6pm',
    href: '#',
  },
];

const trustBadges = [
  { icon: Shield, label: 'Datos 100% Seguros', color: 'text-emerald-500' },
  { icon: Globe, label: '15+ Países Atendidos', color: 'text-cyan-500' },
  { icon: Users, label: '80+ Clientes Felices', color: 'text-violet-500' },
];

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/maqdeovy', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) { setSent(true); form.reset(); }
    } catch (_) { }
    setLoading(false);
  };

  return (
    <div className="relative pt-28 pb-20 overflow-hidden">
      <SEO
        title="Contacto | ArkTech Labs — Solicita tu Proyecto Digital"
        description="Contáctanos y recibe una consultoría gratuita. El equipo de ArkTech Labs responde en menos de 24h. Desarrollamos tu proyecto web, app móvil o plataforma digital."
        keywords="contacto arktech labs, solicitar proyecto software, cotizacion app movil, cotizacion pagina web, agencia software contacto mexico"
        path="/contact"
        type="website"
        schema={[{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contacto — ArkTech Labs',
          url: 'https://arktech-labs.com/contact',
          description: 'Página de contacto de ArkTech Labs. Solicita una consultoría gratuita para tu proyecto de desarrollo de software.'
        }]}
      />

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-500/8 dark:bg-violet-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/8 dark:bg-cyan-500/4 rounded-full blur-3xl -z-10" />
      <div className="absolute inset-0 bg-grid-pattern -z-10 opacity-40 dark:opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* ─── HEADER ─────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block"
          >
            Ponte en contacto
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white"
          >
            Hablemos sobre{' '}
            <span className="text-gradient-primary">tu próximo proyecto</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-base sm:text-lg"
          >
            ¿Listo para llevar tu empresa al siguiente nivel digital? Nuestro equipo de ingenieros y diseñadores está listo para hacer realidad tu visión.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            {trustBadges.map((b, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-violet-100/60 dark:border-violet-500/15 text-xs font-semibold text-gray-600 dark:text-gray-400">
                <b.icon size={14} className={b.color} />
                {b.label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ─── MAIN GRID ──────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left – Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactDetails.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="p-5 rounded-2xl glass-card border border-violet-100/80 dark:border-violet-500/15 flex items-center gap-4 hover:border-violet-500/40 transition-all duration-300 group card-shimmer"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.gradient} flex items-center justify-center text-white shadow-lg ${item.shadow} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">{item.title}</p>
                    <p className="font-bold text-sm text-gray-900 dark:text-white mt-0.5">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="p-6 rounded-3xl glass-card border border-violet-500/25 bg-violet-500/5 space-y-3"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">Disponible para proyectos</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Respondemos en menos de <strong className="text-gray-900 dark:text-white">24 horas</strong>. Agenda una llamada gratuita de 30 min para revisar tu proyecto sin compromiso.
              </p>
              <div className="flex items-center gap-2 text-xs text-violet-600 dark:text-violet-400 font-semibold">
                <Sparkles size={14} />
                Consultoría inicial 100% gratuita
              </div>
            </motion.div>

            {/* WhatsApp button */}
            <motion.a
              href="https://wa.me/15550000000"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300"
            >
              <MessageSquare size={20} />
              Chatear por WhatsApp
            </motion.a>
          </motion.div>

          {/* Right – Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-3xl glass-card border border-violet-100/80 dark:border-violet-500/15 shadow-xl shadow-violet-500/8">

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 space-y-5"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={40} className="text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">¡Mensaje enviado!</h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-xs mx-auto text-sm">
                    Gracias por contactarnos. Te responderemos en menos de 24 horas con nuestra propuesta.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 font-semibold text-sm hover:bg-violet-500/20 transition-colors border border-violet-500/20"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-6 space-y-1">
                    <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Envíanos un mensaje</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Todos los campos requeridos. Respondemos en &lt;24h.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Nombre</label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Tu nombre completo"
                          className="w-full px-4 py-3 rounded-xl bg-violet-50/50 dark:bg-violet-950/30 border border-violet-100/80 dark:border-violet-500/15 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="correo@empresa.com"
                          className="w-full px-4 py-3 rounded-xl bg-violet-50/50 dark:bg-violet-950/30 border border-violet-100/80 dark:border-violet-500/15 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Empresa (opcional)</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Nombre de tu empresa"
                        className="w-full px-4 py-3 rounded-xl bg-violet-50/50 dark:bg-violet-950/30 border border-violet-100/80 dark:border-violet-500/15 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Tipo de Proyecto</label>
                      <select
                        name="project_type"
                        className="w-full px-4 py-3 rounded-xl bg-violet-50/50 dark:bg-violet-950/30 border border-violet-100/80 dark:border-violet-500/15 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-violet-500/60 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Selecciona un tipo de proyecto</option>
                        <option>Landing Page</option>
                        <option>Sitio Web Corporativo</option>
                        <option>Plataforma Web / SaaS</option>
                        <option>Aplicación Móvil</option>
                        <option>E-Commerce</option>
                        <option>Automatización / IA</option>
                        <option>Otro</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Mensaje</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Cuéntanos sobre tu proyecto, metas y plazos..."
                        className="w-full px-4 py-3 rounded-xl bg-violet-50/50 dark:bg-violet-950/30 border border-violet-100/80 dark:border-violet-500/15 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-neon relative group w-full overflow-hidden py-4 rounded-2xl text-white font-bold text-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                      ) : (
                        <>
                          Enviar Mensaje
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
