'use client'

import React from 'react'

const ProductSkeleton = ({ gridColumns = 4 }: { gridColumns?: number }) => {
  // Mapping for consistent grid alignment
  const gridConfig: { [key: number]: string } = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  };

  // Create an array of 8 items to show during load
  const skeletonCards = Array(8).fill(null);

  return (
    <div className={`grid grid-cols-2 gap-x-4 lg:gap-x-6 gap-y-10 lg:gap-y-14 animate-pulse ${gridConfig[gridColumns]}`}>
      {skeletonCards.map((_, index) => (
        <div key={index} className="flex flex-col h-full">
          {/* Image Skeleton */}
          <div className="aspect-[3/4] bg-gray-200 rounded-xl w-full"></div>
          
          {/* Details Skeleton */}
          <div className="mt-3 flex flex-col flex-grow">
            {/* Stars */}
            <div className="h-3 bg-gray-200 rounded w-1/3 mb-2"></div>
            
            {/* Title */}
            <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
            
            {/* Price */}
            <div className="h-5 bg-gray-200 rounded w-1/4 mb-4"></div>
            
            {/* Buttons */}
            <div className="mt-auto flex flex-col sm:flex-row gap-2">
              <div className="h-10 bg-gray-200 rounded-lg flex-1"></div>
              <div className="h-10 bg-gray-200 rounded-lg flex-1"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductSkeleton