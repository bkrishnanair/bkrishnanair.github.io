import React from 'react';
import styles from './ProjectModal.module.css';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <FaTimes />
        </button>
        <div className={styles.leftCol}>
          <img src={project.image} alt={project.title} className={styles.modalImage} />
        </div>
        <div className={styles.rightCol}>
          <h2 className={styles.modalTitle}>{project.title}</h2>
          <div className={styles.tags}>
            {project.tags && project.tags.map((tag, idx) => (
              <span className={styles.tagPill} key={idx}>{tag}</span>
            ))}
          </div>
          <div className={styles.section}>
            <h3>The Problem</h3>
            <p>{project.problem}</p>
          </div>
          <div className={styles.section}>
            <h3>My Solution</h3>
            <p>{project.solution}</p>
          </div>
          <div className={styles.section}>
            <h3>Impact</h3>
            <p>{project.impact}</p>
          </div>
          <div className={styles.modalActions}>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                <FaGithub /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 