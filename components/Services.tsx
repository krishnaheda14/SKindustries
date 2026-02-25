"use client"

import { useState } from 'react'

export default function Services() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  const services = [
    {
      title: 'Rolling Shutter',
      description:
        'Premium quality rolling shutter patti in all sizes — 3", 4", 5", and 6". Available in galvanized (GI) and zincro finishes with 50+ design options for commercial and industrial use.',
      image: '/rolling-shutter.jpeg',
      link: '/catalogue',
    },
    {
      title: 'Laser Cutting',
      description:
        'State-of-the-art precision laser cutting services for custom patterns and designs. Ideal for decorative panels, grilles, and architectural metalwork with fast turnaround.',
      image: '/images/french-door.png',
      link: '/catalogue?tab=gallery',
    },
    {
      title: 'Door Sections',
      description:
        'Premium French door sections in 16, 18, and 20 gauge. Available in plain, chamfer, and DD designs in 4"×2" and 5"×2½" sizes — built for durability and precision.',
      image: '/images/gallery/gallery-page-2.jpg',
      link: '/catalogue',
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="section-title text-center fade-in-up text-3xl sm:text-4xl md:text-5xl glitter">
          Services Offered
        </h2>
        <p className="section-subtitle text-center mb-10 sm:mb-12 md:mb-16 fade-in-up stagger-1 text-base sm:text-lg">
          Complete metal solutions for commercial and industrial applications
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card overflow-hidden hover:shadow-2xl transition-all duration-300 scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
                <div className="relative h-80 sm:h-80 md:h-96 overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => setModalImage(service.image)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-3 left-4">
                  <span className="text-white font-bold text-xl drop-shadow-lg">{service.title}</span>
                </div>
              </div>
                {/* Content */}
                <div className="p-5 sm:p-6">
                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all duration-200 text-sm sm:text-base"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
            </div>
          ))}
        </div>
      </div>
      {modalImage && (
        <div onClick={() => setModalImage(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="max-w-5xl max-h-[90vh] overflow-auto p-4">
            <img src={modalImage} alt="zoom" className="w-full h-auto object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
          </div>
        </div>
      )}
    </section>
  )
}
