'use client';

import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { fetchSeasonalBanners } from '@/app/services/api'
import { motion, AnimatePresence, color } from 'framer-motion'
import TextAnimation from '../../Common/TextAnimation'

const SLIDE_DURATION = 5 // seconds
const INDICATOR_MIN_WIDTH = 35 // px
const INDICATOR_MAX_WIDTH = 70 // px
const ANIMATION_DURATION = 1 // seconds

const Seasonal = () => {
  const [banners, setBanners] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentBanner = useMemo(
    () => banners[currentIndex],
    [banners, currentIndex]
  )

  const nextSlide = useCallback(() => {
    if (banners.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % banners.length)
    }
  }, [banners.length])

  useEffect(() => {
    let mounted = true
    const load = async () => {
      setLoading(true)
      const data = await fetchSeasonalBanners()
      if (mounted && Array.isArray(data)) {
        setBanners(data)
      }
      setLoading(false)
    }
    load()
    return () => { mounted = false }
  }, [])

  // Auto-advance slides every SLIDE_DURATION seconds
  useEffect(() => {
    if (banners.length > 1) {
      const interval = setInterval(nextSlide, SLIDE_DURATION * 1000)
      return () => clearInterval(interval)
    }
  }, [banners.length, nextSlide])

  if (loading) {
    return (
      <div className="w-full h-[60vh] md:h-[90vh] bg-gray-100 animate-pulse flex items-center justify-center text-dark font-sans">
        Loading...
      </div>
    )
  }

  if (banners.length === 0) return null

  return (
    <section className='seasonal-section'>
      <div className="seasonal-banners">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentBanner.id || currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: ANIMATION_DURATION, ease: "easeOut" }}
            className="seasonal-banner-wrapper"
          >
          <img
            src={currentBanner.image_url || currentBanner.image}
            alt={currentBanner.title || `Seasonal banner ${currentIndex + 1}`}
            className="seasonal-banner-img"
          />
          <div className="seasonal-banner-content content-container">
            <div className="seasonal-banner-text">
              {currentBanner.title && (
                <TextAnimation 
                  text={currentBanner.title}
                  className="text-3xl md:text-5xl"
                  style={{ fontFamily: 'Moralana, serif', color: '#fff' }}
                />
              )}
              {(currentBanner.button_name || currentBanner.cta_text) && (
                <button className="seasonal-banner-btn">
                  {currentBanner.button_name || currentBanner.cta_text}
                </button>
              )}
            </div>
          </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Seasonal