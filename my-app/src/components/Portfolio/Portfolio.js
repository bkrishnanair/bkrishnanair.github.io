import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const Portfolio = ({ projects }) => {
  return (
    <section id="portfolio" className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <motion.h1
          className="text-4xl md:text-5xl font-outfit font-bold text-offwhite text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Portfolio
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            {...project}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio; 