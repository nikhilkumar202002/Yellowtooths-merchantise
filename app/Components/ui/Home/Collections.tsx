'use client'

import { useEffect, useState } from 'react';
import { fetchCollections } from '@/app/services/api';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { MdOutlineArrowOutward } from "react-icons/md";

type SubCategory = {
  id: number;
  name: string;
};

type Category = {
  id: number;
  name: string;
  image_url: string | null;
  subcategories: SubCategory[];
};

const Collections = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});

  const [emblaRef] = useEmblaCarousel({ 
    align: 'start', 
    containScroll: 'trimSnaps',
    breakpoints: {
      '(min-width: 768px)': { active: false } 
    }
  });

  useEffect(() => {
    const getCollections = async () => {
      try {
        const data = await fetchCollections();
        setCategories(data);
      } catch (error) {
        console.error("Error setting collections:", error);
      } finally {
        setLoading(false);
      }
    };
    getCollections();
  }, []);

  if (loading) {
    return (
      <div className="content-container py-10 lg:py-20">
        <div className="h-10 w-64 bg-gray-100 animate-pulse mb-12 rounded" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            /* Match the aspect ratio of the actual cards */
            <div key={i} className="w-full aspect-[3/4] bg-gray-100 animate-pulse rounded-[20px]" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="collection-section py-10 lg:py-20 bg-white">
      <div className="content-container">
        {/* Header Section */}
        <div className="latest-product-header flex justify-between items-end mb-10">
          <div className="latest-product-mainheader">
            <h2 className="text-4xl md:text-5xl font-moralana text-dark">Our Collections</h2>
          </div>
          <div className="latest-product-button hidden md:block">
            <a href="/shop-all" className='flex items-center gap-2 font-manrope font-bold uppercase text-xs tracking-widest hover:text-yellow transition-colors'>
              View All <span className='text-lg'><MdOutlineArrowOutward /></span>
            </a>
          </div>
        </div>

        {/* Carousel / Grid Wrapper */}
        <div className="overflow-hidden md:overflow-visible" ref={emblaRef}>
          <div className="flex md:grid md:grid-cols-3 lg:gap-5 md:gap-5 gap-4">
            {categories.map((category) => (
              <div 
                key={category.id} 
                /* Changed fixed height to aspect-[3/4] for responsive scaling */
                className="relative min-w-[85%] md:min-w-0 flex-shrink-0 aspect-[3/4] group overflow-hidden bg-gray-100"
              >
                {category.image_url && !imageError[category.id] ? (
                  <Image
                    src={category.image_url}
                    alt={category.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 85vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    onError={() => setImageError(prev => ({ ...prev, [category.id]: true }))}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-dark text-white p-4">
                    <span className="text-2xl opacity-50 font-moralana">
                      {category.name}
                    </span>
                  </div>
                )}

                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white transition-opacity duration-500 group-hover:opacity-90">
                  
                  {/* Content Wrapper */}
                  <div className="transform transition-transform duration-500 translate-y-[35px] group-hover:translate-y-0">
                    <h3 
                      className="text-3xl leading-none mb-4 font-moralana" 
                    >
                      {category.name}
                    </h3>
                    
                    {/* Explore Button */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <button className="text-[10px] font-bold border-b border-yellow pb-1 tracking-[0.2em] uppercase font-manrope text-yellow">
                        EXPLORE NOW
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;