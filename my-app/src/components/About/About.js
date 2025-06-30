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
      <div className={styles.aboutText}>
        <h1 className={styles.myHeading}>About Me</h1>
        <p>
          I am Balakrishna Nair Nalivalapil, a Master of Engineering student in Software Engineering at the University of Maryland, College Park, with an anticipated graduation date in May 2026. With two years of professional experience as a Senior Software Engineer at Capgemini, I specialize in middleware integration, automation pipelines, and scalable software systems.
        </p>
        <p>
          Currently, I am deepening my expertise in React-based frontend development and Azure cloud platforms. I am passionate about building robust and user-friendly applications that solve real-world problems and continuously seek opportunities to enhance my skills in full stack development, data analytics, and IoT.
        </p>
        <h2 className={styles.subheading}>My Philosophy</h2>
        <p>
          I believe in building scalable and user-centric applications that make a meaningful impact.
        </p>
      </div>
      <div className={styles.aboutImage}>
        <img src={process.env.PUBLIC_URL + '/images/me.jpg'} alt="Balakrishna Nair" />
      </div>
    </motion.section>
  );
};

export default About; 