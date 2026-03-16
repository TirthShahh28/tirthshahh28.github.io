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
  title: "Tirth Shah | AI Engineer",
  description:
    "Tirth Shah — AI & Software Engineer. M.S. in Computer Science at UConn. Portfolio showcasing AI/ML projects, experience, and skills.",
  openGraph: {
    title: "Tirth Shah | AI Engineer",
    description:
      "AI & Software Engineer — RAG pipelines, LLM integrations, and scalable data systems.",
    type: "website",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark') {
                  document.body.classList.add('dark-mode');
                }
              } catch(e) {}
            `,
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
