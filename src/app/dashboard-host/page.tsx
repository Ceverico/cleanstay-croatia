'use client'
import { useState } from 'react'
import Link from 'next/link'

const bookings = [
  {id:1, prop:'Apt. Dubrovnik – Stari Grad', cleaner:'Maja R.',    date:'09.03.2026', time:'11:00', status:'confirmed', price:65,  photos:0},
  {id:2, prop:'Apt. Split – Riva 14',        cleaner:'Ana K.',     date:'09.03.2026', time:'10:00', status:'done',      price:55,  photos:6},
  {id:3, prop:'Villa Hvar – 4 Zi.',          cleaner:'Tomislav M.',date:'10.03.2026', time:'14:00', status:'pending',   price:120, photos:0},
  {id:4, prop:'Apt. Dubrovnik – Stari Grad', cleaner:'Maja R.',    date:'12.03.2026', time:'11:00', status:'scheduled', price:65,  photos:0},
]
const statusCfg: Record<string,{label:string;color:string}> = {
  confirmed: {label:'✅ Bestätigt',       color:'bg-green-100 text-green-700'},
  done:      {label:'📸 Abgeschlossen',   color:'bg-blue-100 text-blue-700'},
  pending:   {label:'⏳ Ausstehend',      color:'bg-yellow-100 text-yellow-700'},
  scheduled: {label:'📅 Geplant',         color:'bg-slate-100 text-slate-600'},
}

export default function HostDashboard() {
  const [tab, setTab] = useState<'overview'|'bookings'|'calendar'|'payments'>('overview')
  const [icalUrl, setIcalUrl]   = useState('')
  const [icalSt,  setIcalSt]   = useState<'idle'|'testing'|'ok'|'error'>('idle')

  const testIcal = async () => {
    setIcalSt('testing')
    await new Promise(r=>setTimeout(r,1500))
    setIcalSt(icalUrl.length>10?'ok':'error')
  }

  const tabs = [
    {id:'overview', label:'📊 Übersicht'},
    {id:'bookings', label:'📋 Buchungen'},
    {id:'calendar', label:'📅 Kalender'},
    {id:'payments', label:'💳 Zahlungen'},
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-slate-100 min-h-screen fixed left-0 top-0 flex flex-col shadow-sm">
        <div className="p-6 border-b border-slate-100">
          <Link href="/" className="text-xl font-black text-sea-500" style={{fontFamily:'Playfair Display,serif'}}>
            Clean<span className="text-sun-500">Stay</span>
          </Link>
          <div className="flex items-center gap-2 mt-4">
            <div className="w-9 h-9 bg-sea-500 rounded-full flex items-center justify-center text-white font-bold text-sm">MK</div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Markus K.</p>
              <p className="text-xs text-slate-400">Professional Plan</p>
            </div>
          </div>
        </div>
        <nav className="p-4 flex-1">
          {tabs.map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id as typeof tab)}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium mb-1 transition-colors
                ${tab===t.id?'bg-sea-50 text-sea-600 font-semibold':'text-slate-600 hover:bg-slate-50'}`}>
              {t.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-100">
          <Link href="/" className="text-sm text-slate-400 hover:text-slate-600 px-3 py-2 block">← Zur Website</Link>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-60 flex-1 p-8">

        {/* OVERVIEW */}
        {tab==='overview' && (
          <div>
            <h1 className="text-3xl font-black mb-2">Guten Morgen, Markus 👋</h1>
            <p className="text-slate-500 mb-8">Montag, 09. März 2026</p>
            <div className="grid grid-cols-4 gap-5 mb-8">
              {[
                {label:'Reinigungen diesen Monat',val:'14', sub:'+3 vs. letzten Monat',   color:'text-sea-500'},
                {label:'Ausgaben März',            val:'€784',sub:'März 2026',              color:'text-slate-800'},
                {label:'Aktive Objekte',           val:'3',  sub:'2 mit Kalender-Sync',    color:'text-green-600'},
                {label:'Ø Bewertung',              val:'4.9★',sub:'aus 47 Bewertungen',    color:'text-sun-600'},
              ].map(k=>(
                <div key={k.label} className="card p-5">
                  <p className="text-xs text-slate-500 mb-2">{k.label}</p>
                  <p className={`text-3xl font-black ${k.color}`}>{k.val}</p>
                  <p className="text-xs text-slate-400 mt-1">{k.sub}</p>
                </div>
              ))}
            </div>
            <div className="card p-6 mb-6">
              <h2 className="font-bold mb-4">Nächste Reinigungen</h2>
              <div className="space-y-3">
                {bookings.slice(0,3).map(b=>(
                  <div key={b.id} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-sea-50 rounded-xl flex items-center justify-center text-lg">🏠</div>
                      <div>
                        <p className="text-sm font-semibold">{b.prop}</p>
                        <p className="text-xs text-slate-400">{b.date} · {b.time} · {b.cleaner}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {b.photos>0 && <span className="text-xs text-blue-600 font-semibold">📸 {b.photos} Fotos</span>}
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusCfg[b.status].color}`}>{statusCfg[b.status].label}</span>
                      <span className="text-sm font-bold">€{b.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                {label:'Reinigung buchen',     icon:'➕', action:()=>setTab('bookings')},
                {label:'Kalender verbinden',   icon:'📅', action:()=>setTab('calendar')},
                {label:'Zahlungen ansehen',    icon:'💳', action:()=>setTab('payments')},
              ].map(a=>(
                <button key={a.label} onClick={a.action}
                  className="card p-5 text-left hover:border-sea-400 hover:bg-sea-50 transition-colors">
                  <span className="text-2xl block mb-2">{a.icon}</span>
                  <span className="text-sm font-semibold text-slate-700">{a.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* BOOKINGS */}
        {tab==='bookings' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-black">Buchungen</h1>
              <button className="btn-sea text-sm px-5 py-2.5">+ Neue Buchung</button>
            </div>
            <div className="card overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>{['Datum','Objekt','Reinigungskraft','Preis','Status'].map(h=>(
                    <th key={h} className="text-left text-xs font-bold text-slate-400 uppercase tracking-wider px-5 py-3">{h}</th>
                  ))}</tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {bookings.map(b=>(
                    <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 text-sm text-slate-600">{b.date}<br/><span className="text-xs text-slate-400">{b.time}</span></td>
                      <td className="px-5 py-4 text-sm font-medium">{b.prop}</td>
                      <td className="px-5 py-4 text-sm text-slate-600">{b.cleaner}</td>
                      <td className="px-5 py-4 text-sm font-bold">€{b.price}</td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusCfg[b.status].color}`}>{statusCfg[b.status].label}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CALENDAR */}
        {tab==='calendar' && (
          <div>
            <h1 className="text-3xl font-black mb-2">Kalender-Sync</h1>
            <p className="text-slate-500 mb-8">Verbindet eure Buchungsplattformen für automatische Reinigungsplanung.</p>
            <div className="card p-6 mb-6">
              <h2 className="font-bold mb-4">✅ Verbundene Kalender</h2>
              <div className="space-y-3">
                {[
                  {prop:'Apt. Dubrovnik – Stari Grad', plat:'Airbnb',              last:'vor 2 Min.'},
                  {prop:'Apt. Split – Riva 14',        plat:'Airbnb + Booking.com',last:'vor 5 Min.'},
                ].map((c,i)=>(
                  <div key={i} className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100">
                    <div>
                      <p className="font-semibold text-sm">{c.prop}</p>
                      <p className="text-xs text-slate-500">{c.plat} · Sync: {c.last}</p>
                    </div>
                    <span className="text-xs bg-green-500 text-white font-bold px-2 py-0.5 rounded-full">✓ Aktiv</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <h2 className="font-bold mb-2">Neuen Kalender verbinden</h2>
              <p className="text-sm text-slate-500 mb-5">Airbnb → Kalender → Verfügbarkeitseinstellungen → Kalender exportieren → Link kopieren</p>
              <div className="space-y-4">
                <div>
                  <label className="label">Objekt</label>
                  <select className="input"><option>Villa Hvar – 4 Zi. (kein Kalender)</option></select>
                </div>
                <div>
                  <label className="label">iCal URL</label>
                  <div className="flex gap-2">
                    <input className="input flex-1" placeholder="https://www.airbnb.com/calendar/ical/XXXX.ics"
                      value={icalUrl} onChange={e=>{setIcalUrl(e.target.value);setIcalSt('idle')}}/>
                    <button onClick={testIcal} disabled={!icalUrl||icalSt==='testing'}
                      className="bg-sea-500 hover:bg-sea-600 disabled:opacity-50 text-white px-4 rounded-xl text-sm font-bold transition-colors">
                      {icalSt==='testing'?'⏳':'Testen'}
                    </button>
                  </div>
                  {icalSt==='ok'    && <p className="text-green-600 text-sm mt-2">✅ Kalender gefunden! Buchungen werden erkannt.</p>}
                  {icalSt==='error' && <p className="text-red-500 text-sm mt-2">❌ URL ungültig. Bitte prüft den Link.</p>}
                </div>
                <button disabled={icalSt!=='ok'} className="btn-sea disabled:opacity-50 py-3 w-full text-sm">
                  ✓ Kalender verbinden & automatisch planen
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PAYMENTS */}
        {tab==='payments' && (
          <div>
            <h1 className="text-3xl font-black mb-8">Zahlungen</h1>
            <div className="grid grid-cols-3 gap-5 mb-8">
              {[
                {label:'Diesen Monat', val:'€784',   sub:'14 Reinigungen',    color:'text-slate-900'},
                {label:'Letzter Monat',val:'€1.240', sub:'22 Reinigungen',    color:'text-slate-900'},
                {label:'Gesamt 2026',  val:'€2.024', sub:'seit Januar',       color:'text-sea-500'},
              ].map(k=>(
                <div key={k.label} className="card p-6">
                  <p className="text-xs text-slate-400 mb-1">{k.label}</p>
                  <p className={`text-4xl font-black ${k.color}`}>{k.val}</p>
                  <p className="text-xs text-slate-400 mt-1">{k.sub}</p>
                </div>
              ))}
            </div>
            <div className="card p-6 mb-6">
              <h2 className="font-bold mb-4">💳 Zahlungsmethode</h2>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-7 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md flex items-center justify-center text-white text-xs font-bold">VISA</div>
                  <div>
                    <p className="text-sm font-semibold">•••• •••• •••• 4242</p>
                    <p className="text-xs text-slate-400">Läuft ab: 12/28</p>
                  </div>
                </div>
                <button className="text-sm text-sea-500 font-semibold hover:underline">Ändern</button>
              </div>
            </div>
            <div className="card overflow-hidden">
              <div className="p-5 border-b border-slate-100 flex justify-between">
                <h2 className="font-bold">Transaktionshistorie</h2>
                <button className="text-sm text-sea-500 font-semibold">Export CSV</button>
              </div>
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>{['Datum','Objekt','Reinigungskraft','Betrag','Status'].map(h=>(
                    <th key={h} className="text-left text-xs font-bold text-slate-400 uppercase tracking-wider px-5 py-3">{h}</th>
                  ))}</tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {bookings.map(b=>(
                    <tr key={b.id} className="hover:bg-slate-50">
                      <td className="px-5 py-3.5 text-sm text-slate-600">{b.date}</td>
                      <td className="px-5 py-3.5 text-sm">{b.prop}</td>
                      <td className="px-5 py-3.5 text-sm text-slate-600">{b.cleaner}</td>
                      <td className="px-5 py-3.5 text-sm font-bold">€{b.price}</td>
                      <td className="px-5 py-3.5">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${b.status==='done'?'bg-green-100 text-green-700':'bg-slate-100 text-slate-500'}`}>
                          {b.status==='done'?'✓ Bezahlt':'⏳ Ausstehend'}
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
