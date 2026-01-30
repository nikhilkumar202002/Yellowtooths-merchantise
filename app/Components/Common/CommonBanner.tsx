'use client'

import React from 'react'
import Link from 'next/link'
import { MdChevronRight } from "react-icons/md"

interface CommonBannerProps {
  title: string;
  highlight?: string;
  breadcrumbPage: string;
}

const CommonBanner = ({ title, highlight, breadcrumbPage }: CommonBannerProps) => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 md:py-20 border-b border-gray-100">
      <div className="content-container mx-auto text-center">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 mb-6 text-sm font-manrope text-gray-400">
          <Link href="/" className="hover:text-yellow transition-colors">Home</Link>
          <MdChevronRight size={18} />
          <span className="text-dark font-medium">{breadcrumbPage}</span>
        </nav>

        {/* Page Heading */}
        <h1 className="text-4xl md:text-6xl font-moralana text-dark leading-tight">
          {title} {highlight && <span className="font-manrope italic font-light">{highlight}</span>}
        </h1>
        
      </div>
    </section>
  )
}

export default CommonBanner