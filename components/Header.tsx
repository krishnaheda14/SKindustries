'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/catalogue', label: 'Catalogue' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-red-600">
      <nav className="container-custom">
        {/* Dual Company Logos Section */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 py-4 border-b border-gray-200">
          <Link href="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <img src="/images/logos/logoski.png" alt="SK Industries" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
            <div className="hidden sm:block">
              <div className="text-black text-base sm:text-lg font-bold">SK Industries</div>
            </div>
          </Link>
          
          <div className="h-12 w-px bg-red-600"></div>
          
          <Link href="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <img src="/images/logos/logoasi.png" alt="AS Industries" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
            <div className="hidden sm:block">
              <div className="text-black text-base sm:text-lg font-bold">AS Industries</div>
              <div className="text-gray-600 text-xs">Quality Assured</div>
            </div>
          </Link>
        </div>

        {/* Navigation Section */}
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-black hover:text-red-600 transition-colors duration-200 font-medium text-lg"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/919834263091"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border-2 border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-black p-2 absolute right-4"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-black hover:text-red-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/919834263091"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-center px-4 py-2 border-2 border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
