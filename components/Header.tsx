"use client";
import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
	<header className="sticky top-0 z-50 border-b border-neutral-800 bg-black text-neutral-200 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
  <Link href="#home" className="text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-all duration-300 hover:scale-105">
          Lewis Perez
        </Link>
    <nav className="hidden md:flex gap-6 text-sm" aria-label="Main navigation">
          {navItems.map(item => (
      <Link key={item.href} href={item.href} className="hover:text-white transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="#contact" className="inline-flex items-center rounded-full bg-blue-600 text-white px-5 py-2 text-sm font-medium shadow hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg">Hire Me</Link>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10"
          aria-label="Toggle navigation"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </div>
        </button>
      </div>
  {open && (
	<div className="md:hidden border-t border-neutral-800 bg-black/95">
          <nav className="px-4 py-4 flex flex-col gap-4" aria-label="Mobile navigation">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
        className="text-sm font-medium hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
    <div className="flex items-center gap-3 pt-2 border-t border-neutral-800">
              <ThemeToggle />
              <Link href="#contact" className="inline-flex flex-1 items-center justify-center rounded-full bg-blue-600 text-white px-5 py-2 text-sm font-medium shadow hover:bg-blue-500" onClick={() => setOpen(false)}>Hire Me</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
