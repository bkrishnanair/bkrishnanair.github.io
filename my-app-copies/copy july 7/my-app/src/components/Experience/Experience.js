import React from 'react';
import styles from './Experience.module.css';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Capgemini',
    dates: 'Aug 2021 – Aug 2023',
    bullets: [
      'Developed and maintained enterprise-grade integration solutions for banking clients, ensuring secure, reliable system communication.',
      'Automated CI/CD pipelines using Python and Jenkins, improving deployment efficiency by 30%.',
      'Collaborated with cross-functional teams to deliver scalable software and troubleshoot complex production issues.'
    ]
  },
  {
    role: 'Technology Shop Assistant',
    company: 'The Clarice Smith Performing Arts Center, UMD',
    dates: 'Aug 2024 – Present',
    bullets: [
      'Provide technical support for live events, including sound and lighting system setup and troubleshooting.',
      'Assist diverse patrons and manage equipment inventory with a customer-focused approach.'
    ]
  }
];

const Experience = () => (
  <section className={styles.experience} id="experience">
    <h1 className={styles.heading}>Professional Experience</h1>
    <div className={styles.timeline}>
      {experiences.map((exp, idx) => (
        <div className={styles.timelineItem} key={idx}>
          <div className={styles.timelineDot}></div>
          <div className={styles.timelineContent}>
            <h2 className={styles.role}>{exp.role}</h2>
            <h3 className={styles.company}>{exp.company}</h3>
            <span className={styles.dates}>{exp.dates}</span>
            <ul className={styles.bullets}>
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience; 