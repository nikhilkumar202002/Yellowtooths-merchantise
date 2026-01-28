'use client'

import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleFaq = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const faqData = [
    {
      category: "Ordering & Payment",
      items: [
        {
          question: "How do I place an order?",
          answer: "To place an order, browse our products, add items to your cart, and proceed to checkout. Enter your shipping and billing information, select your preferred shipping method, and complete payment. You will receive a confirmation email immediately after your purchase."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and bank transfers. All payments are processed securely through our encrypted payment gateway."
        },
        {
          question: "Is my payment information secure?",
          answer: "Yes, your payment information is completely secure. We use industry-standard SSL encryption to protect all transactions. Your credit card details are never stored on our servers and are processed only through secure payment gateways."
        },
        {
          question: "Can I modify my order after placing it?",
          answer: "Orders can be modified within 2 hours of placement. Please contact us immediately at support@yellowtooths.com with your order number. After 2 hours, your order may have already been processed and cannot be changed. You would need to place a new order."
        },
        {
          question: "Do you offer discounts or promo codes?",
          answer: "Yes! We regularly offer discounts and promotional codes. Subscribe to our newsletter for exclusive offers, and follow our social media for flash sales. You can enter promo codes at checkout in the designated field."
        }
      ]
    },
    {
      category: "Shipping",
      items: [
        {
          question: "How much does shipping cost?",
          answer: "Shipping costs depend on your location, package weight, and selected shipping method. The total shipping cost is calculated and displayed at checkout before you complete your purchase. Orders over $100 qualify for free standard shipping within the continental United States."
        },
        {
          question: "How long does shipping take?",
          answer: "Shipping times vary by method: Standard (5-7 business days), Express (2-3 business days), Overnight (next business day), and International (10-21 business days). Processing time is 1-2 business days before your order ships. Custom items may take 5-7 additional business days to process."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship to most countries worldwide. International shipping typically takes 10-21 business days depending on the destination. International orders may be subject to customs duties and taxes. Shipping costs for international orders are calculated separately at checkout."
        },
        {
          question: "How can I track my order?",
          answer: "Once your order ships, you'll receive an email with a tracking number and a link to monitor your package. You can also track your order by logging into your account on our website. Tracking information is typically available within 24 hours of shipment."
        },
        {
          question: "What if my package doesn't arrive?",
          answer: "If your package doesn't arrive within the estimated timeframe, contact us at support@yellowtooths.com with your tracking number. We will investigate with the carrier and either resend your package or issue a refund. Most packages that appear lost are eventually delivered."
        },
        {
          question: "Can I change my shipping address after ordering?",
          answer: "If you need to change your shipping address, contact us immediately at support@yellowtooths.com. We can only guarantee address changes within 2 hours of order placement. After that, we cannot guarantee changes as your order may have already been processed."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      items: [
        {
          question: "What is your return policy?",
          answer: "Items may be returned within 30 days of purchase in original, unused condition with all original packaging and tags. To initiate a return, log into your account, locate your order, and select 'Return Items.' We'll provide a prepaid return shipping label for most items."
        },
        {
          question: "How long do refunds take?",
          answer: "Once we receive and inspect your returned items, we process refunds within 7-10 business days. The refund will be credited to your original payment method. Please allow an additional 5-10 business days for your bank to process the refund."
        },
        {
          question: "What items cannot be returned?",
          answer: "Custom-made or personalized items (unless defective), clearance or sale items, used or damaged items, and digital downloads cannot be returned. These are final sale items."
        },
        {
          question: "Do I have to pay for return shipping?",
          answer: "We provide prepaid return shipping labels for most items. Items under $20 may require you to cover return shipping costs. All damaged or defective items include free return shipping."
        },
        {
          question: "What if my item arrives damaged?",
          answer: "If your item arrives damaged or defective, report it within 48 hours of delivery to support@yellowtooths.com with photographs of the damage. We will replace the item or issue a full refund, including return shipping costs."
        },
        {
          question: "Can I exchange items instead of returning them?",
          answer: "Yes! You can exchange items for a different size, color, or variant within 30 days of purchase. We cover return shipping, and you'll receive the new item at no additional cost if it's the same price. Price differences will be adjusted accordingly."
        }
      ]
    },
    {
      category: "Products",
      items: [
        {
          question: "Do you offer custom or personalized items?",
          answer: "Yes! We offer customization services for many of our products. You can design your own t-shirt, create custom sculptures, or personalize fibre frames. Custom items typically require 5-7 additional business days for production. Visit our 'Custom Studio' section for more information."
        },
        {
          question: "How are your products made?",
          answer: "Our products are crafted by skilled artisans using high-quality materials. T-shirts are printed using premium direct-to-garment technology. Sculptures are hand-crafted and finished. Fibre frames are assembled with precision. Visit our 'How It's Made' page for detailed information about our processes."
        },
        {
          question: "Are your products environmentally friendly?",
          answer: "We are committed to sustainability. Our t-shirts are made from organic cotton, our packaging is recyclable, and we partner with eco-conscious manufacturers. We're continuously working to improve our environmental impact."
        },
        {
          question: "Do you have a size guide?",
          answer: "Yes, each product page includes a detailed size guide with measurements. You can also check the customer reviews for feedback on fit. If you need help choosing a size, email us at support@yellowtooths.com and we'll assist you."
        },
        {
          question: "What is your quality guarantee?",
          answer: "All our products are guaranteed to be free from defects in materials and workmanship for one year from the date of purchase. If you discover a defect, contact us with photographic evidence and we'll replace the item or issue a full refund."
        }
      ]
    },
    {
      category: "Account & Privacy",
      items: [
        {
          question: "How do I create an account?",
          answer: "To create an account, click the 'Sign Up' button on our website. Enter your email address and create a password. You can then add your shipping and billing addresses. Creating an account allows you to track orders, save favorites, and receive personalized recommendations."
        },
        {
          question: "How do I reset my password?",
          answer: "On the login page, click 'Forgot Password' and enter your email address. We'll send you a password reset link. Click the link and follow the instructions to create a new password. If you don't receive the email, check your spam folder or contact us."
        },
        {
          question: "How do I update my account information?",
          answer: "Log into your account and navigate to 'Account Settings.' You can update your profile information, shipping addresses, billing information, and email preferences. Changes are saved immediately."
        },
        {
          question: "How do I unsubscribe from marketing emails?",
          answer: "You can manage your email preferences in your account settings by unchecking marketing email options. Alternatively, click the 'Unsubscribe' link in any marketing email we send. You'll remain subscribed to transactional emails (order confirmations, shipping updates, etc.)."
        },
        {
          question: "Is my personal information safe?",
          answer: "Your personal information is protected by industry-standard security measures. We use SSL encryption for all data transmission and comply with privacy regulations. For more details, please review our Privacy Policy."
        }
      ]
    },
    {
      category: "Contact & Support",
      items: [
        {
          question: "How do I contact customer support?",
          answer: "You can reach our support team via email at support@yellowtooths.com, phone at 1-800-CINEMA-1 (Monday-Friday, 9 AM - 6 PM EST), or through our website chat. We respond to all inquiries within 24 business hours."
        },
        {
          question: "What are your customer service hours?",
          answer: "Our customer support team is available Monday through Friday, 9 AM to 6 PM EST. We're closed on weekends and holidays. During off-hours, you can email us and we'll respond as soon as possible."
        },
        {
          question: "Do you have a physical store?",
          answer: "We currently operate online only. You can shop on our website and browse our full catalog. We're working on opening a physical location soon. Sign up for our newsletter to be notified when we launch!"
        },
        {
          question: "How can I report a problem or file a complaint?",
          answer: "If you experience any issues, please contact us immediately at support@yellowtooths.com or call 1-800-CINEMA-1. Provide details of the problem and any relevant information. We take all complaints seriously and will work to resolve the issue quickly."
        },
        {
          question: "Can I request a refund on a specific order?",
          answer: "If you're unsatisfied with your order, please contact us at support@yellowtooths.com within 30 days of purchase. We'll review your request and work with you to find a solution, whether that's a replacement, partial refund, or full return."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{fontFamily: 'manrope'}}>Frequently Asked Questions</h1>
          <p className="text-base sm:text-lg text-gray-600" style={{fontFamily: 'manrope'}}>Find answers to common questions about our products, shipping, returns, and more.</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* FAQ Accordion */}
        <div className="space-y-6 sm:space-y-8">
          {faqData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'manrope'}}>
                {section.category}
              </h2>
              
              <div className="space-y-3 sm:space-y-4">
                {section.items.map((item, itemIndex) => {
                  const uniqueIndex = `${sectionIndex}-${itemIndex}`
                  const isExpanded = expandedIndex === uniqueIndex
                  
                  return (
                    <div key={itemIndex} className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors">
                      <button
                        onClick={() => toggleFaq(uniqueIndex)}
                        className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-white flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 text-left" style={{fontFamily: 'manrope'}}>
                          {item.question}
                        </h3>
                        <FaChevronDown 
                          className={`flex-shrink-0 ml-4 text-yellow-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                          size={18}
                        />
                      </button>
                      
                      {isExpanded && (
                        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-gray-50 border-t border-gray-200">
                          <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <section className="mt-16 sm:mt-20 lg:mt-24 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 sm:p-8 lg:p-10">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{fontFamily: 'manrope'}}>Still Have Questions?</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed" style={{fontFamily: 'manrope'}}>
              Can't find the answer you're looking for? Our customer support team is here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <a 
                  href="mailto:support@yellowtooths.com" 
                  className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition-colors text-base sm:text-lg"
                  style={{fontFamily: 'manrope'}}
                >
                  Email Us
                </a>
              </div>
              <p className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>
                Or call us at <span className="font-semibold">1-800-CINEMA-1</span> (Mon-Fri, 9 AM - 6 PM EST)
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Faq
