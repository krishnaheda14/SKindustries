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
          radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(220, 20, 60, 0.15) 0%, transparent 50%),
          linear-gradient(135deg, #ffffff 0%, #fff5f5 25%, #ffe5e5 50%, #fff5f5 75%, #ffffff 100%)
        `,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="max-w-4xl relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-5 md:mb-6 leading-tight fade-in-up float">
            <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 bg-clip-text text-transparent">
              Premium Rolling Shutter Solutions
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-6 sm:mb-7 md:mb-8 fade-in-up stagger-1">
            Manufacturing excellence since 1981. Trusted by thousands for quality raw materials and precision laser cutting.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 fade-in-up stagger-2">
            <a href="/catalogue" className="btn-primary text-center pulse-glow text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4">
              View Catalogue
            </a>
            <a href="/contact" className="btn-secondary text-center text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4">
              Get Quote
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated Decorative Elements */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-red-600 opacity-10 rounded-full blur-3xl float"></div>
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-red-500 opacity-15 rounded-full blur-3xl float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-red-400 opacity-5 rounded-full blur-2xl float" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}
