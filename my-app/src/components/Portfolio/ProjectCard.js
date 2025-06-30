import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ image, title, link }) => (
  <motion.div
    className={styles.card}
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <img src={image} alt={title} className={styles.image} />
    <div className={styles.overlay}>
      <h3 className={styles.title}>{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.button}>
        View More
      </a>
    </div>
  </motion.div>
);

export default ProjectCard; 