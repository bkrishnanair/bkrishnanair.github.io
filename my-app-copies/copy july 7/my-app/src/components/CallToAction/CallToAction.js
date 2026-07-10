import React from 'react';
import styles from './CallToAction.module.css';

const CallToAction = () => (
  <section className={styles.ctaSection}>
    <h2 className={styles.ctaHeading}>
      Have a project in mind? <br /> Let's build something great together.
    </h2>
    <a href="#contact" className={styles.ctaButton}>
      Get in Touch
    </a>
  </section>
);

export default CallToAction; 