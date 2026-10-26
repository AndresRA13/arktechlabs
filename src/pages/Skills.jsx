import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Sparkles, Plus, Minus, Mail, ArrowRight, Star, Quote, Zap, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// ── PRICING DATA ────────────────────────────────────────────────
const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/mes',
    desc: 'Perfecto para emprendedores y pequeñas empresas que dan sus primeros pasos digitales.',
    gradient: 'from-slate-500 to-gray-600',
    shadow: 'shadow-gray-500/15',
    border: 'border-violet-100/80 dark:border-violet-500/12',
    accentText: 'text-gray-600 dark:text-gray-400',
    features: [
      { text: '5 Proyectos Incluidos', ok: true },
      { text: 'Soporte Básico por Email', ok: true },
      { text: 'Dominio Personalizado', ok: true },
      { text: 'Panel de Administración', ok: true },
      { text: 'Automatización con IA', ok: false },
      { text: 'Soporte Prioritario 24/7', ok: false },
    ],
    cta: 'Empezar Ahora',
    popular: false,
  },
  {
    name: 'Profesional',
    price: '$99',
    period: '/mes',
    desc: 'Ideal para empresas en crecimiento que necesitan herramientas avanzadas y soporte dedicado.',
    gradient: 'from-violet-600 to-cyan-500',
    shadow: 'shadow-violet-500/30',
    border: 'border-violet-500/40',
    accentText: 'text-violet-600 dark:text-violet-400',
    features: [
      { text: '20 Proyectos Incluidos', ok: true },
      { text: 'Soporte Prioritario 24/7', ok: true },
      { text: 'Dominio Personalizado', ok: true },
      { text: 'Panel de Administración', ok: true },
      { text: 'Automatización e IA Avanzada', ok: true },
      { text: 'Reportes & Analíticas', ok: true },
    ],
    cta: 'Empezar Ahora',
    popular: true,
  },
  {
    name: 'Empresarial',
    price: '$199',
    period: '/mes',
    desc: 'Para corporaciones que requieren soluciones a medida, arquitectura propia y un equipo dedicado.',
    gradient: 'from-amber-500 to-orange-600',
    shadow: 'shadow-amber-500/15',
    border: 'border-violet-100/80 dark:border-violet-500/12',
    accentText: 'text-amber-600 dark:text-amber-400',
    features: [
      { text: 'Proyectos Ilimitados', ok: true },
      { text: 'Gerente de Cuenta Dedicado', ok: true },
      { text: 'Dominio & Servidor Propio', ok: true },
      { text: 'Arquitectura a la Medida', ok: true },
      { text: 'Automatización & IA Full', ok: true },
      { text: 'SLA Garantizado', ok: true },
    ],
    cta: 'Contactar Ventas',
    popular: false,
  },
];

// ── FAQ DATA ─────────────────────────────────────────────────────
const faqs = [
  {
    q: '¿Cuánto tiempo toma desarrollar un proyecto?',
    a: 'Normalmente, una landing page o sitio corporativo toma de 1 a 2 semanas, mientras que plataformas web y aplicaciones móviles complejas se completan entre 4 y 8 semanas según los requisitos.',
  },
  {
    q: '¿Ofrecen soporte continuo y mantenimiento?',
    a: '¡Sí! Ofrecemos planes de soporte continuo, monitoreo de seguridad, copias de seguridad y actualizaciones regulares para asegurar que tu sistema opere perfectamente.',
  },
  {
    q: '¿Puedo actualizar el contenido de mi web yo mismo?',
    a: 'Totalmente. Desarrollamos nuestras aplicaciones con paneles de administración amigables e intuitivos para que puedas cambiar textos, imágenes y datos sin necesidad de programar.',
  },
  {
    q: '¿Cómo garantizan la seguridad de la información?',
    a: 'Utilizamos estándares de encriptación SSL/TLS, autenticación de dos factores, arquitectura segura en la nube y pruebas periódicas de penetración para proteger tus datos.',
  },
  {
    q: '¿Trabajan con empresas de otros países?',
    a: 'Absolutamente. Somos una agencia 100% remota con clientes en más de 15 países. Coordinamos en múltiples zonas horarias y tenemos equipos disponibles en español e inglés.',
  },
  {
    q: '¿Qué tecnologías utilizan?',
    a: 'Trabajamos con el stack más moderno del mercado: React, Next.js, Node.js, TypeScript, Flutter, React Native, AWS, PostgreSQL, MongoDB y más. Siempre elegimos la tecnología más adecuada para cada proyecto.',
  },
];

// ── TESTIMONIALS DATA ─────────────────────────────────────────
const testimonials = [
  {
    quote: 'ArkTech transformó por completo nuestro modelo de negocio. Su atención al detalle y la calidad del diseño son simplemente inigualables en la industria.',
    name: 'Alejandro Gómez',
    role: 'CEO en TechFlow',
    avatar: 'https://i.pravatar.cc/150?u=alejandro',
    rating: 5,
    metric: '+68% ventas',
    metricColor: 'bg-violet-500/10 border-violet-500/20 text-violet-600 dark:text-violet-400',
  },
  {
    quote: 'La mejor decisión que tomamos fue asociarnos con ArkTech. Nuestra tasa de conversión aumentó un 40% en solo dos meses tras el rediseño.',
    name: 'Sofía Williams',
    role: 'Directora de Marketing',
    avatar: 'https://i.pravatar.cc/150?u=sofia2',
    rating: 5,
    metric: '+40% conversión',
    metricColor: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400',
  },
  {
    quote: 'El equipo entregó nuestra plataforma dos semanas antes de lo previsto con un nivel de calidad impecable. Recomendados al 100%.',
    name: 'Carlos Mendoza',
    role: 'CTO en InnovaCloud',
    avatar: 'https://i.pravatar.cc/150?u=carlos2',
    rating: 5,
    metric: '2 semanas antes',
    metricColor: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400',
  },
];

// ── COMPONENT ────────────────────────────────────────────────────
const Skills = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <div className="relative pt-28 pb-20 overflow-hidden">
      <SEO
        title="Precios y Planes | ArkTech Labs — Desarrollo de Software"
        description="Conoce los planes de desarrollo de software de ArkTech Labs: Starter $49/mes, Profesional $99/mes y Empresarial $199/mes. Sin permanencia. Consultoría gratuita."
        keywords="precios desarrollo software, planes agencia digital, costo aplicacion web, presupuesto app movil, planes saas mexico"
        path="/skills"
      />

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-500/8 dark:bg-violet-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/8 dark:bg-cyan-500/4 rounded-full blur-3xl -z-10" />
      <div className="absolute inset-0 bg-grid-pattern -z-10 opacity-40 dark:opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">

        {/* ─── PRICING ─────────────────────────────────────── */}
        <div className="space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-5">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block"
            >
              Precios
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white"
            >
              Planes para cada{' '}
              <span className="text-gradient-primary">tipo de negocio</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400"
            >
              Sin letra pequeña. Sin sorpresas. Elige el plan que más se adapte a tus objetivos.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: plan.popular ? -4 : -6 }}
                className={`relative rounded-3xl border overflow-hidden ${plan.border} ${
                  plan.popular
                    ? 'shadow-2xl shadow-violet-500/25 scale-[1.03]'
                    : 'glass-card'
                } card-shimmer`}
              >
                {plan.popular && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-[0.04] pointer-events-none`} />
                )}
                {plan.popular && (
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.gradient}`} />
                )}

                <div className="p-7 space-y-6">
                  {plan.popular && (
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${plan.gradient} text-white text-xs font-bold shadow-md shadow-violet-500/30`}>
                      <Sparkles size={12} /> Más Popular
                    </span>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{plan.desc}</p>
                  </div>

                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="text-gray-500 dark:text-gray-400 pb-1">{plan.period}</span>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feat, j) => (
                      <li key={j} className={`flex items-center gap-3 text-sm ${feat.ok ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-600 line-through'}`}>
                        {feat.ok
                          ? <Check size={16} className="text-emerald-500 flex-shrink-0" />
                          : <X size={16} className="text-gray-400 flex-shrink-0" />
                        }
                        {feat.text}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/35`
                        : 'glass-card border border-violet-100/80 dark:border-violet-500/12 text-gray-800 dark:text-gray-200 hover:border-violet-500/40'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Guarantee note */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            {[
              { icon: Shield, text: 'Garantía de satisfacción de 30 días' },
              { icon: Globe, text: 'Sin contratos de permanencia' },
              { icon: Zap, text: 'Cancela cuando quieras' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon size={14} className="text-violet-500" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── TESTIMONIALS ────────────────────────────────── */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block">
              Testimonios
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Lo que dicen{' '}
              <span className="text-gradient-primary">nuestros clientes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-3xl glass-card glass-card-hover border border-violet-100/80 dark:border-violet-500/12 space-y-4 relative card-shimmer"
              >
                {/* Quote icon */}
                <Quote size={28} className="text-violet-500/20 dark:text-violet-400/15 absolute top-5 right-5" />

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  "{t.quote}"
                </p>

                {/* Metric */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-bold ${t.metricColor}`}>
                  ↑ {t.metric}
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-violet-100/80 dark:border-violet-500/10">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-violet-500/20" />
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{t.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── FAQ ─────────────────────────────────────────── */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block">
              Soporte
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Preguntas{' '}
              <span className="text-gradient-primary">Frecuentes</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl glass-card border border-violet-100/80 dark:border-violet-500/12 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-5 text-left gap-4 cursor-pointer"
                >
                  <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    openFaq === i
                      ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white'
                      : 'bg-violet-50 dark:bg-violet-900/40 text-gray-600 dark:text-gray-300'
                  }`}>
                    {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-violet-100/80 dark:border-violet-500/10 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── NEWSLETTER ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-700 via-purple-700 to-cyan-700" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 p-10 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-violet-200 text-sm font-semibold">
                <Mail size={16} /> Boletín Digital
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Únete a nuestro <span className="text-cyan-300">boletín</span>
              </h2>
              <p className="text-violet-200 max-w-md">
                Suscríbete para recibir las últimas novedades, guías tecnológicas y tendencias del sector digital.
              </p>
            </div>

            {subscribed ? (
              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold">
                <Check size={20} className="text-emerald-300" />
                ¡Gracias por suscribirte!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  required
                  className="flex-1 px-5 py-3.5 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 text-white placeholder-violet-200 focus:outline-none focus:border-white/50 text-sm"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-violet-700 font-bold text-sm hover:scale-[1.03] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Suscribirse <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Skills;
