import React, { useState, useEffect } from 'react';
import Magnetic from './Magnetic';
import { Menu, X, ArrowRight, ShoppingBag } from 'lucide-react';

const navItems = [
  { title: 'Inicio', href: '#hero' },
  { title: 'Trabajos', href: '#work' },
  { title: 'Sobre mí', href: '#about' },
  { title: 'Servicios', href: '#services' },
  { title: 'Contacto', href: '#contact' },
];

export default function Header({ isNavOpen, setIsNavOpen }) {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'America/Bogota',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      };
      setTimeStr(now.toLocaleTimeString('es-CO', options) + ' GMT-5');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Desktop fixed sidebar */}
      <aside className="hidden lg:flex flex-col justify-between fixed top-0 left-0 h-screen w-72 bg-brand text-ink px-8 py-10 z-40 overflow-y-auto">
        <div className="space-y-10">
          <a href="#hero" className="block">
            <p className="font-display text-3xl leading-[0.85] uppercase">
              Esterlin<br />Murillo
            </p>
            <p className="mt-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-ink/70">
              Diseño Gráfico &amp; Web
            </p>
          </a>

          <nav className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex items-center justify-between py-4 border-b border-dashed border-ink/30 first:border-t first:border-dashed first:border-ink/30"
              >
                <span className="font-display text-2xl xl:text-3xl uppercase tracking-tight group-hover:translate-x-1.5 transition-transform duration-300">
                  {item.title}
                </span>
                <span className="w-9 h-9 shrink-0 rounded-full bg-ink text-mint flex items-center justify-center border border-ink group-hover:bg-mint group-hover:text-ink transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 -rotate-45" />
                </span>
              </a>
            ))}
          </nav>

          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold bg-ink/10 border border-ink/20 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-ink animate-pulse" />
            <span>Colombia · {timeStr || '00:00:00 GMT-5'}</span>
          </div>
        </div>

        <div className="space-y-3">
          <Magnetic className="block w-full">
            <a
              href="#work"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-ink text-mint font-display uppercase tracking-wide text-sm hover:bg-[#00443c] transition-colors"
            >
              Ver Trabajos
            </a>
          </Magnetic>
          <Magnetic className="block w-full">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-mint text-ink border border-ink font-display uppercase tracking-wide text-sm hover:bg-white transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              Escríbeme
            </a>
          </Magnetic>
          <p className="text-center text-[11px] text-ink/60 font-medium">y hagamos algo increíble juntos</p>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 left-0 w-full z-40 flex items-center justify-between px-6 py-4 bg-brand text-ink">
        <a href="#hero" className="font-display text-xl uppercase leading-none">
          Esterlin<br />Murillo
        </a>
        <Magnetic>
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Abrir Menú"
            className="relative flex items-center justify-center w-12 h-12 rounded-full bg-ink text-mint border border-ink shadow-lg"
          >
            {isNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </Magnetic>
      </header>
    </>
  );
}
