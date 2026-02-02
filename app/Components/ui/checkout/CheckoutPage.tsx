'use client'

import React, { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { MdChevronRight } from "react-icons/md"
import { IoShieldCheckmarkOutline, IoLockClosedOutline } from "react-icons/io5"
import { fetchCart } from '@/app/services/api' //
import PlaceholderProduct from "../../../../public/Images/product-one.jpg"

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [totalMRP, setTotalMRP] = useState(0)
  const [totalDiscount, setTotalDiscount] = useState(0)
  const [subtotal, setSubtotal] = useState(0)
  const router = useRouter()

  const platformFee = 23
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

  // 1. Fetch Cart Data for Order Summary
  const loadCheckoutData = useCallback(async () => {
    if (!token) {
      setLoading(false)
      return
    }

    try {
      const result = await fetchCart() //
      const items = Array.isArray(result) ? result : (result?.data || [])
      setCartItems(items)

      let mrpAccumulator = 0
      let finalAccumulator = 0

      items.forEach((item: any) => {
        const product = item.product || {}
        const qty = item.quantity || 1
        
        // Parse prices based on your JSON structure
        const rawPrice = parseFloat(product.price?.toString().replace(/[^\d.]/g, '') || "0")
        const rawSalePrice = parseFloat(product.sale_price?.toString().replace(/[^\d.]/g, '') || "0")

        mrpAccumulator += rawPrice * qty
        finalAccumulator += (rawSalePrice > 0 ? rawSalePrice : rawPrice) * qty
      })

      setTotalMRP(mrpAccumulator)
      setSubtotal(finalAccumulator)
      setTotalDiscount(mrpAccumulator - finalAccumulator)
    } catch (error) {
      console.error("Checkout data sync failed:", error)
    } finally {
      setLoading(false)
    }
  }, [token])

  useEffect(() => {
    loadCheckoutData()
  }, [loadCheckoutData])

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-yellow border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!token) {
    return (
      <div className="min-h-screen bg-white py-20 flex flex-col items-center justify-center text-center px-4">
        <IoLockClosedOutline size={60} className="text-gray-200 mb-6" />
        <h2 className="text-2xl font-moralana text-dark uppercase mb-4">Secure Checkout</h2>
        <p className="text-gray-500 font-manrope mb-8">Please login to complete your cinematic purchase.</p>
        <Link href="/login" className="px-12 py-4 bg-yellow text-dark font-bold uppercase tracking-widest text-xs hover:bg-dark hover:text-white transition-all font-manrope">
          Login to Continue
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-12 md:py-20 font-manrope">
      <div className="content-container">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-12 text-sm text-gray-400 font-manrope">
          <Link href="/cart" className="hover:text-yellow transition-colors">Cart</Link>
          <MdChevronRight size={18} />
          <span className="text-dark font-bold uppercase tracking-tighter">Secure Checkout</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: Shipping Form */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            
            <section>
              <h2 className="text-lg font-bold text-dark uppercase tracking-[0.15em] mb-8 border-b border-gray-100 pb-4">
                1. Delivery Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" placeholder="First Name" className="w-full px-5 py-4 border border-gray-200 focus:outline-none focus:border-yellow transition-colors" />
                <input type="text" placeholder="Last Name" className="w-full px-5 py-4 border border-gray-200 focus:outline-none focus:border-yellow" />
                <input type="email" placeholder="Email Address" className="md:col-span-2 w-full px-5 py-4 border border-gray-200 focus:outline-none focus:border-yellow" />
                <input type="text" placeholder="Street Address" className="md:col-span-2 w-full px-5 py-4 border border-gray-200 focus:outline-none focus:border-yellow" />
                <input type="text" placeholder="City" className="w-full px-5 py-4 border border-gray-200 focus:outline-none focus:border-yellow" />
                <input type="text" placeholder="Postal Code" className="w-full px-5 py-4 border border-gray-200 focus:outline-none focus:border-yellow" />
                <input type="tel" placeholder="Mobile Number" className="md:col-span-2 w-full px-5 py-4 border border-gray-200 focus:outline-none focus:border-yellow" />
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-dark uppercase tracking-[0.15em] mb-8 border-b border-gray-100 pb-4">
                2. Shipping Method
              </h2>
              <div className="p-5 border-2 border-yellow bg-yellow/5 flex justify-between items-center">
                <div>
                  <p className="font-bold text-dark uppercase text-xs tracking-widest">Standard Delivery</p>
                  <p className="text-sm text-gray-500 mt-1">Estimated delivery: 3-5 Cinema Working Days</p>
                </div>
                <span className="text-green-600 font-bold uppercase text-xs">Free</span>
              </div>
            </section>

            <button className="w-full py-5 bg-dark text-white font-bold uppercase tracking-[0.2em] text-[12px] hover:bg-yellow hover:text-dark transition-all duration-500 shadow-xl shadow-dark/10">
              Continue to Payment
            </button>
          </div>

          {/* RIGHT COLUMN: Myntra-Style Order Summary */}
          <div className="lg:col-span-5 bg-gray-50 p-8 md:p-10 sticky top-24 border border-gray-100 shadow-sm">
            <h2 className="text-sm font-bold text-dark uppercase tracking-[0.2em] mb-8 border-b border-gray-200 pb-4">
              Order Summary ({cartItems.length} Items)
            </h2>
            
            {/* Dynamic Delivery Estimates (Cart Items) */}
            <div className="flex flex-col gap-6 mb-10 max-h-60 overflow-y-auto pr-2 scrollbar-thin">
              {cartItems.map((item) => {
                const product = item.product || {}
                const image = product.full_image_url || product.image_url || PlaceholderProduct
                return (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="w-14 h-18 relative flex-shrink-0 bg-gray-200">
                      <Image src={image} alt={product.name} fill className="object-cover" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-bold text-dark text-xs uppercase tracking-tighter line-clamp-1">{product.name}</p>
                      <p className="text-[10px] text-gray-400 uppercase mt-1">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-dark text-sm">₹{parseFloat(product.sale_price || product.price).toLocaleString('en-IN')}</p>
                  </div>
                )
              })}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-4 text-sm text-gray-600 border-t border-gray-200 pt-8 mb-8">
              <div className="flex justify-between">
                <span>Total MRP</span>
                <span className="text-dark font-bold">₹{totalMRP.toLocaleString('en-IN')}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  Discount on MRP 
                </span>
                <span className="text-green-600 font-bold">-₹{totalDiscount.toLocaleString('en-IN')}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Platform Fee</span>
                <span className="text-dark font-bold">₹{platformFee}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span className="text-green-600 font-bold uppercase text-[10px]">Free</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <span className="text-xs font-bold text-dark uppercase tracking-widest">Total Amount</span>
              <span className="text-2xl font-bold text-dark">₹{(subtotal + platformFee).toLocaleString('en-IN')}</span>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white border border-gray-100">
              <IoShieldCheckmarkOutline size={24} className="text-yellow flex-shrink-0" />
              <p className="text-[10px] uppercase tracking-widest text-gray-400 leading-relaxed font-bold">
                100% Secure SSL Payments. Your cinema collection is curated and delivered with care.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CheckoutPage