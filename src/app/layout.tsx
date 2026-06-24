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

export const metadata: Metadata = {
  title: `${portfolioData.personalInfo.name} | Portfolio`,
  description: portfolioData.personalInfo.tagline,
  openGraph: {
    title: `${portfolioData.personalInfo.name} | Portfolio`,
    description: portfolioData.personalInfo.tagline,
    type: "website",
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
