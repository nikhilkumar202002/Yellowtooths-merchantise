// app/Components/popups/PopupWrapper.tsx
'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import VisitOffer from "./VisitOffer";

export default function PopupWrapper() {
  const [showPopup, setShowPopup] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if user has already dismissed the popup
    const hasSeen = localStorage.getItem("hasSeenPromoPopup");
    
    // If you are testing and it doesn't show, clear your Local Storage!
    if (hasSeen === "true") return;

    // Set the 3-second delay
    const timer = setTimeout(() => {
      setShowPopup(true);
      // Optional: Prevent scrolling while popup is open
      document.body.style.overflow = 'hidden';
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    document.body.style.overflow = 'unset';
    // Mark as seen so it doesn't reappear
    localStorage.setItem("hasSeenPromoPopup", "true");
  };

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {showPopup && (
        <VisitOffer onClose={handleClose} />
      )}
    </AnimatePresence>
  );
}