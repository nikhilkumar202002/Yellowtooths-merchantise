'use client'

import React, { useState } from 'react'
import FilterTab from './FilterTab'
import ProductList from './ProductList'
import { TfiLayoutGrid2, TfiLayoutGrid3, TfiLayoutGrid4 } from "react-icons/tfi";

const ProductPageContainer = () => {
  // State to manage grid columns (defaulting to 4 for desktop)
  const [columns, setColumns] = useState(4);

  return (
    <div className="min-h-screen bg-white">
      <div className="content-container mx-auto py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Sidebar: Filter Tab */}
          <aside className="w-full lg:w-1/4 xl:w-1/5">
            <FilterTab />
          </aside>

          {/* Right Content: Product List */}
          <main className="w-full lg:w-3/4 xl:w-4/5">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
               <p className="text-sm font-manrope text-gray-500">Showing all cinematic collections</p>
               
               <div className="flex items-center gap-6">
                  {/* Column Toggles - Hidden on mobile as mobile is usually 2 cols fixed */}
                  <div className="hidden md:flex items-center gap-3 border-r border-gray-200 pr-6">
                    <button 
                      onClick={() => setColumns(2)} 
                      className={`transition-colors ${columns === 2 ? 'text-yellow' : 'text-gray-400 hover:text-dark'}`}
                      title="2 Columns"
                    >
                      <TfiLayoutGrid2 size={20} />
                    </button>
                    <button 
                      onClick={() => setColumns(3)} 
                      className={`transition-colors ${columns === 3 ? 'text-yellow' : 'text-gray-400 hover:text-dark'}`}
                      title="3 Columns"
                    >
                      <TfiLayoutGrid3 size={20} />
                    </button>
                    <button 
                      onClick={() => setColumns(4)} 
                      className={`transition-colors ${columns === 4 ? 'text-yellow' : 'text-gray-400 hover:text-dark'}`}
                      title="4 Columns"
                    >
                      <TfiLayoutGrid4 size={20} />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-manrope">
                    <span className="text-gray-500">Sort by:</span>
                    <select className="bg-transparent font-bold border-none focus:ring-0 cursor-pointer">
                      <option>Featured</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Newest</option>
                    </select>
                  </div>
               </div>
            </div>

            {/* Pass the column state to ProductList */}
            <ProductList gridColumns={columns} />
          </main>
        </div>
      </div>
    </div>
  )
}

export default ProductPageContainer