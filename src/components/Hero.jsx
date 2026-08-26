import React, { useRef, useEffect } from 'react';
import Magnetic from './Magnetic';
import { ArrowUpRight, Globe, Layers, Code, Palette } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const sliderRef = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    let animationFrameId;

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
      xPercent += 0.08 * direction;
      animationFrameId = requestAnimationFrame(animateMarquee);
    };

    animationFrameId = requestAnimationFrame(animateMarquee);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 bg-[#1C1D20] text-white overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#455CE9]/15 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Top Tagline & Info Container */}
      <div className="px-6 sm:px-16 max-w-7xl mx-auto w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-6">
            <Globe className="w-3.5 h-3.5 text-[#455CE9] animate-spin" style={{ animationDuration: '10s' }} />
            <span>Diseñador Gráfico & Web • Colombia</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-syne font-extrabold tracking-tight leading-[1.05]">
            Esterlin Murillo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              Diseñador Gráfico & Web
            </span>
          </h1>
        </div>

        <div className="flex flex-col items-start md:items-end justify-between space-y-6">
          <p className="text-gray-400 text-base sm:text-lg font-normal max-w-md leading-relaxed text-left md:text-right">
            Especialista en imagen corporativa, desarrollo web en WordPress/WooCommerce, diseño UI de interfaces y producción publicitaria en gran formato.
          </p>

          <Magnetic>
            <a
              href="#work"
              className="group relative flex items-center gap-3 px-8 py-4 rounded-full bg-[#455CE9] text-white font-semibold text-sm overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Ver Proyectos Destacados</span>
              <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Magnetic>
        </div>
      </div>

      {/* Center Image Container */}
      <div className="relative my-8 px-6 sm:px-16 max-w-6xl mx-auto w-full z-10">
        <div className="relative h-[320px] sm:h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group bg-[#141517]">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80"
            alt="Esterlin Murillo Mena"
            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D20] via-transparent to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap justify-between items-end gap-4">
            <div className="bg-[#1C1D20]/80 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10">
              <p className="text-xs font-mono text-[#455CE9] font-bold uppercase tracking-wider">Politécnico de Antioquia</p>
              <p className="text-sm font-semibold">Diseñador Gráfico & Dibujante Artístico</p>
            </div>

            <div className="flex gap-2">
              {['Photoshop', 'Illustrator', 'Figma', 'WordPress', 'Clip Studio'].map((tool) => (
                <span key={tool} className="text-xs font-mono bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Marquee Ticker */}
      <div className="relative w-full overflow-hidden border-y border-white/10 py-6 bg-[#141517] z-10">
        <div ref={sliderRef} className="relative whitespace-nowrap flex font-syne font-black text-4xl sm:text-7xl tracking-tight text-white/90 uppercase select-none">
          <p ref={firstTextRef} className="pr-8 flex items-center gap-8">
            ESTERLIN MURILLO MENA <span className="w-4 h-4 rounded-full bg-[#455CE9] inline-block"></span>
            DISEÑADOR GRÁFICO & WEB <span className="w-4 h-4 rounded-full bg-[#455CE9] inline-block"></span>
            WORDPRESS & WOOCOMMERCE <span className="w-4 h-4 rounded-full bg-[#455CE9] inline-block"></span>
            GRAN FORMATO & ACRÍLICOS <span className="w-4 h-4 rounded-full bg-[#455CE9] inline-block"></span>
          </p>
          <p ref={secondTextRef} className="pr-8 flex items-center gap-8 absolute left-full top-0">
            ESTERLIN MURILLO MENA <span className="w-4 h-4 rounded-full bg-[#455CE9] inline-block"></span>
            DISEÑADOR GRÁFICO & WEB <span className="w-4 h-4 rounded-full bg-[#455CE9] inline-block"></span>
            WORDPRESS & WOOCOMMERCE <span className="w-4 h-4 rounded-full bg-[#455CE9] inline-block"></span>
            GRAN FORMATO & ACRÍLICOS <span className="w-4 h-4 rounded-full bg-[#455CE9] inline-block"></span>
          </p>
        </div>
      </div>
    </section>
  );
}
