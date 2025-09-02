import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import { getCategory } from '../data/products';

function CategoryPage() {
  const { slug } = useParams();
  const category = getCategory(slug);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {!category && (
            <div className="text-center py-32">
              <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
              <Link to="/categories" className="text-blue-600 hover:underline">Back to categories</Link>
            </div>
          )}
          {category && (
            <div>
              <div className="mb-10" data-aos="fade-up">
                <Link to="/categories" className="text-sm text-blue-600 hover:underline">← All Categories</Link>
                <h1 className="text-4xl font-extrabold tracking-tight mt-2 mb-3">{category.name}</h1>
                <p className="text-gray-600 max-w-3xl">{category.description}</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay="150">
                {category.products.map((prod, index) => (
                  <div key={prod.id} className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden" data-aos="fade-up" data-aos-delay={index * 50}>
                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      <img src={prod.image} alt={prod.name} className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Price overlay */}
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur text-blue-600 font-bold px-3 py-1.5 rounded-full text-sm shadow-lg">
                        {prod.price}
                      </div>
                      
                      {/* Category badge */}
                      <div className="absolute bottom-4 left-4 bg-black/20 backdrop-blur text-white px-2.5 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {category.name}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h2 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">{prod.name}</h2>
                      <p className="text-sm text-gray-600 flex-grow leading-relaxed">{prod.description}</p>
                      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="inline-flex items-center text-xs font-medium bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full">
                          <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                          </svg>
                          Premium
                        </span>
                        <div className="flex items-center text-xs text-gray-500">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Showcase
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CategoryPage;
