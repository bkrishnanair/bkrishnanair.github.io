import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaJava } from 'react-icons/fa';
import styles from './Skills.module.css';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Java', icon: <FaJava /> },
];

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } });
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="skills"
      className={styles.skills}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
    >
      <div className={styles.skillsHeading}>
        <h1 className={styles.myHeading}>Skills</h1>
      </div>
      <div className={styles.skillsGrid}>
        {skills.map((skill, idx) => (
          <div className={styles.skillCard} key={idx}>
            <div className={styles.icon}>{skill.icon}</div>
            <div className={styles.skillName}>{skill.name}</div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills; 