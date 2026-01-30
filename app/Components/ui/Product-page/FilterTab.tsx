'use client'

import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md"

const FilterTab = () => {
  const [activeQuickFilter, setActiveQuickFilter] = useState('All')

  const filters = [
    { title: 'Category', options: ['T-Shirts', 'Hoodies', 'Sweatshirts', 'Oversized Tees'] },
    { title: 'Fabric', options: ['Organic Cotton', 'Heavyweight', 'Premium Blend'] },
    { title: 'Fit', options: ['Regular Fit', 'Slim Fit', 'Relaxed Fit', 'Boxy Fit'] },
    { title: 'Color', options: ['Vintage Black', 'Classic White', 'Cinematic Grey', 'Yellow'] }
  ]

  return (
    <div className="flex flex-col gap-8 sticky top-24">
      {/* Quick Status Filters */}
      <div>
        <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">Collection Status</h4>
        <div className="flex flex-wrap gap-2">
          {['All', 'New', 'Best Sellers', 'Limited'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveQuickFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-manrope transition-all ${
                activeQuickFilter === tab 
                  ? 'bg-yellow text-dark font-bold' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Detailed Filters Stack */}
      <div className="flex flex-col gap-6">
        {filters.map((filter) => (
          <div key={filter.title} className="border-b border-gray-100 pb-6">
            <h4 className="flex justify-between items-center text-sm font-bold font-manrope text-dark mb-4 cursor-pointer group">
              {filter.title}
              <MdKeyboardArrowDown className="text-gray-400 group-hover:text-dark transition-colors" size={20}/>
            </h4>
            
            <div className="flex flex-col gap-3">
              {filter.options.map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer group/label">
                  <div className="relative flex items-center">
                    <input 
                      type="checkbox" 
                      className="peer w-4 h-4 rounded border-gray-300 text-yellow focus:ring-yellow cursor-pointer appearance-none border checked:bg-yellow checked:border-yellow transition-all" 
                    />
                    <div className="absolute text-dark opacity-0 peer-checked:opacity-100 pointer-events-none left-0.5 top-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm font-manrope text-gray-600 group-hover/label:text-dark transition-colors">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        {/* Price Slider Section */}
        <div className="pb-6">
          <h4 className="text-sm font-bold font-manrope text-dark mb-4">Price Range</h4>
          <div className="space-y-4">
            <input type="range" className="w-full accent-yellow h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer" min="0" max="5000" />
            <div className="flex justify-between text-xs font-manrope text-gray-500 font-bold">
              <span>₹0</span>
              <span>₹5,000+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Clear Filters Button */}
      <button className="w-full py-3 border border-gray-200 text-gray-500 text-xs font-bold rounded-lg hover:bg-gray-50 transition-colors uppercase tracking-widest">
        Clear All Filters
      </button>
    </div>
  )
}

export default FilterTab