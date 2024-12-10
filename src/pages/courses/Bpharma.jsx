import React, { useState } from "react";
import Layout from "../../components/Layout";

function Bpharma() {
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
          <header>
            <div className="sticky top-0 z-50 bg-white shadow-md">
             
            </div>
          </header>

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
                      <a
                        href="course-details-bpharma.php"
                        className="text-blue-500 hover:bg-gray-600 hover:text-white"
                      >
                        B Pharma
                      </a>
                    </li>
                    <li>
                      <a
                        href="course-pharmacology.php"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        Pharmacology
                      </a>
                    </li>
                    <li>
                      <a
                        href="course-pharmaceutical-analysis.php"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        Pharmaceutical Chemistry
                      </a>
                    </li>
                    <li>
                      <a
                        href="course-clinical-pharmacy.php"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        Pharmaceutics
                      </a>
                    </li>
                    <li>
                      <a
                        href="course-medicinal-chemistry.php"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        Medicinal Chemistry
                      </a>
                    </li>
                    <li>
                      <a
                        href="course-pharmacognosy.php"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        Pharmacognosy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full sm:w-3/4">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-semibold">
                      Bachelor in Pharmacy [B Pharma]
                    </h2>
                    <p className="mt-4 text-lg">
                      As an aspirant seeking a B Pharma qualification, you require a
                      challenging learning experience in a supportive environment, preparing you
                      for leadership roles in healthcare and research.
                    </p>
                  </div>

                  {/* Accordion 1 - About B Pharma */}
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => setOpenAbout(!openAbout)}
                    >
                      <p className="font-semibold text-lg">About B Pharma</p>
                      <i
                        className={`fa ${
                          openAbout ? "fa-chevron-up" : "fa-chevron-down"
                        }`}
                      />
                    </div>
                    {openAbout && (
                      <div className="mt-4">
                        <strong>Course Description:</strong>
                        <ul className="list-disc pl-6">
                          <li>
                            Our B Pharma program combines practical learning with theoretical
                            knowledge, equipping students for healthcare and research careers.
                          </li>
                        </ul>
                        <strong className="mt-4">Recognitions:</strong>
                        <ul className="list-disc pl-6">
                          <li>
                            The 4-Year, Full-Time B Pharma is a degree program approved by PCI.
                          </li>
                          <li>Affiliated to Barkatullah University, Bhopal.</li>
                        </ul>
                        <p>
                          <strong>Location:</strong> Bhopal
                        </p>
                        <p>
                          <strong>Course Type:</strong> Full-Time
                        </p>
                        <a
                          href="contact.php"
                          className="text-blue-500 hover:text-blue-700"
                        >
                          Apply Now <i className="fa fa-chevron-circle-right"></i>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Accordion 2 - How to Apply */}
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => setOpenApply(!openApply)}
                    >
                      <p className="font-semibold text-lg">How to Apply for B Pharma</p>
                      <i
                        className={`fa ${
                          openApply ? "fa-chevron-up" : "fa-chevron-down"
                        }`}
                      />
                    </div>
                    {openApply && (
                      <div className="mt-4">
                        <strong>To Apply for B Pharma:</strong>
                        <ul className="list-disc pl-6">
                          <li>
                            Candidate should have passed 10+2 with Physics, Chemistry, and
                            Mathematics/Biology as core subjects.
                          </li>
                          <li>
                            Students appearing for 10+2 final exams can apply provisionally.
                          </li>
                          <li>
                            Admissions are based on entrance exams or merit in qualifying exams.
                          </li>
                        </ul>
                        <a
                          href="contact.php"
                          className="text-blue-500 hover:text-blue-700"
                        >
                          Apply Now <i className="fa fa-chevron-circle-right"></i>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Accordion 3 - Admission Process */}
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => setOpenAdmission(!openAdmission)}
                    >
                      <p className="font-semibold text-lg">Admission Process</p>
                      <i
                        className={`fa ${
                          openAdmission ? "fa-chevron-up" : "fa-chevron-down"
                        }`}
                      />
                    </div>
                    {openAdmission && (
                      <div className="mt-4">
                        <strong>The admission process is as follows:</strong>
                        <ul className="list-disc pl-6">
                          <li>Admissions are based on qualifying marks in 10+2.</li>
                          <li>Shortlisted candidates must verify documents and pay fees.</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Accordion 4 - Eligibility & Fees */}
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => setOpenEligibility(!openEligibility)}
                    >
                      <p className="font-semibold text-lg">Eligibility & Fees</p>
                      <i
                        className={`fa ${
                          openEligibility ? "fa-chevron-up" : "fa-chevron-down"
                        }`}
                      />
                    </div>
                    {openEligibility && (
                      <div className="mt-4">
                        <strong>Eligibility Criteria:</strong>
                        <ul className="list-disc pl-6">
                          <li>
                            Candidate must have completed 10+2 with at least 50% marks in PCB/PCM.
                          </li>
                          <li>Reserved category candidates require a minimum of 45%.</li>
                        </ul>
                        <strong className="mt-4">Fees:</strong>
                        <p>
                          The total course fees for the B Pharma program are Rs. 1,80,000/- for
                          the four-year course.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default Bpharma;
