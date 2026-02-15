'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/catalogue', label: 'Catalogue' },
    { href: '/rate-list', label: 'Rate List' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-industrial-dark shadow-lg">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo Placeholder */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-industrial-accent rounded-lg flex items-center justify-center">
              {/* LOGO PLACEHOLDER - Replace with actual logo */}
              <span className="text-industrial-dark font-bold text-xl">SK</span>
            </div>
            <div className="hidden md:block">
              <div className="text-white text-xl font-bold">SK Industries</div>
              <div className="text-gray-400 text-xs">Est. 1981</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-industrial-accent transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/919422777786"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
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
          <div className="md:hidden py-4 border-t border-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-white hover:text-industrial-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
