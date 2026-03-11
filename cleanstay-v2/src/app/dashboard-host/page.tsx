'use client'
import { useState } from 'react'
import Link from 'next/link'

const bookings = [
  { id: 1, prop: 'Apt. Dubrovnik – Stari Grad', cleaner: 'Maja R.', date: '09.03.2026', time: '11:00', status: 'confirmed', price: 65, photos: 0 },
  { id: 2, prop: 'Apt. Split – Riva 14', cleaner: 'Ana K.', date: '09.03.2026', time: '10:00', status: 'done', price: 55, photos: 6 },
  { id: 3, prop: 'Villa Hvar – 4 Zi.', cleaner: 'Tomislav M.', date: '10.03.2026', time: '14:00', status: 'pending', price: 120, photos: 0 },
  { id: 4, prop: 'Apt. Dubrovnik – Stari Grad', cleaner: 'Maja R.', date: '12.03.2026', time: '11:00', status: 'scheduled', price: 65, photos: 0 },
]
const stCfg: Record<string, { label: string; bg: string; color: string }> = {
  confirmed: { label: 'Bestätigt', bg: '#f0fdf4', color: '#16a34a' },
  done: { label: 'Fertig', bg: '#eff6ff', color: '#2563eb' },
  pending: { label: 'Ausstehend', bg: '#fffbeb', color: '#d97706' },
  scheduled: { label: 'Geplant', bg: '#f8fafc', color: '#64748b' },
}

export default function HostDashboard() {
  const [tab, setTab] = useState('overview')
  const [icalUrl, setIcalUrl] = useState('')
  const [icalSt, setIcalSt] = useState<'idle' | 'testing' | 'ok' | 'error'>('idle')
  const testIcal = async () => { setIcalSt('testing'); await new Promise(r => setTimeout(r, 1500)); setIcalSt(icalUrl.length > 10 ? 'ok' : 'error') }

  const navItems = [
    { id: 'overview', icon: '▦', label: 'Übersicht' },
    { id: 'bookings', icon: '≡', label: 'Buchungen' },
    { id: 'calendar', icon: '◫', label: 'Kalender-Sync' },
    { id: 'payments', icon: '◈', label: 'Zahlungen' },
  ]

  return (
    <div className="flex min-h-screen bg-[#fafafa]">
      {/* Sidebar */}
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
            <div className="w-8 h-8 bg-[#0c1a2e] rounded-full flex items-center justify-center text-white text-xs font-bold">MK</div>
            <div>
              <p className="text-xs font-semibold text-[#0c1a2e]">Markus K.</p>
              <p className="text-xs text-slate-400">Professional</p>
            </div>
          </div>
        </div>

        <nav className="p-3 flex-1">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-3">Navigation</p>
          {navItems.map(item => (
            <button key={item.id} onClick={() => setTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium mb-1 transition-all
                ${tab === item.id ? 'bg-[#0c1a2e] text-white' : 'text-slate-500 hover:bg-[#fafafa] hover:text-[#0c1a2e]'}`}>
              <span className="text-base">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-[#f0f0f0]">
          <Link href="/" className="flex items-center gap-2 text-xs text-slate-400 hover:text-[#0c1a2e] px-3 py-2 transition-colors">
            ← Zur Website
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-56 flex-1 p-8">

        {/* OVERVIEW */}
        {tab === 'overview' && (
          <div>
            <div className="mb-10">
              <h1 className="text-2xl font-bold text-[#0c1a2e] mb-1">Guten Morgen, Markus 👋</h1>
              <p className="text-sm text-slate-400">Montag, 09. März 2026</p>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-8">
              {[
                ['14', 'Reinigungen März', '+3 vs. Vormonat', '#0c1a2e'],
                ['€ 784', 'Ausgaben März', 'laufender Monat', '#0c1a2e'],
                ['3', 'Aktive Objekte', '2 mit Sync', '#0c1a2e'],
                ['4.9', 'Bewertung ★', '47 Bewertungen', '#f97316'],
              ].map(([v, l, s, c]) => (
                <div key={l} className="bg-white rounded-2xl border border-[#f0f0f0] p-5">
                  <p className="text-xs text-slate-400 mb-3">{l}</p>
                  <p className="text-3xl font-bold" style={{ color: c as string, fontFamily: 'Syne,sans-serif' }}>{v}</p>
                  <p className="text-xs text-slate-400 mt-2">{s}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl border border-[#f0f0f0] p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-[#0c1a2e]">Nächste Reinigungen</h2>
                <button className="text-xs font-semibold text-slate-400 hover:text-[#0c1a2e] transition-colors">Alle anzeigen →</button>
              </div>
              <div className="space-y-1">
                {bookings.slice(0, 3).map(b => (
                  <div key={b.id} className="flex items-center justify-between py-4 border-b border-[#fafafa] last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#fafafa] rounded-xl flex items-center justify-center text-lg">🏠</div>
                      <div>
                        <p className="text-sm font-semibold text-[#0c1a2e]">{b.prop}</p>
                        <p className="text-xs text-slate-400">{b.date} · {b.time} · {b.cleaner}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {b.photos > 0 && <span className="text-xs text-blue-500 font-medium">📸 {b.photos}</span>}
                      <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: stCfg[b.status].bg, color: stCfg[b.status].color }}>{stCfg[b.status].label}</span>
                      <span className="text-sm font-bold text-[#0c1a2e] w-14 text-right">€ {b.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* BOOKINGS */}
        {tab === 'bookings' && (
          <div>
            <div className="flex justify-between items-center mb-10">
              <div>
                <h1 className="text-2xl font-bold text-[#0c1a2e] mb-1">Buchungen</h1>
                <p className="text-sm text-slate-400">{bookings.length} Buchungen total</p>
              </div>
              <button className="btn-primary">+ Neue Buchung</button>
            </div>
            <div className="bg-white rounded-2xl border border-[#f0f0f0] overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#f0f0f0]">
                    {['Datum', 'Objekt', 'Reinigungskraft', 'Preis', 'Status'].map(h => (
                      <th key={h} className="text-left px-5 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bookings.map(b => (
                    <tr key={b.id} className="border-b border-[#fafafa] hover:bg-[#fafafa] transition-colors">
                      <td className="px-5 py-4 text-sm text-slate-500">{b.date}<br /><span className="text-xs text-slate-400">{b.time}</span></td>
                      <td className="px-5 py-4 text-sm font-medium text-[#0c1a2e]">{b.prop}</td>
                      <td className="px-5 py-4 text-sm text-slate-500">{b.cleaner}</td>
                      <td className="px-5 py-4 text-sm font-bold text-[#0c1a2e]">€ {b.price}</td>
                      <td className="px-5 py-4">
                        <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: stCfg[b.status].bg, color: stCfg[b.status].color }}>{stCfg[b.status].label}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CALENDAR */}
        {tab === 'calendar' && (
          <div>
            <div className="mb-10">
              <h1 className="text-2xl font-bold text-[#0c1a2e] mb-1">Kalender-Sync</h1>
              <p className="text-sm text-slate-400">Verbindet eure Buchungsplattformen für automatische Planung.</p>
            </div>
            <div className="bg-white rounded-2xl border border-[#f0f0f0] p-6 mb-5">
              <h2 className="font-bold text-[#0c1a2e] mb-5">Verbundene Kalender</h2>
              <div className="space-y-3">
                {[['Apt. Dubrovnik – Stari Grad', 'Airbnb'], ['Apt. Split – Riva 14', 'Airbnb + Booking.com']].map(([p, pl]) => (
                  <div key={p} className="flex items-center justify-between p-4 bg-[#f0fdf4] rounded-xl border border-green-100">
                    <div><p className="text-sm font-semibold text-[#0c1a2e]">{p}</p><p className="text-xs text-slate-400">{pl}</p></div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-green-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Aktiv
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-[#f0f0f0] p-6">
              <h2 className="font-bold text-[#0c1a2e] mb-2">Neuen Kalender verbinden</h2>
              <p className="text-xs text-slate-400 mb-5">Airbnb → Kalender → Verfügbarkeitseinstellungen → Kalender exportieren → Link kopieren</p>
              <div className="space-y-4">
                <div><label className="label">Objekt</label><select className="input"><option>Villa Hvar – 4 Zi.</option></select></div>
                <div>
                  <label className="label">iCal URL</label>
                  <div className="flex gap-2">
                    <input className="input flex-1" placeholder="https://www.airbnb.com/calendar/ical/XXXX.ics"
                      value={icalUrl} onChange={e => { setIcalUrl(e.target.value); setIcalSt('idle') }} />
                    <button onClick={testIcal} disabled={!icalUrl || icalSt === 'testing'} className="btn-primary disabled:opacity-50 px-5 rounded-xl">
                      {icalSt === 'testing' ? '...' : 'Testen'}
                    </button>
                  </div>
                  {icalSt === 'ok' && <p className="text-sm text-green-600 mt-2">✓ Kalender gefunden und verbunden.</p>}
                  {icalSt === 'error' && <p className="text-sm text-red-500 mt-2">URL nicht erkannt. Bitte prüfen.</p>}
                </div>
                <button disabled={icalSt !== 'ok'} className="btn-primary disabled:opacity-30 w-full justify-center py-3 rounded-xl">
                  Kalender verbinden
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PAYMENTS */}
        {tab === 'payments' && (
          <div>
            <div className="mb-10">
              <h1 className="text-2xl font-bold text-[#0c1a2e] mb-1">Zahlungen</h1>
              <p className="text-sm text-slate-400">Alle Transaktionen und Abrechnungen</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[['€ 784', 'Diesen Monat', '14 Reinigungen'], ['€ 1.240', 'Letzter Monat', '22 Reinigungen'], ['€ 2.024', 'Gesamt 2026', 'seit Januar']].map(([v, l, s]) => (
                <div key={l} className="bg-white rounded-2xl border border-[#f0f0f0] p-6">
                  <p className="text-xs text-slate-400 mb-2">{l}</p>
                  <p className="text-3xl font-bold text-[#0c1a2e]" style={{fontFamily:'Syne,sans-serif'}}>{v}</p>
                  <p className="text-xs text-slate-400 mt-2">{s}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl border border-[#f0f0f0] overflow-hidden">
              <div className="px-6 py-5 border-b border-[#f0f0f0] flex justify-between">
                <h2 className="font-bold text-[#0c1a2e]">Transaktionen</h2>
                <button className="text-xs font-semibold text-slate-400 hover:text-[#0c1a2e]">CSV exportieren</button>
              </div>
              <table className="w-full">
                <thead><tr className="border-b border-[#f0f0f0]">
                  {['Datum', 'Objekt', 'Reinigungskraft', 'Betrag', 'Status'].map(h => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {bookings.map(b => (
                    <tr key={b.id} className="border-b border-[#fafafa] hover:bg-[#fafafa]">
                      <td className="px-5 py-3.5 text-sm text-slate-500">{b.date}</td>
                      <td className="px-5 py-3.5 text-sm text-[#0c1a2e] font-medium">{b.prop}</td>
                      <td className="px-5 py-3.5 text-sm text-slate-500">{b.cleaner}</td>
                      <td className="px-5 py-3.5 text-sm font-bold text-[#0c1a2e]">€ {b.price}</td>
                      <td className="px-5 py-3.5">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${b.status === 'done' ? 'bg-green-50 text-green-600' : 'bg-[#fafafa] text-slate-400'}`}>
                          {b.status === 'done' ? '✓ Bezahlt' : 'Ausstehend'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
