import React, { useState } from 'react';
import Magnetic from './Magnetic';
import { ArrowUpRight, Copy, Check, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import esterlinAvatar from '../assets/esterlin-avatar.png';

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
    <footer id="contact" className="relative bg-mint text-ink pt-24 pb-12 px-6 sm:px-16 overflow-hidden">

      {/* Background Accent Blur */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand/20 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">

        {/* Top Call to Action Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-ink/10 pb-16">

          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-ink/20">
                <img
                  src={esterlinAvatar}
                  alt="Esterlin Murillo Mena"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="text-xl sm:text-2xl font-display uppercase tracking-tight text-ink/70">
                ¿Tienes un proyecto en mente?
              </span>
            </div>

            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display uppercase tracking-tight leading-none">
              Trabajemos <br />
              <span className="text-brandDark">Juntos.</span>
            </h2>
          </div>

          {/* Giant Magnetic CTA Button */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Magnetic strength={0.4}>
              <a
                href={`mailto:${email}`}
                className="group relative flex items-center justify-center w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-ink text-mint shadow-2xl transition-transform duration-500 hover:scale-110"
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="font-display uppercase text-2xl tracking-wider group-hover:scale-105 transition-transform">
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
          <div className="p-8 rounded-2xl bg-mint/60 border border-ink/10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-ink/60 uppercase tracking-wider">
              <Mail className="w-4 h-4 text-brandDark" />
              <span>Correo Electrónico Directo</span>
            </div>
            <p className="text-base font-semibold text-ink truncate">{email}</p>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 text-xs font-mono text-brandDark hover:text-ink transition-colors border border-brandDark/40 hover:border-ink/40 px-3 py-1.5 rounded-full"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '¡Email Copiado!' : 'Copiar Correo'}</span>
            </button>
          </div>

          {/* Phone Box */}
          <div className="p-8 rounded-2xl bg-mint/60 border border-ink/10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-ink/60 uppercase tracking-wider">
              <Phone className="w-4 h-4 text-brandDark" />
              <span>Teléfono / WhatsApp</span>
            </div>
            <p className="text-xl font-bold text-ink">{phone}</p>
            <a
              href={`https://wa.me/57${phone.replace(/\s+/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-brandDark hover:underline"
            >
              <span>Contactar en WhatsApp</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Netlify CV & Location Box */}
          <div className="p-8 rounded-2xl bg-mint/60 border border-ink/10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-ink/60 uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-brandDark" />
              <span>Sitio CV Actual &amp; Ubicación</span>
            </div>
            <p className="text-lg font-semibold text-ink">Colombia</p>
            <a
              href={netlifyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-brandDark hover:text-ink underline decoration-brandDark underline-offset-4"
            >
              <span>cv-esterlin-mm.netlify.app</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-ink/10 text-xs font-mono text-ink/60">

          <div className="flex flex-wrap gap-4">
            {['WhatsApp', 'LinkedIn', 'Behance', 'Netlify CV'].map((net) => (
              <Magnetic key={net}>
                <a
                  href={net === 'Netlify CV' ? netlifyUrl : `#`}
                  target={net === 'Netlify CV' ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full border border-ink/10 hover:border-ink hover:bg-ink hover:text-mint transition-all inline-block"
                >
                  {net}
                </a>
              </Magnetic>
            ))}
          </div>

          <div className="flex items-center gap-4 text-ink/50">
            <span>© 2026 ESTERLIN MURILLO MENA</span>
            <span>•</span>
            <span>Diseñador Gráfico & Web</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
