import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';
import { AnimatePresence } from 'framer-motion';
import './style.css';
import './responsive.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Portfolio />
          <Contact />
          <CallToAction />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
