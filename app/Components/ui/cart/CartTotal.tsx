'use client'

import React from 'react'
import { IoFlashOutline } from "react-icons/io5"
import Link from 'next/link' // Import Link from Next.js

const CartTotal = () => {
  return (
    <div className="bg-gray-50 p-8 sticky top-24">
      <h2 className="text-xl font-bold font-manrope text-dark uppercase tracking-widest mb-8">Order Summary</h2>
      
      <div className="space-y-4 border-b border-gray-200 pb-6 mb-6">
        <div className="flex justify-between text-gray-500 font-manrope">
          <span>Subtotal</span>
          <span className="font-bold text-dark">₹3,798</span>
        </div>
        <div className="flex justify-between text-gray-500 font-manrope">
          <span>Shipping</span>
          <span className="text-green-600 font-medium">Calculated at checkout</span>
        </div>
      </div>

      <div className="flex justify-between items-center mb-8">
        <span className="text-lg font-bold text-dark uppercase tracking-wider">Total</span>
        <span className="text-3xl font-bold font-manrope text-dark">₹3,798</span>
      </div>

      <div className="flex flex-col gap-4">
        {/* Wrap the button with Link to navigate to /checkout */}
        <Link href="/checkout" className="w-full">
          <button className="w-full py-5 bg-yellow text-dark rounded-none font-bold flex items-center justify-center gap-3 hover:bg-yellow/80 transition-all uppercase tracking-[0.15em] text-[12px] font-manrope shadow-lg shadow-yellow/10 cursor-pointer">
            <IoFlashOutline size={20}/> Proceed to Checkout
          </button>
        </Link>
        
        <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest font-manrope">
          Taxes and shipping calculated at next step
        </p>
      </div>
    </div>
  )
}

export default CartTotal