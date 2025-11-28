'use client'
import React, { useState, useRef, useEffect } from "react";

// CronusHeaderNav.jsx
// Lightweight, production-ready React component using Tailwind CSS.
// No framer-motion. No external animation libs. Small, optimized, accessible.

export default function CronusHeaderNav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when route changes or on Escape
  useEffect(() => {
    function onKey(e: { key: string; }) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);


  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="bg-black text-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LEFT: Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 select-none">
              
              <div className="flex flex-col leading-none">
                <span className="text-lg font-semibold tracking-wide">Cronus</span>
                <span className="text-xs text-slate-400 -mt-0.5">Issue tracking, elevated</span>
              </div>
            </a>

            <span className="hidden md:inline-flex px-2 py-0.5 text-xs text-sky-300 bg-sky-900/20 rounded-full border border-sky-800">
              Beta
            </span>
          </div>

          {/* CENTER: Nav (desktop) */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((l) => (
              <a key={l.name} href={l.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                {l.name}
              </a>
            ))}
          </nav>

          {/* RIGHT: CTAs */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex sm:items-center sm:gap-3">
              <a href="#login" className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition">
                Log in
              </a>

              <a href="#signup" className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold bg-black shadow text-white">
                Sign up
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition"
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className="">
                {open ? (
                  <>
                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </>
                ) : (
                  <>
                    <path d="M4 7H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M4 12H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M4 17H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE PANEL: simple, performant collapse using max-height CSS */}
      <div
        ref={panelRef}
        className="md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-slate-800"
        // eslint-disable-next-line react-hooks/refs
        style={{ maxHeight: open ? panelRef.current?.scrollHeight + "px" : "0px" }} 
      >
        <div className="px-4 pt-4 pb-6 space-y-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <a key={l.name} href={l.href} className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800" onClick={() => setOpen(false)}>
                {l.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800">
            <a href="#login" className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800" onClick={() => setOpen(false)}>
              Log in
            </a>
            <a href="#signup" className="mt-3 block w-full text-center px-3 py-2 rounded-md text-base font-semibold bg-black text-white" onClick={() => setOpen(false)}>
              Sign up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
