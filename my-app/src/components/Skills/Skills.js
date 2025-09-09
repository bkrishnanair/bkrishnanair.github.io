import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiMongodb, SiCplusplus } from 'react-icons/si';
import styles from './Skills.module.css';
import { motion } from 'framer-motion';

const skills = [
  { icon: <FaReact />, label: 'React' },
  { icon: <SiJavascript />, label: 'JavaScript' },
  { icon: <FaNodeJs />, label: 'Node.js' },
  { icon: <FaPython />, label: 'Python' },
  { icon: <FaAws />, label: 'AWS' },
  { icon: <FaDatabase />, label: 'SQL' },
  { icon: <SiMongodb />, label: 'MongoDB' },
  { icon: <FaGitAlt />, label: 'Git' },
  { icon: <SiHtml5 />, label: 'HTML5' },
  { icon: <SiCss3 />, label: 'CSS3' },
  { icon: <SiCplusplus />, label: 'C++' },
];

const SkillCard = React.memo(({ icon, label }) => (
  <motion.div
    className={styles.skillCard}
    whileHover={{
      scale: 1.08,
      boxShadow: '0 0 24px 0 rgba(212,175,55,0.18), 0 2px 12px rgba(0,0,0,0.10)'
    }}
    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
  >
    <span className={styles.icon}>{icon}</span>
    <span className={styles.label}>{label}</span>
  </motion.div>
));

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </section>
  );
};

export default Skills; 