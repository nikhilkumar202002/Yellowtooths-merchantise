'use client'

import { useEffect, useState } from 'react'
import { fetchProductById } from '@/app/services/api' // Use the specific fetcher
import ProductView from '../../Components/ui/product-single/ProductView'

interface ProductClientProps {
  id: string;
}

const ProductClient = ({ id }: ProductClientProps) => {
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      // Start loading state
      setLoading(true); 
      try {
        // Fetch the specific product directly from the single product endpoint
        const data = await fetchProductById(id);
        
        if (isMounted) {
          setProduct(data);
        }
      } catch (error) {
        console.error("Error fetching product on client:", error);
      } finally {
        if (isMounted) {
          // Maintain the smooth transition timing for your cinematic UI
          setTimeout(() => setLoading(false), 500); 
        }
      }
    }
    
    if (id) {
      loadData();
    }

    return () => { isMounted = false; };
  }, [id]);

  // Pass data to ProductView. ProductView handles the skeleton internally
  return <ProductView product={product} loading={loading} />;
}

export default ProductClient;