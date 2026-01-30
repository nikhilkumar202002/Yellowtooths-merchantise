import React from 'react'
import Image from "next/image";
import Logo from "../../../public/Logo/yellowtooths.svg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import InfiniteTextSlider from './InfiniteTextSlider';

const Footer = () => {

  const points = ["Cinema", "Art", "Collect", "Wear", "Frame", "Display"];

  return (
    <>
      <footer className="main-footer">
        <div>
          <InfiniteTextSlider />
        </div>
        <div className="footer-container content-container bg-black text-white py-16 text-center">
          <div className="footer-top">
            <div className="footer-logo">
              <Image src={Logo} alt="Yellowtooths" width={300} height={0} />
            </div>

            <div className="footer-top-content">
              <p>
                Turning iconic movie moments into wearable art, collectible
                sculptures, and premium fibre frames. For fans who live cinema
                beyond the screen.
              </p>

             <div className="footer-top-points">
                {points.map((point, index) => (
                  <React.Fragment key={index}>
                    <div className="footer-top-point">{point}</div>
                    {/* Add line separator except after the last item */}
                    {index < points.length - 1 && <span className="footer-separator"></span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

         <div className="footer-links grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-left">
          {/* Shop Column */}
          <div className="flex flex-col items-start">
            <h4 className="mb-6 text-white text-lg font-medium" style={{fontFamily: 'manrope'}}>Shop</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-normal" style={{fontFamily: 'manrope'}}>Movie T-Shirts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-normal" style={{fontFamily: 'manrope'}}>Fibre Frames</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-normal" style={{fontFamily: 'manrope'}}>Sculptures & Mementos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-normal" style={{fontFamily: 'manrope'}}>New Releases</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-normal" style={{fontFamily: 'manrope'}}>Limited Editions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-normal" style={{fontFamily: 'manrope'}}>Gift Combos</a></li>
            </ul>
          </div>

          {/* Custom Studio Column */}
          <div className="flex flex-col items-start">
            <h4 className="mb-6 text-white text-lg font-medium" style={{fontFamily: 'manrope'}}>Custom Studio</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-normal" style={{fontFamily: 'manrope'}}>Design Your T-Shirt</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-normal" style={{fontFamily: 'manrope'}}>Create Your Sculpture</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-normal" style={{fontFamily: 'manrope'}}>Custom Movie Frames</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-normal" style={{fontFamily: 'manrope'}}>Bulk & Corporate Orders</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col items-start">
            <h4 className="mb-6 text-white text-lg font-medium" style={{fontFamily: 'manrope'}}>Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-normal" style={{fontFamily: 'manrope'}}>About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-normal" style={{fontFamily: 'manrope'}}>How It's Made</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-normal" style={{fontFamily: 'manrope'}}>Our Artists</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-normal" style={{fontFamily: 'manrope'}}>Blog / Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-normal" style={{fontFamily: 'manrope'}}>Careers</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="flex flex-col items-start">
            <h4 className="mb-6 text-white text-lg font-medium" style={{fontFamily: 'manrope'}}>Support</h4>
            <ul className="space-y-3">
              <li><a href="/contact-us" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-normal" style={{fontFamily: 'manrope'}}>Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-normal" style={{fontFamily: 'manrope'}}>Track Order</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-normal" style={{fontFamily: 'manrope'}}>FAQ</a></li>
              <li><a href="/shipping-returns" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-normal" style={{fontFamily: 'manrope'}}>Shipping & Returns</a></li>
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-normal" style={{fontFamily: 'manrope'}}>Privacy Policy</a></li>
              <li><a href="/terms-conditions" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-normal" style={{fontFamily: 'manrope'}}>Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col items-start col-span-2 sm:col-span-1 lg:col-span-1">
            <h4 className="mb-6 text-white text-lg font-medium" style={{fontFamily: 'manrope'}}>Newsletter</h4>
            <h5 className="mb-3 text-xl font-semibold text-yellow-400" style={{fontFamily: 'manrope'}}>Stay in the Scene</h5>
            <p className="mb-4 text-sm font-normal text-gray-400 leading-relaxed" style={{fontFamily: 'manrope'}}>Get early access to new movie drops, exclusive offers, and limited editions.</p>
            <form className="w-full" action="">
              <div className="flex flex-col gap-3 w-full">
                <input 
                  name="email" 
                  type="email"
                  placeholder="Enter your email" 
                  className="w-full px-4 py-2.5 bg-gray-900 text-white placeholder-gray-600 border border-gray-700 rounded focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                  style={{fontFamily: 'manrope'}}
                />
                <button 
                  type="submit" 
                  className="w-full px-4 py-2.5 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition-all uppercase text-xs tracking-widest"
                  style={{fontFamily: 'manrope'}}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom flex flex-col md:flex-row items-center justify-between mt-12 gap-6 border-t border-gray-800 pt-6">
          <div className="footer-bottom-copyright">
            <p className="text-sm text-[#c3c3c3] text-[14px] font-light" style={{fontFamily: 'manrope'}}>© 2026 Cinema Crafted. All Rights Reserved. Made for Movie Lovers.</p>
          </div>

          <div className="footer-bottom-socials flex items-center gap-3 text-[17px] text-[#c3c3c3] font-medium ">
            <div className="footer-socicls-item hover:text-yellow-400 transition-colors"><a href="#"><FaInstagram/></a></div>
            <div className="footer-socicls-item hover:text-yellow-400 transition-colors"><a href="#"><FaFacebook/></a></div>
            <div className="footer-socicls-item hover:text-yellow-400 transition-colors"><a href="#"><FaBehance/></a></div>
          </div>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
