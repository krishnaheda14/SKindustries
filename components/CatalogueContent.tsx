'use client'

import { useState, useEffect } from 'react'

interface GalleryPage {
  page: number
  image: string
}

export default function CatalogueContent() {
  const [productsData, setProductsData] = useState<any>(null)
  const [galleryPages, setGalleryPages] = useState<GalleryPage[]>([])
  const [activeTab, setActiveTab] = useState('products')
  const [loading, setLoading] = useState(true)
  const [imageLoading, setImageLoading] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    setLoading(true)
    
    Promise.all([
      fetch('/data/products.json').then(res => res.json()),
      fetch('/data/gallery.json').then(res => res.json())
    ])
      .then(([products, gallery]) => {
        setProductsData(products)
        setGalleryPages(gallery)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to load data:', err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-20">
      {loading && <div className="loading-bar"></div>}
      
      <div className="container-custom">
        <h1 className="section-title text-center fade-in-up">Product Catalogue</h1>
        <p className="section-subtitle text-center mb-12 fade-in-up stagger-1">
          Explore our premium rolling shutter products and design gallery
        </p>

        {/* Animated Tabs */}
        <div className="flex justify-center mb-16 space-x-6 fade-in-up stagger-2">
          <button
            onClick={() => setActiveTab('products')}
            className={`group relative px-10 py-4 rounded-xl font-bold text-lg transition-all duration-500 transform ${
              activeTab === 'products'
                ? 'bg-gradient-to-r from-industrial-accent to-yellow-500 text-industrial-dark scale-110 shadow-2xl'
                : 'bg-white text-industrial-dark hover:scale-105 shadow-lg hover:shadow-xl'
            }`}
          >
            <span className="relative z-10">Products</span>
            {activeTab === 'products' && (
              <span className="absolute inset-0 rounded-xl bg-white opacity-20 animate-pulse"></span>
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('gallery')}
            className={`group relative px-10 py-4 rounded-xl font-bold text-lg transition-all duration-500 transform ${
              activeTab === 'gallery'
                ? 'bg-gradient-to-r from-industrial-steel to-industrial-dark text-white scale-110 shadow-2xl'
                : 'bg-white text-industrial-dark hover:scale-105 shadow-lg hover:shadow-xl'
            }`}
          >
            <span className="relative z-10">Design Gallery</span>
            {activeTab === 'gallery' && (
              <span className="absolute inset-0 rounded-xl bg-white opacity-10 animate-pulse"></span>
            )}
          </button>
        </div>

        {/* Products Tab */}
        {activeTab === 'products' && productsData && (
          <div className="space-y-20">
            {Object.entries(productsData).map(([key, category]: [string, any], catIndex) => (
              <div key={key} className={`fade-in-up stagger-${Math.min(catIndex + 1, 6)}`}>
                <div className="mb-10 text-center">
                  <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-industrial-dark to-industrial-steel bg-clip-text text-transparent">
                    {category.size} Patti Designs
                  </h2>
                  {category.material.length > 0 && (
                    <p className="text-lg text-gray-600 font-medium">
                      Available in: {category.material.join(', ')}
                    </p>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {category.products.map((product: any, idx: number) => (
                    <div 
                      key={idx} 
                      className="group card shimmer hover:scale-105 transition-all duration-500"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      {product.image && (
                        <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                        <h3 className="font-bold text-xl mb-2 text-industrial-dark group-hover:text-industrial-accent transition-colors duration-300">
                          {product.name}
                        </h3>
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-industrial-steel to-industrial-dark text-white text-sm rounded-full shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                          {product.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Design Gallery Tab - Full Page Images */}
        {activeTab === 'gallery' && galleryPages.length > 0 && (
          <div className="space-y-12">
            <div className="text-center mb-12 fade-in-up">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-industrial-accent via-yellow-500 to-industrial-accent bg-clip-text text-transparent glitter">
                Design Gallery
              </h2>
              <p className="text-gray-600 text-lg">
                Browse our complete design catalog
              </p>
            </div>

            <div className="space-y-16">
              {galleryPages.map((page, idx) => (
                <div 
                  key={page.page} 
                  className="group relative scale-in"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white">
                    {/* Glowing Border Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-industrial-accent via-yellow-500 to-industrial-steel opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
                    
                    {/* Image Container */}
                    <div className="relative p-4 bg-gradient-to-br from-gray-50 to-white">
                      {imageLoading[page.image] !== false && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                          <div className="w-16 h-16 border-4 border-industrial-accent border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                      
                      <img
                        src={page.image}
                        alt={`Design Gallery Page ${page.page}`}
                        className="w-full h-auto rounded-xl group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        onLoad={() => setImageLoading(prev => ({ ...prev, [page.image]: false }))}
                        style={{ 
                          display: imageLoading[page.image] === false ? 'block' : 'none',
                          boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-32">
            <div className="relative">
              <div className="w-24 h-24 border-8 border-gray-200 border-t-industrial-accent rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-8 border-gray-100 border-t-yellow-500 rounded-full animate-spin"></div>
              </div>
            </div>
            <p className="mt-8 text-xl font-semibold text-gray-600 animate-pulse">
              Loading catalogue...
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
