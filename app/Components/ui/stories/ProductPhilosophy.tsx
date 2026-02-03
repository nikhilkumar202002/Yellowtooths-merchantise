'use client'

import Image from 'next/image'
import React from 'react'
import Tshirt from "../../../../public/Images/image-2.jpg"
import Frame from "../../../../public/Images/image-1.jpg"
import Sculpture from "../../../../public/Images/image-3.jpg"

import "../../styles/Stories.css"
import TextAnimation from '../../Common/TextAnimation'

const ProductPhilosophy = () => {
  return (
    <>
      <section className='product-philosophy py-20'>
        <div className='product-philosophy-container content-container'>
          <div className='product-philosophy-content'> 
            {/* Center the animation by using flex on the heading container */}
            <h2 className="flex justify-center mb-16">
              <TextAnimation text="Product Philosophy" />
            </h2>  
            
            {/* items-stretch ensures all columns have the same height */}
            <div className="product-philosophy-flex grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              
              {/* Item 1 */}
              <div className="product-philosophy-item group h-full flex flex-col">
                <div className="philosophy-item-image overflow-hidden flex-grow flex flex-col">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <Image 
                      src={Tshirt} 
                      fill
                      alt='Movie T-Shirts' 
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className='philosophy-item-content'>
                    <h3 >Movie T-Shirts</h3>
                    <p >
                      Designed using cinematic poster art and scene-based visuals, printed on premium fabrics for everyday wear.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="product-philosophy-item group h-full flex flex-col">
                <div className="philosophy-item-image overflow-hidden flex-grow flex flex-col">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <Image 
                      src={Frame} 
                      fill
                      alt='Fibre Frames' 
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className='philosophy-item-content'>
                    <h3>Fibre Frames</h3>
                    <p >
                      Museum-style frames crafted from iconic movie posters and cinematic moments—perfect for homes, studios, and workspaces.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="product-philosophy-item group h-full flex flex-col">
                <div className="philosophy-item-image overflow-hidden flex-grow flex flex-col">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <Image 
                      src={Sculpture} 
                      fill
                      alt='Sculptures & Mementos' 
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className='philosophy-item-content'>
                    <h3>Sculptures & Mementos</h3>
                    <p>
                      Handcrafted fibre sculptures inspired by legendary characters, scenes, and movie moments—created for true collectors.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductPhilosophy