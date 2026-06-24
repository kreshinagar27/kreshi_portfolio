"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroWrapperProps {
  children: React.ReactNode;
}

const greetings = [
  "Hello",        // English
  "नमस्ते",        // Hindi
  "Hola",   // Spanish
  "Bonjour"       // French
];

// Single shared timing configuration (in seconds)
const GREETING_TIMING = {
  fadeIn: 0.45,
  hold: 0.90,
  fadeOut: 0.45
};

export default function IntroWrapper({ children }: IntroWrapperProps) {
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState<boolean | null>(null);

  // Compute timing constants from configuration
  const duration = GREETING_TIMING.fadeIn + GREETING_TIMING.hold + GREETING_TIMING.fadeOut; // 1.8s
  const fadeInRatio = GREETING_TIMING.fadeIn / duration; // 0.25
  const holdRatio = (GREETING_TIMING.fadeIn + GREETING_TIMING.hold) / duration; // 0.75

  const stepDurationSec = GREETING_TIMING.fadeIn + GREETING_TIMING.hold; // 1.35s
  const stepDurationMs = stepDurationSec * 1000; // 1350ms
  const totalIntroDurationMs = greetings.length * stepDurationMs; // 5400ms

  useEffect(() => {
    setMounted(true);

    // Check sessionStorage to only play once per session
    try {
      const hasSeen = sessionStorage.getItem("hasSeenMultilingualIntro");
      if (hasSeen === "true") {
        setShowIntro(false);
      } else {
        setShowIntro(true);
        document.body.style.overflow = "hidden";
      }
    } catch (e) {
      console.warn("sessionStorage is not available:", e);
      setShowIntro(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  // Timer to initiate the curtain exit once all greetings have played
  useEffect(() => {
    if (showIntro === true) {
      const exitTimer = setTimeout(() => {
        setShowIntro(false);
        try {
          sessionStorage.setItem("hasSeenMultilingualIntro", "true");
        } catch (e) {
          console.warn("sessionStorage is not available:", e);
        }
        document.body.style.overflow = "";
      }, totalIntroDurationMs);

      return () => clearTimeout(exitTimer);
    }
  }, [showIntro, totalIntroDurationMs]);

  const handleAnimationComplete = () => {
    document.body.style.overflow = "";
  };

  // SEO-friendly server fallback
  if (!mounted) {
    return (
      <>
        <div style={{ position: "fixed", inset: 0, backgroundColor: "#02050a", zIndex: 999999 }} />
        <div style={{ opacity: 0 }}>{children}</div>
      </>
    );
  }

  // Bypass intro overlay instantly if already seen in this session
  if (showIntro === false) {
    return <div style={{ width: "100%", minHeight: "100vh" }}>{children}</div>;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            key="multilingual-intro"
            initial={{ y: 0 }}
            exit={{
              y: "-100vh",
              transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
            }}
            onAnimationComplete={handleAnimationComplete}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "#02050a",
              zIndex: 999999,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {/* Ambient background lighting */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "50vw",
                height: "50vw",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(20, 184, 166, 0.05) 0%, rgba(20, 184, 166, 0) 70%)",
                filter: "blur(80px)",
                pointerEvents: "none",
              }}
            />

            {/* Subtle particle field */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
              {[...Array(12)].map((_, i) => {
                const randomX = (i * 27) % 100;
                const randomY = (i * 37) % 100;
                return (
                  <motion.div
                    key={i}
                    style={{
                      position: "absolute",
                      left: `${randomX}%`,
                      top: `${randomY}%`,
                      width: "2px",
                      height: "2px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.1, 0.4, 0.1]
                    }}
                    transition={{
                      duration: 6 + (i % 4) * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                  />
                );
              })}
            </div>

            {/* Text Animation Area */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              {greetings.map((greeting, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0.96, 1.0, 1.02, 1.04],
                    y: [12, 0, 0, -12]
                  }}
                  transition={{
                    duration: duration,
                    times: [0, fadeInRatio, holdRatio, 1],
                    delay: i * stepDurationSec,
                    ease: "easeInOut"
                  }}
                  style={{
                    position: "absolute",
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "0.05em",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    whiteSpace: "nowrap"
                  }}
                >
                  {/* Premium visual accent dot */}
                  <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#14b8a6" }} />
                  {greeting}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Reveal Animation */}
      <motion.div
        initial={showIntro === true ? { opacity: 0, scale: 0.98 } : false}
        animate={(showIntro as any) === false ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        style={{ width: "100%", minHeight: "100vh" }}
      >
        {children}
      </motion.div>
    </>
  );
}
