"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { portfolioData } from "@/data/portfolio";
import { Mail, Github, Linkedin, FileText, Wifi, Battery, Signal, ArrowUpRight } from "lucide-react";
import AnimateHeading from "@/components/ui/AnimateHeading";

export default function Contact() {
  const { contact, socialLinks } = portfolioData.personalInfo;

  return (
    <section id="contact" className="contact fade-up" style={{ position: "relative", overflow: "hidden" }}>
      <RevealOnScroll>
        <div className="contact-layout-wrapper">
          {/* Left Column: Heading, Description, Buttons */}
          <div className="contact-info-column">
            <AnimateHeading text="Contact Me" id="contact-heading" align="left" className="contact-heading" />
            <p className="contact-description">
              Let's build something amazing together. Feel free to reach out via email or any of the social links below.
            </p>

            <div className="contact-actions-grid">
              <a 
                href={`mailto:${contact.email}`} 
                className="custom-contact-btn email-btn"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noreferrer" 
                className="custom-contact-btn github-btn"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="custom-contact-btn linkedin-btn"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a 
                href={socialLinks.resume} 
                className="custom-contact-btn resume-btn"
              >
                <FileText size={20} />
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Phone Animation */}
          <div className="contact-animation-column">
            <div className="phone-3d-scene">
              <div className="phone-3d-box">
                {/* Sides to construct the 3D box shape */}
                <div className="phone-side phone-side-left"></div>
                <div className="phone-side phone-side-right"></div>
                <div className="phone-side phone-side-top"></div>
                <div className="phone-side phone-side-bottom"></div>

                {/* Back of the Phone */}
                <div className="phone-face phone-face-back">
                  <div className="camera-module">
                    <div className="camera-lens camera-lens-large"></div>
                    <div className="camera-lens camera-lens-small"></div>
                    <div className="camera-flash"></div>
                  </div>
                  <div className="phone-back-logo">K</div>
                  <div className="phone-back-branding">Kreshi Nagar</div>
                </div>

                {/* Front of the Phone (Screen) */}
                <div className="phone-face phone-face-front">
                  {/* Status Bar */}
                  <div className="phone-status-bar">
                    <span className="phone-time">09:41</span>
                    <div className="phone-status-icons">
                      <Signal size={12} className="status-icon" />
                      <Wifi size={12} className="status-icon" />
                      <Battery size={12} className="status-icon" />
                    </div>
                  </div>

                  {/* Notch */}
                  <div className="phone-notch"></div>

                  {/* Screen Content */}
                  <div className="phone-screen-content-wrapper">
                    <div className="mock-app-header">
                      <div className="mock-profile-pic">KN</div>
                      <div className="mock-header-text">
                        <h3>Kreshi Nagar</h3>
                        <p>Available for hire</p>
                      </div>
                    </div>

                    <div className="mock-content-body">
                      <div className="mock-card mock-card-teal">
                        <div className="mock-card-header">
                          <span>Active Projects</span>
                          <ArrowUpRight size={14} className="mock-card-icon" />
                        </div>
                        <div className="mock-card-value">3+</div>
                        <div className="mock-card-desc">React, Node, Mobile Apps</div>
                      </div>

                      <div className="mock-card mock-card-dark">
                        <div className="mock-card-header">
                          <span>Focus</span>
                        </div>
                        <p className="mock-card-text">Building premium digital experiences and software products.</p>
                      </div>

                      <div className="mock-card mock-card-border">
                        <div className="mock-card-header">
                          <span>Tech Stack</span>
                        </div>
                        <div className="mock-tech-tags">
                          <span>HTML</span>
                          <span>CSS</span>
                          <span>React</span>
                          <span>Node</span>
                        </div>
                      </div>
                    </div>

                    <div className="mock-app-footer">
                      <div className="mock-footer-btn">
                        <span>Let's Talk</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Scoped CSS Styles to satisfy scope restriction and keep globals.css untouched */}
      <style jsx>{`
        .contact-layout-wrapper {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
          padding: 20px 0;
        }

        .contact-info-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .contact-heading {
          font-size: 40px;
          font-weight: 700;
          color: #0f766e;
          margin-bottom: 20px;
          position: relative;
        }

        .contact-heading::after {
          content: "";
          display: block;
          width: 60px;
          height: 3px;
          background: #14b8a6;
          margin: 10px 0 0 0;
        }

        .contact-description {
          font-size: 18px;
          color: #475569;
          margin-bottom: 40px;
          line-height: 1.6;
          max-width: 550px;
        }

        .contact-actions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          width: 100%;
          max-width: 480px;
        }

        .custom-contact-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          text-decoration: none;
          color: #0f172a;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 16px 24px;
          border-radius: 14px;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
        }

        .custom-contact-btn:hover {
          transform: translateY(-4px);
          background: #14b8a6;
          border-color: #14b8a6;
          color: white;
          box-shadow: 0 10px 25px rgba(20, 184, 166, 0.25);
        }

        /* 3D Phone Animation Column Styles */
        .contact-animation-column {
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1200px;
        }

        .phone-3d-scene {
          width: 250px;
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
          transform-style: preserve-3d;
        }

        .phone-3d-box {
          position: relative;
          width: 210px;
          height: 420px;
          transform-style: preserve-3d;
          animation: phoneInfiniteAnimation 15s infinite linear;
          transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        /* Continuous rotation and realistic 360° flip animation */
        @keyframes phoneInfiniteAnimation {
          0% {
            transform: rotateY(0deg) rotateX(10deg) rotateZ(0deg) translateY(0px);
          }
          25% {
            transform: rotateY(90deg) rotateX(18deg) rotateZ(-3deg) translateY(-10px);
          }
          50% {
            transform: rotateY(180deg) rotateX(10deg) rotateZ(0deg) translateY(0px);
          }
          70% {
            /* Flip around X and Y axis for premium presentation */
            transform: rotateY(250deg) rotateX(200deg) rotateZ(6deg) translateY(-15px);
          }
          85% {
            transform: rotateY(310deg) rotateX(345deg) rotateZ(3deg) translateY(-5px);
          }
          100% {
            transform: rotateY(360deg) rotateX(370deg) rotateZ(0deg) translateY(0px);
          }
        }

        /* Hover interaction: slows down rotation, scale increase, glow */
        .phone-3d-box:hover {
          animation-play-state: paused;
          transform: scale(1.06) rotateY(15deg) rotateX(10deg);
        }

        /* Glow effect on hover */
        .phone-3d-box::after {
          content: "";
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background: radial-gradient(circle, rgba(20, 184, 166, 0.25) 0%, transparent 70%);
          border-radius: 40px;
          transform: translateZ(-20px);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .phone-3d-box:hover::after {
          opacity: 1;
        }

        /* Faces of the 3D phone */
        .phone-face {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 32px;
          overflow: hidden;
          backface-visibility: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        /* Front Screen */
        .phone-face-front {
          background: #090d16;
          border: 4px solid #1e293b;
          transform: translateZ(6px);
          display: flex;
          flex-direction: column;
          padding: 12px;
          user-select: none;
        }

        /* Diagonal Moving Light Sweep reflection */
        .phone-face-front::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            30deg,
            rgba(255, 255, 255, 0) 35%,
            rgba(255, 255, 255, 0.05) 48%,
            rgba(20, 184, 166, 0.05) 50%,
            rgba(255, 255, 255, 0.05) 52%,
            rgba(255, 255, 255, 0) 65%
          );
          transform: rotate(30deg);
          animation: screenReflectSweep 8s infinite linear;
          pointer-events: none;
          z-index: 25;
        }

        @keyframes screenReflectSweep {
          0% { transform: translate(-30%, -30%) rotate(30deg); }
          100% { transform: translate(30%, 30%) rotate(30deg); }
        }

        /* Back Screen */
        .phone-face-back {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border: 4px solid #334155;
          transform: rotateY(180deg) translateZ(6px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #94a3b8;
          padding: 20px;
        }

        /* 3D Border Panels (Sides) */
        .phone-side {
          position: absolute;
          background: #1e293b;
          border: 1px solid #334155;
        }

        .phone-side-left,
        .phone-side-right {
          width: 12px;
          height: calc(100% - 32px);
          top: 16px;
        }

        .phone-side-left {
          left: -6px;
          transform: rotateY(-90deg);
        }

        .phone-side-right {
          right: -6px;
          transform: rotateY(90deg);
        }

        .phone-side-top,
        .phone-side-bottom {
          height: 12px;
          width: calc(100% - 32px);
          left: 16px;
        }

        .phone-side-top {
          top: -6px;
          transform: rotateX(90deg);
        }

        .phone-side-bottom {
          bottom: -6px;
          transform: rotateX(-90deg);
        }

        /* Notch & Status Bar */
        .phone-notch {
          width: 80px;
          height: 16px;
          background: #000000;
          border-radius: 0 0 10px 10px;
          position: absolute;
          top: 4px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 30;
        }

        .phone-status-bar {
          height: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 8px;
          color: #64748b;
          font-size: 11px;
          font-weight: 600;
          margin-bottom: 12px;
          z-index: 20;
        }

        .phone-status-icons {
          display: flex;
          gap: 4px;
          align-items: center;
        }

        .status-icon {
          opacity: 0.8;
        }

        /* Mock App Content Styles */
        .phone-screen-content-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 20;
          overflow: hidden;
        }

        .mock-app-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mock-profile-pic {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #14b8a6;
          color: white;
          font-weight: bold;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mock-header-text h3 {
          font-size: 12px;
          color: white;
          margin: 0;
          font-weight: 600;
        }

        .mock-header-text p {
          font-size: 9px;
          color: #14b8a6;
          margin: 0;
          font-weight: 500;
        }

        .mock-content-body {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 12px 0;
          flex: 1;
          justify-content: center;
        }

        .mock-card {
          border-radius: 12px;
          padding: 10px;
          text-align: left;
        }

        .mock-card-teal {
          background: rgba(20, 184, 166, 0.1);
          border: 1px solid rgba(20, 184, 166, 0.2);
        }

        .mock-card-dark {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mock-card-border {
          border: 1px dashed rgba(255, 255, 255, 0.15);
        }

        .mock-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 9px;
          color: #94a3b8;
          font-weight: 600;
        }

        .mock-card-value {
          font-size: 18px;
          font-weight: 700;
          color: #14b8a6;
          margin: 2px 0;
        }

        .mock-card-desc {
          font-size: 8px;
          color: #64748b;
        }

        .mock-card-text {
          font-size: 9px;
          color: #cbd5e1;
          margin-top: 4px;
          line-height: 1.4;
        }

        .mock-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 6px;
        }

        .mock-tech-tags span {
          font-size: 8px;
          background: rgba(255, 255, 255, 0.06);
          color: #94a3b8;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .mock-app-footer {
          padding-top: 10px;
        }

        .mock-footer-btn {
          background: #14b8a6;
          color: white;
          text-align: center;
          padding: 8px;
          border-radius: 10px;
          font-size: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .mock-footer-btn:hover {
          background: #0d9488;
        }

        /* Back Plate camera design styling */
        .camera-module {
          width: 55px;
          height: 110px;
          background: #0f172a;
          border: 2px solid #334155;
          border-radius: 16px;
          position: absolute;
          top: 25px;
          left: 20px;
          padding: 8px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }

        .camera-lens {
          border-radius: 50%;
          background: #000;
          border: 2px solid #1e293b;
        }

        .camera-lens-large {
          width: 30px;
          height: 30px;
          box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.2);
        }

        .camera-lens-small {
          width: 22px;
          height: 22px;
        }

        .camera-flash {
          width: 8px;
          height: 8px;
          background: #fef08a;
          border-radius: 50%;
          box-shadow: 0 0 6px #fef08a;
        }

        .phone-back-logo {
          font-size: 40px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.1);
          margin-top: 40px;
        }

        .phone-back-branding {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.2);
          position: absolute;
          bottom: 25px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        /* Responsive styling for Mobile & Tablet */
        @media (max-width: 968px) {
          .contact-layout-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 10px 0;
          }

          .contact-info-column {
            align-items: center;
            text-align: center;
          }

          .contact-heading::after {
            margin: 10px auto 0 auto;
          }

          .contact-description {
            margin-bottom: 30px;
          }

          .contact-actions-grid {
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .contact-actions-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .phone-3d-scene {
            width: 200px;
            height: 420px;
          }

          .phone-3d-box {
            width: 175px;
            height: 350px;
          }

          .camera-module {
            width: 45px;
            height: 90px;
            top: 20px;
            left: 15px;
          }

          .camera-lens-large {
            width: 24px;
            height: 24px;
          }

          .camera-lens-small {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
    </section>
  );
}
