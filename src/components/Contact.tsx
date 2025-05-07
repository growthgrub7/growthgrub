import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

interface FormStatus {
  submitting: boolean;
  submitted: boolean;
  error: string | null;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // First try to send email
      const emailResult = await emailjs.send(
        'service_a2u9s5k',
        'template_9bcuxrr',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          school: formData.school,
          message: formData.message,
          to_email: 'growthgrub7@gmail.com'
        },
        'VE3XHhowEOUHy4u4x'
      );

      if (!emailResult) {
        throw new Error('Failed to send email');
      }

      // Then try to save to database
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save message');
      }

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({
        name: '',
        email: '',
        phone: '',
        school: '',
        message: ''
      });
    } catch (error: any) {
      console.error('Error details:', error);
      setStatus({ 
        submitting: false, 
        submitted: false, 
        error: error.message || 'Failed to send message. Please try again.' 
      });
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const infoVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            variants={infoVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-lg shadow-lg p-8 mb-8 lg:mb-0"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <Phone className="text-green-600 mr-4 flex-shrink-0" size={20} />
                <span className="text-gray-700">7036414961</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-green-600 mr-4 flex-shrink-0" size={20} />
                <span className="text-gray-700">growthgrub7@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-green-600 mr-4 flex-shrink-0" size={20} />
                <span className="text-gray-700">Jubilee Enclave, Madhapur, Hyderabad</span>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><Clock className="text-green-600 mr-2" size={18} />Office Hours</h4>
              <ul className="text-gray-700 space-y-2">
                <li className="flex justify-between"><span>Monday - Friday</span><span>8:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span><span>9:00 AM - 1:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
              </ul>
            </div>
          </motion.div>
          <motion.form
            variants={formVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <motion.div variants={inputVariants} className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </motion.div>
            <motion.div variants={inputVariants} className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </motion.div>
            <motion.div variants={inputVariants} className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </motion.div>
            <motion.div variants={inputVariants} className="mb-6">
              <label htmlFor="school" className="block text-gray-700 font-medium mb-2">
                School Name
              </label>
              <input
                type="text"
                id="school"
                name="school"
                value={formData.school}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </motion.div>
            <motion.div variants={inputVariants} className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300"
              disabled={status.submitting}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </motion.button>
            {status.submitted && (
              <div className="mt-4 text-green-600 font-semibold text-center">Thank you for your message! We'll get back to you soon.</div>
            )}
            {status.error && (
              <div className="mt-4 text-red-600 font-semibold text-center">{status.error}</div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;