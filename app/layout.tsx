import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600"] 
});

export const metadata: Metadata = {
  title: "Milan | Premium Sneakers & Suits",
  description: "Timeless elegance meets contemporary streetwear.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-neutral-900 antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}