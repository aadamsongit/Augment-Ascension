"use client";

import { ReactNode } from "react";
import { AuthProvider } from "../../contexts/AuthContext";
// Update the import path if Header is located elsewhere, for example:
import Header from "../../components/Header";
import "./globals.css";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style>{`body, nav, nav h1, nav ul, nav li, nav a { font-family: 'Rajdhani', sans-serif; }`}</style>
      </head>
      <body>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
