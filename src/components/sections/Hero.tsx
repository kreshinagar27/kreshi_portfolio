"use client";

import { useEffect, useState } from "react";

const roles = [
  "Student Developer",
  "Computer Science Student",
  "Specialization in Data Science"
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (currentText !== fullText) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, 70); // Typing speed
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Pause after typing
      }
    } else {
      if (currentText !== "") {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        }, 40); // Deleting speed
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentRoleIndex((prevIdx) => (prevIdx + 1) % roles.length);
        }, 400); // Pause before next phrase
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="hero">
      <video
        src="/videos/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
        className="hero-video"
      />
      <div className="hero-text">
        <h1 className="hero-name-split font-outfit">
          Kreshi
          <br />
          Nagar
        </h1>

        <div className="plaque-drop-line" />

        <div className="hero-plaque">
          <div className="plaque-top">
            <span className="plaque-label font-outfit">ROLE</span>
            <span className="plaque-value font-outfit">DATA SCIENCE STUDENT</span>
          </div>
          <div className="plaque-bottom">
            <span className="plaque-sub-label font-outfit">CURRENTLY OPERATING AS</span>
            <h3 className="plaque-typing font-outfit">
              {currentText}
              <span className="animate-pulse text-[#14b8a6]">|</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
