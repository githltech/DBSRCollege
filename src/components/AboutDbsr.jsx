import React from 'react';

function AboutDbsr() {
  return (
    <>
<section class="grid grid-cols-1  lg:grid-cols-2 py-20  lg:px-32 px-10 bg-black">
  <div class="relative">
    <div class="absolute px-5 top-[-30px] left-[-30px] w-full h-full border-[13px] border-red-600"></div>
    <img
      src="https://dbsrcollege.in/wp-content/uploads/2023/06/headerImgae.jpg"
      alt="Graduation"
      class="relative w-full h-full object-cover shadow-lg"
    />
  </div>

  <div class="mt-8 lg:mt-0 lg:ml-12">
    <p class="text-sm text-red-700 font-semibold mb-2">About our university</p>
    <h2 class="text-3xl font-bold text-white mb-4">Welcome to Dr bhagat Singh Rai institute of technology</h2>
    <p class="text-gray-100 mb-6 text-xs sm:text-sm font-sans">
    "Dr. Bhagat Singh Rai College, established in 2021, is a leading institution of pharmaceutical education located in Seoni. Dr. Bhagat Singh Rai. The institution is dedicated to providing top-notch education and equipping students with the skills and knowledge required to become highly proficient professionals in the field. The college offers a wide range of courses, With cutting-edge infrastructure and highly qualified faculty, the college is committed to delivering a comprehensive and stimulating learning experience to its students. The college's vision is to develop capable and socially responsible person who will play a significant role in advancing industry."
    </p>

  <div class="relative inline-block">
  <a href='/' class="relative bg-red-700 text-white px-4 py-2 font-semibold focus:outline-none overflow-hidden group">
    <span class="absolute inset-0 bg-black transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></span>
    <span class="absolute inset-0 bg-black transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></span>
    <span class="relative z-10">Find out more &rarr;</span>
  </a>
</div>

  </div>
</section>

    </>
  );
};

export default AboutDbsr;