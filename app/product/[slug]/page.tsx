// app/product/[slug]/page.tsx
import { fetchProducts } from '@/app/services/api';
import ProductClient from './ProductClient';

/**
 * Required for static export: Tells Next.js which [slug] pages to pre-render.
 */
export async function generateStaticParams() {
  try {
    // Helper to fetch all pages if you have pagination, 
    // or just fetchProducts() if you only have one page.
    const { products } = await fetchProducts(1); 
    
    if (!Array.isArray(products)) return [];

    // Map your API data to the required format for the [slug] folder
    return products.map((product: any) => ({
      slug: (product.slug || product.name.toLowerCase().replace(/ /g, '-')).toString(),
    }));
  } catch (error) {
    console.error("Static generation fetch failed:", error);
    return []; 
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params; 
  return <ProductClient slug={resolvedParams.slug} />;
}