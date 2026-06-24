"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import AnimateHeading from "@/components/ui/AnimateHeading";

export default function About() {
  const { aboutBio } = portfolioData.personalInfo;
  
  // Section visibility observer
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  // Section scroll progress for parallax (only run when visible)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transform (subtle vertical shift, only on desktop)
  const yParallaxTransform = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const yParallax = useSpring(isInView && !isMobile ? yParallaxTransform : 0, { stiffness: 100, damping: 20 });

  // Mouse tilt values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tilt
  const tiltX = useSpring(useTransform(mouseY, [-150, 150], [5, -5]), { stiffness: 200, damping: 25 });
  const tiltY = useSpring(useTransform(mouseX, [-150, 150], [-5, 5]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Phone screen scrolling loop setup
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const isProgrammaticScroll = useRef(false);
  const lastInteraction = useRef(Date.now());

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !isInView) return;

    let frameId: number;
    const speed = 0.4;

    const animate = () => {
      const timeSinceInteraction = Date.now() - lastInteraction.current;
      if (!isHovered.current && timeSinceInteraction > 6000) {
        isProgrammaticScroll.current = true;
        el.scrollTop += speed;
        if (el.scrollTop >= el.scrollHeight / 2) {
          el.scrollTop = 0;
        }
      }
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isInView]);

  const handleScroll = () => {
    if (isProgrammaticScroll.current) {
      isProgrammaticScroll.current = false;
    } else {
      lastInteraction.current = Date.now();
    }
  };

  // Render content block inside phone
  const PhoneContentBlock = () => (
    <div className="phone-scroll-block space-y-3 pb-3">
      {/* Profile Info */}
      <div className="phone-profile-card p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
        <h4 className="text-[10px] font-bold text-teal-400 font-outfit">Kreshi Nagar</h4>
        <p className="text-[8px] text-white/70">Computer Science Student</p>
      </div>

      {/* Focus Areas */}
      <div className="p-2.5 rounded-lg bg-black/30 border border-white/5 flex flex-col gap-1">
        <p className="text-[7.5px] font-bold uppercase tracking-wider text-teal-400/80 font-outfit">Focus Areas</p>
        <ul className="text-[7.5px] text-white/70 space-y-0.5 list-disc pl-3">
          <li>Full Stack Development</li>
          <li>Data Science</li>
          <li>Modern Web Technologies</li>
        </ul>
      </div>

      {/* Active Projects */}
      <div className="p-2.5 rounded-lg bg-black/30 border border-white/5 flex flex-col gap-1">
        <p className="text-[7.5px] font-bold uppercase tracking-wider text-teal-400/80 font-outfit">Featured Projects</p>
        <ul className="text-[7.5px] text-white/70 space-y-0.5 list-disc pl-3">
          <li>Portfolio Website</li>
          <li>Ascendly</li>
        </ul>
      </div>

      {/* Currently Learning */}
      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
        <p className="text-[7.5px] text-teal-300/80 font-bold uppercase tracking-wider font-outfit">Currently Learning</p>
        <ul className="text-[7.5px] text-white/70 space-y-0.5 list-disc pl-3 mt-1">
          <li>Next.js</li>
          <li>AI Integrations</li>
        </ul>
      </div>
    </div>
  );

  return (
    <section id="about" className="about fade-up" ref={sectionRef}>
      <div className="about-showcase flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full max-w-[1200px] mx-auto">
        
        {/* Left Column: Heading, Bio, Stats, Philosophy */}
        <div className="flex-1 w-full text-left space-y-4 flex flex-col justify-center height-align-wrapper">
          <AnimateHeading text="About Me" id="about-heading" align="left" />

          <p className="about-intro">
            {"Computer Science student focused on Full Stack Development, Data Science, and building modern digital experiences."}
          </p>

          <div className="about-stats">
            <div>
              <h2>2</h2>
              <p>Projects Built</p>
            </div>

            <div>
              <h2>2026</h2>
              <p>Learning Journey</p>
            </div>

            <div>
              <h2>∞</h2>
              <p>Growth Mindset</p>
            </div>
          </div>

          <p className="about-philosophy text-gray-600 text-[14px] leading-relaxed font-sans">
            {"Passionate about building scalable applications, solving real-world problems, and continuously learning modern technologies."}
          </p>
        </div>

        {/* Right Column: Interactive Phone Showcase */}
        <div className="flex-1 w-full flex justify-center items-center">
          <motion.div 
            style={{ y: yParallax }} 
            className="phone-parallax-wrapper"
          >
            <div 
              className="phone-container"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div 
                initial={{ rotateY: 15, rotateX: 5, scale: 0.95, opacity: 0 }}
                whileInView={isInView ? { rotateY: 0, rotateX: 0, scale: 1, opacity: 1 } : {}}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                style={!isMobile ? { rotateX: tiltX, rotateY: tiltY } : {}}
                className="phone-device"
              >
                <div className="phone-screen-glass">
                  {/* Notch / Dynamic Island */}
                  <div className="phone-notch"></div>
                  
                  {/* Screen Status Bar */}
                  <div className="phone-status-bar flex justify-between px-5 pt-3.5 text-[9px] font-bold text-white/30">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <span>5G</span>
                      <span>100%</span>
                    </div>
                  </div>

                  {/* Inside Phone Screen Content (Auto scrolling & scrollable) */}
                  <div 
                    ref={scrollRef}
                    onScroll={handleScroll}
                    onMouseEnter={() => { isHovered.current = true; }}
                    onMouseLeave={() => { isHovered.current = false; }}
                    className="phone-screen-content p-4 overflow-y-auto"
                  >
                    {/* Duplicated blocks for seamless infinite loops */}
                    <PhoneContentBlock />
                    <PhoneContentBlock />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
