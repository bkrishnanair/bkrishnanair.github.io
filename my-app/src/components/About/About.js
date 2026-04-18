import React from 'react';
import styles from './About.module.css';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

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
          <p>
            I'm a Software Engineer completing my Master's in Software Engineering at the University of Maryland (graduating May 2026). I bring 2 years of prior enterprise experience from Capgemini Technology Services, where I architected high-volume banking integration systems processing daily transactions for MUFG Bank.
          </p>
          <p>
            My engineering philosophy sits at the intersection of enterprise rigor and modern product velocity. I specialize in building reliable, scalable full-stack applications using Next.js, TypeScript, and cloud platforms (AWS, GCP, Firebase), while integrating emerging technologies like Generative AI (Gemini, Llama3) to solve real-world problems.
          </p>
          <p>
            I'm a tenacious debugger, a fast learner, and an engineer who takes ownership from the database schema to the deployment pipeline. Currently open to full-time Software Engineering roles starting June 2026.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About; 