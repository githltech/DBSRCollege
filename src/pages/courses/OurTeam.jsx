import React, { useState } from "react";
import Layout from "../../components/Layout";

// Importing Images
import AdilImage from "../../images/Adil.jpg";
import AliyaHumaAnsariImage from "../../images/AliyaHumaAnsari.jpg";
import AnanyaBisenImage from "../../images/AnanyaBisen.jpg";
import SandeepBindraImage from "../../images/Sandeepbindra.jpg";
import SayaliRathodImage from "../../images/Sayalirathod.jpg";
import ShailBalaKindarleImage from "../../images/shailbalakindarle.jpg";
import ShailendraKawreImage from "../../images/Shailendrakawre.jpg";
import ShikhaSingAndupeImage from "../../images/shikhasingandupe.jpg";

function OurTeam() {
  const [openAbout, setOpenAbout] = useState(false);
  const [openApply, setOpenApply] = useState(false);
  const [openAdmission, setOpenAdmission] = useState(false);
  const [openEligibility, setOpenEligibility] = useState(false);

  const handleLogin = () => {
    // Functionality for login (applied to Apply Now button)
    console.log("Login functionality triggered");
  };

  const blogs = [
    {
      id: 1,
      category: 'PROFESSOR',
      professorName: 'Dr. Adil',
      designation: 'Professor of Mathematics',
      subject: 'Advanced Calculus',
      image: AdilImage,
    },
    {
      id: 2,
      category: 'PROFESSOR',
      professorName: 'Dr. Aliya Huma Ansari',
      designation: 'Associate Professor of Physics',
      subject: 'Quantum Mechanics',
      image: AliyaHumaAnsariImage,
    },
    {
      id: 3,
      category: 'PROFESSOR',
      professorName: 'Dr. Ananya Bisen',
      designation: 'Assistant Professor of Computer Science',
      subject: 'Data Structures & Algorithms',
      image: AnanyaBisenImage,
    },
    {
      id: 4,
      category: 'PROFESSOR',
      professorName: 'Dr. Sandeep Bindra',
      designation: 'Professor of Chemistry',
      subject: 'Organic Chemistry',
      image: SandeepBindraImage,
    },
    {
      id: 5,
      category: 'PROFESSOR',
      professorName: 'Dr. Sayali Rathod',
      designation: 'Associate Professor of History',
      subject: 'Modern History',
      image: SayaliRathodImage,
    },
    {
      id: 6,
      category: 'PROFESSOR',
      professorName: 'Dr. Shail Bala Kindarle',
      designation: 'Professor of Biology',
      subject: 'Cell Biology',
      image: ShailBalaKindarleImage,
    },
    {
      id: 7,
      category: 'PROFESSOR',
      professorName: 'Dr. Shailendra Kawre',
      designation: 'Professor of Mechanical Engineering',
      subject: 'Thermodynamics',
      image: ShailendraKawreImage,
    },
    {
      id: 8,
      category: 'PROFESSOR',
      professorName: 'Dr. Shikha Sing Andupe',
      designation: 'Professor of English',
      subject: 'World Literature',
      image: ShikhaSingAndupeImage,
    },
  ];

  return (
    <Layout>
      <main
        className="relative grid place-items-center bg-cover bg-center h-[250px]"
        style={{
          backgroundImage: 'url("https://img.freepik.com/premium-photo/large-brick-building-with-tower-that-says-university-america_551880-7776.jpg?ga=GA1.1.1589028456.1727074417&semt=ais_hybrid")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex justify-center items-center w-full px-6">
          <div className="absolute left-6">
            <a href="/" className="block">
              <img
                src="https://dbsrcollege.in/wp-content/uploads/2023/03/DBSRlogo_PJ.webp"
                alt="Logo"
                className="w-20 h-20"
              />
            </a>
          </div>
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              About Our Team
            </h1>
            <p className="mt-4 text-lg sm:text-xl font-medium leading-snug">
              "DBSR College team is dedicated, passionate, and committed to providing quality education and excellence."
            </p>
            <h2 className="mt-6 text-xl sm:text-2xl font-semibold text-yellow-400">
              Connect with Team DBSR
            </h2>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 z-10">
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-blue-500 text-white text-sm sm:text-base font-semibold rounded hover:bg-blue-600 shadow-lg"
          >
            Apply Now
          </button>
        </div>
      </main>
      <div className="py-10 px-4 bg-gray-100 lg:px-24">
        <h2 className="bg-[#2B334F] inline-block mb-4 text-white px-4 py-2 font-semibold sm:text-sm text-xs">
          DBSR Professors
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md overflow-hidden border-2 border-l-0 border-r-0 border-t-0 border-b-red-600 rounded-lg"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.professorName}
                  className="w-full h-[200px] object-contain rounded-t-lg"
                />
                <span className="absolute bottom-[-10px] left-2 bg-red-600 text-white text-xs font-bold px-4 py-1">
                  {blog.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="mt-4 text-lg font-semibold">{blog.professorName}</h3>
                <div className="mt-2 text-gray-500 text-sm">
                  <span className="block">{blog.designation}</span>
                  <span className="block text-gray-600 mt-1">{blog.subject}</span>
                </div>
                <a
                  href="#"
                  className="mt-4 inline-block text-red-700 text-xs font-semibold hover:underline"
                >
                  More Info →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default OurTeam;
