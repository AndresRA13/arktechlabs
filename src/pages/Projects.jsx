import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, X, ExternalLink, Tag, TrendingUp, Layers,
  Grid3X3, Globe, Smartphone, ShoppingCart, Monitor, LayoutDashboard
} from 'lucide-react';
import SEO from '../components/SEO';

const allProjects = [
  // Landings
  {
    id: 1,
    title: 'Apex Finance Landing',
    category: 'Landings',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    desc: 'Landing page de alto impacto para una fintech emergente. Diseño orientado a la conversión con animaciones premium y estructura narrativa.',
    metric: '+68% Conversiones',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    link: '#',
  },
  {
    id: 2,
    title: 'MedCare Pro Landing',
    category: 'Landings',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80',
    desc: 'Página de aterrizaje para clínica digital con integración de citas online, testimonios animados y sección de especialistas.',
    metric: '+55% Leads Generados',
    tags: ['Next.js', 'TypeScript', 'Framer Motion'],
    link: '#',
  },
  // Websites
  {
    id: 3,
    title: 'Arco Studio Corporativo',
    category: 'Websites',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    desc: 'Sitio web corporativo completo para estudio de arquitectura. Galería interactiva, blog CMS y formulario multipasos integrado.',
    metric: '+40% Tiempo en Sitio',
    tags: ['Next.js', 'Sanity CMS', 'Tailwind', 'GSAP'],
    link: '#',
  },
  {
    id: 4,
    title: 'EduTech Academy',
    category: 'Websites',
    img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
    desc: 'Plataforma educativa con cursos en video, sistema de pagos y panel de estudiantes. Diseño limpio orientado al aprendizaje.',
    metric: '1,200+ Alumnos',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
  },
  // Apps Móviles
  {
    id: 5,
    title: 'FitPulse App',
    category: 'Apps Móviles',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    desc: 'App de fitness y bienestar con seguimiento de entrenamientos, nutrición y comunidad social para iOS y Android.',
    metric: '50K+ Descargas',
    tags: ['React Native', 'Firebase', 'Redux', 'Expo'],
    link: '#',
  },
  {
    id: 6,
    title: 'DeliveryNow',
    category: 'Apps Móviles',
    img: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80',
    desc: 'App de delivery con rastreo en tiempo real, sistema de pagos integrado y panel para restaurantes. Disponible en iOS y Android.',
    metric: '10K Pedidos/día',
    tags: ['Flutter', 'Google Maps API', 'Node.js', 'PostgreSQL'],
    link: '#',
  },
  // Plataformas Web
  {
    id: 7,
    title: 'CloudOps Dashboard',
    category: 'Plataformas Web',
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
    desc: 'Panel de administración empresarial con gestión de equipos, proyectos, analíticas avanzadas y reportes en tiempo real.',
    metric: '300+ Empresas',
    tags: ['React', 'TypeScript', 'D3.js', 'Express', 'PostgreSQL'],
    link: '#',
  },
  {
    id: 8,
    title: 'LegalSuite Platform',
    category: 'Plataformas Web',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    desc: 'Plataforma SaaS para despachos jurídicos con gestión de casos, firma digital, documentos y facturación automática.',
    metric: 'Ahorra 15h/semana',
    tags: ['Next.js', 'Prisma', 'AWS S3', 'Stripe'],
    link: '#',
  },
  // E-Commerce
  {
    id: 9,
    title: 'Luxe Fashion Store',
    category: 'E-Commerce',
    img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
    desc: 'Tienda online de moda de lujo con catálogo dinámico, pagos seguros, wishlist y panel de administración completo.',
    metric: '$2M+ en Ventas',
    tags: ['Next.js', 'Shopify API', 'Stripe', 'Tailwind'],
    link: '#',
  },
  {
    id: 10,
    title: 'TechGear Marketplace',
    category: 'E-Commerce',
    img: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=800&q=80',
    desc: 'Marketplace multi-vendedor de tecnología con sistema de comisiones, reviews verificadas y envíos automatizados.',
    metric: '500+ Vendedores',
    tags: ['React', 'Node.js', 'MongoDB', 'Redis', 'PayPal'],
    link: '#',
  },
];

const categories = [
  { label: 'Todos',           icon: Grid3X3 },
  { label: 'Landings',        icon: LayoutDashboard },
  { label: 'Websites',        icon: Globe },
  { label: 'Apps Móviles',    icon: Smartphone },
  { label: 'Plataformas Web', icon: Monitor },
  { label: 'E-Commerce',      icon: ShoppingCart },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState(allProjects);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const q = search.toLowerCase();
    setFiltered(
      allProjects.filter((p) => {
        const matchCat = activeCategory === 'Todos' || p.category === activeCategory;
        const matchSearch =
          !q ||
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q));
        return matchCat && matchSearch;
      })
    );
  }, [activeCategory, search]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (modal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [modal]);

  return (
    <div className="relative pt-28 pb-20 overflow-hidden min-h-screen">
      <SEO
        title="Portafolio de Proyectos | ArkTech Labs — Software a Medida"
        description="Explora los proyectos de ArkTech Labs: landings de alto impacto, plataformas SaaS, apps móviles, e-commerce y dashboards empresariales. +150 soluciones digitales entregadas."
        keywords="portafolio software, proyectos desarrollo web, casos de exito tecnologia, apps moviles exitosas, plataformas saas, ecommerce a medida"
        path="/projects"
      />

      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/8 dark:bg-violet-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-cyan-500/8 dark:bg-cyan-500/4 rounded-full blur-3xl -z-10" />
      <div className="absolute inset-0 bg-grid-pattern -z-10 opacity-40 dark:opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* ─── HEADER ─────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block"
          >
            Portafolio Profesional
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white"
          >
            Nuestros{' '}
            <span className="text-gradient-primary">Proyectos Destacados</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-base sm:text-lg"
          >
            Explora nuestra colección de soluciones digitales de alto impacto, diseñadas con los estándares tecnológicos más avanzados.
          </motion.p>
        </div>

        {/* ─── TOOLBAR ────────────────────────────────────── */}
        <div className="space-y-4">
          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nombre, tecnología (React, Flutter, Node...)"
              className="w-full pl-11 pr-4 py-3 rounded-2xl glass-card border border-violet-200/80 dark:border-violet-500/15 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                <X size={16} />
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => setActiveCategory(label)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeCategory === label
                    ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-md shadow-violet-500/30'
                    : 'glass-card text-gray-600 dark:text-gray-300 hover:border-violet-500/40 border border-violet-200/60 dark:border-violet-500/12'
                }`}
              >
                <Icon size={15} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ─── GRID ───────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 text-gray-400 dark:text-gray-500"
            >
              <Search size={48} className="mx-auto mb-4 opacity-40" />
              <p className="font-semibold">No se encontraron proyectos.</p>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setModal(project)}
                  className="group relative rounded-3xl glass-card border border-violet-200/80 dark:border-violet-500/12 overflow-hidden cursor-pointer hover:border-violet-500/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-violet-500/15"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-violet-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wide">
                      {project.category}
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white font-semibold text-sm border border-white/30">
                        Ver Detalles
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">{project.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">{project.desc}</p>

                    <div className="flex items-center gap-2">
                      <TrendingUp size={14} className="text-emerald-500 flex-shrink-0" />
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{project.metric}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 text-[10px] font-semibold border border-violet-500/20">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 rounded-lg bg-gray-500/10 text-gray-500 text-[10px] font-semibold">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─── PROJECT MODAL ──────────────────────────────── */}
      <AnimatePresence>
        {modal && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModal(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md z-[200]"
            />

            {/* Modal card */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-[201] flex items-center justify-center p-4"
            >
              <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#0d0f1a] shadow-2xl shadow-violet-500/20 border border-violet-200/80 dark:border-violet-500/20">
                {/* Close */}
                <button
                  onClick={() => setModal(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-violet-100 dark:hover:bg-violet-900/50 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Image */}
                <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-3xl">
                  <img src={modal.img} alt={modal.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wide shadow-lg shadow-violet-500/30">
                    {modal.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">{modal.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{modal.desc}</p>

                  {/* Metric */}
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                    <TrendingUp size={20} className="text-emerald-500 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide">Impacto / Métrica Destacada</p>
                      <p className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">{modal.metric}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                      <Layers size={14} /> Tecnologías Utilizadas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {modal.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm font-semibold border border-violet-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={modal.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-neon inline-flex items-center gap-2 w-full justify-center px-8 py-4 rounded-2xl text-white font-bold"
                  >
                    Explorar Proyecto en Vivo <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
