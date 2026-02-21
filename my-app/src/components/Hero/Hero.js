import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
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

        <motion.div
          className="text-2xl md:text-4xl font-outfit font-bold text-gold mb-8 h-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <TypeAnimation
            sequence={['Software Engineer', 2000, 'Full-Stack Developer', 2000]}
            wrapper="span"
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          className="text-lg md:text-xl font-jakarta text-offwhite/80 max-w-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A Master's student at the University of Maryland with 2 years of enterprise experience in building scalable and intelligent software systems.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <MagneticButton
            className="px-8 py-3 rounded-full bg-cyan text-slate font-bold font-jakarta text-lg transition-all hover:bg-offwhite hover:text-cyan shadow-[0_0_20px_rgba(45,212,191,0.5)] hover:shadow-[0_0_30px_rgba(45,212,191,0.8)]"
            onClick={() => window.open('https://www.linkedin.com/in/bkrishnanair', '_blank')}
          >
            LinkedIn
          </MagneticButton>

          <MagneticButton
            className="px-8 py-3 rounded-full bg-transparent border-2 border-cyan text-cyan font-bold font-jakarta text-lg transition-colors hover:bg-cyan hover:text-slate"
            onClick={() => window.open('https://drive.google.com/drive/folders/1VoKsNrn7fdTpcnJuDrtM8dOyr-5OiZPJ?usp=drive_link', '_blank')}
          >
            Get Resume
          </MagneticButton>
        </motion.div>

        <motion.div
          className="text-sm md:text-base font-jakarta font-semibold text-cyan/90 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          M.Eng in Software Engineering @ University of Maryland, College Park
        </motion.div>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 z-[15] opacity-30 pointer-events-none">
        <ThreeDObject />
      </div>
    </section>
  );
};

export default Hero; 