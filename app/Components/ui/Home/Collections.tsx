'use client';

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
      <div className="content-container py-10">
        <div className="h-10 w-64 bg-gray-100 animate-pulse mb-8 rounded mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-full h-[520px] bg-gray-100 animate-pulse rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="collection-section py-10">
      <div className="content-container">
     <div className="latest-product-header flex justify-between items-end">
                 <div className="latest-product-mainheader">
                   <h2>Our Collections</h2>
                 </div>
                 <div className="latest-product-button hidden md:block">
                   <a href="" className='flex gap-2'>View All <span className='latest-product-button-icon'><MdOutlineArrowOutward /></span></a>
                 </div>
               </div>
        <div className="overflow-hidden md:overflow-visible pt-8" ref={emblaRef}>
          <div className="flex md:grid md:grid-cols-3 md:gap-5 gap-3">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className="relative min-w-[85%] md:min-w-0 flex-shrink-0 h-[420px] md:h-[520px] group overflow-hidden bg-gray-200"
              >
                {category.image_url && !imageError[category.id] ? (
                  <Image
                    src={category.image_url}
                    alt={category.name}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={() => setImageError(prev => ({ ...prev, [category.id]: true }))}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#1E1E1E] text-white p-4">
                    <span className="text-[25px] opacity-50 font-serif">
                      {category.name}
                    </span>
                  </div>
                )}

                {/* Overlay Container */}
                <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-8 text-white transition-all duration-500 group-hover:bg-black/50">
                  
                  {/* Content Wrapper that moves up on hover */}
                  <div className="transform transition-transform duration-500 translate-y-[40px] group-hover:translate-y-0">
                    <h3 
                      className="text-[25px] leading-none mb-4" 
                      style={{ fontFamily: 'Moralana, serif' }}
                    >
                      {category.name}
                    </h3>
                    
                    {/* Explore Button that fades in and moves up */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <button className="text-sm font-medium border-b border-white pb-1 tracking-widest uppercase font-sans">
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