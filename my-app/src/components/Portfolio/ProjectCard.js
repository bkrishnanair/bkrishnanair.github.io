import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' } })
};

const ProjectCard = ({ title, image, tags, shortDesc, index }) => {
  const projectPath = `/project/${title.toLowerCase().replace(/[^a-z0-9]+/g, '')}`;

  return (
    <Link
      to={projectPath}
      className="block outline-none"
      tabIndex={-1}
    >
      <motion.div
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={cardVariants}
        whileHover={{
          scale: 1.03,
          boxShadow: '0 0 35px 0 rgba(45,212,191,0.3), 0 10px 25px rgba(0,0,0,0.5)',
          borderColor: 'rgba(45,212,191,0.6)',
          y: -10,
          transition: { type: 'spring', stiffness: 400, damping: 25 }
        }}
        className="group relative flex flex-col h-full bg-slate/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden cursor-pointer"
        tabIndex={0}
      >
        <div className="relative w-full h-56 overflow-hidden">
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
          <div className="flex-grow">
            <h3 className="text-2xl font-outfit font-bold text-offwhite mb-3 group-hover:text-gold transition-colors">{title}</h3>
            <p className="text-offwhite/70 font-jakarta mb-6 leading-relaxed">{shortDesc}</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto">
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
        </div>
      </motion.div>
    </Link>
  );
};

export default React.memo(ProjectCard); 