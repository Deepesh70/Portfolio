// src/app/layout.tsx

import type { Metadata } from "next";
// 1. Import a font (we'll use Inter as a professional, modern default)
import { Inter } from "next/font/google";
import "./globals.css"; // Your Tailwind global styles
import { Footer } from "@/components/Footer";

// 2. Configure the font loader
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// 3. Define Metadata (Crucial for SEO)
export const metadata: Metadata = {
  title: "Deepesh Dangi | Developer Portfolio", 
  description: "High-impact portfolio showcasing web development expertise using Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 4. Apply font variable to HTML tag
    // Set a default background/text color for the entire app using Tailwind
    <html lang="en" className={`${inter.variable} bg-gray-50 text-gray-900`}>
      <body>
        {/* 5. Placeholder for the shared structure */}
        {/* 🚨 We will put the Header/Navbar component here later */}

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}