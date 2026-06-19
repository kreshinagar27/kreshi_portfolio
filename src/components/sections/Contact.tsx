"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { contact, socialLinks } = portfolioData.personalInfo;

  return (
    <section id="contact" className="contact fade-up">
      <RevealOnScroll>
        <h2>Contact Me</h2>
        <p>Let's build something amazing together.</p>

        <div className="contact-buttons">
          <a href={`mailto:${contact.email}`}>Email</a>
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={socialLinks.resume}>Resume</a>
        </div>
      </RevealOnScroll>
    </section>
  );
}
