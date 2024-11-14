import React from 'react';

function AboutDbsr() {
  return (
    <>
     <div className="flex flex-col md:flex-row items-center px-4 py-10 md:space-x-8">
        <img
          src="https://dbsrcollege.in/wp-content/uploads/2023/06/headerImgae.jpg"
          alt="Campus History"
          className="w-full md:w-1/2 h-96 object-cover shadow-lg mb-8 md:mb-0"
        />
        <div className="md:w-1/2">
        <h1 className="text-red-500 text-sm border-b-[1px] inline-block border-b-blue-500">About Campus</h1>
          <h2 className="text-3xl font-semibold">Welcome to Dr bhagat Singh Rai institute of technology</h2>
          <p className="text-sm text-blue-600 mb-2">Established since 2021</p>
          <p className="text-gray-700 leading-relaxed mb-2">
          "Dr. Bhagat Singh Rai College, established in 2021, is a leading institution
           of pharmaceutical education located in Seoni. Dr. Bhagat Singh Rai. The 
           institution is dedicated to providing top-notch education and equipping students with the skills and knowledge required to become highly proficient professionals in the field. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
          The college offers a wide range of courses, With cutting-edge infrastructure and highly qualified faculty, the college is committed to delivering a comprehensive and stimulating learning experience to its students. The college's vision is to develop capable and socially responsible person who will play a significant role in advancing industry."


          </p>
          <button className="bg-red-500 text-white px-4 py-2 font-semibold">Discover More</button>
        </div>
      </div>
    </>
  );
};

export default AboutDbsr;