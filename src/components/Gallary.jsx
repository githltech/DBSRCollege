import React from "react";

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
    <div className="py-10 px-4 bg-[#2B334F]">
        <h2 className=" bg-blue-600 inline-block mb-4 text-white px-4 py-2 font-semibold sm:text-sm text-xs">DBSR gallary</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">View Image</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
