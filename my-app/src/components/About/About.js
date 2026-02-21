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
            I am a Master of Engineering student in Software Engineering at the University of Maryland (Expected May 2026). With two years of enterprise experience as a Senior Software Engineer at Capgemini, I specialize in building reliable, highly scalable architectures and automating CI/CD pipelines.
          </p>
          <p>
            Currently, I am focused on bridging the gap between enterprise rigor and modern product development. I am passionate about engineering full-stack applications using Next.js, TypeScript, and AWS, and integrating emerging technologies like Generative AI (Gemini/Llama3) to solve real-world problems. I am a tenacious debugger, a fast learner, and an engineer who loves taking ownership of a product from the database to the deployment pipeline.
          </p>
          <h2 className={styles.subheading}>My Philosophy</h2>
          <p>
            I believe in building scalable and user-centric applications that make a meaningful impact.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About; 