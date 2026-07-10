import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDatabase, FaGitAlt, FaMicrosoft } from 'react-icons/fa';
import { SiMicrosoftazure, SiJavascript, SiHtml5, SiCss3, SiMongodb, SiCplusplus } from 'react-icons/si';
import styles from './Skills.module.css';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const skills = [
  { icon: <FaReact />, label: 'React' },
  { icon: <SiJavascript />, label: 'JavaScript' },
  { icon: <FaNodeJs />, label: 'Node.js' },
  { icon: <FaPython />, label: 'Python' },
  { icon: <FaAws />, label: 'AWS' },
  { icon: <SiMicrosoftazure />, label: 'Azure' },
  { icon: <FaDatabase />, label: 'SQL' },
  { icon: <SiMongodb />, label: 'MongoDB' },
  { icon: <FaGitAlt />, label: 'Git' },
  { icon: <SiHtml5 />, label: 'HTML5' },
  { icon: <SiCss3 />, label: 'CSS3' },
  { icon: <SiCplusplus />, label: 'C++' },
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
          <motion.div
            className={styles.skillCard}
            key={skill.label}
            whileHover={{
              scale: 1.08,
              boxShadow: '0 0 24px 0 rgba(212,175,55,0.18), 0 2px 12px rgba(0,0,0,0.10)'
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            <span className={styles.icon}>{skill.icon}</span>
            <span className={styles.label}>{skill.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills; 