"use client";

import { useState } from "react";
import Logo from "../../../public/Logo/yellowtooths.svg";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoMdHeartEmpty, IoMdMenu, IoMdClose } from "react-icons/io";
import Image from "next/image";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
{ name: "Movie Merch", href: "/category/movie-merch" },
  { name: "Sculptures", href: "/category/sculptures" },
  { name: "T-Shirts", href: "/category/t-shirts" },
  { name: "Fibre Frames", href: "/category/fibre-frames" },
  { name: "New Drops", href: "/category/new-drops" },
  ];

  return (
    <nav className="w-full font-sans relative">
      {/* Top Nav */}
      <div className=" text-dark py-1.5 content-container uppercase flex items-center justify-between text-xs sm:text-sm font-medium">
        <div className="hidden md:block w-1/3"></div>
        <div className="w-full md:w-1/3 text-center">
          <p className="text-[13px]">Free Shipping all bulk orders!</p>
        </div>
        <div className="text-[13px] hidden md:flex w-1/3 justify-end gap-6">
          <a href="" className="hover:opacity-70 transition-opacity">Our stores</a>
          <a href="/login" className="hover:opacity-70 transition-opacity">Login</a>
          <a href="" className="hover:opacity-70 transition-opacity">Register</a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-dark text-white py-4 content-container flex items-center justify-between relative z-50">
        
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start items-center">
          <div className="flex-shrink-0">
           <a href="/">
            <Image 
                  src={Logo} 
                  alt="Logo" 
                  width={150} 
                  height={0} 
                  priority // Add this to fix the LCP warning
                />
           </a>
          </div>
        </div>

        {/* Middle: Desktop Links */}
        <div className="hidden xl:flex items-center gap-5 whitespace-nowrap text-[16px] tracking-wide">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-yellow transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Section: Search + Icons + Hamburger */}
        <div className="flex-1 flex items-center justify-end gap-4 md:gap-6">
          <div className="hidden lg:block w-48 xl:w-64">
            <SearchBar />
          </div>
          
          <div className="flex items-center gap-4 md:gap-4 text-2xl flex-shrink-0">
            {/* Hamburger moved right before Wishlist icon */}
            <button 
              className="xl:hidden text-3xl hover:text-yellow transition-colors order-first"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
            >
              <IoMdMenu />
            </button>
              <a href="/wishlist">
            <div className="cursor-pointer hover:text-yellow transition-colors">
              <IoMdHeartEmpty />
            </div>
            </a>
            
            <a href="/cart">
              <div className="cursor-pointer hover:text-yellow transition-colors relative">
              <LiaShoppingCartSolid />
              <span className="absolute -top-2 -right-2 bg-yellow text-dark text-[10px] font-bold px-1.5 rounded-full">
                0
              </span>
            </div>
            </a>
           
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer Redesign */}
      {/* Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] xl:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[350px] bg-dark z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out xl:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Image src={Logo} alt="Logo" width={120} height={40} />
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl text-white hover:text-yellow transition-colors"
            >
              <IoMdClose />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex flex-col p-6 gap-2">
            <p className="text-white text-xs uppercase tracking-widest mb-4">Menu</p>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg py-3 flex items-center justify-between group hover:text-yellow transition-all text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="mt-auto p-6 bg-white/5 flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-white">
               <a href="" className="text-sm font-medium hover:text-yellow">Our Stores</a>
               <a href="" className="text-sm font-medium hover:text-yellow">Account / Login</a>
            </div>
            <div className="h-[1px] bg-white/10 w-full" />
            <p className="text-xs text-white">Free Shipping on all bulk orders!</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;