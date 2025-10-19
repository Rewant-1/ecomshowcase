import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className="fixed top-0 left-0 right-0 z-30 flex justify-center pt-4 md:pt-6 transition duration-300 ease-in-out">
      <div className={`w-11/12 md:w-4/5 lg:w-3/4 rounded-xl md:rounded-2xl transition duration-300 ease-in-out ${
        !top 
          ? 'bg-white/40 backdrop-blur-xl shadow-xl border border-white/20' 
          : 'bg-white/20 backdrop-blur-md border border-white/10'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-3 md:mr-4">
            <Link to="/" className="block transform hover:scale-105 transition-transform duration-300" aria-label="Stellar Precision">
              <span className="text-lg md:text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-400">Stellar Precision</span>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center text-xs md:text-sm gap-1 md:gap-2">
              <li>
                <Link to="/categories" className="font-medium text-gray-600 hover:text-blue-600 px-2 md:px-2.5 py-1.5 transition relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Categories</Link>
              </li>
              {categories.map(c => (
                <li key={c.slug} className="hidden lg:block">
                  <Link to={`/categories/${c.slug}`} className="text-gray-500 hover:text-blue-600 px-2 md:px-2.5 py-1.5 transition relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">{c.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </div>
    </header>
  );
}

export default Header;
