import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-green-700 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-green-200 mb-6">
              Providing nutritious, delicious meals to help children thrive in school and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-300 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-green-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-green-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/meals" className="text-green-200 hover:text-white transition-colors">Our Meals</Link></li>
              <li><Link to="/testimonials" className="text-green-200 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-green-200 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/meals" className="text-green-200 hover:text-white transition-colors">School Lunches</Link></li>
              <li><Link to="/contact" className="text-green-200 hover:text-white transition-colors">Nutrition Consultation</Link></li>
              <li><Link to="/meals" className="text-green-200 hover:text-white transition-colors">Menu Planning</Link></li>
              <li><Link to="/meals" className="text-green-200 hover:text-white transition-colors">Special Dietary Options</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-300 mr-2">Address:</span>
                <span className="text-green-200">Jubilee Enclave, Madhapur, Hyderabad</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-2">Phone:</span>
                <span className="text-green-200">7036414961</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-2">Email:</span>
                <span className="text-green-200">growthgrub7@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-200 mb-4 md:mb-0">
              &copy; {currentYear} Growth Grub. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-green-200 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-green-200 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="text-green-200 hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;