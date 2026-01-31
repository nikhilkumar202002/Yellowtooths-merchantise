'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation' // Added for redirection
import { motion, AnimatePresence } from 'framer-motion'
import { IoShieldCheckmarkOutline, IoChevronDown } from "react-icons/io5"
import { register } from '@/app/services/api' // Import the register service

// Import your images and logo
import LoginImg1 from "../../../public/Images/product-one.jpg"
import LoginImg2 from "../../../public/Images/image-1.jpg" 
import LoginImg3 from "../../../public/Images/image-2.jpg"
import Logo from "../../../public/Logo/yellowtooths.svg"
import "../styles/Auth.css"; 

const countries = [
  { id: "2", name: "India", code: "+91", flag: "🇮🇳" },
  { id: "1", name: "United States", code: "+1", flag: "🇺🇸" },
  { id: "3", name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { id: "4", name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
];

const Register = () => {
  const images = [LoginImg1, LoginImg2, LoginImg3];
  const [index, setIndex] = useState(0);
  const router = useRouter();
  
  // Form Logic States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile_number: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Custom Dropdown States
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Image Transition
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [images.length]);

  // Handle Registration
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const payload = {
      ...formData,
      country_id: selectedCountry.id // Using the ID from the selected country object
    };

    try {
      const result = await register(payload);
      if (result.success) {
        // Redirect to login page upon successful registration
        router.push('/login');
      } else {
        setError(result.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setError('A connection error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="login-section bg-white min-h-screen">
        <div className="flex flex-col lg:flex-row items-stretch min-h-screen">
          
          {/* LEFT: Cinematic Transitioning Image Area */}
          <div className="relative w-full lg:w-1/2 h-[400px] lg:h-auto overflow-hidden bg-white">
            <AnimatePresence initial={false}>
              <motion.div
                key={index}
                initial={{ opacity: 0, filter: "url(#login-water-effect) brightness(1.1)", scale: 1.05 }}
                animate={{ 
                  opacity: 1, 
                  filter: "none", 
                  scale: 1,
                  transition: { 
                    opacity: { duration: 2 }, 
                    filter: { delay: 1.5, duration: 1.5 }, 
                    scale: { duration: 3, ease: "easeOut" } 
                  }
                }}
                exit={{ opacity: 0, filter: "url(#login-water-effect)", transition: { duration: 2 } }}
                className="absolute inset-0 w-full h-full"
              >
                <Image src={images[index]} alt="Cinematic Scene" fill className="object-cover" priority />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/10 pointer-events-none z-10" />
            <div className="absolute top-10 left-10 z-20 hidden lg:block">
               <Link href="/" className="text-white">
                 <Image src={Logo} alt='Yellowtooths' width={150} height={0}/><span className="text-yellow italic">.</span>
               </Link>
            </div>
          </div>
          
          {/* RIGHT: Registration Form Area */}
          <div className="w-full lg:w-1/2 py-[100px] px-[150px] flex flex-col bg-white overflow-y-auto">
            <div className="w-full">
              <div className="mb-10">
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-yellow mb-3 block font-manrope">
                    Join the Club
                </span>
                <h1 className="text-4xl md:text-5xl font-moralana text-dark leading-tight mb-4">
                  Create Your Cinematic Account
                </h1>
                <p className="font-manrope text-gray-500 text-sm leading-relaxed">
                  Join our community of movie lovers to track orders and save your favorite designs.
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-600 text-xs font-bold font-manrope border-l-4 border-red-600">
                  {error}
                </div>
              )}

              <form className="flex flex-col gap-4 mb-8" onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-[11px] uppercase font-bold text-gray-400 tracking-widest font-manrope">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Mohanlal" 
                    className="auth-input w-full px-5 py-4 border border-gray-100 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-yellow font-manrope text-sm transition-all" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label className="text-[11px] uppercase font-bold text-gray-400 tracking-widest font-manrope">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="ashirvadproduction@gmail.com" 
                    className="auth-input w-full px-5 py-4 border border-gray-100 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-yellow font-manrope text-sm transition-all" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {/* ALIGNED SECTION: 25% Left (Country) / 75% Right (Phone) */}
                <div className="space-y-1">
                   <label className="text-[11px] uppercase font-bold text-gray-400 tracking-widest font-manrope">Mobile Number</label>
                   <div className="grid grid-cols-[25%_1fr] md:grid-cols-[25%_1fr] gap-0 border border-gray-100 bg-gray-50/50 focus-within:border-yellow transition-all">
                      
                      {/* Left Col: Custom Dropdown */}
                      <div className="relative border-r border-gray-100" ref={dropdownRef}>
                        <div 
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="h-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors gap-1"
                        >
                          <span className="text-xl">{selectedCountry.flag}</span>
                          <IoChevronDown size={12} className={`text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>

                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute left-0 top-full mt-2 w-[280px] bg-white border border-gray-100 shadow-2xl z-[50]"
                            >
                              {countries.map((c) => (
                                <div 
                                  key={c.id}
                                  onClick={() => {
                                    setSelectedCountry(c);
                                    setIsDropdownOpen(false);
                                  }}
                                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer border-b last:border-0 border-gray-50"
                                >
                                  <span className="text-xl">{c.flag}</span>
                                  <span className="font-manrope text-xs font-bold text-dark">{c.code}</span>
                                  <span className="font-manrope text-xs text-gray-500">{c.name}</span>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Right Col: Phone Input */}
                      <input 
                        type="tel" 
                        placeholder="8078880041" 
                        className="w-full px-5 py-4 bg-transparent focus:outline-none font-manrope text-sm" 
                        required 
                        value={formData.mobile_number}
                        onChange={(e) => setFormData({ ...formData, mobile_number: e.target.value })}
                      />
                   </div>
                </div>

                {/* Password */}
                <div className="space-y-1">
                  <label className="text-[11px] uppercase font-bold text-gray-400 tracking-widest font-manrope">Password</label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="auth-input w-full px-5 py-4 border border-gray-100 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-yellow font-manrope text-sm transition-all" 
                    required 
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full py-5 bg-dark text-white font-bold uppercase tracking-[0.2em] text-[11px] font-manrope shadow-xl shadow-black/5 mt-4 transition-all duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-yellow hover:text-dark'}`}
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </button>
              </form>

              <div className="text-center mb-12">
                <p className="text-sm font-manrope text-gray-500">
                  Already have an account? <Link href="/login" className="text-dark font-bold underline decoration-yellow decoration-2 underline-offset-4 hover:text-yellow transition-colors">Log In</Link>
                </p>
              </div>

              <div className="mt-16 flex items-center justify-center gap-2 text-gray-400">
                <IoShieldCheckmarkOutline size={16} className="text-yellow" />
                <p className="text-[10px] uppercase tracking-widest font-manrope font-medium">
                  Your information is secure. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
        </div>        
      </section>

      {/* SVG Water Ripple Filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <filter id="login-water-effect">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise">
            <animate attributeName="baseFrequency" dur="10s" values="0.01;0.02;0.01" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" />
        </filter>
      </svg>
    </>
  )
}

export default Register;