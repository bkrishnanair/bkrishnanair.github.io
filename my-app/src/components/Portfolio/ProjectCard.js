import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ image, title, tags, onClick }) => (
  <motion.div
    className={styles.card}
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
    onClick={onClick}
    tabIndex={0}
    role="button"
    style={{ cursor: 'pointer' }}
  >
    <img src={image} alt={title} className={styles.image} />
    <div className={styles.overlay}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.tags}>
        {tags && tags.map((tag, idx) => (
          <span className={styles.tagPill} key={idx}>{tag}</span>
        ))}
      </div>
      <span className={styles.button}>View Details</span>
    </div>
  </motion.div>
);

export default ProjectCard; 