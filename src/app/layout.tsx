import type { Metadata } from 'next'
import '../styles/index.scss';

export const metadata: Metadata = {
  title: 'OdsAv',
  description: 'Opératrice de saisie et assistante Virtuelle',
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
