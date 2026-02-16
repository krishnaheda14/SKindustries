export default function About() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="slide-in-left">
            <h2 className="section-title mb-4 sm:mb-5 md:mb-6 text-3xl sm:text-4xl md:text-5xl glitter">About SK Industries</h2>
            <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              <p className="fade-in-up stagger-1">
                SK Industries has been at the forefront of rolling shutter manufacturing in India for over three decades. We specialize in manufacturing high-quality rolling shutter raw materials, precision laser cutting, and custom metal fabrication.
              </p>
              <p className="fade-in-up stagger-2">
                We specialize in producing premium quality <span className="font-semibold text-black">Shutter Patti</span> (rolling shutter slats) in various sizes and designs, along with precision <span className="font-semibold text-black">laser cutting services</span>.
              </p>
              <p className="fade-in-up stagger-3">
                Our commitment to quality and customer satisfaction has made us a trusted name among dealers, fabricators, and contractors across the country.
              </p>
            </div>
            <div className="mt-6 sm:mt-7 md:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 fade-in-up stagger-4">
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-black text-red-600 mb-1 sm:mb-2">40+</div>
                <div className="text-sm sm:text-base text-gray-700">Years Experience</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-black text-red-600 mb-1 sm:mb-2">15+</div>
                <div className="text-sm sm:text-base text-gray-700">Product Designs</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-black text-red-600 mb-1 sm:mb-2">1000+</div>
                <div className="text-sm sm:text-base text-gray-700">Satisfied Clients</div>
              </div>
            </div>
          </div>

          <div className="slide-in-right mt-8 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-500 rounded-xl sm:rounded-2xl transform rotate-3 scale-95 opacity-20"></div>
              <div className="relative bg-gradient-to-br from-red-600 to-red-700 p-6 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl shadow-2xl text-white shimmer">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 glitter">Our Facilities</h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start space-x-3 fade-in-up stagger-1">
                    <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm sm:text-base">State-of-the-art manufacturing units</span>
                  </li>
                  <li className="flex items-start space-x-3 fade-in-up stagger-2">
                    <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm sm:text-base">Advanced laser cutting machinery</span>
                  </li>
                  <li className="flex items-start space-x-3 fade-in-up stagger-3">
                    <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm sm:text-base">Quality control laboratories</span>
                  </li>
                  <li className="flex items-start space-x-3 fade-in-up stagger-4">
                    <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm sm:text-base">Efficient logistics and distribution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
