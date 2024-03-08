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

      <link rel="shortcut icon" href="/imgs/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/imgs/favicon.ico" type="image/x-icon" />

      <link rel="apple-touch-icon" href="/imgs/favicon.ico" type="image/x-icon" />
      <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      
      <body>{children}</body>
    </html>
  )
}
