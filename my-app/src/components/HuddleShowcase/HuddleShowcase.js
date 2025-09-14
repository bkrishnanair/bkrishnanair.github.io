import React from 'react';
import styles from './HuddleShowcase.module.css';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import heroVideo from './huddleshow/video.mp4';
import landingPage from './huddleshow/neraby happenings.jpg';
import createEvent from './huddleshow/join game.jpg';
import userProfile from './huddleshow/profile.jpg';

const HuddleShowcase = () => {
  return (
    <section id="huddle" className={styles.huddleShowcase}>
      <div className={styles.huddleContent}>
        <div className={styles.leftColumn}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.projectTitle}>Huddle: Discover. Create. Connect.</h1>
            <div className={styles.links}>
              <a href="https://huddlev1.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                Live Demo <FiExternalLink />
              </a>
              <a href="https://github.com/bkrishnanair/huddle_v0" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                Source Code <FaGithub />
              </a>
            </div>
            <div className={styles.narrative}>
              <p>
                Huddle began with a personal frustration: the chaos of organizing pickup cricket games at UMD. This initial MVP, built to solve my own problem, quickly evolved. Guided by invaluable feedback from mentors at the Dingman Center's Hatchery program, I undertook a strategic pivot. I refactored the entire application, transforming it from a niche sports app into a scalable, "operating system for local communities."
              </p>
              <p>
                This journey showcases not only my technical ability to re-architect a live, full-stack application but also my adaptability and product vision as a founder. The core challenge was to generalize the entire user experience—from the Firestore data model and API routes to the UI components and marketing copy—while preserving the app's stability and signature "glassmorphism" aesthetic.
              </p>
            </div>
            <div className={styles.features}>
              <h2>Key Features</h2>
              <ul>
                <li><strong>Scalable Serverless Backend:</strong> Built on a modern, serverless architecture using Next.js 15 API Routes and Firebase for security and performance at scale.</li>
                <li><strong>Dynamic, Real-Time Map View:</strong> Utilizes the Google Maps Platform with custom, cloud-based styling to serve as the central hub for discovering local events in real-time.</li>
                <li><strong>AI-Assisted Event Creation:</strong> Features an intuitive, multi-step modal that integrates the Google Gemini API to help organizers generate catchy, context-aware titles and descriptions.</li>
                <li><strong>Secure Authentication & Community Tools:</strong> A complete authentication system with user profiles, a trust-building "check-in" system, and event-specific real-time chat.</li>
              </ul>
            </div>
            <div className={styles.techStack}>
              <h2>Tech Stack</h2>
              <div className={styles.techIcons}>
                <span>Next.js</span>
                <span>React</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
                <span>Framer Motion</span>
                <span>Firebase</span>
                <span>Firestore</span>
                <span>Google Maps API</span>
                <span>Gemini API</span>
                <span>Vercel</span>
              </div>
            </div>
          </motion.div>
        </div>
        <div className={styles.rightColumn}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.heroAsset}>
              <video src={heroVideo} autoPlay loop muted playsInline />
            </div>
            <div className={styles.gallery}>
              <img src={landingPage} alt="Huddle Landing Page" />
              <img src={createEvent} alt="Huddle Create Event Modal" />
              <img src={userProfile} alt="Huddle User Profile" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HuddleShowcase;