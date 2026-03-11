import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CleanStay — Reinigung für Ferienwohnungen in Kroatien',
  description: 'Die modernste Reinigungsplattform für Airbnb-Hosts in Kroatien.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
