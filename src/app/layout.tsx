"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
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
  const pathname = usePathname();

  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style>{`body, h1 { font-family: 'Orbitron', sans-serif; }`}</style>
      </head>
      <body>
        <nav className="flex items-center justify-between p-4 bg-black text-white">
          <h1 className="font-bold text-xl">Augment Ascension</h1>
          <ul className="flex gap-6">
            {[
              { href: "/", label: "Home" },
              { href: "/signup", label: "Signup" },
              { href: "/shop", label: "Shop" },
              { href: "/about", label: "About" },
              { href: "/cart", label: "Cart" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`hover:text-pink-400 transition ${
                    pathname === href
                      ? "text-pink-500 border-b border-pink-500"
                      : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
