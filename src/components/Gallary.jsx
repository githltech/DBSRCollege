import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Gallary1 from "../images/GallrayImages/Gallary1.jpg";
import Gallary2 from "../images/GallrayImages/Gallary2.jpg";
import Gallary3 from "../images/GallrayImages/Gallary3.jpg";
// import Gallary4 from "../images/GallrayImages/Gallary4.jpg";
import Gallary5 from "../images/GallrayImages/Gallary5.jpg";
import Gallary6 from "../images/GallrayImages/Gallary6.jpg";
import Gallary7 from "../images/GallrayImages/Gallary7.jpg";

const initialGalleryItems = [
  { id: 1, image: "https://dbsrcollege.in/wp-content/uploads/2023/09/g9.jpg", alt: "Image 1" },
  { id: 2, image: "https://dbsrcollege.in/wp-content/uploads/2023/09/g8.jpg", alt: "Image 2" },
  { id: 3, image: "https://dbsrcollege.in/wp-content/uploads/2023/09/g7.jpg", alt: "Image 3" },
  { id: 4, image: "https://dbsrcollege.in/wp-content/uploads/2023/09/g6.jpg", alt: "Image 4" },
  { id: 8, image: Gallary1, alt: "Image 8" },
  { id: 5, image: "https://dbsrcollege.in/wp-content/uploads/2023/09/g5.jpg", alt: "Image 5" },
  { id: 6, image: "https://dbsrcollege.in/wp-content/uploads/2023/09/g4.jpg", alt: "Image 6" },
  { id: 7, image: "https://dbsrcollege.in/wp-content/uploads/2023/09/g3.jpg", alt: "Image 7" },
  { id: 8, image: Gallary1, alt: "Image 8" },
];

const additionalGalleryItems = [
  { id: 9, image: Gallary1, alt: "Additional Image 1" },
  { id: 10, image: Gallary2, alt: "Additional Image 2" },
  { id: 11, image: Gallary3, alt: "Additional Image 3" },
  // { id: 12, image: Gallary4, alt: "Additional Image 4" },
  { id: 13, image: Gallary5, alt: "Additional Image 5" },
  { id: 14, image: Gallary6, alt: "Additional Image 6" },
  { id: 15, image: Gallary7, alt: "Additional Image 7" },
];

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState(initialGalleryItems);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleGallery = () => {
    if (isExpanded) {
      setGalleryItems(initialGalleryItems);
    } else {
      setGalleryItems([...initialGalleryItems, ...additionalGalleryItems]);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-black text-white py-10 lg:px-24" id="newGall">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-center mb-8">DBSR Gallery</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 overflow-hidden">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="relative bg-white text-black shadow-md shadow-pink-100 overflow-hidden hover-zoom transition-transform duration-300 fade-in hover:shadow-lg hover:shadow-pink-100"
          >
            <img src={item.image} alt={item.alt} className="w-full h-60 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="p-4">
                <div className="flex items-center gap-1">
                  <a
                    href={item.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lime-400 font-medium hover:border-b-[1px] border-lime-400"
                  >
                    View Image
                  </a>
                  <FaArrowRightLong className="text-lime-400 mt-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={handleToggleGallery}
          className="px-4 py-2 rounded-lg hover:bg-black bg-red-600 duration-500 font-semibold"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Gallery;
