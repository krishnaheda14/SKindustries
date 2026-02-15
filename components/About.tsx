export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="slide-in-left">
            <h2 className="section-title mb-6">About SK Industries</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p className="fade-in-up stagger-1">
                Established in <span className="font-bold text-industrial-accent">1981</span>, SK Industries has been at the forefront of rolling shutter manufacturing in India for over four decades.
              </p>
              <p className="fade-in-up stagger-2">
                We specialize in producing premium quality <span className="font-semibold text-industrial-dark">Shutter Patti</span> (rolling shutter slats) in various sizes and designs, along with precision <span className="font-semibold text-industrial-dark">laser cutting services</span>.
              </p>
              <p className="fade-in-up stagger-3">
                Our commitment to quality and customer satisfaction has made us a trusted name among dealers, fabricators, and contractors across the country.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-6 fade-in-up stagger-4">
              <div className="text-center sm:text-left">
                <div className="text-4xl font-black text-industrial-accent mb-2">40+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-4xl font-black text-industrial-accent mb-2">15+</div>
                <div className="text-gray-600">Product Designs</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-4xl font-black text-industrial-accent mb-2">1000+</div>
                <div className="text-gray-600">Satisfied Clients</div>
              </div>
            </div>
          </div>

          <div className="slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-industrial-accent to-yellow-500 rounded-2xl transform rotate-3 scale-95 opacity-20"></div>
              <div className="relative bg-gradient-to-br from-industrial-dark to-industrial-steel p-12 rounded-2xl shadow-2xl text-white shimmer">
                <h3 className="text-2xl font-bold mb-6 glitter">Our Facilities</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3 fade-in-up stagger-1">
                    <svg className="w-6 h-6 text-industrial-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>State-of-the-art manufacturing units</span>
                  </li>
                  <li className="flex items-start space-x-3 fade-in-up stagger-2">
                    <svg className="w-6 h-6 text-industrial-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Advanced laser cutting machinery</span>
                  </li>
                  <li className="flex items-start space-x-3 fade-in-up stagger-3">
                    <svg className="w-6 h-6 text-industrial-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Quality control laboratories</span>
                  </li>
                  <li className="flex items-start space-x-3 fade-in-up stagger-4">
                    <svg className="w-6 h-6 text-industrial-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Efficient logistics and distribution</span>
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
