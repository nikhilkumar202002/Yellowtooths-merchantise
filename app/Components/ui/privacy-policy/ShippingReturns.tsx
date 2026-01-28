import React from 'react'

const ShippingReturns = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 sm:py-16 lg:py-20 ">
        <div className="content-container mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{fontFamily: 'manrope'}}>Shipping & Returns</h1>
          <p className="text-base sm:text-lg text-gray-600" style={{fontFamily: 'manrope'}}>Last updated: January 28, 2026</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-container mx-auto  py-12 sm:py-16 lg:py-20">
        
        {/* Introduction */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
            At Yellowtooths Merchandise, we are committed to ensuring a smooth shopping experience from order placement to delivery, and beyond. This page outlines our comprehensive shipping and returns policies to help you make informed decisions about your purchases.
          </p>
        </section>

        {/* Shipping Information */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'manrope'}}>Shipping Information</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3" style={{fontFamily: 'manrope'}}>Shipping Methods</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4" style={{fontFamily: 'manrope'}}>
                We offer several shipping options to meet your needs:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>
                  <span className="font-semibold">Standard Shipping:</span> 5-7 business days
                </li>
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>
                  <span className="font-semibold">Express Shipping:</span> 2-3 business days
                </li>
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>
                  <span className="font-semibold">Overnight Shipping:</span> Next business day delivery
                </li>
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>
                  <span className="font-semibold">International Shipping:</span> 10-21 business days (varies by destination)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3" style={{fontFamily: 'manrope'}}>Shipping Costs</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
                Shipping costs are calculated based on your location, package weight, and selected shipping method. The total shipping cost will be displayed at checkout before you complete your purchase. Orders over $100 qualify for free standard shipping within the continental United States.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3" style={{fontFamily: 'manrope'}}>Order Processing</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
                All orders are processed within 1-2 business days. Processing time does not include weekends or holidays. You will receive a confirmation email with tracking information once your order ships. Custom-made and personalized items may require additional processing time (typically 5-7 business days).
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3" style={{fontFamily: 'manrope'}}>Tracking Your Order</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
                Once your order ships, you will receive an email with a tracking number and a link to monitor your package. You can also track your order by logging into your account on our website. Tracking information is typically available within 24 hours of shipment.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3" style={{fontFamily: 'manrope'}}>Delivery Confirmation</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
                Most orders are shipped with signature confirmation or delivery confirmation. You will be notified upon delivery. If your package is marked as delivered but you have not received it, please contact us immediately. Packages left at your door or address are your responsibility once delivery is confirmed.
              </p>
            </div>
          </div>
        </section>

        {/* Shipping Address */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'manrope'}}>Shipping Address</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3" style={{fontFamily: 'manrope'}}>Address Requirements</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4" style={{fontFamily: 'manrope'}}>
                Please ensure your shipping address is complete and accurate, including:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Full recipient name</li>
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Street address with apartment/suite number (if applicable)</li>
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• City, state/province, and ZIP/postal code</li>
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Country</li>
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Phone number</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3" style={{fontFamily: 'manrope'}}>Address Changes</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
                If you need to change your shipping address, please contact us immediately at support@yellowtooths.com. We cannot guarantee address changes after your order has been processed and shipped. We are not responsible for packages delivered to incorrect addresses due to user error.
              </p>
            </div>
          </div>
        </section>

        {/* Returns Policy */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'manrope'}}>Returns Policy</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3" style={{fontFamily: 'manrope'}}>Return Eligibility</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4" style={{fontFamily: 'manrope'}}>
                Items may be returned within 30 days of purchase for a full refund of the purchase price. To be eligible for return, items must be:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Unused and in original condition</li>
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• In original packaging with all tags attached</li>
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Not altered, damaged, or washed</li>
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Accompanied by proof of purchase</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3" style={{fontFamily: 'manrope'}}>Non-Returnable Items</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4" style={{fontFamily: 'manrope'}}>
                The following items cannot be returned:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Custom-made or personalized items (unless defective)</li>
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Clearance or sale items (final sale)</li>
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Used, damaged, or altered items</li>
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Items without tags or in different condition than purchased</li>
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Digital downloads and instant delivery items</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3" style={{fontFamily: 'manrope'}}>How to Return Items</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4" style={{fontFamily: 'manrope'}}>
                To initiate a return:
              </p>
              <ol className="space-y-3 ml-6">
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>1. Log into your account and locate your order</li>
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>2. Click "Return Items" and select the items you wish to return</li>
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>3. Provide a reason for your return</li>
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>4. Print the return shipping label provided</li>
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>5. Package items securely and ship to the return address</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3" style={{fontFamily: 'manrope'}}>Return Shipping</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
                We provide a prepaid return shipping label for most items. For items under $20, you may be responsible for return shipping costs. Please use trackable shipping methods when returning items. We are not responsible for items lost in transit during returns.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3" style={{fontFamily: 'manrope'}}>Refund Processing</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
                Once we receive and inspect your return, we will process your refund within 7-10 business days. The refund will be credited to your original payment method. Please note that shipping costs are non-refundable. If an item was defective or damaged, we may not deduct the original shipping cost.
              </p>
            </div>
          </div>
        </section>

        {/* Damaged or Defective Items */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'manrope'}}>Damaged or Defective Items</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3" style={{fontFamily: 'manrope'}}>Damage During Shipping</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
                If your item arrives damaged, defective, or missing, please report it within 48 hours of delivery. Contact us at support@yellowtooths.com with:
              </p>
              <ul className="space-y-2 ml-6 mt-3">
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Your order number</li>
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Clear photographs of the damage</li>
                <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Description of the issue</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3" style={{fontFamily: 'manrope'}}>Replacement or Refund</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
                For items damaged during shipping, we will either replace the item at no cost or issue a full refund, including the original shipping cost. Return shipping will be covered by us for damaged items.
              </p>
            </div>
          </div>
        </section>

        {/* Exchanges */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'manrope'}}>Exchanges</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4" style={{fontFamily: 'manrope'}}>
            If you need to exchange an item for a different size, color, or variant, you can request an exchange within 30 days of purchase. We will cover return shipping and send the new item at no additional cost if the original item is eligible for return.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
            If the new item has a higher price, you will be charged the difference. If the new item is less expensive, we can issue a refund for the difference.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-12 sm:mb-16 lg:mb-20 bg-gray-50 rounded-lg p-6 sm:p-8 lg:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'manrope'}}>Contact Us for Shipping & Returns</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6" style={{fontFamily: 'manrope'}}>
            Have questions about shipping or returns? We're here to help:
          </p>
          <div className="space-y-3">
            <p className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>
              <span className="font-semibold">Email:</span> support@yellowtooths.com
            </p>
            <p className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>
              <span className="font-semibold">Phone:</span> 1-800-CINEMA-1
            </p>
            <p className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>
              <span className="font-semibold">Hours:</span> Monday - Friday, 9 AM - 6 PM EST
            </p>
            <p className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>
              <span className="font-semibold">Address:</span> Yellowtooths Merchandise, Cinema Lane, Movie City, MC 12345
            </p>
          </div>
        </section>

        {/* Updates to Policy */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'manrope'}}>Updates to Shipping & Returns Policy</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
            We may update this Shipping & Returns Policy periodically to reflect changes in our practices or in response to operational, legal, or other circumstances. Any changes will be posted on this page with an updated "Last updated" date. Your continued use of our website and services after updates constitutes your acceptance of the revised policy.
          </p>
        </section>
      </div>
    </div>
  )
}

export default ShippingReturns
