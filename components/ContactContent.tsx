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
    <div className="py-20 bg-gray-50">
      <div className="container-custom">
        <h1 className="section-title text-center">Contact Us</h1>
        <p className="section-subtitle text-center">
          Get in touch for quotes, inquiries, or technical assistance
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-accent focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-accent focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-accent focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-accent focus:border-transparent"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* SK Industries */}
            <div className="card p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-industrial-accent rounded-lg flex items-center justify-center">
                  <span className="text-industrial-dark font-bold text-xl">SK</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">SK Industries</h2>
                  <p className="text-gray-600">Est. 1981</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-industrial-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <svg className="w-6 h-6 mr-3 text-industrial-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+919422777786" className="hover:text-industrial-accent">
                    +91 94227 77786
                  </a>
                </div>
              </div>
            </div>

            {/* AS Industries */}
            <div className="card p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-industrial-steel rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AS</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">AS Industries</h2>
                  <p className="text-gray-600">Est. 1981</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-industrial-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <svg className="w-6 h-6 mr-3 text-industrial-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+919422777786" className="hover:text-industrial-accent">
                    +91 94227 77786
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="card p-8">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-medium">Monday - Saturday:</span> 9:00 AM - 6:00 PM</p>
                <p><span className="font-medium">Sunday:</span> Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 card overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.5!2d74.73!3d19.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA1JzI0LjAiTiA3NMKwNDMnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
