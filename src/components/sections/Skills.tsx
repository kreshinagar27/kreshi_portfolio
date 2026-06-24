"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { portfolioData } from "@/data/portfolio";
import AnimateHeading from "@/components/ui/AnimateHeading";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="skills fade-up">
      <div className="skills-layout-container">
        {/* Left Column: Text content */}
        <div className="skills-text-column">
          <RevealOnScroll>
            <AnimateHeading text="My Skills" id="skills-heading" align="left" />
            <p className="skills-description">
              Technologies and tools I use to build modern,
              responsive, and scalable web applications.
            </p>
            <p className="skills-description">
              Focused on creating high-performance user experiences using
              modern frontend technologies and development tools.
            </p>
          </RevealOnScroll>
        </div>

        {/* Right Column: Skill Cards Grid */}
        <div className="skills-grid-column">
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <RevealOnScroll key={idx} delay={idx * 0.05} direction="up">
                <div className="skill-card">
                  <i className={skill.iconClass}></i>
                  <span>{skill.name}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
