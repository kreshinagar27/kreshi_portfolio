"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import AnimateHeading from "@/components/ui/AnimateHeading";

const projectsData = [
  {
    title: "Portfolio Website",
    description: "A highly responsive personal portfolio featuring custom 3D animations, a translucent glassmorphic role plaque with dynamic typewriter rotation, and an integrated sidebar AI Assistant.",
    techStack: ["Next.js", "TypeScript", "Framer Motion", "TailwindCSS"],
    liveUrl: "#home",
    githubUrl: "https://github.com/kreshinagar27",
    image: "/portfolio-mockup.png"
  },
  {
    title: "Ascendly - Career Roadmap Generator",
    description: "An AI-powered career roadmap builder that generates customized skill paths, interactive milestone tracking diagrams, and curated learning recommendations based on target roles.",
    techStack: ["Next.js", "Gemini API", "TypeScript", "Node.js", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/kreshinagar27",
    image: "/ascendly-mockup.png"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="section-header text-left mb-20">
          <AnimateHeading 
            text="Featured Projects" 
            id="projects-heading" 
            className="text-3xl md:text-4xl font-bold font-outfit text-[#0f766e]" 
            align="left" 
          />
        </div>

        <div className="space-y-32">
          {projectsData.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}
              >
                {/* Project Details */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex-1 w-full"
                >
                  <span className="text-[11px] font-bold text-[#14b8a6] tracking-widest uppercase font-outfit">Featured Project</span>
                  <h3 className="text-2xl font-bold text-[#0f172a] mt-2 mb-4 font-outfit">{project.title}</h3>
                  <p className="text-gray-600 text-[14.5px] leading-relaxed mb-6 font-sans bg-gray-50 p-5 rounded-2xl border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="bg-[#14b8a6]/10 text-[#0f766e] px-3 py-1.5 rounded-full text-xs font-semibold font-outfit"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-1.5 text-sm font-semibold text-[#14b8a6] hover:text-[#0d9488] transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </div>
                </motion.div>

                {/* Laptop Showcase */}
                <div className="flex-1 w-full flex justify-center">
                  <div className="laptop-container">
                    {/* Screen / Lid */}
                    <motion.div
                      initial={{ rotateX: -90, transformOrigin: "bottom" }}
                      whileInView={{ rotateX: -10 }}
                      viewport={{ once: false, margin: "-120px" }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="laptop-lid"
                    >
                      <div className="laptop-screen-content">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="laptop-screen-reflex"></div>
                      </div>
                    </motion.div>

                    {/* Keyboard / Base */}
                    <div className="laptop-base">
                      <div className="laptop-keyboard"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
