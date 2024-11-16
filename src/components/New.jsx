import React from "react";

const statistics = [
  {
    icon: "fa-graduation-cap",
    label: "Total Graduates",
    value: "25,000+",
  },
  {
    icon: "fa-chalkboard-teacher",
    label: "Qualified Instructors",
    value: "120+",
  },
  {
    icon: "fa-book-open",
    label: "Courses Offered",
    value: "80+",
  },
  {
    icon: "fa-award",
    label: "Awards Won",
    value: "50+",
  },
];

const New = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
            >
              <div className="text-4xl text-orange-500 mb-4">
                <i className={`fas ${stat.icon}`} aria-hidden="true"></i>
              </div>
              <p className="text-lg font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default New;
