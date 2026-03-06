import { Suspense } from 'react'
import CatalogueContent from '@/components/CatalogueContent'
import SeoKeywords from '@/components/SeoKeywords'

export const metadata = {
  title: 'Product Catalogue – Rolling Shutter Patti, GI Door Sections & Laser Cutting',
  description:
    'Browse SK Industries complete catalogue: rolling shutter patti in 3", 4", 5", 6" sizes, GI door sections (16/18/20 gauge), CNC laser cutting designs & fitting materials. Best quality shutter patti manufacturer in Ahmednagar, Maharashtra.',
  keywords:
    'rolling shutter patti catalogue, shutter patti designs, GI door sections, laser cutting designs Ahmednagar, shutter fitting materials, SK Industries catalogue, MS door frame, commercial shutter manufacturer',
  alternates: {
    canonical: 'https://skindustries.in/catalogue',
  },
}

export default function CataloguePage() {
  return (
    <>
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
      <SeoKeywords />
    </>
  )
}
