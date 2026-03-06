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

// NOTE: Replace this with your actual live domain once deployed
const SITE_URL = 'https://skindustries.in'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SK Industries | Laser Cutting & Steel Fabrication in Ahmednagar',
    template: '%s | SK Industries Ahmednagar',
  },
  description: 'SK Industries & AS Industries – Trusted manufacturer of rolling shutter raw materials, precision CNC laser cutting, GI door sections, MS door frames & mild steel fabrication in Ahmednagar, Maharashtra. Serving since 1997. Call +91 98342 63091.',
  keywords: [
    'laser cutting', 'laser cutting services in Ahmednagar', 'CNC laser cutting Maharashtra',
    'laser cutting Ahmednagar', 'metal laser cutting Ahmednagar',
    'mild steel fabrication', 'MS fabrication manufacturer Maharashtra', 'steel fabrication company',
    'GI door section manufacturer', 'MS door frame manufacturer', 'door frame manufacturer Ahmednagar',
    'rolling shutter parts manufacturer', 'rolling shutter patti', 'shutter patti manufacturer',
    'commercial shutter manufacturer', 'rolling shutter components',
    'SK Industries Ahmednagar', 'AS Industries', 'metal fabrication Ahmednagar',
    'Savedi Naka Ahmednagar', 'Manmad Road industry', 'Maharashtra fabrication workshop',
    'लेझर कटिंग सेवा अहमदनगर', 'सीएनसी लेझर कटिंग सेवा',
    'मेटल लेझर कटिंग अहमदनगर', 'स्टील फॅब्रिकेशन कंपनी',
    'एमएस फॅब्रिकेशन निर्माता', 'लोखंडी फॅब्रिकेशन सेवा',
    'GI डोअर सेक्शन निर्माता', 'दरवाजा फ्रेम निर्माता', 'गॅल्वनाईज्ड डोअर सेक्शन',
    'रोलिंग शटर पार्ट्स निर्माता', 'अहमदनगर स्टील फॅब्रिकेशन कंपनी',
    'सावेदी नाका मेटल इंडस्ट्री', 'मनमाड रोड फॅब्रिकेशन वर्कशॉप',
    'महाराष्ट्रातील शटर निर्माता',
  ].join(', '),
  authors: [{ name: 'SK Industries', url: SITE_URL }],
  creator: 'SK Industries',
  publisher: 'SK Industries',
  generator: 'Next.js',
  applicationName: 'SK Industries',
  referrer: 'origin-when-cross-origin',
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
  openGraph: {
    title: 'SK Industries | Mild Steel Fabrication & Laser Cutting in Ahmednagar',
    description:
      'Leading manufacturer of rolling shutter, precision CNC laser cutting, GI door sections & MS fabrication in Ahmednagar, Maharashtra since 1997. अहमदनगर मधील स्टील फॅब्रिकेशन सेवा.',
    url: SITE_URL,
    siteName: 'SK Industries – Ahmednagar',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/logos/logoski.png',
        width: 512,
        height: 512,
        alt: 'SK Industries – Laser Cutting & Steel Fabrication Ahmednagar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SK Industries | Laser Cutting & Steel Fabrication in Ahmednagar',
    description:
      'Rolling shutter, CNC laser cutting, GI door sections & MS fabrication in Ahmednagar, Maharashtra. Since 1997.',
    images: ['/images/logos/logoski.png'],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-IN': SITE_URL,
      'mr-IN': SITE_URL,
    },
  },
  category: 'manufacturing',
  // Uncomment and fill these once you verify via respective consoles:
  // verification: {
  //   google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
  //   yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
  // },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'Store'],
      '@id': `${SITE_URL}/#business`,
      name: 'SK Industries',
      alternateName: ['SKI', 'SK Industries Ahmednagar', 'AS Industries', 'ASI'],
      description:
        'Manufacturer of rolling shutter raw materials, precision CNC laser cutting, GI door sections, MS door frames & mild steel fabrication in Ahmednagar, Maharashtra. Established 1997.',
      url: SITE_URL,
      telephone: ['+919834263091', '+917385852854'],
      foundingDate: '1997',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1/8 Savedi Naka, Manmad Road',
        addressLocality: 'Ahmednagar',
        addressRegion: 'Maharashtra',
        postalCode: '414003',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 19.0948,
        longitude: 74.748,
      },
      hasMap: 'https://maps.google.com/?q=Savedi+Naka+Ahmednagar+Maharashtra',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      knowsAbout: [
        'Rolling shutter manufacturing',
        'CNC Laser Cutting',
        'Mild Steel Fabrication',
        'GI Door Sections',
        'MS Door Frames',
        'Shutter Patti',
        'Metal Fabrication',
      ],
      areaServed: {
        '@type': 'State',
        name: 'Maharashtra',
        containedIn: { '@type': 'Country', name: 'India' },
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'SK Industries Products & Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'CNC Laser Cutting Services Ahmednagar',
              description:
                'Precision CNC laser cutting for custom metal patterns, decorative panels and architectural metalwork in Ahmednagar, Maharashtra.',
              provider: { '@id': `${SITE_URL}/#business` },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Rolling Shutter Patti',
              description:
                'Premium GI & zincro rolling shutter slats in 3\", 4\", 5\", 6\" sizes with 50+ design options.',
              material: 'Galvanized Iron, Zincro',
              brand: { '@type': 'Brand', name: 'SK Industries' },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'GI Door Sections',
              description:
                'Premium French door sections in 16, 18, 20 gauge – plain, chamfer, DD designs in 4\"×2\" and 5\"×2½\" sizes.',
              material: 'Galvanized Iron, Mild Steel',
              brand: { '@type': 'Brand', name: 'SK Industries' },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mild Steel Fabrication Maharashtra',
              description:
                'Custom MS steel fabrication services for commercial and industrial applications across Maharashtra.',
              provider: { '@id': `${SITE_URL}/#business` },
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'SK Industries',
      description:
        'SK Industries – Rolling Shutter Manufacturer, CNC Laser Cutting & Steel Fabrication, Ahmednagar Maharashtra',
      publisher: { '@id': `${SITE_URL}/#business` },
      inLanguage: ['en-IN', 'mr-IN'],
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'SK Industries',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logos/logoski.png`,
        width: 512,
        height: 512,
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-98342-63091',
          contactType: 'sales',
          areaServed: 'IN',
          availableLanguage: ['English', 'Marathi', 'Hindi'],
        },
        {
          '@type': 'ContactPoint',
          telephone: '+91-73858-52854',
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['English', 'Marathi', 'Hindi'],
        },
      ],
      taxID: '27ARAPS8931K1Z9',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN" className={roboto.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
