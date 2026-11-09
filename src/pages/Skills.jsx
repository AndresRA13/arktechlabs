import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check, X, Sparkles, Plus, Minus, Mail, ArrowRight,
  Star, Quote, Zap, Shield, Globe, ShieldCheck,
  CheckCircle2, Laptop, ArrowUpRight, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// ── PRICING DATA POR PROYECTO ────────────────────────────────────
const plans = [
  {
    name: 'Landing Page',
    badge: 'Lanzamiento & Conversión',
    price: '$199',
    period: 'USD / pago único',
    desc: 'Diseñada específicamente para validar ideas, captar leads y maximizar ventas de un producto o servicio.',
    gradient: 'from-slate-600 to-gray-700',
    shadow: 'shadow-gray-500/15',
    border: 'border-violet-100/80 dark:border-violet-500/12',
    accentText: 'text-gray-600 dark:text-gray-400',
    deliveryTime: 'Entrega en 3 a 7 días hábiles',
    features: [
      { text: 'Diseño UI/UX Custom & 100% Responsive', ok: true },
      { text: 'Copywriting & Estructura orientada a Conversión', ok: true },
      { text: 'Formulario de Contacto + Botón directo a WhatsApp', ok: true },
      { text: 'Configuración de Dominio, Hosting & Certificado SSL', ok: true },
      { text: 'Optimización de Velocidad (Core Web Vitals 95+)', ok: true },
      { text: 'Panel Autoadministrable para cambios', ok: false },
      { text: 'Pasarelas de Pago o Base de Datos', ok: false },
    ],
    cta: 'Cotizar Landing Page',
    popular: false,
  },
  {
    name: 'Web Corporativa',
    badge: 'Empresas & Negocios',
    price: '$449',
    period: 'USD / pago único',
    desc: 'La solución definitiva para empresas y profesionales que buscan autoridad digital, catálogo y captación constante.',
    gradient: 'from-violet-600 to-cyan-500',
    shadow: 'shadow-violet-500/30',
    border: 'border-violet-500/40',
    accentText: 'text-violet-600 dark:text-violet-400',
    deliveryTime: 'Entrega en 10 a 15 días hábiles',
    features: [
      { text: 'Hasta 6 a 8 Secciones o Páginas Personalizadas', ok: true },
      { text: 'Panel de Control Autoadministrable (sin tocar código)', ok: true },
      { text: 'Catálogo de Servicios o Portafolio de Trabajos', ok: true },
      { text: 'SEO Técnico en Google & Indexación Inmediata', ok: true },
      { text: 'Formularios Dinámicos con Alertas a tu Correo', ok: true },
      { text: 'Integración con Redes Sociales y Google Maps', ok: true },
      { text: '30 Días de Soporte Técnico + Capacitación en Video', ok: true },
    ],
    cta: 'Iniciar Web Corporativa',
    popular: true,
  },
  {
    name: 'Software a Medida & ERP',
    badge: 'Plataformas & E-Commerce',
    price: '$899',
    period: 'USD / desde',
    desc: 'Sistemas a medida como ERP de taller (tipo Moto Fix), tiendas online (PSG Shop), SaaS o paneles con usuarios.',
    gradient: 'from-amber-500 to-orange-600',
    shadow: 'shadow-amber-500/15',
    border: 'border-violet-100/80 dark:border-violet-500/12',
    accentText: 'text-amber-600 dark:text-amber-400',
    deliveryTime: 'Entrega por Sprints en 3 a 6 semanas',
    features: [
      { text: 'Arquitectura Full Stack a Medida (React / Node / Firebase)', ok: true },
      { text: 'Gestión de Usuarios, Autenticación y Roles con Permisos', ok: true },
      { text: 'Base de Datos en Tiempo Real y APIs REST Seguras', ok: true },
      { text: 'Pasarela de Pagos (Stripe / PayPal / Mercado Pago)', ok: true },
      { text: 'Módulos de Inventario, Facturación POS, Órdenes o Métricas', ok: true },
      { text: 'Formato PWA (Instalable en móvil y PC)', ok: true },
      { text: 'Código Fuente 100% de tu Propiedad + Despliegue Cloud', ok: true },
    ],
    cta: 'Cotizar Software a Medida',
    popular: false,
  },
];

// ── FAQ DATA ─────────────────────────────────────────────────────
const faqs = [
  {
    q: '¿Cómo se realizan los pagos de un proyecto?',
    a: 'Manejamos un esquema transparente por hitos: 50% de anticipo para iniciar la arquitectura y diseño, y el 50% restante únicamente cuando el proyecto esté terminado y aprobado a tu entera satisfacción.',
  },
  {
    q: '¿El código fuente y la plataforma me pertenecen al 100%?',
    a: 'Sí, totalmente. A diferencia de plataformas de renta mensual donde nunca eres dueño de nada, en ArkTech Labs todo el código, diseño y base de datos es 100% de tu propiedad sin ataduras ni mensualidades obligatorias.',
  },
  {
    q: '¿Cuánto tiempo toma desarrollar un proyecto web o software?',
    a: 'Una Landing Page se entrega en 3 a 7 días hábiles; una Web Corporativa completa toma entre 10 y 15 días; y plataformas web, aplicaciones móviles o sistemas ERP se entregan por sprints en 3 a 6 semanas.',
  },
  {
    q: '¿Podré actualizar textos, precios e imágenes yo mismo?',
    a: '¡Por supuesto! Desarrollamos nuestros proyectos con paneles de administración amigables (CMS autoadministrable) para que cualquier persona de tu equipo pueda cambiar contenidos sin saber programar. Además te entregamos un video tutorial personalizado.',
  },
  {
    q: '¿Qué incluye el soporte post-lanzamiento?',
    a: 'Todos nuestros proyectos incluyen 30 días de garantía y soporte técnico gratuito posterior al lanzamiento para resolver cualquier duda, corregir ajustes o capacitarte en el uso de tu plataforma.',
  },
  {
    q: '¿Cómo coordinamos si mi empresa está en otro país?',
    a: 'Trabajamos de forma 100% remota con clientes en México, España, EE.UU. y toda Latinoamérica. Coordinamos mediante videollamadas, demos semanales y canales directos como WhatsApp y Slack.',
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
        title="Precios de Desarrollo de Software y Páginas Web | ArkTech Labs"
        description="Precios claros y transparentes por proyecto: Landing Pages desde $199 USD, Sitios Web Corporativos desde $449 USD y Software a Medida / ERP desde $899 USD. Pago único por hito y código 100% tuyo."
        keywords="precios desarrollo software, costo pagina web mexico, presupuesto software a medida, cuanto cuesta una landing page, desarrollo erp taller costo, agencia desarrollo web precios"
        path="/skills"
      />

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-500/8 dark:bg-violet-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/8 dark:bg-cyan-500/4 rounded-full blur-3xl -z-10" />
      <div className="absolute inset-0 bg-grid-pattern -z-10 opacity-40 dark:opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">

        {/* ─── PRICING ─────────────────────────────────────── */}
        <div className="space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block"
            >
              Precios Transparentes por Proyecto
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white"
            >
              Inversión clara para{' '}
              <span className="text-gradient-primary">tu proyecto digital</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400 text-base sm:text-lg"
            >
              Sin rentas forzosas ni sorpresas. Pagas por el desarrollo de tu software o página web y el código es 100% de tu propiedad.
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
                    ? 'shadow-2xl shadow-violet-500/25 scale-[1.03] z-10'
                    : 'glass-card'
                } card-shimmer flex flex-col justify-between`}
              >
                {plan.popular && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-[0.04] pointer-events-none`} />
                )}
                {plan.popular && (
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${plan.gradient}`} />
                )}

                <div className="p-7 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                      {plan.badge}
                    </span>
                    {plan.popular && (
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${plan.gradient} text-white text-xs font-bold shadow-md shadow-violet-500/30`}>
                        <Sparkles size={12} /> Más Solicitado
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{plan.desc}</p>
                  </div>

                  <div className="py-2 border-y border-violet-100/60 dark:border-violet-500/10">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1 flex items-center gap-1">
                      <CheckCircle2 size={12} /> {plan.deliveryTime}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feat, j) => (
                      <li key={j} className={`flex items-start gap-2.5 text-xs sm:text-sm ${feat.ok ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-600 line-through opacity-70'}`}>
                        {feat.ok
                          ? <Check size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                          : <X size={16} className="text-gray-400 flex-shrink-0 mt-0.5" />
                        }
                        <span>{feat.text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className={`block w-full text-center py-4 rounded-2xl font-bold text-sm transition-all duration-300 shadow-md ${
                        plan.popular
                          ? `bg-gradient-to-r ${plan.gradient} text-white shadow-violet-500/30 hover:scale-[1.02] hover:shadow-xl`
                          : 'glass-card border border-violet-100/80 dark:border-violet-500/15 text-gray-800 dark:text-gray-200 hover:border-violet-500/40'
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Guarantee and Payment Scheme */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl glass-card border border-violet-100/80 dark:border-violet-500/15 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900 dark:text-white">Código 100% de tu Propiedad</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">Sin rentas mensuales ni ataduras.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl glass-card border border-violet-100/80 dark:border-violet-500/15 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center flex-shrink-0">
                <Zap size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900 dark:text-white">Pago Seguro por Hitos</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">50% al iniciar y 50% al entregar.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl glass-card border border-violet-100/80 dark:border-violet-500/15 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900 dark:text-white">30 Días de Garantía & Soporte</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">Acompañamiento post-lanzamiento.</p>
              </div>
            </div>
          </div>

          {/* Custom Project Callout */}
          <div className="p-7 sm:p-9 rounded-3xl glass-card border border-violet-500/25 bg-violet-500/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest">
                // Proyectos Especiales & Apps Móviles
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white">
                ¿Necesitas una App Móvil nativa, un E-Commerce masivo o Inteligencia Artificial?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl">
                Diseñamos y desarrollamos proyectos con requerimientos a la medida para startups y corporativos. Cuéntanos tu idea y recibe un presupuesto detallado sin compromiso en menos de 24 horas.
              </p>
            </div>
            <Link
              to="/contact"
              className="btn-neon px-8 py-4 rounded-2xl text-white font-bold text-sm flex items-center gap-2 flex-shrink-0 shadow-lg"
            >
              Pedir Presupuesto a Medida <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* ─── TESTIMONIALS ────────────────────────────────── */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block">
              Testimonios de Clientes
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
                className="p-6 rounded-3xl glass-card glass-card-hover border border-violet-100/80 dark:border-violet-500/12 space-y-4 relative card-shimmer flex flex-col justify-between"
              >
                <div>
                  <Quote size={28} className="text-violet-500/20 dark:text-violet-400/15 absolute top-5 right-5" />

                  <div className="flex gap-1 mb-3">
                    {[...Array(t.rating)].map((_, s) => (
                      <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="space-y-3 pt-2">
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── FAQ ─────────────────────────────────────────── */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block">
              Dudas Resueltas
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
                  className="w-full flex items-center justify-between p-5 text-left gap-4 cursor-pointer hover:bg-violet-500/5 transition-colors"
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
                <Mail size={16} /> Boletín Tecnológico
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Consejos de ingeniería & <span className="text-cyan-300">crecimiento digital</span>
              </h2>
              <p className="text-violet-200 max-w-md text-sm">
                Suscríbete para recibir tendencias en desarrollo web, casos prácticos y metodologías para escalar productos de software.
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
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-violet-700 font-bold text-sm hover:scale-[1.03] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
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
