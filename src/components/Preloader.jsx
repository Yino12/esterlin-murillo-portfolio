import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  "Hola",
  "Hello",
  "Bonjour",
  "Ciao",
  "Olá",
  "Guten Tag",
  "Hallå",
  "Esterlin Murillo"
];

export default function Preloader({ onComplete }) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      const timeout = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000);
      return () => clearTimeout(timeout);
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, index === 0 ? 800 : 200);

    return () => clearTimeout(timer);
  }, [index, onComplete]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  Z`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width / 2} 0 0 0 Z`;

  const curveVariants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
    }
  };

  const slideUpVariants = {
    initial: { top: 0 },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
  };

  return (
    <motion.div
      variants={slideUpVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark text-mint overflow-hidden pointer-events-auto"
    >
      {dimension.width > 0 && (
        <>
          <div className="relative z-10 flex items-center gap-3 text-4xl sm:text-6xl font-display uppercase tracking-tight">
            <span className="inline-block w-3 h-3 bg-brand rounded-full animate-ping"></span>
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-[#181818]">
            <motion.path
              variants={curveVariants}
              initial="initial"
              exit="exit"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}
