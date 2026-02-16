'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Categories() {
  const [shutterPattiOpen, setShutterPattiOpen] = useState(false)
  const [fittingMaterialOpen, setFittingMaterialOpen] = useState(false)
  const [frenchDoorOpen, setFrenchDoorOpen] = useState(false)

  const shutterPattiSizes = [
    { size: '6"', description: 'Heavy-duty designs for maximum security', image: '/images/products/6-plain-patti(jumbo).png' },
    { size: '5"', description: 'Perfect balance of strength and aesthetics', image: '/images/products/5-plain-patti(ganesh-plain).png' },
    { size: '4"', description: 'Versatile options for standard applications', image: '/images/products/4-vikas-plain.png' },
    { size: '3"', description: 'Compact designs with elegant profiles', image: '/images/products/3-regular-super-round.png' },
  ]

  const fittingMaterials = [
    'Shutter Guide',
    'Shutter Bottom',
    'Spring',
    'Bracket',
    'Other Fitting Material'
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <h2 className="section-title text-center glitter">Our Product Range</h2>
        <p className="section-subtitle text-center mb-12">
          Comprehensive selection of rolling shutter raw materials
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* 1. Shutter Patti Designs Section */}
          <div className="card group fade-in-up scale-in bg-gradient-to-br from-white to-red-50">
            <div className="p-8">
              <button
                onClick={() => setShutterPattiOpen(!shutterPattiOpen)}
                className="w-full flex items-center justify-between text-left group-hover:text-red-600 transition-colors duration-300"
              >
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-black">Shutter Patti Designs</h3>
                  <p className="text-gray-600">All sizes available - Click to explore</p>
                </div>
                <svg
                  className={`w-8 h-8 text-red-600 transition-transform duration-300 ${shutterPattiOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {shutterPattiOpen && (
                <div className="mt-6 space-y-4 animate-fade-in">
                  {shutterPattiSizes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-red-100">
                      <img src={item.image} alt={`${item.size} Patti`} className="w-20 h-20 object-cover rounded-lg" />
                      <div>
                        <div className="font-bold text-xl text-red-600">{item.size} Patti</div>
                        <div className="text-sm text-gray-600">{item.description}</div>
                      </div>
                    </div>
                  ))}
                  <Link href="/catalogue" className="block mt-4">
                    <button className="w-full btn-primary text-center">View All Designs</button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* 2. Shutter Fitting Material Section */}
          <div className="card group fade-in-up scale-in stagger-1 bg-gradient-to-br from-white to-red-50">
            <div className="p-8">
              <button
                onClick={() => setFittingMaterialOpen(!fittingMaterialOpen)}
                className="w-full flex items-center justify-between text-left group-hover:text-red-600 transition-colors duration-300"
              >
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-black">Shutter Fitting Material</h3>
                  <p className="text-gray-600">Complete accessories range</p>
                </div>
                <svg
                  className={`w-8 h-8 text-red-600 transition-transform duration-300 ${fittingMaterialOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {fittingMaterialOpen && (
                <div className="mt-6 animate-fade-in">
                  {/* Placeholder for fitting material image */}
                  <div className="mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-8 text-center border-2 border-dashed border-red-300">
                    <svg className="w-24 h-24 mx-auto text-red-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <p className="text-gray-600 text-sm">Add fitting material image here</p>
                    <p className="text-xs text-gray-500 mt-1">Path: /public/images/fitting-material.jpg</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {fittingMaterials.map((material, idx) => (
                      <li key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-red-100">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                          {idx + 1}
                        </div>
                        <span className="text-gray-800 font-semibold">{material}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* 3. Laser Cutting Designs Section */}
          <div className="card group fade-in-up scale-in stagger-2 bg-gradient-to-br from-white to-red-50 hover:scale-105 transition-all duration-300">
            <Link href="/catalogue">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                <img
                  src="/images/gallery/gallery-page-2.jpg"
                  alt="Laser Cutting Designs"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-2 text-black group-hover:text-red-600 transition-colors duration-300">Laser Cutting Designs</h3>
                <p className="text-gray-600 mb-4">Precision cutting for custom patterns and designs</p>
                <button className="btn-primary w-full">View Design Gallery</button>
              </div>
            </Link>
          </div>

          {/* 4. French Door Sections */}
          <div className="card group fade-in-up scale-in stagger-3 bg-gradient-to-br from-white to-red-50">
            <div className="p-8">
              <button
                onClick={() => setFrenchDoorOpen(!frenchDoorOpen)}
                className="w-full flex items-center justify-between text-left group-hover:text-red-600 transition-colors duration-300"
              >
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-black">French Door Sections</h3>
                  <p className="text-gray-600">Premium quality door sections</p>
                </div>
                <svg
                  className={`w-8 h-8 text-red-600 transition-transform duration-300 ${frenchDoorOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {frenchDoorOpen && (
                <div className="mt-6 animate-fade-in">
                  {/* Placeholder for french door image */}
                  <div className="mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-8 text-center border-2 border-dashed border-red-300">
                    <svg className="w-24 h-24 mx-auto text-red-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                    </svg>
                    <p className="text-gray-600 text-sm">Add French door image here</p>
                    <p className="text-xs text-gray-500 mt-1">Path: /public/images/french-door.jpg</p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md border border-red-100">
                      <h4 className="font-bold text-lg text-red-600 mb-3">Available Gauges:</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full font-semibold">16 Gauge</span>
                        <span className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full font-semibold">18 Gauge</span>
                        <span className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full font-semibold">20 Gauge</span>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md border border-red-100">
                      <h4 className="font-bold text-lg text-red-600 mb-3">Designs:</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium">Plain</span>
                        <span className="px-3 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium">Chamfer</span>
                        <span className="px-3 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium">DD Design</span>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md border border-red-100">
                      <h4 className="font-bold text-lg text-red-600 mb-3">Sizes:</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg font-semibold">4" × 2"</span>
                        <span className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg font-semibold">5" × 2½"</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

