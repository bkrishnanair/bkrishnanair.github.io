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
        <p className={styles.leadPara}>
          Hi, I'm Balakrishna Nair, a passionate software engineer and current Master's student in Software Engineering at the University of Maryland, College Park. With a solid foundation in backend development from my time at Capgemini and hands-on experience building scalable, user-centric applications, I thrive on creating innovative solutions to complex problems.
        </p>
        <p>
          My expertise spans a range of technologies, including Python, Java, JavaScript, and SQL, complemented by experience in frameworks like Spring Boot and ReactJS. I'm deeply interested in leveraging AI and machine learning to enhance software functionality, as demonstrated by my recent projects integrating AI-driven features.
        </p>
        <p>
          Beyond coding, I enjoy collaborating in diverse teams, tackling challenges head-on, and continuously learning to stay at the forefront of technology. When I'm not working on projects, you'll find me exploring the latest in tech, engaging in sports, or listening to energizing music to fuel my creativity.
          <br />
          Let's connect and create something impactful!
        </p>
      </div>
      <div className={styles.aboutImage}>
        <img src={process.env.PUBLIC_URL + '/images/me.jpg'} alt="Balakrishna Nair" />
      </div>
    </motion.section>
  );
};

export default About; 