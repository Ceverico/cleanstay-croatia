import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 border border-[#e8e8e8] rounded-full px-4 py-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Jetzt verfügbar in Split, Dubrovnik & Zagreb
            </span>
          </div>

          {/* Headline */}
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-[#0c1a2e] leading-[1.05] tracking-tight mb-6">
              Reinigung für<br />
              <span className="text-slate-400">euer Airbnb,</span><br />
              automatisch.
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-xl mx-auto">
              CleanStay verbindet Airbnb-Hosts mit geprüften Reinigungskräften.
              Kalender-Sync, Fotos, automatische Abrechnung — alles auf einer Plattform.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center mb-20">
            <Link href="/register-host" className="btn-primary text-base px-7 py-3.5">
              Kostenlos starten →
            </Link>
            <Link href="/register-cleaner" className="btn-outline text-base px-7 py-3.5">
              Als Reinigungskraft bewerben
            </Link>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-12 pt-10 border-t border-[#f0f0f0]">
            {[['2.400+', 'Abgeschlossene Reinigungen'], ['340+', 'Aktive Reinigungskräfte'], ['4.9 / 5', 'Durchschnittliche Bewertung'], ['168K+', 'Airbnb-Inserate in Kroatien']].map(([v, l]) => (
              <div key={l} className="text-center">
                <p className="text-2xl font-bold text-[#0c1a2e]" style={{fontFamily:'Syne,sans-serif'}}>{v}</p>
                <p className="text-xs text-slate-400 mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="py-8 px-6 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl border border-[#ebebeb] shadow-xl shadow-slate-100 overflow-hidden">
            {/* Browser chrome */}
            <div className="bg-[#f5f5f5] border-b border-[#ebebeb] px-5 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"/>
                <div className="w-3 h-3 rounded-full bg-[#febc2e]"/>
                <div className="w-3 h-3 rounded-full bg-[#28c840]"/>
              </div>
              <div className="flex-1 bg-white rounded-md h-6 mx-4 flex items-center px-3">
                <span className="text-xs text-slate-400">app.cleanstay.hr/dashboard</span>
              </div>
            </div>
            {/* Dashboard content */}
            <div className="p-8 grid grid-cols-3 gap-5">
              {/* Left: stats */}
              <div className="col-span-2 space-y-5">
                <div className="grid grid-cols-3 gap-4">
                  {[['14', 'Reinigungen März', '+3'], ['€ 784', 'Ausgaben', 'März 2026'], ['4.9★', 'Bewertung', '47 Reviews']].map(([v, l, s]) => (
                    <div key={l} className="bg-[#fafafa] rounded-2xl p-4 border border-[#f0f0f0]">
                      <p className="text-2xl font-bold text-[#0c1a2e]" style={{fontFamily:'Syne,sans-serif'}}>{v}</p>
                      <p className="text-xs text-slate-500 mt-1">{l}</p>
                      <p className="text-xs text-green-500 font-medium mt-0.5">{s}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#fafafa] rounded-2xl p-5 border border-[#f0f0f0]">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Nächste Reinigungen</p>
                  <div className="space-y-3">
                    {[
                      {p:'Apt. Dubrovnik – Stari Grad', c:'Maja R.', d:'Heute, 11:00', s:'Bestätigt', sc:'bg-green-50 text-green-700'},
                      {p:'Villa Hvar – 4 Zimmer', c:'Tomislav M.', d:'Morgen, 14:00', s:'Geplant', sc:'bg-slate-100 text-slate-500'},
                    ].map(b => (
                      <div key={b.p} className="flex items-center justify-between py-2.5 border-b border-[#f5f5f5] last:border-0">
                        <div>
                          <p className="text-sm font-semibold text-[#0c1a2e]">{b.p}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{b.d} · {b.c}</p>
                        </div>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${b.sc}`}>{b.s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right: calendar sync */}
              <div className="space-y-4">
                <div className="bg-[#0c1a2e] rounded-2xl p-5 text-white">
                  <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Kalender-Sync</p>
                  <div className="space-y-2.5">
                    {[['Apt. Split', 'Airbnb', true], ['Villa Hvar', 'Booking.com', true], ['Studio Zadar', '—', false]].map(([n, pl, ok]) => (
                      <div key={String(n)} className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold text-white">{n}</p>
                          <p className="text-xs text-white/40">{String(pl)}</p>
                        </div>
                        <div className={`w-2 h-2 rounded-full ${ok ? 'bg-green-400' : 'bg-white/20'}`}/>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-[#fafafa] rounded-2xl p-4 border border-[#f0f0f0]">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Letzte Fotos</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {['🛋️','🛁','🍳','🛏️'].map(e => (
                      <div key={e} className="aspect-square bg-[#f0f0f0] rounded-xl flex items-center justify-center text-2xl">{e}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Wie es funktioniert</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0c1a2e] max-w-lg leading-tight">
              Drei Schritte.<br />Kein Stress mehr.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {n:'01', t:'Kalender verbinden', d:'Airbnb iCal-URL einmal einfügen. Jede neue Buchung wird automatisch erkannt.', icon:'🔗'},
              {n:'02', t:'Reinigungskraft wählen', d:'Einmal die beste Kraft für eure Unterkunft auswählen — danach läuft alles automatisch.', icon:'✓'},
              {n:'03', t:'Fotos & Zahlung', d:'Nach jeder Reinigung kommen Fotos aufs Handy. Abrechnung via Stripe, vollautomatisch.', icon:'📸'},
            ].map(s => (
              <div key={s.n} className="group p-8 rounded-3xl border border-[#f0f0f0] hover:border-[#0c1a2e] transition-all duration-300 bg-white">
                <div className="flex items-start justify-between mb-8">
                  <span className="text-3xl">{s.icon}</span>
                  <span className="text-xs font-bold text-slate-200 group-hover:text-slate-300 transition-colors" style={{fontFamily:'Syne,sans-serif', fontSize:48, lineHeight:1}}>{s.n}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0c1a2e] mb-3">{s.t}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-28 px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Features</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0c1a2e] leading-tight mb-6">
              Alles was<br />Hosts brauchen.
            </h2>
            <p className="text-slate-500 mb-10 leading-relaxed">Designed für die kroatische Touristensaison. Jedes Feature wurde mit echten Hosts entwickelt.</p>
            <div className="space-y-5">
              {[
                ['📅', 'Airbnb & Booking.com Kalender-Sync', 'iCal-URL einmal einfügen, danach läuft alles automatisch.'],
                ['📸', 'Foto-Dokumentation', 'Reinigungskräfte laden Fotos hoch – ihr seht in Echtzeit wenn alles fertig ist.'],
                ['💳', 'Automatische Zahlung', 'Stripe-Integration. Digital, transparent, steuerlich verwertbar.'],
                ['⭐', 'Bewertetes Netzwerk', 'Nur Kräfte mit 4.2+ Sternen bleiben aktiv. Qualität ist garantiert.'],
              ].map(([icon, title, desc]) => (
                <div key={String(title)} className="flex gap-4 p-5 bg-white rounded-2xl border border-[#f0f0f0]">
                  <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
                  <div>
                    <p className="font-semibold text-[#0c1a2e] text-sm mb-1">{title}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-3xl border border-[#ebebeb] p-7">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-5">Aktive Aufträge heute</p>
              {[
                {apt:'🏖️ Apt. Split – Riva 14', time:'10:00 – 12:00', cleaner:'Ana K.', status:'In Arbeit', color:'bg-orange-50 text-orange-600'},
                {apt:'🌊 Villa Hvar', time:'14:00 – 18:00', cleaner:'Tomislav M.', status:'Bestätigt', color:'bg-green-50 text-green-600'},
                {apt:'🏡 Dubrovnik Stari Grad', time:'11:00 – 13:00', cleaner:'Maja R.', status:'Fertig ✓', color:'bg-slate-50 text-slate-500'},
              ].map(j => (
                <div key={j.apt} className="flex items-center justify-between py-4 border-b border-[#f5f5f5] last:border-0">
                  <div>
                    <p className="text-sm font-semibold text-[#0c1a2e]">{j.apt}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{j.time} · {j.cleaner}</p>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${j.color}`}>{j.status}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0c1a2e] rounded-3xl p-6 text-white">
                <p className="text-3xl font-bold mb-1" style={{fontFamily:'Syne,sans-serif'}}>86%</p>
                <p className="text-xs text-white/50">Ø Auslastung<br/>Dubrovnik</p>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-[#ebebeb]">
                <p className="text-3xl font-bold text-[#0c1a2e] mb-1" style={{fontFamily:'Syne,sans-serif'}}>€ 42K</p>
                <p className="text-xs text-slate-400">Ø Jahresumsatz<br/>pro Inserat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Preise</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0c1a2e]">Einfach & transparent.</h2>
            <p className="text-slate-500 mt-4">Kein Abo nötig. Zahlt nur für abgeschlossene Reinigungen.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter', price: '0', sub: '/ Monat',
                desc: 'Perfekt zum Ausprobieren',
                features: ['Bis 2 Objekte', 'Manuelle Buchung', 'Foto-Dokumentation', 'E-Mail Support'],
                cta: 'Kostenlos starten', highlight: false
              },
              {
                name: 'Professional', price: '29', sub: '/ Monat',
                desc: 'Für aktive Gastgeber',
                features: ['Unbegrenzte Objekte', 'Airbnb Kalender-Sync', 'Auto-Buchung', 'Prioritäts-Service', 'Bettwäsche-Service', '24/7 Support'],
                cta: 'Jetzt testen', highlight: true
              },
              {
                name: 'Agentur', price: '79', sub: '/ Monat',
                desc: 'Für Property Manager',
                features: ['Alles aus Professional', 'Multi-Account', 'API-Zugang', 'Sammelrechnung', 'Account Manager'],
                cta: 'Kontakt aufnehmen', highlight: false
              },
            ].map(plan => (
              <div key={plan.name} className={`rounded-3xl p-8 ${plan.highlight ? 'bg-[#0c1a2e] text-white' : 'bg-[#fafafa] border border-[#f0f0f0]'}`}>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${plan.highlight ? 'text-white/40' : 'text-slate-400'}`}>{plan.name}</p>
                <p className={`text-xs mb-6 ${plan.highlight ? 'text-white/50' : 'text-slate-400'}`}>{plan.desc}</p>
                <div className="flex items-end gap-1 mb-8">
                  <span className={`text-5xl font-bold ${plan.highlight ? 'text-white' : 'text-[#0c1a2e]'}`} style={{fontFamily:'Syne,sans-serif'}}>€{plan.price}</span>
                  <span className={`text-sm mb-2 ${plan.highlight ? 'text-white/40' : 'text-slate-400'}`}>{plan.sub}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className={`flex items-center gap-2.5 text-sm ${plan.highlight ? 'text-white/70' : 'text-slate-600'}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={plan.highlight ? 'rgba(255,255,255,0.5)' : '#0c1a2e'} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/register-host" className={`block text-center text-sm font-semibold py-3 rounded-full transition-all ${plan.highlight ? 'bg-white text-[#0c1a2e] hover:bg-slate-100' : 'bg-[#0c1a2e] text-white hover:bg-[#1a2f4a]'}`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-400 mt-8">+ 12% Vermittlungsgebühr pro Reinigung</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Bewertungen</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0c1a2e]">Hosts lieben CleanStay.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {name:'Markus K.', role:'3 Objekte in Split', text:'Endlich keine Sorgen mehr bei Übergaben. CleanStay organisiert alles automatisch – die Fotos geben mir totale Sicherheit.'},
              {name:'Sandra B.', role:'Remote-Host aus München', text:'Ich verwalte meine Apartments aus Deutschland. Mit CleanStay läuft alles wie von selbst. Die Airbnb-Integration ist Gold wert.'},
              {name:'Ivana M.', role:'7 Objekte in Dubrovnik', text:'Die Reinigungskräfte sind superprofessionell. Meine Gäste loben immer die Sauberkeit – meine Bewertungen stiegen deutlich.'},
            ].map(t => (
              <div key={t.name} className="bg-white rounded-3xl border border-[#ebebeb] p-8">
                <div className="flex gap-0.5 mb-5">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-[#f97316] text-sm">★</span>)}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#0c1a2e] rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0c1a2e]">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-28 px-6 bg-[#0c1a2e]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Bereit loszulegen?
          </h2>
          <p className="text-white/50 text-lg mb-10">
            340+ Reinigungskräfte in ganz Kroatien. Kostenlos starten, kein Abo nötig.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/register-host" className="inline-flex items-center gap-2 bg-white text-[#0c1a2e] font-semibold px-8 py-4 rounded-full text-base hover:bg-slate-100 transition-colors">
              Als Gastgeber registrieren →
            </Link>
            <Link href="/register-cleaner" className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-base hover:border-white/50 transition-colors">
              Als Reinigungskraft bewerben
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
