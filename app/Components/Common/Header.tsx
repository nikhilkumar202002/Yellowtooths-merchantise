"use client";

import Logo from "../../../public/Logo/yellowtooths.svg";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoMdHeartEmpty } from "react-icons/io";
import Image from "next/image";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <nav className="w-full font-sans">
      {/* Top Nav: Yellow Background */}
      <div className="bg-yellow text-dark py-2 content-container uppercase flex items-center justify-between text-xs sm:text-sm font-medium">
        <div className="hidden md:block w-1/3"></div>
        <div className="w-full md:w-1/3 text-center">
          <p>Free Shipping all bulk orders!</p>
        </div>
        <div className="hidden md:flex w-1/3 justify-end gap-6">
          <a href="" className="hover:opacity-70 transition-opacity">Our stores</a>
          <a href="" className="hover:opacity-70 transition-opacity">Login</a>
          <a href="" className="hover:opacity-70 transition-opacity">Register</a>
        </div>
      </div>

      {/* Main Nav: Dark Background */}
      <div className="bg-dark text-white py-6 content-container flex items-center justify-between">
        
        {/* Left Section: Logo (flex-1 to balance the right side) */}
        <div className="flex-1 flex justify-start">
          <div className="flex-shrink-0">
            <Image 
              src={Logo} 
              alt="Logo" 
              width={180} 
              height={0} 
            />
          </div>
        </div>

        {/* Middle Section: Navigation Items (Exact Center) */}
        <div className="hidden xl:flex items-center gap-8 whitespace-nowrap text-[17px] tracking-wide">
          <a href="" className="hover:text-yellow transition-colors">Movie Merch</a>
          <a href="" className="hover:text-yellow transition-colors">Sculptures</a>
          <a href="" className="hover:text-yellow transition-colors">T-Shirts</a>
          <a href="" className="hover:text-yellow transition-colors">Fibre Frames</a>
          <a href="" className="hover:text-yellow transition-colors">New Drops</a>
        </div>

        {/* Right Section: Search Bar + Icons (flex-1 to balance the left side) */}
        <div className="flex-1 flex items-center justify-end gap-6">
          <div className="hidden lg:block w-48 xl:w-64">
            <SearchBar />
          </div>
          
          <div className="flex items-center gap-6 text-2xl flex-shrink-0">
            <div className="cursor-pointer hover:text-yellow transition-colors">
              <IoMdHeartEmpty />
            </div>
            <div className="cursor-pointer hover:text-yellow transition-colors relative">
              <LiaShoppingCartSolid />
              <span className="absolute -top-2 -right-2 bg-yellow text-dark text-[10px] font-bold px-1.5 rounded-full">
                0
              </span>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Header;