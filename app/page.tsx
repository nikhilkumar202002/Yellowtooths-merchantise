'use client';

import Banner from "./Components/ui/Home/Banner";
 import Collections from "./Components/ui/Home/Collections";
 import LatestProducts from "./Components/ui/Home/LatestProducts";
 import Seasonal from "./Components/ui/Home/Seasonal";

const page = () => {
  return (
    <div>
      <Banner />
      <Collections />
      <LatestProducts />
      <Seasonal />
    </div>
  )
}

export default page