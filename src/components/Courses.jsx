import React, { useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const courses = [
  {
    icon: "fa-network-wired",
    title: "Artificial Intelligence",
    description: "Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    icon: "fa-laptop-code",
    title: "Computer Science",
    description: "Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    icon: "fa-database",
    title: "Data Science",
    description: "Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    icon: "fa-robot",
    title: "Automation And Robotics",
    description: "Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    icon: "fa-bolt",
    title: "Electrical Engineering",
    description: "Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    icon: "fa-cogs",
    title: "Mechanical Engineering",
    description: "Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    icon: "fa-lock",
    title: "Cyber Security",
    description: "Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore.",
  },
  
];

const Courses = () => {
  const scrollRef = useRef(null);

  // Scroll left and right functions
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="relative bg-cover bg-center  text-white h-96" style={{ backgroundImage: "url('https://templates.envytheme.com/unco/default/assets/images/banner/banner-img-1.jpg')" }}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-90"></div>

      {/* Content */}
      <div className="z-10 relative max-w-5xl mx-auto h-full flex flex-col justify-center">
        <div className="">
         <div className="px-4">
         <h2 className="text-4xl font-bold mt-52">Browse courses by <br /> study area</h2>
          <p className="sm:my-4 mb-20 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br className="hidden sm:block" /> tempor incididunt ut labore et dolore magna</p>

         </div>
           {/* Scroll Buttons */}
          <div className="my-4">
          <div className="absolute inset-y-0  right-14 top-4 sm:bottom-32 flex items-center">
            <button
              onClick={scrollLeft}
              className="p-2 bg-white shadow-lg text-black hover:bg-red-600 hover:text-white duration-500 focus:outline-none"
            >
              <i className="fas fa-arrow-left"></i>
            </button>
          </div>
          <div className="absolute inset-y-0 right-4  top-4 sm:bottom-32 flex items-center">
            <button
              onClick={scrollRight}
              className="p-2 bg-white shadow-lg text-black hover:bg-red-600 hover:text-white duration-500 focus:outline-none"
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          </div>
        </div>

        {/* Courses Section with Scroll */}
        <div className="relative ">
          <div className="flex overflow-x-auto scrollbar-hide space-x-4 pb-6 px-4" ref={scrollRef}>
            {courses.map((course, index) => (
              <div key={index} className="bg-white text-black hover:bg-red-800 hover:text-white duration-500 p-6 w-60 flex-shrink-0 shadow-lg">
                <div className="flex justify-center items-center mb-4 text-4xl text-blue-900">
                  <i className={`fas ${course.icon}`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-xs mb-4">{course.description}</p>
                <a href="#" className=" font-semibold hover:underline">
                  Find out more <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            ))}
          </div>

         
        </div>
      </div>
    </section>
  );
};



export default Courses;



// import React from "react";
// import { FaArrowRightLong } from "react-icons/fa6";


// const destinations = [
//   {
//     course: "Computer Science",
//     description: "Explore the world of programming, data structures, and algorithms.",
//     imageUrl: "https://images.shiksha.com/mediadata/images/articles/1676518993phpJtauhM.jpeg",
//   },
//   {
//     course: "Mechanical Engineering",
//     description: "Learn about mechanics, thermodynamics, and machine design.",
//     imageUrl: "https://plus.unsplash.com/premium_photo-1664910842853-0d643f6db30c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVjaGFuaWNhbCUyMGVuZ2luZWVyaW5nfGVufDB8fDB8fHww",
//   },
//   {
//     course: "Business Administration",
//     description: "Get insights into business management, marketing, and finance.",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrW4MQklPb0Xv36brqKVD6B8BXKLklwiQHYg&s",
//   },
//   {
//     course: "Civil Engineering",
//     description: "Dive into construction, structural design, and environmental studies.",
//     imageUrl: "https://media.istockphoto.com/id/1334138265/photo/surveyor-equipment-surveyor-u2019s-telescope-at-construction-site-or-surveying-for-making.jpg?s=612x612&w=0&k=20&c=jNHW2l4oYoYhHfN7DWRlOUterkDEEqVF60EV-1zD7Jg=",
//   },
//   {
//     course: "Electrical Engineering",
//     description: "Dive into construction, structural design, and environmental studies.",
//     imageUrl: "https://media.istockphoto.com/id/1353480176/photo/a-male-electrician-works-in-a-switchboard-with-an-electrical-connecting-cable.jpg?s=612x612&w=0&k=20&c=E5kmvTyFt4uTDWqOv6n4dl8fF7d2_AZ4PMGh9CmzarI=",
//   },
//   {
//     course: "Artificial intelligence",
//     description: "Dive into construction, structural design, and environmental studies.",
//     imageUrl: "https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=",
//   },
// ];

// const Courses = () => {
//   return (
//     <div className="bg-[#2B334F] text-white py-10">
//       <div className="text-center mb-8">
//       <h2 className="text-3xl font-semibold text-center mb-8">Our Courses</h2>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 overflow-hidden">
//         {destinations.map((destination, index) => (
//           <div key={index} className="relative bg-white text-black shadow-md shadow-white rounded-md overflow-hidden hover-zoom transition-transform duration-300 fade-in hover:shadow-lg hover:shadow-white">
//             <img
//               src={destination.imageUrl}
//               alt={destination.course}
//               className="w-full h-60 object-cover"
//             />
//             <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//             <div className="p-4">
//               <h3 className="text-lg font-semibold text-white">{destination.course}</h3>
//               <p className="text-sm text-white">{destination.description}</p>
//               <div className="flex items-center gap-1">
//                 <a href="/" className="text-lime-400 font-medium hover:border-b-[1px] border-lime-400">view Courses</a>
//                 <FaArrowRightLong className="text-lime-400"/>
//               </div>
//             </div>
//               </div>
            
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Courses;


