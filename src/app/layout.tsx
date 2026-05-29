import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tirth Shah | Software Engineer",
  description:
    "Software engineer (M.Eng CS @ UConn, May 2026). Backend systems, SQL/data workflows, enterprise web apps, and applied AI.",
  openGraph: {
    title: "Tirth Shah | Software Engineer",
    description:
      "Software engineer — backend systems, SQL/data workflows, enterprise web apps, and applied AI.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Tirth Shah | Software Engineer",
    description:
      "Software engineer — backend systems, SQL/data workflows, enterprise web apps, and applied AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("scroll-smooth", "font-sans", geist.variable)}
    >
      <body className={`${inter.variable} font-sans antialiased dark-mode`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
