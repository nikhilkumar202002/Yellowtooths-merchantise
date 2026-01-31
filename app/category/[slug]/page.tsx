// app/category/[slug]/page.tsx
import CategoryClient from './CategoryClient';

export async function generateStaticParams() {
  return [
    { slug: 'movie-merch' },
    { slug: 'sculptures' },
    { slug: 't-shirts' },
    { slug: 'fibre-frames' },
    { slug: 'new-drops' }
  ];
}

// UPDATE: Added async/await for category params
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params; // Unwrapping the Promise
  const slug = resolvedParams.slug;

  return <CategoryClient />; // Your component already uses useParams() internally
}