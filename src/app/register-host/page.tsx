'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

type Step = 1|2|3|4

export default function RegisterHostPage() {
  const [step, setStep]           = useState<Step>(1)
  const [icalUrl, setIcalUrl]     = useState('')
  const [icalStatus, setIcalStatus] = useState<'idle'|'testing'|'ok'|'error'>('idle')
  const [plan, setPlan]           = useState('free')
  const [propType, setPropType]   = useState('apartment')
  const [form, setForm] = useState({firstName:'',lastName:'',email:'',password:'',phone:'',city:'',propName:'',beds:'2'})
  const u = (k:string,v:string) => setForm(f=>({...f,[k]:v}))

  const testIcal = async () => {
    setIcalStatus('testing')
    await new Promise(r=>setTimeout(r,1500))
    setIcalStatus(icalUrl.length > 10 ? 'ok' : 'error')
  }

  const steps = ['Profil','Objekt','Kalender','Plan & Zahlung']

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-sea-50 to-white pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-slate-900 mb-2">Als Gastgeber registrieren</h1>
            <p className="text-slate-500">Euer Konto ist in wenigen Minuten bereit</p>
          </div>

          {/* Step indicator */}
          <div className="flex items-center mb-10">
            {steps.map((s,i)=>(
              <div key={s} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors
                    ${step>i+1?'bg-green-500 text-white':step===i+1?'bg-sea-500 text-white':'bg-slate-100 text-slate-400'}`}>
                    {step>i+1?'✓':i+1}
                  </div>
                  <span className={`text-xs mt-1.5 font-medium hidden sm:block ${step===i+1?'text-sea-500':'text-slate-400'}`}>{s}</span>
                </div>
                {i<steps.length-1 && <div className={`flex-1 h-0.5 mx-2 ${step>i+1?'bg-green-500':'bg-slate-200'}`}/>}
              </div>
            ))}
          </div>

          <div className="card p-8">

            {/* STEP 1 */}
            {step===1 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-bold mb-6">Persönliche Daten</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="label">Vorname</label><input className="input" placeholder="Max" value={form.firstName} onChange={e=>u('firstName',e.target.value)}/></div>
                  <div><label className="label">Nachname</label><input className="input" placeholder="Mustermann" value={form.lastName} onChange={e=>u('lastName',e.target.value)}/></div>
                </div>
                <div><label className="label">E-Mail</label><input className="input" type="email" placeholder="max@beispiel.de" value={form.email} onChange={e=>u('email',e.target.value)}/></div>
                <div><label className="label">Passwort</label><input className="input" type="password" placeholder="Mindestens 8 Zeichen" value={form.password} onChange={e=>u('password',e.target.value)}/></div>
                <div><label className="label">Telefon</label><input className="input" placeholder="+385 91 234 5678" value={form.phone} onChange={e=>u('phone',e.target.value)}/></div>
                <div>
                  <label className="label">Stadt</label>
                  <select className="input" value={form.city} onChange={e=>u('city',e.target.value)}>
                    <option value="">Stadt wählen...</option>
                    {['Dubrovnik','Split','Zagreb','Hvar','Zadar','Rovinj','Poreč','Šibenik','Andere'].map(c=><option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step===2 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-bold mb-6">Euer Objekt</h2>
                <div><label className="label">Objektname</label><input className="input" placeholder="z.B. Apt. Dubrovnik Stari Grad" value={form.propName} onChange={e=>u('propName',e.target.value)}/></div>
                <div>
                  <label className="label">Objekttyp</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[['apartment','🏢','Apartment'],['house','🏡','Haus / Villa'],['room','🛏️','Zimmer']].map(([val,icon,label])=>(
                      <button key={val} onClick={()=>setPropType(val)}
                        className={`border-2 rounded-xl p-4 text-center transition-colors ${propType===val?'border-sea-500 bg-sea-50':'border-slate-200 hover:border-slate-300'}`}>
                        <div className="text-2xl mb-1">{icon}</div>
                        <div className="text-xs font-semibold text-slate-700">{label}</div>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="label">Anzahl Schlafzimmer</label>
                  <select className="input" value={form.beds} onChange={e=>u('beds',e.target.value)}>
                    {['1','2','3','4','5','6+'].map(n=><option key={n} value={n}>{n} Schlafzimmer</option>)}
                  </select>
                </div>
                <div className="bg-sea-50 rounded-xl p-4 text-sm text-sea-700">
                  <strong>💡 Tipp:</strong> Weitere Objekte könnt ihr später im Dashboard hinzufügen.
                </div>
              </div>
            )}

            {/* STEP 3 – iCal */}
            {step===3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-2">Kalender-Synchronisation</h2>
                <p className="text-slate-500 text-sm">Verbindet euren Airbnb-Kalender damit CleanStay Reinigungen automatisch plant.</p>
                <div className="bg-slate-50 rounded-xl p-5 space-y-2">
                  <p className="font-bold text-sm">📋 So findet ihr die iCal-URL:</p>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600">
                    <li>Airbnb öffnen → <strong>Kalender</strong></li>
                    <li>Oben rechts: <strong>Verfügbarkeitseinstellungen</strong></li>
                    <li>Unten: <strong>Kalender exportieren</strong></li>
                    <li><strong>Link kopieren</strong> und hier einfügen</li>
                  </ol>
                </div>
                <div>
                  <label className="label">Airbnb iCal-URL</label>
                  <div className="flex gap-2">
                    <input className="input flex-1" placeholder="https://www.airbnb.com/calendar/ical/XXXX.ics"
                      value={icalUrl} onChange={e=>{setIcalUrl(e.target.value);setIcalStatus('idle')}}/>
                    <button onClick={testIcal} disabled={!icalUrl||icalStatus==='testing'}
                      className="bg-sea-500 hover:bg-sea-600 disabled:opacity-50 text-white px-4 rounded-xl text-sm font-bold transition-colors whitespace-nowrap">
                      {icalStatus==='testing'?'⏳ Prüfe...':'Testen'}
                    </button>
                  </div>
                  {icalStatus==='ok'    && <p className="text-green-600 text-sm mt-2 bg-green-50 p-3 rounded-lg">✅ Kalender erfolgreich verbunden! Nächste Termine werden automatisch erkannt.</p>}
                  {icalStatus==='error' && <p className="text-red-500 text-sm mt-2 bg-red-50 p-3 rounded-lg">❌ URL nicht erkannt. Bitte prüft den Link.</p>}
                </div>
                <div className="border-t border-slate-100 pt-5">
                  <p className="text-xs text-slate-400 mb-3 font-semibold uppercase tracking-wider">Weitere Plattformen</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[['Booking.com','🏨'],['VRBO','🏠'],['HomeAway','🌴'],['Eigener Kalender','📅']].map(([name,icon])=>(
                      <button key={name} className="border border-slate-200 rounded-xl p-3 flex items-center gap-2 text-sm text-slate-600 hover:border-sea-400 hover:bg-sea-50 transition-colors">
                        <span>{icon}</span>{name}
                      </button>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-400">Ihr könnt den Kalender auch später im Dashboard verbinden.</p>
              </div>
            )}

            {/* STEP 4 – Plan */}
            {step===4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-2">Plan & Zahlung</h2>
                <div className="space-y-3">
                  {[
                    {id:'free',   name:'Starter',      price:'Kostenlos', desc:'Bis 2 Objekte · Manuelle Buchung'},
                    {id:'pro',    name:'Professional', price:'€29 / Monat',desc:'Unbegrenzt · Kalender-Sync · Auto-Buchung'},
                    {id:'agency', name:'Agentur',      price:'€79 / Monat',desc:'Multi-Account · API · Sammelrechnung'},
                  ].map(p=>(
                    <div key={p.id} onClick={()=>setPlan(p.id)}
                      className={`border-2 rounded-xl p-4 cursor-pointer transition-colors flex items-center justify-between
                        ${plan===p.id?'border-sea-500 bg-sea-50':'border-slate-200 hover:border-slate-300'}`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${plan===p.id?'border-sea-500':'border-slate-300'}`}>
                          {plan===p.id && <div className="w-2.5 h-2.5 rounded-full bg-sea-500"/>}
                        </div>
                        <div>
                          <p className="font-bold text-sm">{p.name}</p>
                          <p className="text-xs text-slate-500">{p.desc}</p>
                        </div>
                      </div>
                      <span className={`text-sm font-bold ${plan===p.id?'text-sea-500':'text-slate-600'}`}>{p.price}</span>
                    </div>
                  ))}
                </div>
                {plan!=='free' && (
                  <div className="border border-slate-200 rounded-xl p-5 space-y-4">
                    <p className="font-bold text-sm flex items-center gap-2">🔒 Sichere Zahlung via Stripe</p>
                    <div><label className="label">Karteninhaber</label><input className="input" placeholder="Max Mustermann"/></div>
                    <div><label className="label">Kartennummer</label><input className="input" placeholder="4242 4242 4242 4242"/></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div><label className="label">Gültig bis</label><input className="input" placeholder="MM/JJ"/></div>
                      <div><label className="label">CVV</label><input className="input" placeholder="123"/></div>
                    </div>
                    <p className="text-xs text-slate-400">🛡️ Zahlungsdaten werden verschlüsselt via Stripe verarbeitet. Keine Kartendaten werden gespeichert.</p>
                  </div>
                )}
                <div className="bg-sun-400/10 border border-sun-400/30 rounded-xl p-4 text-sm text-slate-700">
                  🎉 <strong>Starterbonus:</strong> Erste 3 Monate Professional kostenlos. Code: <strong>CLEANSTAY3</strong>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-slate-100">
              <button onClick={()=>setStep(s=>(s>1?(s-1) as Step:s))}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors ${step===1?'invisible':''}`}>
                ← Zurück
              </button>
              {step<4
                ? <button onClick={()=>setStep(s=>(s+1) as Step)} className="btn-sea px-8 py-2.5 text-sm">Weiter →</button>
                : <button className="btn-sun px-8 py-2.5 text-sm" onClick={()=>alert('🎉 Registrierung abgeschlossen! Datenbank-Integration als nächsten Schritt aktivieren.')}>
                    {plan==='free'?'Konto erstellen →':'Jetzt bezahlen & starten →'}
                  </button>
              }
            </div>
          </div>

          <p className="text-center text-sm text-slate-400 mt-6">
            Schon ein Konto? <Link href="/login" className="text-sea-500 font-semibold hover:underline">Anmelden</Link>
          </p>
        </div>
      </div>
    </>
  )
}
