'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import ProductBanner from '@/app/Components/ui/Product-page/ProductBanner'
import ProductPageContainer from '@/app/Components/ui/Product-page/ProductPageContainer'

const CategoryClient = () => {
  const params = useParams()
  const slug = params?.slug as string

  return (
    <div className="category-page">
      <ProductBanner categoryId={slug} />
      <ProductPageContainer categorySlug={slug} />
    </div>
  )
}

export default CategoryClient;