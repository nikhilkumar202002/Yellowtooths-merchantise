'use client'

import React, { useState, useRef } from 'react'
import { MdKeyboardArrowDown, MdChevronLeft, MdChevronRight } from "react-icons/md"
import { motion, AnimatePresence } from 'framer-motion'

const FilterTab = () => {
  const [activeQuickFilter, setActiveQuickFilter] = useState('All')
  const [openSections, setOpenSections] = useState<string[]>(['Category', 'Price Range'])
  const scrollRef = useRef<HTMLDivElement>(null)

  const filters = [
    { title: 'Category', options: ['T-Shirts', 'Hoodies', 'Sweatshirts', 'Oversized Tees'] },
    { title: 'Fabric', options: ['Organic Cotton', 'Heavyweight', 'Premium Blend'] },
    { title: 'Fit', options: ['Regular Fit', 'Slim Fit', 'Relaxed Fit', 'Boxy Fit'] },
    { title: 'Color', options: ['Vintage Black', 'Classic White', 'Cinematic Grey', 'Yellow'] }
  ]

  const toggleSection = (title: string) => {
    setOpenSections(prev => 
      prev.includes(title) ? prev.filter(s => s !== title) : [...prev, title]
    )
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col gap-6 sticky top-24 pr-2 h-[calc(100vh-120px)] overflow-y-auto overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      
      {/* Collection Status Carousel - Clean Layout */}
      <div className="py-2">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-[10px] uppercase tracking-widest font-medium text-gray-400">Status</h4>
          <div className="flex gap-1">
            <button onClick={() => scroll('left')} className="p-1 hover:text-yellow transition-colors">
              <MdChevronLeft size={20} className="text-gray-400" />
            </button>
            <button onClick={() => scroll('right')} className="p-1 hover:text-yellow transition-colors">
              <MdChevronRight size={20} className="text-gray-400" />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
        >
          {['All', 'New', 'Best Sellers', 'Limited', 'Discounts', 'Upcoming'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveQuickFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-manrope whitespace-nowrap transition-all duration-300 border ${
                activeQuickFilter === tab 
                  ? 'bg-yellow border-yellow text-dark font-medium' 
                  : 'bg-transparent border-gray-200 text-gray-500 hover:border-dark hover:text-dark'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Detailed Filters - Seamless Accordion */}
      <div className="flex flex-col">
        {filters.map((filter) => {
          const isOpen = openSections.includes(filter.title)
          
          return (
            <div key={filter.title} className="border-b border-gray-100">
              <button 
                onClick={() => toggleSection(filter.title)}
                className="w-full flex justify-between items-center py-4 text-[13px] font-medium font-manrope text-dark hover:text-yellow transition-colors group"
              >
                <span>{filter.title}</span>
                <MdKeyboardArrowDown 
                  className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-yellow' : ''}`} 
                  size={20}
                />
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-3 pb-5 pl-1">
                      {filter.options.map((option) => (
                        <label key={option} className="flex items-center gap-3 cursor-pointer group/label">
                          <input 
                            type="checkbox" 
                            className="w-4 h-4 rounded border-gray-300 text-yellow focus:ring-yellow cursor-pointer accent-yellow" 
                          />
                          <span className="text-[12px] font-manrope text-gray-500 group-hover/label:text-dark transition-colors">{option}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}

        {/* Price Range Section - Seamless */}
        <div className="">
          <button 
            onClick={() => toggleSection('Price Range')}
            className="w-full flex justify-between items-center py-4 text-[13px] font-medium font-manrope text-dark hover:text-yellow transition-colors"
          >
            <span>Price Range</span>
            <MdKeyboardArrowDown 
              className={`text-gray-400 transition-transform duration-300 ${openSections.includes('Price Range') ? 'rotate-180 text-yellow' : ''}`} 
              size={20}
            />
          </button>
          
          <AnimatePresence>
            {openSections.includes('Price Range') && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="px-1 pb-6 space-y-4">
                  <input 
                    type="range" 
                    className="w-full accent-yellow h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer" 
                    min="0" 
                    max="5000" 
                  />
                  <div className="flex justify-between items-center text-[10px] font-medium text-gray-400">
                    <span className="bg-gray-50 px-2 py-1 rounded border border-gray-100">₹0</span>
                    <span className="bg-gray-50 px-2 py-1 rounded border border-gray-100">₹5,000+</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Action Button */}
      <button className="w-full py-3 bg-dark text-white text-[10px] font-medium rounded-full hover:bg-yellow hover:text-dark transition-all duration-300 uppercase tracking-widest mt-2">
        Clear All
      </button>
    </div>
  )
}

export default FilterTab