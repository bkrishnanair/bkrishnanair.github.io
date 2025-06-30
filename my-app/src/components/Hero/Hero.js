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
          <h3 className={styles.greetHeading}>Hello, I'm</h3>
          <h1 className={styles.myHeading}>Balakrishna Nair</h1>
          <TypeAnimation
            sequence={['Full Stack Developer', 2000, 'Software Engineer', 2000, 'React Enthusiast', 2000]}
            wrapper="h4"
            className={styles.subHeading}
            repeat={Infinity}
          />
          <p className={styles.bio}>A Software Engineer with 2 years of Experience.</p>
          <div className={styles.introButtons}>
            {/* <button className={styles.btn + ' ' + styles.commonBtn}>Hire Me</button> */}
            <a
              href={process.env.PUBLIC_URL + '/Balakrishna Nair_Resume.pdf'}
              download
              className={styles.btn + ' ' + styles.commonBtn}
            >
              Get Resume
            </a>
          </div>
          <div className={styles.heroName}>M.Eng in Software Engineering @ University of Maryland, CollegePark</div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 