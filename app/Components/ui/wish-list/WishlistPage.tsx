'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LiaRupeeSignSolid, LiaShoppingBagSolid } from "react-icons/lia"
import { IoCloseOutline } from "react-icons/io5"
import { MdChevronRight } from "react-icons/md"
import PlaceholderProduct from "../../../../public/Images/product-one.jpg"

const WishlistPage = () => {
  // Mock data for initial setup
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: "Narivetta Poster Printed T-shirt", price: 1299, category: "T-Shirts" },
    { id: 2, name: "The Godfather Fibre Frame", price: 2499, category: "Fibre Frames" },
  ])

  const removeItem = (id: number) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="content-container mx-auto">
        
        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-10">
            {wishlistItems.map((item) => (
              <div key={item.id} className="group relative flex flex-col h-full">
                
                {/* Remove Button */}
                <button 
                  onClick={() => removeItem(item.id)}
                  className="absolute top-3 right-3 z-20 p-1.5 bg-white/80 backdrop-blur-md text-dark hover:bg-red-500 hover:text-white transition-all shadow-sm"
                  aria-label="Remove from wishlist"
                >
                  <IoCloseOutline size={20} />
                </button>

                {/* Product Image */}
                <Link href={`/product/${item.id}`} className="relative aspect-[3/4] overflow-hidden bg-gray-100 block">
                  <Image 
                    src={PlaceholderProduct} 
                    alt={item.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-white/90 backdrop-blur-sm text-dark text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </Link>

                {/* Product Details */}
                <div className="mt-4 flex flex-col flex-grow">
                  <Link href={`/product/${item.id}`}>
                    <h3 className="text-lg font-medium font-manrope text-dark group-hover:text-yellow transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                  </Link>
                  
                  <p className="flex items-center text-dark font-bold mt-1 text-lg font-manrope">
                    <LiaRupeeSignSolid />{item.price}
                  </p>

                  <button className="mt-4 w-full py-3 bg-dark text-white text-[11px] font-bold flex items-center justify-center gap-2 hover:bg-yellow hover:text-dark transition-all uppercase tracking-[0.15em] font-manrope">
                    <LiaShoppingBagSolid size={18}/> Move to Bag
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center flex flex-col items-center gap-6">
            <p className="text-xl text-gray-400 font-manrope">Your wishlist is currently empty.</p>
            <Link href="/shop-all" className="px-8 py-4 bg-yellow text-dark font-bold uppercase tracking-widest text-xs hover:bg-dark hover:text-white transition-all">
              Explore Collection
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default WishlistPage