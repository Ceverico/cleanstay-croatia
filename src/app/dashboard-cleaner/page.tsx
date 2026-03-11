'use client'
import { useState } from 'react'
import Link from 'next/link'

const jobs = [
  {id:1, prop:'Apt. Split – Riva 14',  host:'Markus K.', date:'09.03.2026', time:'10:00–12:00', status:'active',    pay:49,  addr:'Riva 14, Split'},
  {id:2, prop:'Villa Hvar – 4 Zi.',    host:'Ivana M.',   date:'10.03.2026', time:'14:00–18:00', status:'scheduled', pay:108, addr:'Hvar, Dalmacija'},
  {id:3, prop:'Apt. Dubrovnik',        host:'Sandra B.',  date:'07.03.2026', time:'11:00–13:00', status:'done',      pay:59,  addr:'Stari Grad, Dubrovnik'},
  {id:4, prop:'Studio Zadar',          host:'Ivan P.',    date:'06.03.2026', time:'09:00–10:30', status:'done',      pay:44,  addr:'Zadar Centar'},
]
const stCfg: Record<string,{label:string;color:string}> = {
  active:    {label:'🟢 Aktiv',    color:'bg-green-100 text-green-700'},
  scheduled: {label:'📅 Geplant',  color:'bg-blue-100 text-blue-700'},
  done:      {label:'✅ Erledigt', color:'bg-slate-100 text-slate-500'},
}

export default function CleanerDashboard() {
  const [tab, setTab] = useState<'overview'|'jobs'|'earnings'|'profile'>('overview')
  const tabs = [
    {id:'overview', label:'📊 Übersicht'},
    {id:'jobs',     label:'🧹 Aufträge'},
    {id:'earnings', label:'💶 Verdienst'},
    {id:'profile',  label:'👤 Profil'},
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <aside className="w-60 bg-white border-r border-slate-100 min-h-screen fixed left-0 top-0 flex flex-col shadow-sm">
        <div className="p-6 border-b border-slate-100">
          <Link href="/" className="text-xl font-black text-sea-500" style={{fontFamily:'Playfair Display,serif'}}>
            Clean<span className="text-sun-500">Stay</span>
          </Link>
          <div className="flex items-center gap-2 mt-4">
            <div className="w-9 h-9 bg-sun-500 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">AR</div>
            <div>
              <p className="text-sm font-semibold">Ana Ručević</p>
              <p className="text-xs text-slate-400">4.9★ · Verifiziert ✓</p>
            </div>
          </div>
        </div>
        <nav className="p-4 flex-1">
          {tabs.map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id as typeof tab)}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium mb-1 transition-colors
                ${tab===t.id?'bg-sun-400/20 text-sun-700 font-semibold':'text-slate-600 hover:bg-slate-50'}`}>
              {t.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-100">
          <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-center justify-between">
            <span className="text-xs font-semibold text-green-700">🟢 Verfügbar</span>
            <div className="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow"/>
            </div>
          </div>
        </div>
      </aside>

      <main className="ml-60 flex-1 p-8">

        {/* OVERVIEW */}
        {tab==='overview' && (
          <div>
            <h1 className="text-3xl font-black mb-2">Hallo, Ana 👋</h1>
            <p className="text-slate-500 mb-8">Montag, 09. März 2026</p>
            <div className="grid grid-cols-4 gap-5 mb-8">
              {[
                {label:'Aufträge diesen Monat', val:'11',     sub:'3 noch geplant',            color:'text-sea-500'},
                {label:'Verdienst März',         val:'€523',  sub:'+€108 ausstehend',           color:'text-green-600'},
                {label:'Deine Bewertung',        val:'4.9★',  sub:'aus 89 Aufträgen',           color:'text-sun-600'},
                {label:'Nächste Auszahlung',     val:'11.Mrz',sub:'Automatisch via Stripe',     color:'text-slate-800'},
              ].map(k=>(
                <div key={k.label} className="card p-5">
                  <p className="text-xs text-slate-400 mb-2">{k.label}</p>
                  <p className={`text-3xl font-black ${k.color}`}>{k.val}</p>
                  <p className="text-xs text-slate-400 mt-1">{k.sub}</p>
                </div>
              ))}
            </div>
            <div className="card p-6">
              <h2 className="font-bold mb-4">🟢 Heutiger Auftrag – Aktiv</h2>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{jobs[0].prop}</h3>
                    <p className="text-slate-500 text-sm">{jobs[0].addr}</p>
                    <p className="text-slate-500 text-sm">{jobs[0].date} · {jobs[0].time}</p>
                  </div>
                  <span className="text-2xl font-black text-green-600">€{jobs[0].pay}</span>
                </div>
                <div className="border-t border-green-200 pt-4">
                  <p className="text-sm font-semibold mb-3">📸 Fotos hochladen (Pflicht zum Abschluss)</p>
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {['Küche','Bad','Schlafzimmer','Wohnzimmer'].map(r=>(
                      <div key={r} className="aspect-square bg-white border-2 border-dashed border-green-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-green-500 transition-colors">
                        <span className="text-lg">📷</span>
                        <span className="text-xs text-slate-400 mt-1">{r}</span>
                      </div>
                    ))}
                  </div>
                  <button className="btn-sea w-full py-2.5 text-sm text-center">✅ Reinigung abschliessen & Fotos senden</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* JOBS */}
        {tab==='jobs' && (
          <div>
            <h1 className="text-3xl font-black mb-8">Meine Aufträge</h1>
            <div className="space-y-4">
              {jobs.map(j=>(
                <div key={j.id} className="card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{j.prop}</h3>
                      <p className="text-sm text-slate-500">{j.addr}</p>
                      <p className="text-sm text-slate-500 mt-0.5">{j.date} · {j.time} · {j.host}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black text-sea-500">€{j.pay}</p>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full mt-1 inline-block ${stCfg[j.status].color}`}>{stCfg[j.status].label}</span>
                    </div>
                  </div>
                  {j.status==='active'    && <button className="btn-sea w-full py-2 text-sm text-center">📸 Fotos hochladen & abschliessen</button>}
                  {j.status==='scheduled' && <div className="flex gap-2"><button className="flex-1 border border-slate-200 rounded-xl py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">Ablehnen</button><button className="flex-1 btn-sea text-sm py-2 text-center">✓ Bestätigen</button></div>}
                  {j.status==='done'      && <p className="text-sm text-green-600 font-semibold">✅ Erledigt · Zahlung eingegangen</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EARNINGS */}
        {tab==='earnings' && (
          <div>
            <h1 className="text-3xl font-black mb-8">Verdienst & Auszahlungen</h1>
            <div className="grid grid-cols-3 gap-5 mb-8">
              {[
                {label:'Verfügbar zur Auszahlung',val:'€523',  color:'text-green-600'},
                {label:'Diesen Monat verdient',   val:'€631',  color:'text-slate-900'},
                {label:'Gesamt seit Start',        val:'€4.280',color:'text-sea-500'},
              ].map(k=>(
                <div key={k.label} className="card p-6">
                  <p className="text-xs text-slate-400 mb-2">{k.label}</p>
                  <p className={`text-4xl font-black ${k.color}`}>{k.val}</p>
                </div>
              ))}
            </div>
            <div className="card p-6 mb-6">
              <h2 className="font-bold mb-4">🏦 Bankverbindung (Stripe Connect)</h2>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
                <div>
                  <p className="font-semibold text-sm">Erste Bank Croatia</p>
                  <p className="text-xs text-slate-500">IBAN: HR12 3456 ···· ···· 5678</p>
                </div>
                <span className="text-xs bg-green-500 text-white font-bold px-2.5 py-1 rounded-full">✓ Verifiziert</span>
              </div>
              <p className="text-xs text-slate-400 mt-3">Nächste Auszahlung: <strong>11. März 2026 · €523</strong></p>
            </div>
            <div className="card overflow-hidden">
              <div className="p-5 border-b border-slate-100"><h2 className="font-bold">Transaktionshistorie</h2></div>
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>{['Datum','Objekt','Brutto','Provision (15%)','Dein Verdienst'].map(h=>(
                    <th key={h} className="text-left text-xs font-bold text-slate-400 uppercase tracking-wider px-5 py-3">{h}</th>
                  ))}</tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {jobs.filter(j=>j.status==='done').map(j=>(
                    <tr key={j.id} className="hover:bg-slate-50">
                      <td className="px-5 py-3.5 text-sm text-slate-600">{j.date}</td>
                      <td className="px-5 py-3.5 text-sm">{j.prop}</td>
                      <td className="px-5 py-3.5 text-sm">€{j.pay}</td>
                      <td className="px-5 py-3.5 text-sm text-red-400">-€{(j.pay*0.15).toFixed(0)}</td>
                      <td className="px-5 py-3.5 text-sm font-bold text-green-600">€{(j.pay*0.85).toFixed(0)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* PROFILE */}
        {tab==='profile' && (
          <div className="max-w-xl">
            <h1 className="text-3xl font-black mb-8">Mein Profil</h1>
            <div className="card p-6 space-y-5">
              <div className="flex items-center gap-4 pb-5 border-b border-slate-100">
                <div className="w-16 h-16 bg-sun-500 rounded-2xl flex items-center justify-center text-slate-900 font-black text-2xl">AR</div>
                <div>
                  <h2 className="font-bold text-xl">Ana Ručević</h2>
                  <div className="flex gap-2 mt-1">
                    <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">✓ Verifiziert</span>
                    <span className="text-xs bg-sun-100 text-sun-700 font-bold px-2 py-0.5 rounded-full">⭐ 4.9 Sterne</span>
                  </div>
                </div>
              </div>
              {[['Vorname','Ana'],['Nachname','Ručević'],['E-Mail','ana@beispiel.hr'],['Telefon','+385 91 234 5678'],['Stadt','Split']].map(([l,v])=>(
                <div key={l}>
                  <label className="label">{l}</label>
                  <input className="input" defaultValue={v}/>
                </div>
              ))}
              <button className="btn-sea py-3 w-full text-sm text-center">Änderungen speichern</button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
