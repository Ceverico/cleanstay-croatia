'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function RegisterCleanerPage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '', phone: '', city: '', experience: '1-3', bio: '', iban: '', bank: '' })
  const [ownEquip, setOwnEquip] = useState(true)
  const [avail, setAvail] = useState<string[]>([])
  const u = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))
  const toggleDay = (d: string) => setAvail(a => a.includes(d) ? a.filter(x => x !== d) : [...a, d])
  const days = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']
  const steps = ['Profil', 'Erfahrung', 'Bankdaten']

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
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">Als Reinigungskraft</p>
          <div className="space-y-3">
            {steps.map((s, i) => (
              <div key={s} className={`flex items-center gap-3 p-3 rounded-xl transition-all ${step === i + 1 ? 'bg-white border border-[#ebebeb] shadow-sm' : ''}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all
                  ${step > i + 1 ? 'bg-[#f97316] text-white' : step === i + 1 ? 'bg-[#0c1a2e] text-white' : 'bg-[#f0f0f0] text-slate-400'}`}>
                  {step > i + 1 ? '✓' : i + 1}
                </div>
                <span className={`text-sm font-medium ${step === i + 1 ? 'text-[#0c1a2e]' : 'text-slate-400'}`}>{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {[['💶', '85–90%', 'des Buchungspreises'], ['📅', 'Flexibel', 'Eigene Zeiten'], ['⚡', '2–5 Tage', 'Auszahlungszeit']].map(([i, v, l]) => (
            <div key={l} className="flex items-center gap-3">
              <span className="text-lg">{i}</span>
              <div><p className="text-sm font-bold text-[#0c1a2e]">{v}</p><p className="text-xs text-slate-400">{l}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <div className="h-1 bg-[#f0f0f0]">
          <div className="h-full bg-[#f97316] transition-all duration-500" style={{width: `${(step / steps.length) * 100}%`}} />
        </div>
        <div className="flex-1 flex items-center justify-center px-8 py-16">
          <div className="w-full max-w-lg">
            <div className="mb-10">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Schritt {step} von {steps.length}</p>
              <h1 className="text-3xl font-bold text-[#0c1a2e]">
                {['Persönliche Daten', 'Erfahrung & Verfügbarkeit', 'Bankverbindung'][step - 1]}
              </h1>
            </div>

            {step === 1 && (
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="label">Vorname</label><input className="input" placeholder="Ana" value={form.firstName} onChange={e => u('firstName', e.target.value)} /></div>
                  <div><label className="label">Nachname</label><input className="input" placeholder="Kovač" value={form.lastName} onChange={e => u('lastName', e.target.value)} /></div>
                </div>
                <div><label className="label">E-Mail</label><input className="input" type="email" placeholder="ana@beispiel.hr" value={form.email} onChange={e => u('email', e.target.value)} /></div>
                <div><label className="label">Passwort</label><input className="input" type="password" placeholder="Mindestens 8 Zeichen" value={form.password} onChange={e => u('password', e.target.value)} /></div>
                <div><label className="label">Telefon</label><input className="input" placeholder="+385 91 234 5678" value={form.phone} onChange={e => u('phone', e.target.value)} /></div>
                <div>
                  <label className="label">Einsatzgebiet</label>
                  <select className="input" value={form.city} onChange={e => u('city', e.target.value)}>
                    <option value="">Stadt wählen...</option>
                    {['Dubrovnik', 'Split', 'Zagreb', 'Hvar', 'Zadar', 'Rovinj', 'Poreč', 'Šibenik', 'Andere'].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="label">Berufserfahrung</label>
                  <select className="input" value={form.experience} onChange={e => u('experience', e.target.value)}>
                    <option value="<1">Weniger als 1 Jahr</option>
                    <option value="1-3">1–3 Jahre</option>
                    <option value="3-5">3–5 Jahre</option>
                    <option value="5+">5+ Jahre</option>
                  </select>
                </div>
                <div>
                  <label className="label">Eigenes Reinigungsmaterial?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[['Ja, ich bringe alles mit', true], ['Nein, wird gestellt', false]].map(([lbl, val]) => (
                      <button key={String(val)} onClick={() => setOwnEquip(val as boolean)}
                        className={`border-2 rounded-xl p-4 text-sm font-medium transition-all ${ownEquip === val ? 'border-[#0c1a2e] bg-[#fafafa] text-[#0c1a2e]' : 'border-[#f0f0f0] text-slate-500'}`}>
                        {lbl as string}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="label">Verfügbare Tage</label>
                  <div className="flex gap-2 flex-wrap">
                    {days.map(d => (
                      <button key={d} onClick={() => toggleDay(d)}
                        className={`w-11 h-11 rounded-xl text-sm font-semibold transition-all ${avail.includes(d) ? 'bg-[#0c1a2e] text-white' : 'bg-[#f5f5f5] text-slate-500 hover:bg-[#ebebeb]'}`}>
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="label">Kurze Vorstellung (optional)</label>
                  <textarea className="input resize-none" rows={3} placeholder="z.B. Ich reinige seit 5 Jahren Ferienwohnungen in Split..."
                    value={form.bio} onChange={e => u('bio', e.target.value)} />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <div className="bg-[#fafafa] border border-[#f0f0f0] rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-[#0c1a2e] rounded-xl flex items-center justify-center text-white text-sm">🏦</div>
                    <div><p className="font-semibold text-sm text-[#0c1a2e]">Stripe Connect Auszahlung</p><p className="text-xs text-slate-400">Sicher, schnell, SEPA-kompatibel</p></div>
                  </div>
                  <div className="space-y-4">
                    <div><label className="label">IBAN</label><input className="input" placeholder="HR12 3456 7890 1234 5678 9" value={form.iban} onChange={e => u('iban', e.target.value)} /></div>
                    <div><label className="label">Bank</label><input className="input" placeholder="z.B. Erste Bank Croatia" value={form.bank} onChange={e => u('bank', e.target.value)} /></div>
                  </div>
                </div>
                <div className="border border-[#f0f0f0] rounded-2xl p-5 space-y-3">
                  <p className="text-sm font-semibold text-[#0c1a2e] mb-1">Ich bestätige:</p>
                  {['Ich bin mindestens 18 Jahre alt', 'Ich bin als Selbstständige/r tätig oder werde es', 'Ich habe alle nötigen Genehmigungen', 'Ich bin mit den AGB und Datenschutzrichtlinien einverstanden'].map(t => (
                    <label key={t} className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-0.5 accent-[#0c1a2e]" />
                      <span className="text-sm text-slate-600">{t}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between items-center mt-10 pt-8 border-t border-[#f0f0f0]">
              <button onClick={() => setStep(s => Math.max(1, s - 1))} className={`btn-outline ${step === 1 ? 'invisible' : ''}`}>← Zurück</button>
              {step < 3
                ? <button className="btn-primary" onClick={() => setStep(s => s + 1)}>Weiter →</button>
                : <button className="btn-primary" onClick={() => alert('🎉 Bewerbung abgeschlossen! Wir melden uns innerhalb von 24h.')}>Bewerbung absenden →</button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
