import type { Metadata } from 'next'
import '../styles/index.scss';

export const metadata: Metadata = {
  title: 'ADSOD',
  description: 'Opératrice de saisie a domicile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
