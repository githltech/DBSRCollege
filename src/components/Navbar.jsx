import React, { useState, useEffect } from "react";
import { FaChevronDown, FaBars, FaUser } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "ABOUT", subItems: [{ name: "About Dbsr", href: "/aboutus" }, { name: "Our Team" , href: "/OurTeam" }, { name: "Our Mission" }] },
    { name: "COURSES", subItems: [{ name: "D.Pharma", href: "/dpharma" }, { name: "B.Pharma", href: "/bpharma" }, { name: "B.SC" }, { name: "M.SC" }, { name: "MBA" }, { name: "BBA" }, { name: "BCA" }, { name: "MCA" }, { name: "B.Tech" }, { name: "M.Tech" }] },
    { name: "DEPARTMENT", subItems: [{ name: "Computer Science", href: "/departments/computer-science" }, { name: "Electronics", href: "/departments/electronics" }, { name: "Mechanical Engineering", href: "/departments/mechanical" }] },
    { name: "ADMISSION", subItems: [{ name: "Diploma", href: "/admission/diploma" }, { name: "Undergraduate", href: "/admission/undergraduate" }] },
    { name: "PLACEMENT", subItems: [{ name: "Placement Cell", href: "/TrnAndPlc" }, { name: "Training and Placement", href: "/TrnAndPlc" }, { name: "Placement Statistics", href: "/placement/statistics" }] },
    { name: "FACULTY", subItems: [{ name: "Faculty of Engineering", href: "/faculty/engineering" }, { name: "Faculty of Pharmaceutical science", href: "/faculty/science" }] },
    { name: "ALUMNI", subItems: [{ name: "Alumni Association", href: "/alumni/association" }, { name: "Alumni Network", href: "/alumni/network" }] },
    { name: "CONTACT", subItems: [{ name: "Contact Us", href: "/contactus" }, { name: "Contact Information", href: "/contact/info" }] },
  ];

  const handleDropdownToggle = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  return (
    <nav
      className={`sticky top-0 z-30 transition-colors duration-300 ${
        isScrolled ? "bg-white text-black" : "bg-[#2B334F] text-white"
      }`}
    >
      <div className="px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <a href="/" className="">
            <img
              src="https://dbsrcollege.in/wp-content/uploads/2023/03/DBSRlogo_PJ.webp"
              alt="Dbsr Logo"
              className="h-8 bg-white"
            />
          </a>
          <h1 className="block lg:hidden text-sm sm:text-xl md:text-2xl font-semibold">
            Dr. Bhagat Singh Rai Institute of technology
          </h1>
        </div>

        {/* Centered Menu for lg Screens */}
        <div className="hidden lg:flex items-center justify-center space-x-6 flex-grow">
          {menuItems.map((item, index) => (
            <div key={index} className="group relative">
              <button
                className={`flex items-center ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                {item.name} {item.subItems && <FaChevronDown className="ml-1 text-sm" />}
              </button>
              {/* Desktop Dropdown */}
              {item.subItems && (
                <div
                  className={`absolute hidden group-hover:block ${
                    isScrolled ? "bg-gray-100 text-black" : "bg-white text-gray-800"
                  } mt-1 py-2 w-44 shadow-lg font-semibold border-2 border-t-red-600 text-[12px]`}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      to={subItem.href}
                      key={subIndex}
                      className="block px-4 py-1 hover:bg-black/80 hover:text-white flex items-center gap-1"
                    >
                      <IoMdArrowDropright />
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side Icon with LOGIN button for lg screens */}
        <div className="hidden lg:flex items-center space-x-4 relative">
          <div className="group relative">
            <button className="flex items-center space-x-2">
              <FaUser className={`${isScrolled ? "text-black" : "text-white"} text-2xl`} />
              <FaChevronDown className={`${isScrolled ? "text-black" : "text-white"} text-sm`} />
            </button>
            <div className="absolute right-0 hidden group-hover:block bg-white text-gray-800 mt-1 py-2 w-44 shadow-lg font-semibold border-2 border-t-red-600 text-[12px] z-10">
              {menuItems
                .find((item) => item.name === "LOGIN")
                ?.subItems.map((subItem, subIndex) => (
                  <Link
                    to={subItem.href}
                    key={subIndex}
                    className="block px-4 py-1 hover:bg-black/80 hover:text-white flex items-center gap-1"
                  >
                    <IoMdArrowDropright />
                    {subItem.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <FaBars className={`${isScrolled ? "text-black" : "text-white"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`lg:hidden font-bold ${isScrolled ? "bg-white text-black" : "bg-[#2B334F] text-white"}`}>
          {menuItems.map((item, index) => (
            <div key={index} className="border-t border-purple-800 hover:bg-black/80">
              <button
                onClick={() => handleDropdownToggle(index)}
                className="w-full flex justify-between items-center px-4 py-2"
              >
                <span className={`${isScrolled ? "text-black" : "text-white"}`}>{item.name}</span>
                {item.subItems && <FaChevronDown className="text-xs" />}
              </button>
              {/* Mobile Dropdown */}
              {openDropdown === index && item.subItems && (
                <div className={`${isScrolled ? "bg-gray-100 text-black" : "bg-white text-black"} text-[15px]`}>
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      to={subItem.href}
                      key={subIndex}
                      className="block px-4 py-1 hover:bg-gray-400 flex items-center gap-1"
                    >
                      <IoMdArrowDropright className="mt-[2px]" />
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
