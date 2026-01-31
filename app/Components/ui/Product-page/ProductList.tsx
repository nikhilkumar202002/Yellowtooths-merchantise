'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { LiaRupeeSignSolid, LiaShoppingBagSolid } from "react-icons/lia"
import { HiMiniStar, HiHeart, HiOutlineHeart } from "react-icons/hi2" 
import { IoFlashOutline } from "react-icons/io5"
import { fetchProducts } from '@/app/services/api'
import ProductSkeleton from '../../Common/ProductSkeleton'
import PlaceholderProduct from "../../../../public/Images/product-one.jpg"
import Link from 'next/link'

interface ProductListProps {
  gridColumns?: number;
}

const ProductList = ({ gridColumns = 4 }: ProductListProps) => {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [wishlist, setWishlist] = useState<string[]>([]) 

  const gridConfig: { [key: number]: string } = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  };

  useEffect(() => {
    let mounted = true
    const load = async () => {
      try {
        const data = await fetchProducts()
        if (mounted && Array.isArray(data)) {
          setProducts(data)
        }
      } catch (error) {
        console.error("Failed to load products:", error)
      } finally {
        if (mounted) setLoading(false)
      }
    }
    load()
    return () => { mounted = false }
  }, [])

  const handleAddToCart = (e: React.MouseEvent, productId: string) => {
    e.preventDefault(); 
    e.stopPropagation();
  };

  const handleBuyNow = (e: React.MouseEvent, productId: string) => {
    e.preventDefault(); 
    e.stopPropagation();
  };

  const toggleWishlist = (e: React.MouseEvent, productId: string) => {
    e.preventDefault(); 
    e.stopPropagation();
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  if (loading) {
    return <ProductSkeleton gridColumns={gridColumns} />
  }

  return (
    <section className="product-list-section">
      <div className={`grid grid-cols-2 gap-x-4 lg:gap-x-4 gap-y-10 lg:gap-y-14 ${gridConfig[gridColumns]}`}>
        {products.map((product) => {
          const slug = product.slug || product.name.toLowerCase().replace(/ /g, '-');
            const productId = product.id || product._id;
          const name = product.name
          const category = product.category_name || "Collection" 
          const price = product.formatted_sale_price || product.formatted_price || product.price
          const imageSrc = product.image_url || (Array.isArray(product.images_urls) && product.images_urls[0]) || product.image
          const isInWishlist = wishlist.includes(productId);

          return (
         <Link href={`/product/${productId}`} key={productId}>
              <div className="product-card group cursor-pointer flex flex-col h-full relative rounded-none">
                
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-none">
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-white/90 backdrop-blur-sm text-dark text-[10px] font-bold px-2.5 py-1 rounded-none uppercase tracking-wider shadow-sm">
                      {category}
                    </span>
                  </div>

                  {/* Wishlist Heart Button */}
                  <button 
                    onClick={(e) => toggleWishlist(e, productId)}
                    className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-none shadow-sm hover:bg-white transition-all group/wishlist"
                  >
                    {isInWishlist ? (
                      <HiHeart className="text-red-500 text-lg" />
                    ) : (
                      <HiOutlineHeart className="text-dark text-lg group-hover/wishlist:scale-110 transition-transform" />
                    )}
                  </button>

                  {imageSrc ? (
                    <img src={imageSrc} alt={name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <Image src={PlaceholderProduct} alt={name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  )}
                </div>

                <div className="mt-3 flex flex-col flex-grow">
                  <div className="latest-product-stars flex text-yellow-500 text-xs mt-1">
                    <HiMiniStar /><HiMiniStar /><HiMiniStar /><HiMiniStar /><HiMiniStar />
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-[18px] md:text-[20px] font-medium font-manrope text-dark line-clamp-1 group-hover:text-yellow-600 transition-colors mt-1">
                      {name}
                    </h3>
                    <p className="flex items-center text-dark font-bold mt-1 text-base md:text-lg">
                      {typeof price === 'string' && price.trim().startsWith('₹') ? price : <><LiaRupeeSignSolid />{price}</>}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row gap-2">
                    <button onClick={(e) => handleAddToCart(e, productId)} className="flex-1 py-2.5 bg-gray-100 text-dark text-[10px] md:text-[11px] font-bold rounded-none flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors uppercase tracking-tight">
                      <LiaShoppingBagSolid size={16}/> Add to Cart
                    </button>
                    <button onClick={(e) => handleBuyNow(e, productId)} className="flex-1 py-2.5 bg-yellow text-dark text-[10px] md:text-[11px] font-bold rounded-none flex items-center justify-center gap-2 hover:bg-yellow/80 transition-colors uppercase tracking-tight">
                      <IoFlashOutline size={16}/> Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default ProductList;