"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // "dark" = we're over a dark section → use white buttons
  // "light" = we're over a light section → use dark buttons
  const [sectionTheme, setSectionTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const NAV_MID = 56; // px from top — midpoint of nav bar

    const detect = () => {
      const sections = document.querySelectorAll<HTMLElement>("[data-nav-theme]");
      for (const section of sections) {
        const { top, bottom } = section.getBoundingClientRect();
        if (top <= NAV_MID && bottom > NAV_MID) {
          setSectionTheme(
            (section.dataset.navTheme as "dark" | "light") ?? "dark"
          );
          return;
        }
      }
    };

    window.addEventListener("scroll", detect, { passive: true });
    detect();
    return () => window.removeEventListener("scroll", detect);
  }, []);

  const isDark = sectionTheme === "dark"; // over dark section → white elements

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <nav className="w-full px-12 lg:px-20 flex items-center justify-between h-28 lg:h-32">

          {/* Logo */}
          <Logo
            colorScheme={isDark ? "light" : "dark"}
            className="scale-[1.5] origin-left transition-all duration-500"
          />

          {/* Two pill buttons */}
          <div className="flex items-center gap-2 lg:gap-3">

            {/* Menu pill — outlined, flips dark/light */}
            <button
              onClick={() => setMenuOpen(true)}
              style={{ transition: "color 0.4s, border-color 0.4s, background 0.4s" }}
              className={`inline-flex items-center gap-2.5 lg:gap-3.5 text-sm lg:text-lg font-medium px-5 py-3 lg:px-9 lg:py-4 rounded-full border ${
                isDark
                  ? "border-white/40 text-white hover:border-white/80 hover:bg-white/10"
                  : "border-navy/35 text-navy hover:border-navy/70 hover:bg-navy/8"
              }`}
            >
              Menu
              <span className="flex flex-col gap-[5px]" aria-hidden="true">
                <span className={`block w-4 lg:w-5 h-[1.5px] rounded-full ${isDark ? "bg-white" : "bg-navy"}`} />
                <span className={`block w-3 lg:w-3.5 h-[1.5px] rounded-full ${isDark ? "bg-white" : "bg-navy"}`} />
              </span>
            </button>

            {/* Get in Touch pill — always navy filled, hidden on smallest screens */}
            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 lg:gap-2.5 bg-navy text-white text-sm lg:text-lg font-medium px-5 py-3 lg:px-9 lg:py-4 rounded-full hover:bg-navy-dark transition-colors duration-200"
            >
              Get in Touch
              <span aria-hidden="true" className="opacity-70">→</span>
            </Link>

          </div>
        </nav>
      </header>

      {/* ── Full-screen menu overlay ── */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(0,29,48,0.97)", backdropFilter: "blur(12px)" }}
      >
        {/* Top bar inside overlay */}
        <div className="w-full px-12 lg:px-20 flex items-center justify-between h-28 lg:h-32 w-full">
          <Logo colorScheme="light" className="scale-[1.5] origin-left" />
          <button
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-3.5 text-white text-lg font-medium px-9 py-4 rounded-full border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-200"
          >
            Close
            <span className="text-white/70 text-xl leading-none" aria-hidden="true">×</span>
          </button>
        </div>

        {/* Nav links */}
        <div className="flex-1 flex flex-col justify-center w-full px-12 lg:px-20 w-full">
          <ul className="space-y-2">
            {navLinks.map(({ label, href }, i) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-white/80 hover:text-white transition-colors block"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 5rem)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-16 flex items-center gap-6">
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 bg-white text-navy text-sm font-bold px-6 py-3 rounded-full hover:bg-offwhite transition-colors"
            >
              Start a Project →
            </Link>
            <span className="text-white/25 text-xs tracking-widest uppercase">Poland — Nordic Standards</span>
          </div>
        </div>
      </div>
    </>
  );
}
