import React, { useState, useEffect } from 'react';
import Magnetic from './Magnetic';
import { Menu, X } from 'lucide-react';

export default function Header({ isNavOpen, setIsNavOpen }) {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'America/Bogota',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setTimeStr(now.toLocaleTimeString('es-CO', options) + ' GMT-5');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-6 sm:px-12 py-6 flex items-center justify-between pointer-events-none">
      {/* Brand / Logo */}
      <Magnetic className="pointer-events-auto">
        <a href="#hero" className="group flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition-colors">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#455CE9] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#455CE9]"></span>
          </div>
          <span className="font-syne font-bold tracking-tight text-base group-hover:rotate-6 transition-transform">
            © Code & Design by Esterlin
          </span>
        </a>
      </Magnetic>

      {/* Center Location & Live Clock (Desktop) */}
      <div className="hidden md:flex items-center gap-4 text-xs font-mono text-gray-400 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 pointer-events-auto">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Colombia</span>
        <span className="text-gray-600">|</span>
        <span className="text-white font-semibold">{timeStr || '23:04:15 GMT-5'}</span>
      </div>

      {/* Nav Links & Magnetic Menu Trigger */}
      <div className="flex items-center gap-8 pointer-events-auto">
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Magnetic><a href="#work" className="hover:text-white transition-colors">Trabajos</a></Magnetic>
          <Magnetic><a href="#about" className="hover:text-white transition-colors">Sobre mí</a></Magnetic>
          <Magnetic><a href="#contact" className="hover:text-white transition-colors">Contacto</a></Magnetic>
        </nav>

        {/* Dynamic Magnetic Menu Button */}
        <Magnetic>
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Abrir Menú"
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#1C1D20] border border-white/20 text-white hover:bg-[#455CE9] hover:border-[#455CE9] transition-all duration-300 shadow-xl group"
          >
            {isNavOpen ? (
              <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
            ) : (
              <Menu className="w-6 h-6 transition-transform group-hover:scale-110" />
            )}
          </button>
        </Magnetic>
      </div>
    </header>
  );
}
