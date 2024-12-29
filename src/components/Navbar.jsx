import React, { useState, useEffect } from "react";
import { FaChevronDown, FaBars, FaUser } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import whiteLogo from "../images/DBSRWhiteLogo.jpg"; // Logo with white color and #2B334F background
import blueLogo from "../images/DBSRBluelogo.jpg"; // Logo with #2B334F color and white background

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [activeForm, setActiveForm] = useState("login");

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
    { name: "ABOUT", subItems: [{ name: "About Dbsr", href: "/aboutus" }, { name: "Our Mission" }] },
    {
      name: "COURSES",
      subItems: [
        { name: "D.Pharma", href: "/dpharma" },
        { name: "B.Pharma", href: "/bpharma" },
        { name: "B.SC" },
        { name: "M.SC" },
        { name: "MBA" },
        { name: "BBA" },
        { name: "BCA" },
        { name: "MCA" },
        { name: "B.Tech" },
        { name: "M.Tech" },
      ],
    },
    { name: "DEPARTMENT", subItems: [{ name: "Computer Science", href: "/departments/computer-science" }, { name: "Electronics", href: "/departments/electronics" }, { name: "Mechanical Engineering", href: "/departments/mechanical" }] },
    { name: "ADMISSION", subItems: [{ name: "Diploma", href: "/admission/diploma" }, { name: "Undergraduate", href: "/admission/undergraduate" }] },
    { name: "PLACEMENT", subItems: [{ name: "Placement Cell", href: "/TrnAndPlc" }, { name: "Training and Placement", href: "/TrnAndPlc" }, { name: "Placement Statistics", href: "/placement/statistics" }] },
    { name: "FACULTY", subItems: [{ name: "Our Faculties", href: "/OurTeam" }, { name: "Faculty of Pharmaceutical science", href: "/faculty/science" }] },
    { name: "ALUMNI", subItems: [{ name: "Alumni Association", href: "/alumni/association" }, { name: "Alumni Network", href: "/alumni/network" }] },
    { name: "CONTACT", subItems: [{ name: "Contact Us", href: "/contactus" }, { name: "Contact Information", href: "/" }] },
    { name: "LOGIN", subItems: [{ name: "Student Login", href: "/" }, { name: "Teacher Login", href: "/" }] },
  ];

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-30 transition-colors duration-300 ${
          isScrolled ? "bg-black text-white" : "bg-[#2B334F] text-white"
        }`}
      >
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="/" className="">
              <img
                src={isScrolled ? blueLogo : whiteLogo} // Dynamically switch logo
                alt="Dbsr Logo"
                className="h-8"
              />
            </a>
            <h1 className="block lg:hidden text-sm sm:text-xl md:text-2xl font-semibold">
              Dr. Bhagat Singh Rai Institute of Technology
            </h1>
          </div>

          <div className="hidden lg:flex items-center justify-center mx-10 space-x-6 flex-grow">
            {menuItems
              .filter((item) => item.name !== "LOGIN")
              .map((item, index) => (
                <div key={index} className="group relative">
                  <button
                    className={`flex items-center text-sm ${
                      isScrolled ? "text-white" : "text-white"
                    }`}
                  >
                    {item.name} {item.subItems && <FaChevronDown className="ml-1 text-sm" />}
                  </button>
                  {item.subItems && (
                    <div
                      className={`absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-[0.5s] ${
                        isScrolled ? "bg-gray-800 text-white" : "bg-white text-gray-800"
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
            <button
              className={`flex items-center px-4 py-2 rounded-lg duration-500 font-semibold ${
                isScrolled ? "bg-white text-black hover:bg-red-800" : "bg-red-600 text-white hover:bg-black"
              }`}
              onClick={toggleLoginModal}
            >
              <FaUser className="mr-2" /> Login
            </button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <FaBars className={`${isScrolled ? "text-white" : "text-white"}`} />
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className={`lg:hidden font-bold ${
              isScrolled ? "bg-black text-white" : "bg-[#2B334F] text-white"
            }`}
          >
            {menuItems.map((item, index) => (
              <div key={index} className="border-t border-purple-800 hover:bg-black/80">
                <button
                  onClick={() => handleDropdownToggle(index)}
                  className="w-full flex justify-between items-center px-4 py-2"
                >
                  <span className={`${isScrolled ? "text-white" : "text-white"}`}>{item.name}</span>
                  {item.subItems && <FaChevronDown className="text-xs" />}
                </button>
                {openDropdown === index && item.subItems && (
                  <div
                    className={`${isScrolled ? "bg-gray-800 text-white" : "bg-white text-black"} text-[15px]`}
                  >
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

      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 border rounded">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-3xl flex">
            <div className="hidden lg:block w-1/2 bg-gray-200 p-2 flex flex-col items-center">
              <img
                src={whiteLogo}
                alt="Placeholder"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full lg:w-1/2 p-8 relative">
              <div className="flex justify-center space-x-4 mb-4">
                <button
                  onClick={() => setActiveForm("login")}
                  className={`px-4 py-2 font-semibold rounded-lg ${
                    activeForm === "login" ? "bg-red-600 text-white" : "bg-gray-200 text-black"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setActiveForm("signup")}
                  className={`px-4 py-2 font-semibold rounded-lg ${
                    activeForm === "signup" ? "bg-red-600 text-white" : "bg-gray-200 text-black"
                  }`}
                >
                  Signup
                </button>
              </div>

              {activeForm === "login" ? (
                <>
                  <h2 className="text-xl font-bold mb-4">Login</h2>
                  <form>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full border rounded-lg px-3 py-2"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full border rounded-lg px-3 py-2"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="password" className="block text-sm font-medium mb-1">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="w-full border rounded-lg px-3 py-2"
                        placeholder="Enter your password"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                    >
                      Login
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-4">Signup</h2>
                  <form>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full border rounded-lg px-3 py-2"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full border rounded-lg px-3 py-2"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="password" className="block text-sm font-medium mb-1">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="w-full border rounded-lg px-3 py-2"
                        placeholder="Create a password"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                    >
                      Signup
                    </button>
                  </form>
                </>
              )}

              <button
                onClick={() => setIsLoginModalOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl bg-transparent"
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
