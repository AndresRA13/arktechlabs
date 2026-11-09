import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket, Users, ArrowRight, Star, Globe, Sparkles,
  ShieldCheck, CheckCircle2, HeartHandshake, Compass,
  Laptop, Code2, MessageSquare, Award, Smartphone,
  Database, Layers, Check, Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const coreTeamRoles = [
  {
    role: 'Arquitectura & Backend Lead',
    num: '01',
    desc: 'Diseño de bases de datos de alta concurrencia, APIs REST y microservicios seguros en la nube.',
    skills: ['Node.js', 'PostgreSQL', 'APIs REST', 'Seguridad'],
    gradient: 'from-violet-600 to-purple-600',
    shadow: 'shadow-violet-500/20',
    icon: Database,
  },
  {
    role: 'Desarrollo Frontend & Web Apps',
    num: '02',
    desc: 'Construcción de interfaces reactivas, Core Web Vitals 95+ y aplicaciones modernas con React y Next.js.',
    skills: ['React 19', 'Next.js', 'Tailwind CSS', 'Vite'],
    gradient: 'from-cyan-500 to-blue-600',
    shadow: 'shadow-cyan-500/20',
    icon: Code2,
  },
  {
    role: 'Diseño UI/UX & Producto Digital',
    num: '03',
    desc: 'Conceptualización de wireframes interactivos, design systems, prototipado en Figma y flujos de alta conversión.',
    skills: ['Figma Pro', 'Design Systems', 'UX Research', 'Prototipos'],
    gradient: 'from-pink-500 to-rose-500',
    shadow: 'shadow-pink-500/20',
    icon: Sparkles,
  },
  {
    role: 'Ingeniería Móvil & PWA',
    num: '04',
    desc: 'Desarrollo de aplicaciones nativas y multiplataforma con soporte offline y notificaciones para iOS y Android.',
    skills: ['Flutter', 'React Native', 'PWA ServiceWorker', 'Android/iOS'],
    gradient: 'from-emerald-500 to-teal-500',
    shadow: 'shadow-emerald-500/20',
    icon: Smartphone,
  },
  {
    role: 'Infraestructura Cloud & DevOps',
    num: '05',
    desc: 'Automatización de pipelines CI/CD, despliegues continuos, contenedores Docker y servidores cloud seguros.',
    skills: ['AWS Cloud', 'Docker', 'CI/CD Pipelines', 'Linux & SSL'],
    gradient: 'from-amber-500 to-orange-500',
    shadow: 'shadow-amber-500/20',
    icon: Cpu,
  },
  {
    role: 'Aseguramiento de Calidad & QA',
    num: '06',
    desc: 'Pruebas automatizadas, auditorías de seguridad, pruebas de carga y verificación exhaustiva previa al lanzamiento.',
    skills: ['Testing E2E', 'Unit Tests', 'Auditoría Código', 'Bug Tracking'],
    gradient: 'from-indigo-500 to-blue-600',
    shadow: 'shadow-indigo-500/20',
    icon: ShieldCheck,
  },
  {
    role: 'Gestión Técnica & Soporte Continuo',
    num: '07',
    desc: 'Coordinación ágil por sprints, atención directa y cercana al cliente, capacitación y monitoreo post-lanzamiento.',
    skills: ['Scrum / Sprints', 'Soporte 24/7', 'Capacitación', 'Atención Directa'],
    gradient: 'from-violet-600 to-cyan-500',
    shadow: 'shadow-violet-500/20',
    icon: HeartHandshake,
  },
];

const pillars = [
  {
    title: 'ArkTech Creatividad',
    subtitle: 'Innovación sin Límites',
    desc: 'Transformamos retos complejos en interfaces cautivadoras, intuitivas y arquitecturas modernas que destacan en el mercado. Pensamos diferente para que tu producto sea único.',
    icon: Sparkles,
    gradient: 'from-violet-600 to-purple-600',
    shadow: 'shadow-violet-500/25',
    tag: 'Creatividad',
    points: ['Diseño UI/UX de vanguardia', 'Soluciones digitales personalizadas', 'Enfoque en deleitar al usuario'],
  },
  {
    title: 'ArkTech Compromiso',
    subtitle: 'Dedicación y Resultados',
    desc: 'Tu éxito es el nuestro. Cumplimos plazos con rigurosidad, entregamos código limpio y auditado, y te acompañamos como un socio estratégico en cada paso del camino.',
    icon: HeartHandshake,
    gradient: 'from-cyan-500 to-blue-600',
    shadow: 'shadow-cyan-500/25',
    tag: 'Compromiso',
    points: ['Entregas puntuales garantizadas', 'Transparencia en cada sprint', 'Acompañamiento cercano y continuo'],
  },
  {
    title: 'ArkTech Visión 360°',
    subtitle: 'Cobertura Integral',
    desc: 'Entendemos el software de forma holística: desde la conceptualización, arquitectura y diseño hasta la seguridad cloud, la optimización SEO y el soporte técnico post-lanzamiento.',
    icon: Compass,
    gradient: 'from-amber-500 to-orange-600',
    shadow: 'shadow-amber-500/25',
    tag: 'Visión 360°',
    points: ['Estrategia integral de producto', 'Infraestructura cloud robusta', 'Soporte y evolución constante'],
  },
];

const departments = [
  'Desarrollo Web & Cloud',
  'Desarrollo Móvil (iOS / Android)',
  'Diseño UI/UX',
  'Testing & QA',
  'Soporte Técnico',
  'Consultoría & Arquitectura',
];

const About = () => {
  return (
    <div className="relative pt-28 pb-20 overflow-hidden">
      <SEO
        title="Nosotros | ArkTech Labs — Historia, Equipo y Visión"
        description="Conoce la historia de ArkTech Labs, fundada en 2020 con el deseo de hacer algo diferente. Especialistas en desarrollo web, apps móviles, ERP y diseño UI/UX."
        keywords="sobre arktech labs, historia arktech, equipo desarrollo software, agencia software 2020, arktech creatividad compromiso vision"
        path="/about"
      />

      {/* Background blobs */}
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-violet-500/8 dark:bg-violet-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-cyan-500/8 dark:bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-grid-pattern -z-10 opacity-40 dark:opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">

        {/* ─── HERO ABOUT (SECCIÓN PRINCIPAL) ──────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Founded badge */}
            <div className="absolute -top-6 -right-6 z-20 glass-card rounded-2xl px-5 py-4 shadow-xl border border-violet-200/50 dark:border-violet-500/20 text-center">
              <span className="text-3xl font-extrabold text-gradient-primary block">2020</span>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Año de<br />Fundación</span>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-violet-500/15">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Equipo de ArkTech trabajando"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 via-purple-900/20 to-transparent" />
              {/* Overlay info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-600/90 text-white font-mono font-bold text-xs ring-2 ring-violet-400/50 shadow-md">
                    7
                  </div>
                  <p className="text-white text-xs font-semibold">7 Especialistas a Cargo · Talento Multidisciplinar</p>
                </div>
              </div>
            </div>

            {/* Floating project card */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-8 -left-8 z-20 glass-card rounded-2xl p-4 shadow-xl border border-violet-200/50 dark:border-violet-500/20 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-violet-500/35">
                <Rocket size={18} />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900 dark:text-white">+150 Soluciones</div>
                <div className="text-[10px] text-gray-500 dark:text-gray-400">Entregadas con éxito</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-6"
          >
            <span className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block">
              Sobre ArkTech Labs
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Impulsando el{' '}
              <span className="text-gradient-primary">Éxito Digital</span>{' '}
              a Través de la Innovación
            </h1>

            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              ArkTech Labs no es solo un estudio de desarrollo; somos tu <strong className="text-gray-900 dark:text-white">socio estratégico</strong> en el ecosistema digital. Combinamos creatividad de diseño con excelencia técnica para entregar productos de software excepcionales que transforman negocios reales y generan resultados tangibles.
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              Desde emprendedores y startups hasta empresas consolidadas, construimos soluciones personalizadas con las tecnologías más modernas, garantizando escalabilidad, seguridad y una experiencia de usuario sobresaliente.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-violet-100/80 dark:border-violet-500/12">
              {[
                { v: '+150', l: 'Proyectos Entregados' },
                { v: '15+', l: 'Países Atendidos' },
                { v: '99%', l: 'Satisfacción Total' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-extrabold text-gradient-primary">{s.v}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Flutter', 'Firebase', 'AWS Cloud', 'UI/UX'].map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold border border-violet-500/20">
                  {t}
                </span>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold shadow-lg shadow-violet-500/35 hover:shadow-violet-500/55 hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
            >
              Iniciar un Proyecto Juntos <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* ─── NUESTRA HISTORIA (ADAPTADA) ─────────────────── */}
        <div className="relative rounded-3xl glass-card border border-violet-200/80 dark:border-violet-500/15 p-8 sm:p-14 overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-600/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            <div className="space-y-3 text-center sm:text-left">
              <span className="px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block">
                Nuestra Historia
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                El deseo de <span className="text-gradient-primary">“querer hacer algo diferente”</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Como toda buena historia, <strong>ArkTech Labs</strong> nace de un deseo genuino: el de <em>“querer hacer algo diferente”</em>. Todo empezó a escribirse en el año <strong>2020</strong>, cuando un equipo de desarrolladores y diseñadores apasionados decidió unir su talento para crear una compañía donde el software no fuera solo código, sino una herramienta transformadora para las empresas.
              </p>

              <p>
                Comenzamos ofreciendo servicios de diseño de interfaces, desarrollo de páginas web e identidad digital, consolidando nuestros primeros sistemas insignia orientados a resolver los dolores reales de los negocios: software de inventario, facturación POS y plataformas de gestión operativa.
              </p>

              <p>
                La confianza depositada por nuestros clientes y cada proyecto entregado con éxito han consolidado a <strong>ArkTech Labs</strong> como una firma tecnológica ágil y de alto rendimiento. En la actualidad, <strong>7 personas especializadas estamos a cargo</strong> y trabajamos directamente en cada proyecto, conformando un equipo multidisciplinario distribuido en las áreas clave:
              </p>

              {/* Department chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {departments.map((dept, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-3 rounded-xl bg-violet-500/8 border border-violet-500/15 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200"
                  >
                    <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                    <span>{dept}</span>
                  </div>
                ))}
              </div>

              <p>
                Como toda versión tecnológica, la nuestra se seguirá <strong>“actualizando”</strong> continuamente para fomentar la innovación, crear empleo de calidad y atraer mentes creativas que deseen construir el futuro digital.
              </p>
            </div>

            {/* Quote banner */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-cyan-600/10 border border-violet-500/25 space-y-3">
              <h3 className="font-extrabold text-lg sm:text-xl text-gray-900 dark:text-white">
                El que a ArkTech Labs se arrima, buena sombra lo cobija
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Crear una relación de negocios a largo plazo con nuestros clientes es nuestra máxima prioridad, y nuestra garantía para conseguirlo es su satisfacción por la oportuna y continua entrega de software e ideas de verdadero valor.
              </p>
              <p className="text-sm font-bold text-violet-600 dark:text-violet-400">
                ¡Somos tu mejor aliado para que tu negocio crezca y se adapte a la tecnología de hoy!
              </p>
            </div>
          </div>
        </div>

        {/* ─── PILARES / VALORES (CREATIVIDAD, COMPROMISO, VISIÓN 360°) ── */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block">
              Nuestros Pilares
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Todos los caminos conducen a{' '}
              <span className="text-gradient-primary">ArkTech Labs</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Los tres pilares esenciales que guían cada línea de código, cada diseño y cada interacción con nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl glass-card glass-card-hover border border-violet-100/80 dark:border-violet-500/12 space-y-5 card-shimmer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${pillar.gradient} flex items-center justify-center text-white shadow-lg ${pillar.shadow}`}>
                      <pillar.icon size={26} />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                      {pillar.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-xl text-gray-900 dark:text-white">{pillar.title}</h3>
                    <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wide mt-0.5">{pillar.subtitle}</p>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <ul className="space-y-2 pt-4 border-t border-violet-100/60 dark:border-violet-500/10">
                  {pillar.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
                      <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── EQUIPO (7 ESPECIALISTAS A CARGO) ─────────── */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block">
              Equipo Núcleo · 7 Especialistas a Cargo
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              7 profesionales dedicados a{' '}
              <span className="text-gradient-primary">tu producto digital</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
              No tercerizamos ni delegamos tu proyecto a intermediarios. Nuestro núcleo de 7 especialistas cubre cada fase de ingeniería, diseño, calidad y soporte de principio a fin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreTeamRoles.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-3xl glass-card border border-violet-100/80 dark:border-violet-500/12 space-y-4 card-shimmer flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${member.gradient} flex items-center justify-center text-white shadow-md ${member.shadow}`}>
                      <member.icon size={22} />
                    </div>
                    <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
                      {member.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-lg text-gray-900 dark:text-white leading-tight">
                      {member.role}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {member.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-violet-100/60 dark:border-violet-500/10">
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/[0.05] text-[10px] font-medium text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-white/[0.06]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core team benefit banner */}
          <div className="p-6 sm:p-8 rounded-2xl glass-card border border-violet-500/25 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-1 max-w-xl">
              <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block">
                ● Estructura Boutique & Ágil
              </span>
              <h4 className="text-lg font-extrabold text-gray-900 dark:text-white">
                0 Intermediarios · 100% Comunicación Directa con los Desarrolladores
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Al trabajar con un equipo central de 7 personas a cargo, hablas directamente con los ingenieros que construyen tu solución, garantizando rapidez, confidencialidad y control absoluto.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-xs sm:text-sm shadow-md hover:scale-105 transition-all flex-shrink-0"
            >
              Hablar con el Equipo →
            </Link>
          </div>
        </div>

        {/* ─── BOTTOM CTA BANNER ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-10 sm:p-14 rounded-3xl overflow-hidden text-center space-y-6"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-700 via-purple-700 to-cyan-700" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-violet-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              ¿Listo para construir algo extraordinario?
            </h2>
            <p className="text-violet-100 text-sm sm:text-base">
              Hablemos de tu idea y déjanos mostrarte cómo podemos convertirla en un producto digital de alto rendimiento.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-violet-700 font-bold shadow-xl hover:scale-105 transition-all duration-300"
              >
                Contactar al Equipo <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
