import React, { useRef, useEffect } from 'react';
import Magnetic from './Magnetic';
import { ArrowUpRight, Globe } from 'lucide-react';
import gsap from 'gsap';
import esterlinAvatar from '../assets/esterlin-avatar.png';

export default function Hero() {
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const sliderRef = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    let animationFrameId;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        direction = -1; // scrolling down
      } else if (currentScrollY < lastScrollY) {
        direction = 1; // scrolling up
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const animateMarquee = () => {
      if (xPercent < -100) {
        xPercent = 0;
      }
      if (xPercent > 0) {
        xPercent = -100;
      }
      if (firstTextRef.current && secondTextRef.current) {
        gsap.set(firstTextRef.current, { xPercent: xPercent });
        gsap.set(secondTextRef.current, { xPercent: xPercent });
      }
      xPercent += 0.045 * direction;
      animationFrameId = requestAnimationFrame(animateMarquee);
    };

    animationFrameId = requestAnimationFrame(animateMarquee);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-16 pb-16 bg-dark text-mint overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] bg-brand/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Top Tagline & Info Container */}
      <div className="px-6 sm:px-16 max-w-7xl mx-auto w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-end pt-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand text-ink text-xs font-bold uppercase tracking-widest mb-6">
            <Globe className="w-3.5 h-3.5" />
            <span>Diseñador Gráfico &amp; Web · Colombia</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9]">
            Esterlin <br />
            Murillo <br />
            <span className="text-brand">Diseño &amp; Web <span className="whitespace-nowrap">- IA</span></span>
          </h1>
        </div>

        <div className="flex flex-col items-start md:items-end justify-between space-y-6">
          <p className="text-mint/60 text-base sm:text-lg font-normal max-w-md leading-relaxed text-left md:text-right">
            Especialista en imagen corporativa, desarrollo web en WordPress/WooCommerce, diseño UI de interfaces, producción publicitaria en gran formato y soluciones potenciadas con IA.
          </p>

          <Magnetic>
            <a
              href="#work"
              className="group relative flex items-center gap-3 px-8 py-4 rounded-full bg-brand text-ink font-display uppercase tracking-wide text-sm overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Ver Proyectos Destacados</span>
              <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Magnetic>
        </div>
      </div>

      {/* Center Image Container */}
      <div className="relative my-8 px-6 sm:px-16 max-w-6xl mx-auto w-full z-10">
        <div className="relative h-[320px] sm:h-[450px] rounded-2xl overflow-hidden border border-brand/20 shadow-2xl group bg-darkCard">
          <img
            src={esterlinAvatar}
            alt="Esterlin Murillo Mena"
            className="w-full h-full object-contain object-center group-hover:scale-105 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap justify-between items-end gap-4">
            <div className="bg-dark/80 backdrop-blur-md px-4 py-2.5 rounded-lg border border-brand/20">
              <p className="text-xs font-mono text-brand font-bold uppercase tracking-wider">Politécnico de Antioquia</p>
              <p className="text-sm font-semibold text-mint">Diseñador Gráfico &amp; Dibujante Artístico</p>
            </div>

            <div className="flex flex-wrap justify-end gap-2 max-w-full sm:max-w-md">
              {['Photoshop', 'Illustrator', 'Figma', 'WordPress', 'Clip Studio', 'Magnific', 'Google Flow', 'Google Nano Banana 2'].map((tool) => (
                <span key={tool} className="text-xs font-mono bg-brand/10 backdrop-blur-md px-3 py-1 rounded-full border border-brand/20 text-mint">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Marquee Ticker */}
      <div className="relative w-full overflow-hidden border-y border-brand/10 py-6 bg-[#141514] z-10">
        <div ref={sliderRef} className="relative whitespace-nowrap flex font-display text-4xl sm:text-7xl tracking-tight text-mint/90 uppercase select-none">
          <p ref={firstTextRef} className="pr-8 flex items-center gap-8">
            ESTERLIN MURILLO MENA <span className="w-4 h-4 rounded-full bg-brand inline-block"></span>
            DISEÑADOR GRÁFICO & WEB <span className="w-4 h-4 rounded-full bg-brand inline-block"></span>
            WORDPRESS & WOOCOMMERCE <span className="w-4 h-4 rounded-full bg-brand inline-block"></span>
            GRAN FORMATO & ACRÍLICOS <span className="w-4 h-4 rounded-full bg-brand inline-block"></span>
          </p>
          <p ref={secondTextRef} className="pr-8 flex items-center gap-8">
            ESTERLIN MURILLO MENA <span className="w-4 h-4 rounded-full bg-brand inline-block"></span>
            DISEÑADOR GRÁFICO & WEB <span className="w-4 h-4 rounded-full bg-brand inline-block"></span>
            WORDPRESS & WOOCOMMERCE <span className="w-4 h-4 rounded-full bg-brand inline-block"></span>
            GRAN FORMATO & ACRÍLICOS <span className="w-4 h-4 rounded-full bg-brand inline-block"></span>
          </p>
        </div>
      </div>
    </section>
  );
}
