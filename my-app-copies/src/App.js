import './style.css';
import './responsive.css';

function App() {
  return (
    <>
      {/* Navbar header section */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <h2 className="logo-heading">Balakrishna Nair</h2>
          </div>
          <div className="hamburger" id="hamburger">
            <i className="fas fa-bars hamburger-icon"></i>
            <i className="fas fa-times cross-icon"></i>
          </div>
          <div className="menu">
            <ul className="menu-list">
              <li className="menu-list-items">
                <a className="links" href="#home">Home</a>
              </li>
              <li className="menu-list-items">
                <a className="links" href="#portfolio">Portfolio</a>
              </li>
              <li className="menu-list-items">
                <a className="links" href="#about">About</a>
              </li>
              <li className="menu-list-items">
                <a className="links" href="#services">Services</a>
              </li>
              <li className="menu-list-items">
                <a className="links" href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main hero banner */}
      <section id="home" className="hero">
        <div className="intro">
          <div className="headings">
            <h3 className="greet-heading">Hello, I'm</h3>
            <h1 className="my-heading">Balakrishna Nair</h1>
            <h4 className="sub-heading">A Software Engineer with 2 years of Experience.</h4>
          </div>
          <div className="intro-buttons">
            {/* <button className="btn common-btn">Hire Me</button> */}
            <a href={process.env.PUBLIC_URL + '/Balakrishna Nair_Resume.pdf'} download className="btn ghost-btn">Get Resume</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-text">
          <h1 className="my-heading">About Me</h1>
          <p className="lead-para">
            Hi, I'm Balakrishna Nair, a passionate software engineer and current Master's student in Software Engineering at the University of Maryland, College Park. With a solid foundation in backend development from my time at Capgemini and hands-on experience building scalable, user-centric applications, I thrive on creating innovative solutions to complex problems. 
          </p>
          <p>
            My expertise spans a range of technologies, including Python, Java, JavaScript, and SQL, complemented by experience in frameworks like Spring Boot and ReactJS. I'm deeply interested in leveraging AI and machine learning to enhance software functionality, as demonstrated by my recent projects integrating AI-driven features.
          </p>
          <p>
            Beyond coding, I enjoy collaborating in diverse teams, tackling challenges head-on, and continuously learning to stay at the forefront of technology. When I'm not working on projects, you'll find me exploring the latest in tech, engaging in sports, or listening to energizing music to fuel my creativity.
            <br />
            Let's connect and create something impactful!
          </p>
        </div>
        <div className="about-image">
          <img src="/images/me.jpg" alt="About Image" />
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="services-heading">
          <h1 className="my-heading text-center">My Services</h1>
        </div>
        <div className="services-content">
          <div className="my-row">
            <div className="my-col">
              <div className="my-card">
                <div className="icon">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3 className="greet-heading blue-text">Web Design</h3>
                <p className="small-para">Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.</p>
                <p className="small-para">Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.</p>
              </div>
            </div>
            <div className="my-col">
              <div className="my-card">
                <div className="icon">
                  <i className="fa-solid fa-code"></i>
                </div>
                <h3 className="greet-heading blue-text">Web Development</h3>
                <p className="small-para">Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.</p>
                <p className="small-para">Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.</p>
              </div>
            </div>
            <div className="my-col">
              <div className="my-card">
                <div className="icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="greet-heading blue-text">SEO</h3>
                <p className="small-para">Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.</p>
                <p className="small-para">Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.</p>
              </div>
            </div>
          </div>
          <div className="my-row">
            <div className="my-col">
              <div className="my-card">
                <div className="icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <h3 className="greet-heading blue-text">Content Writting</h3>
                <p className="small-para">Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.</p>
                <p className="small-para">Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.</p>
              </div>
            </div>
            <div className="my-col">
              <div className="my-card">
                <div className="icon">
                  <i className="fab fa-wordpress-simple"></i>
                </div>
                <h3 className="greet-heading blue-text">WordPress Dev</h3>
                <p className="small-para">Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.</p>
                <p className="small-para">Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.</p>
              </div>
            </div>
            <div className="my-col">
              <div className="my-card">
                <div className="icon">
                  <i className="fas fa-video"></i>
                </div>
                <h3 className="greet-heading blue-text">Video Editing</h3>
                <p className="small-para">Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.</p>
                <p className="small-para">Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact me section */}
      <section className="contact" id="contact">
        <div className="contact-heading">
          <h1 className="my-heading text-center">Contact Me</h1>
        </div>
        <div className="contact-content">
          <div className="contact-form-container">
            <h1 className="greet-heading">Get In Touch</h1>
            <form className="contact-form">
              <input className="form-controls" type="text" placeholder="Your Name" />
              <input className="form-controls" type="text" placeholder="Your Email" />
              <input className="form-controls" type="text" placeholder="Your Phone" />
              <textarea className="form-controls" placeholder="Write your message" name="message" cols="30" rows="10"></textarea>
              <input className="form-btn btn common-btn" type="submit" value="Connect with me via Email" />
            </form>
          </div>
          <div className="contact-details">
            <h1 className="greet-heading">My Contact Details</h1>
            <div className="details">
              <h5 className="contact-heading">EMAIL</h5>
              <p className="contact-text">bkrishna@umd.edu</p>
              <p className="contact-text">baalkrishnanair24@gmail.com</p>
            </div>
            <div className="details">
              <h5 className="contact-heading">PHONE</h5>
              <p className="contact-text">+1 2404766045</p>
            </div>
            <div className="details">
              <h5 className="contact-heading">FAX</h5>
              <p className="contact-text">+91 0123456789</p>
            </div>
            <div className="details">
              <h5 className="contact-heading">ADDRESS</h5>
              <p className="contact-text">College Park, MD</p>
              <p>Graduate Hills</p>
              <p>7700 Adelphi Road</p>
              <p>Hyattsville, 20783</p>
              <p>Prince George's County</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <footer className="footer">
        <div className="footer-content text-center">
          <div className="social-links">
            <div className="footer-menu">
              <ul className="footer-menu-list">
                <li className="footer-list-items">
                  <a className="footer-links" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="footer-list-items">
                  <a className="footer-links" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="footer-list-items">
                  <a className="footer-links" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="footer-list-items">
                  <a className="footer-links" href="#">
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
