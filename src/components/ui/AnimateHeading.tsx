"use client";

import { motion } from "framer-motion";

interface AnimateHeadingProps {
  text: string;
  id: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export default function AnimateHeading({ text, id, className = "", align = "center" }: AnimateHeadingProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 1,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
      },
    },
  };

  const isLeft = align === "left";
  const isRight = align === "right";

  return (
    <div className="heading-animate-wrapper" style={{ display: "inline-block", width: "100%" }}>
      {/* Scope a style tag to disable the static CSS h2::after underline */}
      <style>{`
        #${id}::after {
          display: none !important;
        }
      `}</style>
      
      <motion.h2
        id={id}
        className={className}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{
          y: -4,
          scale: 1.025,
          filter: "drop-shadow(0 0 8px rgba(20, 184, 166, 0.45))",
          backgroundPosition: "0% 0%",
          transition: {
            y: { duration: 0.35, ease: [0.215, 0.61, 0.355, 1] },
            scale: { duration: 0.35, ease: [0.215, 0.61, 0.355, 1] },
            filter: { duration: 0.35, ease: [0.215, 0.61, 0.355, 1] },
            backgroundPosition: { duration: 0.75, ease: "easeInOut" },
          }
        }}
        style={{
          display: "flex",
          justifyContent: isLeft ? "flex-start" : isRight ? "flex-end" : "center",
          flexWrap: "wrap",
          columnGap: "0.25em",
          rowGap: "0.1em",
          marginBottom: "0",
          width: "fit-content",
          marginLeft: isLeft ? "0" : isRight ? "auto" : "auto",
          marginRight: isLeft ? "auto" : isRight ? "0" : "auto",
          cursor: "default",
          backgroundImage: "linear-gradient(110deg, #0f766e 35%, #5eead4 50%, #0f766e 65%)",
          backgroundSize: "250% 100%",
          backgroundPosition: "100% 0%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>

      <div
        className="heading-accent-line"
        style={{
          height: "3px",
          backgroundColor: "#14b8a6",
          marginTop: "15px",
          width: "60px",
          marginLeft: isLeft ? "0" : "auto",
          marginRight: isRight ? "0" : "auto",
          borderRadius: "2px",
        }}
      />
    </div>
  );
}
