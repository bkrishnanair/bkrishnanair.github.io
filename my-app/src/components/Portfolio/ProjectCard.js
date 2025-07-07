import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' } })
};

const ProjectCard = ({ title, image, tags, shortDesc, onClick, index }) => {
  return (
    <motion.div
      className={styles.card}
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={{
        scale: 1.045,
        boxShadow: '0 0 40px 0 rgba(212,175,55,0.22), 0 2px 16px rgba(0,0,0,0.13)',
        borderColor: '#D4AF37',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${title}`}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onClick()}
    >
      <div className={styles.cardImageWrap}>
        <picture>
          <source srcSet={image.replace(/\.(jpg|png)$/i, '.webp')} type="image/webp" />
          <img src={image} alt={title} className={styles.cardImage} loading="lazy" width="320" height="200" />
        </picture>
        <div className={styles.gradientOverlay}></div>
        <motion.button
          className={styles.detailsBtn}
          tabIndex={-1}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.98 }}
        >
          View Details
        </motion.button>
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{shortDesc}</p>
        <div className={styles.tags}>
          {tags.map((tag, idx) => (
            <span key={idx} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(ProjectCard); 