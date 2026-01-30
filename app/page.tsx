// 1. Remove 'use client' to allow async server-side fetching
import Banner from "./Components/ui/Home/Banner";
import Collections from "./Components/ui/Home/Collections";
import LatestProducts from "./Components/ui/Home/LatestProducts";
import Seasonal from "./Components/ui/Home/Seasonal";
import Crafted from "./Components/ui/Home/Crafted";
import { fetchBanners } from '@/app/services/api';

export default async function Page() {
  // 2. Fetch data on the server. This happens before the page reaches the browser.
  const bannerData = await fetchBanners();

  return (
    <div>
      {/* 3. Pass the pre-fetched data to the client component */}
      <Banner initialBanners={bannerData} />
      
      <Collections />
      <LatestProducts />
      <Seasonal />  
      <Crafted />
    </div>
  );
}