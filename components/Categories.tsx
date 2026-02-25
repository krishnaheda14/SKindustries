'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Categories() {
  const [shutterPattiOpen, setShutterPattiOpen] = useState(false)
  const [fittingMaterialOpen, setFittingMaterialOpen] = useState(false)
  const [frenchDoorOpen, setFrenchDoorOpen] = useState(false)
  const [laserOpen, setLaserOpen] = useState(false)

  const shutterPattiSizes = [
    { size: '6"', sizeKey: '6inch', description: 'Heavy-duty designs for maximum security', image: '/images/products/6-plain-patti(jumbo).png' },
    { size: '5"', sizeKey: '5inch', description: 'Perfect balance of strength and aesthetics', image: '/images/products/5-plain-patti(ganesh-plain).png' },
    { size: '4"', sizeKey: '4inch', description: 'Versatile options for standard applications', image: '/images/products/4-vikas-plain.png' },
    { size: '3"', sizeKey: '3inch', description: 'Compact designs with elegant profiles', image: '/images/products/3-regular-super-round.png' },
  ]

  const fittingMaterials = [
    { name: 'Shutter Guide', image: '/shutter-guide.jpeg' },
    { name: 'Shutter Bottom', image: '/shutter-bottom.jpeg' },
    { name: 'Spring', image: '/spring.jpeg' },
    { name: 'Bracket', image: '/shutter-bracket.jpeg' },
    { name: 'Other Fitting Material', image: null },
  ]

  const [modalImage, setModalImage] = useState<string | null>(null)

  return (
    <>
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
                    <Link key={idx} href={`/catalogue?size=${item.sizeKey}`} className="block">
                      <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-red-100 hover:border-red-400 hover:scale-[1.02] cursor-pointer">
                        <img src={item.image} alt={`${item.size} Patti`} className="w-20 h-20 object-cover rounded-lg" />
                        <div className="flex-1">
                          <div className="font-bold text-xl text-red-600 mb-1">{item.size} Patti</div>
                          <div className="text-sm text-gray-600 mb-2">{item.description}</div>
                          <div className="space-y-1">
                            <p className="text-xs font-semibold text-gray-800">
                              <span className="font-bold">Available in:</span> Galvanized (GI) and Zincro
                            </p>
                            <p className="text-xs font-semibold text-gray-800">
                              <span className="font-bold">Thickness:</span> 0.7mm to 0.9mm
                            </p>
                            {item.size === '3"' && (
                              <p className="text-xs font-semibold text-red-600">
                                <span className="font-bold">Designs:</span> Super Round and Plain
                              </p>
                            )}
                          </div>
                        </div>
                        <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
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
                  <div className="mb-6 rounded-lg overflow-visible bg-gray-50 p-3 flex items-center justify-center">
                    <img src="/images/fitting-material.jpeg" alt="Shutter Fitting Material" className="max-w-full max-h-72 object-contain" />
                  </div>
                  
                  <ul className="space-y-3">
                    {fittingMaterials.map((material, idx) => (
                      <li key={idx} className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-red-100">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                          {idx + 1}
                        </div>
                        {material.image && (
                          <button type="button" onClick={() => setModalImage(material.image)} className="flex-shrink-0">
                            <img src={material.image} alt={material.name} className="w-28 h-28 object-contain rounded-lg" />
                          </button>
                        )}
                        <span className="text-gray-800 font-semibold">{material.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* 3. Laser Cutting Designs Section */}
          <div className="card group fade-in-up scale-in stagger-2 bg-gradient-to-br from-white to-red-50 hover:scale-105 transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between w-full">
                <div>
                  <h3 className="text-3xl font-bold mb-1 text-black group-hover:text-red-600 transition-colors duration-300">Laser Cutting Designs</h3>
                  <p className="text-gray-600">Precision cutting for custom patterns and designs</p>
                </div>
                <button aria-label="Toggle laser designs" className={`p-2 rounded-md text-red-600 hover:bg-red-50 transition-transform ${''}`} onClick={() => setLaserOpen(!laserOpen)}>
                  <svg className={`w-6 h-6 transform transition-transform ${laserOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {laserOpen ? (
                <div className="mt-4">
                  <div className="w-full overflow-visible bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center p-4 rounded-md">
                    <img src="/images/french-door.png" alt="Laser Cutting Designs" className="max-w-full max-h-64 object-contain" />
                  </div>
                  <div className="mt-4">
                    <a href="/catalogue?tab=gallery" className="btn-primary w-full inline-flex items-center justify-center">View Design Gallery</a>
                  </div>
                </div>
              ) : (
                <div className="mt-4">
                  <a href="/catalogue?tab=gallery" className="btn-primary w-full inline-flex items-center justify-center">View Design Gallery</a>
                </div>
              )}
            </div>
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
                  <div className="mb-6 rounded-lg overflow-visible bg-gray-50 p-3 flex items-center justify-center">
                    <img src="/images/gallery/gallery-page-2.jpg" alt="French Door Section" className="max-w-full max-h-72 object-contain" />
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
      {modalImage && (
        <div onClick={() => setModalImage(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="max-w-5xl max-h-[90vh] overflow-auto p-4">
            <img src={modalImage ?? undefined} alt="zoom" className="w-full h-auto object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
          </div>
        </div>
      )}
    </>
  )
}

