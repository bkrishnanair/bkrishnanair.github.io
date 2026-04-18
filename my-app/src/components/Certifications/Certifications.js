import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaHackerrank } from 'react-icons/fa';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl font-outfit font-bold text-offwhite mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Certifications
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* AWS Certification Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-slate/30 backdrop-blur-xl border border-amber-500/30 rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_0_20px_rgba(245,158,11,0.1)]"
        >
          <div className="absolute top-4 right-4 px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-jakarta rounded-full uppercase tracking-wider font-bold border border-amber-500/30">
            In Progress
          </div>
          <div className="text-6xl text-amber-500 mb-6 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]">
            <FaAws />
          </div>
          <h3 className="text-2xl font-outfit font-bold text-offwhite mb-3">AWS Certified Solutions Architect</h3>
          <p className="text-offwhite/70 font-jakarta leading-relaxed">
            Associate (SAA-C03) <br />
            Target: May 2026
          </p>
        </motion.div>

        {/* HackerRank Certification Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-slate/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center"
        >
          <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/10 text-green-400 text-xs font-jakarta rounded-full uppercase tracking-wider border border-green-500/20 font-bold">
            Verified
          </div>
          <div className="text-6xl text-[#00EA64] mb-6 drop-shadow-[0_0_15px_rgba(0,234,100,0.3)]">
            <FaHackerrank />
          </div>
          <h3 className="text-2xl font-outfit font-bold text-offwhite mb-3">HackerRank Skill Certified</h3>
          <p className="text-offwhite/70 font-jakarta leading-relaxed">
            Python, JavaScript, REST API, SQL
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;
