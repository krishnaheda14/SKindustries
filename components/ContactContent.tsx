'use client'

import { useState } from 'react'

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/919422777786?text=${message}`, '_blank')
  }

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-gray-50 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <h1 className="section-title text-center text-3xl sm:text-4xl md:text-5xl">Contact Us</h1>
        <p className="section-subtitle text-center text-base sm:text-lg">
          Get in touch for quotes, inquiries, or technical assistance
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="card p-5 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-accent focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-accent focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-accent focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-accent focus:border-transparent"
                />
              </div>
              <button type="submit" className="btn-primary w-full text-sm sm:text-base">
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* SK Industries */}
            <div className="card p-5 sm:p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-industrial-accent rounded-lg flex items-center justify-center">
                  <span className="text-industrial-dark font-bold text-lg sm:text-xl">SK</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">SK Industries</h2>
                  <p className="text-gray-600 text-sm sm:text-base">Est. 1981</p>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                <div className="flex items-start">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-industrial-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p>1/8 Savedi Naka</p>
                    <p>Manmad Road, Ahmednagar</p>
                    <p>Maharashtra 414003</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-industrial-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+919422777786" className="hover:text-industrial-accent transition-colors">
                    +91 94227 77786
                  </a>
                </div>
              </div>
            </div>

            {/* AS Industries */}
            <div className="card p-5 sm:p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-industrial-steel rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">AS</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">AS Industries</h2>
                  <p className="text-gray-600 text-sm sm:text-base">Est. 1981</p>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                <div className="flex items-start">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-industrial-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p>1/8 Savedi Naka</p>
                    <p>Manmad Road, Ahmednagar</p>
                    <p>Maharashtra 414003</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-industrial-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+919422777786" className="hover:text-industrial-accent transition-colors">
                    +91 94227 77786
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="card p-5 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Business Hours</h3>
              <div className="space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                <p><span className="font-medium">Monday - Saturday:</span> 9:00 AM - 6:00 PM</p>
                <p><span className="font-medium">Sunday:</span> Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 sm:mt-14 md:mt-16 card overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.8!2d74.7475!3d19.0945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb0e2e2a2a2a3%3A0x1234567890abcdef!2sSavedi%20Naka%2C%20Ahmednagar%2C%20Maharashtra%20414003!5e0!3m2!1sen!2sin!4v1234567890123"
            width="100%"
            height="400"
            className="sm:h-[450px] md:h-[500px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="S K Industries Location - Savedi Naka, Ahmednagar"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
