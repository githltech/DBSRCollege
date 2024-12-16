import React from 'react';
import AnanyaBisenImage from "../images/AnanyaBisen.jpg";
import SayaliRathodImage from "../images/SayaliRathod.jpg";
import ShikhaSingAndupeImage from "../images/ShikhaSingAndupe.jpg";

const Testimonials = () => {
  return (
    <div className="testimonials py-10 bg-gray-100 mt-32 lg:px-24">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-semibold">Testimonials</h3>
        <hr className="border-t-4 border-orange-500 w-60  m-auto " />

        <p className="mb-4 pb-2 mb-md-5 pb-md-0">
          
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded-md shadow-lg shadow-pink-100 w-full border border-gray-400">
          <div className="relative mb-4">
            {/* Card Up (Top Section) */}
            <div className="h-32 overflow-hidden rounded-t-lg bg-black"></div>

            {/* Avatar */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 border-4 border-white rounded-full overflow-hidden">
              <img
                src={AnanyaBisenImage}
                alt="Maria Smantha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h4 className="text-xl font-medium text-center mb-2">Ananya Bisen</h4>
          <hr className="border-t-2  border-orange-500 w-40  m-auto mb-4 " />

          <hr />
          <p className="dark-grey-text mt-4 text-center text-sm">
            <i className="fas fa-quote-left pe-2"></i>
            "Ananya’s experience at DBSR College was enriching, with supportive faculty and a nurturing environment for academic and personal growth."
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-6 rounded-md shadow-lg shadow-pink-100 w-full border border-gray-400">
          <div className="relative mb-4">
            {/* Card Up (Top Section) */}
            <div className="h-32 overflow-hidden rounded-t-lg bg-black"></div>

            {/* Avatar */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 border-4 border-white rounded-full overflow-hidden">
              <img
                src={SayaliRathodImage}
                alt="Lisa Cudrow"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h4 className="text-xl font-medium text-center mb-2">Sayali Rathod</h4>
          <hr className="border-t-2  border-orange-500 w-40  m-auto mb-4 " />
          <hr />
          <p className="dark-grey-text mt-4 text-center text-sm">
            <i className="fas fa-quote-left pe-2"></i>
            "Sayali found DBSR College to be an inspiring place, where every class and interaction added value to her future."
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-6 rounded-md shadow-lg shadow-pink-100 w-full border border-gray-400">
          <div className="relative mb-4">
            {/* Card Up (Top Section) */}
            <div className="h-32 overflow-hidden rounded-t-lg bg-black"></div>

            {/* Avatar */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 border-4 border-white rounded-full overflow-hidden">
              <img
                src={ShikhaSingAndupeImage}
                alt="John Smith"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h4 className="text-xl font-medium text-center mb-2">Shikha Singh Andupe</h4>
          <hr className="border-t-2  border-orange-500 w-40  m-auto mb-4 " />
          <hr />
          <p className="dark-grey-text mt-4 text-center text-sm">
            <i className="fas fa-quote-left pe-2"></i>
            "Shikha’s journey at DBSR College was transformative, providing her with the skills and confidence to succeed in her career."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
