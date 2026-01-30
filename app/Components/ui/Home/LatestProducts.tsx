import Image from 'next/image'
import { MdOutlineArrowOutward } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { HiMiniStar } from "react-icons/hi2";
import React, { useEffect, useState } from 'react'
import Product from "../../../../public/Images/product-one.jpg"
import { fetchProducts } from '@/app/services/api'

import { IoIosArrowRoundForward,IoIosArrowRoundBack } from "react-icons/io";

import "../../../globals.css";

const LatestProducts = () => {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    let mounted = true
    const load = async () => {
      const data = await fetchProducts()
      if (mounted && Array.isArray(data)) setProducts(data)
    }
    load()
    return () => { mounted = false }
  }, [])

  // slider state
  const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 768
  const visibleCount = isSmallScreen ? 2 : 4
  const [currentIndex, setCurrentIndex] = useState(0)
  const trackRef = React.useRef<HTMLDivElement | null>(null)
  const viewportRef = React.useRef<HTMLDivElement | null>(null)
  const [cardWidth, setCardWidth] = useState<number>(0)

  useEffect(() => {
    const update = () => {
      if (viewportRef.current) {
        const vw = viewportRef.current.clientWidth
        const gapSize = 16 // matches gap-4 in CSS
        const cardWidthWithGap = (vw - gapSize * (visibleCount - 1)) / visibleCount
        setCardWidth(cardWidthWithGap)
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Normalize product objects to use consistent fields for rendering
  // Show ALL products, not just first 4 (carousel displays 4 at a time)
  const normalized = products.length
    ? products.map((p: any) => ({
        id: p.id ?? p._id,
        name: p.name,
        // prefer formatted sale price, then formatted price, then raw price
        price: p.formatted_sale_price || p.formatted_price || p.price,
        // prefer full URL fields when available
        imageSrc: p.image_url || (Array.isArray(p.images_urls) && p.images_urls[0]) || p.image,
      }))
    : [
        { id: 'placeholder-1', name: 'Narivetta Poster Printed T-shirts', price: '₹25.00', imageSrc: undefined },
        { id: 'placeholder-2', name: 'Narivetta Poster Printed T-shirts', price: '₹25.00', imageSrc: undefined },
        { id: 'placeholder-3', name: 'Narivetta Poster Printed T-shirts', price: '₹25.00', imageSrc: undefined },
        { id: 'placeholder-4', name: 'Narivetta Poster Printed T-shirts', price: '₹25.00', imageSrc: undefined },
      ]

  const items = normalized

  const maxIndex = Math.max(0, items.length - visibleCount)
  const next = () => setCurrentIndex((s) => Math.min(s + 1, maxIndex))
  const prev = () => setCurrentIndex((s) => Math.max(s - 1, 0))

  return (
    <>
      <section className='latest-products'>
        <div className="latest-products-container content-container">
          <div className="latest-product-header flex justify-between items-end">
            <div className="latest-product-mainheader">
              <h2>Latest Products</h2>
            </div>
            <div className="latest-product-button hidden md:block">
              <a href="/shop-all" className='flex gap-2'>View All <span className='latest-product-button-icon'><MdOutlineArrowOutward /></span></a>
            </div>
          </div>

          <div className="latest-product-wrapper carousel" onMouseEnter={() => {}}>
            <div className="carousel-viewport" ref={viewportRef}>
              <div
                className="carousel-track"
                ref={trackRef}
                style={{
                  transform: `translateX(-${currentIndex * (cardWidth + 16)}px)`,
                  transition: 'transform 350ms ease',
                }}
              >
                {items.map((prod: any, idx: number) => (
                  <div
                    className="latest-product-card"
                    key={prod.id || prod._id || idx}
                    style={{ minWidth: cardWidth || '25%' }}
                  >
                    <div className="latest-products-image">
                      {prod.imageSrc ? (
                        <img src={prod.imageSrc} alt={prod.name} />
                      ) : (
                        <Image src={Product} alt={prod.name} width={300} height={400} />
                      )}
                    </div>

                    <div className="latest-product-review flex items-center gap-3">
                      <h5>Review</h5>
                      <div className="latest-product-stars flex gap-.1">
                        <HiMiniStar />
                        <HiMiniStar />
                        <HiMiniStar />
                        <HiMiniStar />
                        <HiMiniStar />
                      </div>
                    </div>

                    <div className="latest-product-details">
                      <h3>{prod.name}</h3>
                      <p className='flex items-center'>
                        {typeof prod.price === 'string' && prod.price.trim().startsWith('₹') ? (
                          prod.price
                        ) : (
                          <><span><LiaRupeeSignSolid/></span>{prod.price}</>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation (visible on hover) */}
            {items.length > visibleCount && (
              <>
                <button className="carousel-btn prev-btn" aria-label="Previous" onClick={prev}>
                  <IoIosArrowRoundBack />
                </button>
                <button className="carousel-btn next-btn" aria-label="Next" onClick={next}>
                  <IoIosArrowRoundForward />
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default LatestProducts