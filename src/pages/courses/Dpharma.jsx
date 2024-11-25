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
	<div className="wrapper px-4">
  {/* HEADER */}
  <header>
  <div className="pt-10 pb-10">
  <div className="container mx-auto">
    <div className="flex flex-wrap">
      <div className="w-full sm:w-1/4">
        <p className="text-xl font-cursive">
          महाराणा प्रताप प्रबंधन संस्थान
        </p>
      </div>
      <div className="w-full lg:w-8/12 md:w-8/12 sm:w-8/12 xs:w-full">
        <div className="bg-yellow-300 border-none py-2 px-4" id="bn2">
          <div className="flex items-center" style={{ width: 10 }}>
            <h2 className="hidden">Announcement</h2>
            <span />
          </div>
          <ul className="pl-7">
            <li className="hidden w-full">
              <a href="#">
                Admission related enquiries for MBA Batch commencing for the session 2024-25 are now invited.
              </a>
            </li>
            <li className="w-full block">
              <a href="MBA-Ist-Sem.pdf">MBA 1st sem exam papers.</a>
            </li>
          </ul>
          <div className="flex">
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/12 text-right">
        <div className="flex justify-end space-x-3">
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
          <a href="#">
            <i className="fa fa-linkedin" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="pt-10 pb-10">
  <div className="container mx-auto">
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 flex items-stretch flex-col lg:flex-row">
        <div className="flex justify-center lg:justify-start">
          <a href="/">
            <img src="https://dbsrcollege.in/wp-content/uploads/2023/03/DBSRlogo_PJ.webp" alt="Logo" className='w-44 h-44' />
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="text-right">
          <ul>
            <li className="flex items-center space-x-2">
              <i className="fa fa-map-marker" />
              <p>
                Amla, Sarvar Road, Near Ratibad,
                <span className="block">Bhopal. (M.P.)</span>
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <i className="fa fa-phone" />
              <p>
                Admission cell
                <span className="block">7771012716, 9300312145, 7771012718</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

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

  </header>{" "}
 
  <section className="bg-cover bg-center relative pt-16 pb-12 text-white" style={{ backgroundImage: 'url(https://www.mpcmbhopal.org/img/mba1.jpg)' }}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Course Details</h1>
          <div className="text-lg">
            <a href="/" className="text-white hover:text-gray-300">Home</a> / <span>Course Details</span>
          </div>
        </div>
      </div>
    </section>

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
              <li><a href="course-details.php" className="text-blue-500 hover:bg-gray-600 hover:text-white">MBA</a></li>
              <li><a href="course-hr-managment.php" className="text-blue-500 hover:text-blue-700">MBA HR Management</a></li>
              <li><a href="course-mba-finance.php" className="text-blue-500 hover:text-blue-700">MBA Finance</a></li>
              <li><a href="course-mba-retail.php" className="text-blue-500 hover:text-blue-700">MBA Retail Management</a></li>
              <li><a href="course-banking-finance.php" className="text-blue-500 hover:text-blue-700">MBA Banking & Finance</a></li>
              <li><a href="course-mba-marketing.php" className="text-blue-500 hover:text-blue-700">MBA Marketing</a></li>
            </ul>
          </div>
         
        </div>

        <div className="w-full sm:w-3/4">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold">Master of Business Administration [MBA]</h2>
              <p className="mt-4 text-lg">
                As an aspirant seeking an MBA, you require a challenging learning experience within a highly supportive environment capable of providing you with a business qualification recognized throughout the world. Our MBA program.
              </p>
            </div>

            {/* Accordion 1 - About MBA */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpenAbout(!openAbout)}>
                <p className="font-semibold text-lg">About MBA</p>
                <i className={`fa ${openAbout ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              </div>
              {openAbout && (
                <div className="mt-4">
                  <strong>Course Description:</strong>
                  <ul className="list-disc pl-6">
                    <li>Our MBA program is a business-oriented skill nurturing and development program coupled with rigorous research-based teaching. MPCM offers a rich learning environment in a truly global standard. We employ the latest teaching technology and methods and have an elegant state-of-the-art campus.</li>
                  </ul>
                  <strong className="mt-4">Recognitions</strong>
                  <ul className="list-disc pl-6">
                    <li>The 2-Year, Full Time MBA is a Post Graduate Programme approved by All India Council for Technical Education (AICTE) New Delhi, and affiliated to Barkatullah University, Bhopal.</li>
                    <li>MPCM Bhopal is among the top 100 Management Schools of India.</li>
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
                <p className="font-semibold text-lg">How to Apply for MBA</p>
                <i className={`fa ${openApply ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              </div>
              {openApply && (
                <div className="mt-4">
                  <strong>To Apply for MBA:</strong>
                  <ul className="list-disc pl-6">
                    <li>Candidate should have appeared for AICTE CMAT</li>
                    <li>Students who are in the final year of their Bachelor’s Degree (10+2+3) or who have appeared in the final year examination from a recognised institution/university are eligible to appear CMAT test.</li>
                    <li>Subsequently, counseling is conducted by the Directorate of Technical Education (DTE), Govt. of Madhya Pradesh. CMAT score is used for admissions in Management Programs of institutes approved by AICTE.</li>
                    <li>CMAT is a National Level Entrance exam, conducted by AICTE. CMAT is held once a year (generally in January). AICTE announces the exam dates in prominent National newspapers and various websites. The examination is computer based.</li>
                  </ul>
                  <strong className="mt-4">Note</strong>
                  <ul className="list-disc pl-6">
                    <li>Those who have missed giving the exam can also be allowed to appear for counseling based on qualifying exam percentage as per DTE guidelines.</li>
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
                    <li>On the basis of CMAT, the Directorate of Technical Education of Madhya Pradesh (DTE), Govt. of MP conducts Admission Counseling.</li>
                    <li>Subsequently counseling for those who have missed CMAT is held as per DTE, Govt. of M.P guidelines strictly based on merit as per graduation Percentage(qualifying exam).</li>
                    <li>The Candidate List is sent to MPCM where the candidate has to confirm his candidature and deposit the requisite fee.</li>
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
                    <li>Candidate should be a Citizen of India holding a Graduate Degree in any discipline with at least 50% aggregate marks from any recognised University.</li>
                    <li>For Reserved Category Candidates, the minimum requirement is 45%.</li>
                  </ul>
                  <strong className="mt-4">Fees</strong>
                  <p>The total course fees for the MBA program at MPCM are Rs. 1,50,000/- for the two-year course.</p>
                  <a href="contact.php" className="text-blue-500 hover:text-blue-700">Apply Now <i className="fa fa-chevron-circle-right"></i></a>
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
  )
}

export default Dpharma