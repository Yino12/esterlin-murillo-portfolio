import React from 'react';
import { services } from '../data/services';
import { CheckCircle2 } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="relative py-28 px-6 sm:px-16 bg-[#141517] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-800 pb-8 gap-4">
          <div>
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-2">
              Disciplinas & Capacidades
            </span>
            <h2 className="text-4xl sm:text-6xl font-syne font-extrabold tracking-tight">
              ¿En qué puedo ayudarte?
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-sm">
            Soluciones integrales de diseño desde la concepción de la idea hasta la entrega del producto final.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="group p-8 sm:p-10 rounded-2xl bg-[#1C1D20] border border-white/10 hover:border-[#455CE9]/50 transition-all duration-300 flex flex-col justify-between space-y-8 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#455CE9]/10 rounded-full blur-2xl group-hover:bg-[#455CE9]/25 transition-all duration-500 pointer-events-none"></div>

              <div className="space-y-4">
                <span className="text-sm font-mono text-[#455CE9] font-bold">
                  {service.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-syne font-bold tracking-tight text-white group-hover:text-[#455CE9] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-800">
                <div className="grid grid-cols-2 gap-3">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-mono text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#455CE9]" />
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
