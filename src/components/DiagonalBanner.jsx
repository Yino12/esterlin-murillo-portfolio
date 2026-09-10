import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function DiagonalBanner({ text = 'Disponible para nuevos proyectos' }) {
  const items = new Array(8).fill(text);

  return (
    <div className="relative py-10 overflow-hidden bg-dark">
      <div className="-rotate-2 bg-mint text-ink py-5 shadow-2xl">
        <div className="marquee-wrapper animate-marquee-fast">
          {[...items, ...items].map((t, i) => (
            <div key={i} className="flex items-center gap-6 px-6 shrink-0">
              <span className="w-10 h-10 rounded-full bg-ink text-mint flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </span>
              <span className="font-display text-2xl sm:text-4xl uppercase tracking-tight">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
