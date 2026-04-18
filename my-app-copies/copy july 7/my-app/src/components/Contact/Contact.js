import React, { useState } from 'react';
import styles from './Contact.module.css';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } });
    }
  }, [controls, inView]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.message) tempErrors.message = 'Message is required';
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = validate();
    setErrors(tempErrors);
    if (Object.keys(tempErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <motion.section
      className={styles.contact}
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
    >
      <div className={styles.contactHeading}>
        <h1 className={styles.myHeading}>Contact Me</h1>
      </div>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input
          className={styles.formControl}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
        <input
          className={styles.formControl}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
        <textarea
          className={styles.formControl}
          name="message"
          placeholder="Write your message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <span className={styles.error}>{errors.message}</span>}
        <button className={styles.formBtn} type="submit">Send Message</button>
        {submitted && <span className={styles.success}>Message sent successfully!</span>}
      </form>
    </motion.section>
  );
};

export default Contact; 