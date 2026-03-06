import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import Services from '@/components/Services'
import Features from '@/components/Features'
import About from '@/components/About'
import CTA from '@/components/CTA'
import SeoKeywords from '@/components/SeoKeywords'

export const metadata: Metadata = {
  title: 'SK Industries | Mild Steel Fabrication & Laser Cutting Services in Ahmednagar',
  description:
    'SK Industries – Leading manufacturer of rolling shutter patti, CNC laser cutting, GI door sections & MS fabrication in Ahmednagar, Maharashtra since 1997. अहमदनगर मधील स्टील फॅब्रिकेशन व लेझर कटिंग सेवा.',
  alternates: {
    canonical: 'https://skindustries.in',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Categories />
      <Features />
      <About />
      <CTA />
      <SeoKeywords />
    </>
  )
}
