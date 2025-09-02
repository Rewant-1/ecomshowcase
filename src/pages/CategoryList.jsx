import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import { categories } from '../data/products';

function CategoryList() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Our Instrument Categories</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Explore precision-crafted scientific and timekeeping instruments engineered by Stellar Precision.</p>
          </header>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay="150">
            {categories.map((cat, index) => (
              <a key={cat.slug} href={`/categories/${cat.slug}`} className="group block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100" data-aos="fade-up" data-aos-delay={index * 100}>
                
                {/* Category image preview grid */}
                <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <div className="grid grid-cols-2 gap-1 h-full p-2">
                    {cat.products.slice(0,4).map((p, i) => (
                      <img key={p.id} src={p.image} alt={p.name} className={`object-cover rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-700 ${i === 0 ? 'col-span-2 h-full' : 'h-full'}`} />
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur text-blue-600 font-semibold px-3 py-1.5 rounded-full text-sm shadow-lg">
                    {cat.products.length} items
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors duration-300">{cat.name}</h2>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{cat.description}</p>
                  <div className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full inline-block">
                    {cat.tagline}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CategoryList;
