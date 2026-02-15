export default function Hero() {
  return (
    <section className="relative gradient-bg text-white py-24 md:py-32 overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight fade-in-up float">
            <span className="bg-gradient-to-r from-white via-industrial-accent to-white bg-clip-text text-transparent">
              Premium Rolling Shutter Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 fade-in-up stagger-1">
            Manufacturing excellence since 1981. Trusted by thousands for quality raw materials and precision laser cutting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-2">
            <a href="/catalogue" className="btn-primary text-center pulse-glow">
              View Catalogue
            </a>
            <a href="/contact" className="btn-secondary text-center">
              Get Quote
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-industrial-accent opacity-20 rounded-full blur-3xl float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500 opacity-10 rounded-full blur-3xl float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white opacity-5 rounded-full blur-2xl float" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}
