export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-industrial-steel to-industrial-dark text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact us today for quotes, product inquiries, or technical assistance. Our team is ready to help you find the perfect solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/919422777786"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center"
          >
            WhatsApp Us
          </a>
          <a href="/contact" className="btn-secondary text-center">
            Contact Form
          </a>
        </div>
      </div>
    </section>
  )
}
