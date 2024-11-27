import React,{useState} from 'react'
import Layout from '../../components/Layout'

function Dpharma() {

  const [openAbout, setOpenAbout] = useState(false);
  const [openApply, setOpenApply] = useState(false);
  const [openAdmission, setOpenAdmission] = useState(false);
  const [openEligibility, setOpenEligibility] = useState(false);

  return (
    <>
    <Layout>

  
  


<main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-3 lg:px-8">
  
  <div class="text-center flex space-x-5 ">
  <div className="flex justify-start items-center ">
      <a href="/">
        <img src="https://dbsrcollege.in/wp-content/uploads/2023/03/DBSRlogo_PJ.webp" alt="Logo" className="w-52 h-52" />
      </a>
    </div>

    <div className="">
    <p class="text-base font-semibold text-indigo-600"></p>
    <h1 class="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Course Details</h1>
    <p class="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8"><p>
    "D Pharma program offers essential pharmacy knowledge, healthcare and pharmaceuticals."
        </p></p>
    </div>
   
    <div class="mt-10 flex items-center justify-center gap-x-6">
     
    <i className="fa fa-map-marker text-yellow-400" />
      <a href="#" class="text-sm font-semibold text-gray-900"> Amla, Sarvar Road, Near Ratibad,
      <span className="block">Bhopal. (M.P.)</span> <span aria-hidden="true"></span></a>
      <i className="fa fa-phone text-green-400" />
      <a href="#" class="text-sm font-semibold text-gray-900"> Admission Cell:
      <span className="block">7771012716, 9300312145, 7771012718</span></a>
    </div>
  </div>
</main>

      
    <div className="wrapper px-4">
  {/* HEADER */}
  <header>
  


    <div className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="navbar flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <button
            className="lg:hidden text-xl"
            type="button"
            id="menu_toggler"
          >
            <i className="fa fa-bars" />
          </button>
        </div>
      </nav>
    </div>
  </header>

  


  <section className="pt-8 pb-8">
    <div className="flex flex-col sm:flex-row">
      <div className="w-44 sm:w-1/4 mt-8 sm:mt-0 sm:mr-8">
        <div className="mt-8">
          <a href="#!">
            <img src="https://www.mpcmbhopal.org/img/model1.jpg" alt="Course Image" className="w-full" />
          </a>
        </div>
        <div className="mt-8">
          <ul className="space-y-4">
            <li><a href="course-details.php" className="text-blue-500 hover:bg-gray-600 hover:text-white">D Pharma</a></li>
            <li><a href="course-pharmacology.php" className="text-blue-500 hover:text-blue-700">Pharmacology</a></li>
            <li><a href="course-pharmaceutical-analysis.php" className="text-blue-500 hover:text-blue-700">Pharmaceutical Analysis</a></li>
            <li><a href="course-clinical-pharmacy.php" className="text-blue-500 hover:text-blue-700">Clinical Pharmacy</a></li>
            <li><a href="course-medicinal-chemistry.php" className="text-blue-500 hover:text-blue-700">Medicinal Chemistry</a></li>
            <li><a href="course-pharmacognosy.php" className="text-blue-500 hover:text-blue-700">Pharmacognosy</a></li>
          </ul>
        </div>
      </div>

      <div className="w-full sm:w-3/4">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold">Diploma in Pharmacy [D Pharma]</h2>
            <p className="mt-4 text-lg">
              As an aspirant seeking a D Pharma qualification, you require a rigorous learning experience in a highly supportive environment capable of providing you with skills recognized in the pharmacy industry. Our D Pharma program offers it all.
            </p>
          </div>

          {/* Accordion 1 - About D Pharma */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpenAbout(!openAbout)}>
              <p className="font-semibold text-lg">About D Pharma</p>
              <i className={`fa ${openAbout ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            {openAbout && (
              <div className="mt-4">
                <strong>Course Description:</strong>
                <ul className="list-disc pl-6">
                  <li>Our D Pharma program is a skills-oriented qualification designed for individuals aspiring to work in the pharmaceutical industry. The course integrates cutting-edge curriculum with hands-on learning at state-of-the-art facilities.</li>
                </ul>
                <strong className="mt-4">Recognitions</strong>
                <ul className="list-disc pl-6">
                  <li>The 2-Year, Full-Time D Pharma is a diploma program approved by Pharmacy Council of India (PCI), New Delhi, and affiliated to Barkatullah University, Bhopal.</li>
                  <li>MPCM Bhopal is among the top 100 Pharmacy Schools in India.</li>
                </ul>
                <p><strong>Location:</strong> Bhopal</p>
                <p><strong>Course Type:</strong> Full-Time</p>
                <a href="contact.php" className="text-blue-500 hover:text-blue-700">Apply Now <i className="fa fa-chevron-circle-right"></i></a>
              </div>
            )}
          </div>

          {/* Accordion 2 - How to Apply */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpenApply(!openApply)}>
              <p className="font-semibold text-lg">How to Apply for D Pharma</p>
              <i className={`fa ${openApply ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            {openApply && (
              <div className="mt-4">
                <strong>To Apply for D Pharma:</strong>
                <ul className="list-disc pl-6">
                  <li>Candidate should have passed 10+2 with Physics, Chemistry, and Biology as core subjects.</li>
                  <li>Students in their final year of 10+2 examinations from recognized boards are also eligible to apply.</li>
                  <li>Admissions are conducted via entrance exams or based on qualifying examination marks as per institutional guidelines.</li>
                  <li>Notification regarding exam dates is published in major newspapers and institutional websites.</li>
                </ul>
                <strong className="mt-4">Note</strong>
                <ul className="list-disc pl-6">
                  <li>Candidates who meet the eligibility but missed the entrance exam can apply through direct admissions.</li>
                </ul>
                <a href="contact.php" className="text-blue-500 hover:text-blue-700">Apply Now <i className="fa fa-chevron-circle-right"></i></a>
              </div>
            )}
          </div>

          {/* Accordion 3 - Admission Process */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpenAdmission(!openAdmission)}>
              <p className="font-semibold text-lg">Admission Process</p>
              <i className={`fa ${openAdmission ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            {openAdmission && (
              <div className="mt-4">
                <strong>The admission process is as follows:</strong>
                <ul className="list-disc pl-6">
                  <li>Admissions are based on qualifying marks in 10+2 or equivalent as per guidelines issued by regulatory authorities.</li>
                  <li>Shortlisted candidates are required to verify their documents and pay the requisite fee to confirm admission.</li>
                </ul>
                <a href="contact.php" className="text-blue-500 hover:text-blue-700">Apply Now <i className="fa fa-chevron-circle-right"></i></a>
              </div>
            )}
          </div>

          {/* Accordion 4 - Eligibility & Fees */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpenEligibility(!openEligibility)}>
              <p className="font-semibold text-lg">Eligibility & Fees</p>
              <i className={`fa ${openEligibility ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            {openEligibility && (
              <div className="mt-4">
                <strong>Eligibility Criteria:</strong>
                <ul className="list-disc pl-6">
                  <li>Candidate must be an Indian citizen and have completed 10+2 with at least 50% marks in PCB.</li>
                  <li>For Reserved Category Candidates, the minimum requirement is 45%.</li>
                </ul>
                <strong className="mt-4">Fees</strong>
                <p>The total course fees for the D Pharma program at MPCM are Rs. 1,20,000/- for the two-year course.</p>
                <a href="contact.php" className="text-blue-500 hover:text-blue-700">Apply Now <i className="fa fa-chevron-circle-right"></i></a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
</div>



<section className="relative isolate overflow-hidden bg-white px-6 py-10 sm:py-32 lg:px-8">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
  <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
  <div className="mx-auto max-w-2xl lg:max-w-4xl">
    <img
      className="mx-auto h-12"
      src="https://dbsrcollege.in/wp-content/uploads/2023/03/DBSRlogo_PJ.webp"
      alt="no image"
    />
    <figure className="mt-10">
      <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
        <p>
          “"As a pharmacy teacher at this college, I am impressed by the students' enthusiasm and dedication. The college provides a great learning environment, fostering both academic and personal growth for future pharmacists."”
        </p>
      </blockquote>
      <figcaption className="mt-10">
        <img
          className="mx-auto size-10 rounded-full"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
          <div className="font-semibold text-gray-900">Dr. Shailendra kawre (Principal) 
          </div>
          <svg
            viewBox="0 0 2 2"
            width={3}
            height={3}
            aria-hidden="true"
            className="fill-gray-900"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          <div className="text-gray-600">(PhD pharmacology)</div>
        </div>
      </figcaption>
    </figure>
  </div>
</section>


    </Layout>


    </>
  )
}

export default Dpharma