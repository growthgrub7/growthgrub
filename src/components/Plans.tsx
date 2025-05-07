import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    id: 1,
    name: "Standard Plan",
    price: "$4.99",
    description: "Our most popular plan for schools",
    features: [
      "Nutritionally balanced meals",
      "Locally sourced ingredients",
      "Vegetarian options available",
      "Weekly rotating menu",
      "Allergy information provided"
    ]
  },
  {
    id: 2,
    name: "Premium Plan",
    price: "$6.99",
    description: "Enhanced options with greater variety",
    features: [
      "All Standard Plan features",
      "Increased menu variety",
      "Special seasonal meals",
      "Organic ingredients when possible",
      "Dietary customization options",
      "Nutrition education materials"
    ]
  },
  {
    id: 3,
    name: "Custom Plan",
    price: "Custom",
    description: "Tailored to your school's specific needs",
    features: [
      "All Premium Plan features",
      "Fully customized menu",
      "Special dietary accommodations",
      "On-site chef options",
      "Parent-student feedback integration",
      "Branded packaging available"
    ]
  }
];

const Plans = () => {
  return (
    <section id="plans" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Meal Plans</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect meal plan to meet your school's needs and budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`bg-white rounded-xl overflow-hidden shadow-lg border transition-transform duration-300 hover:-translate-y-2 ${plan.id === 2 ? 'border-green-500 relative' : 'border-gray-200'}`}
            >
              {plan.id === 2 && (
                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-green-600">{plan.price}</span>
                  {plan.id !== 3 && <span className="text-gray-600"> / meal</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-8 pb-8 pt-2">
                <a 
                  href="#contact" 
                  className={`w-full inline-block text-center py-3 px-6 rounded-full font-bold transition-colors duration-300 ${
                    plan.id === 2 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-green-100 hover:bg-green-200 text-green-700'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;