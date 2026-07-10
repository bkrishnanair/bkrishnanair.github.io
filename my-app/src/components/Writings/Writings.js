import React from 'react';
import styles from './Writings.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Writings = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="writings" className={styles.writings}>
      <div className={styles.writingsHeading}>
        <h1 className={styles.myHeading}>Writings & Articles</h1>
      </div>
      <motion.div
        className={styles.contentContainer}
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p>This section is under construction. Please check back soon for technical articles and insights!</p>
        {/* You can add placeholders for articles here, e.g.: */}
        {/* <div className={styles.articlePlaceholder}>Coming Soon: Mastering React Hooks</div> */}
        {/* <div className={styles.articlePlaceholder}>Coming Soon: Advanced CI/CD Strategies</div> */}
      </motion.div>
    </section>
  );
};

export default Writings;
