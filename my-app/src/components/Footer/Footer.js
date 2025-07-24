import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.name}>Balakrishna Nair</div>
      <div className={styles.contactInfo}>
        <div className={styles.emailLinks}>
          <a href="mailto:balakrishnanair24@gmail.com" className={styles.emailLink}>
            <FaEnvelope /> balakrishnanair24@gmail.com (Personal)
          </a>
          <a href="mailto:bkrishna@umd.edu" className={styles.emailLink}>
            <FaEnvelope /> bkrishna@umd.edu (Academic)
          </a>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/bkrishnanair" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/bkrishnanair" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Balakrishna Nair. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
