import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styles from './Hero.module.css';
import ThreeDObject from './ThreeDObject';
import MagneticButton from '../common/MagneticButton'; // Import MagneticButton

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
            sequence={['Software Engineer', 2000, 'Scalable Systems Specialist', 2000, 'Full-Stack Developer', 2000]}
            wrapper="h2"
            className={styles.subHeading}
            repeat={Infinity}
          />
          <p className={styles.bio}>
            A Master&apos;s student at the University of Maryland with 2 years of enterprise experience in building scalable and intelligent software systems.
          </p>
          <div className={styles.introButtons}>
            <MagneticButton className={styles.btn + ' ' + styles.commonBtn} onClick={() => window.location.href='#contact'}>Hire Me</MagneticButton>
            <MagneticButton
              className={styles.btn + ' ' + styles.ghostBtn}
              onClick={() => window.open(process.env.PUBLIC_URL + '/Balakrishna Nair_Resume.pdf', '_blank')}
            >
              Get Resume
            </MagneticButton>
          </div>
          <div className={styles.heroName}>M.Eng in Software Engineering @ University of Maryland, College Park</div>
        </div>
      </div>
      <div className={styles.threeDContainer}>
        <ThreeDObject />
      </div>
    </section>
  );
};

export default Hero; 