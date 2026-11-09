import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Zap, Layers, Globe, Shield, Star,
  Sparkles, CheckCircle2, Code, Cpu, TrendingUp,
  Users, Award, Clock, ChevronRight, Play, Terminal,
  Database, Cloud, Smartphone, Brain, Pencil, Code2,
  Search, Check, Plus, Minus, MessageSquare, ExternalLink,
  ShieldCheck, Rocket, Quote, Mail, Phone, MapPin,
  LayoutDashboard, ShoppingCart, Monitor, ArrowUpRight
} from 'lucide-react';
import ArktechLogo from '../assets/Arktech.png';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const agencyTaglines = [
  'Desarrollo de Software a Medida',
  'Diseño UI/UX de Alto Impacto',
  'Soluciones Cloud & Automatización con IA',
  'Apps Móviles Nativas para iOS y Android',
];

const techMarquee = [
  { name: 'React 19', color: 'from-cyan-400 to-blue-500' },
  { name: 'Node.js', color: 'from-emerald-400 to-green-600' },
  { name: 'Next.js', color: 'from-slate-400 to-gray-600' },
  { name: 'Flutter', color: 'from-blue-400 to-cyan-500' },
  { name: 'React Native', color: 'from-sky-400 to-blue-600' },
  { name: 'TypeScript', color: 'from-blue-600 to-sky-600' },
  { name: 'AWS Cloud', color: 'from-amber-500 to-orange-600' },
  { name: 'MongoDB', color: 'from-green-500 to-emerald-700' },
  { name: 'PostgreSQL', color: 'from-blue-500 to-indigo-600' },
  { name: 'Docker', color: 'from-sky-400 to-blue-600' },
  { name: 'Figma UI/UX', color: 'from-violet-500 to-purple-500' },
  { name: 'OpenAI / IA', color: 'from-emerald-400 to-teal-500' },
];

const statsData = [
  { icon: Layers, value: '150+', label: 'Proyectos Entregados', desc: 'Soluciones web, móviles y cloud con 100% de éxito.', color: 'from-violet-600 to-purple-600', shadow: 'shadow-violet-500/25' },
  { icon: Users, value: '80+', label: 'Clientes Globales', desc: 'Empresas activas en más de 15 países confían en nosotros.', color: 'from-cyan-500 to-blue-500', shadow: 'shadow-cyan-500/25' },
  { icon: Rocket, value: '2020', label: 'Año de Creación', desc: 'Nacidos con el deseo de hacer algo diferente en software.', color: 'from-amber-500 to-orange-500', shadow: 'shadow-amber-500/20' },
  { icon: TrendingUp, value: '99%', label: 'Tasa de Satisfacción', desc: 'Entregas ágiles y soporte de alto nivel continuo.', color: 'from-emerald-500 to-teal-500', shadow: 'shadow-emerald-500/20' },
];

// Datos sincronizados con /services
const servicesSummary = [
  {
    icon: Code2,
    gradient: 'from-violet-600 to-purple-600',
    shadow: 'shadow-violet-500/20',
    border: 'border-violet-500/20 hover:border-violet-500/50',
    badgeBg: 'bg-violet-500/10 border-violet-500/20 text-violet-600 dark:text-violet-400',
    tag: 'Web & SaaS',
    title: 'Desarrollo Web & SaaS',
    desc: 'Sitios web y plataformas escalables creadas con arquitecturas modernas, ultra rápidas y mantenibles.',
    features: ['React / Next.js', 'APIs REST & GraphQL', 'Arquitectura Cloud', 'CMS & E-Commerce'],
    featured: true,
  },
  {
    icon: Smartphone,
    gradient: 'from-cyan-500 to-blue-600',
    shadow: 'shadow-cyan-500/20',
    border: 'border-cyan-500/15 hover:border-cyan-500/40',
    badgeBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400',
    tag: 'Móvil',
    title: 'Apps Móviles',
    desc: 'Desarrollo nativo y multiplataforma de alto rendimiento para iOS y Android con experiencias premium.',
    features: ['React Native & Flutter', 'Notificaciones Push', 'Sincronización Offline', 'Publicación en Stores'],
  },
  {
    icon: Brain,
    gradient: 'from-purple-500 to-indigo-600',
    shadow: 'shadow-purple-500/20',
    border: 'border-purple-500/15 hover:border-indigo-500/40',
    badgeBg: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400',
    tag: 'Inteligencia Artificial',
    title: 'Automatización & IA',
    desc: 'Integramos modelos de IA y flujos inteligentes para optimizar procesos y multiplicar la productividad.',
    features: ['Chatbots & Asistentes IA', 'Procesamiento de Datos', 'Integración de OpenAI / APIs', 'Pipelines Automatizados'],
    featured: true,
  },
  {
    icon: Pencil,
    gradient: 'from-pink-500 to-rose-500',
    shadow: 'shadow-pink-500/20',
    border: 'border-pink-500/15 hover:border-pink-500/40',
    badgeBg: 'bg-pink-500/10 border-pink-500/20 text-pink-600 dark:text-pink-400',
    tag: 'UI/UX Design',
    title: 'Diseño UI/UX Premium',
    desc: 'Diseñamos interfaces intuitivas, elegantes y enfocadas en maximizar la conversión de tus usuarios.',
    features: ['Design Systems en Figma', 'Prototipado Interactivo', 'User Research', 'Micro-animaciones'],
  },
  {
    icon: Cloud,
    gradient: 'from-emerald-400 to-teal-500',
    shadow: 'shadow-emerald-500/20',
    border: 'border-emerald-500/15 hover:border-emerald-500/40',
    badgeBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400',
    tag: 'Cloud & DevOps',
    title: 'Soluciones Cloud & DevOps',
    desc: 'Infraestructura en la nube segura, automatizada y preparada para tráfico masivo sin caídas.',
    features: ['AWS / GCP / Azure', 'Docker & CI/CD', 'Monitoreo 24/7', 'Backups Automáticos'],
  },
  {
    icon: Search,
    gradient: 'from-amber-400 to-orange-500',
    shadow: 'shadow-amber-500/20',
    border: 'border-amber-500/15 hover:border-amber-500/40',
    badgeBg: 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400',
    tag: 'Growth & SEO',
    title: 'Optimización SEO & Rendimiento',
    desc: 'Potenciamos tu posicionamiento orgánico en motores de búsqueda para captar clientes constantemente.',
    features: ['SEO Técnico & Schema', 'Core Web Vitals 90+', 'Estrategia de Conversión', 'Auditorías Semanales'],
  },
];

// Proyectos destacados sincronizados con /projects
const featuredProjects = [
  {
    id: 6,
    title: 'Moto Fix — ERP & Gestión de Taller',
    category: 'ERP & Gestión',
    img: 'https://i.postimg.cc/9XBF2dJs/image.png',
    desc: 'Software ERP y PWA para talleres de motos con control de inventario, facturación y ventas POS, capacidad de administrar órdenes de trabajo, mecánicos, estadísticas y reportes de clientes en tiempo real.',
    metric: 'ERP Operativo & Facturación POS',
    tags: ['HTML', 'CSS', 'Javascript', 'Firebase DB', 'PWA ServiceWorker'],
    demoLink: 'https://potter-motos.netlify.app/',
  },
  {
    id: 1,
    title: 'PSG Shop — E-Commerce',
    category: 'Full Stack',
    img: 'https://i.postimg.cc/vZ4cxmQ6/image.png',
    desc: 'Plataforma completa de comercio electrónico de moños y accesorios con carrito de compras reactivo, gestión de usuarios, pasarela de pagos integrada con PayPal y panel de administración.',
    metric: 'Pasarela PayPal & Stripe',
    tags: ['React JS', 'Firebase', 'Tailwind CSS', 'PayPal API', 'Stripe'],
    demoLink: 'https://psg-sena.vercel.app/',
  },
  {
    id: 3,
    title: 'Zenly Admin',
    category: 'PWA & Mobile',
    img: 'https://i.postimg.cc/KYvF3q7W/image.png',
    desc: 'PWA para administrar gastos personales, crear fondos, gastos & ingresos, meta de ahorro, deudas, inversiones, presupuestos, estadisticas y reportes.',
    metric: 'Control Financiero & Presupuestos',
    tags: ['HTML', 'CSS', 'Javascript', 'Firebase JS', 'PWA ServiceWorker'],
    demoLink: 'https://zenlyadmin.netlify.app/',
  },
];

// Pasos de trabajo sincronizados con /services
const processSteps = [
  { step: '01', title: 'Descubrimiento & Estrategia', desc: 'Analizamos a fondo tu modelo de negocio, usuarios objetivo y requerimientos técnicos para trazar la ruta óptima.', color: 'from-violet-600 to-purple-600', icon: Search },
  { step: '02', title: 'Diseño UI/UX & Prototipado', desc: 'Diseñamos wireframes interactivos y componentes en Figma. Validamos flujos contigo antes de comenzar a codificar.', color: 'from-cyan-500 to-blue-600', icon: Pencil },
  { step: '03', title: 'Desarrollo Ágil & Sprint', desc: 'Construcción con código modular, arquitecturas escalables, pruebas automatizadas y demos quincenales funcionales.', color: 'from-emerald-500 to-teal-500', icon: Code2 },
  { step: '04', title: 'Despliegue & Monitoreo 24/7', desc: 'Lanzamiento a producción con pipelines CI/CD, optimización de velocidad, seguridad estricta y soporte continuo.', color: 'from-amber-500 to-orange-500', icon: Zap },
];

// Testimonios sincronizados con /skills
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

// Planes por proyecto sincronizados con /skills
const featuredPlans = [
  {
    name: 'Landing Page',
    price: '$199',
    period: 'USD / pago único',
    desc: 'Diseñada para validar ideas, captar clientes y maximizar conversiones de un producto o servicio.',
    features: ['Diseño UI/UX 100% Responsive', 'Estructura orientada a Conversión', 'Formulario a Email + Botón WhatsApp', 'Dominio, Hosting Cloud & SSL', 'Entrega ágil en 3 a 7 días hábiles'],
    cta: 'Cotizar Landing Page',
    popular: false,
    gradient: 'from-slate-600 to-gray-700',
  },
  {
    name: 'Web Corporativa',
    price: '$449',
    period: 'USD / pago único',
    desc: 'Para empresas y profesionales que buscan autoridad digital, catálogo y captación constante.',
    features: ['6 a 8 Secciones Personalizadas', 'Panel de Control Autoadministrable', 'Catálogo de Servicios & Portafolio', 'SEO Técnico & Posicionamiento en Google', '30 Días de Soporte Técnico Gratuito'],
    cta: 'Solicitar Web Corporativa',
    popular: true,
    gradient: 'from-violet-600 to-cyan-500',
  },
  {
    name: 'Software a Medida & ERP',
    price: '$899',
    period: 'USD / desde',
    desc: 'Soluciones complejas como ERPs de taller, sistemas de gestión PWA, e-commerce o paneles con usuarios.',
    features: ['Arquitectura Full Stack (React/Node/Firebase)', 'Usuarios, Roles y Permisos Seguros', 'Pasarela de Pagos (Stripe / PayPal)', 'Inventario, Facturación POS o Reportes', 'Código 100% Tuyo + Despliegue Cloud'],
    cta: 'Cotizar Software a Medida',
    popular: false,
    gradient: 'from-amber-500 to-orange-600',
  },
];

// Preguntas frecuentes sincronizadas con /skills
const homeFaqs = [
  {
    q: '¿Cuánto tiempo toma desarrollar un proyecto con ArkTech?',
    a: 'Normalmente una landing page o sitio corporativo toma de 1 a 2 semanas, mientras que plataformas SaaS y aplicaciones móviles complejas se completan entre 4 y 8 semanas con entregas funcionales quincenales.',
  },
  {
    q: '¿Cómo es el proceso de consultoría inicial gratuita?',
    a: 'Nos reunimos en una llamada de 30 minutos sin costo para analizar tus necesidades, recomendar la mejor arquitectura técnica y entregarte un presupuesto detallado y transparente en menos de 24 horas.',
  },
  {
    q: '¿Puedo actualizar el contenido de mi web o app yo mismo?',
    a: 'Sí, totalmente. Construimos nuestras plataformas con paneles de administración intuitivos (headless CMS o dashboards a medida) para que puedas actualizar textos, productos e imágenes sin tocar código.',
  },
  {
    q: '¿Ofrecen soporte continuo y mantenimiento tras el lanzamiento?',
    a: '¡Por supuesto! Incluimos soporte post-lanzamiento, monitoreo de disponibilidad 24/7, parches de seguridad y planes de evolución continua para que tu software crezca a la par de tu empresa.',
  },
  {
    q: '¿Trabajan con empresas fuera de México y España?',
    a: 'Sí. Somos una agencia de alcance internacional con clientes en más de 15 países (EE.UU., Latinoamérica y Europa). Coordinamos en diferentes husos horarios y operamos tanto en español como en inglés.',
  },
];

// Equipo central de 7 especialistas sincronizado con /about
const coreTeamPreview = [
  {
    role: 'Arquitectura & Backend',
    desc: 'Bases de datos, APIs seguras y lógica empresarial',
    tag: '2 Especialistas',
    icon: Database,
    color: 'from-violet-600 to-purple-600',
  },
  {
    role: 'Frontend & UI/UX',
    desc: 'Interfaces reactivas de alta conversión y prototipado',
    tag: '2 Especialistas',
    icon: Code2,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    role: 'Móvil, PWA & Cloud',
    desc: 'Apps para iOS/Android y despliegues en la nube',
    tag: '2 Especialistas',
    icon: Smartphone,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    role: 'QA & Soporte Continuo',
    desc: 'Auditorías de calidad y monitoreo 24/7 post-entrega',
    tag: '1 Especialista',
    icon: ShieldCheck,
    color: 'from-amber-500 to-orange-500',
  },
];

const Home = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % agencyTaglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative overflow-hidden pt-20">
      <SEO
        title="ArkTech Labs — Agencia de Desarrollo de Software, Apps y Cloud | México & España"
        description="ArkTech Labs es la agencia líder de desarrollo de software empresarial, aplicaciones móviles, diseño UI/UX y soluciones de inteligencia artificial en México y España. Más de 150 proyectos entregados exitosamente."
        keywords="arktech labs, agencia de software mexico, desarrollo web profesional, desarrollo aplicaciones moviles flutter react native, soluciones cloud aws, automatizacion con ia, diseño ui ux, empresa desarrollo software"
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
              {/* Agency badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-violet-500/30 bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-semibold shadow-sm"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Disponible para nuevos proyectos</span>
                </motion.div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold">
                  <MapPin size={12} />
                  <span>Ciudad de México · Madrid</span>
                </div>
              </div>

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
                    <ChevronRight size={22} className="text-cyan-500 flex-shrink-0" />
                    <span>{agencyTaglines[taglineIndex]}</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Somos una agencia de software de élite fundada en <strong>2020</strong> con más de <strong>150 proyectos entregados</strong>. Diseñamos plataformas web, aplicaciones móviles para iOS/Android y automatizaciones con IA que impulsan el crecimiento y facturación de empresas líderes.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Link
                  to="/contact"
                  className="btn-neon relative group overflow-hidden inline-flex items-center justify-center px-8 py-4 rounded-2xl text-white font-bold text-base shadow-xl shadow-violet-500/25"
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
                  Ver Portafolio Destacado
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
                  <span>80+ Clientes en 15+ Países</span>
                </div>
                <div className="h-4 w-px bg-violet-200 dark:bg-violet-900 hidden sm:block" />
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                  <Globe className="text-violet-500" size={16} />
                  <span>Respuesta en &lt;24 Horas</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column – Interactive Agency Card */}
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
                      ArkTech · Centro de Ingeniería
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
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Proyectos activos en desarrollo</p>
                      <p className="text-xs font-bold text-violet-600 dark:text-violet-400">↑ +18% crecimiento</p>
                    </div>
                    <div className="h-16 bg-violet-500/8 dark:bg-violet-500/5 rounded-xl flex items-end gap-1.5 p-2">
                      {[35, 60, 45, 80, 55, 90, 70, 95, 65, 85, 72, 88].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-violet-600 to-cyan-400 rounded-sm opacity-85 transition-all duration-300 hover:opacity-100"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-violet-500/8 border border-violet-500/15">
                      <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">150+</div>
                      <div className="text-[11px] text-gray-500 dark:text-gray-400 font-semibold">Proyectos Entregados</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-cyan-500/8 border border-cyan-500/15">
                      <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">99%</div>
                      <div className="text-[11px] text-gray-500 dark:text-gray-400 font-semibold">Tasa de Éxito</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-500/8 border border-emerald-500/15">
                      <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">2020</div>
                      <div className="text-[11px] text-gray-500 dark:text-gray-400 font-semibold">Año de Creación</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-amber-500/8 border border-amber-500/15">
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">&lt;24h</div>
                      <div className="text-[11px] text-gray-500 dark:text-gray-400 font-semibold">Tiempo de Respuesta</div>
                    </div>
                  </div>

                  {/* Quick terminal snippet */}
                  <div className="p-3 rounded-xl bg-gray-900 text-gray-300 font-mono text-[11px] space-y-1 border border-violet-500/20">
                    <div className="flex items-center gap-2 text-gray-500 text-[10px]">
                      <Terminal size={12} className="text-violet-400" />
                      <span>arktech-pipeline --status=production</span>
                    </div>
                    <div className="text-emerald-400">✓ React 19 + Next.js + Cloud AWS: OK</div>
                    <div className="text-cyan-400">✓ SLA 99.9% · Monitoreo 24/7 activo</div>
                  </div>

                  {/* Footer */}
                  <div className="pt-2 border-t border-violet-100/80 dark:border-violet-500/10 flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1.5 text-emerald-500 font-semibold">
                      <CheckCircle2 size={14} /> Equipo de 25+ Ingenieros
                    </span>
                    <Link to="/about" className="font-mono text-violet-600 dark:text-violet-400 hover:underline">
                      Conoce al equipo →
                    </Link>
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
                  <div className="text-xs font-bold text-gray-900 dark:text-white">ArkTech Labs</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400">México · España · EE.UU.</div>
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
                  <div className="text-xs font-bold text-gray-900 dark:text-white">Garantía Total</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400">Calidad & Código Limpio</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TECH MARQUEE ─────────────────────────────────── */}
      <section className="py-10 bg-white/70 dark:bg-[#0d0f1a]/80 backdrop-blur-md border-y border-violet-100/80 dark:border-violet-500/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-5 text-center">
          <p className="text-xs font-mono font-bold tracking-widest text-violet-500/70 dark:text-violet-400/60 uppercase">
            // Stack Tecnológico de Vanguardia
          </p>
        </div>
        <div className="relative flex overflow-x-hidden">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`p-6 rounded-3xl glass-card border border-violet-100/80 dark:border-violet-500/12 text-center space-y-3 shadow-lg ${stat.shadow} transition-all duration-300 card-shimmer`}
              >
                <div className={`mx-auto w-14 h-14 rounded-2xl bg-gradient-to-tr ${stat.color} flex items-center justify-center text-white shadow-lg ${stat.shadow}`}>
                  <stat.icon size={26} />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">{stat.value}</div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">{stat.label}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICIOS PRINCIPALES (CONECTADO CON /services) ─ */}
      <section className="py-24 relative bg-violet-500/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-4">
              <span className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block">
                Lo que Hacemos
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
                Servicios integrales para{' '}
                <span className="text-gradient-primary">escalar tu negocio</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                Desde la concepción y arquitectura hasta el despliegue en la nube y el mantenimiento 24/7. Descubre cómo convertimos requerimientos técnicos en ventajas competitivas reales.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-violet-600 dark:text-violet-400 hover:gap-3 transition-all flex-shrink-0"
            >
              Explorar todos los servicios <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesSummary.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className={`relative p-7 rounded-3xl glass-card border transition-all duration-300 ${svc.border} space-y-5 group cursor-default shadow-lg card-shimmer ${
                  svc.featured ? 'ring-1 ring-violet-500/30 dark:ring-violet-500/25' : ''
                }`}
              >
                {svc.featured && (
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-[10px] font-bold uppercase tracking-wide shadow-md shadow-violet-500/30">
                    ⭐ Más Solicitado
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

                <ul className="space-y-2 pt-1 border-t border-violet-100/60 dark:border-violet-500/10">
                  {svc.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-xs font-bold text-violet-600 dark:text-violet-400 group-hover:translate-x-1 transition-transform"
                >
                  Conocer detalles técnicos <ChevronRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROYECTOS DESTACADOS (CONECTADO CON /projects) ── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block">
              Casos de Éxito
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
              Resultados reales que{' '}
              <span className="text-gradient-primary">hablan por nosotros</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
              Una muestra representativa de los más de 150 proyectos diseñados y construidos con éxito para empresas en México, EE.UU. y Europa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {featuredProjects.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-[#0c0e18] border border-gray-200/80 dark:border-white/[0.08] hover:border-violet-500/40 dark:hover:border-violet-500/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-violet-500/5 overflow-hidden"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-[#070913]">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-white/90 dark:bg-black/75 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200 border border-gray-200/60 dark:border-white/10 shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 truncate">
                        {project.metric}
                      </span>
                    </div>

                    <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors leading-snug line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/[0.04] text-gray-700 dark:text-gray-300 text-[10px] font-medium border border-gray-200/60 dark:border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md text-gray-400 text-[10px] font-mono">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card actions */}
                <div className="px-5 pb-5 pt-2">
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-white/[0.06]">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-violet-600 dark:text-violet-400 hover:text-cyan-500 transition-colors"
                    >
                      <span>Explorar Demo</span>
                      <ArrowUpRight size={14} />
                    </a>
                    <Link
                      to="/projects"
                      className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <span>Ver Ficha</span>
                      <ChevronRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass-card font-bold text-base text-gray-800 dark:text-gray-100 border border-violet-500/30 hover:border-violet-500/60 transition-all hover:scale-105 shadow-md"
            >
              Explorar portafolio completo (Landings, Apps, SaaS y E-Commerce) <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── METODOLOGÍA / PROCESO (CONECTADO CON /services) ─ */}
      <section className="py-24 relative bg-violet-500/[0.02] border-y border-violet-100/80 dark:border-violet-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block">
              Metodología Comprobada
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
              ¿Cómo hacemos realidad{' '}
              <span className="text-gradient-primary">tu proyecto?</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
              Un flujo de trabajo transparente, estructurado en sprints quincenales, sin sorpresas ni costes ocultos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
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
                <div className="absolute top-5 right-5 text-[11px] font-mono font-bold text-violet-500/70 dark:text-violet-400/60">{step.step}</div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="p-6 rounded-2xl glass-card border border-violet-500/20 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="space-y-1">
              <h4 className="font-bold text-gray-900 dark:text-white">¿Tienes requerimientos técnicos específicos?</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">Adaptamos nuestro equipo al stack y metodología de tu organización.</p>
            </div>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-violet-600 text-white font-bold text-xs hover:bg-violet-700 transition-colors flex-shrink-0"
            >
              Agendar descubrimiento →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── QUIÉNES SOMOS / EQUIPO (CONECTADO CON /about) ─── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block">
                Sobre ArkTech Labs
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                No somos simples proveedores, somos tu{' '}
                <span className="text-gradient-primary">socio tecnológico</span>
              </h2>

              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                Fundada en 2020 con el deseo de hacer algo diferente, ArkTech Labs une ingeniería rigurosa, diseño UI/UX de alto impacto y un acompañamiento cercano como socio tecnológico estratégico.
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                Contamos con un equipo multidisciplinar que aporta talento en desarrollo web, móvil, testing y soporte continuo, habiendo entregado con éxito soluciones para clientes en más de 15 países.
              </p>

              <div className="grid grid-cols-3 gap-4 py-4 border-y border-violet-100/80 dark:border-violet-500/12">
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-gradient-primary">Desde 2020</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold mt-0.5">Creando Software</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-gradient-primary">15+ Países</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold mt-0.5">Alcance Global</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-gradient-primary">+150</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold mt-0.5">Proyectos Entregados</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-sm shadow-md hover:scale-105 transition-all"
                >
                  Conocer nuestra historia y equipo <ArrowRight size={16} />
                </Link>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                  <ShieldCheck className="text-emerald-500" size={16} />
                  <span>Código auditado y documentado</span>
                </div>
              </div>
            </div>

            {/* Team preview cards (7 Especialistas a Cargo) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-mono font-bold text-violet-500 dark:text-violet-400 uppercase tracking-widest">
                  // Equipo Central a Cargo
                </p>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                  ● 7 Especialistas
                </span>
              </div>

              <div className="space-y-3">
                {coreTeamPreview.map((area, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 6 }}
                    className="p-3.5 rounded-2xl glass-card border border-violet-100/80 dark:border-violet-500/15 flex items-center justify-between gap-4 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${area.color} flex items-center justify-center text-white shadow-md flex-shrink-0`}>
                        <area.icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-gray-900 dark:text-white leading-tight">{area.role}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">{area.desc}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 flex-shrink-0">
                      {area.tag}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-violet-500/5 border border-violet-500/15 flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-800 dark:text-gray-200">0 Intermediarios</span>
                <span>•</span>
                <span>Trato directo con los ingenieros</span>
                <span>•</span>
                <span className="font-semibold text-violet-600 dark:text-violet-400">7 a cargo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIOS (CONECTADO CON /skills) ───────────── */}
      <section className="py-24 relative bg-violet-500/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block">
              Opiniones de Clientes
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
              Respaldados por líderes de{' '}
              <span className="text-gradient-primary">la industria</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
              La satisfacción de quienes ya han confiado en ArkTech es nuestra mejor carta de presentación.
            </p>
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
                className="p-7 rounded-3xl glass-card glass-card-hover border border-violet-100/80 dark:border-violet-500/12 space-y-4 relative card-shimmer flex flex-col justify-between"
              >
                <Quote size={28} className="text-violet-500/20 dark:text-violet-400/15 absolute top-5 right-5" />

                <div className="space-y-3">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, s) => (
                      <Star key={s} size={15} className="fill-amber-400 text-amber-400" />
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
      </section>

      {/* ─── PLANES Y PRECIOS TRANSPARENTES (CONECTADO CON /skills) ─ */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block">
              Precios por Proyecto
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
              Inversión clara,{' '}
              <span className="text-gradient-primary">sin rentas mensuales</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
              Precios por desarrollo de proyecto terminado. El código y la plataforma son 100% de tu propiedad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {featuredPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: plan.popular ? -4 : -6 }}
                className={`relative rounded-3xl border overflow-hidden ${
                  plan.popular
                    ? 'border-violet-500/40 shadow-2xl shadow-violet-500/25 scale-[1.03] z-10'
                    : 'glass-card border-violet-100/80 dark:border-violet-500/12'
                } card-shimmer`}
              >
                {plan.popular && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-violet-600 to-cyan-500" />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-xs font-bold shadow-md shadow-violet-500/30 flex items-center gap-1">
                      <Sparkles size={12} /> Más Solicitado
                    </div>
                  </>
                )}

                <div className="p-7 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{plan.desc}</p>
                  </div>

                  <div className="flex items-baseline gap-1 py-1 border-y border-violet-100/60 dark:border-violet-500/10">
                    <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs font-semibold">{plan.period}</span>
                  </div>

                  <ul className="space-y-2.5">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        <Check size={16} className="text-emerald-500 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/30 hover:scale-[1.02]'
                        : 'glass-card border border-violet-100/80 dark:border-violet-500/12 text-gray-800 dark:text-gray-200 hover:border-violet-500/40'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span>Código 100% de tu propiedad (sin rentas)</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-violet-500" />
              <span>Pago por hitos: 50% inicio / 50% entrega final</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-cyan-500" />
              <span>30 días de garantía y soporte técnico</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ INTERACTIVO (CONECTADO CON /skills) ───────── */}
      <section className="py-24 relative bg-violet-500/[0.02]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block">
              Resolvemos tus Dudas
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
              Preguntas{' '}
              <span className="text-gradient-primary">Frecuentes</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base">
              Todo lo que necesitas saber antes de iniciar tu proyecto de software con ArkTech Labs.
            </p>
          </div>

          <div className="space-y-3">
            {homeFaqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
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

          <div className="text-center pt-2">
            <Link
              to="/skills"
              className="text-xs font-bold text-violet-600 dark:text-violet-400 hover:underline"
            >
              ¿Tienes otra duda? Ver preguntas y planes completos en Precios →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL & CONTACTO RÁPIDO (CONECTADO CON /contact) ─── */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden text-center p-10 sm:p-20 shadow-2xl shadow-violet-900/30"
          >
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-700 via-purple-700 to-cyan-700" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-7 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold tracking-wider uppercase">
                <Sparkles size={14} /> Consultoría Inicial 100% Gratuita
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                ¿Listo para transformar<br />el futuro de tu empresa?
              </h2>

              <p className="text-violet-100 text-base sm:text-xl leading-relaxed">
                Cuéntanos tu idea. Nuestro equipo de ingenieros analizará la viabilidad y te presentará una propuesta técnica y económica en menos de 24 horas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-violet-700 font-bold shadow-xl shadow-black/20 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 group"
                >
                  Solicitar Consultoría Gratuita
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://wa.me/15550000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-emerald-500/90 text-white font-bold backdrop-blur-sm border border-emerald-400/40 hover:bg-emerald-500 transition-all duration-300 shadow-lg"
                >
                  <MessageSquare size={18} />
                  Chatear por WhatsApp
                </a>
              </div>

              {/* Direct contact brief */}
              <div className="pt-6 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 text-xs text-violet-200">
                <div className="flex items-center gap-2">
                  <Mail size={14} />
                  <span>hola@arktech.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  <span>Respuesta en menos de 24 horas</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} />
                  <span>Acuerdo de Confidencialidad (NDA) disponible</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
