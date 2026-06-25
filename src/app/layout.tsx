import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IntroWrapper from "@/components/ui/IntroWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Kreshi Nagar | Data Science Student Portfolio",
  description:
    "Kreshi Nagar is a Data Science student at NMIMS Chandigarh. Explore projects in AI, Machine Learning, Data Analytics, Web Development, and Software Engineering.",

  keywords: [
    "Kreshi Nagar",
    "Data Science Student",
    "NMIMS Chandigarh",
    "Machine Learning",
    "Artificial Intelligence",
    "Data Analytics",
    "Portfolio",
    "Student Developer",
    "Web Development",
    "Python",
  ],

  authors: [{ name: "Kreshi Nagar" }],

  openGraph: {
    title: "Kreshi Nagar | Data Science Portfolio",
    description:
      "Portfolio showcasing AI, Machine Learning, Data Analytics, and Web Development projects.",
    url: "https://kreshinagar-portfolio.vercel.app",
    siteName: "Kreshi Nagar Portfolio",
    type: "website",
  },

  verification: {
    google: "N9U8cbDgA2_XdSzieigFS0JmnAfIA-_f_nmAA2Da1bc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body
        className={`${poppins.variable} antialiased bg-[#F8F6F1] text-[#0f172a] font-sans`}
      >
        <IntroWrapper>
          <Navbar />
          <div className="content-wrapper">
            {children}
            <Footer />
          </div>
        </IntroWrapper>
      </body>
    </html>
  );
}
