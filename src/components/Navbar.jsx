import React, { useState } from "react";
import { FaChevronDown ,FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    { 
      name: "ABOUT",
      subItems: [
        { name: "About Dbsr", href: "/aboutus" },
        { name: "Our Team" },
        { name: "Our Mission" },
        ],
     },
    { 
      name: "COURSES",
      subItems:[
        { name: "D.Pharma" },
        { name: "B.Pharma" },
        { name: "B.SC" },
        { name: "M.SC" },
        { name: "MBA" },
        { name: "BBA" },
        { name: "BCA" },
        { name: "MCA" },
        { name: "B.Tech" },
        { name: "M.Tech" },

      ] 
     },

     {
      name: "DEPARTMENT",
      subItems: [
        { name: "Computer Science", href: "/departments/computer-science" },
        { name: "Electronics", href: "/departments/electronics" },
        { name: "Mechanical Engineering", href: "/departments/mechanical" },
        { name: "Department of English", href: "/departments/civil" },
        { name: "Department of Civil", href: "/departments/civil" },
        { name: "Department of Hindi", href: "/departments/civil" },
        { name: "Mathematical Sciences", href: "/departments/civil" },
        { name: "Department of Biochemistry", href: "/departments/civil" },
        { name: "Management", href: "/departments/civil" },
        { name: "Chemistry Department", href: "/departments/civil" },
        { name: "Department of Agriculture", href: "/departments/civil" },
        

      ],
    },
    {
      name: "ADMISSION",
      subItems: [
        { name: "Undergraduate", href: "/admission/undergraduate" },
        { name: "Postgraduate", href: "/admission/postgraduate" },
        { name: "PhD Programs", href: "/admission/phd" },
      ],
    },
    {
      name: "PLACEMENT",
      subItems: [
        { name: "Placement Cell", href: "/placement/cell" },
        { name: "Training and Placement", href: "/placement/training" },
        { name: "Placement Statistics", href: "/placement/statistics" },
      ],
    },
    {
      name: "FACULTY",
      subItems: [
        { name: "Faculty of Engineering", href: "/faculty/engineering" },
        { name: "Faculty of Science", href: "/faculty/science" },
        { name: "Faculty of Arts", href: "/faculty/arts" },
      ],
    },
    {
      name: "ALUMNI",
      subItems: [
        { name: "Alumni Association", href: "/alumni/association" },
        { name: "Alumni Network", href: "/alumni/network" },
      ],
    },
    // {
    //   name: "FEE DETAILS",
    //   subItems: [
    //     { name: "Fee Structure", href: "/fees/structure" },
    //     { name: "Payment Options", href: "/fees/payment" },
    //   ],
    // },
    {
      name: "LOGIN",
      subItems: [
        { name: "Student Login", href: "/login/student" },
        { name: "Faculty Login", href: "/login/faculty" },
      ],
    },
    {
      name: "CONTACT",
      subItems: [
        { name: "Contact Us", href: "/contactus" },
        { name: "Contact Information", href: "/contact/info" },
      ],
    },
  ];

  const handleDropdownToggle = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  return (
    <nav className="bg-[#2B334F] text-white sticky top-0 z-30">
      <div className="px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src="https://dbsrcollege.in/wp-content/uploads/2023/03/DBSRlogo_PJ.webp"
            alt="Dbsr Logo"
            className="h-8 bg-white"
          />
           <h1 className="block lg:hidden text-sm sm:text-xl md:text-2xl font-semibold">Dr. Bhagat Singh Rai Institute of technology</h1>

        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4 font-bold text-sm">
          {menuItems.map((item, index) => (
            <div key={index} className="group relative">
              <button className="flex items-center">
                {item.name} {item.subItems && <FaChevronDown className="ml-1 text-sm" />}
              </button>
              {/* Desktop Dropdown */}
              {item.subItems && (
                <div className="absolute hidden group-hover:block bg-white text-gray-800 mt-1 py-2 w-44 shadow-lg font-semibold border-2 border-t-red-600 text-[12px]">
                  {item.subItems.map((subItem, subIndex) => (
                   <Link
                      to={subItem.href}
                      key={subIndex}
                      className="block px-4 py-1 hover:bg-black/80 hover:text-white flex items-center gap-1"
                    >
                      <IoMdArrowDropright/>
                      {subItem.name}
                    </Link>
                    
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden font-bold bg-[#2B334F] text-white">
          {menuItems.map((item, index) => (
            <div key={index} className="border-t border-purple-800 hover:bg-black/80">
              <button
                onClick={() => handleDropdownToggle(index)}
                className="w-full flex justify-between items-center px-4 py-2"
              >
                <span>{item.name}</span>
                {item.subItems && <FaChevronDown className="text-xs" />}
              </button>
              
              {/* Mobile Dropdown */}
              {openDropdown === index && item.subItems && (
                <div className="bg-white text-black text-[12px]">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link  
                      to={subItem.href}
                      key={subIndex}
                      className="block px-4 py-1 hover:bg-gray-400 flex items gap-1"
                    >
                      <IoMdArrowDropright className="mt-[2px]"/>
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
