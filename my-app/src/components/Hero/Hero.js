import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ThreeDObject from './ThreeDObject';
import MagneticButton from '../common/MagneticButton';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image with Tuned Gradient Overlay for higher visibility */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/images/UMD_Fall.jpg'})`,
          y: backgroundY
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate/60 via-slate/85 to-[#000000] backdrop-blur-[1px]" />

      <motion.div
        className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-outfit font-extrabold text-offwhite tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Balakrishna Nair
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-outfit font-bold text-gold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Software Engineer
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl font-jakarta text-offwhite/80 max-w-2xl mt-4 mb-2 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Master's in Software Engineering at University of Maryland &mdash; graduating May 2026.
        </motion.p>

        <motion.p
          className="text-md md:text-lg font-jakarta text-offwhite/70 max-w-2xl mb-8 leading-relaxed italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Building reliable, scalable full-stack systems. 2+ years enterprise experience.
        </motion.p>

        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate/50 border border-green-500/30 text-green-400 font-jakarta text-sm font-semibold mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
          Available for full-time roles starting June 15, 2026
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a
            href={process.env.PUBLIC_URL + '/Balakrishna Nair_Resume.pdf'}
            download="Balakrishna_Nair_Resume.pdf"
            className="px-6 py-3 rounded-full bg-cyan text-slate font-bold font-jakarta text-lg transition-all hover:bg-offwhite hover:text-cyan shadow-[0_0_20px_rgba(45,212,191,0.5)] hover:shadow-[0_0_30px_rgba(45,212,191,0.8)] inline-block"
          >
            Download Resume (PDF)
          </a>

          <MagneticButton
            className="px-6 py-3 rounded-full bg-transparent border border-cyan text-cyan font-bold font-jakarta text-lg transition-colors hover:bg-cyan hover:text-slate"
            onClick={() => { document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            View Projects
          </MagneticButton>

          <MagneticButton
            className="px-6 py-3 rounded-full bg-transparent border border-white/20 text-offwhite font-bold font-jakarta text-lg transition-colors hover:bg-white/10"
            onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Get in Touch
          </MagneticButton>
        </motion.div>

        <motion.div
          className="flex gap-6 mt-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <a href="https://www.linkedin.com/in/bkrishnanair" target="_blank" rel="noreferrer" className="text-cyan/80 hover:text-cyan transition-colors underline font-jakarta text-sm uppercase tracking-wider">LinkedIn</a>
          <a href="https://github.com/bkrishnanair" target="_blank" rel="noreferrer" className="text-cyan/80 hover:text-cyan transition-colors underline font-jakarta text-sm uppercase tracking-wider">GitHub</a>
          <a href="mailto:bkrishna@umd.edu" className="text-cyan/80 hover:text-cyan transition-colors underline font-jakarta text-sm uppercase tracking-wider">Email</a>
        </motion.div>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 z-[15] opacity-30 pointer-events-none">
        <ThreeDObject />
      </div>
    </section>
  );
};

export default Hero; 