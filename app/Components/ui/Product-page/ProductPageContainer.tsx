'use client'

import React from 'react'
import FilterTab from './FilterTab'
import ProductList from './ProductList'

interface ProductPageContainerProps {
  categorySlug?: string;
}

const ProductPageContainer = ({ categorySlug }: ProductPageContainerProps) => {
  return (
    <div className="content-container py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <aside className="lg:w-1/4">
          <FilterTab />
        </aside>
        <main className="lg:w-3/4">
          <ProductList categorySlug={categorySlug} />
        </main>
      </div>
    </div>
  )
}

export default ProductPageContainer;