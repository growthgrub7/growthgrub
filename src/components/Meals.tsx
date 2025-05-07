import React from 'react';
import { motion } from 'framer-motion';
import lunchImg from '../assets/home.jpeg';
import snackImg from '../assets/after-school-snack.jpg';

const meals = [
  {
    id: 1,
    title: "Healthy Breakfast",
    image: "https://images.pexels.com/photos/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 2,
    title: "Balanced Lunch",
    image: lunchImg
  },
  {
    id: 3,
    title: "After-School Snacks",
    image: snackImg
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      type: 'spring',
      bounce: 0.25,
    },
  },
};

const Meals = () => {
  return (
    <section id="meals" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Nutritious Meals
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
            We create delicious, balanced Indian meals that provide the nutrition children need throughout their school day.
          </motion.p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {meals.map((meal, idx) => (
            <motion.div
              key={meal.id}
              variants={cardVariants}
              whileHover={{ scale: 1.045, boxShadow: "0 8px 32px 0 rgba(34,197,94,0.18)" }}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={meal.image}
                  alt={meal.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{meal.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Meals;