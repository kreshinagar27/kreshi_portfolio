"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import AnimateHeading from "@/components/ui/AnimateHeading";

const educationData = [
  {
    year: "2025",
    duration: "[ 2025 — Present ]",
    degree: "B.Tech- Data Science",
    institution: "NMIMS Chandigarh",
    institutionUrl: "https://nmims.edu/",
    metricLabel: "Status",
    metricValue: "Ongoing",
    achievement: "Currently Pursuing"
  },
  {
    year: "2024",
    duration: "[ Completed 2024 ]",
    degree: "12th Class",
    institution: "Banasthali Vidyapith, Jaipur",
    institutionUrl: "http://www.banasthali.org/banasthali/wcms/en/home/",
    metricLabel: "Percentage",
    metricValue: "90%"
  },
  {
    year: "2022",
    duration: "[ Completed 2022 ]",
    degree: "10th Class",
    institution: "Gyan Ganga The International School, Bhopal",
    institutionUrl: "https://www.boardingschoolsofindia.com/gyan-ganga-international-academy-bhopal",
    metricLabel: "Percentage",
    metricValue: "89.6%"
  }
];

export default function Education() {
  return (
    <section id="education" className="education fade-up">
      <div className="education-layout-container">
        <RevealOnScroll>
          <div className="education-header-block" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", textAlign: "right", width: "100%" }}>
            <AnimateHeading text="Education" id="education-heading" align="right" className="education-heading" />
            <p className="education-subtitle" style={{ textAlign: "right", marginLeft: "auto", marginRight: "0" }}>
              Academic journey built through consistent performance and continuous learning.
            </p>
          </div>
        </RevealOnScroll>

        <div className="education-grid">
          {educationData.map((edu, idx) => (
            <RevealOnScroll key={idx} delay={idx * 0.1} direction="up">
              <div className="education-card">
                {/* Year Watermark */}
                <div className="edu-watermark">{edu.year}</div>

                <div className="edu-card-content">
                  <div>
                    {/* Large Interactive Foreground Year */}
                    <div className="edu-foreground-year">{edu.year}</div>

                    <span className="edu-duration">{edu.duration}</span>
                    <h3 className="edu-title">{edu.degree}</h3>
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="edu-institution education-link"
                    >
                      {edu.institution}
                    </a>
                  </div>

                  <div>
                    <div className="edu-divider" />
                    <div className="edu-metric-section">
                      <span className="edu-metric-label">{edu.metricLabel}</span>
                      <span className="edu-metric-value">{edu.metricValue}</span>
                    </div>
                    {edu.achievement && (
                      <div className="edu-achievement">
                        {edu.achievement}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
