import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' } })
};

const ProjectCard = ({ title, image, tags, shortDesc, liveUrl, githubUrl, isFeatured, index }) => {
  // Extract base title for the URL if it contains a dash (e.g. "Huddle - Community OS" -> "Huddle")
  const baseTitle = title.split(' - ')[0];
  const projectPath = `/project/${baseTitle.toLowerCase().replace(/[^a-z0-9]+/g, '')}`;

  return (
    <motion.div
      custom={index}
      initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={cardVariants}
        whileHover={{
          scale: 1.02,
          boxShadow: '0 0 35px 0 rgba(45,212,191,0.25), 0 10px 25px rgba(0,0,0,0.5)',
          borderColor: 'rgba(45,212,191,0.5)',
          transition: { type: 'spring', stiffness: 400, damping: 25 }
        }}
        className={`group relative flex flex-col h-full bg-slate/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden ${isFeatured ? 'md:flex-row md:col-span-2 lg:col-span-2 lg:h-[400px]' : ''}`}
      >
        <div className={`relative overflow-hidden shrink-0 ${isFeatured ? 'w-full md:w-1/2 h-56 md:h-full' : 'w-full h-56'}`}>
          <picture>
            <source srcSet={image.replace(/\.(jpg|png)$/i, '.webp')} type="image/webp" />
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-slate/90 to-transparent" />
          <motion.div
            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4"
          >
            <span className="px-6 py-2 bg-cyan text-slate font-bold font-jakarta rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              View Details
            </span>
          </motion.div>
        </div>

        <div className="flex flex-col flex-grow p-6 md:p-8">
            <h3 className="text-2xl font-outfit font-bold text-offwhite mb-2 group-hover:text-gold transition-colors flex items-center gap-2">
              {title}
              {isFeatured && <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs font-jakarta rounded-full uppercase tracking-wider font-bold border border-red-500/30">Live</span>}
            </h3>
            <p className="text-offwhite/70 font-jakarta mb-6 leading-relaxed flex-grow">{shortDesc}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, idx) => (
              <motion.span
                key={idx}
                className="px-3 py-1 bg-white/5 border border-white/10 text-cyan text-xs font-jakarta font-medium rounded-full inline-block"
                variants={{
                  hover: { y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-4 border-t border-white/5">
            {liveUrl && (
              <a href={liveUrl} target={liveUrl.startsWith('#') ? "_self" : "_blank"} rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-cyan/10 hover:bg-cyan text-cyan hover:text-slate font-jakarta font-semibold text-sm rounded-full transition-colors">
                <FaExternalLinkAlt size={12} /> Live Demo
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-offwhite font-jakarta font-semibold text-sm rounded-full transition-colors border border-white/10">
                <FaGithub size={14} /> Source
              </a>
            )}
            <Link to={projectPath} className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-gold/20 text-gold font-jakarta font-semibold text-sm rounded-full transition-colors border border-gold/30 ml-auto">
              <FaInfoCircle size={14} /> Case Study
            </Link>
          </div>
        </div>
      </motion.div>
  );
};

export default React.memo(ProjectCard); 