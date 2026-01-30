'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { fetchProducts } from '@/app/services/api'
import ProductView from '../../Components/ui/product-single/ProductView'

export default function Page() {
  const params = useParams()
  // Ensure we have a string ID for comparison
  const id = params?.id as string 
  
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      // Don't restart loading if we already have the product for this ID
      setLoading(true); 
      try {
        const data = await fetchProducts()
        
        if (isMounted && Array.isArray(data)) {
          // Robust matching for different ID formats (id vs _id)
          const found = data.find((p: any) => {
            const pId = (p.id || p._id || '').toString();
            return pId === id;
          });
          
          setProduct(found || null);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        if (isMounted) {
          // Keep the small timeout to ensure smooth Skeleton transition
          setTimeout(() => setLoading(false), 500); 
        }
      }
    }
    
    if (id) {
      loadData();
    }

    return () => { isMounted = false; };
  }, [id]);

  // Return the ProductView which handles its own skeleton via the loading prop
  return <ProductView product={product} loading={loading} />;
}