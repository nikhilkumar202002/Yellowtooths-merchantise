'use client';

import { useEffect, useState } from 'react';
import { fetchCollections } from '@/app/services/api';
import Image from 'next/image';

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
      <div className="content-container grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-full h-[480px] bg-gray-100 animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <section className="collection-section">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="relative w-full h-[520px] group overflow-hidden bg-gray-200"
            >
              {/* Category Image */}
              {category.image_url ? (
                <Image
                  src={category.image_url}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-dark text-white font-bold">
                  {category.name}
                </div>
              )}

              {/* Overlay with Content */}
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8 text-white transition-opacity group-hover:bg-black/50">
                <h3 className="text-3xl font-bold uppercase" style={{ fontFamily: 'Moralana, serif' }}>
                  {category.name}
                </h3>
                
                {/* Displaying a few subcategories if they exist */}
                <div className="mt-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.subcategories.slice(0, 3).map((sub) => (
                    <span key={sub.id} className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      {sub.name}
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;