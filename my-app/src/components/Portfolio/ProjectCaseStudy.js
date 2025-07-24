import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProjectCaseStudy.module.css'; // We'll create this CSS module

const ProjectCaseStudy = ({ projects }) => {
  const { projectName } = useParams();

  // Find the project based on the URL parameter
  const project = projects.find(p => p.title.toLowerCase().replace(/[^a-z0-9]+/g, '') === projectName);

  if (!project) {
    return <div className={styles.notFound}>Project not found.</div>;
  }

  return (
    <div className={styles.caseStudyContainer}>
      <h1 className={styles.title}>{project.title}</h1>
      <img src={project.image} alt={project.title} className={styles.mainImage} />
      <div className={styles.section}>
        <h2>Overview</h2>
        <p>{project.shortDesc}</p>
      </div>
      <div className={styles.section}>
        <h2>Problem</h2>
        <p>{project.problem}</p>
      </div>
      <div className={styles.section}>
        <h2>Solution</h2>
        <p>{project.solution}</p>
      </div>
      <div className={styles.section}>
        <h2>Impact</h2>
        <p>{project.impact}</p>
      </div>
      <div className={styles.links}>
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>Live Demo</a>}
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>GitHub Repo</a>}
      </div>
      <div className={styles.tags}>
        {project.tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCaseStudy;