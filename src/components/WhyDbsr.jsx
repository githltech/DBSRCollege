import React from 'react';

const WhyDbsr = () => {
  const highlights = [
    {
      title: "Modern Infrastructure",
      description: "DBSR Group of Colleges has Best Infrastructure with State-of-the-Art laboratories, Latest Machines and Smart Classrooms with A/V facility.",
      icon: "🏢",
    },
    {
      title: "Sports Facilities",
      description: "Providing Best Sports facilities. Producing National & International Players in Drop Row Ball, Base Ball, Throw Ball, Kabaddi etc.",
      icon: "⚽",
    },
    {
      title: "Academic Excellence",
      description: "Best Engineering Colleges with 31+ Years of Academic Excellence. Highest Chancellor's Awards and Highest Placements in Central India.",
      icon: "📚",
    },
    {
      title: "Record Placements",
      description: "Unbeatable Record Placement of Central India with 1800+ Offers by 40 Companies. Closed Campus only for DBSR Group of Colleges.",
      icon: "🏆",
    },
    {
      title: "Research & Development",
      description: "Best Engineering Institutions with NBA Accreditation & 188+ Ph.D Faculties for Academic Excellence. 191+ Patents filed in the last 3 years.",
      icon: "🔬",
    },
    {
      title: "Campus Amenities",
      description: "Lush Green Campus with Boys & Girls Hostels, 24-hour Security, GYM, Indoor and Outdoor Fields for a BEST Infrastructure campus.",
      icon: "🏕️",
    },
  ];

  return (
    <section className="relative text-white py-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: "linear-gradient(rgba(23, 37, 84, 0.9), rgba(23, 37, 84, 0.9)) ,url('https://dbsrcollege.in/wp-content/uploads/2023/06/headerImgae.jpg')",
          
        }}
        
      >
       <div className="text-center my-6" >
            <h2 className="text-4xl font-bold">WHY DBSR?</h2>
            <p className="text-gray-300 mt-2">Synonymous With Excellence in Higher Education</p>
            <div className="h-1 w-20 bg-orange-500 mx-auto mt-2"></div>
          </div>
 
      </div>


      {/* Content Container */}
    <div className="mt-6">
        <div className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-40 relative z-10">
        {/* Left Side Image */}
        <div className=" flex justify-center mt-10">
          <img
            src="https://dbsrcollege.in/wp-content/uploads/2023/09/banner.jpg"
            alt="DBSR Placement Package"
            className="rounded-lg shadow-lg object-cover w-[40rem] h-full lg:h-[22rem]"
          />
        </div>
          {/* Content Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 px-5">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex flex-col space-x-2">
                <h1 className="text-xl text-center sm:text-left">{highlight.icon}</h1>
                <div className='text-center sm:text-left mt-2'>
                  <h3 className="text-xl font-semibold">{highlight.title}</h3>
                  <p className=" mt-2 text-xs font-semibold text-gray-200">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Wave Background Top and Bottom */}
      {/* <div className="absolute top-0 left-0 w-full h-16 bg-blue-900" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)' }}></div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-blue-900" style={{ clipPath: 'polygon(0 0, 100% 30%, 100% 100%, 0 100%)' }}></div> */}
    </section>
  );
};

export default WhyDbsr;
