import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCard = ({ value, label, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center text-center p-6 bg-slate/40 backdrop-blur-md border border-white/10 rounded-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-4xl md:text-5xl font-outfit font-extrabold text-cyan mb-2 drop-shadow-[0_0_10px_rgba(45,212,191,0.3)]">
        {value}
      </div>
      <div className="text-xl font-outfit font-bold text-offwhite mb-1">
        {label}
      </div>
      <div className="text-sm font-jakarta text-offwhite/60">
        {description}
      </div>
    </motion.div>
  );
};

const Stats = () => {
  const statsData = [
    { value: "2+", label: "Years Exp", description: "In Enterprise Engineering" },
    { value: "$100M+", label: "Processed", description: "Daily banking transactions" },
    { value: "20+", label: "Solutions", description: "Production deployments" },
    { value: "10+", label: "Projects", description: "Successfully shipped apps" },
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto -mt-16 relative z-30">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {statsData.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
