'use client'
import { useState } from 'react'
import Link from 'next/link'

const jobs = [
  { id: 1, prop: 'Apt. Split – Riva 14', host: 'Markus K.', date: '09.03.2026', time: '10:00–12:00', status: 'active', pay: 49, addr: 'Riva 14, Split' },
  { id: 2, prop: 'Villa Hvar – 4 Zi.', host: 'Ivana M.', date: '10.03.2026', time: '14:00–18:00', status: 'scheduled', pay: 108, addr: 'Hvar, Dalmacija' },
  { id: 3, prop: 'Apt. Dubrovnik', host: 'Sandra B.', date: '07.03.2026', time: '11:00–13:00', status: 'done', pay: 59, addr: 'Stari Grad, Dubrovnik' },
  { id: 4, prop: 'Studio Zadar', host: 'Ivan P.', date: '06.03.2026', time: '09:00–10:30', status: 'done', pay: 44, addr: 'Zadar Centar' },
]
const jCfg: Record<string, { label: string; bg: string; color: string }> = {
  active:    { label: 'Aktiv',    bg: '#f0fdf4', color: '#16a34a' },
  scheduled: { label: 'Geplant',  bg: '#eff6ff', color: '#2563eb' },
  done:      { label: 'Erledigt', bg: '#f8fafc', color: '#64748b' },
}

export default function CleanerDashboard() {
  const [tab, setTab] = useState('overview')
  const navItems = [
    { id: 'overview', icon: '▦', label: 'Übersicht' },
    { id: 'jobs',     icon: '✦', label: 'Aufträge' },
    { id: 'earnings', icon: '◈', label: 'Verdienst' },
    { id: 'profile',  icon: '○', label: 'Profil' },
  ]

  return (
    <div className="flex min-h-screen bg-[#fafafa]">
      <aside className="w-56 bg-white border-r border-[#f0f0f0] min-h-screen fixed left-0 top-0 flex flex-col">
        <div className="p-6 border-b border-[#f0f0f0]">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#0c1a2e] rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">CS</span>
            </div>
            <span className="font-bold text-[#0c1a2e] text-sm" style={{fontFamily:'Syne,sans-serif'}}>CleanStay</span>
          </Link>
        </div>

        <div className="p-4 border-b border-[#f0f0f0]">
          <div className="flex items-center gap-3 p-2">
            <div className="w-8 h-8 bg-[#f97316] rounded-full flex items-center justify-center text-white text-xs font-bold">AR</div>
            <div>
              <p className="text-xs font-semibold text-[#0c1a2e]">Ana Ručević</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-xs text-slate-400">4.9★</span>
                <span className="w-1 h-1 bg-green-500 rounded-full"/>
                <span className="text-xs text-green-600 font-medium">Verfügbar</span>
              </div>
            </div>
          </div>
        </div>

        <nav className="p-3 flex-1">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-3">Navigation</p>
          {navItems.map(item => (
            <button key={item.id} onClick={() => setTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium mb-1 transition-all
                ${tab === item.id ? 'bg-[#0c1a2e] text-white' : 'text-slate-500 hover:bg-[#fafafa] hover:text-[#0c1a2e]'}`}>
              <span>{item.icon}</span>{item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-[#f0f0f0]">
          <Link href="/" className="text-xs text-slate-400 hover:text-[#0c1a2e] px-3 py-2 block transition-colors">← Zur Website</Link>
        </div>
      </aside>

      <main className="ml-56 flex-1 p-8">

        {/* OVERVIEW */}
        {tab === 'overview' && (
          <div>
            <div className="mb-10">
              <h1 className="text-2xl font-bold text-[#0c1a2e] mb-1">Hallo, Ana 👋</h1>
              <p className="text-sm text-slate-400">Montag, 09. März 2026</p>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-8">
              {[
                ['11', 'Aufträge März', '3 noch offen', '#0c1a2e'],
                ['€ 523', 'Verdienst März', '+€108 ausstehend', '#16a34a'],
                ['4.9', 'Bewertung ★', 'aus 89 Aufträgen', '#f97316'],
                ['11.03', 'Nächste Auszahlung', 'via Stripe', '#0c1a2e'],
              ].map(([v, l, s, c]) => (
                <div key={l} className="bg-white rounded-2xl border border-[#f0f0f0] p-5">
                  <p className="text-xs text-slate-400 mb-3">{l}</p>
                  <p className="text-3xl font-bold" style={{ color: c as string, fontFamily: 'Syne,sans-serif' }}>{v}</p>
                  <p className="text-xs text-slate-400 mt-2">{s}</p>
                </div>
              ))}
            </div>

            {/* Active job */}
            <div className="bg-white rounded-2xl border border-[#f0f0f0] p-6 mb-5">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                <p className="text-sm font-bold text-[#0c1a2e]">Aktiver Auftrag</p>
              </div>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-[#0c1a2e] mb-1">{jobs[0].prop}</h2>
                  <p className="text-sm text-slate-400">{jobs[0].addr}</p>
                  <p className="text-sm text-slate-400">{jobs[0].date} · {jobs[0].time}</p>
                </div>
                <p className="text-3xl font-bold text-[#0c1a2e]" style={{fontFamily:'Syne,sans-serif'}}>€ {jobs[0].pay}</p>
              </div>
              <div className="border-t border-[#f5f5f5] pt-5">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Pflichtfotos hochladen</p>
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {['Küche', 'Bad', 'Schlafzimmer', 'Wohnzimmer'].map(r => (
                    <div key={r} className="aspect-square bg-[#fafafa] border-2 border-dashed border-[#e8e8e8] rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-[#0c1a2e] transition-colors group">
                      <span className="text-xl mb-1 group-hover:scale-110 transition-transform">📷</span>
                      <span className="text-xs text-slate-400">{r}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-primary w-full justify-center py-3 rounded-xl text-base">
                  ✓ Reinigung abschliessen & Fotos senden
                </button>
              </div>
            </div>
          </div>
        )}

        {/* JOBS */}
        {tab === 'jobs' && (
          <div>
            <div className="mb-10">
              <h1 className="text-2xl font-bold text-[#0c1a2e] mb-1">Meine Aufträge</h1>
              <p className="text-sm text-slate-400">{jobs.length} Aufträge total</p>
            </div>
            <div className="space-y-3">
              {jobs.map(j => (
                <div key={j.id} className="bg-white rounded-2xl border border-[#f0f0f0] p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-[#0c1a2e] text-lg">{j.prop}</h3>
                      <p className="text-sm text-slate-400">{j.addr}</p>
                      <p className="text-sm text-slate-400 mt-0.5">{j.date} · {j.time} · {j.host}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#0c1a2e]" style={{fontFamily:'Syne,sans-serif'}}>€ {j.pay}</p>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full mt-1 inline-block"
                        style={{ background: jCfg[j.status].bg, color: jCfg[j.status].color }}>
                        {jCfg[j.status].label}
                      </span>
                    </div>
                  </div>
                  {j.status === 'active' && <button className="btn-primary w-full justify-center py-3 rounded-xl">📸 Fotos hochladen & abschliessen</button>}
                  {j.status === 'scheduled' && (
                    <div className="flex gap-3">
                      <button className="flex-1 btn-outline py-3 rounded-xl justify-center">Ablehnen</button>
                      <button className="flex-1 btn-primary py-3 rounded-xl justify-center">✓ Bestätigen</button>
                    </div>
                  )}
                  {j.status === 'done' && <p className="text-sm text-green-600 font-medium">✓ Abgeschlossen · Zahlung eingegangen</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EARNINGS */}
        {tab === 'earnings' && (
          <div>
            <div className="mb-10">
              <h1 className="text-2xl font-bold text-[#0c1a2e] mb-1">Verdienst</h1>
              <p className="text-sm text-slate-400">Eure Einnahmen und Auszahlungen</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[['€ 523', 'Zur Auszahlung', '#16a34a'], ['€ 631', 'Diesen Monat', '#0c1a2e'], ['€ 4.280', 'Gesamt seit Start', '#0c1a2e']].map(([v, l, c]) => (
                <div key={l} className="bg-white rounded-2xl border border-[#f0f0f0] p-6">
                  <p className="text-xs text-slate-400 mb-2">{l}</p>
                  <p className="text-3xl font-bold" style={{ color: c as string, fontFamily: 'Syne,sans-serif' }}>{v}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl border border-[#f0f0f0] overflow-hidden">
              <div className="px-6 py-5 border-b border-[#f0f0f0]">
                <h2 className="font-bold text-[#0c1a2e]">Transaktionen</h2>
              </div>
              <table className="w-full">
                <thead><tr className="border-b border-[#f0f0f0]">
                  {['Datum', 'Objekt', 'Brutto', 'Provision (15%)', 'Netto'].map(h => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {jobs.filter(j => j.status === 'done').map(j => (
                    <tr key={j.id} className="border-b border-[#fafafa] hover:bg-[#fafafa]">
                      <td className="px-5 py-3.5 text-sm text-slate-400">{j.date}</td>
                      <td className="px-5 py-3.5 text-sm text-[#0c1a2e] font-medium">{j.prop}</td>
                      <td className="px-5 py-3.5 text-sm text-[#0c1a2e]">€ {j.pay}</td>
                      <td className="px-5 py-3.5 text-sm text-red-400">− € {Math.round(j.pay * 0.15)}</td>
                      <td className="px-5 py-3.5 text-sm font-bold text-green-600">€ {Math.round(j.pay * 0.85)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* PROFILE */}
        {tab === 'profile' && (
          <div className="max-w-lg">
            <div className="mb-10">
              <h1 className="text-2xl font-bold text-[#0c1a2e] mb-1">Mein Profil</h1>
              <p className="text-sm text-slate-400">Persönliche Daten bearbeiten</p>
            </div>
            <div className="bg-white rounded-2xl border border-[#f0f0f0] p-8">
              <div className="flex items-center gap-5 pb-7 border-b border-[#f0f0f0] mb-7">
                <div className="w-16 h-16 bg-[#f97316] rounded-2xl flex items-center justify-center text-white font-bold text-2xl">AR</div>
                <div>
                  <h2 className="font-bold text-xl text-[#0c1a2e]">Ana Ručević</h2>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-xs bg-green-50 text-green-700 font-semibold px-2.5 py-1 rounded-full">✓ Verifiziert</span>
                    <span className="text-xs bg-orange-50 text-orange-600 font-semibold px-2.5 py-1 rounded-full">⭐ 4.9 Sterne</span>
                  </div>
                </div>
              </div>
              <div className="space-y-5">
                {[['Vorname', 'Ana'], ['Nachname', 'Ručević'], ['E-Mail', 'ana@beispiel.hr'], ['Telefon', '+385 91 234 5678'], ['Stadt', 'Split']].map(([l, v]) => (
                  <div key={l}>
                    <label className="label">{l}</label>
                    <input className="input" defaultValue={v} />
                  </div>
                ))}
              </div>
              <button className="btn-primary w-full justify-center py-3 rounded-xl mt-8">Änderungen speichern</button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
