'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import ProductBanner from '@/app/Components/ui/Product-page/ProductBanner'
import ProductPageContainer from '@/app/Components/ui/Product-page/ProductPageContainer'

const CategoryPage = () => {
  const params = useParams()
  const slug = params.slug as string

  return (
    <div className="category-page">
      {/* The ProductBanner will automatically extract the 'slug' for the breadcrumbs */}
      <ProductBanner />
      
      {/* The Container handles the layout with FilterTab on the left and ProductList on the right */}
      <ProductPageContainer />
    </div>
  )
}

export default CategoryPage