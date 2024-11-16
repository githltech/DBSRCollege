import React, { useRef ,useEffect} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const teamMembers = [
  {
    name: "Dr. Kavita Burse",
    title: "Director - Corporate Relations",
    qualifications: "B.Tech from SGSITS, M.Tech, Ph.D from NIT, Bhopal",
    image: "https://technocratsgroup.edu.in/wp-content/themes/technocratsgroup/assets/images/our-team/alka-awasthi.webp",
  },
  {
    name: "Prof. Nishchal Kaushal",
    title: "Addl. Director - Corporate Relations",
    qualifications: "B.Tech-NIT, M.Tech-NIT Bhopal | Ex: Daewoo, Ex-Honda",
    image: "https://technocratsgroup.edu.in/wp-content/themes/technocratsgroup/assets/images/our-team/arun-pandey.webp",
  },
  {
    name: "Dr. Shashi Kumar Jain",
    title: "Director",
    qualifications: "M.Tech, Ph.D in Mechanical Engineering",
    image: "https://technocratsgroup.edu.in/wp-content/themes/technocratsgroup/assets/images/our-team/surabhi-mam.webp",
  },
  {
    name: "Dr. Anurag Choubey",
    title: "Director",
    qualifications: "B.Tech from DBSR, M.Tech, Ph.D from SIRT, Bhopal.",
    image: "https://technocratsgroup.edu.in/wp-content/themes/technocratsgroup/assets/images/our-team/saurabh-sir.webp",
  },
  {
    name: "Dr. Sanjay Sharma",
    title: "Director",
    qualifications: "B.Tech from DBSR, M.Tech, Ph.D from SAGE, Bhopal",
    image: "https://technocratsgroup.edu.in/wp-content/themes/technocratsgroup/assets/images/our-team/anurag-choubey.webp",
  },
  {
    name: "Dr. Kavita Burse",
    title: "Director Corporate Relations",
    qualifications: "B.E., M.Tech., Ph.D.",
    image: "https://technocratsgroup.edu.in/wp-content/themes/technocratsgroup/assets/images/our-team/kavita-burse.webp",
  },
  {
    name: "Dr. Shashi Kumar",
    title: "Director Dbsr",
    qualifications: "B.E., M.Tech., Ph.D.",
    image: "https://technocratsgroup.edu.in/wp-content/themes/technocratsgroup/assets/images/our-team/shashi-kumar-jain.webp",
  },
  {
    name: "Dr. Viksas Gupta",
    title: "Director Dbsr",
    qualifications: "B.E., M.Tech., Ph.D.",
    image: "https://technocratsgroup.edu.in/wp-content/themes/technocratsgroup/assets/images/our-team/vikas-gupta.webp",
  },
  {
    name: "Dr. Sanjeev Sharma",
    title: "Director Dbsr",
    qualifications: "B.E., M.Tech., Ph.D.",
    image: "https://technocratsgroup.edu.in/wp-content/themes/technocratsgroup/assets/images/our-team/sanjeev-sharma.webp",
  },
  {
    name: "Dr. Shashi Kumar",
    title: "Director Dbsr",
    qualifications: "B.E., M.Tech., Ph.D.",
    image: "https://technocratsgroup.edu.in/wp-content/themes/technocratsgroup/assets/images/our-team/shashi-kumar-jain.webp",
  },
];

const facultyDetails = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="py-10 bg-gray-200">
      <div className="text-center">
        <h2 className="text-orange-600 font-semibold px-4">
          YOUR COLLEGE JOURNEY, OUR COMMITMENT: GET TO KNOW THE TEAM SHAPING YOUR FUTURE
        </h2>
        <h1 className="text-4xl font-bold mt-2">OUR TEAM</h1>
        <div className="h-1 w-20 bg-orange-500 mx-auto mt-4 mb-8"></div>

        <div className="relative flex items-center justify-center">
          <button
            onClick={scrollLeft}
            className="hidden sm:block absolute left-24 p-2 bg-gray-800 text-white shadow-lg hover:bg-gray-700"
          >
            <FaArrowLeft />
          </button>

          {/* Centering Container */}
          <div className="overflow-hidden w-full max-w-5xl mx-auto flex justify-center">
            <div
              ref={scrollRef}
              className="flex space-x-4 overflow-x-auto scrollbar-hide py-4"
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="min-w-[220px] max-w-[220px] bg-white shadow-red-100 p-6 shadow-lg text-center mx-auto border border-gray-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-28 mx-auto rounded-lg border border-gray-200 object-cover mb-4 hover:scale-110 duration-700"
                  />
                  <h3 className="text-lg font-semibold h-12">{member.name}</h3>
                  <p className="text-sm text-blue-600 h-10">{member.title}</p>
                  <p className="text-sm text-gray-500 mt-2">{member.qualifications}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollRight}
            className="hidden sm:block absolute right-24 p-2 bg-gray-800 text-white shadow-lg hover:bg-[#2B334F]"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
   
  );
};

export default facultyDetails;
