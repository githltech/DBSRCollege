import React, { useState } from 'react';
import Layout from '../../components/Layout';

function Dpharma() {
  const [openAbout, setOpenAbout] = useState(false);
  const [openApply, setOpenApply] = useState(false);
  const [openAdmission, setOpenAdmission] = useState(false);
  const [openEligibility, setOpenEligibility] = useState(false);

  return (
    <>
      <Layout>
      <main
  className="relative grid place-items-center bg-cover bg-center h-[250px]" // Height remains 250px
  style={{
    backgroundImage: 'url("https://img.freepik.com/premium-photo/large-brick-building-with-tower-that-says-university-america_551880-7776.jpg?ga=GA1.1.1589028456.1727074417&semt=ais_hybrid")',
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content Container */}
  <div className="relative z-10 flex justify-center items-center w-full px-6">
    {/* Logo Section on the Left */}
    <div className="absolute left-6">
      <a href="/" className="block">
        <img
          src="https://dbsrcollege.in/wp-content/uploads/2023/03/DBSRlogo_PJ.webp"
          alt="Logo"
          className="w-20 h-20"
        />
      </a>
    </div>

    {/* Text Content Centered */}
    <div className="text-center text-white">
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
        Course Details
      </h1>

      {/* Subheading */}
      <p className="mt-4 text-lg sm:text-xl font-medium leading-snug">
        D Pharma program offers essential pharmacy knowledge, healthcare, and pharmaceuticals.
      </p>

      {/* B Pharma Heading */}
      <h2 className="mt-6 text-xl sm:text-2xl font-semibold text-yellow-400">
        B Pharma
      </h2>
    </div>
  </div>

  {/* Call-to-Action Button */}
  <div className="absolute bottom-4 right-4 z-10">
    <a
      href="/apply"
      className="px-4 py-2 bg-blue-500 text-white text-sm sm:text-base font-semibold rounded hover:bg-blue-600 shadow-lg"
    >
      Apply Now
    </a>
  </div>
</main>



        <div className="wrapper px-4">
          {/* Accordion and other sections remain unchanged */}
          <section className="pt-8 pb-8">
            <div className="flex flex-col sm:flex-row">
              <div className="w-44 sm:w-1/4 mt-8 sm:mt-0 sm:mr-8">
                <div className="mt-8">
                  <a href="#!">
                    <img
                      src="https://www.mpcmbhopal.org/img/model1.jpg"
                      alt="Course Image"
                      className="w-full"
                    />
                  </a>
                </div>
                <div className="mt-8">
                  <ul className="space-y-4">
                    <li>
                      <a href="course-details.php" className="text-blue-500 hover:bg-gray-600 hover:text-white">
                        D Pharma
                      </a>
                    </li>
                    <li>
                      <a href="course-pharmacology.php" className="text-blue-500 hover:text-blue-700">
                        Pharmacology
                      </a>
                    </li>
                    <li>
                      <a href="course-pharmaceutical-analysis.php" className="text-blue-500 hover:text-blue-700">
                        Pharmaceutical Analysis
                      </a>
                    </li>
                    <li>
                      <a href="course-clinical-pharmacy.php" className="text-blue-500 hover:text-blue-700">
                        Clinical Pharmacy
                      </a>
                    </li>
                    <li>
                      <a href="course-medicinal-chemistry.php" className="text-blue-500 hover:text-blue-700">
                        Medicinal Chemistry
                      </a>
                    </li>
                    <li>
                      <a href="course-pharmacognosy.php" className="text-blue-500 hover:text-blue-700">
                        Pharmacognosy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full sm:w-3/4">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-semibold">Diploma in Pharmacy [D Pharma]</h2>
                    <p className="mt-4 text-lg">
                      As an aspirant seeking a D Pharma qualification, you require a rigorous learning experience
                      in a highly supportive environment capable of providing you with skills recognized in the
                      pharmacy industry. Our D Pharma program offers it all.
                    </p>
                  </div>

                  {/* Accordion Sections */}
                  <Accordion
                    title="About D Pharma"
                    isOpen={openAbout}
                    onToggle={() => setOpenAbout(!openAbout)}
                  >
                    <strong>Course Description:</strong>
                    <ul className="list-disc pl-6">
                      <li>
                        Our D Pharma program is a skills-oriented qualification designed for individuals aspiring
                        to work in the pharmaceutical industry.
                      </li>
                    </ul>
                  </Accordion>

                  <Accordion
                    title="How to Apply"
                    isOpen={openApply}
                    onToggle={() => setOpenApply(!openApply)}
                  >
                    <p>Steps to apply...</p>
                  </Accordion>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div className="flex justify-between items-center cursor-pointer" onClick={onToggle}>
        <p className="font-semibold text-lg">{title}</p>
        <i className={`fa ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </div>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
}

export default Dpharma;
