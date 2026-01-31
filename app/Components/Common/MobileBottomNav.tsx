'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  IoMdHeartEmpty, 
  IoMdHome, 
  IoMdSearch, 
  IoMdLogOut 
} from "react-icons/io"
import { LiaShoppingCartSolid } from "react-icons/lia"
import { PiUserThin } from "react-icons/pi"
import { motion, AnimatePresence } from 'framer-motion'

const MobileBottomNav = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const checkAuth = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    setIsLoggedIn(!!token);
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
    window.dispatchEvent(new Event('authChange'));
    window.location.href = '/';
  };

  const navItems = [
    { name: 'Home', href: '/', icon: <IoMdHome /> },
    { name: 'Search', href: '/search', icon: <IoMdSearch /> },
    { name: 'Wishlist', href: '/wishlist', icon: <IoMdHeartEmpty /> },
    { name: 'Cart', href: '/cart', icon: <LiaShoppingCartSolid /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark text-white z-[100] xl:hidden border-t border-white/10 pb-safe">
      <div className="flex items-center justify-around h-16 relative">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href} 
            className={`flex flex-col items-center gap-1 transition-colors ${pathname === item.href ? 'text-yellow' : 'text-gray-400'}`}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-[10px] uppercase font-bold tracking-tighter">{item.name}</span>
          </Link>
        ))}

        {/* Profile Tab */}
        <div className="relative" ref={profileRef}>
          <button 
            onClick={() => isLoggedIn ? setIsProfileOpen(!isProfileOpen) : window.location.href='/login'}
            className={`flex flex-col items-center gap-1 transition-colors ${isProfileOpen ? 'text-yellow' : 'text-gray-400'}`}
          >
            <PiUserThin className="text-2xl" />
            <span className="text-[10px] uppercase font-bold tracking-tighter">
              {isLoggedIn ? 'Account' : 'Login'}
            </span>
          </button>

          <AnimatePresence>
            {isProfileOpen && (
              <motion.div 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed bottom-16 left-0 right-0 bg-white text-dark shadow-2xl rounded-t-2xl z-[110] overflow-hidden border-t border-gray-100"
              >
                <div className="max-h-[70vh] overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar">
                  <div className="flex items-center justify-between border-b pb-4">
                    <h3 className="font-moralana text-xl">My Account</h3>
                    <button onClick={() => setIsProfileOpen(false)}><IoMdLogOut className="text-red-500 text-xl" onClick={handleLogout} /></button>
                  </div>
                  {/* Reuse menu sections from Header.tsx */}
                  <div className="flex flex-col gap-4 text-sm font-manrope font-bold uppercase tracking-widest">
                    <Link href="/orders" onClick={() => setIsProfileOpen(false)}>My Orders</Link>
                    <Link href="/wishlist" onClick={() => setIsProfileOpen(false)}>Wishlist</Link>
                    <Link href="/saved-designs" onClick={() => setIsProfileOpen(false)}>Saved Designs</Link>
                    <Link href="/custom-studio" onClick={() => setIsProfileOpen(false)}>Custom Studio</Link>
                    <button onClick={handleLogout} className="text-left text-red-500 pt-4 border-t">Log Out</button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default MobileBottomNav;