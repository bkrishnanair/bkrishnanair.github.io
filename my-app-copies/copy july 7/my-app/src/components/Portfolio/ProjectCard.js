import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      className={styles.card}
      whileHover={{
        scale: 1.04,
        boxShadow: '0 0 32px 0 rgba(212,175,55,0.18), 0 2px 16px rgba(0,0,0,0.13)'
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
    >
      <div className={styles.cardContent}>
        <img src={project.image} alt={project.title} className={styles.cardImage} />
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <div className={styles.tags}>
            {project.tags.map((tag, idx) => (
              <span key={idx} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <p className={styles.cardDesc}>{project.shortDesc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 