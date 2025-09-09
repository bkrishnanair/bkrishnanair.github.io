import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Preloader from './components/Preloader/Preloader';
import { AnimatePresence } from 'framer-motion';
import './style.css';
import './responsive.css';

const About = React.lazy(() => import('./components/About/About'));
const Experience = React.lazy(() => import('./components/Experience/Experience'));
const Skills = React.lazy(() => import('./components/Skills/Skills'));
const Portfolio = React.lazy(() => import('./components/Portfolio/Portfolio'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const CallToAction = React.lazy(() => import('./components/CallToAction/CallToAction'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));

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
          <Suspense fallback={<div />}>
            <About />
            <Experience />
            <Skills />
            <Portfolio />
            <Contact />
            <CallToAction />
            <Footer />
          </Suspense>
        </>
      )}
    </>
  );
}

export default App;
