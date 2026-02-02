'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MdChevronRight } from "react-icons/md"
import { fetchCollections } from '@/app/services/api'

interface ProductBannerProps {
  categoryId?: string;
}

const ProductBanner = ({ categoryId }: ProductBannerProps) => {
  const pathname = usePathname()
  const [displayTitle, setDisplayTitle] = useState('Our Collection')
  
  // Logic to generate breadcrumbs based on the URL path
  const pathSegments = pathname.split('/').filter(segment => segment !== '')

  useEffect(() => {
    const getCategoryName = async () => {
      // If we have a categoryId, find the name from the collections API
      if (categoryId) {
        try {
          const categories = await fetchCollections();
          const categoryList = Array.isArray(categories) ? categories : (categories?.data || []);
          const currentCategory = categoryList.find((c: any) => c.id.toString() === categoryId);
          
          if (currentCategory) {
            setDisplayTitle(currentCategory.name);
            return;
          }
        } catch (error) {
          console.error("Error fetching category name for banner:", error);
        }
      }

      // Fallback: If no categoryId or not found, use the URL segment or default
      const title = pathSegments.length > 0 
        ? pathSegments[pathSegments.length - 1].replace(/-/g, ' ') 
        : 'Our Collection';
      setDisplayTitle(title);
    };

    getCategoryName();
  }, [categoryId, pathSegments]);
  
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 sm:py-16">
      <div className="content-container mx-auto text-center">
        
        {/* Centered Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 mb-4 text-sm font-manrope text-gray-500">
          <Link href="/" className="hover:text-yellow transition-colors">
            Home
          </Link>
          
          <MdChevronRight className="text-gray-400" size={18} />
          
          <span className="text-dark font-medium capitalize">
            {displayTitle}
          </span>
        </nav>

        {/* Dynamic Page Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 capitalize" style={{fontFamily: 'manrope'}}>
          {displayTitle}
        </h1>
        
        {/* Paragraph Description */}
        <p className="mt-4 text-base sm:text-lg text-gray-600 font-manrope max-w-2xl mx-auto">
          Discover premium cinematic merchandise crafted for true movie lovers.
        </p>
      </div>
    </section>
  )
}

export default ProductBanner