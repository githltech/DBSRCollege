import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const statisticsData = [
    { icon: "fa-user-graduate", value: 4517, label: "Students", bgColor: "bg-red-800" },
    { icon: "fa-chalkboard-teacher", value: 640, label: "Teachers", bgColor: "bg-[#2B334F]" },
    { icon: "fa-book", value: 54, label: "Subjects", bgColor: "bg-[#2B334F]" },
    { icon: "fa-graduation-cap", value: 269, label: "Degrees", bgColor: "bg-red-800" },
  ];

  return (
    <div className="px-4 py-10 mt-32">
      {/* Main layout container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Search Form */}
        <div className="bg-gray-50 p-6 shadow-lg border border-gray-200">
          <h2 className="text-4xl font-bold mb-6">Find a courses</h2>
          <div className="flex items-center mb-4">
            <input type="radio" id="undergraduate" name="level" value="undergraduate" defaultChecked />
            <label htmlFor="undergraduate" className="ml-2 text-sm font-medium text-red-700">Undergraduate</label>
            <input type="radio" id="postgraduate" name="level" value="postgraduate" className="ml-6" />
            <label htmlFor="postgraduate" className="ml-2 text-sm font-medium text-gray-600">Postgraduate</label>
          </div>
          <input
            type="text"
            placeholder="Keyword search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border border-gray-300 text-gray-600 text-sm mb-4"
          />
          <select className="w-full p-3 border border-gray-300 text-gray-600 text-sm mb-4">
            <option>Category course</option>
            <option>Engineering</option>
            <option>Business</option>
            <option>Art</option>
          </select>
          <select className="w-full p-3 border border-gray-300 text-gray-600 text-sm mb-4">
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
          </select>
          <button className="w-full p-3 bg-red-800 text-white font-bold hover:bg-red-600 flex justify-center items-center">
            Search <i className="fas fa-search ml-2"></i>
          </button>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {statisticsData.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-4 text-white ${stat.bgColor}`}
            >
              <div className="text-2xl mb-4 bg-white rounded-full p-4 text-blue-500">
                <i className={`fas ${stat.icon}`}></i>
              </div>
              <div className="text-2xl font-bold mb-2">{stat.value.toLocaleString()}+</div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
