export default function Hero() {
  return (
    <section
      className="relative text-black py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden transition-all duration-300"
      style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 40%, #fffaf6 100%)' }}
    >
      {/* ── Hidden SEO content – visible to crawlers & screen readers ── */}
      <h1 className="sr-only">
        Mild Steel Fabrication &amp; Laser Cutting Services in Ahmednagar | SK Industries |
        अहमदनगर मधील स्टील फॅब्रिकेशन सेवा
      </h1>
      <div className="sr-only">
        <p>
          SK Industries is a leading laser cutting services provider and mild steel fabrication
          company in Ahmednagar, Maharashtra. We offer precision CNC laser cutting, MS
          fabrication, GI door sections, and rolling shutter components since 1997.
        </p>
        <p>
          Services: Laser cutting services in Ahmednagar · CNC laser cutting Maharashtra ·
          Metal laser cutting Ahmednagar · Mild steel fabrication · MS fabrication manufacturer
          Maharashtra · Steel fabrication company · Savedi Naka metal industry ·
          Manmad Road fabrication workshop
        </p>
        <p>
          Products: GI door section manufacturer · MS door frame manufacturer · Rolling shutter
          parts manufacturer · Commercial shutter manufacturer · Shutter patti manufacturer ·
          Galvanized door section · Rolling shutter components Ahmednagar
        </p>
        <p>
          लेझर कटिंग सेवा अहमदनगर · सीएनसी लेझर कटिंग सेवा · मेटल लेझर कटिंग अहमदनगर ·
          स्टील फॅब्रिकेशन कंपनी · एमएस फॅब्रिकेशन निर्माता · लोखंडी फॅब्रिकेशन सेवा ·
          GI डोअर सेक्शन निर्माता · दरवाजा फ्रेम निर्माता · गॅल्वनाईज्ड डोअर सेक्शन
        </p>
        <p>
          रोलिंग शटर पार्ट्स निर्माता · अहमदनगर मधील लेझर कटिंग सेवा ·
          अहमदनगर स्टील फॅब्रिकेशन कंपनी · सावेदी नाका मेटल इंडस्ट्री ·
          मनमाड रोड फॅब्रिकेशन वर्कशॉप · महाराष्ट्रातील शटर निर्माता
        </p>
        <address>
          SK Industries, 1/8 Savedi Naka, Manmad Road, Ahmednagar, Maharashtra 414003.
          GSTIN: 27ARAPS8931K1Z9. Phone: +91 98342 63091 / +91 73858 52854.
        </address>
      </div>
      {/* ── End hidden SEO content ── */}

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-red-600 fade-in-up">
              Where Precision Metal Solutions Come Together
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-7 md:mb-8 fade-in-up leading-relaxed max-w-xl">
              Since 1997, SKI – SK Industries and ASI – AS Industries deliver complete solutions in industrial shutter systems, precision door sections, and custom laser cutting designs. With strong fabrication expertise and dependable supply capability, we provide durable, high-quality metal products tailored for commercial and industrial applications.
            </p>
            {/* headliner removed as requested */}

            <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch">
              <a href="/catalogue" className="inline-flex items-center justify-center btn-primary px-6 py-3 text-sm sm:text-base md:text-lg w-full sm:w-auto">
                View Catalogue
              </a>
              <a href="/contact" className="inline-flex items-center justify-center btn-secondary px-6 py-3 text-sm sm:text-base md:text-lg w-full sm:w-auto">
                Get Quote
              </a>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-5 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Why choose us</h3>
              <ul className="text-sm sm:text-base text-gray-700 space-y-2">
                <li className="flex items-start gap-3"><span className="text-red-600 font-bold">•</span> High-quality galvanized and zincro finishes</li>
                <li className="flex items-start gap-3"><span className="text-red-600 font-bold">•</span> Precision laser cutting and custom fabrication</li>
                <li className="flex items-start gap-3"><span className="text-red-600 font-bold">•</span> Trusted supply for commercial & industrial projects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}
