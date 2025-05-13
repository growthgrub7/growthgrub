import React from 'react';
import childrenMealsImg from '../assets/children-meals-bg.jpg';
import { motion } from 'framer-motion';

const About = () => {
  // Animation variants for staggered paragraph animations
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6
      }
    })
  };

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-green-50 rounded-full filter blur-3xl opacity-30 translate-x-1/2"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-yellow-50 rounded-full filter blur-3xl opacity-30 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            About Growth Grub
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-32 h-1 bg-green-600 mx-auto mb-8 origin-left"
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative inline-block">
              Our Story
              <span className="absolute bottom-0 left-0 w-full h-1 bg-green-400 transform -translate-y-1"></span>
            </h3>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <motion.p custom={1} variants={paragraphVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                As an M-Pharmacy graduate with a strong academic foundation and a deep passion for health and nutrition, my journey into the world of children's nutrition began in an unexpected way. After a successful career as a team lead in a reputed organization, I chose to focus on raising my three children - a decision that would later inspire Growth Grub's mission.
              </motion.p>
              <motion.p custom={2} variants={paragraphVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                Through my journey as a parent, I developed a profound understanding of the importance of balanced meals and the unique nutritional needs of children. This firsthand experience, combined with my pharmaceutical background, gave me a unique perspective on how proper nutrition impacts children's growth, focus, and overall well-being.
              </motion.p>
              <motion.p custom={3} variants={paragraphVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                Driven by this passion for food and well-being, I founded Growth Grub to provide healthy and balanced breakfast, lunch, and after-school snacks for children in schools. Our goal is simple yet crucial: ensure that kids receive the nourishment they need to stay active, focused, and healthy throughout the day.
              </motion.p>
              <motion.p custom={4} variants={paragraphVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                By combining scientific knowledge with real-life parental insights, we strive to make wholesome eating both accessible and enjoyable for young learners. Every meal we prepare is a testament to our commitment to children's health and development.
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              {/* Decorative elements for image */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-lg transform -rotate-3 z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-100 rounded-lg transform rotate-3 z-0"></div>
              
              <img 
                src={childrenMealsImg} 
                alt="Children enjoying healthy meals" 
                className="w-full h-auto rounded-xl shadow-lg relative z-10"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Signature and Why Choose Growth Grub Section */}
        <div className="mt-16">
          <div className="mb-8 text-left">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="block text-sm font-medium text-gray-700"
            >
              Founder,
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="block text-base font-semibold text-green-700"
            >
              Suchitra
            </motion.span>
          </div>
          
          <div className="mb-20">
            <motion.h2 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center"
            >
              Why Choose Growth Grub?
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: <svg xmlns='http://www.w3.org/2000/svg' className='w-12 h-12 text-green-600 mx-auto' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' /></svg>,
                  title: "Diverse Meal Options",
                  description: "Varied and exciting menu options to suit every taste"
                },
                {
                  icon: <svg xmlns='http://www.w3.org/2000/svg' className='w-12 h-12 text-green-600 mx-auto' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 17v-2a4 4 0 018 0v2' /></svg>,
                  title: "Protein Balance",
                  description: "Carefully balanced protein content for optimal growth"
                },
                {
                  icon: <svg xmlns='http://www.w3.org/2000/svg' className='w-12 h-12 text-green-600 mx-auto' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' /></svg>,
                  title: "Whole Natural Ingredients",
                  description: "Using only the finest natural ingredients"
                },
                {
                  icon: <svg xmlns='http://www.w3.org/2000/svg' className='w-12 h-12 text-green-600 mx-auto' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3' /></svg>,
                  title: "Good Nutrition",
                  description: "Expertly crafted meals for maximum nutritional value"
                }
              ].map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.1 * index,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-50"
                >
                  <div className="flex justify-center mb-6 bg-green-50 p-4 rounded-full w-24 h-24 mx-auto items-center">
                    {reason.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{reason.title}</h3>
                  <p className="text-gray-600 text-center">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;