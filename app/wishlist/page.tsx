'use client'

import React from 'react'
import CommonBanner from '../Components/Common/CommonBanner'
import WishlistPage from '../Components/ui/wish-list/WishlistPage'

const Page = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Reusable Banner Call */}
      <CommonBanner 
        title="Saved" 
        highlight="Scenes." 
        breadcrumbPage="Wishlist" 
      />
      
      <div className="py-12">
        <WishlistPage />
      </div>
    </div>
  )
}

export default Page