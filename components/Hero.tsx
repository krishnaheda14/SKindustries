export default function Hero() {
  return (
    <section
      className="relative text-black py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden transition-all duration-300"
      style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 40%, #fffaf6 100%)' }}
    >
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
