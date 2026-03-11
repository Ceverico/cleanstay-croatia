import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CleanStay Croatia – Reinigung für Ferienwohnungen',
  description: 'Die Nr. 1 Reinigungsplattform für Airbnb in Kroatien.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  )
}
