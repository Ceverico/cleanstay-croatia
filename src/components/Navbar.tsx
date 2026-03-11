'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false)
  const link = dark ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-sea-500'
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${dark ? 'bg-[rgba(7,25,41,0.9)] backdrop-blur-md' : 'bg-white border-b border-slate-100 shadow-sm'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-black text-sea-500" style={{fontFamily:'Playfair Display,serif'}}>
          Clean<span className="text-sun-500">Stay</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="/#how"     className={`text-sm font-medium transition-colors ${link}`}>So funktionierts</a>
          <a href="/#pricing" className={`text-sm font-medium transition-colors ${link}`}>Preise</a>
          <Link href="/register-cleaner" className={`text-sm font-medium transition-colors ${link}`}>Reinigungskraft werden</Link>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login"         className={`text-sm font-semibold px-4 py-2 rounded-full transition-colors ${link}`}>Anmelden</Link>
          <Link href="/register-host" className="bg-sea-500 hover:bg-sea-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors">Registrieren →</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          <div className={`w-5 h-0.5 mb-1.5 transition-all ${dark?'bg-white':'bg-slate-800'} ${open?'rotate-45 translate-y-2':''}`}/>
          <div className={`w-5 h-0.5 mb-1.5 ${dark?'bg-white':'bg-slate-800'} ${open?'opacity-0':''}`}/>
          <div className={`w-5 h-0.5 transition-all ${dark?'bg-white':'bg-slate-800'} ${open?'-rotate-45 -translate-y-2':''}`}/>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3 shadow-lg">
          <Link href="/register-host"    className="block text-sm font-semibold text-slate-700 py-2" onClick={()=>setOpen(false)}>Für Gastgeber</Link>
          <Link href="/register-cleaner" className="block text-sm font-semibold text-slate-700 py-2" onClick={()=>setOpen(false)}>Reinigungskraft werden</Link>
          <a href="/#pricing"            className="block text-sm font-semibold text-slate-700 py-2" onClick={()=>setOpen(false)}>Preise</a>
          <hr className="border-slate-100"/>
          <Link href="/login"            className="block text-sm font-semibold text-slate-600 py-2" onClick={()=>setOpen(false)}>Anmelden</Link>
          <Link href="/register-host"    className="btn-sea block text-center text-sm py-2.5"        onClick={()=>setOpen(false)}>Registrieren →</Link>
        </div>
      )}
    </nav>
  )
}
