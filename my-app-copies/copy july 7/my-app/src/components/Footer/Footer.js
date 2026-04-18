import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.name}>Balakrishna Nair</div>
      <div className={styles.socialLinks}>
        <a href="mailto:bkrishna@umd.edu" target="_blank" rel="noopener noreferrer" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/bkrishnanair" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/bkrishnanair" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      </div>
      <div className={styles.copyright}>
        © 2025 Balakrishna Nair. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer; 