import React from 'react';
import styles from './Portfolio.module.css';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Portfolio = ({ projects }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.portfolioHeading}>
        <h1 className={styles.myHeading}>Portfolio</h1>
      </div>
      <motion.div
        className={styles.projectsGrid}
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            {...project}
            index={idx}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio; 