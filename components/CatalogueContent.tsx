'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

interface GalleryPage {
  page: number
  image: string
}

export default function CatalogueContent() {
  const searchParams = useSearchParams()
  const [productsData, setProductsData] = useState<any>(null)
  const [galleryPages] = useState<GalleryPage[]>(
    Array.from({ length: 12 }, (_, i) => ({
      page: i + 2,
      image: `/images/gallery/gallery-page-${i + 2}.jpg`
    }))
  )
  const [activeTab, setActiveTab] = useState('products')
  const [loading, setLoading] = useState(true)
  const [imageLoading, setImageLoading] = useState<{ [key: string]: boolean }>({})
  const [selectedSize, setSelectedSize] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('name')
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)

  useEffect(() => {
    // Check for size parameter in URL
    const sizeParam = searchParams.get('size')
    if (sizeParam) {
      setSelectedSize(sizeParam)
    }
  }, [searchParams])

  useEffect(() => {
    setLoading(true)
    
    fetch('/data/products.json')
      .then(res => res.json())
      .then(products => {
        setProductsData(products)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to load data:', err)
        setLoading(false)
      })
  }, [])

  const downloadCatalogue = () => {
    galleryPages.forEach((page, idx) => {
      setTimeout(() => {
        const link = document.createElement('a')
        link.href = page.image
        link.download = `design-catalogue-page-${page.page}.jpg`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }, idx * 500)
    })
  }

  const getFilteredProducts = () => {
    if (!productsData) return []
    
    let allProducts: any[] = []
    Object.entries(productsData).forEach(([key, category]: [string, any]) => {
      if (selectedSize === 'all' || key === selectedSize) {
        category.products.forEach((product: any) => {
          allProducts.push({ ...product, size: category.size, category: key })
        })
      }
    })

    // Sort products
    allProducts.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name)
      } else if (sortBy === 'type') {
        return a.type.localeCompare(b.type)
      } else if (sortBy === 'size') {
        return a.size.localeCompare(b.size)
      }
      return 0
    })

    return allProducts
  }

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      {loading && <div className="loading-bar"></div>}
      
      {/* Zoom Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fade-in cursor-zoom-out"
          onClick={() => setZoomedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-red-600 transition-colors z-10"
            onClick={() => setZoomedImage(null)}
          >
            ×
          </button>
          <img
            src={zoomedImage}
            alt="Zoomed view"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      
      <div className="container mx-auto max-w-7xl">
        <h1 className="section-title text-center fade-in-up text-3xl sm:text-4xl md:text-5xl">Product Catalogue</h1>
        <p className="section-subtitle text-center mb-8 sm:mb-10 md:mb-12 fade-in-up stagger-1 text-base sm:text-lg">
          Explore our premium rolling shutter products and design gallery
        </p>

        {/* Animated Tabs */}
        <div className="flex justify-center mb-12 sm:mb-14 md:mb-16 space-x-3 sm:space-x-4 md:space-x-6 fade-in-up stagger-2">
          <button
            onClick={() => setActiveTab('products')}
            className={`group relative px-5 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all duration-500 transform ${
              activeTab === 'products'
                ? 'bg-gradient-to-r from-red-600 to-red-500 text-white scale-105 sm:scale-110 shadow-2xl'
                : 'bg-white/80 backdrop-blur-sm text-black hover:scale-105 shadow-lg hover:shadow-xl border-2 border-red-200'
            }`}
          >
            <span className="relative z-10">Products</span>
            {activeTab === 'products' && (
              <span className="absolute inset-0 rounded-xl bg-white opacity-20 animate-pulse"></span>
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('gallery')}
            className={`group relative px-5 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all duration-500 transform ${
              activeTab === 'gallery'
                ? 'bg-gradient-to-r from-red-600 to-red-500 text-white scale-105 sm:scale-110 shadow-2xl'
                : 'bg-white/80 backdrop-blur-sm text-black hover:scale-105 shadow-lg hover:shadow-xl border-2 border-red-200'
            }`}
          >
            <span className="relative z-10">Design Gallery</span>
            {activeTab === 'gallery' && (
              <span className="absolute inset-0 rounded-xl bg-white opacity-10 animate-pulse"></span>
            )}
          </button>
        </div>

        {/* Products Tab with Filters */}
        {activeTab === 'products' && productsData && (
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {/* Filter and Sort Controls - Enhanced Size Buttons */}
            <div className="space-y-6 mb-8 fade-in-up stagger-3">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">Filter by Size</h3>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  <button
                    onClick={() => setSelectedSize('all')}
                    className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 transform ${
                      selectedSize === 'all'
                        ? 'bg-gradient-to-r from-red-600 to-red-500 text-white scale-110 shadow-2xl'
                        : 'bg-white text-black border-2 border-red-300 hover:border-red-500 hover:scale-105 shadow-lg'
                    }`}
                  >
                    All Sizes
                  </button>
                  <button
                    onClick={() => setSelectedSize('3inch')}
                    className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 transform ${
                      selectedSize === '3inch'
                        ? 'bg-gradient-to-r from-red-600 to-red-500 text-white scale-110 shadow-2xl'
                        : 'bg-white text-black border-2 border-red-300 hover:border-red-500 hover:scale-105 shadow-lg'
                    }`}
                  >
                    3" Patti
                  </button>
                  <button
                    onClick={() => setSelectedSize('4inch')}
                    className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 transform ${
                      selectedSize === '4inch'
                        ? 'bg-gradient-to-r from-red-600 to-red-500 text-white scale-110 shadow-2xl'
                        : 'bg-white text-black border-2 border-red-300 hover:border-red-500 hover:scale-105 shadow-lg'
                    }`}
                  >
                    4" Patti
                  </button>
                  <button
                    onClick={() => setSelectedSize('5inch')}
                    className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 transform ${
                      selectedSize === '5inch'
                        ? 'bg-gradient-to-r from-red-600 to-red-500 text-white scale-110 shadow-2xl'
                        : 'bg-white text-black border-2 border-red-300 hover:border-red-500 hover:scale-105 shadow-lg'
                    }`}
                  >
                    5" Patti
                  </button>
                  <button
                    onClick={() => setSelectedSize('6inch')}
                    className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 transform ${
                      selectedSize === '6inch'
                        ? 'bg-gradient-to-r from-red-600 to-red-500 text-white scale-110 shadow-2xl'
                        : 'bg-white text-black border-2 border-red-300 hover:border-red-500 hover:scale-105 shadow-lg'
                    }`}
                  >
                    6" Patti
                  </button>
                </div>
              </div>
              
              <div className="flex justify-center">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 sm:px-6 py-3 rounded-lg bg-white/90 backdrop-blur-sm border-2 border-red-300 text-black font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer focus:ring-2 focus:ring-red-600 focus:outline-none text-sm sm:text-base"
                >
                  <option value="name">Sort by Name</option>
                  <option value="type">Sort by Type</option>
                  <option value="size">Sort by Size</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {getFilteredProducts().map((product: any, idx: number) => (
                <div 
                  key={idx} 
                  className="group card shimmer hover:scale-105 transition-all duration-500 bg-white/80 backdrop-blur-sm"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {product.image && (
                    <div className="relative aspect-square bg-gradient-to-br from-gray-100/50 to-gray-200/50 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-3 sm:p-4 group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-white/90 to-red-50/80 backdrop-blur-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-base sm:text-lg md:text-xl text-black group-hover:text-red-600 transition-colors duration-300 flex-1">
                        {product.name}
                      </h3>
                      <span className="ml-2 text-xs sm:text-sm font-bold text-white bg-red-600 px-2 py-1 rounded">
                        {product.size}
                      </span>
                    </div>
                    <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-3 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs sm:text-sm rounded-full shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                      {product.type}
                    </span>
                    <div className="mt-3 pt-3 border-t border-red-100 space-y-1.5">
                      <p className="text-xs font-bold text-gray-800">
                        Available: <span className="font-semibold">GI & Zincro</span>
                      </p>
                      <p className="text-xs font-bold text-gray-800">
                        Thickness: <span className="font-semibold">0.7mm - 0.9mm</span>
                      </p>
                      {product.size === '3"' && (
                        <p className="text-xs font-bold text-red-600">
                          Designs: <span className="font-semibold">Super Round & Plain</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Design Gallery Tab - Full Page Images */}
        {activeTab === 'gallery' && galleryPages.length > 0 && (
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            <div className="text-center mb-8 sm:mb-10 md:mb-12 fade-in-up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent glitter">
                Design Gallery
              </h2>
              <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8">
                Browse our complete design catalog - Click any image to zoom
              </p>
              
              {/* Download Button */}
              <button
                onClick={downloadCatalogue}
                className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 text-sm sm:text-base md:text-lg"
              >
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Entire Catalogue
                </span>
                <span className="absolute inset-0 rounded-xl bg-white opacity-20 animate-pulse"></span>
              </button>
            </div>

            <div className="space-y-8 sm:space-y-12 md:space-y-16">
              {galleryPages.map((page, idx) => (
                <div 
                  key={page.page} 
                  className="group relative scale-in cursor-zoom-in"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                  onClick={() => setZoomedImage(page.image)}
                >
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl hover:shadow-3xl transition-all duration-500 bg-white/70 backdrop-blur-sm">
                    {/* Glowing Border Effect */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-red-600 via-red-500 to-red-700 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
                    
                    {/* Image Container */}
                    <div className="relative p-2 sm:p-3 md:p-4 bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-sm">
                      {imageLoading[page.image] !== false && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                      
                      <img
                        src={page.image}
                        alt={`Design Gallery Page ${page.page}`}
                        className="w-full h-auto rounded-lg sm:rounded-xl group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        onLoad={() => setImageLoading(prev => ({ ...prev, [page.image]: false }))}
                        style={{ 
                          display: imageLoading[page.image] === false ? 'block' : 'none',
                          boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
                        }}
                      />
                    </div>
                    
                    {/* Zoom Hint */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to Zoom
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
              <div className="w-24 h-24 border-8 border-gray-200 border-t-red-600 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-8 border-gray-100 border-t-red-400 rounded-full animate-spin"></div>
              </div>
            </div>
            <p className="mt-8 text-xl font-semibold text-gray-700 animate-pulse">
              Loading catalogue...
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
