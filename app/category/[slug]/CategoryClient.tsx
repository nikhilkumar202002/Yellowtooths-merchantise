// app/category/[slug]/CategoryClient.tsx
'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import ProductBanner from '@/app/Components/ui/Product-page/ProductBanner'
import ProductPageContainer from '@/app/Components/ui/Product-page/ProductPageContainer'

const CategoryPage = () => {
  const params = useParams()
  // Ensure the slug is extracted correctly for internal component logic
  const slug = params?.slug as string

  return (
    <div className="category-page">
      {/* The ProductBanner uses the 'slug' for cinematic breadcrumbs */}
      <ProductBanner />
      
      {/* The Container handles the layout with FilterTab and ProductList */}
      <ProductPageContainer />
    </div>
  )
}

export default CategoryPage;