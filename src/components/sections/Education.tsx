"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { portfolioData } from "@/data/portfolio";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative max-w-4xl mx-auto px-6">
      <RevealOnScroll>
        <h2 className="text-center text-[#0f766e] text-4xl font-bold tracking-tight mb-12">Education</h2>
      </RevealOnScroll>

      <div className="flex flex-col items-center gap-6">
        {education.map((edu, idx) => (
          <RevealOnScroll key={idx} delay={idx * 0.1}>
            {/* Styled exactly like a timeline card but styled centered */}
            <div className="timeline-item w-full max-w-[800px] border border-white/5 hover:border-lavender/30 relative">
              <span className="duration">{edu.duration}</span>
              <h3>{edu.degree}</h3>
              <p className="text-gray-400 font-semibold mb-2">{edu.institution}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {edu.highlights.map((h, i) => (
                  <span key={i} className="text-xs text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                    {h}
                  </span>
                ))}
              </div>
              {edu.gpa && (
                <div className="absolute top-6 right-6 text-sm text-[#38bdf8] font-semibold">
                  GPA: {edu.gpa}
                </div>
              )}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
