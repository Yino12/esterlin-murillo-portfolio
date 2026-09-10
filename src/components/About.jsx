import React from 'react';
import Magnetic from './Magnetic';
import { ArrowDownRight, Sparkles, GraduationCap, Briefcase, Wrench, CheckCircle2 } from 'lucide-react';

const tools = [
  'Photoshop', 'Illustrator', 'Figma', 'WordPress',
  'WooCommerce', 'Premiere', 'After Effects',
  'HTML5', 'CSS3', 'JavaScript', 'Clip Studio'
];

const experiences = [
  {
    company: 'Actualidad (2026)',
    role: 'Diseñador Gráfico, Web & Gran Formato',
    desc: 'Impresiones a gran formato, diseño y creación de avisos publicitarios en acrílico y MDF. Desarrollo de tiendas online para restaurantes con menús digitales integrados y preparación de artes en flexografía y serigrafía.'
  },
  {
    company: 'IFLEXO (2025)',
    role: 'Diseñador de Interfaz (UI)',
    desc: 'Diseño de interfaz (UI) para aplicación móvil de apuestas deportivas y preparación de artes para impresión en flexografía y serigrafía.'
  },
  {
    company: 'LASERTECH (2018 - 2022)',
    role: 'Desarrollador Web & E-Commerce WooCommerce',
    desc: 'Desarrollo y gestión de tiendas online en WordPress con WooCommerce, pasarelas de pago seguras, manejo de inventario, optimización SEO y velocidad de carga.'
  },
  {
    company: 'PUBLINET (2016 - 2017)',
    role: 'Diseñador Gráfico & Impresión',
    desc: 'Imagen corporativa y branding, impresión a gran formato (vinil, lonas, banners), diseño de papelería (tarjetas, catálogos, flyers) y desarrollo web en WordPress.'
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 sm:px-16 bg-dark text-mint">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Profile Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand uppercase tracking-widest border-b border-darkBorder pb-2">
              <Sparkles className="w-3.5 h-3.5 text-brand" />
              <span>Perfil Profesional</span>
            </div>
            <h3 className="text-2xl font-display uppercase tracking-tight text-mint/60">
              Calidad, coherencia visual y soluciones efectivas para cada necesidad.
            </h3>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <p className="text-2xl sm:text-4xl font-display uppercase tracking-tight text-mint leading-snug">
              Soy un profesional creativo con experiencia en atención al cliente, diseño de imagen corporativa y creación de contenido multimedia.
            </p>

            <p className="text-mint/50 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
              Me especializo en impresión a gran formato, diseño de papelería y desarrollo web en WordPress/WooCommerce, habilidades que he fortalecido a lo largo de mi trayectoria en diversas empresas. Disfruto gestionar proyectos desde la idea inicial hasta su ejecución final, asegurando precisión visual y rendimiento.
            </p>

            {/* Education Badge */}
            <div className="p-6 rounded-2xl bg-darkCard border border-brand/10 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center shrink-0 border border-brand/40">
                <GraduationCap className="w-6 h-6 text-brand" />
              </div>
              <div>
                <p className="text-xs font-mono text-mint/50 uppercase tracking-wider">Estudios Superiores</p>
                <h4 className="text-lg font-display uppercase tracking-tight text-mint">Politécnico de Antioquia</h4>
                <p className="text-sm text-mint/60">Diseñador Gráfico y Dibujante Artístico con énfasis en publicidad.</p>
              </div>
            </div>

            {/* Tools Badges Grid */}
            <div className="space-y-4 pt-4 border-t border-darkBorder">
              <p className="text-xs font-mono text-mint/50 uppercase tracking-wider flex items-center gap-2">
                <Wrench className="w-3.5 h-3.5 text-brand" />
                <span>Herramientas Dominadas</span>
              </p>
              <div className="flex flex-wrap gap-2.5">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-full bg-darkCard border border-brand/10 hover:border-brand hover:bg-brand hover:text-ink transition-all text-xs font-mono text-mint/70"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12 border-t border-darkBorder pt-16">
          <div className="flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-brand" />
            <h3 className="text-3xl font-display uppercase tracking-tight text-mint">Experiencia Laboral</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="p-8 rounded-2xl bg-darkCard border border-brand/10 hover:border-brand/40 transition-all space-y-4 shadow-xl"
              >
                <span className="text-xs font-mono text-brand font-bold bg-brand/10 px-3 py-1 rounded-full border border-brand/30 inline-block">
                  {exp.company}
                </span>
                <h4 className="text-xl font-display uppercase tracking-tight text-mint">{exp.role}</h4>
                <p className="text-sm text-mint/50 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
