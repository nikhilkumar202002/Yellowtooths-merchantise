'use client'

import { useEffect, useState } from 'react'
import { fetchProducts } from '@/app/services/api'
import ProductView from '../../Components/ui/product-single/ProductView'

interface ProductClientProps {
  slug: string;
}

const ProductClient = ({ slug }: ProductClientProps) => {
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      setLoading(true); 
      try {
        const { products } = await fetchProducts();
        
        if (isMounted && Array.isArray(products)) {
          // Identify product by slug instead of ID
          const found = products.find((p: any) => p.slug === slug);
          setProduct(found || null);
        }
      } catch (error) {
        console.error("Error fetching product on client:", error);
      } finally {
        if (isMounted) {
          setTimeout(() => setLoading(false), 500); 
        }
      }
    }
    
    if (slug) loadData();

    return () => { isMounted = false; };
  }, [slug]);

  return <ProductView product={product} loading={loading} />;
}

export default ProductClient;