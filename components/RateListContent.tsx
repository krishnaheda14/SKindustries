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

export default function RateListContent() {
  const [productsData, setProductsData] = useState<Record<string, ProductCategory> | null>(null)

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => setProductsData(data))
      .catch(err => console.error('Failed to load products:', err))
  }, [])

  return (
    <div className="py-20 bg-gray-50">
      <div className="container-custom">
        <h1 className="section-title text-center">Rate List</h1>
        <p className="section-subtitle text-center">
          Competitive pricing for all products. Contact us for current rates.
        </p>

        <div className="bg-yellow-50 border-l-4 border-industrial-accent p-6 rounded-lg mb-12">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-industrial-accent mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-bold text-lg mb-2">Note on Pricing</h3>
              <p className="text-gray-700">
                Prices vary based on material grade, quantity, and market conditions. 
                Please contact us directly for the most accurate and current pricing information.
              </p>
            </div>
          </div>
        </div>

        {productsData && (
          <div className="space-y-8">
            {Object.entries(productsData).map(([key, category]) => (
              <div key={key} className="card p-6">
                <h2 className="text-2xl font-bold text-industrial-dark mb-4">
                  {category.size} Patti Designs
                </h2>
                {category.material.length > 0 && (
                  <p className="text-gray-600 mb-4">
                    Materials: {category.material.join(', ')}
                  </p>
                )}
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="pb-3 pr-4">Product Name</th>
                        <th className="pb-3 pr-4">Type</th>
                        <th className="pb-3">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.products.map((product, idx) => (
                        <tr key={idx} className="border-b border-gray-100">
                          <td className="py-3 pr-4">{product.name}</td>
                          <td className="py-3 pr-4">
                            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                              {product.type}
                            </span>
                          </td>
                          <td className="py-3">
                            <a
                              href="https://wa.me/919422777786"
                              className="text-industrial-accent hover:text-industrial-steel font-medium"
                            >
                              Contact for Price
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Ready to place an order or need a quote?</p>
          <a
            href="https://wa.me/919422777786"
            className="btn-primary inline-block"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
