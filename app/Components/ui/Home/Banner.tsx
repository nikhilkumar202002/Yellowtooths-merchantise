'use client';

import { useEffect, useState, useCallback } from 'react';
import { fetchBanners } from '@/app/services/api'; 
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import TextAnimation from '../../Common/TextAnimation';
import { motion, AnimatePresence } from 'framer-motion';

type BannerType = {
  id: number;
  title: string;
  description: string | null;
  image_url: string;
  banner_type_name: string;
};

const Banner = () => {
  const [banners, setBanners] = useState<BannerType[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const SLIDE_DURATION = 5; // seconds

  const nextSlide = useCallback(() => {
    if (banners.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }
  }, [banners.length]);

  useEffect(() => {
    const getBanners = async () => {
      try {
        const response = await fetchBanners();
        const data = response?.data || response; 
        
        if (Array.isArray(data)) {
          const webBanners = data.filter(
            (item: BannerType) => item.banner_type_name === 'Web App'
          );
          setBanners(webBanners);
        }
      } catch (error) {
        console.error("Error setting banners:", error);
      } finally {
        setLoading(false);
      }
    };
    getBanners();
  }, []);

  if (loading) {
    return <div className="w-full h-[60vh] md:h-[90vh] bg-gray-100 animate-pulse flex items-center justify-center text-dark font-sans">Loading...</div>;
  }

  if (banners.length === 0) return null;

  const currentBanner = banners[currentIndex];

  return (
    <section className="w-full relative overflow-hidden h-[80vh] md:h-[90vh] bg-black">
      {/* 1. Remove mode="wait" to allow cross-fade without showing background */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentBanner.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "linear" }} // 2. Simple linear fade for a cleaner look
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
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
                  key={`title-${currentBanner.id}`}
                  text={currentBanner.title}
                  className="text-5xl md:text-7xl banner-highlight"
                  style={{ fontFamily: 'Moralana, serif' }}
                />
                
                {currentBanner.description && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-5xl md:text-7xl"

                  >
                    {currentBanner.description}
                  </motion.p>
                )}

                <div className="banner-cta mt-8">
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 hover:text-yellow transition-all text-xl font-sans font-medium"
                  >
                    Explore Frames <GoArrowUpRight className="text-2xl" />
                  </a>
                </div>

                {/* Slider Indicators */}
                <div className="flex items-center gap-2 mt-[40px]">
                  {banners.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className="relative cursor-pointer py-2"
                    >
                      <div 
                        className="h-[3px] bg-[#808080] rounded-full overflow-hidden transition-all duration-300"
                        style={{ width: currentIndex === index ? '70px' : '35px' }}
                      >
                        {currentIndex === index && (
                          <motion.div
                            key={`progress-${currentIndex}`}
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ 
                              duration: SLIDE_DURATION, 
                              ease: "linear" 
                            }}
                            onAnimationComplete={nextSlide}
                            className="h-full bg-[#FEC52D]"
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