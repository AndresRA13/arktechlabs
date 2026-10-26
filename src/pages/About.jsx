import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ShieldCheck, Rocket, Users, ArrowRight, Star, MapPin, Globe, Code2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const teamMembers = [
  {
    name: 'Carlos Méndez',
    role: 'CEO & Arquitecto de Software',
    img: 'https://i.pravatar.cc/200?u=carlos',
    desc: 'Visionario tecnológico con 10+ años liderando soluciones empresariales de alto impacto.',
    badge: 'Liderazgo',
    badgeColor: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
    gradient: 'from-violet-600 to-purple-600',
  },
  {
    name: 'Andrés Rojas',
    role: 'CTO & Lead Developer',
    img: 'https://i.pravatar.cc/200?u=andres',
    desc: 'Experto en arquitecturas full-stack, cloud y automatización con IA para negocios escalables.',
    badge: 'Full Stack',
    badgeColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Juan Pérez',
    role: 'Lead Designer UI/UX',
    img: 'https://i.pravatar.cc/200?u=juan',
    desc: 'Especialista en experiencias digitales que convierten visitantes en clientes fieles.',
    badge: 'UX Design',
    badgeColor: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20',
    gradient: 'from-pink-500 to-rose-500',
  },
];

const values = [
  {
    icon: Lightbulb,
    gradient: 'from-amber-400 to-orange-500',
    shadow: 'shadow-amber-500/25',
    title: 'Visionarios',
    desc: 'Construimos el futuro con tecnología de vanguardia e inteligencia artificial.',
    color: 'text-amber-600 dark:text-amber-400',
  },
  {
    icon: ShieldCheck,
    gradient: 'from-emerald-400 to-teal-500',
    shadow: 'shadow-emerald-500/25',
    title: 'Confiables',
    desc: 'Sistemas diseñados para alta disponibilidad y máxima seguridad empresarial.',
    color: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    icon: Rocket,
    gradient: 'from-violet-600 to-purple-600',
    shadow: 'shadow-violet-500/25',
    title: 'Ágiles',
    desc: 'Metodologías modernas para entregar software de calidad en tiempos récord.',
    color: 'text-violet-600 dark:text-violet-400',
  },
  {
    icon: Users,
    gradient: 'from-cyan-500 to-blue-600',
    shadow: 'shadow-cyan-500/25',
    title: 'Colaborativos',
    desc: 'Somos tu socio estratégico, no solo proveedores. Tu éxito es el nuestro.',
    color: 'text-cyan-600 dark:text-cyan-400',
  },
];

const milestones = [
  { year: '2016', label: 'Fundación de ArkTech en Ciudad de México', icon: '🚀' },
  { year: '2018', label: 'Expansión a mercados de EE.UU. y España', icon: '🌎' },
  { year: '2021', label: 'Equipo de 25+ ingenieros y diseñadores', icon: '👥' },
  { year: '2024', label: '+150 proyectos entregados a escala global', icon: '🏆' },
];

const About = () => {
  return (
    <div className="relative pt-28 pb-20 overflow-hidden">
      <SEO
        title="Nosotros | ArkTech Labs — Agencia de Software en México"
        description="Conoce al equipo de ArkTech Labs, agencia de desarrollo de software con 8+ años de experiencia, +150 proyectos entregados y presencia en México y España."
        keywords="equipo arktech labs, agencia software mexico, empresa desarrollo tecnologia, historia arktech, valores software"
        path="/about"
      />

      {/* Background blobs */}
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-violet-500/8 dark:bg-violet-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-cyan-500/8 dark:bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-grid-pattern -z-10 opacity-40 dark:opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">

        {/* ─── HERO ABOUT ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Experience badge */}
            <div className="absolute -top-6 -right-6 z-20 glass-card rounded-2xl px-5 py-4 shadow-xl border border-violet-200/50 dark:border-violet-500/20 text-center">
              <span className="text-3xl font-extrabold text-gradient-primary block">8+</span>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Años de<br />Experiencia</span>
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
                  <div className="flex -space-x-2">
                    {teamMembers.map((m, i) => (
                      <img key={i} src={m.img} alt={m.name} className="w-8 h-8 rounded-full ring-2 ring-violet-400/50 object-cover" />
                    ))}
                  </div>
                  <p className="text-white text-xs font-semibold">Equipo ArkTech · 25+ profesionales</p>
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
                <div className="text-xs font-bold text-gray-900 dark:text-white">150+ Proyectos</div>
                <div className="text-[10px] text-gray-500 dark:text-gray-400">Entregados con éxito</div>
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
              Sobre ArkTech
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Impulsando el{' '}
              <span className="text-gradient-primary">Éxito Digital</span>{' '}
              a Través de la Innovación
            </h1>

            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              ArkTech no es solo un estudio de desarrollo; somos tu <strong className="text-gray-900 dark:text-white">socio estratégico</strong> en el ecosistema digital.
              Combinamos visión creativa con excelencia técnica para entregar productos de software excepcionales que transforman negocios reales y generan resultados medibles.
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              Desde startups hasta corporaciones, construimos soluciones personalizadas con las tecnologías más modernas del mercado, garantizando escalabilidad, seguridad y una experiencia de usuario inigualable.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-violet-100/80 dark:border-violet-500/12">
              {[
                { v: '150+', l: 'Proyectos' },
                { v: '15+', l: 'Países' },
                { v: '99%', l: 'Satisfacción' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-extrabold text-gradient-primary">{s.v}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Flutter', 'AWS', 'TypeScript', 'AI/ML'].map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold border border-violet-500/20">
                  {t}
                </span>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold shadow-lg shadow-violet-500/35 hover:shadow-violet-500/55 hover:scale-[1.02] transition-all duration-300 group"
            >
              Trabaja con nosotros <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* ─── TIMELINE / MILESTONES ───────────────────────── */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block">
              Historia
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Nuestra{' '}
              <span className="text-gradient-primary">trayectoria</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative flex gap-4 items-center p-6 rounded-2xl glass-card border border-violet-100/80 dark:border-violet-500/12 card-shimmer group"
              >
                <div className="text-3xl">{m.icon}</div>
                <div>
                  <div className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 mb-1">{m.year}</div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 leading-relaxed">{m.label}</p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold opacity-20 group-hover:opacity-60 transition-opacity">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── VALUES ─────────────────────────────────────── */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block">
              Nuestros Valores
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Lo que nos{' '}
              <span className="text-gradient-primary">define</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-6 rounded-3xl glass-card glass-card-hover border border-violet-100/80 dark:border-violet-500/12 text-center space-y-4 card-shimmer"
              >
                <div className={`mx-auto w-14 h-14 rounded-2xl bg-gradient-to-tr ${val.gradient} flex items-center justify-center text-white shadow-lg ${val.shadow}`}>
                  <val.icon size={26} />
                </div>
                <h3 className={`font-bold text-lg ${val.color}`}>{val.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── TEAM ───────────────────────────────────────── */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-violet-500/8 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono tracking-wider uppercase border border-violet-500/20 inline-block">
              El Equipo
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Las mentes detrás de{' '}
              <span className="text-gradient-primary">ArkTech</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Un equipo apasionado por la tecnología, el diseño y la innovación continua.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl glass-card glass-card-hover border border-violet-100/80 dark:border-violet-500/12 text-center space-y-5 card-shimmer group"
              >
                <div className="relative inline-block">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto ring-4 ring-violet-500/20 group-hover:ring-violet-500/40 transition-all duration-300">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Gradient ring effect */}
                  <div className={`absolute inset-0 w-24 h-24 rounded-2xl mx-auto ring-2 bg-gradient-to-tr ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white dark:border-[#030712] flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wide mt-1">{member.role}</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{member.desc}</p>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${member.badgeColor}`}>
                  {member.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
