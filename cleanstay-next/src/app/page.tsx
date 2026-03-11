import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar dark />

      {/* HERO */}
      <section className="min-h-screen pt-32 pb-24 bg-gradient-to-br from-[#071929] via-[#0E3D57] to-[#0E6E91] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage:'radial-gradient(circle,white 1px,transparent 1px)',backgroundSize:'40px 40px'}}/>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sea-400/20 rounded-full blur-3xl"/>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
              Verfügbar in ganz Kroatien
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.08] mb-6">
              Ihr Airbnb immer<br/>
              <span className="text-sun-400">makellos sauber</span><br/>
              für den nächsten Gast
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg">
              CleanStay verbindet Airbnb-Eigentümer mit geprüften Reinigungskräften in Kroatien –
              Kalender-Sync, Foto-Dokumentation und automatische Abrechnung auf einer Plattform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/register-host"    className="btn-sun text-base px-8 py-4">Als Gastgeber starten →</Link>
              <Link href="/register-cleaner" className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all inline-block">Als Reinigungskraft</Link>
            </div>
            <div className="flex gap-8 mt-12 pt-10 border-t border-white/10">
              {[['2.400+','Buchungen'],['340+','Reinigungskräfte'],['4.9★','Bewertung']].map(([v,l])=>(
                <div key={l}>
                  <div className="text-2xl font-black text-white">{v}</div>
                  <div className="text-white/50 text-sm">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-black/30 relative">
              <div className="absolute -top-4 -right-4 bg-sun-500 text-slate-900 text-sm font-bold px-4 py-2 rounded-full shadow-lg">🌟 Top bewertet</div>
              <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-slate-100">
                {[['168K','Inserate'],['86%','Auslastung'],['€42K','Ø Umsatz/Jahr']].map(([v,l])=>(
                  <div key={l} className="text-center">
                    <div className="text-2xl font-black text-sea-500">{v}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
              <div className="bg-sea-50 rounded-2xl p-5">
                <p className="text-xs font-bold text-sea-500 uppercase tracking-wider mb-3">📅 Nächste Reinigung</p>
                <div className="space-y-2.5">
                  {[['Objekt','Apt. Dubrovnik, 2 Zi.'],['Zeit','Heute, 11:00 Uhr'],['Reinigungskraft','Maja R.']].map(([k,v])=>(
                    <div key={k} className="flex justify-between text-sm">
                      <span className="text-slate-500">{k}</span>
                      <span className="font-semibold text-slate-800">{v}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-sm items-center pt-1">
                    <span className="text-slate-500">Status</span>
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">✓ Bestätigt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sea-500 text-xs font-bold uppercase tracking-widest mb-3">So funktionierts</p>
          <h2 className="text-4xl font-black mb-4">In 3 Schritten zur sauberen Wohnung</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mb-16">Vom Checkout bis zum nächsten Check-in – vollautomatisch.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {n:'01',e:'🔗',t:'Kalender verknüpfen',   d:'Airbnb iCal-URL einmal einfügen. Jede neue Buchung wird automatisch erkannt und eine Reinigung geplant.'},
              {n:'02',e:'🤝',t:'Reinigungskraft wählen',d:'Geprüfte, lokale Reinigungskräfte in eurer Region. Einmal wählen – immer automatisch eingeplant.'},
              {n:'03',e:'📸',t:'Fotos & Zahlung',       d:'Nach der Reinigung erhaltet ihr Fotos direkt aufs Handy. Bezahlung läuft automatisch via Stripe.'},
            ].map(s=>(
              <div key={s.n} className="card p-8 text-left relative hover:-translate-y-1 transition-transform duration-200 group">
                <span className="text-7xl font-black text-sea-50 absolute top-4 right-5 leading-none group-hover:text-sea-100 transition-colors">{s.n}</span>
                <div className="text-4xl mb-4">{s.e}</div>
                <h3 className="text-xl font-bold mb-3">{s.t}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-[#FDF7EE]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-sea-500 text-xs font-bold uppercase tracking-widest mb-3">Features</p>
            <h2 className="text-4xl font-black mb-4">Alles was Gastgeber wirklich brauchen</h2>
            <p className="text-slate-500 text-lg mb-10">Designed für die kroatische Touristensaison.</p>
            <div className="space-y-6">
              {[
                {i:'📅',t:'Airbnb & Booking Kalender-Sync',  d:'iCal-URL einmal verbinden. Reinigungen werden nach jedem Checkout automatisch eingeplant.'},
                {i:'📸',t:'Foto-Dokumentation',              d:'Reinigungskräfte laden Vorher-Nachher-Fotos hoch. Ihr seht in Echtzeit wenn alles fertig ist.'},
                {i:'💳',t:'Automatische Zahlung via Stripe', d:'Keine Barzahlung. Alles digital, transparent und steuerlich verwertbar.'},
                {i:'⭐',t:'Bewertungssystem',                d:'Nur Reinigungskräfte mit 4.2+ Sternen bleiben aktiv. Qualität ist garantiert.'},
              ].map(f=>(
                <div key={f.t} className="flex gap-4">
                  <div className="w-12 h-12 bg-sea-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">{f.i}</div>
                  <div>
                    <h4 className="font-bold mb-1">{f.t}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-slate-900 rounded-[2.5rem] p-4 shadow-2xl w-72 relative">
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 max-w-[190px]">
                <p className="text-xs font-bold text-slate-900">✅ Reinigung fertig</p>
                <p className="text-xs text-slate-400 mt-0.5">Maja lud 8 Fotos hoch. Check-in um 15:00!</p>
              </div>
              <div className="bg-sea-50 rounded-[2rem] p-5 space-y-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-slate-900 text-sm">Meine Objekte</span>
                  <div className="w-8 h-8 bg-sea-500 rounded-full"/>
                </div>
                {[
                  {a:'🏖️ Apt. Split – Riva 14', t:'Heute, 10:00 · Ana K.',   b:'border-green-500',c:'text-green-600',l:'✓ Fertig · 6 Fotos'},
                  {a:'🌊 Villa Hvar – 4 Zi.',    t:'Heute, 14:00 · Tomislav',b:'border-sun-500',  c:'text-sun-600',  l:'⏳ Unterwegs'},
                  {a:'🏡 Dubrovnik Stari Grad',  t:'Morgen, 11:00 · Maja R.',b:'border-sea-400',  c:'text-sea-500',  l:'📅 Geplant'},
                ].map(j=>(
                  <div key={j.a} className={`bg-white rounded-xl p-3.5 border-l-4 ${j.b}`}>
                    <p className="text-xs font-bold text-slate-900">{j.a}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{j.t}</p>
                    <p className={`text-xs font-semibold mt-1.5 ${j.c}`}>{j.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sea-500 text-xs font-bold uppercase tracking-widest mb-3">Preise</p>
          <h2 className="text-4xl font-black mb-4">Einfach & transparent</h2>
          <p className="text-slate-500 mb-16 max-w-md mx-auto">Keine versteckten Gebühren. Zahlt nur für geleistete Reinigungen.</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {n:'Starter',      p:'€0',  f:['Bis 2 Objekte','Manuelle Buchung','Foto-Dokumentation','E-Mail Support'],                                                    cta:'Kostenlos starten', star:false},
              {n:'Professional', p:'€29', f:['Unbegrenzte Objekte','Airbnb Kalender-Sync','Auto-Buchung','Prioritäts-Reinigung','Bettwäsche-Service','24/7 Support'],        cta:'Jetzt testen',      star:true},
              {n:'Agentur',      p:'€79', f:['Alles aus Professional','Multi-Account','API-Zugang','Eigene Reinigungskräfte','Sammelrechnung','Account Manager'],             cta:'Kontakt aufnehmen', star:false},
            ].map(plan=>(
              <div key={plan.n} className={`rounded-2xl p-8 text-left relative ${plan.star?'bg-sea-500 text-white scale-105 shadow-2xl shadow-sea-500/30':'bg-slate-50 border border-slate-200'}`}>
                {plan.star && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sun-500 text-slate-900 text-xs font-black px-4 py-1 rounded-full whitespace-nowrap">Beliebtester Plan</div>}
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${plan.star?'text-white/60':'text-sea-500'}`}>{plan.n}</p>
                <div className={`text-5xl font-black mb-1 ${plan.star?'text-sun-400':'text-slate-900'}`}>{plan.p}</div>
                <p className={`text-sm mb-6 ${plan.star?'text-white/60':'text-slate-400'}`}>/ Monat Plattformgebühr</p>
                <ul className="space-y-2.5 mb-8">
                  {plan.f.map(f=>(
                    <li key={f} className={`flex items-center gap-2 text-sm ${plan.star?'text-white/80':'text-slate-600'}`}>
                      <span className={`font-bold flex-shrink-0 ${plan.star?'text-sun-400':'text-sea-500'}`}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="/register-host" className={`block text-center font-bold py-3 rounded-xl transition-colors ${plan.star?'bg-sun-500 text-slate-900 hover:bg-sun-400':'bg-sea-500 text-white hover:bg-sea-600'}`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-slate-400 text-sm">+ 12% Vermittlungsgebühr pro abgewickelter Reinigung</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sun-400 text-xs font-bold uppercase tracking-widest mb-3">Bewertungen</p>
            <h2 className="text-4xl font-black text-white">Was unsere Gastgeber sagen</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {n:'Markus K.',r:'3 Objekte in Split',         i:'MK',t:'Endlich keine Sorgen mehr bei Übergaben. CleanStay organisiert alles automatisch – die Fotos geben mir totale Sicherheit.'},
              {n:'Sandra B.',r:'Remote-Gastgeberin, München', i:'SB',t:'Ich verwalte meine Apartments aus Deutschland. Mit CleanStay läuft alles wie von selbst. Die Airbnb-Integration ist Gold wert.'},
              {n:'Ivana M.', r:'7 Objekte in Dubrovnik',     i:'IM',t:'Die Reinigungskräfte sind superprofessionell. Meine Gäste loben immer die Sauberkeit – das verbesserte meine Bewertungen deutlich.'},
            ].map(t=>(
              <div key={t.n} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors">
                <div className="text-sun-400 mb-4 text-lg">★★★★★</div>
                <p className="text-white/70 text-sm leading-relaxed mb-6">&ldquo;{t.t}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sea-500 rounded-full flex items-center justify-center text-white text-sm font-bold">{t.i}</div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.n}</p>
                    <p className="text-white/40 text-xs">{t.r}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-sea-600 to-sea-500">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Bereit, Airbnb-Stress loszuwerden?</h2>
          <p className="text-white/70 text-lg mb-10">340+ Reinigungskräfte in ganz Kroatien warten auf eure erste Buchung.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/register-host"    className="btn-sun text-base px-8 py-4">Als Gastgeber registrieren</Link>
            <Link href="/register-cleaner" className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all inline-block">Als Reinigungskraft bewerben</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
