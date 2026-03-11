'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [role, setRole] = useState<'host' | 'cleaner'>('host')

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left panel */}
      <div className="hidden lg:flex w-1/2 bg-[#0c1a2e] flex-col justify-between p-14">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">CS</span>
          </div>
          <span className="text-white font-bold" style={{fontFamily:'Syne,sans-serif'}}>CleanStay</span>
        </Link>
        <div>
          <p className="text-5xl font-bold text-white leading-tight mb-6" style={{fontFamily:'Syne,sans-serif'}}>
            Willkommen<br />zurück.
          </p>
          <p className="text-white/40 text-lg leading-relaxed max-w-sm">
            Verwaltet eure Reinigungen, Objekte und Auszahlungen — alles an einem Ort.
          </p>
        </div>
        <div className="flex gap-8">
          {[['2.400+', 'Reinigungen'], ['4.9★', 'Bewertung'], ['340+', 'Kräfte']].map(([v, l]) => (
            <div key={l}>
              <p className="text-xl font-bold text-white" style={{fontFamily:'Syne,sans-serif'}}>{v}</p>
              <p className="text-xs text-white/30 mt-0.5">{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center px-8 py-16">
        <div className="w-full max-w-sm">
          <Link href="/" className="lg:hidden flex items-center gap-2 mb-10">
            <div className="w-7 h-7 bg-[#0c1a2e] rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">CS</span>
            </div>
            <span className="font-bold text-[#0c1a2e]" style={{fontFamily:'Syne,sans-serif'}}>CleanStay</span>
          </Link>

          <h1 className="text-2xl font-bold text-[#0c1a2e] mb-1">Anmelden</h1>
          <p className="text-sm text-slate-400 mb-8">Wählt euren Kontotyp und meldet euch an.</p>

          {/* Role toggle */}
          <div className="flex gap-2 mb-8 bg-[#f5f5f5] p-1 rounded-xl">
            {[['host', '🏠 Gastgeber'], ['cleaner', '🧹 Reinigungskraft']].map(([r, l]) => (
              <button key={r} onClick={() => setRole(r as 'host' | 'cleaner')}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${role === r ? 'bg-white shadow-sm text-[#0c1a2e]' : 'text-slate-400'}`}>
                {l}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <label className="label">E-Mail</label>
              <input className="input" type="email" placeholder="name@beispiel.de" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="label mb-0">Passwort</label>
                <span className="text-xs text-slate-400 hover:text-[#0c1a2e] cursor-pointer transition-colors">Vergessen?</span>
              </div>
              <input className="input" type="password" placeholder="••••••••" />
            </div>

            <button
              onClick={() => window.location.href = role === 'host' ? '/dashboard-host' : '/dashboard-cleaner'}
              className="w-full btn-primary justify-center py-3.5 text-base rounded-xl">
              Anmelden →
            </button>

            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#f0f0f0]" /></div>
              <div className="relative flex justify-center"><span className="bg-white px-3 text-xs text-slate-400">oder</span></div>
            </div>

            <button className="w-full flex items-center justify-center gap-2.5 border border-[#e8e8e8] rounded-xl py-3 text-sm font-medium text-slate-600 hover:bg-[#fafafa] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Mit Google fortfahren
            </button>
          </div>

          <p className="text-center text-sm text-slate-400 mt-8">
            Noch kein Konto?{' '}
            <Link href={role === 'host' ? '/register-host' : '/register-cleaner'} className="text-[#0c1a2e] font-semibold hover:underline">
              Registrieren
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
