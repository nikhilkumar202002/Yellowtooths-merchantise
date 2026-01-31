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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const profileRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    checkAuth();
    window.addEventListener('authChange', checkAuth);
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) setIsProfileOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener('authChange', checkAuth);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setUser(null);
    setIsProfileOpen(false);
    setIsMenuOpen(false);
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
        {/* Top Nav */}
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
              <><Link href="/login" className="hover:opacity-70 transition-opacity">Login</Link><Link href="/register" className="hover:opacity-70 transition-opacity">Register</Link></>
            )}
          </div>
        </div>

        {/* Main Nav */}
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
              <button 
                className="xl:hidden text-3xl hover:text-yellow transition-colors"
                onClick={() => setIsMenuOpen(true)}
              >
                <IoMdMenu />
              </button>

              <Link href="/wishlist" className="hidden xl:block hover:text-yellow transition-colors">
                <IoMdHeartEmpty />
              </Link>
              
              {/* ELEGANT PROFILE DROPDOWN */}
              {isLoggedIn && (
                <div className="hidden xl:block relative" ref={profileRef}>
                  <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="pt-1 hover:text-yellow transition-colors">
                    <PiUserThin className="text-3xl" />
                  </button>
                  
                  {isProfileOpen && (
                    <div className="absolute top-[120%] right-0 w-80 bg-white text-dark shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 rounded-sm z-[100] overflow-hidden">
                      {/* Personalized Header */}
                      <div className="p-6 bg-gray-50 border-b border-gray-100">
                        <p className="text-[10px] uppercase tracking-widest text-yellow font-bold mb-1">Welcome back,</p>
                        <h3 className="font-moralana text-xl text-dark truncate">{user?.name || "Collector"}</h3>
                        <p className="text-[11px] text-gray-400 font-manrope truncate">{user?.email}</p>
                      </div>

                      <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                        {/* Account Section */}
                        <div className="p-5 border-b border-gray-50">
                          <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">🔹 Account Essentials</p>
                          <div className="flex flex-col gap-3.5 text-[13px] font-manrope font-medium">
                            <Link href="/profile" className="hover:text-yellow">My Profile</Link>
                            <Link href="/settings" className="hover:text-yellow">Account Settings</Link>
                            <Link href="/address-book" className="hover:text-yellow">Address Book</Link>
                          </div>
                        </div>

                        {/* Orders & Activity */}
                        <div className="p-5 border-b border-gray-50">
                          <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">🛒 Orders & Activity</p>
                          <div className="flex flex-col gap-3.5 text-[13px] font-manrope font-medium">
                            <Link href="/orders" className="hover:text-yellow flex items-center justify-between">My Orders <span className="text-[10px] bg-yellow px-1.5 py-0.5 rounded-full text-dark">Active</span></Link>
                            <Link href="/track-order" className="hover:text-yellow">Track Order</Link>
                            <Link href="/wishlist" className="hover:text-yellow">Wishlist</Link>
                            <Link href="/saved-designs" className="hover:text-yellow">Saved Designs (Custom Studio)</Link>
                          </div>
                        </div>

                        {/* Collectibles */}
                        <div className="p-5 border-b border-gray-50 bg-gray-50/20">
                          <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">🎨 Custom & Collectibles</p>
                          <div className="flex flex-col gap-3.5 text-[13px] font-manrope font-medium">
                            <Link href="/custom-studio" className="hover:text-yellow">Custom Studio</Link>
                            <Link href="/custom-requests" className="hover:text-yellow">My Custom Requests</Link>
                            <Link href="/alerts" className="hover:text-yellow">Limited Edition Alerts</Link>
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="p-5 border-b border-gray-50">
                          <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">💳 Wallet & Offers</p>
                          <div className="flex flex-col gap-3.5 text-[13px] font-manrope font-medium">
                            <Link href="/offers" className="hover:text-yellow">Coupons & Offers</Link>
                            <Link href="/gift-cards" className="hover:text-yellow">Gift Cards</Link>
                            <Link href="/rewards" className="hover:text-yellow">Reward Points</Link>
                          </div>
                        </div>

                        {/* Notifications */}
                        <div className="p-5 border-b border-gray-50">
                          <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">🔔 Notifications</p>
                          <div className="flex flex-col gap-3.5 text-[13px] font-manrope font-medium">
                            <Link href="/notifications/drops" className="hover:text-yellow">New Movie Drops</Link>
                            <Link href="/notifications/orders" className="hover:text-yellow">Order Updates</Link>
                          </div>
                        </div>

                        {/* Support */}
                        <div className="p-5">
                          <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">📞 Support</p>
                          <div className="flex flex-col gap-3.5 text-[13px] font-manrope font-medium">
                            <Link href="/help" className="hover:text-yellow">Help Center</Link>
                            <Link href="/contact" className="hover:text-yellow">Contact Support</Link>
                          </div>
                        </div>

                        {/* Logout at bottom */}
                        <button 
                          onClick={handleLogout}
                          className="w-full p-5 bg-dark text-white text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-red-700 transition-colors"
                        >
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <Link href="/cart" className="hidden xl:block relative hover:text-yellow transition-colors">
                <LiaShoppingCartSolid />
                <span className="absolute -top-2 -right-2 bg-yellow text-dark text-[10px] font-bold px-1.5 rounded-full">0</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Redesign */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] xl:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div 
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[350px] bg-dark z-[120] shadow-2xl transform transition-transform duration-300 ease-in-out xl:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full text-white">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Image src={Logo} alt="Logo" width={120} height={40} />
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl text-white hover:text-yellow transition-colors"
            >
              <IoMdClose />
            </button>
          </div>

          <div className="flex flex-col p-6 gap-2">
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-4 font-bold">Menu</p>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-lg py-3 flex items-center justify-between border-b border-white/5 hover:text-yellow transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
                <span className="text-yellow">→</span>
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

          <div className="mt-auto p-6 bg-white/5 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
               <Link href="/stores" className="text-sm font-medium hover:text-yellow" onClick={() => setIsMenuOpen(false)}>Our Stores</Link>
               {isLoggedIn ? (
                 <button onClick={handleLogout} className="text-sm font-bold text-red-500 text-left uppercase tracking-widest">Log Out</button>
               ) : (
                 <Link href="/login" className="text-sm font-bold text-yellow uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>
                    Login / Register
                 </Link>
               )}
            </div>
          </div>
        </div>
      </div>

      <MobileBottomNav />
    </>
  );
};

export default Header;