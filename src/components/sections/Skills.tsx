"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const { skills, currentlyLearning } = portfolioData;

  return (
    <>
      <section id="skills" className="skills fade-up">
        <RevealOnScroll>
          <h2>My Skills</h2>
        </RevealOnScroll>

        <div className="skills-container">
          {skills.map((skill, idx) => (
            <RevealOnScroll key={idx} delay={idx * 0.05} direction="up">
              <div className="skill-card">
                <i className={skill.iconClass}></i>
                <span>{skill.name}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="learning fade-up">
        <RevealOnScroll>
          <h2>Currently Learning</h2>
        </RevealOnScroll>

        <div className="learning-grid">
          {currentlyLearning.map((item, idx) => (
            <RevealOnScroll key={idx} delay={idx * 0.05} direction="up">
              <div className="learning-card">{item}</div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
