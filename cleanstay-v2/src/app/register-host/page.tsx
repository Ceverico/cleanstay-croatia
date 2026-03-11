'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function RegisterHostPage() {
  const [step, setStep] = useState(1)
  const [icalUrl, setIcalUrl] = useState('')
  const [icalSt, setIcalSt] = useState<'idle' | 'testing' | 'ok' | 'error'>('idle')
  const [plan, setPlan] = useState('pro')
  const [propType, setPropType] = useState('apartment')
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '', phone: '', city: '', propName: '', beds: '2' })
  const u = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))
  const testIcal = async () => {
    setIcalSt('testing')
    await new Promise(r => setTimeout(r, 1500))
    setIcalSt(icalUrl.length > 10 ? 'ok' : 'error')
  }
  const steps = ['Profil', 'Objekt', 'Kalender', 'Plan']
  const total = steps.length

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left sidebar */}
      <div className="hidden lg:flex w-80 bg-[#fafafa] border-r border-[#f0f0f0] flex-col p-10 flex-shrink-0">
        <Link href="/" className="flex items-center gap-2 mb-16">
          <div className="w-7 h-7 bg-[#0c1a2e] rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">CS</span>
          </div>
          <span className="font-bold text-[#0c1a2e]" style={{fontFamily:'Syne,sans-serif'}}>CleanStay</span>
        </Link>

        <div className="flex-1">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">Schritte</p>
          <div className="space-y-3">
            {steps.map((s, i) => (
              <div key={s} className={`flex items-center gap-3 p-3 rounded-xl transition-all ${step === i + 1 ? 'bg-white border border-[#ebebeb] shadow-sm' : ''}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all
                  ${step > i + 1 ? 'bg-[#0c1a2e] text-white' : step === i + 1 ? 'bg-[#0c1a2e] text-white' : 'bg-[#f0f0f0] text-slate-400'}`}>
                  {step > i + 1 ? '✓' : i + 1}
                </div>
                <span className={`text-sm font-medium ${step === i + 1 ? 'text-[#0c1a2e]' : 'text-slate-400'}`}>{s}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#ebebeb] rounded-2xl p-5">
          <p className="text-xs font-semibold text-[#0c1a2e] mb-1">🎉 Starterbonus</p>
          <p className="text-xs text-slate-400 leading-relaxed">Erste 3 Monate Professional kostenlos mit Code <strong className="text-[#0c1a2e]">CLEANSTAY3</strong></p>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Progress bar */}
        <div className="h-1 bg-[#f0f0f0]">
          <div className="h-full bg-[#0c1a2e] transition-all duration-500" style={{width: `${(step / total) * 100}%`}} />
        </div>

        <div className="flex-1 flex items-center justify-center px-8 py-16">
          <div className="w-full max-w-lg">

            {/* Step header */}
            <div className="mb-10">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Schritt {step} von {total}</p>
              <h1 className="text-3xl font-bold text-[#0c1a2e]">
                {['Persönliche Daten', 'Euer Objekt', 'Kalender verbinden', 'Plan wählen'][step - 1]}
              </h1>
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="label">Vorname</label><input className="input" placeholder="Max" value={form.firstName} onChange={e => u('firstName', e.target.value)} /></div>
                  <div><label className="label">Nachname</label><input className="input" placeholder="Mustermann" value={form.lastName} onChange={e => u('lastName', e.target.value)} /></div>
                </div>
                <div><label className="label">E-Mail</label><input className="input" type="email" placeholder="max@beispiel.de" value={form.email} onChange={e => u('email', e.target.value)} /></div>
                <div><label className="label">Passwort</label><input className="input" type="password" placeholder="Mindestens 8 Zeichen" value={form.password} onChange={e => u('password', e.target.value)} /></div>
                <div><label className="label">Telefon</label><input className="input" placeholder="+385 91 234 5678" value={form.phone} onChange={e => u('phone', e.target.value)} /></div>
                <div>
                  <label className="label">Stadt</label>
                  <select className="input" value={form.city} onChange={e => u('city', e.target.value)}>
                    <option value="">Stadt wählen...</option>
                    {['Dubrovnik', 'Split', 'Zagreb', 'Hvar', 'Zadar', 'Rovinj', 'Poreč', 'Šibenik', 'Andere'].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-6">
                <div><label className="label">Objektname</label><input className="input" placeholder="z.B. Apt. Dubrovnik Stari Grad" value={form.propName} onChange={e => u('propName', e.target.value)} /></div>
                <div>
                  <label className="label">Objekttyp</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[['apartment', '🏢', 'Apartment'], ['house', '🏡', 'Haus / Villa'], ['room', '🛏️', 'Zimmer']].map(([val, icon, lbl]) => (
                      <button key={val} onClick={() => setPropType(val)}
                        className={`border-2 rounded-2xl p-5 text-center transition-all ${propType === val ? 'border-[#0c1a2e] bg-[#fafafa]' : 'border-[#f0f0f0] hover:border-slate-300'}`}>
                        <div className="text-2xl mb-2">{icon}</div>
                        <div className="text-xs font-semibold text-slate-700">{lbl}</div>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="label">Schlafzimmer</label>
                  <select className="input" value={form.beds} onChange={e => u('beds', e.target.value)}>
                    {['1', '2', '3', '4', '5', '6+'].map(n => <option key={n} value={n}>{n} Schlafzimmer</option>)}
                  </select>
                </div>
              </div>
            )}

            {/* STEP 3 – iCal */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="bg-[#fafafa] border border-[#f0f0f0] rounded-2xl p-5">
                  <p className="text-sm font-semibold text-[#0c1a2e] mb-3">📋 So findet ihr die iCal-URL in Airbnb:</p>
                  <ol className="space-y-2">
                    {['Airbnb öffnen → Kalender', 'Oben rechts: Verfügbarkeitseinstellungen', 'Unten: Kalender exportieren', 'Link kopieren und hier einfügen'].map((s, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-500">
                        <span className="w-5 h-5 bg-[#0c1a2e] text-white text-xs rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                        {s}
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <label className="label">Airbnb iCal-URL</label>
                  <div className="flex gap-2">
                    <input className="input flex-1" placeholder="https://www.airbnb.com/calendar/ical/XXXX.ics"
                      value={icalUrl} onChange={e => { setIcalUrl(e.target.value); setIcalSt('idle') }} />
                    <button onClick={testIcal} disabled={!icalUrl || icalSt === 'testing'}
                      className="btn-primary disabled:opacity-50 px-5 rounded-xl whitespace-nowrap">
                      {icalSt === 'testing' ? '...' : 'Testen'}
                    </button>
                  </div>
                  {icalSt === 'ok' && <p className="text-sm text-green-600 mt-3 flex items-center gap-2"><span className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center text-xs">✓</span> Kalender erfolgreich verbunden!</p>}
                  {icalSt === 'error' && <p className="text-sm text-red-500 mt-3">URL nicht erkannt. Bitte den Link prüfen.</p>}
                </div>
                <p className="text-xs text-slate-400">Ihr könnt den Kalender auch später im Dashboard verbinden.</p>
              </div>
            )}

            {/* STEP 4 – Plan */}
            {step === 4 && (
              <div className="space-y-4">
                {[
                  { id: 'free', name: 'Starter', price: 'Kostenlos', desc: 'Bis 2 Objekte · Manuelle Buchung' },
                  { id: 'pro', name: 'Professional', price: '€ 29 / Monat', desc: 'Unbegrenzt · Kalender-Sync · Auto-Buchung' },
                  { id: 'agency', name: 'Agentur', price: '€ 79 / Monat', desc: 'Multi-Account · API · Sammelrechnung' },
                ].map(p => (
                  <div key={p.id} onClick={() => setPlan(p.id)}
                    className={`border-2 rounded-2xl p-5 cursor-pointer transition-all flex items-center justify-between
                      ${plan === p.id ? 'border-[#0c1a2e] bg-[#fafafa]' : 'border-[#f0f0f0] hover:border-slate-300'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${plan === p.id ? 'border-[#0c1a2e]' : 'border-slate-300'}`}>
                        {plan === p.id && <div className="w-2.5 h-2.5 rounded-full bg-[#0c1a2e]" />}
                      </div>
                      <div>
                        <p className="font-semibold text-[#0c1a2e] text-sm">{p.name}</p>
                        <p className="text-xs text-slate-400">{p.desc}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-[#0c1a2e]">{p.price}</span>
                  </div>
                ))}
                {plan !== 'free' && (
                  <div className="border border-[#f0f0f0] rounded-2xl p-6 space-y-4 mt-4">
                    <p className="text-sm font-semibold text-[#0c1a2e] flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                      Zahlung via Stripe
                    </p>
                    <div><label className="label">Karteninhaber</label><input className="input" placeholder="Max Mustermann" /></div>
                    <div><label className="label">Kartennummer</label><input className="input" placeholder="4242 4242 4242 4242" /></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div><label className="label">Gültig bis</label><input className="input" placeholder="MM/JJ" /></div>
                      <div><label className="label">CVV</label><input className="input" placeholder="123" /></div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-10 pt-8 border-t border-[#f0f0f0]">
              <button onClick={() => setStep(s => Math.max(1, s - 1))}
                className={`btn-outline ${step === 1 ? 'invisible' : ''}`}>
                ← Zurück
              </button>
              {step < total
                ? <button className="btn-primary" onClick={() => setStep(s => s + 1)}>Weiter →</button>
                : <button className="btn-primary" onClick={() => alert('🎉 Konto erstellt!')}>
                    {plan === 'free' ? 'Konto erstellen →' : 'Bezahlen & starten →'}
                  </button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
