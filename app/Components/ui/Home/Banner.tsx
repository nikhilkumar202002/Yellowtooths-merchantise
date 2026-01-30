'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { fetchBanners } from '@/app/services/api'; 
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import TextAnimation from '../../Common/TextAnimation';
import { motion, AnimatePresence } from 'framer-motion';

// Constants
const SLIDE_DURATION = 5; 
const INDICATOR_MIN_WIDTH = 35; 
const INDICATOR_MAX_WIDTH = 70; 
const OVERLAY_OPACITY = 0.2;
const ANIMATION_DURATION = 1; 
const DESCRIPTION_DELAY = 0.4; 
const BANNER_TYPE = 'Web App';

type BannerType = {
  id: number;
  title: string;
  description: string | null;
  image_url: string;
  banner_type_name: string;
};

const Banner = ({ initialBanners = [] }: { initialBanners?: any[] }) => {
  // 1. Initialize state with initialBanners to avoid client-side fetch delay
  const [banners, setBanners] = useState<BannerType[]>(() => {
    const data = Array.isArray(initialBanners) ? initialBanners : [];
    return data.filter((item: any) => item.banner_type_name === BANNER_TYPE);
  });
  
  const [loading, setLoading] = useState(banners.length === 0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentBanner = useMemo(
    () => banners[currentIndex],
    [banners, currentIndex]
  );

  const nextSlide = useCallback(() => {
    if (banners.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }
  }, [banners.length]);

  useEffect(() => {
    // 2. Only fetch if initialBanners wasn't provided or failed
    if (banners.length > 0) {
        setLoading(false);
        return;
    }

    const getBanners = async () => {
      try {
        const response = await fetchBanners();
        const data = Array.isArray(response) ? response : response?.data || [];
        
        if (Array.isArray(data)) {
          const webBanners = data.filter(
            (item: BannerType) => item.banner_type_name === BANNER_TYPE
          );
          setBanners(webBanners);
        }
      } catch (error) {
        console.error("Error fetching banners:", error);
      } finally {
        setLoading(false);
      }
    };

    getBanners();
  }, [banners.length]);

  // 3. Cinematic Skeleton replaces "Loading..." text to prevent layout shift
  if (loading) {
    return (
      <div className="w-full h-[80vh] md:h-[90vh] bg-dark animate-pulse" />
    );
  }

  if (!currentBanner) return null;

  return (
    <section className="w-full relative overflow-hidden h-[80vh] md:h-[90vh] bg-black">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentBanner.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: ANIMATION_DURATION, ease: "linear" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src={currentBanner.image_url} 
            alt={currentBanner.title || "Banner"} 
            fill 
            priority
            className="object-cover"
            sizes="100vw"
          />
          
          <div className="absolute inset-0 bg-black/20 flex flex-col justify-end pb-16">
            <div className="content-container text-white">
              <div className="max-w-4xl">
                <TextAnimation 
                  text={currentBanner.title}
                  className="text-5xl md:text-7xl banner-highlight leading-tight"
                  style={{ fontFamily: 'Moralana, serif' }}
                />
                
                {currentBanner.description && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: DESCRIPTION_DELAY, duration: 0.6 }}
                    className="text-5xl md:text-7xl leading-tight font-moralana"
                  >
                    {currentBanner.description}
                  </motion.p>
                )}

                <div className="banner-cta mt-8">
                  <a 
                    href="#collections" 
                    className="inline-flex items-center gap-2 hover:text-yellow transition-all text-xl font-manrope font-medium"
                  >
                    Explore Frames <GoArrowUpRight className="text-2xl" />
                  </a>
                </div>

                <div className="flex items-center gap-2 mt-[40px]">
                  {banners.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className="relative cursor-pointer py-2"
                    >
                      <div 
                        className="h-[3px] bg-[#808080] rounded-full overflow-hidden transition-all duration-300"
                        style={{ width: currentIndex === index ? `${INDICATOR_MAX_WIDTH}px` : `${INDICATOR_MIN_WIDTH}px` }}
                      >
                        {currentIndex === index && (
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ 
                              duration: SLIDE_DURATION, 
                              ease: "linear" 
                            }}
                            onAnimationComplete={nextSlide}
                            className="h-full bg-yellow"
                          />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Banner;