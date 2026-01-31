'use client'

import React, { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from 'framer-motion'
import { IoCloseOutline, IoShieldCheckmarkOutline } from "react-icons/io5"
// import { FcGoogle } from "react-icons/fc"
// import { FaFacebook } from "react-icons/fa"

// Import your images
import LoginImg1 from "../../../public/Images/product-one.jpg"
import LoginImg2 from "../../../public/Images/image-1.jpg" 
import LoginImg3 from "../../../public/Images/image-2.jpg"

import Logo from "../../../public/Logo/yellowtooths.svg"
import "../styles/Auth.css"; 

const Login = () => {
  const images = [LoginImg1, LoginImg2, LoginImg3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [images.length]);

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
                  transition: { opacity: { duration: 2 }, filter: { delay: 1.5, duration: 1.5 }, scale: { duration: 3, ease: "easeOut" } }
                }}
                exit={{ opacity: 0, filter: "url(#login-water-effect)", transition: { duration: 2 } }}
                className="absolute inset-0 w-full h-full"
              >
                <Image src={images[index]} alt="Cinematic Scene" fill className="object-cover" priority />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/10 pointer-events-none z-10" />
            
            {/* Branding Overlay */}
            <div className="absolute top-10 left-10 z-20 hidden lg:block">
               <Link href="/" className="text-white">
                 <Image src={Logo} alt='Yellowtooths' width={150} height={0}/><span className="text-yellow italic">.</span>
               </Link>
            </div>
          </div>
          
          {/* RIGHT: Content & Form Area */}
          <div className="w-full lg:w-1/2 py-[100px] px-[150px] flex flex-col bg-white overflow-y-auto">
            
            <div className="w-full">
              {/* Headline Section */}
              <div className="mb-10">
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-yellow mb-3 block font-manrope">
                    Welcome Back
                </span>
                <h1 className="text-4xl md:text-5xl font-moralana text-dark leading-tight mb-4">
                  Step Back Into the Scene
                </h1>
                <p className="font-manrope text-gray-500 text-sm leading-relaxed">
                  Log in to access your orders, saved designs, and exclusive movie merchandise.
                </p>
              </div>

              {/* Login Form */}
              <form className="flex flex-col gap-4 mb-8">
                <div className="space-y-1">
                  <label className="text-[11px] uppercase font-bold text-gray-400 tracking-widest font-manrope">Email Address</label>
                  <input type="email" placeholder="e.g. collector@cinema.com" className="auth-input w-full px-5 py-4 border border-gray-100 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-yellow font-manrope text-sm transition-all" required />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <label className="text-[11px] uppercase font-bold text-gray-400 tracking-widest font-manrope">Password</label>
                    <Link href="#" className="text-[11px] text-gray-400 hover:text-yellow transition-colors font-manrope font-bold uppercase tracking-widest">Forgot?</Link>
                  </div>
                  <input type="password" placeholder="••••••••" className="auth-input w-full px-5 py-4 border border-gray-100 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-yellow font-manrope text-sm transition-all" required />
                </div>
                <button type="submit" className="w-full py-5 bg-dark text-white font-bold uppercase tracking-[0.2em] text-[11px] font-manrope hover:bg-yellow hover:text-dark transition-all duration-300 shadow-xl shadow-black/5 mt-2">
                  Log In
                </button>
              </form>

              {/* Social Login */}
              {/* <div className="mb-10">
                <div className="relative flex items-center justify-center mb-6">
                  <div className="border-t border-gray-100 w-full"></div>
                  <span className="bg-white px-4 text-[10px] text-gray-400 uppercase tracking-widest font-manrope font-bold absolute">Or continue with</span>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 flex items-center justify-center gap-3 py-4 border border-gray-100 rounded-none hover:bg-gray-50 transition-all font-manrope text-xs font-bold uppercase tracking-widest">
                    <FcGoogle size={18} /> Google
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-3 py-4 border border-gray-100 rounded-none hover:bg-gray-50 transition-all font-manrope text-xs font-bold uppercase tracking-widest">
                    <FaFacebook size={18} className="text-[#1877F2]" /> Facebook
                  </button>
                </div>
              </div> */}

              {/* Secondary Links */}
              <div className="text-center mb-12">
                <p className="text-sm font-manrope text-gray-500">
                  Don't have an account? <Link href="/register" className="text-dark font-bold underline decoration-yellow decoration-2 underline-offset-4 hover:text-yellow transition-colors">Create an Account</Link>
                </p>
              </div>

              {/* Member Benefits & Custom Studio */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-gray-100">
                <div>
                  <h4 className="text-[11px] uppercase font-bold text-dark tracking-widest mb-4 font-manrope">✨ Member Benefits</h4>
                  <ul className="space-y-2">
                    {["Track orders & deliveries", "Save favorites & wishlists", "Early access to drops", "Member-only offers"].map((benefit, i) => (
                      <li key={i} className="text-[12px] text-gray-500 font-manrope flex items-center gap-2">
                        <span className="w-1 h-1 bg-yellow rounded-full"></span> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[11px] uppercase font-bold text-dark tracking-widest mb-3 font-manrope">🎨 Custom Studio</h4>
                  <p className="text-[12px] text-gray-500 font-manrope leading-relaxed mb-4">
                    Have a custom movie idea waiting? Log in to track your orders.
                  </p>
                  <Link href="/custom-studio" className="text-[11px] font-bold text-dark hover:text-yellow transition-colors uppercase tracking-widest border-b-2 border-yellow pb-1">
                    Go to Custom Studio
                  </Link>
                </div>
              </div>

              {/* Trust Line */}
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

export default Login;