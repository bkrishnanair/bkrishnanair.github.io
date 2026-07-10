import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section
      id="home"
      className={styles.hero}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/college.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      <div className={styles.overlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.myHeading}>Balakrishna Nair</h1>
          <TypeAnimation
            sequence={['Software Engineer', 2000, "Master's Student @ UMD", 2000, 'Full-Stack Developer', 2000]}
            wrapper="h2"
            className={styles.subHeading}
            repeat={Infinity}
          />
          <p className={styles.bio}>
            A Master&apos;s student at the University of Maryland with 2 years of enterprise experience in building scalable and intelligent software systems.
          </p>
          <div className={styles.introButtons}>
            <a href="#contact" className={styles.btn + ' ' + styles.commonBtn}>Hire Me</a>
            <a
              href={process.env.PUBLIC_URL + '/Balakrishna Nair_Resume.pdf'}
              download
              className={styles.btn + ' ' + styles.ghostBtn}
            >
              Get Resume
            </a>
          </div>
          <div className={styles.heroName}>M.Eng in Software Engineering @ University of Maryland, College Park</div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 