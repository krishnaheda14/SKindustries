'use client'

import { useState, useEffect } from 'react'

interface Product {
  name: string
  type: string
  image: string | null
}

interface ProductCategory {
  size: string
  material: string[]
  products: Product[]
}

export default function CatalogueContent() {
  const [productsData, setProductsData] = useState<Record<string, ProductCategory> | null>(null)
  const [designsData, setDesignsData] = useState<any[]>([])
  const [activeTab, setActiveTab] = useState('products')

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => setProductsData(data))
      .catch(err => console.error('Failed to load products:', err))

    fetch('/data/designs.json')
      .then(res => res.json())
      .then(data => setDesignsData(data.slice(0, 50))) // Show first 50 designs
      .catch(err => console.error('Failed to load designs:', err))
  }, [])

  return (
    <div className="py-20 bg-gray-50">
      <div className="container-custom">
        <h1 className="section-title text-center">Product Catalogue</h1>
        <p className="section-subtitle text-center">
          Browse our comprehensive range of rolling shutter products
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-8 py-3 rounded-lg font-bold transition-all ${
              activeTab === 'products'
                ? 'bg-industrial-accent text-white'
                : 'bg-white text-industrial-dark hover:bg-gray-100'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('designs')}
            className={`px-8 py-3 rounded-lg font-bold transition-all ${
              activeTab === 'designs'
                ? 'bg-industrial-accent text-white'
                : 'bg-white text-industrial-dark hover:bg-gray-100'
            }`}
          >
            Design Gallery
          </button>
        </div>

        {/* Products Tab */}
        {activeTab === 'products' && productsData && (
          <div className="space-y-16">
            {Object.entries(productsData).map(([key, category]) => (
              <div key={key}>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-industrial-dark mb-2">
                    {category.size} Patti Designs
                  </h2>
                  {category.material.length > 0 && (
                    <p className="text-gray-600">
                      Available in: {category.material.join(', ')}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.products.map((product, idx) => (
                    <div key={idx} className="card">
                      {product.image && (
                        <div className="aspect-square bg-gray-100 overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                        <span className="inline-block px-3 py-1 bg-industrial-steel text-white text-sm rounded-full">
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

        {/* Designs Tab */}
        {activeTab === 'designs' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {designsData.map((design, idx) => (
              <div key={idx} className="card">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src={design.image}
                    alt={design.design_code}
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-2 text-center">
                  <p className="text-sm font-medium text-gray-700">{design.design_code}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
