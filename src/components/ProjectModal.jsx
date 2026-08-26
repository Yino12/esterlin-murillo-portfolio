import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function ProjectModal({ modal, projects }) {
  const { active, index } = modal;
  const modalContainerRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorLabelRef = useRef(null);

  useEffect(() => {
    // Move Modal & Cursor with Mouse Coordinates
    const xMoveContainer = gsap.quickTo(modalContainerRef.current, "left", { duration: 0.8, ease: "power3.out" });
    const yMoveContainer = gsap.quickTo(modalContainerRef.current, "top", { duration: 0.8, ease: "power3.out" });

    const xMoveCursor = gsap.quickTo(cursorRef.current, "left", { duration: 0.5, ease: "power3.out" });
    const yMoveCursor = gsap.quickTo(cursorRef.current, "top", { duration: 0.5, ease: "power3.out" });

    const xMoveLabel = gsap.quickTo(cursorLabelRef.current, "left", { duration: 0.45, ease: "power3.out" });
    const yMoveLabel = gsap.quickTo(cursorLabelRef.current, "top", { duration: 0.45, ease: "power3.out" });

    const handleMouseMove = (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveLabel(pageX);
      yMoveLabel(pageY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    open: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
    closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.35, ease: [0.32, 0, 0.67, 0] } }
  };

  return (
    <>
      {/* Floating Image Modal */}
      <motion.div
        ref={modalContainerRef}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "open" : "closed"}
        className="absolute z-30 h-[280px] w-[340px] sm:h-[320px] sm:w-[400px] rounded-2xl overflow-hidden pointer-events-none shadow-2xl bg-[#141517] border border-white/10"
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="relative h-full w-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
        >
          {projects.map((project, i) => (
            <div
              key={`modal_${i}`}
              className="h-full w-full flex items-center justify-center p-2"
              style={{ backgroundColor: project.color || '#1A1C23' }}
            >
              <img
                src={project.src}
                alt={project.title}
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating Cursor Circle Button */}
      <motion.div
        ref={cursorRef}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "open" : "closed"}
        className="absolute z-40 w-20 h-20 rounded-full bg-[#455CE9] text-white flex items-center justify-center font-bold text-xs pointer-events-none shadow-xl border border-white/20"
      >
      </motion.div>

      <motion.div
        ref={cursorLabelRef}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "open" : "closed"}
        className="absolute z-50 text-white font-syne font-bold text-xs uppercase tracking-wider pointer-events-none"
      >
        Ver
      </motion.div>
    </>
  );
}
