// app/page.tsx
import Banner from "./Components/ui/Home/Banner";
import Collections from "./Components/ui/Home/Collections";
import LatestProducts from "./Components/ui/Home/LatestProducts";
import Seasonal from "./Components/ui/Home/Seasonal";
import Crafted from "./Components/ui/Home/Crafted";
import { fetchBanners } from '@/app/services/api';
import PopupWrapper from "./Components/popups/PopupWrapper";

export default async function Page() {
  const bannerData = await fetchBanners();

  return (
    <>
      {/* Logic for 3s delay & popup display */}
      <PopupWrapper />

      <main>
        <Banner initialBanners={bannerData} />
        <Collections />
        <LatestProducts />
        <Seasonal />  
        <Crafted />
      </main>
    </>
  );
}