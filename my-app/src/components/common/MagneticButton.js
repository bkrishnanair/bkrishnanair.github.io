import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './MagneticButton.module.css';

const MagneticButton = ({ children, className, ...props }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${styles.magneticButtonWrapper} ${className || ''}`}
    >
      <motion.button
        className={styles.magneticButton}
        {...props}
      >
        {children}
      </motion.button>
    </motion.div>
  );
};

export default MagneticButton;
