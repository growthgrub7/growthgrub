import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/meals", label: "Meals" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <header
      className="fixed w-full top-0 z-50 transition-all duration-300 bg-green-700"
    >
      <div className="container mx-auto px-0">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 text-white font-medium transition-colors rounded-full hover:bg-white/10 hover:text-yellow-200`}
                style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-yellow-200 focus:outline-none"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/70 backdrop-blur-sm shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 text-white font-medium hover:bg-white/10 rounded-lg transition-colors`}
                style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;