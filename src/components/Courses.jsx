import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";


const destinations = [
  {
    course: "Computer Science",
    description: "Explore the world of programming, data structures, and algorithms.",
    imageUrl: "https://images.shiksha.com/mediadata/images/articles/1676518993phpJtauhM.jpeg",
  },
  {
    course: "Mechanical Engineering",
    description: "Learn about mechanics, thermodynamics, and machine design.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1664910842853-0d643f6db30c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVjaGFuaWNhbCUyMGVuZ2luZWVyaW5nfGVufDB8fDB8fHww",
  },
  {
    course: "Business Administration",
    description: "Get insights into business management, marketing, and finance.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrW4MQklPb0Xv36brqKVD6B8BXKLklwiQHYg&s",
  },
  {
    course: "Civil Engineering",
    description: "Dive into construction, structural design, and environmental studies.",
    imageUrl: "https://media.istockphoto.com/id/1334138265/photo/surveyor-equipment-surveyor-u2019s-telescope-at-construction-site-or-surveying-for-making.jpg?s=612x612&w=0&k=20&c=jNHW2l4oYoYhHfN7DWRlOUterkDEEqVF60EV-1zD7Jg=",
  },
  {
    course: "Electrical Engineering",
    description: "Dive into construction, structural design, and environmental studies.",
    imageUrl: "https://media.istockphoto.com/id/1353480176/photo/a-male-electrician-works-in-a-switchboard-with-an-electrical-connecting-cable.jpg?s=612x612&w=0&k=20&c=E5kmvTyFt4uTDWqOv6n4dl8fF7d2_AZ4PMGh9CmzarI=",
  },
  {
    course: "Artificial intelligence",
    description: "Dive into construction, structural design, and environmental studies.",
    imageUrl: "https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=",
  },
];

const Courses = () => {
  return (
    <div className="bg-[#2B334F] text-white py-10">
      <div className="text-center mb-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Courses</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 overflow-hidden">
        {destinations.map((destination, index) => (
          <div key={index} className="relative bg-white text-black shadow-md shadow-white rounded-md overflow-hidden hover-zoom transition-transform duration-300 fade-in hover:shadow-lg hover:shadow-white">
            <img
              src={destination.imageUrl}
              alt={destination.course}
              className="w-full h-60 object-cover"
            />
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{destination.course}</h3>
              <p className="text-sm text-white">{destination.description}</p>
              <div className="flex items-center gap-1">
                <a href="/" className="text-lime-400 font-medium hover:border-b-[1px] border-lime-400">view Courses</a>
                <FaArrowRightLong className="text-lime-400"/>
              </div>
            </div>
              </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
