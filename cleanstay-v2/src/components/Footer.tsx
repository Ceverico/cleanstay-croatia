import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[#f0f0f0] bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#0c1a2e] rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">CS</span>
              </div>
              <span className="font-bold text-[#0c1a2e]" style={{fontFamily:'Syne,sans-serif'}}>CleanStay</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-[200px]">
              Die smarte Reinigungsplattform für Airbnb-Hosts in Kroatien.
            </p>
          </div>

          {[
            { title: 'Produkt', links: [['Wie es funktioniert', '/#how'], ['Preise', '/#pricing'], ['Für Gastgeber', '/register-host']] },
            { title: 'Reinigungskräfte', links: [['Jetzt bewerben', '/register-cleaner'], ['Wie es läuft', '/#how'], ['Auszahlung', '/register-cleaner']] },
            { title: 'Unternehmen', links: [['Über uns', '/'], ['Datenschutz', '/'], ['AGB', '/']] },
          ].map(col => (
            <div key={col.title}>
              <p className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map(([label, href]) => (
                  <li key={label}><Link href={href} className="text-sm text-slate-400 hover:text-slate-700 transition-colors">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#f0f0f0]">
          <p className="text-xs text-slate-400">© 2026 CleanStay Croatia d.o.o. Alle Rechte vorbehalten.</p>
          <p className="text-xs text-slate-400">🇭🇷 Gebaut für Kroatien</p>
        </div>
      </div>
    </footer>
  )
}
