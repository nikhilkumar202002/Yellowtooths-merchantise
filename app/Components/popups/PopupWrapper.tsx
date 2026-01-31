'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import VisitOffer from "./VisitOffer";

export default function PopupWrapper() {
  const [showPopup, setShowPopup] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Mark as mounted to prevent hydration errors
    setMounted(true);

    // 2. Check if user has already seen the popup
    const hasSeen = localStorage.getItem("hasSeenPromoPopup");
    
    // DEBUG: Clear LocalStorage to see it again while testing
    if (hasSeen === "true") return;

    // 3. Set the 3-second delay
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    // Mark as seen so it doesn't reappear
    localStorage.setItem("hasSeenPromoPopup", "true");
  };

  // Do not render anything on the server
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {showPopup && (
        <VisitOffer onClose={handleClose} />
      )}
    </AnimatePresence>
  );
}