import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faRss, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { IoMdArrowDropright } from "react-icons/io";
import { MdOutlineAddIcCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandOpera } from "react-icons/tb";
import { SiGooglemaps } from "react-icons/si";
import {Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 pb-4">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4">
        <div>
          <ul>
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
              <a href="/" className="">
                <img
                  src="https://dbsrcollege.in/wp-content/uploads/2023/03/DBSRlogo_PJ.webp"
                  alt=""
                  className="h-16"
                />
              </a>
            </li>
            <li className="flex items-center text-sm font-semibold mt-2">
              Dr Bhagat Singh Rai Institute of Technology was established by @Abhishek Rai, Seoni.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-blue-600 mb-2 ml-2">Help & Support</h3>
          <ul>
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
              <IoMdArrowDropright />
              <a href="/" className="hover:border-b-[1.2px] border-gray-600">
                Academic Calendar
              </a>
            </li>
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
              <IoMdArrowDropright />
              <a href="/" className="hover:border-b-[1.2px] border-gray-600">
                Bookstore
              </a>
            </li>
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
              <IoMdArrowDropright />
              <a href="/" className="hover:border-b-[1.2px] border-gray-600">
                Colleges & Schools
              </a>
            </li>
           
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
              <IoMdArrowDropright />
              <a href="/" className="hover:border-b-[1.2px] border-gray-600">
                Professional Programs
              </a>
            </li>
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
              <IoMdArrowDropright />
              <a href="/gallery" className="hover:border-b-[1.2px] border-gray-600">
                Gallary
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-blue-600 mb-2 ml-2">Courses</h3>
          <ul>
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
              <IoMdArrowDropright />
              <Link to="/dpharma" className="hover:border-b-[1.2px] border-gray-600">
                D Pharma
              </Link>
            </li>
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
              <IoMdArrowDropright />
              <Link to="/bpharma" className="hover:border-b-[1.2px] border-gray-600">
                B Pharma
              </Link>
            </li>
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
              <IoMdArrowDropright />
              <a href="/" className="hover:border-b-[1.2px] border-gray-600">
                BSc
              </a>
            </li>
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
              <IoMdArrowDropright />
              <a href="/" className="hover:border-b-[1.2px] border-gray-600">
                BCA
              </a>
            </li>
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
              <IoMdArrowDropright />
              <a href="/" className="hover:border-b-[1.2px] border-gray-600">
                BBA
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-blue-600 mb-2 ml-2">Admission</h3>
          <ul>
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
              <IoMdArrowDropright />
              <a href="/" className="hover:border-b-[1.2px] border-gray-600">
                Business
              </a>
            </li>
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
              <IoMdArrowDropright />
              <a href="/" className="hover:border-b-[1.2px] border-gray-600">
                Diploma
              </a>
            </li>
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
              <IoMdArrowDropright />
              <a href="/" className="hover:border-b-[1.2px] border-gray-600">
                Graduate
              </a>
            </li>
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
              <IoMdArrowDropright />
              <a href="/" className="hover:border-b-[1.2px] border-gray-600">
                Law
              </a>
            </li>
            <li className="flex items-center text-sm font-semibold hover:text-red-600">
              <IoMdArrowDropright />
              <a href="/" className="hover:border-b-[1.2px] border-gray-600">
                Undergraduate
              </a>
            </li>
           
          </ul>
        </div>
        <div>
          <h3 className="text-blue-600 mb-2">Contact Us</h3>
          <ul className="text-sm font-semibold">
            <li className="flex items-center gap-1">
              <MdOutlineAddIcCall icon="phone" /> +91-9425175781
            </li>
            <li className="flex items-center gap-1">
              <MdOutlineEmail /> Dbsr College.
            </li>
            <li className="flex items-center gap-1">
              <TbBrandOpera icon="opera" /> Dbsr@gmail.com
            </li>
            <li className="flex items-center gap-1 text-blue-600">
              <SiGooglemaps />
              <a href="#">Google Maps</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between space-y-1 items-center border-t border-gray-300 mt-8 pt-4 px-4">
        <p className="text-sm font-semibold text-white">&copy; 2044 Dbsr College Site All Rights Reserved</p>
        <p className="text-sm font-semibold text-white">
          Developed & Managed By{" "}
          <a href="https://hltechindia.com/" className="hover:text-red-600 underline">
            HL Tech India Private Limited.
          </a>
        </p>
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
