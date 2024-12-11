import React from "react";

const Features = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 px-0 lg:px-24 my-4">
      {/* Card 1 */}
      <div className="bg-gray-200 p-6 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-2">
          <span className="border-l-4 border-red-600 pl-2">University Life</span>
        </h3>
        <p className="text-gray-800">Nibh vivamus imperdiet sed odio nullam mi elit pellentesque</p>
      </div>

      {/* Card 2 */}
      <div className="bg-blue-900 p-6 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-2">
          <span className="border-l-4 border-red-600 pl-2 text-white">Skilled Lecturers</span>
        </h3>
        <p className="text-gray-200">Nibh vivamus imperdiet sed odio nullam mi elit pellentesque</p>
      </div>

      {/* Card 3 */}
      <div className="bg-red-600 p-6 rounded-2xl text-white">
        <h3 className="text-2xl font-semibold mb-2">
          <span className="border-l-4 border-blue-600 pl-2">Scholarship Facility</span>
        </h3>
        <p>Nostra nascetur commodo ipsum cubilia ultrices curabitur. Eleifend tempus nec orci conubia mauris dui porta.</p>
      </div>
    </div>
  );
};

export default Features;
