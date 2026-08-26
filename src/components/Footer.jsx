import React, { useState } from 'react';
import Magnetic from './Magnetic';
import { ArrowUpRight, Copy, Check, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "esterlinmurillomena@gmail.com";
  const phone = "300 534 7784";
  const netlifyUrl = "https://cv-esterlin-mm.netlify.app";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="relative bg-[#141517] text-white pt-24 pb-12 px-6 sm:px-16 overflow-hidden border-t border-gray-800">
      
      {/* Background Accent Blur */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#455CE9]/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">

        {/* Top Call to Action Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-gray-800 pb-16">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                  alt="Esterlin Murillo Mena"
                  className="w-full h-full object-cover object-top grayscale"
                />
              </div>
              <span className="text-xl sm:text-2xl font-syne font-semibold text-gray-300">
                ¿Tienes un proyecto en mente?
              </span>
            </div>

            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-syne font-black tracking-tight leading-none">
              Trabajemos <br />
              <span className="text-[#455CE9]">Juntos.</span>
            </h2>
          </div>

          {/* Giant Magnetic CTA Button */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Magnetic strength={0.4}>
              <a
                href={`mailto:${email}`}
                className="group relative flex items-center justify-center w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#455CE9] text-white shadow-2xl transition-transform duration-500 hover:scale-110"
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="font-syne font-extrabold text-2xl tracking-wider uppercase group-hover:scale-105 transition-transform">
                    Escríbeme
                  </span>
                  <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>
            </Magnetic>
          </div>

        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Email Box */}
          <div className="p-8 rounded-2xl bg-[#1C1D20] border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
              <Mail className="w-4 h-4 text-[#455CE9]" />
              <span>Correo Electrónico Directo</span>
            </div>
            <p className="text-base font-semibold text-white truncate">{email}</p>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#455CE9] hover:text-white transition-colors border border-[#455CE9]/40 hover:border-white/40 px-3 py-1.5 rounded-full"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '¡Email Copiado!' : 'Copiar Correo'}</span>
            </button>
          </div>

          {/* Phone Box */}
          <div className="p-8 rounded-2xl bg-[#1C1D20] border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
              <Phone className="w-4 h-4 text-[#455CE9]" />
              <span>Teléfono / WhatsApp</span>
            </div>
            <p className="text-xl font-bold text-white">{phone}</p>
            <a
              href={`https://wa.me/57${phone.replace(/\s+/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:underline"
            >
              <span>Contactar en WhatsApp</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Netlify CV & Location Box */}
          <div className="p-8 rounded-2xl bg-[#1C1D20] border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-[#455CE9]" />
              <span>Sitio CV Actual & Ubicación</span>
            </div>
            <p className="text-lg font-semibold text-white">Colombia</p>
            <a
              href={netlifyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#455CE9] hover:text-white underline decoration-[#455CE9] underline-offset-4"
            >
              <span>cv-esterlin-mm.netlify.app</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-gray-800 text-xs font-mono text-gray-400">
          
          <div className="flex flex-wrap gap-4">
            {['WhatsApp', 'LinkedIn', 'Behance', 'Netlify CV'].map((net) => (
              <Magnetic key={net}>
                <a
                  href={net === 'Netlify CV' ? netlifyUrl : `#`}
                  target={net === 'Netlify CV' ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full border border-white/10 hover:border-[#455CE9] hover:bg-[#455CE9] hover:text-white transition-all inline-block"
                >
                  {net}
                </a>
              </Magnetic>
            ))}
          </div>

          <div className="flex items-center gap-4 text-gray-500">
            <span>© 2026 ESTERLIN MURILLO MENA</span>
            <span>•</span>
            <span>Diseñador Gráfico & Web</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
