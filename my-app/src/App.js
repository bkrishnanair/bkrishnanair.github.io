import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Preloader from './components/Preloader/Preloader';
import ProjectCaseStudy from './components/Portfolio/ProjectCaseStudy';
import Stats from './components/Stats/Stats';
import { AnimatePresence } from 'framer-motion';
import './style.css';
import './responsive.css';
import HuddleShowcase from './components/HuddleShowcase/HuddleShowcase';
import resumeData from './data/resume.json';

const About = React.lazy(() => import('./components/About/About'));
const Experience = React.lazy(() => import('./components/Experience/Experience'));
const Certifications = React.lazy(() => import('./components/Certifications/Certifications'));
const Skills = React.lazy(() => import('./components/Skills/Skills'));
const Portfolio = React.lazy(() => import('./components/Portfolio/Portfolio'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const CallToAction = React.lazy(() => import('./components/CallToAction/CallToAction'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));

const { projects } = resumeData;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AnimatePresence>
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      {!loading && (
        <>
          <Navbar />
          <Suspense fallback={<div />}>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Experience />
                  <Stats />
                  <Certifications />
                  <Skills />
                  <HuddleShowcase />
                  <Portfolio projects={projects} />
                  <Contact />
                  <CallToAction />
                  <Footer />
                </>
              } />
              <Route path="/project/:projectName" element={<ProjectCaseStudy projects={projects} />} />
            </Routes>
          </Suspense>
        </>
      )}
    </Router>
  );
}

export default App;