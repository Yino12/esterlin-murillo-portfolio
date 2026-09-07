import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : 'auto';
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <NavMenu isOpen={isNavOpen} setIsOpen={setIsNavOpen} />

      <main>
        <Hero />
        <WorkSection />
        <Services />
        <About />
        <Footer />
      </main>
    </>
  );
}
