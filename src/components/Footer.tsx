import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <span className="text-2xl font-black text-sea-400" style={{fontFamily:'Playfair Display,serif'}}>
              Clean<span className="text-sun-500">Stay</span>
            </span>
            <p className="text-white/40 text-sm mt-3 max-w-xs leading-relaxed">
              Die führende Reinigungsplattform für Ferienwohnungen in Kroatien. Vertrauenswürdig, zuverlässig, lokal.
            </p>
          </div>
          <div>
            <h5 className="text-white font-semibold text-sm mb-4">Plattform</h5>
            <ul className="space-y-2.5">
              {[['Für Gastgeber','/register-host'],['Für Reinigungskräfte','/register-cleaner'],['Preise','/#pricing'],['Anmelden','/login']].map(([l,h])=>(
                <li key={l}><Link href={h} className="text-white/40 text-sm hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold text-sm mb-4">Städte</h5>
            <ul className="space-y-2.5">
              {['Dubrovnik','Split','Zagreb','Hvar','Zadar','Istrien'].map(c=>(
                <li key={c}><span className="text-white/40 text-sm">{c}</span></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <span>© 2026 CleanStay Croatia d.o.o. Alle Rechte vorbehalten.</span>
          <div className="flex gap-6">
            {[['Datenschutz','/datenschutz'],['AGB','/agb'],['Impressum','/impressum']].map(([l,h])=>(
              <Link key={l} href={h} className="hover:text-white transition-colors">{l}</Link>
            ))}
          </div>
          <span>🇭🇷 Made in Croatia</span>
        </div>
      </div>
    </footer>
  )
}
