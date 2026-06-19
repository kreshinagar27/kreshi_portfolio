"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="timeline" className="timeline fade-up">
      <RevealOnScroll>
        <h2>My Journey</h2>
      </RevealOnScroll>

      <div className="timeline-container">
        {experience.map((exp, idx) => (
          <RevealOnScroll
            key={idx}
            delay={idx * 0.1}
            direction={idx % 2 === 0 ? "left" : "right"}
          >
            <div className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}>
              <div className="timeline-dot" />
              <span className="duration">{exp.duration}</span>
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
