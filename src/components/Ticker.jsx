import React from 'react';

const items = [
  { label: 'Disponible para proyectos', tag: 'Estado' },
  { label: 'WordPress & WooCommerce', tag: 'Especialidad' },
  { label: 'Diseño UI / UX', tag: 'Especialidad' },
  { label: 'Gran Formato & Acrílico', tag: 'Producción' },
  { label: 'Politécnico de Antioquia', tag: 'Formación' },
];

function TickerRow() {
  return (
    <div className="marquee-wrapper animate-marquee">
      {[...items, ...items].map((item, i) => (
        <div key={i} className="flex items-center gap-3 px-6 py-3 shrink-0">
          <span className="w-2 h-2 rounded-full bg-brand shrink-0" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-mint/50">{item.tag}</span>
          <span className="text-sm font-semibold text-mint">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="w-full border-b border-darkBorder bg-[#141514] overflow-hidden">
      <TickerRow />
    </div>
  );
}
