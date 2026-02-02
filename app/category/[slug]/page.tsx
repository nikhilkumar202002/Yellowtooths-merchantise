import React from 'react'
import { fetchCollections } from '@/app/services/api'
import CategoryClient from './CategoryClient'

// This function now works because it is in a Server Component
export async function generateStaticParams() {
  try {
    const categories = await fetchCollections();
    
    // Ensure categories is an array before mapping
    const categoryData = Array.isArray(categories) ? categories : [];
    
    return categoryData.map((category: any) => ({
      slug: category.id.toString(),
    }));
  } catch (error) {
    console.error("Failed to generate static params:", error);
    return [];
  }
}

const CategoryPage = () => {
  return <CategoryClient />;
}

export default CategoryPage;