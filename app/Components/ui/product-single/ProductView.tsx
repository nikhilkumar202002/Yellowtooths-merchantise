'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { LiaRupeeSignSolid, LiaShoppingBagSolid } from "react-icons/lia"
import { IoFlashOutline, IoCloseOutline } from "react-icons/io5"
import { HiMiniStar } from "react-icons/hi2"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import ProductViewSkeleton from '../../Common/ProductViewSkeleton'
import { motion, AnimatePresence } from 'framer-motion'

interface ProductViewProps {
  product: any;
  loading?: boolean;
}

const ProductView = ({ product, loading }: ProductViewProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);

  if (loading || !product) {
    return <ProductViewSkeleton />;
  }

  const price = product.formatted_sale_price || product.formatted_price || product.price;
  const images = Array.isArray(product.images_urls) && product.images_urls.length > 0 
    ? product.images_urls 
    : [product.image_url || product.image];

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImage((prev) => (prev + 1) % images.length);
    setZoomScale(1);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setZoomScale(1);
  };

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomScale(zoomScale === 1 ? 2.5 : 1);
  };

  return (
    <section className="product-view-section py-12 lg:py-20 bg-white">
      <div className="content-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 items-stretch">
          
          {/* LEFT: Image Gallery Section */}
          <div className="flex flex-row gap-4 h-[500px] md:h-[600px] lg:h-[700px]">
            <div 
              onClick={() => setIsGalleryOpen(true)}
              className="relative flex-grow h-full bg-gray-50 rounded-[30px] overflow-hidden cursor-zoom-in group shadow-sm"
            >
              <Image 
                src={images[selectedImage]} 
                alt={product.name} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-dark/60 text-white text-[10px] px-4 py-1.5 rounded-full backdrop-blur-md pointer-events-none uppercase tracking-[0.2em] font-manrope z-10">
                View Gallery
              </div>
            </div>
            
            {images.length > 1 && (
              <div className="flex flex-col gap-3 w-20 md:w-24 overflow-y-auto no-scrollbar h-full py-1">
                {images.map((img: string, idx: number) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative aspect-square w-full rounded-2xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                      selectedImage === idx ? 'border-yellow shadow-md' : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
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
              <h1 className="text-4xl md:text-5xl font-moralana text-dark leading-[1.1] mb-5">{product.name}</h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex text-yellow text-xs"><HiMiniStar /><HiMiniStar /><HiMiniStar /><HiMiniStar /><HiMiniStar /></div>
                <div className="w-[1px] h-4 bg-gray-200" />
                <span className="text-[11px] font-manrope text-gray-500 font-semibold uppercase tracking-widest">Limited Edition</span>
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
                <button className="flex-1 py-5 bg-dark text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-all uppercase tracking-[0.15em] text-[11px] font-manrope shadow-xl shadow-black/5">
                  <LiaShoppingBagSolid size={20}/> Add to Cart
                </button>
                <button className="flex-1 py-5 bg-yellow text-dark rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-yellow/80 transition-all uppercase tracking-[0.15em] text-[11px] font-manrope shadow-lg shadow-yellow/20">
                  <IoFlashOutline size={20}/> Buy it Now
                </button>
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

      {/* FULLSCREEN GALLERY OVERLAY WITH BLURRED BACKGROUND */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            /* Changed background to semi-transparent white (bg-white/90) 
              and added backdrop-blur-xl for the requested effect 
            */
            className="fixed inset-0 z-[100] bg-white/90 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            {/* Gallery Header */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-[110]">
              <p className="text-xs font-manrope font-bold uppercase tracking-widest text-dark">
                {selectedImage + 1} / {images.length} — {product.name}
              </p>
              <button 
                onClick={() => { setIsGalleryOpen(false); setZoomScale(1); }}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <IoCloseOutline size={32} className="text-dark" />
              </button>
            </div>

            {/* Main Gallery Area */}
            <div className="relative w-full h-full flex items-center justify-center px-4 md:px-20 overflow-hidden">
              
              {/* Navigation Arrows */}
              <button onClick={prevImage} className="absolute left-4 md:left-10 z-[120] p-3 bg-white/80 hover:bg-yellow rounded-full shadow-lg transition-all border border-gray-100">
                <MdChevronLeft size={30} />
              </button>

              {/* Zoomable Image Container */}
              <div 
                className="relative w-full h-[80vh] cursor-zoom-in flex items-center justify-center"
                onClick={toggleZoom}
              >
                <motion.div
                  animate={{ scale: zoomScale }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="relative w-full h-full"
                >
                  <Image 
                    src={images[selectedImage]} 
                    alt="Gallery view" 
                    fill 
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </div>

              <button onClick={nextImage} className="absolute right-4 md:right-10 z-[120] p-3 bg-white/80 hover:bg-yellow rounded-full shadow-lg transition-all border border-gray-100">
                <MdChevronRight size={30} />
              </button>
            </div>

            {/* Bottom Thumbnails Strip */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 px-6 py-3 bg-white/50 backdrop-blur-md rounded-full border border-gray-200 shadow-sm z-[110]">
               {images.map((img: string, idx: number) => (
                 <button 
                  key={idx} 
                  onClick={() => { setSelectedImage(idx); setZoomScale(1); }}
                  className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-yellow shadow-md' : 'border-transparent opacity-60'}`}
                 >
                   <Image src={img} alt="" width={50} height={50} className="object-cover" />
                 </button>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProductView;