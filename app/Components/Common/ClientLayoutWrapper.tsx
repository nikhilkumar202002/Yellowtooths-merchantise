'use client'

import { usePathname } from "next/navigation"; //
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useCallback } from 'react';
import { logoutUser } from '@/app/services/api';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // STRICT LOGIC: Only hide if the path is exactly "/login" or "/register"
  const isAuthPage = pathname === "/login" || pathname === "/register";

  // --- SESSION MANAGEMENT LOGIC ---
  const handleAutoLogout = useCallback(async () => {
    await logoutUser(); //
    localStorage.clear(); 
    window.dispatchEvent(new Event('authChange'));
    window.location.href = '/login';
  }, []);

  useEffect(() => {
    const ONE_WEEK = 7 * 24 * 60 * 60 * 1000;
    const ONE_MONTH = 30 * 24 * 60 * 60 * 1000;

    const checkSession = () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      const loginTime = parseInt(localStorage.getItem('loginTimestamp') || '0');
      const lastActive = parseInt(localStorage.getItem('lastActiveTimestamp') || '0');
      const now = Date.now();

      if ((now - lastActive) > ONE_WEEK || (now - loginTime) > ONE_MONTH) {
        handleAutoLogout();
      }
    };

    const updateActivity = () => {
      if (localStorage.getItem('token')) {
        localStorage.setItem('lastActiveTimestamp', Date.now().toString());
      }
    };

    window.addEventListener('mousemove', updateActivity);
    window.addEventListener('keydown', updateActivity);
    window.addEventListener('click', updateActivity);
    const interval = setInterval(checkSession, 5 * 60 * 1000);

    return () => {
      window.removeEventListener('mousemove', updateActivity);
      window.removeEventListener('keydown', updateActivity);
      window.removeEventListener('click', updateActivity);
      clearInterval(interval);
    };
  }, [handleAutoLogout]);
  // --- END SESSION MANAGEMENT ---

  return (
    <>
      {/* Header shows everywhere EXCEPT login/register */}
      {!isAuthPage && <Header />} 
      
      <main>{children}</main>
      
      {/* Footer shows everywhere EXCEPT login/register */}
      {!isAuthPage && <Footer />}
    </>
  );
}