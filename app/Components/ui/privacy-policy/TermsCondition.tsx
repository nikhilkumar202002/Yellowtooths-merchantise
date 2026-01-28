import React from 'react'

const TermsCondition = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 sm:py-16 lg:py-20">
        <div className="content-container mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{fontFamily: 'manrope'}}>Terms & Conditions</h1>
          <p className="text-base sm:text-lg text-gray-600" style={{fontFamily: 'manrope'}}>Last updated: January 28, 2026</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-container mx-auto py-12 sm:py-16 lg:py-20">
        
        {/* Introduction */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6" style={{fontFamily: 'manrope'}}>
            Welcome to Yellowtooths Merchandise ("Company," "we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of our website, mobile application, and all services provided by Yellowtooths Merchandise. By accessing and using our services, you agree to be bound by these Terms. If you do not agree with any provision of these Terms, please discontinue use of our services immediately.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
            These Terms and Conditions apply to all users, customers, and visitors of our website and services. We reserve the right to modify these Terms at any time, and your continued use of our services constitutes acceptance of any changes.
          </p>
        </section>

        {/* Use License */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'manrope'}}>1. Use License</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4" style={{fontFamily: 'manrope'}}>
            We grant you a limited, non-exclusive, non-transferable license to access and use our website and services for lawful purposes. You agree not to:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Reproduce, duplicate, copy, or sell any portion of our services</li>
            <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Access our services for competitive purposes</li>
            <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Use automated tools or scripts to access our services</li>
            <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Attempt to gain unauthorized access to our systems</li>
            <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Engage in any conduct that restricts or inhibits anyone's use or enjoyment of our services</li>
          </ul>
        </section>

        {/* Product Information and Ordering */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'manrope'}}>2. Product Information and Ordering</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3" style={{fontFamily: 'manrope'}}>Product Descriptions</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
                We strive to provide accurate descriptions and pricing for all products. However, we do not warrant that descriptions, pricing, or other content on our website is accurate, complete, or error-free. We reserve the right to correct any errors and to refuse or cancel any order.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3" style={{fontFamily: 'manrope'}}>Order Acceptance</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
                All orders are subject to acceptance and confirmation by Yellowtooths Merchandise. We reserve the right to refuse, cancel, or limit any order for any reason, including but not limited to product availability, accuracy of pricing, or suspected fraudulent activity.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3" style={{fontFamily: 'manrope'}}>Pricing and Payment</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
                All prices are displayed in USD unless otherwise stated. We reserve the right to change prices at any time. Payment must be received in full before order processing. We accept major credit cards and other payment methods as indicated on our website.
              </p>
            </div>
          </div>
        </section>

        {/* Shipping and Delivery */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'manrope'}}>3. Shipping and Delivery</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4" style={{fontFamily: 'manrope'}}>
            Delivery times are estimates only and not guaranteed. We are not responsible for delays caused by shipping carriers, weather, or other circumstances beyond our control. You are responsible for providing accurate shipping information. We will not be liable for packages delivered to incorrect addresses due to user error.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
            Risk of loss transfers to you upon delivery to the carrier. We recommend using trackable shipping methods and purchasing shipping insurance for high-value orders.
          </p>
        </section>

        {/* Returns and Refunds */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'manrope'}}>4. Returns and Refunds</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4" style={{fontFamily: 'manrope'}}>
            Items may be returned within 30 days of purchase in original condition with all packaging and documentation. Custom-made or personalized items are not eligible for return unless defective. Refunds will be processed within 7-10 business days of receipt and inspection of returned items. Shipping costs are non-refundable.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
            Items damaged during shipping should be reported within 48 hours with photographic evidence. We reserve the right to refuse returns that do not meet our return policy requirements.
          </p>
        </section>

        {/* Intellectual Property */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'manrope'}}>5. Intellectual Property Rights</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4" style={{fontFamily: 'manrope'}}>
            All content on our website, including but not limited to text, images, logos, designs, and product descriptions, is the intellectual property of Yellowtooths Merchandise or its content suppliers. Unauthorized reproduction, distribution, or use of this content is prohibited. This includes:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Text and graphic content</li>
            <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Product photographs and designs</li>
            <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Trademarks and logos</li>
            <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Software and website code</li>
          </ul>
        </section>

        {/* User Content and Conduct */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'manrope'}}>6. User Content and Conduct</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4" style={{fontFamily: 'manrope'}}>
            Any content you submit to our website, including reviews, comments, or feedback, grants us a non-exclusive, royalty-free license to use, reproduce, and distribute such content. You agree not to submit content that is:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Defamatory, abusive, or harassing</li>
            <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Obscene or contains explicit content</li>
            <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Infringes on intellectual property rights</li>
            <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Contains spam or misleading information</li>
            <li className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>• Violates any applicable laws or regulations</li>
          </ul>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'manrope'}}>7. Limitation of Liability</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4" style={{fontFamily: 'manrope'}}>
            To the fullest extent permitted by law, Yellowtooths Merchandise shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. This includes loss of profits, data, or goodwill.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
            Our total liability for any claim shall not exceed the amount you paid for the product or service in question. Some jurisdictions do not allow the exclusion of certain damages, so this limitation may not apply to you.
          </p>
        </section>

        {/* Disclaimer of Warranties */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'manrope'}}>8. Disclaimer of Warranties</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
            Our services are provided on an "as-is" and "as-available" basis without any warranties, express or implied. We disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that our services will be uninterrupted, error-free, or secure.
          </p>
        </section>

        {/* Indemnification */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'manrope'}}>9. Indemnification</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
            You agree to indemnify and hold harmless Yellowtooths Merchandise and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services, violation of these Terms, or infringement of any intellectual property rights.
          </p>
        </section>

        {/* Termination */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'manrope'}}>10. Termination</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
            We reserve the right to terminate or suspend your access to our services at any time for violation of these Terms, fraudulent activity, or any other reason we deem appropriate, with or without notice. Upon termination, your right to use our services immediately ceases.
          </p>
        </section>

        {/* Governing Law */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'manrope'}}>11. Governing Law</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
            These Terms and Conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts located in that jurisdiction. Any dispute arising from these Terms shall be resolved through binding arbitration, except for claims seeking injunctive relief.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-12 sm:mb-16 lg:mb-20 bg-gray-50 rounded-lg p-6 sm:p-8 lg:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'manrope'}}>12. Contact Us</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6" style={{fontFamily: 'manrope'}}>
            If you have questions about these Terms and Conditions, please contact us:
          </p>
          <div className="space-y-3">
            <p className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>
              <span className="font-semibold">Email:</span> support@yellowtooths.com
            </p>
            <p className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>
              <span className="font-semibold">Address:</span> Yellowtooths Merchandise, Cinema Lane, Movie City, MC 12345
            </p>
            <p className="text-base sm:text-lg text-gray-700" style={{fontFamily: 'manrope'}}>
              <span className="font-semibold">Phone:</span> 1-800-CINEMA-1
            </p>
          </div>
        </section>

        {/* Modifications */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'manrope'}}>13. Modifications to Terms</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'manrope'}}>
            We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any modifications constitutes your acceptance of the updated Terms. We encourage you to review these Terms periodically to stay informed of any changes. The date of the last update will be displayed at the top of this page.
          </p>
        </section>
      </div>
    </div>
  )
}

export default TermsCondition
