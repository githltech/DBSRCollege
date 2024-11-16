import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faRss, faArrowUp } from "@fortawesome/free-solid-svg-icons"; // Import the arrow icon
import { IoMdArrowDropright } from "react-icons/io";
import { MdOutlineAddIcCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandOpera } from "react-icons/tb";
import { SiGooglemaps } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-8 pb-4">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4">
        <div>
          <ul>
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
              <a href="/" className="">
              <img src="https://dbsrcollege.in/wp-content/uploads/2023/03/DBSRlogo_PJ.webp" alt="" 
              className="h-16"
              />
              </a>
             </li>

            <li className="flex items-center text-sm font-semibold hover:text-red-600 mt-2">
            Dr bhagat Singh Rai institute of technology was established by @Abhishek Rai, Seoni.
             </li>

          

          </ul>
        </div>
        <div>
          <h3 className="text-blue-600 mb-2 ml-2">Help & Support</h3>
          <ul>
            
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
            <IoMdArrowDropright/>
              <a href="/" className=" hover:border-b-[1.2px] border-gray-600">
              Academic Calendar
               </a>
              </li>

            <li className="flex items-center text-sm font-semibold hover:text-red-600">
            <IoMdArrowDropright/>
              <a href="" className=" hover:border-b-[1.2px] border-gray-600">
              Bookstore
              </a>
              </li>

            <li className="flex items-center text-sm font-semibold hover:text-red-600">
            <IoMdArrowDropright/>
              <a href="" className=" hover:border-b-[1.2px] border-gray-600">
              Colleges & Schools
              </a>
              </li>

            <li className="flex items-center text-sm font-semibold hover:text-red-600">
            <IoMdArrowDropright/>
              <a href="" className=" hover:border-b-[1.2px] border-gray-600">
              Courses
              </a>
              </li>

            <li className="flex items-center text-sm font-semibold hover:text-red-600">
            <IoMdArrowDropright/>
              <a href="" className=" hover:border-b-[1.2px] border-gray-600">
              Professional Programs
              </a>
              </li>

            <li className="flex items-center text-sm font-semibold hover:text-red-600">
            <IoMdArrowDropright/>
              <a href="" className=" hover:border-b-[1.2px] border-gray-600">
              Our Help Desk
              </a>
              </li>

          </ul>
        </div>
        <div>
          <h3 className="text-blue-600 mb-2 ml-2">Quick Links</h3>
          <ul>
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
            <IoMdArrowDropright/>
              <a href="" className=" hover:border-b-[1.2px] border-gray-600">
              Directories
              </a>
              </li>
              
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
            <IoMdArrowDropright/>
              <a href="" className=" hover:border-b-[1.2px] border-gray-600">
              Site map
              </a>
              </li>
              
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
            <IoMdArrowDropright/>
              <a href="" className=" hover:border-b-[1.2px] border-gray-600">
              cMail | xMail
              </a>
              </li>

            <li className="flex items-center text-sm font-semibold hover:text-red-600">
            <IoMdArrowDropright/>
              <a href="" className=" hover:border-b-[1.2px] border-gray-600">
              Campus Notices
              </a>
              </li>

            <li className="flex items-center text-sm font-semibold hover:text-red-600">
            <IoMdArrowDropright/>
              <a href="" className=" hover:border-b-[1.2px] border-gray-600">
              Emergency Information
              </a>
              </li>
              
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
            <IoMdArrowDropright/>
              <a href="" className=" hover:border-b-[1.2px] border-gray-600">
              Staff
              </a>
              </li>

          </ul>
        </div>
        <div>
          <h3 className="text-blue-600 mb-2 ml-2">Admission</h3>
          <ul>
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
            <IoMdArrowDropright/>
              <a href="" className=" hover:border-b-[1.2px] border-gray-600">
              Business
              </a>
              </li>

            <li className="flex items-center text-sm font-semibold hover:text-red-600">
            <IoMdArrowDropright/>
              <a href="" className=" hover:border-b-[1.2px] border-gray-600">
              Financial Aid
              </a>
              </li>

            <li className="flex items-center text-sm font-semibold hover:text-red-600">
            <IoMdArrowDropright/>
              <a href="" className=" hover:border-b-[1.2px] border-gray-600">
              Graduate
              </a>
              </li>

            <li className="flex items-center text-sm font-semibold hover:text-red-600">
            <IoMdArrowDropright/>
              <a href="" className=" hover:border-b-[1.2px] border-gray-600">
              Law
              </a>
              </li>

            <li className="flex items-center text-sm font-semibold hover:text-red-600">
            <IoMdArrowDropright/>
              <a href="" className=" hover:border-b-[1.2px] border-gray-600">
              Undergraduate
              </a>
              </li>

            <li className="flex items-center text-sm font-semibold hover:text-red-600">
            <IoMdArrowDropright/>
              <a href="" className=" hover:border-b-[1.2px] border-gray-600">
              School
              </a>
              </li>
          </ul>
        </div>
        <div>
          <h3 className="text-blue-600 mb-2">Contact Us</h3>
          <ul className="text-sm font-semibold">
            <li className="flex items-center gap-1">
              <MdOutlineAddIcCall icon="phone" /> +44 (12) 123 4567 891</li>
            <li className="flex items-center gap-1">
              <MdOutlineEmail/>
              Dbsr college.
              </li>
            <li className="flex items-center gap-1">
              <TbBrandOpera icon="opera" />
               info@college.com
               </li>
            <li className="flex items-center gap-1 text-blue-600">
              <SiGooglemaps/>
              <a href="#">Google Maps</a>
              </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-gray-300 mt-8 pt-4 px-4 ">
        <p className="text-sm font-semibold text-gray-600">&copy; 2011 Dbsr College Site All Rights Reserved</p>
        
        {/* "Top" link with Arrow Icon */}
        {/* <a href="#" className="text-blue-600 flex items-center space-x-1 hover:text-teal-800">
          <span>Top</span> 
          <FontAwesomeIcon icon={faArrowUp} />
        </a> */}
        
        {/* Social Media Icons */}
        <div className="flex space-x-2">
          <FontAwesomeIcon icon={faFacebookF} className="text-blue-600 hover:text-blue-800" />
          <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-600 hover:text-blue-800" />
          <FontAwesomeIcon icon={faTwitter} className="text-blue-600 hover:text-blue-800" />
          <FontAwesomeIcon icon={faRss} className="text-orange-600 hover:text-orange-800" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
