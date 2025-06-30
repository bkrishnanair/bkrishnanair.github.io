import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import './style.css';
import './responsive.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      {/* Footer section (to be modularized later) */}
      <footer className="footer">
        <div className="footer-content text-center">
          <div className="social-links">
            <div className="footer-menu">
              <ul className="footer-menu-list">
                <li className="footer-list-items">
                  <a className="footer-links" href="https://www.facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="footer-list-items">
                  <a className="footer-links" href="https://www.twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="footer-list-items">
                  <a className="footer-links" href="https://www.instagram.com">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="footer-list-items">
                  <a className="footer-links" href="https://www.linkedin.com">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
