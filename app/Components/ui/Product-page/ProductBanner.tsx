'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MdChevronRight } from "react-icons/md"

const ProductBanner = () => {
  const pathname = usePathname()
  
  // Logic to generate breadcrumbs based on the URL path
  const pathSegments = pathname.split('/').filter(segment => segment !== '')
  
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 sm:py-16">
      {/* Added text-center to center all text content */}
      <div className="content-container mx-auto text-center">
        
        {/* Added justify-center to center the flex navigation items */}
        <nav className="flex items-center justify-center gap-2 mb-4 text-sm font-manrope text-gray-500">
          <Link href="/" className="hover:text-yellow transition-colors">
            Home
          </Link>
          
          <MdChevronRight className="text-gray-400" size={18} />
          
          <span className="text-dark font-medium capitalize">
            {pathSegments.length > 0 ? pathSegments[pathSegments.length - 1].replace(/-/g, ' ') : 'Products'}
          </span>
        </nav>

        {/* Page Title - Centered by parent text-center */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 capitalize" style={{fontFamily: 'manrope'}}>
          {pathSegments.length > 0 ? pathSegments[pathSegments.length - 1].replace(/-/g, ' ') : 'Our Collection'}
        </h1>
        
        {/* Paragraph - Centered by parent text-center and mx-auto for width control */}
        <p className="mt-4 text-base sm:text-lg text-gray-600 font-manrope max-w-2xl mx-auto">
          Discover premium cinematic merchandise crafted for true movie lovers.
        </p>
      </div>
    </section>
  )
}

export default ProductBanner