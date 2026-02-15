export default function Footer() {
  return (
    <footer className="bg-industrial-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-industrial-accent rounded-lg flex items-center justify-center">
                {/* LOGO PLACEHOLDER */}
                <span className="text-industrial-dark font-bold">SK</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">SK Industries</h3>
                <p className="text-gray-400 text-sm">Since 1981</p>
              </div>
            </div>
            <p className="text-gray-400">
              Leading manufacturer of premium rolling shutter raw materials and precision laser cutting services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-industrial-accent transition-colors">Home</a></li>
              <li><a href="/catalogue" className="text-gray-400 hover:text-industrial-accent transition-colors">Catalogue</a></li>

              <li><a href="/contact" className="text-gray-400 hover:text-industrial-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-400">
              <p>1/8 Savedi Naka</p>
              <p>Manmad Road, Ahmednagar</p>
              <p>Maharashtra 414003</p>
              <p className="pt-2">
                <a href="tel:+919422777786" className="hover:text-industrial-accent transition-colors">
                  +91 94227 77786
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SK Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
