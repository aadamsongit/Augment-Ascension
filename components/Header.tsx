"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// Update the import path if AuthContext is located elsewhere, for example:
import { useAuth } from "../contexts/AuthContext";
// Or, if the file does not exist, create it at the correct path and export useAuth.

export default function Header() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/cart", label: "Cart" },
];

return (
  <nav className="flex items-center justify-between p-4 bg-black text-white">
    <h1 className="font-bold text-xl">Augment Ascension</h1>
    <ul className="flex gap-6">
      {links.map(({ href, label }) => (
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

      {!user ? (
        <li>
          <Link
            href="/signup"
            className={`hover:text-pink-400 transition ${
              pathname === "/signup"
                ? "text-pink-500 border-b border-pink-500"
                : ""
            }`}
          >
            Sign In / Sign Up
          </Link>
        </li>
      ) : (
        <li>
          <button
            onClick={logout}
            className="hover:text-pink-400 transition"
          >
            Sign Out
          </button>
        </li>
      )}
    </ul>
  </nav>
);
}
