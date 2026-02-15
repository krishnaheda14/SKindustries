export default function CTA() {
  return (
    <section className="py-20 gradient-bg text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-industrial-accent rounded-full blur-3xl float"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-yellow-500 rounded-full blur-3xl float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white rounded-full blur-2xl float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in-up glitter">
            <span className="bg-gradient-to-r from-white via-industrial-accent to-white bg-clip-text text-transparent">
              Ready to Get Started?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 fade-in-up stagger-1">
            Contact us today for premium rolling shutter solutions and competitive pricing
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up stagger-2">
            <a 
              href="/contact" 
              className="group relative px-12 py-5 bg-gradient-to-r from-industrial-accent to-yellow-500 text-industrial-dark font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl pulse-glow"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>

            <a 
              href="https://wa.me/919422777786" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 px-12 py-5 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-110 hover:bg-white/20 hover:shadow-2xl border-2 border-white/30"
            >
              <svg className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="mt-12 pt-12 border-t border-white/20 fade-in-up stagger-3">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-industrial-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">+91 94227 77786</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-industrial-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">Ahmednagar, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
