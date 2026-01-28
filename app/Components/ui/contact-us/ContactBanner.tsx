'use client'

import { ImLocation } from "react-icons/im";
import { MdMarkEmailUnread } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdTimer } from "react-icons/md";

const ContactBanner = () => {
  return (
    <section className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4" style={{fontFamily: 'manrope'}}>Contact Us</h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-6" style={{fontFamily: 'manrope'}}>Let's Create Something Cinematic.</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'manrope'}}>
              Have a question about an order, need a custom design, or want to collaborate? We're here to help you turn movie moments into something unforgettable.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mt-12 sm:mt-16">
            {/* Reach Us Section */}
            <div className="bg-white rounded-lg p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8" style={{fontFamily: 'manrope'}}>Reach Us</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <ImLocation className="text-yellow-400 text-xl sm:text-2xl mt-1" />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
                      Ln-1, Kutty Sahib Layout Rd, near Model Engineering College, Thrikkakara, Edappally, Ernakulam, Kochi, Kerala 682021
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MdMarkEmailUnread className="text-yellow-400 text-xl sm:text-2xl mt-1" />
                  </div>
                  <div>
                    <a 
                      href="mailto:support@yellowtooths.com" 
                      className="text-base sm:text-lg text-gray-700 hover:text-yellow-400 transition-colors font-medium" 
                      style={{fontFamily: 'manrope'}}
                    >
                      support@yellowtooths.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <PiPhoneCallFill className="text-yellow-400 text-xl sm:text-2xl mt-1" />
                  </div>
                  <div>
                    <a 
                      href="tel:+919048326777" 
                      className="text-base sm:text-lg text-gray-700 hover:text-yellow-400 transition-colors font-medium" 
                      style={{fontFamily: 'manrope'}}
                    >
                      +91 90483 26777
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MdTimer className="text-yellow-400 text-xl sm:text-2xl mt-1" />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>
                      <span className="font-medium">Monday – Saturday</span> | 10:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Can We Help Section */}
            <div className="bg-white rounded-lg p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8" style={{fontFamily: 'manrope'}}>What Can We Help You With?</h3>
              
              <ul className="space-y-4 sm:space-y-5">
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-yellow-400 text-black font-bold text-sm flex-shrink-0 mt-1"></span>
                  <span className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>Order & Shipping Queries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-yellow-400 text-black font-bold text-sm flex-shrink-0 mt-1"></span>
                  <span className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>Product Information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-yellow-400 text-black font-bold text-sm flex-shrink-0 mt-1"></span>
                  <span className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>Custom T-Shirts, Frames & Sculptures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-yellow-400 text-black font-bold text-sm flex-shrink-0 mt-1"></span>
                  <span className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>Bulk / Corporate Orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-yellow-400 text-black font-bold text-sm flex-shrink-0 mt-1"></span>
                  <span className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>Collaborations & Partnerships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{fontFamily: 'manrope'}}>Send Us a Message</h2>
            <p className="text-base sm:text-lg text-gray-600" style={{fontFamily: 'manrope'}}>Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>

          <form className="bg-white rounded-lg p-6 sm:p-8 lg:p-10 shadow-sm">
            <div className="space-y-6 sm:space-y-8">
              {/* Name Field */}
              <div>
                <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-2" style={{fontFamily: 'manrope'}}>
                  Your Name
                </label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-colors"
                  style={{fontFamily: 'manrope'}}
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-2" style={{fontFamily: 'manrope'}}>
                  Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-colors"
                  style={{fontFamily: 'manrope'}}
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-2" style={{fontFamily: 'manrope'}}>
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  placeholder="+91 90483 26777"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-colors"
                  style={{fontFamily: 'manrope'}}
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-2" style={{fontFamily: 'manrope'}}>
                  Subject
                </label>
                <input 
                  type="text" 
                  placeholder="How can we help?"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-colors"
                  style={{fontFamily: 'manrope'}}
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-2" style={{fontFamily: 'manrope'}}>
                  Message
                </label>
                <textarea 
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-colors resize-none"
                  style={{fontFamily: 'manrope'}}
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors text-base sm:text-lg"
                style={{fontFamily: 'manrope'}}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactBanner
