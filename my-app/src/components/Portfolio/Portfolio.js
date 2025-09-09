import React, { useState } from 'react';
import styles from './Portfolio.module.css';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'ClassNest - AI-Powered Learning Management System',
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80',
    tags: ['Django', 'React', 'PostgreSQL', 'AI/ML', 'Groq API'],
    shortDesc: 'AI-driven LMS with automatic quiz generation from PDFs and role-based access.',
    problem: 'Educators often spend significant manual effort creating engaging and relevant learning materials. The challenge was to design a system that could automate content creation and provide a scalable, multi-user learning environment.',
    solution: 'I led the development of a full-featured LMS using a Django MVT backend and a React frontend. The core innovation was an AI-driven quiz generation module using the Groq API and Llama3 LLM, which automatically converts uploaded PDF documents into interactive quizzes. The system also features secure, role-based access control for administrators, educators, and students.',
    impact: 'This system significantly enhances educator efficiency by automating content creation. The AI-powered features provide a more dynamic and adaptive learning experience for students, directly addressing the need for modern, intelligent educational tools.',
    liveUrl: 'https://classnest.up.railway.app/',
    githubUrl: 'https://github.com/bkrishnanair/classnest',
  },
  {
    title: 'Enterprise CI/CD Automation Pipeline',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    tags: ['Python', 'Jenkins', 'CI/CD', 'DevOps', 'Agile'],
    shortDesc: 'Automated CI/CD pipeline for banking integration, reducing errors and deployment time.',
    problem: 'At Capgemini, the deployment process for mission-critical banking integration solutions was manual, time-consuming, and prone to human error, leading to delays and potential production issues.',
    solution: 'I engineered and implemented a robust CI/CD pipeline from the ground up using Jenkins, Python scripting, and JFrog Artifactory. This pipeline automated the entire build, testing, and deployment workflow for IBM Integration Bus applications, integrating seamlessly with Jira and Bitbucket for full traceability.',
    impact: 'The new automated pipeline cut deployment time by 30% and reduced post-deployment errors by 25%. This enhancement significantly increased team productivity and the reliability of systems handling over $100M in daily transactions.',
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: 'IoT Smart Health Monitoring System',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80',
    tags: ['IoT', 'Python', 'Arduino', 'Raspberry Pi', 'Sensors'],
    shortDesc: 'IoT-based system for real-time remote patient health monitoring and alerts.',
    problem: "Healthcare providers require a reliable method to monitor patients' vital signs remotely to provide timely care, especially for those with chronic conditions or in post-operative recovery.",
    solution: 'As team lead, I architected an IoT-based system that uses Arduino and Raspberry Pi to collect real-time patient data (heart rate, temperature, oxygen levels) from various sensors. I then developed a responsive web interface to display this data clearly, allowing for remote monitoring by medical professionals.',
    impact: 'The system successfully demonstrated a viable solution for improving remote healthcare delivery. It ensures continuous monitoring and enables faster interventions, bridging the communication gap between patients and doctors.',
    liveUrl: null,
    githubUrl: 'https://github.com/bkrishnanair/iot-health-monitor',
  },
  {
    title: 'GitHub Issues & Contributor Analysis',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Data Analysis'],
    shortDesc: 'Data analysis and visualization of open-source project health and contributor trends.',
    problem: "Large open-source projects like 'Poetry' struggle to understand contributor engagement trends and identify bottlenecks in issue resolution, which can slow down development and discourage new contributors.",
    solution: 'I performed a comprehensive data analysis on the Poetry project\'s GitHub repository. Using Python, Pandas, and Matplotlib, I processed and visualized issue data to reveal patterns in contributor engagement and project responsiveness. I also developed unit tests to ensure the reliability of the data processing workflow.',
    impact: 'My analysis provided actionable insights into the project\'s health, identifying key areas for improving community management and issue triage. The visualizations made complex data easily understandable for project maintainers.',
    liveUrl: null,
    githubUrl: 'https://github.com/bkrishnanair/poetry-issues-analysis',
  },
  {
    title: 'Real-Time Utility Consumption Monitor',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    tags: ['IoT', 'Python', 'Django', 'Arduino', 'Data Visualization'],
    shortDesc: 'IoT and Django web app for real-time tracking and visualization of utility usage.',
    problem: 'Households often lack real-time visibility into their electricity and water usage, making it difficult to manage consumption, identify waste, and control costs effectively.',
    solution: 'I designed and built a complete IoT solution, from hardware to software. Using Arduino and Raspberry Pi, I created a custom energy meter to capture real-time data. This data was then sent to a Django web application I developed, which provided users with a friendly interface to track and visualize their consumption patterns over time.',
    impact: 'The web app empowered users with immediate feedback on their utility usage, enabling them to make informed decisions to conserve resources and reduce their monthly bills.',
    liveUrl: null,
    githubUrl: 'https://github.com/bkrishnanair/utility-monitor',
  },
];

const Portfolio = () => {
  const [selected, setSelected] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.portfolioHeading}>
        <h1 className={styles.myHeading}>Portfolio</h1>
      </div>
      <motion.div
        className={styles.projectsGrid}
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            {...project}
            onClick={() => setSelected(project)}
            index={idx}
          />
        ))}
      </motion.div>
      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
};

export default Portfolio; 