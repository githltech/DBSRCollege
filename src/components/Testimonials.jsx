import React from 'react';

const Testimonials = () => {
  return (
    <div className="testimonials py-10 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-8">What Our Students Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded-md shadow-lg w-full border border-gray-400">
          <img src="https://images.unsplash.com/photo-1604177091072-b7b677a077f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D" alt="Student 1" className="w-20 h-20 rounded-full mx-auto mb-4" />
          <p className="text-gray-700 text-sm mb-4">
            "This institution provided me with the tools and knowledge I needed to succeed. The teachers were always there to support me!"
          </p>
          <h3 className="text-xl font-medium text-center">John Doe</h3>
          <p className="text-center text-gray-700 text-sm">Computer Science</p>
        </div>
        
        {/* Testimonial 2 */}
        <div className="bg-white p-6 rounded-md shadow-lg w-full border border-gray-400">
          <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA3L3dvcmxkZmFjZXNsYWJfcGhvdG9fb2ZfeW91bmdfaW5kaWFuX2dpcmxfaG9sZGluZ19zdHVkZW50X2JhY2twYV81YzlkNmU4Yy04NTNhLTQ2ZDktYmExYS0yNmIzZTI2ZDUyMGQucG5n.png" alt="Student 2" className="w-20 h-20 rounded-full mx-auto mb-4" />
          <p className="text-gray-700 text-sm mb-4">
            "The environment here is great for personal growth. I learned so much, both academically and personally."
          </p>
          <h3 className="text-xl font-medium text-center">Jane Smith</h3>
          <p className="text-center text-gray-700  text-sm">Electrical Engineering</p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-6 rounded-md shadow-lg w-full border border-gray-400">
          <img src="https://media.gettyimages.com/id/1336832660/photo/male-teenage-student-in-yellow-background-stock-photo.jpg?s=612x612&w=gi&k=20&c=axC7-4wp2tcV2kZChENGjoenwbhzVmg3ZCV_kdzxfPw=" alt="Student 3" className="w-20 h-20 rounded-full mx-auto mb-4" />
          <p className="text-gray-700 text-sm mb-4">
            "I had an amazing experience. The staff is very professional and helped me at every step. I highly recommend it."
          </p>
          <h3 className="text-xl font-medium text-center">Alex Johnson</h3>
          <p className="text-center text-gray-700 text-sm">Mechanical Engineering</p>
        </div>

        
      </div>
    </div>
  );
};

export default Testimonials;
