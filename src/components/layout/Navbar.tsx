"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#timeline" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light";
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "light") {
        document.body.classList.add("light");
      } else {
        document.body.classList.remove("light");
      }
    }
  }, []);

  const toggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  };

  return (
    <nav>
      {navItems.map((item) => (
        <a key={item.name} href={item.href}>
          {item.name}
        </a>
      ))}
      <a href="#" onClick={toggleTheme}>
        {theme === "dark" ? "🌙" : "☀️"}
      </a>
    </nav>
  );
}
