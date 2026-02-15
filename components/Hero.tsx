export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-industrial-dark via-industrial-steel to-industrial-dark text-white py-24 md:py-32">
      <div className="container-custom">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Premium Rolling Shutter Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Manufacturing excellence since 1981. Trusted by thousands for quality raw materials and precision laser cutting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/catalogue" className="btn-primary text-center">
              View Catalogue
            </a>
            <a href="/contact" className="btn-secondary text-center">
              Get Quote
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-industrial-accent opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-industrial-steel opacity-20 rounded-full blur-3xl"></div>
    </section>
  )
}
