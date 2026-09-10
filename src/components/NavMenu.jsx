import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';
import { ExternalLink } from 'lucide-react';

const navItems = [
  { title: 'INICIO', href: '#hero' },
  { title: 'PROYECTOS', href: '#work' },
  { title: 'SOBRE MÍ', href: '#about' },
  { title: 'SERVICIOS', href: '#services' },
  { title: 'CONTACTO', href: '#contact' },
];

const socialLinks = [
  { name: 'WhatsApp', href: 'https://wa.me/573005347784' },
  { name: 'Netlify CV', href: 'https://cv-esterlin-mm.netlify.app' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Behance', href: '#' },
];

export default function NavMenu({ isOpen, setIsOpen }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const initialPath = `M0 0 L${dimensions.width} 0 L${dimensions.width} ${dimensions.height} Q${dimensions.width / 2} ${dimensions.height + 300} 0 ${dimensions.height} Z`;
  const targetPath = `M0 0 L${dimensions.width} 0 L${dimensions.width} ${dimensions.height} Q${dimensions.width / 2} ${dimensions.height} 0 ${dimensions.height} Z`;
  const exitPath = `M0 0 L${dimensions.width} 0 L${dimensions.width} 0 Q${dimensions.width / 2} 0 0 0 Z`;

  const menuVariants = {
    initial: { y: "-100%" },
    animate: {
      y: "0%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      y: "-100%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  const curveVariants = {
    initial: { d: initialPath },
    animate: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: exitPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-30 bg-dark text-mint flex flex-col justify-between px-8 sm:px-20 pt-32 pb-12 overflow-hidden"
        >
          {/* Menu Header Label */}
          <div className="border-b border-darkBorder pb-4 text-xs font-mono text-mint/40 uppercase tracking-widest">
            Navegación • Esterlin Murillo Mena
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-auto">
            <nav className="flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-4 text-4xl sm:text-7xl font-display uppercase tracking-tight hover:text-brand transition-colors"
                  >
                    <span className="text-sm font-mono text-mint/30 group-hover:text-brand transition-colors">
                      0{i + 1}
                    </span>
                    <span className="group-hover:translate-x-3 transition-transform duration-300">
                      {item.title}
                    </span>
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Social Links & Info Column */}
            <div className="flex flex-col justify-end space-y-8 border-t md:border-t-0 md:border-l border-darkBorder pt-8 md:pt-0 md:pl-16">
              <div>
                <h4 className="text-xs font-mono text-mint/40 uppercase tracking-wider mb-4">
                  Enlaces Directos
                </h4>
                <div className="flex flex-wrap gap-4 text-sm font-medium">
                  {socialLinks.map((social) => (
                    <Magnetic key={social.name}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-full border border-brand/10 hover:border-brand hover:bg-brand hover:text-ink transition-all inline-flex items-center gap-1.5"
                      >
                        <span>{social.name}</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    </Magnetic>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-mint/40 uppercase tracking-wider mb-2">
                  Contacto Directo
                </h4>
                <a
                  href="mailto:esterlinmurillomena@gmail.com"
                  className="text-lg font-medium text-mint/70 hover:text-mint underline decoration-brand decoration-2 underline-offset-4 block"
                >
                  esterlinmurillomena@gmail.com
                </a>
                <p className="text-sm font-mono text-mint/40 mt-1">Tel: +57 300 534 7784</p>
              </div>
            </div>
          </div>

          {/* Bottom Footer Details */}
          <div className="flex items-center justify-between text-xs font-mono text-mint/40 pt-6 border-t border-darkBorder">
            <span>© 2026 ESTERLIN MURILLO MENA</span>
            <span>DISEÑADOR GRÁFICO Y WEB • COLOMBIA</span>
          </div>

          {/* SVG Morphing Curve */}
          {dimensions.width > 0 && (
            <svg className="absolute bottom-0 left-0 w-full h-[300px] translate-y-full pointer-events-none fill-[#181818]">
              <motion.path
                variants={curveVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            </svg>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
