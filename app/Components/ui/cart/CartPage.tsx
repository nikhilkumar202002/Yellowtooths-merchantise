'use client'

import React from 'react'
import CartProducts from './CartProducts'
import CartTotal from './CartTotal'
import Link from 'next/link'
import { MdChevronRight } from "react-icons/md"

const CartPage = () => {
  return (
    <div className="min-h-screen bg-white py-12 md:py-20">
      <div className="content-container mx-auto">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-8 text-sm font-manrope text-gray-400">
          <Link href="/" className="hover:text-yellow transition-colors">Home</Link>
          <MdChevronRight size={18} />
          <span className="text-dark font-medium">Your Cart</span>
        </nav>

        <h1 className="text-4xl md:text-6xl font-moralana text-dark mb-12">
          Your Cinema <span className="font-manrope italic">Bag.</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* Left Column: Products List */}
          <div className="lg:col-span-2">
            <CartProducts />
            
            <div className="mt-12 pt-8 border-t border-gray-100">
              <Link href="/shop-all" className="text-sm font-bold uppercase tracking-widest text-dark hover:text-yellow transition-colors flex items-center gap-2">
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Right Column: Checkout Summary */}
          <div className="lg:col-span-1">
            <CartTotal />
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartPage