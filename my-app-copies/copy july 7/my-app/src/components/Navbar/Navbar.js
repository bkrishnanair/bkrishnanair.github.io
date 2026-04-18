import React, { useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  useEffect(() => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');
    const toggleMenu = () => {
      menu.classList.toggle('active');
    };
    hamburger.addEventListener('click', toggleMenu);
    return () => {
      hamburger.removeEventListener('click', toggleMenu);
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h2 className={styles.logoHeading}>Balakrishna Nair</h2>
        </div>
        <div className={styles.hamburger} id="hamburger">
          <i className="fas fa-bars hamburger-icon"></i>
          <i className="fas fa-times cross-icon"></i>
        </div>
        <div className={styles.menu + ' menu'}>
          <ul className={styles.menuList + ' menu-list'}>
            <li className={styles.menuListItems + ' menu-list-items'}>
              <a className={styles.links + ' links'} href="#home">Home</a>
            </li>
            <li className={styles.menuListItems + ' menu-list-items'}>
              <a className={styles.links + ' links'} href="#portfolio">Portfolio</a>
            </li>
            <li className={styles.menuListItems + ' menu-list-items'}>
              <a className={styles.links + ' links'} href="#about">About</a>
            </li>
            <li className={styles.menuListItems + ' menu-list-items'}>
              <a className={styles.links + ' links'} href="#services">Services</a>
            </li>
            <li className={styles.menuListItems + ' menu-list-items'}>
              <a className={styles.links + ' links'} href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 