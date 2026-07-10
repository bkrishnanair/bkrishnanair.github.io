import React from 'react';
import styles from './About.module.css';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import resumeData from '../../data/resume.json';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } });
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="about"
      className={styles.about}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
    >
      <div className={styles.aboutContainer}>
        <motion.div
          className={styles.aboutImage}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 1.03 }}
        >
          <div className={styles.imageOverlay}></div>
          <picture>
            <img src={process.env.PUBLIC_URL + '/images/me.jpg'} alt="Balakrishna Nair" loading="lazy" width="320" height="400" />
          </picture>
        </motion.div>
        <div className={styles.aboutText}>
          <h1 className={styles.myHeading}>About Me</h1>
          {resumeData.about.paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About; 