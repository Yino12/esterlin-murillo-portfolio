import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';
import Magnetic from './Magnetic';
import { ArrowUpRight } from 'lucide-react';

export default function WorkSection() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section id="work" className="relative py-24 px-6 sm:px-16 bg-dark text-mint">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-darkBorder pb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-brand uppercase tracking-widest block mb-2">
              Proyectos Seleccionados (05)
            </span>
            <h2 className="text-4xl sm:text-6xl font-display uppercase tracking-tight">
              Trabajos Destacados
            </h2>
          </div>
          <p className="text-mint/50 text-sm max-w-xs font-normal">
            Una selección de proyectos recientes en branding, diseño UX/UI y desarrollo interactivo.
          </p>
        </div>

        {/* Interactive Work List */}
        <div className="relative border-t border-darkBorder">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setModal({ active: true, index })}
              onMouseLeave={() => setModal({ active: false, index })}
              className="group relative flex flex-col md:flex-row justify-between items-start md:items-center py-10 px-4 sm:px-8 border-b border-darkBorder cursor-pointer transition-colors duration-300 hover:bg-darkCard/50"
            >
              {/* Static Thumbnail (mobile only — no hover on touch devices) */}
              <div
                className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 md:hidden"
                style={{ backgroundColor: project.color || '#1A1C23' }}
              >
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Left Title & Tags */}
              <div className="flex items-center gap-6 sm:gap-12">
                <span className="text-sm font-mono text-mint/40 group-hover:text-brand transition-colors">
                  {project.id}
                </span>
                <div>
                  <h3 className="text-3xl sm:text-6xl font-display uppercase tracking-tight group-hover:-translate-x-2 group-hover:text-brand transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-mint/60 bg-mint/5 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Category & Arrow */}
              <div className="flex items-center gap-8 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                <div className="text-left md:text-right">
                  <p className="text-sm font-medium text-mint/70 group-hover:text-mint transition-colors">
                    {project.category}
                  </p>
                  <p className="text-xs font-mono text-mint/40">{project.year}</p>
                </div>

                <div className="w-12 h-12 rounded-full border border-brand/20 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-mint/60 group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Mouse Modal */}
        <ProjectModal modal={modal} projects={projects} />

        {/* More Work CTA Button */}
        <div className="flex justify-center pt-8">
          <Magnetic>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-4 px-10 py-6 rounded-full border border-brand/30 bg-darkCard text-mint hover:bg-brand hover:text-ink hover:border-brand transition-all duration-300 font-display uppercase text-base shadow-2xl"
            >
              <span>Más Proyectos (12+)</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Magnetic>
        </div>

      </div>
    </section>
  );
}
