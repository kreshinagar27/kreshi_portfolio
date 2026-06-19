import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { name } = portfolioData.personalInfo;

  return (
    <footer>
      <p>© 2026 {name}</p>
      <p>Designed & Developed using HTML, CSS & JavaScript</p>
    </footer>
  );
}
