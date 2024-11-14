import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faTwitter, faStumbleupon } from "@fortawesome/free-brands-svg-icons";
import { faRss, faArrowUp } from "@fortawesome/free-solid-svg-icons"; // Import the arrow icon
import { IoMdArrowDropright } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-8 pb-4">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
        <div>
          <h3 className="text-teal-600 mb-4 ml-2">Find your Way</h3>
          <ul>
            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              Home
              </a>
             </li>

            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              Site map
              </a>
             </li>

            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              International students
              </a>
             </li>

            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              About Collegeme
              </a>
              </li>

            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              Current Students
              </a>
              </li>

            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              Staff
              </a>
              </li>

          </ul>
        </div>
        <div>
          <h3 className="text-teal-600 mb-4 ml-2">Help & Support</h3>
          <ul>
            
            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="/" className="">
              Academic Calendar
               </a>
              </li>

            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              Bookstore
              </a>
              </li>

            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              Colleges & Schools
              </a>
              </li>

            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              Courses
              </a>
              </li>

            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              Professional Programs
              </a>
              </li>

            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              Our Help Desk
              </a>
              </li>

          </ul>
        </div>
        <div>
          <h3 className="text-teal-600 mb-4 ml-2">Quick Links</h3>
          <ul>
            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              Directories
              </a>
              </li>
              
            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              Site map
              </a>
              </li>
              
            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              cMail | xMail
              </a>
              </li>

            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              Campus Notices
              </a>
              </li>

            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              Emergency Information
              </a>
              </li>
              
            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              Staff
              </a>
              </li>

          </ul>
        </div>
        <div>
          <h3 className="text-teal-600 mb-4 ml-2">Admission</h3>
          <ul>
            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              Business
              </a>
              </li>

            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              Financial Aid
              </a>
              </li>

            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              Graduate
              </a>
              </li>

            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              Law
              </a>
              </li>

            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              Undergraduate
              </a>
              </li>

            <li className="flex items-center">
            <IoMdArrowDropright/>
              <a href="" className="">
              School
              </a>
              </li>
          </ul>
        </div>
        <div>
          <h3 className="text-teal-600 mb-4 ml-2">Contact Us</h3>
          <ul>
            <li><FontAwesomeIcon icon="phone" /> +44 (12) 123 4567 891</li>
            <li>Lorem ipsum dolor sit amet consectetur adipis.</li>
            <li><FontAwesomeIcon icon="envelope" /> info@college.com</li>
            <li><a href="#">Google Maps</a></li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-gray-300 mt-8 pt-4">
        <p className="text-sm text-gray-500">&copy; 2011 College Site All Rights Reserved</p>
        
        {/* "Top" link with Arrow Icon */}
        <a href="#" className="text-teal-600 flex items-center space-x-1 hover:text-teal-800">
          <span>Top</span> 
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
        
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <FontAwesomeIcon icon={faFacebookF} className="text-blue-600 hover:text-blue-800" />
          <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-600 hover:text-blue-800" />
          <FontAwesomeIcon icon={faTwitter} className="text-blue-600 hover:text-blue-800" />
          <FontAwesomeIcon icon={faRss} className="text-orange-600 hover:text-orange-800" />
          <FontAwesomeIcon icon={faStumbleupon} className="text-green-600 hover:text-green-800" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
