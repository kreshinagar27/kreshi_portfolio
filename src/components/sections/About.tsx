"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { aboutBio } = portfolioData.personalInfo;

  return (
    <section id="about" className="about fade-up">
      <RevealOnScroll>
        <h2>About Me</h2>
        <p>{aboutBio}</p>
      </RevealOnScroll>
    </section>
  );
}
