import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';

function FeaturedProducts() {
  // Get 2 featured products from each category for showcase
  const featuredProducts = categories.map(category => ({
    category: category.name,
    slug: category.slug,
    products: category.products.slice(0, 2)
  }));

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-blue-50 py-8 md:py-16">
      {/* Subtle animated background orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" data-aos="fade-up">
            <h2 className="h2 mb-4">Precision Instruments Showcase</h2>
            <p className="text-xl text-gray-600">Each piece represents the marriage of scientific accuracy and artisanal craftsmanship.</p>
          </div>

          {/* Featured categories grid */}
          <div className="space-y-16">
            {featuredProducts.map((section, sectionIndex) => (
              <div key={section.slug} className="relative" data-aos="fade-up" data-aos-delay={sectionIndex * 100}>
                
                {/* Category header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{section.category}</h3>
                    <p className="text-gray-600">Precision-engineered for excellence</p>
                  </div>
                  <Link 
                    to={`/categories/${section.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    View All
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Products showcase */}
                <div className="grid sm:grid-cols-2 gap-8">
                  {section.products.map((product, productIndex) => (
                    <div 
                      key={product.id} 
                      className="group relative bg-white/40 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/60 hover:border-white/80"
                      data-aos="fade-up" 
                      data-aos-delay={200 + productIndex * 100}
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 via-transparent to-emerald-400/0 group-hover:from-blue-400/10 group-hover:to-emerald-400/10 transition-all duration-500 pointer-events-none"></div>
                      
                      {/* Product image with overlay effect */}
                      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Floating price tag with glass effect */}
                        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md border border-white/50 text-blue-600 font-bold px-3 py-1 rounded-full text-sm shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                          {product.price}
                        </div>
                      </div>
                      
                      {/* Product details */}
                      <div className="p-6 relative z-10">
                        <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                        
                        {/* Showcase badge */}
                        <div className="mt-4 pt-4 border-t border-white/40 flex items-center justify-between">
                          <span className="inline-flex items-center text-xs font-medium bg-gradient-to-r from-blue-50 to-emerald-50 text-blue-700 px-2.5 py-0.5 rounded-full border border-blue-200/50">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            Premium
                          </span>
                          <Link 
                            to={`/categories/${section.slug}`}
                            className="text-xs text-gray-600 hover:text-blue-600 transition-colors font-medium"
                          >
                            View →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
            <Link 
              to="/categories"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Explore All Categories
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
