import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Capgemini',
    dates: 'Oct 2022 – Sep 2024',
    bullets: [
      'Promoted to Senior Software Engineer within 18 months.',
      'Designed and deployed 20+ integration solutions for MUFG Bank using IBM Integration Bus, securely processing high-volume transactions exceeding $100M daily.',
      'Enhanced system observability and logging strategies, achieving a 25% reduction in post-deployment errors.',
      'Architected CI/CD pipelines using Jenkins and Python, which accelerated release cycles and reduced feature integration time by 30%.'
    ]
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-32 px-4 md:px-8 max-w-5xl mx-auto relative" id="experience" ref={containerRef}>
      <motion.h1
        className="text-4xl md:text-5xl font-outfit font-bold text-offwhite mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Professional Experience
      </motion.h1>

      <div className="relative">
        {/* The glowing line */}
        <div className="absolute left-6 md:left-10 top-0 bottom-0 w-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-cyan shadow-[0_0_15px_#2DD4BF] origin-top h-full"
            style={{ scaleY: pathLength }}
          />
        </div>

        <div className="flex flex-col gap-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative pl-16 md:pl-24"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.2 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-[2.1rem] top-[1.2rem] transform -translate-x-1/2 w-5 h-5 rounded-full bg-slate border-4 border-cyan z-10 shadow-[0_0_10px_rgba(45,212,191,0.5)]" />

              <motion.div
                whileHover={{
                  scale: 1.02,
                  x: 10,
                  boxShadow: '0 0 35px 0 rgba(45,212,191,0.25), 0 10px 25px rgba(0,0,0,0.4)',
                  borderColor: 'rgba(45,212,191,0.5)',
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
                className="bg-slate/30 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8 cursor-default"
              >
                <h2 className="text-2xl font-outfit font-bold text-gold mb-1">{exp.role}</h2>
                <h3 className="text-xl font-outfit text-offwhite/90 mb-2">{exp.company}</h3>
                <span className="inline-block text-cyan font-jakarta text-sm uppercase tracking-wider font-semibold mb-6">{exp.dates}</span>
                <ul className="space-y-3">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="text-offwhite/80 font-jakarta leading-relaxed flex items-start gap-3">
                      <span className="text-cyan mt-1 opacity-80">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 