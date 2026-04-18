import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillCategories = {
  Languages: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'SQL'],
  Frontend: ['React', 'Next.js 15', 'Tailwind CSS', 'Framer Motion', 'Jest'],
  Backend: ['Node.js', 'Django', 'Spring Boot', 'REST APIs', 'GraphQL'],
  'Cloud & DevOps': ['AWS', 'GCP', 'Firebase', 'Docker', 'Jenkins', 'CI/CD', 'Git'],
  Databases: ['PostgreSQL', 'MongoDB', 'Cloud Firestore', 'Redis'],
  'AI & Data': ['Gemini', 'Llama3', 'LangChain', 'Pandas'],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Languages');

  return (
    <section id="skills" className="py-32 px-4 md:px-8 max-w-4xl mx-auto min-h-[500px]">
      <motion.h2
        className="text-4xl md:text-5xl font-outfit font-bold text-offwhite mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Tech I Work With
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {Object.keys(skillCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-5 py-2 rounded-full font-jakarta font-semibold text-sm transition-all duration-300 ${
              activeTab === category 
                ? 'bg-cyan text-slate shadow-[0_0_15px_rgba(45,212,191,0.5)]' 
                : 'bg-white/5 border border-white/10 text-offwhite/80 hover:bg-white/10 hover:text-offwhite'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {skillCategories[activeTab].map((skill, idx) => (
            <motion.div
              key={skill}
              custom={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(45,212,191,0.5)', boxShadow: '0 0 15px rgba(45,212,191,0.2)' }}
              className="flex items-center justify-center text-center bg-slate/30 backdrop-blur-xl border border-white/5 rounded-2xl p-5 cursor-default transition-colors"
            >
              <span className="text-offwhite font-jakarta font-medium">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;