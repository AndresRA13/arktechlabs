import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, X, ExternalLink, TrendingUp, Layers,
  Grid3X3, Globe, Smartphone, Monitor, LayoutDashboard,
  Github, Sparkles, ChevronLeft, ChevronRight, ArrowUpRight,
  Eye, CheckCircle2, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export const projectsList = [
  {
    id: 1,
    title: 'PSG Shop — E-Commerce',
    category: 'Full Stack',
    image: 'https://i.postimg.cc/vZ4cxmQ6/image.png',
    description: 'Plataforma completa de comercio electrónico para accesorios con carrito reactivo, autenticación segura, pasarela integrada con PayPal y panel administrativo.',
    technologies: ['React JS', 'Firebase', 'Tailwind CSS', 'PayPal API', 'Stripe'],
    demoLink: 'https://psg-sena.vercel.app/',
    githubLink: '#',
    featured: true,
    metric: 'Pasarela PayPal & Stripe',
    client: 'Sector Retail & E-Commerce',
    year: '2024',
  },
  {
    id: 6,
    title: 'Moto Fix — ERP & Gestión de Taller',
    category: 'ERP & Gestión',
    image: 'https://i.postimg.cc/9XBF2dJs/image.png',
    description: 'Software ERP y PWA para talleres mecánicos con inventario en tiempo real, facturación POS, control de órdenes de trabajo, gestión de mecánicos y analítica.',
    technologies: ['React JS', 'Tailwind CSS', 'Javascript', 'Firebase DB', 'PWA ServiceWorker'],
    demoLink: 'https://potter-motos.netlify.app/',
    githubLink: '#',
    featured: true,
    metric: 'ERP Operativo & Facturación POS',
    client: 'Talleres Moto Fix',
    year: '2024',
  },
  {
    id: 2,
    title: 'CineTV — Streaming Hub',
    category: 'Entertainment',
    image: 'https://i.postimg.cc/59GtVBFG/image.png',
    description: 'Plataforma multimedia para exploración de películas y series con trailers en vivo, listados por tendencia global y buscador inteligente en tiempo real.',
    technologies: ['HTML', 'CSS', 'Javascript', 'TMDB API', 'PWA ServiceWorker'],
    demoLink: 'https://cinemovietv.netlify.app/',
    githubLink: '#',
    featured: false,
    metric: 'Streaming & TMDB en Tiempo Real',
    client: 'Entretenimiento Digital',
    year: '2023',
  },
  {
    id: 3,
    title: 'Zenly Admin — Finanzas Personales',
    category: 'PWA & Mobile',
    image: 'https://i.postimg.cc/KYvF3q7W/image.png',
    description: 'PWA para gestión de finanzas personales, creación de fondos, registro de ingresos/gastos, metas de ahorro, control de deudas y reportes estadísticos.',
    technologies: ['HTML', 'CSS', 'Javascript', 'Firebase JS', 'PWA ServiceWorker'],
    demoLink: 'https://zenlyadmin.netlify.app/',
    githubLink: '#',
    featured: false,
    metric: 'Control Financiero & Presupuestos',
    client: 'Fintech & Productividad',
    year: '2024',
  },
  {
    id: 4,
    title: 'DrawyScanner — QR Tool & PWA',
    category: 'PWA & Mobile',
    image: 'https://i.postimg.cc/1XT1ksL9/image.png',
    description: 'Aplicación web progresiva ultra rápida orientada al escaneo por cámara de códigos QR y generación personalizada de códigos con soporte sin conexión.',
    technologies: ['HTML', 'CSS', 'JavaScript ES6+', 'PWA ServiceWorker'],
    demoLink: 'https://drawyscanner.netlify.app/',
    githubLink: '#',
    featured: false,
    metric: 'Escáner QR & Soporte Offline',
    client: 'Herramienta PWA',
    year: '2023',
  },
  {
    id: 5,
    title: 'Todli — Task & Goal Manager',
    category: 'Landing',
    image: 'https://i.postimg.cc/VkBfpwd2/image.png',
    description: 'Gestor dinámico de tareas y metas personales con tableros interactivos kanban, recordatorios y estimación de tiempo para maximizar el enfoque.',
    technologies: ['HTML', 'CSS', 'Javascript', 'PWA ServiceWorker'],
    demoLink: 'https://todli.netlify.app/',
    githubLink: '#',
    featured: false,
    metric: 'Gestión Dinámica de Metas',
    client: 'Productividad Personal',
    year: '2023',
  },
  {
    id: 7,
    title: 'Zypno Notes — Cloud Workspace',
    category: 'PWA & Mobile',
    image: 'https://i.postimg.cc/1t104W76/image.png',
    description: 'Aplicación minimalista y veloz para toma de notas con formato rich text, categorización inteligente por etiquetas y sincronización continua en la nube.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'LocalStorage', 'PWA ServiceWorker'],
    demoLink: 'https://zypno.netlify.app/',
    githubLink: '#',
    featured: false,
    metric: 'Sincronización Cloud Instantánea',
    client: 'Productividad en la Nube',
    year: '2024',
  },
  {
    id: 8,
    title: 'Oryx Player — Audio Engine Pro',
    category: 'Mobile APK',
    image: 'https://i.postimg.cc/KvtNL3gc/image.png',
    description: 'Aplicación Android nativa para reproducción avanzada de audio con modificación de BPM y tonalidad en tiempo real, ecualizador paramétrico y drum machine.',
    technologies: ['Kotlin', 'Java', 'Firebase db', 'Android SDK'],
    demoLink: 'https://oryxplayer.netlify.app/',
    githubLink: '#',
    featured: false,
    metric: 'Reproductor BPM & Ecualizador Pro',
    client: 'Audio & Music Production',
    year: '2023',
  },
  {
    id: 9,
    title: 'Saron Perfums — Retail POS & Stock',
    category: 'ERP & Gestión',
    image: 'https://i.postimg.cc/mgMzrKhD/image.png',
    description: 'Software comercial para perfumerías con control de catálogo de fragancias, inventario por variantes, facturación de mostrador y reportes de rentabilidad.',
    technologies: ['HTML', 'CSS', 'Javascript', 'Firebase Db'],
    demoLink: 'https://saron-perfums.netlify.app/',
    githubLink: '#',
    featured: false,
    metric: 'Ventas, Inventario & Facturas',
    client: 'Saron Perfums',
    year: '2024',
  },
  {
    id: 10,
    title: 'Portafolio AR — Personal Brand',
    category: 'Landing',
    image: 'https://i.postimg.cc/RVfYS7tJ/image.png',
    description: 'Sitio web de marca personal con diseño moderno, animaciones fluidas, showcase de proyectos y formularios de contacto directo.',
    technologies: ['React', 'Javascript', 'Tailwind CSS'],
    demoLink: 'https://andresra13.github.io/Portafolio-AR/',
    githubLink: '#',
    featured: false,
    metric: 'Identidad Digital & Portafolio',
    client: 'Marca Personal',
    year: '2023',
  },
  {
    id: 11,
    title: 'ArkTech Labs — Agency Platform',
    category: 'Landing',
    image: 'https://i.postimg.cc/ry5GzQfZ/image.png',
    description: 'Plataforma oficial de la agencia con arquitectura modular, cotizador de planes por proyecto, catálogo interactivo y diseño de alto impacto visual.',
    technologies: ['HTML', 'CSS', 'Javascript', 'Tailwind CSS'],
    demoLink: 'https://arktechlabs.netlify.app/',
    githubLink: '#',
    featured: false,
    metric: 'Plataforma Web de Agencia',
    client: 'ArkTech Labs',
    year: '2024',
  },
  {
    id: 12,
    title: 'ARMusic Academy — EdTech Platform',
    category: 'Landing',
    image: 'https://i.postimg.cc/tTxcsWfj/image.png',
    description: 'Plataforma institucional para academia de música con agenda de cursos, perfiles de instructores, testimonios y sistema de preinscripciones.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    demoLink: 'https://academia-armusic.netlify.app/',
    githubLink: '#',
    featured: false,
    metric: 'Academia Musical Online',
    client: 'ARMusic Academy',
    year: '2024',
  },
];

const categories = [
  { label: 'Todos',        icon: Grid3X3 },
  { label: 'ERP & Gestión', icon: Layers },
  { label: 'Full Stack',   icon: Monitor },
  { label: 'PWA & Mobile', icon: Smartphone },
  { label: 'Landing',      icon: LayoutDashboard },
  { label: 'Entertainment', icon: Globe },
  { label: 'Mobile APK',   icon: Smartphone },
];

const PROJECTS_PER_PAGE = 6;

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState(projectsList);
  const [currentPage, setCurrentPage] = useState(1);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const q = search.toLowerCase();
    setFiltered(
      projectsList.filter((p) => {
        const matchCat = activeCategory === 'Todos' || p.category === activeCategory;
        const matchSearch =
          !q ||
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q));
        return matchCat && matchSearch;
      })
    );
    setCurrentPage(1);
  }, [activeCategory, search]);

  const totalPages = Math.ceil(filtered.length / PROJECTS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const paginatedProjects = filtered.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const target = document.getElementById('projects-grid-top');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

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
    <div className="relative pt-28 pb-24 overflow-hidden min-h-screen">
      <SEO
        title="Portafolio de Proyectos | ArkTech Labs — Soluciones Digitales Reales"
        description="Explora las aplicaciones web, PWAs, ERPs, tiendas de comercio electrónico y plataformas desarrolladas por ArkTech Labs: PSG Shop, Moto Fix, Zenly Admin y más."
        keywords="portafolio arktech labs, psg shop ecommerce, motofix erp, zenly admin finanzas, desarrollo web profesional, aplicaciones pwa, software a medida"
        path="/projects"
      />

      {/* Subtle background glow */}
      <div className="absolute top-10 right-1/4 w-[550px] h-[550px] bg-violet-600/5 dark:bg-violet-600/4 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-500/3 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern -z-10 opacity-30 dark:opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* ─── MINIMALIST HEADER ──────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 dark:bg-white/[0.04] border border-violet-500/20 dark:border-white/[0.08]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-mono font-semibold tracking-wider text-violet-600 dark:text-violet-300 uppercase">
              Portafolio de Producción · 12 Proyectos Activos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight"
          >
            Software que resuelve <br className="hidden sm:inline" />
            <span className="text-gradient-primary">problemas de negocio reales</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.16 }}
            className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Soluciones a medida, ERPs operativos, PWAs y tiendas digitales construidas con arquitecturas sólidas, interfaces limpias y despliegue continuo.
          </motion.p>
        </div>

        {/* ─── SLEEK SEGMENTED TOOLBAR ────────────────────── */}
        <div id="projects-grid-top" className="space-y-4 scroll-mt-28">
          {/* Search bar */}
          <div className="relative max-w-xl mx-auto">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por tecnología, sector o nombre (React, ERP, Firebase, PWA)..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white/70 dark:bg-[#0d0f1a]/80 backdrop-blur-md border border-gray-200/80 dark:border-white/[0.08] text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-violet-500/60 dark:focus:border-violet-400/50 shadow-sm transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors cursor-pointer"
                aria-label="Limpiar búsqueda"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Minimalist Segmented Category Filters */}
          <div className="flex flex-wrap justify-center items-center gap-1.5 p-1.5 max-w-3xl mx-auto rounded-2xl bg-gray-100/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
            {categories.map(({ label, icon: Icon }) => {
              const active = activeCategory === label;
              return (
                <button
                  key={label}
                  onClick={() => setActiveCategory(label)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm border border-gray-200/80 dark:border-white/15'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/[0.04]'
                  }`}
                >
                  <Icon size={13} className={active ? 'text-violet-600 dark:text-violet-400' : 'text-gray-400'} />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>

          {/* Results count indicator */}
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 max-w-6xl mx-auto px-1 pt-1">
            <span>
              Mostrando <strong className="text-gray-800 dark:text-gray-200">{filtered.length}</strong> {filtered.length === 1 ? 'proyecto' : 'proyectos'}
              {activeCategory !== 'Todos' && (
                <> en <span className="text-violet-600 dark:text-violet-400 font-semibold">{activeCategory}</span></>
              )}
            </span>
            <span className="font-mono text-[11px] text-gray-400">
              Página {currentPage} de {totalPages}
            </span>
          </div>
        </div>

        {/* ─── MINIMALIST PROJECTS GRID ───────────────────── */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 rounded-3xl bg-white/40 dark:bg-white/[0.02] border border-gray-200/60 dark:border-white/[0.06] text-gray-400 dark:text-gray-500 space-y-3"
            >
              <Search size={40} className="mx-auto opacity-30 text-violet-500" />
              <p className="font-medium text-gray-600 dark:text-gray-400">No encontramos proyectos que coincidan con tu búsqueda.</p>
              <button
                onClick={() => { setSearch(''); setActiveCategory('Todos'); }}
                className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline cursor-pointer"
              >
                Restablecer todos los filtros
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={`page-${currentPage}-${activeCategory}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              {paginatedProjects.map((project, i) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-[#0c0e18] border border-gray-200/80 dark:border-white/[0.08] hover:border-violet-500/40 dark:hover:border-violet-500/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-violet-500/5 overflow-hidden"
                >
                  {/* Visual Preview Container */}
                  <div>
                    <div
                      onClick={() => setModal(project)}
                      className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-[#070913] cursor-pointer"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Subtle hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/25">
                          <Eye size={13} /> Ver ficha técnica
                        </span>
                        {project.demoLink && project.demoLink !== '#' && (
                          <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-violet-600/90 text-white text-xs font-semibold shadow-md">
                            Demo en vivo <ArrowUpRight size={13} />
                          </span>
                        )}
                      </div>

                      {/* Badges Top Bar */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-md bg-white/90 dark:bg-black/75 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200 border border-gray-200/60 dark:border-white/10 shadow-sm">
                          {project.category}
                        </span>

                        {project.featured && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-violet-600/90 text-white text-[10px] font-bold shadow-md shadow-violet-600/25">
                            <Sparkles size={10} /> Destacado
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 space-y-3">
                      {/* Metric Indicator */}
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 truncate">
                          {project.metric}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        onClick={() => setModal(project)}
                        className="text-base font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors cursor-pointer leading-snug line-clamp-1"
                      >
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Pills (Minimalist) */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/[0.04] text-gray-700 dark:text-gray-300 text-[10px] font-medium border border-gray-200/60 dark:border-white/[0.06]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-0.5 rounded-md bg-transparent text-gray-400 text-[10px] font-mono">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Minimalist Action Footer */}
                  <div className="px-5 pb-5 pt-2">
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-white/[0.06]">
                      {project.demoLink && project.demoLink !== '#' ? (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 dark:text-violet-400 hover:text-cyan-500 transition-colors"
                        >
                          <span>Explorar Demo</span>
                          <ArrowUpRight size={14} />
                        </a>
                      ) : (
                        <span className="text-xs text-gray-400">Demo Privado</span>
                      )}

                      <button
                        onClick={() => setModal(project)}
                        className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
                      >
                        <span>Detalles</span>
                        <ChevronRight size={13} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── MINIMALIST PAGINATOR ───────────────────────── */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200/60 dark:border-white/[0.06]">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Mostrando del <span className="font-semibold text-gray-900 dark:text-white">{startIndex + 1}</span> al{' '}
              <span className="font-semibold text-gray-900 dark:text-white">
                {Math.min(startIndex + PROJECTS_PER_PAGE, filtered.length)}
              </span>{' '}
              de <span className="font-semibold text-gray-900 dark:text-white">{filtered.length}</span> proyectos en total
            </p>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/[0.08] text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-violet-500/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-sm"
              >
                <ChevronLeft size={14} />
                <span>Anterior</span>
              </button>

              <div className="flex items-center gap-1 px-1">
                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNum = index + 1;
                  const isActive = currentPage === pageNum;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm'
                          : 'bg-white/60 dark:bg-white/[0.02] border border-gray-200/60 dark:border-white/[0.06] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/[0.08] text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-violet-500/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-sm"
              >
                <span>Siguiente</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* ─── BOTTOM CTA BANNER (MINIMALIST) ─────────────── */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-violet-600/10 via-transparent to-cyan-500/10 border border-violet-500/20 text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase">
            ¿Tienes un proyecto en mente?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
            Construyamos tu próximo producto digital
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Desde la arquitectura técnica y el diseño de interfaces hasta el despliegue en servidores cloud y mantenimiento continuo.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-lg"
            >
              Ver Planes por Proyecto <ArrowRight size={15} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200/80 dark:border-white/10 text-gray-800 dark:text-gray-200 font-semibold text-xs sm:text-sm hover:border-violet-500/40 transition-colors"
            >
              Cotizar Proyecto Personalizado
            </Link>
          </div>
        </div>
      </div>

      {/* ─── MACOS-STYLE MINIMALIST MODAL ────────────────── */}
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

            {/* Modal Card */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              className="fixed inset-0 z-[201] flex items-center justify-center p-3 sm:p-6 pointer-events-none"
            >
              <div className="relative w-full max-w-3xl max-h-[92vh] overflow-hidden rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0c0e18] shadow-2xl shadow-black/40 border border-gray-200 dark:border-white/10 pointer-events-auto flex flex-col">
                {/* macOS Window Titlebar */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-gray-100/90 dark:bg-white/[0.03] border-b border-gray-200/80 dark:border-white/[0.06] select-none">
                  {/* Traffic lights */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setModal(null)}
                      className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"
                      title="Cerrar"
                    />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>

                  {/* Project URL / Address badge */}
                  <div className="px-3 py-1 rounded-md bg-white dark:bg-black/40 border border-gray-200/60 dark:border-white/[0.08] text-[11px] font-mono text-gray-500 dark:text-gray-400 max-w-[200px] sm:max-w-xs truncate">
                    arktech.solutions/{modal.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                  </div>

                  {/* Close button icon */}
                  <button
                    onClick={() => setModal(null)}
                    className="p-1 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Scrollable Body */}
                <div className="overflow-y-auto flex-1 p-5 sm:p-7 space-y-6">
                  {/* Image showcase */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-xl bg-gray-950 border border-gray-200/80 dark:border-white/[0.08]">
                    <img
                      src={modal.image}
                      alt={modal.title}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/10">
                        {modal.category}
                      </span>
                      {modal.featured && (
                        <span className="px-2.5 py-1 rounded-md bg-violet-600 text-white text-[11px] font-bold shadow-md flex items-center gap-1">
                          <Sparkles size={11} /> Destacado
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Meta Specs Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                      <span className="text-[10px] uppercase font-semibold text-gray-400 block">Categoría</span>
                      <span className="text-xs font-bold text-gray-800 dark:text-gray-200">{modal.category}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                      <span className="text-[10px] uppercase font-semibold text-gray-400 block">Cliente / Sector</span>
                      <span className="text-xs font-bold text-gray-800 dark:text-gray-200 truncate block">{modal.client || 'ArkTech Client'}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                      <span className="text-[10px] uppercase font-semibold text-gray-400 block">Año</span>
                      <span className="text-xs font-bold text-gray-800 dark:text-gray-200">{modal.year || '2024'}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <span className="text-[10px] uppercase font-semibold text-emerald-600 dark:text-emerald-400 block">Estado</span>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 size={12} /> Producción
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white">
                      {modal.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {modal.description}
                    </p>
                  </div>

                  {/* Metric Box */}
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/[0.08] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 flex-shrink-0">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">Métrica / Capacidad Clave</span>
                      <span className="text-sm sm:text-base font-extrabold text-gray-900 dark:text-white">{modal.metric}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider block">
                      Stack Tecnológico & Librerías
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {modal.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/[0.05] text-gray-800 dark:text-gray-200 text-xs font-medium border border-gray-200/80 dark:border-white/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-gray-200/60 dark:border-white/[0.06]">
                    {modal.demoLink && modal.demoLink !== '#' && (
                      <a
                        href={modal.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 flex-1 px-6 py-3.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-sm hover:opacity-90 transition-opacity shadow-md"
                      >
                        <span>Abrir Demo en Vivo</span>
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                    <Link
                      to="/contact"
                      onClick={() => setModal(null)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-white/[0.05] border border-gray-200/80 dark:border-white/10 text-gray-800 dark:text-gray-200 font-semibold text-sm hover:border-violet-500/40 transition-colors"
                    >
                      Cotizar un Proyecto Similar
                    </Link>
                  </div>
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
