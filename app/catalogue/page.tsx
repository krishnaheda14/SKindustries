import { Suspense } from 'react'
import CatalogueContent from '@/components/CatalogueContent'

export const metadata = {
  title: 'Product Catalogue | SK Industries',
  description: 'Browse our complete range of rolling shutter patti designs and laser cutting services',
}

export default function CataloguePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative">
          <div className="w-24 h-24 border-8 border-gray-200 border-t-red-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-8 border-gray-100 border-t-red-400 rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    }>
      <CatalogueContent />
    </Suspense>
  )
}
