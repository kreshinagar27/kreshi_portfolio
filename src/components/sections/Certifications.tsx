"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { portfolioData } from "@/data/portfolio";
import { Award } from "lucide-react";

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-24 relative max-w-7xl mx-auto px-6">
      <RevealOnScroll>
        <h2 className="text-center text-[#0f766e] text-4xl font-bold tracking-tight mb-12">Certifications</h2>
      </RevealOnScroll>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, idx) => (
          <RevealOnScroll key={idx} delay={idx * 0.1} direction="up">
            <div className="project-card border border-white/5 hover:border-lavender/30 p-8 flex flex-col justify-between h-full group relative overflow-hidden">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#14b8a6] group-hover:scale-110 transition-transform">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 leading-snug">{cert.title}</h3>
                  <p className="text-gray-400 text-sm font-semibold">{cert.issuer}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                <span className="text-xs text-gray-500 font-medium">{cert.date}</span>
                {cert.image && cert.image !== "placeholder" && (
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#38bdf8] hover:text-[#14b8a6] font-semibold transition-colors"
                  >
                    View Credential
                  </a>
                )}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
