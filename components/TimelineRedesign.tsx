import React from 'react';
import { Experience } from '../types';

interface TimelineProps {
  experiences: Experience[];
}

export const TimelineRedesign: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className="timeline">
      {experiences.map((exp) => (
        <article key={exp.id} className="timeline-entry">
          <div className="timeline-rail" aria-hidden="true">
            <span className={`timeline-dot ${exp.isCurrent ? 'is-current' : ''}`} />
          </div>

          <div className="timeline-content">
            <header className="timeline-head">
              <div>
                <p className="timeline-period">{exp.period}</p>
                <h4>{exp.title}</h4>
              </div>
              {exp.isCurrent && <span className="tag tag-accent">Current</span>}
            </header>

            <div className="timeline-meta">
              {exp.roleInExp && <span>担当: {exp.roleInExp}</span>}
              {exp.scaleInExp && <span>体制: {exp.scaleInExp}</span>}
              {exp.osInExp && <span>環境: {exp.osInExp}</span>}
            </div>

            <p className="timeline-summary">{exp.summary}</p>

            {exp.projects && exp.projects.length > 0 && (
              <div className="project-list">
                {exp.projects.map((project, index) => (
                  <section key={`${project.name}-${index}`} className="project-card">
                    <div className="project-head">
                      <div>
                        <p className="project-role">{project.role}</p>
                        <h5>{project.name}</h5>
                      </div>
                      <p className="project-period">{project.period}</p>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {(project.scale || project.os) && (
                      <div className="project-notes">
                        {project.scale && <span>規模: {project.scale}</span>}
                        {project.os && <span>OS: {project.os}</span>}
                      </div>
                    )}
                  </section>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
};
