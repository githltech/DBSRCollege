import React, { useState, useEffect } from "react";
import { FaChevronDown, FaBars } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "ABOUT", subItems: [{ name: "About Dbsr", href: "/aboutus" },  { name: "Our Mission" }] },
    { name: "COURSES", subItems: [{ name: "D.Pharma", href: "/dpharma" }, { name: "B.Pharma", href: "/bpharma" }, { name: "B.SC" }, { name: "M.SC" }, { name: "MBA" }, { name: "BBA" }, { name: "BCA" }, { name: "MCA" }, { name: "B.Tech" }, { name: "M.Tech" }] },
    { name: "DEPARTMENT", subItems: [{ name: "Computer Science", href: "/departments/computer-science" }, { name: "Electronics", href: "/departments/electronics" }, { name: "Mechanical Engineering", href: "/departments/mechanical" }] },
    { name: "ADMISSION", subItems: [{ name: "Diploma", href: "/admission/diploma" }, { name: "Undergraduate", href: "/admission/undergraduate" }] },
    { name: "PLACEMENT", subItems: [{ name: "Placement Cell", href: "/TrnAndPlc" }, { name: "Training and Placement", href: "/TrnAndPlc" }, { name: "Placement Statistics", href: "/placement/statistics" }] },
    { name: "FACULTY", subItems: [{ name: "Our Faculties", href: "/OurTeam" }, { name: "Faculty of Pharmaceutical science", href: "/faculty/science" }] },
    { name: "ALUMNI", subItems: [{ name: "Alumni Association", href: "/alumni/association" }, { name: "Alumni Network", href: "/alumni/network" }] },
    { name: "CONTACT", subItems: [{ name: "Contact Us", href: "/contactus" }, { name: "Contact Information", href: "/contact/info" }] },
    // Login menu is removed from large screens.
    { name: "LOGIN", subItems: [{ name: "Student Login", href: "/" }, { name: "Teacher Login", href: "/" }] },
  ];

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav
      className={`sticky top-0 z-30 transition-colors duration-300 ${
        isScrolled ? "bg-white text-black" : "bg-[#2B334F] text-white"
      }`}
    >
      <div className="px-4 py-4 flex items-center justify-between">
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

        <div className="hidden lg:flex items-center justify-center space-x-6 flex-grow">
          {menuItems
            .filter((item) => item.name !== "LOGIN") // Remove LOGIN menu for large screens
            .map((item, index) => (
              <div key={index} className="group relative">
                <button
                  className={`flex items-center ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  {item.name} {item.subItems && <FaChevronDown className="ml-1 text-sm" />}
                </button>
                {item.subItems && (
                  <div
                    className={`absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-[0.5s] ${
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

        <div className="hidden lg:flex items-center space-x-4 relative">
          <a className="px-4 py-2 rounded-lg hover:bg-black bg-red-600 duration-500 font-semibold" href="/">
            Login
          </a>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <FaBars className={`${isScrolled ? "text-black" : "text-white"}`} />
          </button>
        </div>
      </div>

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
