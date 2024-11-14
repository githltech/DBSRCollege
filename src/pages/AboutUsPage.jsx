import React from 'react';
import Layout from '../components/Layout';

const features = [
  { title: "Flexibility", description: "Interdum odio litora porttitor vestibulum si volutpat sociosqu. Ultrices consequat sed parturient mi vestibulum." },
  { title: "Quality", description: "Interdum odio litora porttitor vestibulum si volutpat sociosqu. Ultrices consequat sed parturient mi vestibulum." },
  { title: "Global", description: "Interdum odio litora porttitor vestibulum si volutpat sociosqu. Ultrices consequat sed parturient mi vestibulum." },
  { title: "Expertise", description: "Interdum odio litora porttitor vestibulum si volutpat sociosqu. Ultrices consequat sed parturient mi vestibulum." },
  { title: "Support", description: "Interdum odio litora porttitor vestibulum si volutpat sociosqu. Ultrices consequat sed parturient mi vestibulum." },
  { title: "Certified", description: "Interdum odio litora porttitor vestibulum si volutpat sociosqu. Ultrices consequat sed parturient mi vestibulum." },
];

const AboutUsPage = () => {
  return (
   <Layout>
    <>
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96 lg:h-[35rem]" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1697729447666-c39f50d595ea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwY29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D')" }}>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex flex-col justify-center items-center text-center">
          <span className="text-sm uppercase text-red-500 bg-white border-gray-200 p-1 font-semibold tracking-widest mb-2">About Campus</span>
          <h1 className=" text-2xl sm:text-4xl text-white font-semibold">Welcome To Edupreme University <br /> School Of Education</h1>
          <p className="text-white mt-4 max-w-xl mx-auto text-xs sm:text-xl">
            Our mission is to prepare education leaders and innovators who will change the world by expanding opportunities and outcomes for learners everywhere.
          </p>
        </div>
      </div>

      {/* History Section */}
      <div className="flex flex-col md:flex-row items-center px-6 py-16 md:space-x-8">
        <img
          src="https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/berlin-city-view-2023-11-27-05-20-37-utc-2.jpg"
          alt="Campus History"
          className="w-full md:w-1/2 h-96 object-cover shadow-lg mb-8 md:mb-0"
        />
        <div className="md:w-1/2">
            <h1 className="text-red-500 text-sm">About Campus</h1>
        <h2 className="text-3xl font-semibold mb-2">Welcome to Dr bhagat Singh Rai institute of technology</h2>
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

      {/* Statistics Section */}
      <div className="bg-gray-100 py-12">
        <div className="flex justify-around text-center px-4">
          <div>
            <span className=" text-2xl sm:text-5xl font-bold text-[#2B334F]">#32</span>
            <p className="text-gray-900 text-xs sm:text-2xl font-semibold pt-3 ">World's Best Education Program</p>
          </div>
          <div>
            <span className=" text-2xl sm:text-5xl font-bold text-[#2B334F]">99%</span>
            <p className="text-gray-900 text-xs sm:text-2xl font-semibold pt-3 ">Receive Multiyear Fellowships</p>
          </div>
          <div>
            <span className=" text-2xl sm:text-5xl font-bold text-[#2B334F]">87%</span>
            <p className="text-gray-900 text-xs sm:text-2xl font-semibold pt-3 ">Freshman Graduation Rate</p>
          </div>
          <div>
            <span className=" text-2xl sm:text-5xl font-bold text-[#2B334F]">1.5M</span>
            <p className="text-gray-900 text-xs sm:text-2xl font-semibold pt-3 ">Undergrads from the State</p>
          </div>
        </div>
      </div>

      {/* why dbsr section */}

      <section className="py-10 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Why choose DBSR University?</h2>
      </div>

      <div className="container mx-auto px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start bg-[#2B334F] text-white p-4 shadow-md">
            <div className="flex-shrink-0">
              <div className="rounded-full border-2 border-yellow-500 p-1">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 15l-3.5-3.5 1.41-1.41L10 12.17l5.09-5.09L16.5 8.5 10 15z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-sm mt-2 text-gray-200">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
    </>
   </Layout>
  );
};

export default AboutUsPage;
