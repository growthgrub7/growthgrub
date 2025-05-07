import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../assets/home.jpeg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
      style={{
        background: `url(${bgImg}) center/cover no-repeat`,
        minHeight: '100vh',
      }}
    >
      {/* Overlay to dim the background image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black backdrop-blur-sm z-0" 
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Nutritious <span className="text-green-400">School Meals</span> <br />
            For Growing Minds
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
          >
            Providing healthy, delicious meals to help children grow stronger everyday
          </motion.p>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 inline-block transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              to="/meals"
              className="bg-white hover:bg-gray-100 text-green-700 font-bold py-3 px-8 rounded-full transition-colors duration-300 inline-block transform hover:scale-105"
            >
              View Our Meals
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;