import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // Transition smoothly on scroll
  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(18, 18, 18, 0)', 'rgba(18, 18, 18, 0.6)']
  );
  const navBackdropBlur = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  );
  const navPadding = useTransform(
    scrollY,
    [0, 50],
    ['1.5rem', '0.75rem']
  );
  const navBorder = useTransform(
    scrollY,
    [0, 50],
    ['none', '1px solid rgba(255, 255, 255, 0.1)']
  );

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Close mobile menu on resize
    const handleResize = () => {
      if (window.innerWidth > 900) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 md:px-8 mt-4"
    >
      <motion.nav
        style={{
          backgroundColor: navBackground,
          backdropFilter: navBackdropBlur,
          paddingTop: navPadding,
          paddingBottom: navPadding,
          border: navBorder
        }}
        className="flex items-center justify-between w-full max-w-5xl rounded-full px-6 transition-all duration-300 ease-in-out"
      >
        <div className="flex-shrink-0">
          <h2 className="text-xl md:text-2xl font-outfit font-bold tracking-widest text-gold drop-shadow-md cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            Balakrishna Nair
          </h2>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-offwhite font-medium hover:text-cyan transition-colors text-sm uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-offwhite hover:text-cyan focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-24 left-4 right-4 bg-slate border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-6 md:hidden backdrop-blur-xl bg-opacity-95"
        >
          {['Home', 'About', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-offwhite font-medium hover:text-cyan transition-colors text-lg"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar; 