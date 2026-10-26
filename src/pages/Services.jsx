import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pencil, Code2, Search, Smartphone, Cloud, Brain,
  ArrowRight, CheckCircle2, Zap, Shield, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const services = [
  {
    icon: Pencil,
    gradient: 'from-pink-500 to-rose-500',
    shadow: 'shadow-pink-500/20',
    border: 'border-pink-500/15 hover:border-pink-500/40',
    badgeBg: 'bg-pink-500/10 border-pink-500/20 text-pink-600 dark:text-pink-400',
    tag: 'Design',
    title: 'Diseño UI/UX',
    desc: 'Diseñamos interfaces intuitivas, elegantes y enfocadas en maximizar la conversión del usuario. Cada pixel tiene un propósito.',
    features: ['Wireframing & Prototipado', 'Design System', 'User Research', 'Micro-interacciones'],
  },
  {
    icon: Code2,
    gradient: 'from-violet-600 to-purple-600',
    shadow: 'shadow-violet-500/20',
    border: 'border-violet-500/20 hover:border-violet-500/50',
    badgeBg: 'bg-violet-500/10 border-violet-500/20 text-violet-600 dark:text-violet-400',
    tag: 'Dev',
    title: 'Desarrollo Web',
    desc: 'Sitios web y plataformas escalables creadas con arquitecturas modernas, rápidas y mantenibles para cualquier tipo de negocio.',
    features: ['React / Next.js', 'Node.js & APIs REST', 'E-Commerce', 'CMS Personalizado'],
    featured: true,
  },
  {
    icon: Search,
    gradient: 'from-amber-400 to-orange-500',
    shadow: 'shadow-amber-500/20',
    border: 'border-amber-500/15 hover:border-amber-500/40',
    badgeBg: 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400',
    tag: 'Growth',
    title: 'Optimización SEO',
    desc: 'Potenciamos tu posicionamiento orgánico en motores de búsqueda para atraer clientes potenciales de forma constante.',
    features: ['SEO Técnico', 'Estrategia de Contenido', 'Core Web Vitals', 'Análisis & Reportes'],
  },
  {
    icon: Smartphone,
    gradient: 'from-cyan-500 to-blue-600',
    shadow: 'shadow-cyan-500/20',
    border: 'border-cyan-500/15 hover:border-cyan-500/40',
    badgeBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400',
    tag: 'Mobile',
    title: 'Apps Móviles',
    desc: 'Desarrollo nativo y multiplataforma de alto rendimiento para iOS y Android con experiencias premium que destacan.',
    features: ['React Native', 'Flutter', 'iOS & Android', 'App Store Optimization'],
  },
  {
    icon: Cloud,
    gradient: 'from-emerald-400 to-teal-500',
    shadow: 'shadow-emerald-500/20',
    border: 'border-emerald-500/15 hover:border-emerald-500/40',
    badgeBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400',
    tag: 'Cloud',
    title: 'Soluciones Cloud',
    desc: 'Infraestructura en la nube segura, automatizada y preparada para tráfico masivo con alta disponibilidad.',
    features: ['AWS / GCP / Azure', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Monitoreo 24/7'],
  },
  {
    icon: Brain,
    gradient: 'from-violet-500 to-indigo-600',
    shadow: 'shadow-violet-500/20',
    border: 'border-violet-500/15 hover:border-indigo-500/40',
    badgeBg: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400',
    tag: 'AI',
    title: 'Automatización con IA',
    desc: 'Integramos modelos de inteligencia artificial para automatizar flujos de trabajo y elevar la productividad de tu empresa.',
    features: ['Chatbots & Asistentes', 'Procesamiento de Datos', 'Integración de APIs IA', 'Machine Learning Custom'],
  },
];

const processSteps = [
  { step: '01', title: 'Descubrimiento', desc: 'Analizamos tu negocio, objetivos y audiencia para definir la estrategia perfecta.', color: 'from-violet-600 to-purple-600', icon: Search },
  { step: '02', title: 'Diseño', desc: 'Creamos prototipos y mockups validados contigo antes de escribir una sola línea de código.', color: 'from-cyan-500 to-blue-600', icon: Pencil },
  { step: '03', title: 'Desarrollo', desc: 'Construimos con código limpio, ágil y orientado a resultados. Sprint a sprint.', color: 'from-emerald-500 to-teal-500', icon: Code2 },
  { step: '04', title: 'Lanzamiento', desc: 'Desplegamos, optimizamos y monitoreamos tu solución para un arranque impecable.', color: 'from-amber-500 to-orange-500', icon: Zap },
];

const Services = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative pt-28 pb-20 overflow-hidden">
      <SEO
        title="Servicios de Desarrollo de Software | ArkTech Labs"
        description="ArkTech Labs ofrece desarrollo web, apps móviles iOS/Android, diseño UI/UX, SEO, soluciones cloud y automatización con IA. Soluciones digitales a medida para tu empresa."
        keywords="servicios desarrollo software, desarrollo web profesional, apps moviles react native flutter, diseño UX Mexico, SEO tecnico, cloud AWS, chatbots IA"
        path="/services"
      />

      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-500/8 dark:bg-violet-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/8 dark:bg-cyan-500/4 rounded-full blur-3xl -z-10" />
      <div className="absolute inset-0 bg-grid-pattern -z-10 opacity-50 dark:opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* ─── HEADER ─────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block"
          >
            Especialidades
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white"
          >
            Nuestros{' '}
            <span className="text-gradient-primary">Servicios</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-base sm:text-lg"
          >
            Escala tu empresa con nuestra experiencia digital personalizada. Soluciones completas desde el diseño hasta el despliegue en producción.
          </motion.p>
        </div>

        {/* ─── SERVICES GRID ──────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className={`relative p-7 rounded-3xl glass-card border transition-all duration-300 ${svc.border} space-y-5 group cursor-default shadow-lg card-shimmer ${
                svc.featured ? 'ring-1 ring-violet-500/30 dark:ring-violet-500/25' : ''
              }`}
            >
              {svc.featured && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-[10px] font-bold uppercase tracking-wide shadow-md shadow-violet-500/30">
                  ⭐ Popular
                </div>
              )}

              <div className="flex items-start justify-between">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${svc.gradient} flex items-center justify-center text-white shadow-lg ${svc.shadow} group-hover:scale-110 transition-transform duration-300`}>
                  <svc.icon size={26} />
                </div>
                <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border ${svc.badgeBg}`}>
                  {svc.tag}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{svc.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{svc.desc}</p>
              </div>

              <ul className="space-y-2">
                {svc.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 ${
                  hovered === i ? 'text-violet-600 dark:text-violet-400 gap-3' : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                Saber Más <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ─── PROCESS ────────────────────────────────────── */}
        <div className="space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block">
              Nuestro Proceso
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              ¿Cómo{' '}
              <span className="text-gradient-primary">trabajamos?</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Un proceso probado y transparente que garantiza resultados extraordinarios en cada etapa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-violet-600/0 via-violet-500/50 to-violet-600/0" />

            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="relative p-6 rounded-3xl glass-card border border-violet-100/80 dark:border-violet-500/12 text-center space-y-4 card-shimmer group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${step.color} flex items-center justify-center text-white shadow-lg shadow-violet-500/25 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon size={22} />
                </div>
                <div className="absolute top-5 right-5 text-[10px] font-mono font-bold text-gray-400 dark:text-gray-600">{step.step}</div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── CTA BANNER ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-10 sm:p-16 rounded-3xl overflow-hidden text-center space-y-6"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-700 via-purple-700 to-cyan-700" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-violet-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="text-violet-200 max-w-2xl mx-auto text-base sm:text-lg">
              Nuestro equipo de ingenieros y diseñadores está listo para hacer realidad tu visión digital. Hablemos de tu proyecto.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-violet-700 font-bold shadow-xl shadow-black/20 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 group"
            >
              Solicitar Consultoría Gratuita <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Services;
