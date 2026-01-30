'use client'

import React from 'react'
import Image from 'next/image'
import { IoCloseOutline, IoAddOutline, IoRemoveOutline } from "react-icons/io5"
import PlaceholderProduct from "../../../../public/Images/product-one.jpg"

const CartProducts = () => {
  // Mock data for initial setup
  const cartItems = [
    { id: 1, name: "Narivetta Poster Printed T-shirt", price: 1299, size: "XL", color: "Vintage Black", qty: 1 },
    { id: 2, name: "The Godfather Fibre Frame", price: 2499, size: "12x18", color: "Classic Wood", qty: 1 },
  ]

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold font-manrope text-dark uppercase tracking-widest pb-4 border-b border-gray-100">
        Your Selection ({cartItems.length})
      </h2>
      
      <div className="flex flex-col gap-8">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-6 items-start py-2 group">
            {/* Product Image */}
            <div className="relative w-24 h-32 md:w-32 md:h-44 bg-gray-50 overflow-hidden flex-shrink-0">
              <Image src={PlaceholderProduct} alt={item.name} fill className="object-cover" />
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-grow gap-1">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium font-manrope text-dark group-hover:text-yellow transition-colors leading-tight max-w-[200px] md:max-w-md">
                  {item.name}
                </h3>
                <button className="text-gray-400 hover:text-red-500 transition-colors">
                  <IoCloseOutline size={24} />
                </button>
              </div>
              
              <p className="text-xs text-gray-400 font-manrope uppercase tracking-wider mt-1">
                {item.color} / {item.size}
              </p>

              {/* Controls & Price */}
              <div className="flex justify-between items-end mt-auto pt-4">
                <div className="flex items-center border border-gray-200">
                  <button className="p-2 hover:bg-gray-50"><IoRemoveOutline size={18} /></button>
                  <span className="px-4 py-1 font-manrope font-bold text-sm">{item.qty}</span>
                  <button className="p-2 hover:bg-gray-50"><IoAddOutline size={18} /></button>
                </div>
                <p className="text-xl font-bold font-manrope text-dark">₹{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CartProducts