"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="projects fade-up">
      <RevealOnScroll>
        <h2>Projects</h2>
      </RevealOnScroll>

      <div className="projects-container">
        {projects.map((project, idx) => (
          <RevealOnScroll key={idx} delay={idx * 0.1} direction="up">
            <div className="project-card premium">
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, techIdx) => (
                    <span key={techIdx}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl}>Live Demo</a>
                  <a href={project.githubUrl}>GitHub</a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
