import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { MouseProvider } from '@/components/MouseContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jesus Cordoba | Ingeniero en Sistemas',
  description: 'Portafolio profesional de Jesus Cordoba - Ingeniero en Sistemas especializado en desarrollo de software, arquitectura de sistemas y soluciones tecnologicas.',
  keywords: ['ingeniero en sistemas', 'desarrollador', 'software', 'portafolio', 'tecnologia'],
  authors: [{ name: 'Jesus Cordoba' }],
  icons: {
    icon: [
      {
        url: '/sprout-l.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/sprout.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/sprout-l.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/sprout.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-sans antialiased">
        <MouseProvider>
          {children}
          <Analytics />
        </MouseProvider>
      </body>
    </html>
  )
}