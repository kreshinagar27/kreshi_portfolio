"use client";

import { motion } from "framer-motion";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps;
type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonProps;

export default function Button(props: NativeButtonProps | AnchorProps) {
  const { variant = "primary", size = "md", href, className, children, ...rest } = props;

  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-lavender/50";
  
  const variants = {
    primary: "bg-lavender text-midnight hover:bg-blush hover:shadow-[0_0_20px_rgba(244,194,194,0.4)]",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md",
    outline: "border border-lavender/50 text-lavender hover:bg-lavender/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const MotionComponent = motion.create(href ? "a" : "button");

  return (
    <MotionComponent
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
      {...(href ? { href } : {})}
      {...(rest as any)}
    >
      {children}
    </MotionComponent>
  );
}
