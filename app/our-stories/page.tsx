'use client'

import StoriesBanner from "../Components/ui/stories/StoriesBanner"
import StoriesAbout from "../Components/ui/stories/StoriesAbout"
import ProductPhilosophy from "../Components/ui/stories/ProductPhilosophy"

const page = () => {
  return (
    <div className="bg-white min-h-screen">
      <StoriesBanner />
      
      {/* Horizontal Divider with Tailwind */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="h-[1px] w-full bg-gray-300 opacity-50"></div>
      </div>

      <StoriesAbout />
       <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="h-[1px] w-full bg-gray-300 opacity-50"></div>
      </div>
        <ProductPhilosophy />
    </div>
  )
}

export default page