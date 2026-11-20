"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "../assets/Brand_Logo.png";

type NavLink = {
  label: string;
  href: string;
};

// Edit, add, or remove links here
const links: NavLink[] = [
 { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Prototype", href: "#prototype" },
  
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-brand-secondary/10 text-brand-secondary backdrop-blur-md transition-colors ${
        open
          ? "bg-white/95"
          : "bg-white/90 supports-[backdrop-filter]:bg-white/70"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Company logo"
            width={100}
            className="h-9 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="flex items-center gap-2 font-medium transition-colors hover:text-brand-secondary/60"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded p-2 transition-colors hover:bg-brand-secondary/5 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-brand-secondary/10 px-4 py-3 sm:px-6 md:hidden">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded px-2 py-3 font-medium transition-colors hover:bg-brand-secondary/5"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}