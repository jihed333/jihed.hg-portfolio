import type { Metadata } from 'next'
import './globals.css'
import { LunaChatbot } from '@/components/ui' // Using the new UI index path



export const metadata: Metadata = {
  title: 'Jihed Hagui - Full Stack Developer & Designer',
  description: 'Innovative full-stack developer and designer creating extraordinary digital experiences. Specializing in modern web technologies and cutting-edge design.',
  keywords: ['Jihed Hagui', 'Full Stack Developer', 'Web Designer', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Jihed Hagui' }],
  creator: 'Jihed Hagui',
  icons: {
    icon: '/icon.jpg',
    shortcut: '/icon.jpg',
    apple: '/icon.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jihedhagui.dev',
    title: 'Jihed Hagui - Full Stack Developer & Designer',
    description: 'Innovative full-stack developer and designer creating extraordinary digital experiences.',
    siteName: 'Jihed Hagui Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jihed Hagui - Full Stack Developer & Designer',
    description: 'Innovative full-stack developer and designer creating extraordinary digital experiences.',
    creator: '@jihedhagui',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
        <LunaChatbot />
      </body>
    </html>
  )
}