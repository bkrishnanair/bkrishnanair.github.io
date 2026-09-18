import React from "react";
import data from "./data/resume.json";
import { resolveRoute, projectPath } from "./routes.js";

const { basics, ui } = data;
export const Arrow = ({ diagonal = false, down = false }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
    className={down ? "arrow-down" : ""}
  >
    <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} />
  </svg>
);
const LinkOut = ({ href, children, className = "" }) => (
  <a
    href={href}
    className={className}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
    <Arrow diagonal />
  </a>
);
const ResumeLink = ({ compact = false }) => (
  <a
    className={compact ? "nav-resume" : "button button-secondary"}
    href={data.meta.resumePath}
    download
  >
    {compact ? ui.resume : ui.downloadResume}
    <Arrow down />
  </a>
);
const Tags = ({ items }) => (
  <ul className="tags">
    {items.map((tag) => (
      <li key={tag}>{tag}</li>
    ))}
  </ul>
);
const Metrics = ({ items, className = "" }) => (
  <dl className={`metrics ${className}`}>
    {items.map((item) => (
      <div key={item.label}>
        <dt>{item.label}</dt>
        <dd>{item.value}</dd>
      </div>
    ))}
  </dl>
);
const SectionHead = ({ id }) => {
  const section = data.sections[id];
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{section.number}</span>
        {section.eyebrow}
      </p>
      <h2>{section.title}</h2>
      {section.description && <p>{section.description}</p>}
    </div>
  );
};

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="identity" href="/">
          <span className="monogram" aria-hidden="true">
            {basics.initials}
            <span>.</span>
          </span>
          <span>{basics.displayName}</span>
        </a>
        <nav aria-label={ui.navigation} className="desktop-nav">
          {data.navigation.map((item) => (
            <a key={item.id} href={`/#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <ResumeLink compact />
          <details className="mobile-menu">
            <summary>
              {ui.menu}
              <span aria-hidden="true">+</span>
            </summary>
            <nav aria-label={ui.navigation}>
              {data.navigation.map((item) => (
                <a key={item.id} href={`/#${item.id}`}>
                  {item.label}
                  <Arrow />
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const hero = data.hero;
  return (
    <>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title">
            {hero.headline[0]}
            <br />
            <span>{hero.headline[1]}</span>
          </h1>
          <p className="hero-intro">{hero.intro}</p>
          <p className="hero-detail">{hero.detail}</p>
          <div className="button-row">
            <a className="button button-primary" href="#projects">
              {ui.viewWork}
              <Arrow />
            </a>
            <ResumeLink />
          </div>
          <div className="social-links">
            {basics.profiles.map((profile) => (
              <LinkOut href={profile.url} key={profile.label}>
                {profile.label}
              </LinkOut>
            ))}
            <a href={`mailto:${basics.email}`}>
              {ui.email}
              <Arrow diagonal />
            </a>
          </div>
        </div>
        <aside className="hero-aside">
          <div className="availability">
            <span />
            {basics.availability}
          </div>
          <div className="portrait-frame">
            <img
              src={hero.portrait}
              srcSet={`${hero.portraitSmall} 160w, ${hero.portrait} 680w`}
              sizes="(max-width: 760px) 75px, (max-width: 1050px) 30vw, 400px"
              alt={hero.portraitAlt}
              width="680"
              height="680"
              fetchPriority="high"
            />
            <div className="portrait-label">
              <span className="eyebrow">{hero.snapshotLabel}</span>
              <p>{hero.snapshotTitle}</p>
              <span>{hero.snapshotDetail}</span>
            </div>
          </div>
          <p className="location">
            <span aria-hidden="true">↳</span>
            {basics.location}
          </p>
        </aside>
      </section>
      <div className="container">
        <Metrics items={data.proof} className="proof-strip" />
        <p className="proof-caption">{hero.credential}</p>
      </div>
    </>
  );
}

function ProjectLinks({ project, showCase = false }) {
  return (
    <div className="project-links">
      {showCase && (
        <a className="text-link" href={projectPath(project)}>
          {ui.caseStudy}
          <Arrow />
        </a>
      )}
      {project.links.live && (
        <LinkOut href={project.links.live}>{ui.liveSite}</LinkOut>
      )}
      {project.links.source && (
        <LinkOut href={project.links.source}>{ui.source}</LinkOut>
      )}
    </div>
  );
}

function ProjectPreview({ project }) {
  return (
    <div className={`project-preview preview-${project.slug}`}>
      <div className="preview-top">
        <span>{project.name}</span>
        <span>↗</span>
      </div>
      <div className="pipeline-preview">
        {project.architecture.nodes
          .filter((_, index) => index !== 1 || project.slug !== "classnest")
          .map((node, index) => (
            <React.Fragment key={node.label}>
              {index > 0 && <span className="pipeline-arrow">→</span>}
              <div>
                <span className="pipeline-icon">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong>{node.label}</strong>
                <span>{node.tech}</span>
              </div>
            </React.Fragment>
          ))}
      </div>
      <div className="preview-bottom">
        {project.metrics[0].value}
        <span>{project.metrics[0].label}</span>
      </div>
    </div>
  );
}

function Projects() {
  const [featured, ...other] = data.projects;
  return (
    <section id="projects" className="section container">
      <SectionHead id="projects" />
      <article className="featured-project">
        <div className="featured-visual">
          <a
            href={projectPath(featured)}
            aria-label={`${ui.caseStudy}: ${featured.name}`}
          >
            <img
              src={featured.image}
              alt={featured.imageAlt}
              loading="lazy"
              width="1280"
              height="720"
            />
          </a>
          <span className="visual-caption">{featured.imageCaption}</span>
        </div>
        <div className="featured-content">
          <p className="eyebrow">{featured.category}</p>
          <h3>
            <a href={projectPath(featured)}>
              {featured.name}
              <Arrow diagonal />
            </a>
          </h3>
          <p className="project-headline">{featured.headline}</p>
          <p>{featured.summary}</p>
          <Metrics items={featured.metrics} />
          <Tags items={featured.tags} />
          <ProjectLinks project={featured} showCase />
        </div>
      </article>
      <div className="project-grid">
        {other.map((project) => (
          <article className="project-card" key={project.slug}>
            <ProjectPreview project={project} />
            <div className="project-card-content">
              <p className="eyebrow">{project.category}</p>
              <h3>
                <a href={projectPath(project)}>
                  {project.name}
                  <Arrow diagonal />
                </a>
              </h3>
              <p>{project.summary}</p>
              <Tags items={project.tags} />
              <ProjectLinks project={project} showCase />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const exp = data.experience;
  return (
    <section id="experience" className="section container">
      <SectionHead id="experience" />
      <div className="experience-grid">
        <div className="experience-company">
          <h3>
            {exp.company}
            <span aria-hidden="true">↗</span>
          </h3>
          <p>{exp.client}</p>
          <p className="mono">{exp.dates}</p>
          <p className="muted small">{exp.location}</p>
          <div className="role-history">
            {exp.roles.map((role) => (
              <div key={role.title}>
                <strong>{role.title}</strong>
                <span>{role.dates}</span>
              </div>
            ))}
          </div>
          <Tags items={exp.tags} />
        </div>
        <div className="experience-details">
          <p className="experience-intro">{exp.summary}</p>
          {exp.highlights.map((item) => (
            <div className="experience-impact" key={item.title}>
              <span>{item.value}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
          <p className="mentoring">{exp.mentoring}</p>
        </div>
      </div>
      <p className="footnote">{exp.footnote}</p>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHead id="skills" />
      <div className="capabilities">
        {data.capabilities.map((capability, i) => (
          <div className="capability" key={capability.title}>
            <span className="capability-number mono">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </div>
            <p className="tools mono">{capability.tools}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section container">
      <SectionHead id="about" />
      <div className="about-grid">
        <div className="about-copy">
          {data.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="learning">
            <p className="eyebrow">{data.about.learningLabel}</p>
            <p>{data.about.certification}</p>
          </div>
        </div>
        <div className="education">
          <p className="eyebrow">{data.about.educationLabel}</p>
          {data.about.education.map((item) => (
            <article key={item.institution}>
              <h3>{item.institution}</h3>
              <p>{item.degree}</p>
              <span className="mono">{item.detail}</span>
              {item.coursework && (
                <p className="coursework">{item.coursework}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section container contact-section">
      <div className="contact-surface">
        <div>
          <SectionHead id="contact" />
          <p className="availability contact-availability">
            <span />
            {basics.availabilityDetail}
          </p>
          <p className="mono contact-roles">{data.contact.note}</p>
        </div>
        <div className="contact-actions">
          <p className="eyebrow">{data.contact.emailLabel}</p>
          <a className="contact-email" href={`mailto:${basics.email}`}>
            {basics.email}
            <Arrow diagonal />
          </a>
          <div className="social-links">
            {basics.profiles.map((profile) => (
              <LinkOut href={profile.url} key={profile.label}>
                {profile.label}
              </LinkOut>
            ))}
          </div>
          <div className="contact-resume">
            <p>{data.contact.resumeNote}</p>
            <ResumeLink />
          </div>
        </div>
      </div>
    </section>
  );
}

function Architecture({ project }) {
  return (
    <section className="case-section architecture">
      <h2>{ui.architecture}</h2>
      <p>{project.architecture.caption}</p>
      <div className="architecture-nodes">
        {project.architecture.nodes.map((node, i) => (
          <details key={node.label}>
            <summary>
              <span className="mono node-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <strong>{node.label}</strong>
              <span className="node-tech">{node.tech}</span>
              <span className="node-toggle" aria-hidden="true">
                +
              </span>
            </summary>
            <p>{node.detail}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CaseStudy({ project }) {
  const next =
    data.projects[(data.projects.indexOf(project) + 1) % data.projects.length];
  return (
    <>
      <div className="container case-page">
        <a className="back-link" href="/#projects">
          <span aria-hidden="true">←</span>
          {ui.back}
        </a>
        <div className="case-heading">
          <p className="eyebrow">{project.category}</p>
          <h1>
            {project.name}
            <span>{project.headline}</span>
          </h1>
          <p className="case-intro">{project.intro}</p>
          <ProjectLinks project={project} />
        </div>
        <div className="case-meta">
          <div>
            <span>{ui.role}</span>
            <p>{project.role}</p>
          </div>
          <div>
            <span>{ui.timeline}</span>
            <p>{project.timeline}</p>
          </div>
          <div>
            <span>{ui.stack}</span>
            <Tags items={project.tags} />
          </div>
        </div>
        {project.image ? (
          <figure className="case-image">
            <img
              src={project.image}
              alt={project.imageAlt}
              width="1280"
              height="720"
            />
            <figcaption>{project.imageCaption}</figcaption>
          </figure>
        ) : (
          <ProjectPreview project={project} />
        )}
        <Metrics items={project.metrics} className="case-metrics" />
        <section className="case-section case-challenge">
          <p className="eyebrow">{data.caseStudyLabels.problem}</p>
          <h2>{project.challenge.title}</h2>
          <p>{project.challenge.body}</p>
        </section>
        <Architecture project={project} />
        <section className="case-section">
          <h2>{ui.decisions}</h2>
          <div className="decisions">
            {project.decisions.map((decision, i) => (
              <article key={decision.title}>
                <span className="decision-index mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{decision.title}</h3>
                  {["problem", "decision", "result"].map((key) => (
                    <div key={key} className={`decision-${key}`}>
                      <h4 className="eyebrow">{data.caseStudyLabels[key]}</h4>
                      <p>{decision[key]}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="case-section case-outcome">
          <h2>{ui.outcomes}</h2>
          <p>{project.outcome}</p>
          <p className="eyebrow">{data.caseStudyLabels.reflection}</p>
          <p>{project.reflection}</p>
        </section>
        <a className="next-project" href={projectPath(next)}>
          <span>
            <span className="eyebrow">{ui.nextProject}</span>
            <strong>{next.name}</strong>
          </span>
          <Arrow />
        </a>
      </div>
      <Contact />
    </>
  );
}

function Footer({ year }) {
  return (
    <footer className="container footer">
      <div>
        <a href="/" className="footer-name">
          {basics.displayName}
        </a>
        <p>{ui.footerNote}</p>
      </div>
      <span className="mono">© {year}</span>
      <a href="#top">
        {ui.top}
        <Arrow diagonal />
      </a>
    </footer>
  );
}
function NotFound() {
  return (
    <section className="container not-found">
      <p className="eyebrow">{ui.notFound.eyebrow}</p>
      <h1>{ui.notFound.title}</h1>
      <p>{ui.notFound.description}</p>
      <a className="button button-primary" href="/">
        {ui.backHome}
        <Arrow />
      </a>
    </section>
  );
}

export default function App({
  pathname = "/",
  year = new Date().getFullYear(),
}) {
  const route = resolveRoute(pathname, data.projects);
  return (
    <>
      <a className="skip-link" href="#main">
        {ui.skip}
      </a>
      <div id="top" />
      <Header />
      <main id="main">
        {route.type === "home" ? (
          <>
            <Hero />
            <Projects />
            <Experience />
            <Skills />
            <About />
            <Contact />
          </>
        ) : route.type === "project" ? (
          <CaseStudy project={route.project} />
        ) : (
          <NotFound />
        )}
      </main>
      <Footer year={year} />
    </>
  );
}
