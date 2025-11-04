"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#0E1116]/90 backdrop-blur border-b border-[#C47A45]/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="NEWOOD Logo" className="h-9 w-9 rounded-md" />
            <span className="font-extrabold tracking-tight text-xl text-[#C47A45]">
              NEWOOD <span className="font-light text-[#E3C9AE]">MILLWORK INC</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-sm text-[#E3C9AE] hover:text-[#C47A45]">About</Link>
            <Link href="/quote" className="text-sm text-[#E3C9AE] hover:text-[#C47A45]">Request a Quote</Link>
            <a href="/#portfolio" className="text-sm text-[#E3C9AE] hover:text-[#C47A45]">Portfolio</a>
            <a href="/#contact" className="inline-flex items-center rounded-xl border border-[#C47A45] px-4 py-2 text-sm font-semibold hover:bg-[#C47A45] hover:text-[#0E1116]">Get a Quote</a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-[#1A1D23]" aria-label="Toggle Menu">
            <svg width="24" height="24"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#C47A45]/30 bg-[#0E1116]">
          <div className="px-4 py-3 space-y-1">
            <Link href="/about" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm hover:bg-[#1A1D23]">About</Link>
            <Link href="/quote" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm hover:bg-[#1A1D23]">Request a Quote</Link>
            <a href="/#portfolio" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm hover:bg-[#1A1D23]">Portfolio</a>
            <a href="/#contact" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-semibold border border-[#C47A45]">Get a Quote</a>
          </div>
        </div>
      )}
    </header>
  );
}
