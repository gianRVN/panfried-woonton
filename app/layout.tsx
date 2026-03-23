import type { Metadata } from 'next'
import { Noto_Serif, Plus_Jakarta_Sans } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import './globals.css'

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-noto-serif',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gian Mohammad Arvin | Frontend Engineer & Geospatial Visualizer',
  description:
    '5 years of experience building data-driven, high-performance web applications. Skilled in React, TypeScript, and geospatial visualization.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${plusJakarta.variable} light`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="lg:overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:h-screen">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  )
}
