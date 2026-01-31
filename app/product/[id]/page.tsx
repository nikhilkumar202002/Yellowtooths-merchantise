// app/product/[id]/page.tsx
import { fetchProducts } from '@/app/services/api';
import ProductClient from './ProductClient';

/**
 * Required for static export: Tells Next.js which [id] pages to pre-render.
 */
export async function generateStaticParams() {
  try {
    const data = await fetchProducts();
    
    if (!Array.isArray(data)) return [];

    // Map your API data to the required format for the [id] segment
    return data.map((product: any) => ({
      id: (product.id || product._id || '').toString(),
    }));
  } catch (error) {
    console.error("Static generation fetch failed:", error);
    return [{ id: '102' }]; 
  }
}

// UPDATE: Added async/await for the params
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params; // Unwrapping the Promise
  const id = resolvedParams.id;

  return <ProductClient id={id} />;
}