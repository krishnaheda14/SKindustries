'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      className="relative text-black py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden transition-all duration-300"
      style={{
        background: `
          radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(220, 20, 60, 0.12) 0%, transparent 55%),
          linear-gradient(135deg, #ffffff 0%, #fff9f9 25%, #fff2f2 50%, #fff9f9 75%, #ffffff 100%)
        `,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="max-w-3xl relative z-10 mx-auto text-center">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold mb-3 text-red-600 opacity-90 fade-in-up">
            Where Precision Metal Solutions Come Together
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-7 md:mb-8 fade-in-up stagger-1 leading-relaxed">
            Since 1987, SKI – SK Industries and ASI – AS Industries deliver complete solutions in industrial shutter systems, precision door sections, and custom laser cutting designs. With strong fabrication expertise and dependable supply capability, we provide durable, high-quality metal products tailored for commercial and industrial applications.
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-3 leading-tight fade-in-up">
            <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 bg-clip-text text-transparent">
              Premium Rolling Shutter Solutions
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-lg text-gray-700 mb-6 sm:mb-7 md:mb-8 fade-in-up">
            Trusted by thousands for quality raw materials and precision laser cutting.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-4 fade-in-up stagger-2">
            <a href="/catalogue" className="inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold px-6 py-3 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-0.5">
              View Catalogue
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-200 text-red-600 font-semibold px-6 py-3 hover:bg-red-50 transition">
              Get Quote
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative subtle gradients */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 opacity-6 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500 opacity-6 rounded-full blur-3xl" style={{ animationDelay: '1s' }}></div>
    </section>
  )
}
