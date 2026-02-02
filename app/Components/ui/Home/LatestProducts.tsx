'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineArrowOutward } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { HiMiniStar } from "react-icons/hi2";
import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react'
import { fetchProducts } from '@/app/services/api'
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

// Assuming you are keeping the separate CSS file for other styles
import "../../styles/LatestProducts.css"

const LatestProducts = () => {
  const [products, setProducts] = useState<any[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardWidth, setCardWidth] = useState<number>(0)
  const [visibleCount, setVisibleCount] = useState(4)
  
  const viewportRef = useRef<HTMLDivElement | null>(null)


useEffect(() => {
  let mounted = true;
  const load = async () => {
    try {
      const result = await fetchProducts(); 
      if (mounted && result && Array.isArray(result.products)) {
        setProducts(result.products);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };
  load();
  return () => { mounted = false; };
}, []);

  const updateLayout = useCallback(() => {
    if (viewportRef.current) {
      const vw = viewportRef.current.clientWidth
      if (vw === 0) return; 

      const width = window.innerWidth
      const gapSize = 15

      let count = 4; 
      if (width < 768) {
        count = 1.25; 
      } else if (width >= 768 && width < 1024) {
        count = 3; 
      }
      
      setVisibleCount(count)
      const gapCount = Math.max(0, Math.ceil(count) - 1);
      setCardWidth((vw - (gapSize * gapCount)) / count)
    }
  }, [])

  useEffect(() => {
    updateLayout()
    window.addEventListener('resize', updateLayout)
    return () => window.removeEventListener('resize', updateLayout)
  }, [updateLayout, products])

  const items = useMemo(() => products.map((p: any) => ({
    id: p.id ?? p._id,
    name: p.name,
    price: p.formatted_sale_price || p.formatted_price || p.price,
    imageSrc: p.image_url || (Array.isArray(p.images_urls) && p.images_urls[0]),
  })), [products])

  const maxIndex = Math.max(0, items.length - Math.floor(visibleCount));

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex)
  }, [maxIndex, currentIndex])

  const next = useCallback(() => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex)), [maxIndex])
  const prev = useCallback(() => setCurrentIndex((prev) => Math.max(prev - 1, 0)), [])

  if (items.length === 0) return null

  return (
    <section className='latest-products py-10 md:py-20 overflow-hidden bg-white'>
      <div className="latest-products-container content-container">
        <div className="latest-product-header flex justify-between items-end mb-10">
          <div className="latest-product-mainheader">
            <h2 className="text-3xl md:text-5xl font-moralana text-dark">Latest Products</h2>
          </div>
          <div className="latest-product-button hidden md:block">
            <Link 
              href="/shop-all" 
              className='flex items-center gap-2 font-manrope font-bold uppercase text-[11px] tracking-widest hover:text-yellow transition-all duration-300'
            >
              View All <span className='text-lg'><MdOutlineArrowOutward /></span>
            </Link>
          </div>
        </div>

        <div className="latest-product-wrapper carousel relative group">
          {/* CORRECTED NAVIGATION BUTTONS: Individual absolute positioning */}
          {items.length > Math.floor(visibleCount) && (
            <>
              <button 
                className={`carousel-btn absolute left-0 top-[40%] -translate-y-1/2 z-20 transition-all 
                  ${currentIndex === 0 ? 'opacity-20 cursor-not-allowed grayscale' : 'hover:bg-yellow active:scale-95'}`}
                onClick={prev}
                disabled={currentIndex === 0}
                aria-label="Previous slide"
              >
                <IoIosArrowRoundBack size={32} className="text-dark" />
              </button>
              <button 
                className={`carousel-btn absolute right-0 top-[40%] -translate-y-1/2 z-20 transition-all
                  ${currentIndex >= maxIndex ? 'opacity-20 cursor-not-allowed grayscale' : 'hover:bg-yellow active:scale-95'}`}
                onClick={next}
                disabled={currentIndex >= maxIndex}
                aria-label="Next slide"
              >
                <IoIosArrowRoundForward size={32} className="text-dark" />
              </button>
            </>
          )}

          <div className="carousel-viewport overflow-hidden" ref={viewportRef}>
            <div
              className="carousel-track flex"
              style={{
                gap: '15px',
                opacity: cardWidth === 0 ? 0 : 1,
                transform: `translateX(-${currentIndex * (cardWidth + 15)}px)`,
                transition: 'transform 700ms cubic-bezier(0.23, 1, 0.32, 1), opacity 400ms ease',
              }}
            >
              {items.map((prod, idx) => (
                <div
                  className="latest-product-card flex-shrink-0 group/card flex flex-col"
                  key={prod.id || idx}
                  style={{ width: cardWidth, minWidth: cardWidth }}
                >
                  <div className="latest-products-image relative aspect-[3/4] overflow-hidden bg-gray-50">
                    {prod.imageSrc ? (
                      <Image 
                        src={prod.imageSrc} 
                        alt={prod.name} 
                        fill
                        className="object-cover transition-transform duration-1000 group-hover/card:scale-110" 
                        sizes="(max-width: 768px) 80vw, (max-width: 1024px) 33vw, 25vw"
                        priority={idx < 4}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center font-manrope text-[10px] text-gray-400">
                        NO IMAGE
                      </div>
                    )}
                  </div>

                  <div className="latest-product-review flex items-center gap-3 mt-4">
                    <h5 className="font-manrope font-bold text-gray-400 uppercase text-[10px] tracking-widest">Review</h5>
                    <div className="flex text-yellow text-[10px]">
                      {[...Array(5)].map((_, i) => <HiMiniStar key={i} />)}
                    </div>
                  </div>

                  <div className="latest-product-details mt-2">
                    <h3 className="font-manrope font-bold text-dark text-base md:text-lg line-clamp-1 group-hover/card:text-yellow transition-colors duration-300">
                      {prod.name}
                    </h3>
                    <div className='flex items-center font-manrope font-bold text-dark mt-1'>
                      <div className="flex items-center">
                        <LiaRupeeSignSolid className="text-sm" />
                        <span>{prod.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestProducts;