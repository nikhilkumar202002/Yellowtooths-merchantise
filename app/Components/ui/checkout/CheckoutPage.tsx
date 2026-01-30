'use client'

import React from 'react'
import Link from 'next/link'
import { MdChevronRight } from "react-icons/md"
import { IoShieldCheckmarkOutline } from "react-icons/io5"

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-white py-12 md:py-20">
      <div className="content-container mx-auto">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-8 text-sm font-manrope text-gray-400">
          <Link href="/cart" className="hover:text-yellow transition-colors">Cart</Link>
          <MdChevronRight size={18} />
          <span className="text-dark font-medium">Checkout</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: Shipping & Payment (8 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            
            {/* Contact Section */}
            <section>
              <h2 className="text-xl font-bold font-manrope text-dark uppercase tracking-widest mb-6">Contact Information</h2>
              <div className="flex flex-col gap-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-5 py-4 border border-gray-200 focus:outline-none focus:border-yellow transition-colors font-manrope" 
                />
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 accent-yellow" />
                  <span className="text-sm text-gray-500 font-manrope group-hover:text-dark transition-colors">Email me with cinematic news and offers</span>
                </label>
              </div>
            </section>

            {/* Shipping Section */}
            <section>
              <h2 className="text-xl font-bold font-manrope text-dark uppercase tracking-widest mb-6">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-5 py-4 border border-gray-200 focus:outline-none focus:border-yellow font-manrope" />
                <input type="text" placeholder="Last Name" className="w-full px-5 py-4 border border-gray-200 focus:outline-none focus:border-yellow font-manrope" />
                <input type="text" placeholder="Address" className="md:col-span-2 w-full px-5 py-4 border border-gray-200 focus:outline-none focus:border-yellow font-manrope" />
                <input type="text" placeholder="City" className="w-full px-5 py-4 border border-gray-200 focus:outline-none focus:border-yellow font-manrope" />
                <input type="text" placeholder="Postal Code" className="w-full px-5 py-4 border border-gray-200 focus:outline-none focus:border-yellow font-manrope" />
                <input type="tel" placeholder="Phone" className="md:col-span-2 w-full px-5 py-4 border border-gray-200 focus:outline-none focus:border-yellow font-manrope" />
              </div>
            </section>

            <button className="w-full md:w-fit px-12 py-5 bg-dark text-white font-bold uppercase tracking-[0.2em] text-[12px] font-manrope hover:bg-yellow hover:text-dark transition-all duration-300">
              Continue to Shipping
            </button>
          </div>

          {/* RIGHT COLUMN: Order Summary (5 Cols) */}
          <div className="lg:col-span-5 bg-gray-50 p-8 md:p-12 sticky top-24">
            <h2 className="text-xl font-bold font-manrope text-dark uppercase tracking-widest mb-8 pb-4 border-b border-gray-200">Order Summary</h2>
            
            {/* Minimal Item List */}
            <div className="flex flex-col gap-6 mb-8">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                   <div className="w-16 h-20 bg-gray-200 relative flex-shrink-0">
                      {/* Image placeholder */}
                   </div>
                   <div>
                      <p className="font-medium font-manrope text-sm text-dark">Narivetta Poster T-shirt</p>
                      <p className="text-xs text-gray-400 uppercase tracking-tighter">Qty: 1</p>
                   </div>
                </div>
                <p className="font-bold font-manrope text-dark">₹1,299</p>
              </div>
            </div>

            {/* Calculations */}
            <div className="space-y-4 border-t border-gray-200 pt-6 mb-8">
              <div className="flex justify-between text-gray-500 font-manrope">
                <span>Subtotal</span>
                <span className="font-bold text-dark">₹1,299</span>
              </div>
              <div className="flex justify-between text-gray-500 font-manrope border-b border-gray-200 pb-6">
                <span>Shipping</span>
                <span className="italic text-xs uppercase tracking-widest">Calculated in next step</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-lg font-bold text-dark uppercase tracking-wider">Total</span>
                <span className="text-3xl font-bold font-manrope text-dark">₹1,299</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-400">
              <IoShieldCheckmarkOutline size={22} className="text-yellow" />
              <p className="text-[11px] uppercase tracking-widest font-manrope leading-relaxed">
                Secure SSL Encrypted Checkout. Your cinema collection is safe with us.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CheckoutPage