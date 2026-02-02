"use client";

import { useState, useEffect, useRef } from "react";
import Logo from "../../../public/Logo/yellowtooths.svg";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoMdHeartEmpty, IoMdMenu, IoMdClose } from "react-icons/io";
import { PiUserThin } from "react-icons/pi";
import Image from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";
import MobileBottomNav from "./MobileBottomNav";
import { fetchCart } from "../../../app/services/api";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); 
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const checkAuth = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const userData = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    setIsLoggedIn(!!token);
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        setUser(null);
      }
    }
  };

  // Fetches the cart and updates the badge with the total number of unique products
 const updateCartBadge = async () => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (!token) {
    setCartCount(0);
    return;
  }
  
  try {
    const data = await fetchCart();
    const items = Array.isArray(data) ? data : (data?.data || []);
    
    // Use items.length for unique product count
    setCartCount(items.length);
  } catch (error) {
    console.error("Header cart fetch error:", error);
    setCartCount(0);
  }
};

  useEffect(() => {
    checkAuth();
    updateCartBadge(); 

    // Sync state in real-time across components
    window.addEventListener('authChange', checkAuth);
    window.addEventListener('authChange', updateCartBadge);
    window.addEventListener('cartUpdate', updateCartBadge); 

    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) setIsProfileOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener('authChange', checkAuth);
      window.removeEventListener('authChange', updateCartBadge);
      window.removeEventListener('cartUpdate', updateCartBadge);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setUser(null);
    setIsProfileOpen(false);
    setIsMenuOpen(false);
    setCartCount(0); 
    window.location.href = '/'; 
  };
  

  const navLinks = [
    { name: "Movie Merch", href: "/category/movie-merch" },
    { name: "Sculptures", href: "/category/sculptures" },
    { name: "T-Shirts", href: "/category/t-shirts" },
    { name: "Fibre Frames", href: "/category/fibre-frames" },
    { name: "New Drops", href: "/category/new-drops" },
  ];

  return (
    <>
      <nav className="w-full font-sans relative">
        <div className="text-dark py-1.5 content-container uppercase flex items-center justify-between text-xs sm:text-sm font-medium">
          <div className="hidden md:block w-1/3"></div>
          <div className="w-full md:w-1/3 text-center">
            <p className="text-[13px]">Free Shipping all bulk orders!</p>
          </div>
          <div className="text-[13px] hidden md:flex w-1/3 justify-end gap-6 items-center">
            <Link href="/stores" className="hover:opacity-70 transition-opacity">Our stores</Link>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="font-bold text-red-600 uppercase tracking-widest">Logout</button>
            ) : (
              <>
                <Link href="/login" className="hover:opacity-70 transition-opacity">Login</Link>
                <Link href="/register" className="hover:opacity-70 transition-opacity">Register</Link>
              </>
            )}
          </div>
        </div>

        <div className="bg-dark text-white py-4 content-container flex items-center justify-between relative z-50">
          <div className="flex-1 flex justify-start items-center">
            <Link href="/"><Image src={Logo} alt="Logo" width={150} height={0} priority /></Link>
          </div>

          <div className="hidden xl:flex items-center gap-5 whitespace-nowrap text-[16px] tracking-wide">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-yellow transition-colors uppercase text-sm font-bold tracking-widest">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex-1 flex items-center justify-end gap-4 md:gap-6">
            <div className="hidden lg:block w-48 xl:w-64">
              <SearchBar />
            </div>
            
            <div className="flex items-center gap-4 md:gap-4 text-2xl flex-shrink-0 relative">
              <button className="xl:hidden text-3xl hover:text-yellow transition-colors" onClick={() => setIsMenuOpen(true)}>
                <IoMdMenu />
              </button>

              <Link href="/wishlist" className="hidden xl:block hover:text-yellow transition-colors">
                <IoMdHeartEmpty />
              </Link>
              
              {isLoggedIn && (
                <div className="hidden xl:block relative" ref={profileRef}>
                  <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="pt-1 hover:text-yellow transition-colors">
                    <PiUserThin className="text-3xl" />
                  </button>
                  
                  {isProfileOpen && (
                    <div className="absolute top-[120%] right-0 w-80 bg-white text-dark shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 rounded-sm z-[100] overflow-hidden">
                      <div className="p-6 bg-gray-50 border-b border-gray-100">
                        <p className="text-[10px] uppercase tracking-widest text-yellow font-bold mb-1">Welcome back,</p>
                        <h3 className="font-moralana text-xl text-dark truncate">{user?.name || "Collector"}</h3>
                        <p className="text-[11px] text-gray-400 font-manrope truncate">{user?.email}</p>
                      </div>

                      <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                        <div className="p-5 border-b border-gray-50">
                          <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">🔹 Account Essentials</p>
                          <div className="flex flex-col gap-3.5 text-[13px] font-manrope font-medium">
                            <Link href="/profile" className="hover:text-yellow">My Profile</Link>
                            <Link href="/settings" className="hover:text-yellow">Account Settings</Link>
                            <Link href="/address-book" className="hover:text-yellow">Address Book</Link>
                          </div>
                        </div>
                        <div className="p-5">
                          <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">📞 Support</p>
                          <div className="flex flex-col gap-3.5 text-[13px] font-manrope font-medium">
                            <Link href="/help" className="hover:text-yellow">Help Center</Link>
                            <Link href="/contact" className="hover:text-yellow">Contact Support</Link>
                          </div>
                        </div>
                        <button onClick={handleLogout} className="w-full p-5 bg-dark text-white text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-red-700 transition-colors">Sign Out</button>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <Link href="/cart" className="hidden xl:block relative hover:text-yellow transition-colors">
                <LiaShoppingCartSolid />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow text-dark text-[10px] font-bold px-1.5 py-0.5 min-w-[18px] text-center rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] xl:hidden" onClick={() => setIsMenuOpen(false)} />
      )}

      <div className={`fixed top-0 left-0 h-full w-[80%] max-w-[350px] bg-dark z-[120] shadow-2xl transform transition-transform duration-300 ease-in-out xl:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-col h-full text-white">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Image src={Logo} alt="Logo" width={120} height={40} />
            <button onClick={() => setIsMenuOpen(false)} className="text-3xl text-white hover:text-yellow transition-colors">
              <IoMdClose />
            </button>
          </div>
          <div className="flex flex-col p-6 gap-2">
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-4 font-bold">Menu</p>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-lg py-3 flex items-center justify-between border-b border-white/5 hover:text-yellow transition-colors" onClick={() => setIsMenuOpen(false)}>
                {link.name} <span className="text-yellow">→</span>
              </Link>
            ))}
          </div>
          <div className="flex flex-col p-6 gap-4">
             <p className="text-gray-400 text-xs uppercase tracking-widest mb-2 font-bold">Quick Access</p>
             <Link href="/wishlist" className="flex items-center gap-3 text-lg py-2" onClick={() => setIsMenuOpen(false)}>
                <IoMdHeartEmpty className="text-yellow" /> Wish List
             </Link>
             <Link href="/cart" className="flex items-center gap-3 text-lg py-2" onClick={() => setIsMenuOpen(false)}>
                <LiaShoppingCartSolid className="text-yellow" /> My Cart
             </Link>
          </div>
        </div>
      </div>

      <MobileBottomNav />
    </>
  );
};

export default Header;