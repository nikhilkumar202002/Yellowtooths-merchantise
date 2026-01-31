'use client'

import Image from 'next/image'
import { MdOutlineArrowOutward } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { HiMiniStar } from "react-icons/hi2";
import React, { useEffect, useState, useRef } from 'react'
import Product from "../../../../public/Images/product-one.jpg"
import { fetchProducts } from '@/app/services/api'
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

import "../../../globals.css";

const LatestProducts = () => {
  const [products, setProducts] = useState<any[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardWidth, setCardWidth] = useState<number>(0)
  const [visibleCount, setVisibleCount] = useState(4)
  
  const viewportRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let mounted = true
    const load = async () => {
      const data = await fetchProducts()
      if (mounted && Array.isArray(data)) setProducts(data)
    }
    load()
    return () => { mounted = false }
  }, [])

  useEffect(() => {
    const update = () => {
      if (viewportRef.current) {
        const vw = viewportRef.current.clientWidth
        const gapSize = 15 // Updated to 15px as requested
        const width = window.innerWidth

        // Responsive counts: Tab gets 3 cards
        let count = 4;
        if (width < 768) count = 2;
        else if (width >= 768 && width < 1024) count = 3;
        
        setVisibleCount(count)
        
        // Precise width calculation using the 15px gap
        const cardWidthWithGap = (vw - gapSize * (count - 1)) / count
        setCardWidth(cardWidthWithGap)
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const normalized = products.length
    ? products.map((p: any) => ({
        id: p.id ?? p._id,
        name: p.name,
        price: p.formatted_sale_price || p.formatted_price || p.price,
        imageSrc: p.image_url || (Array.isArray(p.images_urls) && p.images_urls[0]) || p.image,
      }))
    : Array(4).fill({ id: 'placeholder', name: 'Narivetta Poster Printed T-shirts', price: '₹25.00' })

  const items = normalized
  const maxIndex = Math.max(0, items.length - visibleCount)
  const next = () => setCurrentIndex((s) => Math.min(s + 1, maxIndex))
  const prev = () => setCurrentIndex((s) => Math.max(s - 1, 0))

  return (
    <section className='latest-products py-10 md:py-20'>
      <div className="latest-products-container content-container">
        <div className="latest-product-header flex justify-between items-end mb-8">
          <div className="latest-product-mainheader">
            <h2 className="text-3xl md:text-5xl font-moralana">Latest Products</h2>
          </div>
          <div className="latest-product-button hidden md:block">
            <a href="/shop-all" className='flex items-center gap-2 font-manrope font-bold uppercase text-[11px] tracking-widest hover:text-yellow transition-all'>
              View All <span className='text-lg'><MdOutlineArrowOutward /></span>
            </a>
          </div>
        </div>

        {/* Carousel Wrapper */}
        <div className="latest-product-wrapper carousel relative group">
          <div className="carousel-viewport overflow-hidden" ref={viewportRef}>
            <div
              className="carousel-track flex gap-[15px]" // Set exact 15px gap
              style={{
                transform: `translateX(-${currentIndex * (cardWidth + 15)}px)`,
                transition: 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {items.map((prod: any, idx: number) => (
                <div
                  className="latest-product-card flex-shrink-0"
                  key={prod.id || idx}
                  style={{ 
                    width: cardWidth,
                    minWidth: cardWidth
                  }}
                >
                  <div className="latest-products-image relative aspect-[3/4] overflow-hidden rounded-[20px] bg-gray-50">
                    {prod.imageSrc ? (
                      <img 
                        src={prod.imageSrc} 
                        alt={prod.name} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                      />
                    ) : (
                      <Image 
                        src={Product} 
                        alt={prod.name} 
                        fill 
                        className="object-cover opacity-50" 
                      />
                    )}
                  </div>

                  <div className="latest-product-review flex items-center gap-3 mt-4">
                    <h5 className="font-manrope font-bold text-gray-400 uppercase text-[10px] tracking-widest">Review</h5>
                    <div className="flex text-yellow text-[10px]">
                      <HiMiniStar /><HiMiniStar /><HiMiniStar /><HiMiniStar /><HiMiniStar />
                    </div>
                  </div>

                  <div className="latest-product-details mt-2">
                    <h3 className="font-manrope font-bold text-dark text-base md:text-lg line-clamp-1">{prod.name}</h3>
                    <p className='flex items-center font-manrope font-bold text-dark mt-1'>
                      {typeof prod.price === 'string' && prod.price.trim().startsWith('₹') ? (
                        prod.price
                      ) : (
                        <><LiaRupeeSignSolid className="text-sm" />{prod.price}</>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Adjusted to Square and Inside */}
          {items.length > visibleCount && (
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                className={`carousel-btn absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white shadow-xl transition-all ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-yellow'}`}
                onClick={prev}
                disabled={currentIndex === 0}
              >
                <IoIosArrowRoundBack size={30} />
              </button>
              <button 
                className={`carousel-btn absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white shadow-xl transition-all ${currentIndex >= maxIndex ? 'opacity-30 cursor-not-allowed' : 'hover:bg-yellow'}`}
                onClick={next}
                disabled={currentIndex >= maxIndex}
              >
                <IoIosArrowRoundForward size={30} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default LatestProducts;