"use client";

import React, { useEffect, useState } from "react";
import { Home, User, Code, Folder, Compass, GraduationCap, Mail, Cpu, Sparkles, Award, Menu, X } from "lucide-react";
import ChatBot from "../ui/ChatBot";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Folder },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Certifications", href: "#certifications", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
];

const sublogoPhrases = [
  "FULL STACK DEVELOPER",
  "SOFTWARE ENGINEER",
  "DATA SCIENCE STUDENT"
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const [sublogoIndex, setSublogoIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const item of navItems) {
        const id = item.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setSublogoIndex((prev) => (prev + 1) % sublogoPhrases.length);
        setFade(true);
      }, 500); // fade out duration
    }, 4000); // rotation interval

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button 
        className="mobile-nav-toggle"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle navigation"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Backdrop overlay */}
      {isMobileOpen && (
        <div 
          className="sidebar-backdrop" 
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <nav className={`sidebar ${isMobileOpen ? "mobile-open" : ""}`}>
        <div className="sidebar-logo" style={{ marginBottom: "20px", paddingBottom: "10px" }}>
          <h2 className="logo-glow">KRESHI</h2>
          <p className={`sublogo-text ${fade ? "fade-in" : "fade-out"}`}>
            {sublogoPhrases[sublogoIndex]}
          </p>
        </div>
        <style>{`
          .logo-glow {
            transition: transform 0.4s ease-in-out, filter 0.4s ease-in-out;
            display: inline-block;
            cursor: pointer;
          }
          .logo-glow:hover {
            transform: scale(1.03);
            filter: drop-shadow(0 0 8px rgba(20, 184, 166, 0.6));
          }
        `}</style>

        {/* Premium Compact AI Assistant Widget */}
        <div 
          className="sidebar-ai-widget" 
          onClick={() => {
            setIsChatOpen(true);
            setIsMobileOpen(false);
          }}
        >
          <div className="ai-widget-inner">
            <div className="ai-widget-icon-container">
              <Sparkles size={15} className="ai-widget-icon" />
            </div>
            <div className="ai-widget-info">
              <span className="ai-widget-title font-outfit">AI Assistant</span>
              <span className="ai-widget-status font-outfit">Ask Kreshi's AI</span>
            </div>
          </div>
        </div>

        <div className="sidebar-links" style={{ marginTop: "10px", width: "100%" }}>
          {navItems.map((item) => {
            const id = item.href.substring(1);
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`sidebar-link ${activeId === id ? "active" : ""}`}
                onClick={() => setIsMobileOpen(false)}
              >
                <Icon size={16} className="nav-icon" />
                <span className="n-text">{item.name}</span>
              </a>
            );
          })}
        </div>
      </nav>

      <ChatBot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </>
  );
}
