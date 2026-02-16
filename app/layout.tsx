import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SK Industries | Rolling Shutter Raw Materials & Laser Cutting',
  description: 'Leading manufacturer of rolling shutter raw materials and precision laser cutting services. Premium quality products for industrial and commercial applications.',
  keywords: 'rolling shutter, shutter patti, laser cutting, GI materials, Zincro, industrial manufacturing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
