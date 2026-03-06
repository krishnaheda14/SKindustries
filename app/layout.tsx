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
    // English – core services
    'laser cutting', 'laser cutting services in Ahmednagar', 'CNC laser cutting Maharashtra',
    'laser cutting Ahmednagar', 'metal laser cutting Ahmednagar', 'laser cutting Ahilyanagar',
    'CNC laser cutting Ahmednagar', 'laser cutting near me Ahmednagar', 'metal cutting Ahmednagar',
    'sheet metal laser cutting', 'steel laser cutting', 'GI sheet laser cutting',
    'laser cut jali', 'laser cut grille', 'decorative laser cut panels', 'laser cut designs',
    // English – fabrication
    'mild steel fabrication', 'MS fabrication manufacturer Maharashtra', 'steel fabrication company',
    'MS fabrication Ahmednagar', 'metal fabrication Ahmednagar', 'steel fabrication Ahilyanagar',
    'fabrication workshop Ahmednagar', 'steel contractor Maharashtra', 'iron fabrication',
    // English – door sections
    'GI door section manufacturer', 'MS door frame manufacturer', 'door frame manufacturer Ahmednagar',
    'door section manufacturer Maharashtra', 'French door section', 'galvanized door section',
    'door section 16 gauge', 'door section 18 gauge', 'door section 20 gauge',
    'plain door section', 'chamfer door section', 'DD design door section',
    '4x2 door section', '5x2.5 door section',
    // English – rolling shutter
    'rolling shutter parts manufacturer', 'rolling shutter patti', 'shutter patti manufacturer',
    'shutter patti Ahmednagar', 'rolling shutter slats', 'shutter patti 3 inch',
    'shutter patti 4 inch', 'shutter patti 5 inch', 'shutter patti 6 inch',
    'commercial shutter manufacturer', 'rolling shutter components', 'rolling shutter raw material',
    'shutter guide', 'shutter bottom', 'shutter spring', 'shutter bracket',
    'GI patti', 'zincro patti', 'galvanized shutter patti',
    // Product names
    'Deluxe Lining patti', 'Hole Perforated patti', 'Laxmi No 1 patti', 'Laxmi No 2 patti',
    'O Hole Perforated patti', 'Plain Patti', 'Regular Super Round patti',
    'Slot Design patti', 'Vikas Deluxe patti', 'Vikas Perforated', 'Vikas Plain',
    'Ganesh Perforated patti', 'Ganesh Plain patti', 'Ganesh Deluxe patti',
    'Jumbo Perforated patti', 'Jumbo patti', 'Plain Patti Jumbo',
    // Company / location
    'SK Industries Ahmednagar', 'AS Industries', 'metal fabrication Ahmednagar',
    'Savedi Naka Ahmednagar', 'Manmad Road industry', 'Maharashtra fabrication workshop',
    'Ahilyanagar industry', 'Ahilyanagar metal', 'Ahmednagar manufacturing',
    'Nagar city industrial', 'Savedi Naka metal industry',
    // Marathi
    'लेझर कटिंग सेवा अहमदनगर', 'सीएनसी लेझर कटिंग सेवा', 'अहिल्यानगर लेझर कटिंग',
    'मेटल लेझर कटिंग अहमदनगर', 'स्टील फॅब्रिकेशन कंपनी',
    'एमएस फॅब्रिकेशन निर्माता', 'लोखंडी फॅब्रिकेशन सेवा',
    'GI डोअर सेक्शन निर्माता', 'दरवाजा फ्रेम निर्माता', 'गॅल्वनाईज्ड डोअर सेक्शन',
    'रोलिंग शटर पार्ट्स निर्माता', 'अहमदनगर स्टील फॅब्रिकेशन कंपनी',
    'सावेदी नाका मेटल इंडस्ट्री', 'मनमाड रोड फॅब्रिकेशन वर्कशॉप',
    'महाराष्ट्रातील शटर निर्माता', 'शटर पट्टी अहमदनगर', 'शटर पट्टी निर्माता',
    'रोलिंग शटर पट्टी', 'जीआय पट्टी', 'अहिल्यानगर उद्योग', 'धातू कटिंग अहमदनगर',
    // Hindi
    'शटर पट्टी', 'रोलिंग शटर पार्ट्स', 'दरवाजा फ्रेम', 'लेजर कटिंग सेवा',
    'स्टील फैब्रिकेशन अहमदनगर', 'जाली कटिंग', 'धातु काटना',
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

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy rolling shutter patti in Ahmednagar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SK Industries at 1/8 Savedi Naka, Manmad Road, Ahmednagar (Ahilyanagar) 414003 is the leading rolling shutter patti manufacturer and supplier in Ahmednagar, Maharashtra. Call +91 98342 63091.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is the best rolling shutter manufacturer in Ahmednagar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SK Industries and AS Industries are the most trusted rolling shutter patti manufacturers in Ahmednagar (Ahilyanagar), Maharashtra since 1997, with 39+ years of experience and 10,000+ satisfied customers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sizes of shutter patti are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SK Industries manufactures rolling shutter patti in 3 inch, 4 inch, 5 inch, and 6 inch sizes. Available in GI (galvanized iron) and zincro finish with 50+ designs including plain, perforated, deluxe, and decorative.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does SK Industries offer laser cutting services in Ahmednagar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. SK Industries provides precision CNC laser cutting services in Ahmednagar (Ahilyanagar), Maharashtra for custom metal patterns, decorative panels, jali cutting, grilles, and architectural metalwork.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where to get GI door sections manufactured in Ahmednagar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SK Industries manufactures premium GI door sections and MS door frames in Ahmednagar, Maharashtra. Available in 16, 18, and 20 gauge in plain, chamfer, and DD designs in 4x2 and 5x2.5 inch sizes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the price of rolling shutter patti in Maharashtra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For the latest rolling shutter patti price list, contact SK Industries at +91 98342 63091. We offer competitive wholesale and retail pricing for all sizes of shutter patti from our factory in Ahmednagar, Maharashtra.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does SK Industries supply shutter patti to other cities in Maharashtra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, SK Industries supplies rolling shutter patti, fitting materials, door sections, and laser cutting products to Pune, Nashik, Aurangabad, Shirdi, Sangamner, Shrirampur, Kopargaon, Rahuri and all districts of Maharashtra.',
      },
    },
    {
      '@type': 'Question',
      name: 'What shutter patti designs are available at SK Industries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Popular designs: Laxmi No 1, Laxmi No 2, Vikas Plain, Vikas Deluxe, Vikas Perforated, Ganesh Plain, Ganesh Perforated, Ganesh Deluxe With Lining, Slot Design, Regular Super Round, Hole Perforated, O Hole Perforated, Deluxe Lining, Jumbo Perforated, Plain Patti (all sizes 3", 4", 5", 6").',
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
