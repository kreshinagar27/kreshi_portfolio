"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import AnimateHeading from "@/components/ui/AnimateHeading";

const row1Data = [
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    issueDate: "Coming Soon",
    image: "https://placehold.co/600x400/111827/38bdf8?text=AWS+Certification",
    credentialLink: "#"
  },
  {
    title: "Google Cloud Engineer",
    issuer: "Google Cloud Platform",
    issueDate: "Coming Soon",
    image: "https://placehold.co/600x400/111827/38bdf8?text=Google+Cloud+Certification",
    credentialLink: "#"
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta",
    issueDate: "Coming Soon",
    image: "https://placehold.co/600x400/111827/38bdf8?text=Meta+Certification",
    credentialLink: "#"
  },
  {
    title: "TensorFlow Developer",
    issuer: "Google",
    issueDate: "Coming Soon",
    image: "https://placehold.co/600x400/111827/38bdf8?text=TensorFlow+Certification",
    credentialLink: "#"
  }
];

const row2Data = [
  {
    title: "React Advanced Patterns",
    issuer: "Frontend Masters",
    issueDate: "Coming Soon",
    image: "https://placehold.co/600x400/111827/38bdf8?text=React+Certification",
    credentialLink: "#"
  },
  {
    title: "Full Stack Open",
    issuer: "University of Helsinki",
    issueDate: "Coming Soon",
    image: "https://placehold.co/600x400/111827/38bdf8?text=Full+Stack+Certification",
    credentialLink: "#"
  },
  {
    title: "AI Specialist",
    issuer: "Microsoft Azure",
    issueDate: "Coming Soon",
    image: "https://placehold.co/600x400/111827/38bdf8?text=Microsoft+AI+Certification",
    credentialLink: "#"
  },
  {
    title: "Data Science Professional",
    issuer: "IBM",
    issueDate: "Coming Soon",
    image: "https://placehold.co/600x400/111827/38bdf8?text=IBM+Data+Science",
    credentialLink: "#"
  }
];

export default function Certifications() {
  const doubleRow1 = [...row1Data, ...row1Data];
  const doubleRow2 = [...row2Data, ...row2Data];

  return (
    <section id="certifications" className="certifications fade-up">
      <div className="certifications-layout-container">
        
        {/* Right Aligned Header Block */}
        <RevealOnScroll>
          <div className="certifications-header-block">
            <AnimateHeading text="Certifications" id="certifications-heading" align="right" className="certifications-heading" />
            <p className="certifications-subtitle">
              Building expertise through continuous learning and professional development.
            </p>
          </div>
        </RevealOnScroll>
      </div>

      {/* Multiple Moving Rows Showcase */}
      <div className="certifications-showcase-wrapper">
        
        {/* Row 1: Moves Left */}
        <div className="certifications-marquee-container">
          <div className="certifications-marquee-track row-left">
            {doubleRow1.map((cert, idx) => (
              <a 
                key={`r1-${idx}`}
                href={cert.credentialLink}
                className="cert-showcase-card"
              >
                <div className="cert-card-image-wrapper">
                  <img src={cert.image} alt={cert.title} className="cert-card-img" />
                </div>
                <div className="cert-card-info">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-divider" />
                  <span className="cert-subtext">{cert.issueDate}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Row 2: Moves Right */}
        <div className="certifications-marquee-container">
          <div className="certifications-marquee-track row-right">
            {doubleRow2.map((cert, idx) => (
              <a 
                key={`r2-${idx}`}
                href={cert.credentialLink}
                className="cert-showcase-card"
              >
                <div className="cert-card-image-wrapper">
                  <img src={cert.image} alt={cert.title} className="cert-card-img" />
                </div>
                <div className="cert-card-info">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-divider" />
                  <span className="cert-subtext">{cert.issueDate}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
