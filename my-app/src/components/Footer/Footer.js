import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const Footer = () => {
  const lastUpdated = "April 2026"; // Dynamic placeholder, or statically defined per the build

  return (
    <footer className="w-full bg-black/50 border-t border-white/10 py-12 mt-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center">
        
        <h2 className="text-3xl font-outfit font-bold text-gold mb-6 text-center">
          Balakrishna Nair
        </h2>

        <div className="flex gap-6 mb-8">
          <a href="mailto:bkrishna@umd.edu" className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-cyan hover:text-slate border border-white/10 rounded-full transition-all text-offwhite">
            <FaEnvelope size={20} />
          </a>
          <a href="https://www.linkedin.com/in/bkrishnanair" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-cyan hover:text-slate border border-white/10 rounded-full transition-all text-offwhite">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/bkrishnanair" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-cyan hover:text-slate border border-white/10 rounded-full transition-all text-offwhite">
            <FaGithub size={20} />
          </a>
          <a href={process.env.PUBLIC_URL + '/Balakrishna Nair_Resume.pdf'} download="Balakrishna_Nair_Resume.pdf" title="Download Resume" className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-cyan hover:text-slate border border-white/10 rounded-full transition-all text-offwhite">
            <FaFileDownload size={20} />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-2xl text-offwhite/50 font-jakarta text-sm">
          <div>© {new Date().getFullYear()} Balakrishna Nair. All rights reserved.</div>
          <div className="mt-2 md:mt-0">Last updated: {lastUpdated}</div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
