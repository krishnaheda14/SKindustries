export default function Categories() {
  const categories = [
    {
      title: '6" Patti Designs',
      description: 'Heavy-duty designs for maximum security',
      image: '/images/products/6-plain-patti(jumbo).png',
    },
    {
      title: '5" Patti Designs',
      description: 'Perfect balance of strength and aesthetics',
      image: '/images/products/5-plain-patti(ganesh-plain).png',
    },
    {
      title: '4" Patti Designs',
      description: 'Versatile options for standard applications',
      image: '/images/products/4-vikas-plain.png',
    },
    {
      title: '3" Patti Designs',
      description: 'Compact designs with elegant profiles',
      image: '/images/products/3-regular-super-round.png',
    },
    {
      title: 'Laser Cutting',
      description: 'Precision cutting services for custom designs',
      image: '/images/gallery/gallery-page-2.jpg',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center">Our Product Range</h2>
        <p className="section-subtitle text-center">
          Comprehensive selection of rolling shutter raw materials
        </p>

        <div className="text-center mt-6 mb-8">
          <a href="/catalogue" className="inline-block btn-primary px-6 py-3 rounded-lg text-black font-bold">
            View Products
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="card group fade-in-up scale-in" style={{ animationDelay: `${index * 0.12}s` }}>
              <div className="aspect-video overflow-hidden bg-gray-200">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-black">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
