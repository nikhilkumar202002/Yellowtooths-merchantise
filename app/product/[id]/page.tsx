// app/product/[slug]/page.tsx
import { fetchProducts } from '@/app/services/api';
import ProductClient from './ProductClient';

/**
 * Required for static export: Tells Next.js which [slug] pages to pre-render.
 */
export async function generateStaticParams() {
  try {
    const { products } = await fetchProducts(); // Fetches the array from result.data
    
    if (!Array.isArray(products)) return [];

    // Map your API data to the required format for the [slug] segment
    return products.map((product: any) => ({
      slug: (product.slug || '').toString(),
    }));
  } catch (error) {
    console.error("Static generation fetch failed:", error);
    return []; 
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params; // Unwrapping the Promise for Next.js 15+
  return <ProductClient slug={resolvedParams.slug} />;
}