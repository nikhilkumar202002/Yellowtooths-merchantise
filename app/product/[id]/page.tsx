'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { fetchProducts } from '@/app/services/api'
import ProductView from '../../Components/ui/product-single/ProductView'

export default function Page() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true) // Initialize as true

  useEffect(() => {
    const loadData = async () => {
      setLoading(true); // Ensure loading is true when start fetching
      try {
        const data = await fetchProducts()
        const found = data.find((p: any) => (p.id || p._id).toString() === id)
        setProduct(found)
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        // Use a small timeout if the API is too fast to test the skeleton
        setTimeout(() => setLoading(false), 500); 
      }
    }
    
    if (id) loadData();
  }, [id])

  // Pass both product and loading state
  return <ProductView product={product} loading={loading} />
}