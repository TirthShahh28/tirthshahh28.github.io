import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import RevealInit from "@/components/RevealInit";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Tirth Shah — Software / AI Engineer",
  description:
    "Tirth Shah — Software / AI Engineer. Backend systems, SQL/data workflows, and applied AI. M.S. CS @ UConn, May 2026. Open to full-time roles in 2026.",
  openGraph: {
    title: "Tirth Shah — Software / AI Engineer",
    description:
      "Backend systems, SQL/data workflows, and applied AI. Open to full-time roles in 2026.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Tirth Shah — Software / AI Engineer",
    description:
      "Backend systems, SQL/data workflows, and applied AI. Open to full-time roles in 2026.",
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
      data-accent="green"
      className={cn("scroll-smooth", geist.variable, jetbrains.variable)}
    >
      <body className={cn(geist.className, "antialiased")}>
        <RevealInit />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
