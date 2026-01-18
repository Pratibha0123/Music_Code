import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music Mastery Academy | Learn Music Online",
  description: "Master music online with immersive courses, expert instructors, and interactive experiences. Explore music theory, composition, songwriting, and production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center ">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
