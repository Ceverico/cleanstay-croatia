'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

type Step = 1|2|3

export default function RegisterCleanerPage() {
  const [step, setStep] = useState<Step>(1)
  const [form, setForm] = useState({firstName:'',lastName:'',email:'',password:'',phone:'',city:'',experience:'1-3',bio:'',iban:'',bank:''})
  const [ownEquip, setOwnEquip]   = useState(true)
  const [avail, setAvail]         = useState<string[]>([])
  const u = (k:string,v:string) => setForm(f=>({...f,[k]:v}))
  const toggleDay = (d:string) => setAvail(a=>a.includes(d)?a.filter(x=>x!==d):[...a,d])
  const days = ['Mo','Di','Mi','Do','Fr','Sa','So']
  const steps = ['Profil','Erfahrung','Bankdaten']

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#FDF7EE] to-white pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-block bg-sun-400/20 text-sun-600 text-sm font-bold px-4 py-2 rounded-full mb-4">💼 Als Reinigungskraft bewerben</div>
            <h1 className="text-4xl font-black text-slate-900 mb-2">Werde Teil von CleanStay</h1>
            <p className="text-slate-500">Flexible Zeiteinteilung · Fairer Lohn · Direkte Auszahlung</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {[['💶','85–90%','des Buchungspreises'],['📅','Flexibel','Eigene Zeiten wählen'],['⚡','2–5 Tage','Auszahlungszeit']].map(([i,v,l])=>(
              <div key={l} className="bg-white rounded-2xl p-4 text-center border border-sea-100 shadow-sm">
                <div className="text-2xl mb-1">{i}</div>
                <div className="font-black text-sea-500">{v}</div>
                <div className="text-xs text-slate-500 mt-0.5">{l}</div>
              </div>
            ))}
          </div>

          {/* Step indicator */}
          <div className="flex items-center mb-8">
            {steps.map((s,i)=>(
              <div key={s} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors
                    ${step>i+1?'bg-green-500 text-white':step===i+1?'bg-sun-500 text-slate-900':'bg-slate-100 text-slate-400'}`}>
                    {step>i+1?'✓':i+1}
                  </div>
                  <span className={`text-xs mt-1.5 font-medium hidden sm:block ${step===i+1?'text-sun-600':'text-slate-400'}`}>{s}</span>
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
                  <div><label className="label">Vorname</label><input className="input" placeholder="Ana"   value={form.firstName} onChange={e=>u('firstName',e.target.value)}/></div>
                  <div><label className="label">Nachname</label><input className="input" placeholder="Kovač" value={form.lastName}  onChange={e=>u('lastName',e.target.value)}/></div>
                </div>
                <div><label className="label">E-Mail</label><input className="input" type="email" placeholder="ana@beispiel.hr" value={form.email}    onChange={e=>u('email',e.target.value)}/></div>
                <div><label className="label">Passwort</label><input className="input" type="password" placeholder="Mindestens 8 Zeichen" value={form.password} onChange={e=>u('password',e.target.value)}/></div>
                <div><label className="label">Telefon</label><input className="input" placeholder="+385 91 234 5678" value={form.phone} onChange={e=>u('phone',e.target.value)}/></div>
                <div>
                  <label className="label">Einsatzgebiet</label>
                  <select className="input" value={form.city} onChange={e=>u('city',e.target.value)}>
                    <option value="">Stadt wählen...</option>
                    {['Dubrovnik','Split','Zagreb','Hvar','Zadar','Rovinj','Poreč','Šibenik','Andere'].map(c=><option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step===2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Erfahrung & Verfügbarkeit</h2>
                <div>
                  <label className="label">Berufserfahrung</label>
                  <select className="input" value={form.experience} onChange={e=>u('experience',e.target.value)}>
                    <option value="<1">Weniger als 1 Jahr</option>
                    <option value="1-3">1–3 Jahre</option>
                    <option value="3-5">3–5 Jahre</option>
                    <option value="5+">5+ Jahre</option>
                  </select>
                </div>
                <div>
                  <label className="label">Eigenes Reinigungsmaterial?</label>
                  <div className="flex gap-3">
                    {[['Ja, ich bringe alles mit',true],['Nein, wird gestellt',false]].map(([label,val])=>(
                      <button key={String(val)} onClick={()=>setOwnEquip(val as boolean)}
                        className={`flex-1 border-2 rounded-xl p-3 text-sm font-semibold transition-colors
                          ${ownEquip===val?'border-sea-500 bg-sea-50 text-sea-700':'border-slate-200 text-slate-500'}`}>
                        {label as string}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="label">Verfügbare Tage</label>
                  <div className="flex gap-2">
                    {days.map(d=>(
                      <button key={d} onClick={()=>toggleDay(d)}
                        className={`w-10 h-10 rounded-xl text-sm font-bold transition-colors
                          ${avail.includes(d)?'bg-sea-500 text-white':'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="label">Kurze Vorstellung (optional)</label>
                  <textarea className="input resize-none" rows={3}
                    placeholder="z.B. Ich reinige seit 5 Jahren Ferienwohnungen in Split..."
                    value={form.bio} onChange={e=>u('bio',e.target.value)}/>
                </div>
                <div className="bg-sea-50 rounded-xl p-4 text-sm text-sea-700">
                  <strong>📸 Nach der Registrierung:</strong> Lichtbildausweis hochladen und kostenlosen Probeeinsatz absolvieren.
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step===3 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-bold mb-2">Bankverbindung</h2>
                <p className="text-slate-500 text-sm mb-4">Eure Einnahmen werden direkt auf euer Konto überwiesen – sicher via Stripe Connect.</p>
                <div className="bg-slate-50 rounded-xl p-5 space-y-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🏦</span>
                    <div>
                      <p className="font-bold text-sm">Stripe Connect Auszahlung</p>
                      <p className="text-xs text-slate-500">Sicher, schnell, SEPA-kompatibel</p>
                    </div>
                  </div>
                  <div><label className="label">IBAN</label><input className="input" placeholder="HR12 3456 7890 1234 5678 9" value={form.iban} onChange={e=>u('iban',e.target.value)}/></div>
                  <div><label className="label">Bank</label><input className="input" placeholder="z.B. Erste Bank Croatia" value={form.bank} onChange={e=>u('bank',e.target.value)}/></div>
                </div>
                <div className="border border-slate-200 rounded-xl p-5 space-y-3">
                  <p className="font-bold text-sm">✅ Ich bestätige:</p>
                  {['Ich bin mindestens 18 Jahre alt','Ich bin als Selbstständige/r (obrt) tätig oder werde es','Ich habe alle Genehmigungen zur Reinigungsdienstleistung','Ich bin mit den AGB und der Datenschutzerklärung einverstanden'].map(t=>(
                    <label key={t} className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-0.5 accent-sea-500"/>
                      <span className="text-sm text-slate-600">{t}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8 pt-6 border-t border-slate-100">
              <button onClick={()=>setStep(s=>(s>1?(s-1) as Step:s))}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors ${step===1?'invisible':''}`}>
                ← Zurück
              </button>
              {step<3
                ? <button onClick={()=>setStep(s=>(s+1) as Step)} className="btn-sun px-8 py-2.5 text-sm">Weiter →</button>
                : <button className="btn-sun px-8 py-2.5 text-sm" onClick={()=>alert('🎉 Bewerbung abgeschlossen! Wir melden uns innerhalb von 24h.')}>Bewerbung absenden →</button>
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
