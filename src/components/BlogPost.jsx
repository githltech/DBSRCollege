// src/components/BlogPost.jsx
import React from 'react';

const BlogPost = ({ title, image, description, date }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group transition-all duration-300 transform hover:scale-105 ">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-80 transition-opacity"
      />
      <div className="p-6 bg-gray-300">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{date}</p>
        <p className="text-base text-gray-700 mb-4">{description}</p>
        <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogPost;
