import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Leaf, Target, Award, Users, Dumbbell, BookOpen } from 'lucide-react';
import missionImg from '../assets/mission-photo.jpg'; // Ensure this file exists in assets

const Mission = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-green-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-yellow-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mission Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-16"
        >
          <img src={missionImg} alt="Our Mission Teamwork" className="rounded-xl shadow-xl max-h-96 object-cover w-full md:w-3/4 lg:w-2/3" />
        </motion.div>

        {/* Mission Statement Section */}
        <div className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Three-Fold Mission
            </h2>
            <div className="w-32 h-1 bg-green-600 mx-auto mb-12"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
          >
            {[
              {
                icon: <Brain className="w-14 h-14 text-green-600" />,
                title: "Fuel Young Minds & Bodies",
                description: "Providing the right balance of nutrients to support growth and development"
              },
              {
                icon: <Heart className="w-14 h-14 text-green-600" />,
                title: "Foster Healthy Habits",
                description: "Instilling lifelong healthy eating habits from an early age"
              },
              {
                icon: <Target className="w-14 h-14 text-green-600" />,
                title: "Address Nutritional Gaps",
                description: "Moving beyond one-size-fits-all to meet unique nutritional needs"
              }
            ].map((mission, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-50"
              >
                <div className="flex justify-center mb-6 bg-green-50 p-4 rounded-full w-24 h-24 mx-auto items-center">{mission.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{mission.title}</h3>
                <p className="text-gray-600 text-center">{mission.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Our Values Section */}
        <div className="mb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-32 h-1 bg-green-600 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                icon: <Award className="w-14 h-14 text-green-600" />,
                title: "Trust",
                description: "Building reliable relationships with schools and parents"
              },
              {
                icon: <Leaf className="w-14 h-14 text-green-600" />,
                title: "Transparency",
                description: "Clear communication about ingredients and processes"
              },
              {
                icon: <Users className="w-14 h-14 text-green-600" />,
                title: "Giving Back",
                description: "Contributing to the community and supporting education"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-50"
              >
                <div className="flex justify-center mb-6 bg-green-50 p-4 rounded-full w-24 h-24 mx-auto items-center">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Impact Section */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">The Impact</h2>
            <div className="w-32 h-1 bg-green-600 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                icon: <BookOpen className="w-14 h-14 text-green-600" />,
                title: "Improved Academic Focus",
                description: "Better concentration and learning outcomes"
              },
              {
                icon: <Dumbbell className="w-14 h-14 text-green-600" />,
                title: "Enhanced Sports Performance",
                description: "Optimal energy for physical activities"
              },
              {
                icon: <Brain className="w-14 h-14 text-green-600" />,
                title: "Better Brain Function",
                description: "Improved cognitive development and mental clarity"
              }
            ].map((impact, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-50"
              >
                <div className="flex justify-center mb-6 bg-green-50 p-4 rounded-full w-24 h-24 mx-auto items-center">{impact.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{impact.title}</h3>
                <p className="text-gray-600 text-center">{impact.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission; 