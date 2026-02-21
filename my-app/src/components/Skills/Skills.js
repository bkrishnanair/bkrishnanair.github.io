import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiNextdotjs, SiTerraform, SiFirebase } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { icon: <FaReact />, label: 'React' },
  { icon: <SiNextdotjs />, label: 'Next.js' },
  { icon: <SiTypescript />, label: 'TypeScript' },
  { icon: <SiJavascript />, label: 'JavaScript' },
  { icon: <FaNodeJs />, label: 'Node.js' },
  { icon: <FaPython />, label: 'Python' },
  { icon: <FaAws />, label: 'AWS' },
  { icon: <SiTerraform />, label: 'Terraform' },
  { icon: <FaDocker />, label: 'Docker' },
  { icon: <SiFirebase />, label: 'Firebase' },
  { icon: <FaDatabase />, label: 'SQL' },
  { icon: <FaGitAlt />, label: 'CI/CD & Git' },
];

const SkillCard = React.memo(({ icon, label, index }) => (
  <motion.div
    custom={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    whileHover={{
      scale: 1.08,
      boxShadow: '0 0 24px 0 rgba(45,212,191,0.2), 0 2px 12px rgba(0,0,0,0.3)',
      borderColor: 'rgba(45,212,191,0.5)',
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    }}
    className="flex flex-col items-center justify-center gap-3 bg-slate/30 backdrop-blur-xl border border-white/5 rounded-2xl p-6 transition-colors hover:bg-slate/50 cursor-default"
  >
    <span className="text-4xl text-cyan drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]">{icon}</span>
    <span className="text-offwhite font-jakarta font-medium">{label}</span>
  </motion.div>
));

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl font-outfit font-bold text-offwhite mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, idx) => (
          <SkillCard key={skill.label} icon={skill.icon} label={skill.label} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Skills; 