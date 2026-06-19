"use client";

import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { name, tagline, bio, contact } = portfolioData.personalInfo;
  const { stats } = portfolioData;

  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer & App Creator";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      // Use index variable closure to safely reference incrementing value
      setTypedText(fullText.substring(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <div className="badge">
          🟢 Available for Opportunities
        </div>

        <h1>{name}</h1>

        <h2 id="typing-text">{typedText}</h2>

        <p>{bio}</p>

        <div className="hero-buttons">
          <a href="#projects">
            <button className="hero-btn-primary">View Projects</button>
          </a>
          <a href="#contact">
            <button className="contact-btn">Contact Me</button>
          </a>
        </div>

        <div className="stats">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <h3>{stat.value}</h3>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-image">
        {/* We use an elegant high-quality developer avatar from Unsplash as the profile image */}
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
          alt={name}
        />
      </div>
    </section>
  );
}
