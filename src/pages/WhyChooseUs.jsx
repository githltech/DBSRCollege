import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">Wide Variety of Cars</h3>
            <p>From economy to luxury, we offer a wide selection of rental cars.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">24/7 Customer Support</h3>
            <p>Our team is available to help you with your rental needs anytime.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">Best Price Guarantee</h3>
            <p>Find a better deal? We'll match it with our best price guarantee.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
