import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "School Principal",
    image: "https://images.pexels.com/photos/7584538/pexels-photo-7584538.jpeg?auto=compress&cs=tinysrgb&w=1600",
    quote: "Since partnering with Growth Grub, our students are more focused in class and we've seen a notable improvement in overall energy levels throughout the day. The meals are nutritious and the children actually enjoy eating them!"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Parent & PTA Member",
    image: "https://images.pexels.com/photos/6533882/pexels-photo-6533882.jpeg?auto=compress&cs=tinysrgb&w=1600",
    quote: "As a parent, I'm thrilled with the quality of food my children receive at school now. Growth Grub provides balanced meals with fresh ingredients, and my kids come home talking about the delicious lunch they had instead of asking for snacks right away."
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "School Nutritionist",
    image: "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1600",
    quote: "Working with Growth Grub has been phenomenal. Their commitment to nutrition standards while maintaining flavor profiles that appeal to children is impressive. They're truly raising the bar for what school food can be."
  }
];

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, type: 'spring', bounce: 0.18 } },
  exit: { opacity: 0, y: -40, scale: 0.97, transition: { duration: 0.4 } },
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            What People Say
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
            Hear from schools, parents, and nutritionists about their experience with Growth Grub.
          </motion.p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={testimonials[currentIndex].id}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 shadow"
                  >
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-gray-700 italic mb-6 text-lg"
                    >
                      "{testimonials[currentIndex].quote}"
                    </motion.p>
                    <div>
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="font-bold text-gray-900"
                      >
                        {testimonials[currentIndex].name}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-green-600"
                      >
                        {testimonials[currentIndex].role}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-1/2 left-4 -translate-y-1/2"
            >
              <button
                onClick={prevTestimonial}
                className="bg-green-100 hover:bg-green-200 text-green-700 rounded-full p-2 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
            </motion.div>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-1/2 right-4 -translate-y-1/2"
            >
              <button
                onClick={nextTestimonial}
                className="bg-green-100 hover:bg-green-200 text-green-700 rounded-full p-2 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          </div>
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? 'bg-green-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;