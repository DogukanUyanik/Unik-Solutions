import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-lg shadow-md border-b border-gray-200/50' 
        : 'bg-white/10 backdrop-blur-md'
    }`}>
      <div className="w-full px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            
            <a href="/homepage">
              <span className={`text-4xl font-bold transition-colors duration-300 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300`}>
              NextLine
            </span>
            </a>
            
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">

  <a
                  href="/services"
                  className="text-lg px-5 py-2 rounded-full font-medium text-gray-900 transition-all duration-300 group relative"
                >
                  <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                    Services
                  </span>
                </a>

                <a
                  href="/projects"
                  className="text-lg px-5 py-2 rounded-full font-medium text-gray-900 transition-all duration-300 group relative"
                >
                  <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                    Projecten
                  </span>
                </a>

              <a
                  href="/about"
                  className="text-lg px-5 py-2 rounded-full font-medium text-gray-900 transition-all duration-300 group relative"
                >
                  <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                    Over ons
                  </span>
                </a>

              <a
                  href="/contact"
                  className="text-lg px-5 py-2 rounded-full font-medium text-gray-900 transition-all duration-300 group relative"
                >
                  <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                    Contact
                  </span>
                </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200">
            <div className="px-6 py-4 space-y-3">
              <a href="/projecten" className="block px-4 py-3 text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300">
                Projecten
              </a>
              <a href="/over-ons" className="block px-4 py-3 text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300">
                Over ons
              </a>
              <a href="/contact" className="block px-4 py-3 text-lg text-center text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-300">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
