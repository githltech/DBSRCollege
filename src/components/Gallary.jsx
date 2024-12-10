import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";


const galleryItems = [
  { id: 1, image: "https://dbsrcollege.in/wp-content/uploads/2023/09/g9.jpg", alt: "Image 1" },
  { id: 2, image: "https://dbsrcollege.in/wp-content/uploads/2023/09/g8.jpg", alt: "Image 2" },
  { id: 3, image: "https://dbsrcollege.in/wp-content/uploads/2023/09/g7.jpg", alt: "Image 3" },
  { id: 4, image: "https://dbsrcollege.in/wp-content/uploads/2023/09/g6.jpg", alt: "Image 4" },
  { id: 5, image: "https://dbsrcollege.in/wp-content/uploads/2023/09/g5.jpg", alt: "Image 5" },
  { id: 6, image: "https://dbsrcollege.in/wp-content/uploads/2023/09/g4.jpg", alt: "Image 6" },
  { id: 7, image: "https://dbsrcollege.in/wp-content/uploads/2023/09/g3.jpg", alt: "Image 7" },
  { id: 8, image: "https://dbsrcollege.in/wp-content/uploads/2023/09/g2.jpg", alt: "Image 8" },



  // Add more items as necessary
];

const Gallery = () => {
  return (
    <div className="bg-[#2B334F] text-white py-10 lg:px-24">
      <div className="text-center mb-8">
      <h2 className="text-3xl font-semibold text-center mb-8">DBSR Gallary</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 overflow-hidden">
        {galleryItems.map((item, index) => (
          <div key={index} className="relative bg-white text-black shadow-md shadow-pink-100 overflow-hidden hover-zoom transition-transform duration-300 fade-in hover:shadow-lg hover:shadow-pink-100">
            <img
              src={item.image}
              className="w-full h-60 object-cover"
            />
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-4">
              <div className="flex items-center gap-1">
                <a href="/" className="text-lime-400 font-medium hover:border-b-[1px] border-lime-400">view Image</a>
                <FaArrowRightLong className="text-lime-400 mt-1"/>
              </div>
            </div>
              </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
