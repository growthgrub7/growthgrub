import React from 'react';
import childrenMealsImg from '../assets/children-meals-bg.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            About Growth Grub
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-24 h-1 bg-green-600 mx-auto mb-8 origin-left"
          />
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We're on a mission to revolutionize school food by providing nutritious, 
            delicious Indian meals that kids actually want to eat.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>As an M-Pharmacy graduate with a strong academic foundation and a deep passion for health and nutrition, my journey into the world of children's nutrition began in an unexpected way. After a successful career as a team lead in a reputed organization, I chose to focus on raising my three children - a decision that would later inspire Growth Grub's mission.</motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>Through my journey as a parent, I developed a profound understanding of the importance of balanced meals and the unique nutritional needs of children. This firsthand experience, combined with my pharmaceutical background, gave me a unique perspective on how proper nutrition impacts children's growth, focus, and overall well-being.</motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>Driven by this passion for food and well-being, I founded Growth Grub to provide healthy and balanced breakfast, lunch, and after-school snacks for children in schools. Our goal is simple yet crucial: ensure that kids receive the nourishment they need to stay active, focused, and healthy throughout the day.</motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>By combining scientific knowledge with real-life parental insights, we strive to make wholesome eating both accessible and enjoyable for young learners. Every meal we prepare is a testament to our commitment to children's health and development.</motion.p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <img 
              src={childrenMealsImg} 
              alt="Children enjoying healthy meals" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;