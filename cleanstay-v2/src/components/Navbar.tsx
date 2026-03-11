'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#f0f0f0]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#0c1a2e] rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">CS</span>
          </div>
          <span className="text-[15px] font-bold text-[#0c1a2e] tracking-tight" style={{fontFamily:'Syne,sans-serif'}}>
            CleanStay
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {[['Wie es funktioniert', '/#how'], ['Preise', '/#pricing'], ['Für Reinigungskräfte', '/register-cleaner']].map(([label, href]) => (
            <Link key={label} href={href} className="text-sm text-slate-500 hover:text-[#0c1a2e] transition-colors font-medium">
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-sm font-medium text-slate-500 hover:text-[#0c1a2e] transition-colors px-3 py-2">
            Anmelden
          </Link>
          <Link href="/register-host" className="btn-primary">
            Kostenlos starten
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-600">
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#f0f0f0] bg-white px-6 py-5 space-y-4">
          {[['Wie es funktioniert', '/#how'], ['Preise', '/#pricing'], ['Für Reinigungskräfte', '/register-cleaner'], ['Anmelden', '/login']].map(([l, h]) => (
            <Link key={l} href={h} onClick={() => setOpen(false)} className="block text-sm font-medium text-slate-600 py-1">{l}</Link>
          ))}
          <Link href="/register-host" onClick={() => setOpen(false)} className="btn-primary block text-center mt-2">Kostenlos starten</Link>
        </div>
      )}
    </header>
  )
}
