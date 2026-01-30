'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PiFilmSlateFill } from "react-icons/pi" // Cinematic icon

const InfiniteTextSlider = () => {
  const phrases = [
    "Iconic Scenes",
    "Timeless Films",
    "Crafted Art",
    "Collectible Design"
  ]

  // Duplicate the array to ensure seamless looping
  const repeatedPhrases = [...phrases, ...phrases, ...phrases, ...phrases]

  return (
    <div className="bg-yellow py-3 overflow-hidden border-y border-dark/5">
      <motion.div 
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 25, 
          ease: "linear", 
          repeat: Infinity 
        }}
      >
        {repeatedPhrases.map((text, idx) => (
          <div key={idx} className="flex items-center">
            <span className="text-dark font-manrope font-medium uppercase text-sm md:text-base px-6">
              {text}
            </span>
            <PiFilmSlateFill className="text-dark/40 text-xl" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default InfiniteTextSlider