'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { LiaRupeeSignSolid, LiaShoppingBagSolid } from "react-icons/lia"
import { IoFlashOutline } from "react-icons/io5"
import { HiMiniStar } from "react-icons/hi2"
import ProductViewSkeleton from '../../Common/ProductViewSkeleton' // Import the skeleton

interface ProductViewProps {
  product: any;
  loading?: boolean; // Add this prop
}

const ProductView = ({ product, loading }: ProductViewProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Return Skeleton if loading or if product data is missing
  if (loading || !product) {
    return <ProductViewSkeleton />;
  }

  // ... (rest of your existing logic for price and images)
  const price = product.formatted_sale_price || product.formatted_price || product.price;
  const images = Array.isArray(product.images_urls) && product.images_urls.length > 0 
    ? product.images_urls 
    : [product.image_url || product.image];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isZoomed || !containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setZoomPos({ x, y });
  };

  const toggleZoom = () => setIsZoomed(!isZoomed);

  return (
    <section className="product-view-section py-12 lg:py-20 bg-white">
      <div className="content-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 items-stretch">
          
          {/* LEFT: Image Gallery with Fixed Height and Vertical Right-Aligned Thumbnails */}
          <div className="flex flex-row gap-4 h-[500px] md:h-[600px] lg:h-[700px]">
            <div 
              ref={containerRef}
              onClick={toggleZoom}
              onMouseMove={handleMouseMove}
              className={`relative flex-grow h-full bg-gray-50 rounded-[30px] overflow-hidden transition-all duration-300 shadow-sm ${
                isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
              }`}
            >
              <Image 
                src={images[selectedImage]} 
                alt={product.name || "Product Image"} 
                fill 
                className={`object-cover transition-transform duration-300 ease-out ${
                    isZoomed ? 'scale-[2.5]' : 'scale-100'
                }`}
                style={{
                  transformOrigin: isZoomed ? `${zoomPos.x}% ${zoomPos.y}%` : 'center',
                }}
                priority
              />
              {!isZoomed && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-dark/60 text-white text-[10px] px-4 py-1.5 rounded-full backdrop-blur-md pointer-events-none uppercase tracking-[0.2em] font-manrope z-10">
                  Click to Zoom
                </div>
              )}
            </div>
            
            {images.length > 1 && (
              <div className="flex flex-col gap-3 w-20 md:w-24 overflow-y-auto no-scrollbar h-full py-1">
                {images.map((img: string, idx: number) => (
                  <button 
                    key={idx}
                    onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(idx);
                        setIsZoomed(false);
                    }}
                    className={`relative aspect-square w-full rounded-2xl overflow-hidden border-2 flex-shrink-0 transition-all duration-300 ${
                      selectedImage === idx 
                        ? 'border-yellow shadow-md scale-[0.98]' 
                        : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Product Info */}
          <div className="flex flex-col justify-between py-2">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-400 mb-3 font-manrope">
                Official Cinematic Collection
              </span>
              <h1 className="text-4xl md:text-5xl font-moralana text-dark leading-[1.1] mb-5">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex text-yellow text-xs"><HiMiniStar /><HiMiniStar /><HiMiniStar /><HiMiniStar /><HiMiniStar /></div>
                <div className="w-[1px] h-4 bg-gray-200" />
                <span className="text-[11px] font-manrope text-gray-500 font-semibold uppercase tracking-widest">Limited Edition Merch</span>
              </div>
              <div className="flex items-center gap-2 text-3xl font-manrope font-bold text-dark mb-10">
                {typeof price === 'string' && price.trim().startsWith('₹') ? price : <><LiaRupeeSignSolid className="text-2xl"/>{price}</>}
              </div>
              <div className="border-t border-gray-100 pt-8">
                <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-5 font-manrope">The Story Behind</h4>
                <p className="text-gray-600 leading-relaxed font-manrope text-lg max-w-xl">
                  {product.description || "A premium cinematic collectible designed for fans who live every scene beyond the screen."}
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button className="flex-1 py-5 bg-dark text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-all uppercase tracking-[0.15em] text-[11px] font-manrope"><LiaShoppingBagSolid size={20}/> Add to Cart</button>
                <button className="flex-1 py-5 bg-yellow text-dark rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-yellow/80 transition-all uppercase tracking-[0.15em] text-[11px] font-manrope shadow-lg shadow-yellow/20"><IoFlashOutline size={20}/> Buy it Now</button>
              </div>
              <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1.5 font-manrope">Delivery</p>
                  <p className="text-sm font-semibold text-dark font-manrope">Free on bulk orders</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1.5 font-manrope">Authenticity</p>
                  <p className="text-sm font-semibold text-dark font-manrope">100% Genuine Merch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductView;