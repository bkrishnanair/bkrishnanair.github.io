import React from 'react';
import styles from './Portfolio.module.css';
import ProjectCard from './ProjectCard';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const projects = [
  {
    image: process.env.PUBLIC_URL + '/images/admindb.png',
    title: 'Admin Database',
    link: '#',
  },
  {
    image: process.env.PUBLIC_URL + '/images/challenge.png',
    title: 'Challenge App',
    link: '#',
  },
  {
    image: process.env.PUBLIC_URL + '/images/college.jpg',
    title: 'College Portal',
    link: '#',
  },
  {
    image: process.env.PUBLIC_URL + '/images/lessons learnt.png',
    title: 'Lessons Learnt',
    link: '#',
  },
];

const Portfolio = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } });
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="portfolio"
      className={styles.portfolio}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
    >
      <div className={styles.portfolioHeading}>
        <h1 className={styles.myHeading}>Portfolio</h1>
      </div>
      <div className={styles.projectsGrid}>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio; 