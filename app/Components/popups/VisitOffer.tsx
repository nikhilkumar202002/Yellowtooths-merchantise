// app/Components/popups/VisitOffer.tsx
'use client'

import Image from 'next/image'
import React from 'react'
import { IoCloseOutline } from "react-icons/io5"
import { motion } from 'framer-motion'
// Using the correct relative path based on your folder structure
import Product from "../../../public/Images/product-one.jpg"

interface VisitOfferProps {
  onClose: () => void;
}

const VisitOffer = ({ onClose }: VisitOfferProps) => {
  return (
    /* fixed inset-0 and z-[9999] ensures it stays on top of all 5+ sections */
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      {/* Background overlay click to close */}
      <div className="absolute inset-0" onClick={onClose} />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-4xl bg-white overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[450px] z-10"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-yellow text-dark transition-all rounded-full shadow-md"
          aria-label="Close offer"
        >
          <IoCloseOutline size={24} />
        </button>

        {/* LEFT Section */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
          <Image 
            src={Product} 
            alt="Cinematic Merchandise" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* RIGHT Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-400 mb-4 font-manrope">
            Exclusive Collector Access
          </span>
          
          <h2 className="text-3xl md:text-4xl font-moralana text-dark leading-tight mb-6">
            Get 10–15% OFF <br />
            <span className="font-manrope italic font-light">your first drop.</span>
          </h2>
          
          <p className="text-gray-500 font-manrope text-sm mb-8 leading-relaxed">
            Join the inner circle. Be the first to know about new sculptures, t-shirts, and limited cinema frames.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="w-full px-5 py-4 border border-gray-200 focus:outline-none focus:border-yellow font-manrope text-sm transition-colors"
              required
            />
            <button 
              type="submit" 
              className="w-full py-5 bg-dark text-white font-bold uppercase tracking-[0.2em] text-[11px] font-manrope hover:bg-yellow hover:text-dark transition-all duration-300"
            >
              Unlock My Discount
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default VisitOffer