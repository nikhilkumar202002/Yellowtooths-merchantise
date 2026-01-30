'use client'

import React from 'react'

const ProductViewSkeleton = () => {
  return (
    <section className="product-view-section py-12 lg:py-20 bg-white animate-pulse">
      <div className="content-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 items-stretch">
          
          {/* LEFT: Image Gallery Skeleton */}
          <div className="flex flex-row gap-4 h-[500px] md:h-[600px] lg:h-[700px]">
            {/* Main Image Shimmer */}
            <div className="relative flex-grow h-full bg-gray-200 rounded-[30px]"></div>
            
            {/* Sidebar Thumbnails Shimmer */}
            <div className="flex flex-col gap-3 w-20 md:w-24">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square w-full rounded-2xl bg-gray-200"></div>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Info Skeleton */}
          <div className="flex flex-col justify-between py-2">
            <div className="flex flex-col">
              <div className="h-3 w-40 bg-gray-200 rounded-full mb-6"></div>
              <div className="h-10 w-full bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-10 w-3/4 bg-gray-200 rounded-lg mb-8"></div>

              <div className="flex items-center gap-4 mb-8">
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
              </div>

              <div className="h-8 w-48 bg-gray-200 rounded-lg mb-10"></div>

              <div className="border-t border-gray-100 pt-8 space-y-4">
                <div className="h-3 w-24 bg-gray-200 rounded"></div>
                <div className="h-4 w-full bg-gray-100 rounded"></div>
                <div className="h-4 w-full bg-gray-100 rounded"></div>
                <div className="h-4 w-2/3 bg-gray-100 rounded"></div>
              </div>
            </div>

            {/* Actions and Meta Shimmer */}
            <div className="mt-12">
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <div className="flex-1 h-14 bg-gray-200 rounded-2xl"></div>
                <div className="flex-1 h-14 bg-gray-200 rounded-2xl"></div>
              </div>
              <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                <div className="h-10 bg-gray-100 rounded-lg"></div>
                <div className="h-10 bg-gray-100 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductViewSkeleton