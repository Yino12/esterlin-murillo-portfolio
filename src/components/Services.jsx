import React from 'react';
import { services } from '../data/services';
import { CheckCircle2 } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="relative py-28 px-6 sm:px-16 bg-darkCard text-mint border-t border-darkBorder">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-darkBorder pb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-brand uppercase tracking-widest block mb-2">
              Disciplinas &amp; Capacidades
            </span>
            <h2 className="text-4xl sm:text-6xl font-display uppercase tracking-tight">
              ¿En qué puedo ayudarte?
            </h2>
          </div>
          <p className="text-mint/50 text-sm max-w-sm font-normal">
            Soluciones integrales de diseño desde la concepción de la idea hasta la entrega del producto final.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="group p-8 sm:p-10 rounded-2xl bg-dark border border-brand/10 hover:border-brand/50 transition-all duration-300 flex flex-col justify-between space-y-8 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-2xl group-hover:bg-brand/25 transition-all duration-500 pointer-events-none"></div>

              <div className="space-y-4">
                <span className="text-sm font-display text-brand font-bold">
                  {service.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-mint group-hover:text-brand transition-colors">
                  {service.title}
                </h3>
                <p className="text-mint/50 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 border-t border-darkBorder">
                <div className="grid grid-cols-2 gap-3">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-mono text-mint/70">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
