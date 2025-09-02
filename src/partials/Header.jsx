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
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-6">
            <Link to="/" className="block transform hover:scale-105 transition-transform duration-300" aria-label="Stellar Precision">
              <span className="text-xl md:text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-400">Stellar Precision</span>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center text-sm md:text-base">
              <li>
                <Link to="/categories" className="font-medium text-gray-600 hover:text-blue-600 px-3 py-2 transition relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Categories</Link>
              </li>
              {categories.map(c => (
                <li key={c.slug} className="hidden lg:block">
                  <Link to={`/categories/${c.slug}`} className="text-gray-500 hover:text-blue-600 px-3 py-2 transition relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">{c.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
