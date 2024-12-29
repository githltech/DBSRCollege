import React, { useState } from 'react';

const RVRentalForm = () => {
  const [pickupLocation, setPickupLocation] = useState('Denver');
  const [dropOffLocation, setDropOffLocation] = useState('Same as pick up');
  const [pickUpDate, setPickUpDate] = useState('2024-09-11');
  const [returnDate, setReturnDate] = useState('2024-09-14');
  const [residentCountry, setResidentCountry] = useState('Australia');
  const [licenseCountry, setLicenseCountry] = useState('United States');
  const [age, setAge] = useState(30);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for RV rentals...');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">RV Rental Search</h2>
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700">Pick Up Location</label>
          <input
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-gray-700">Drop Off Location</label>
          <select
            value={dropOffLocation}
            onChange={(e) => setDropOffLocation(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option>Same as pick up</option>
            {/* Add more options if needed */}
          </select>
        </div>

        <div className="flex space-x-4">
          <div className="flex flex-col flex-1">
            <label className="mb-2 text-gray-700">Pick Up Date</label>
            <input
              type="date"
              value={pickUpDate}
              onChange={(e) => setPickUpDate(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col flex-1">
            <label className="mb-2 text-gray-700">Return Date</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-gray-700">I am a resident of</label>
          <select
            value={residentCountry}
            onChange={(e) => setResidentCountry(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option>Australia</option>
            <option>Canada</option>
            <option>United States</option>
            {/* Add more options if needed */}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-gray-700">with</label>
          <select
            value={licenseCountry}
            onChange={(e) => setLicenseCountry(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Australia</option>
            {/* Add more options if needed */}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-gray-700">I am</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-bold">Need help with your RV rental?</h3>
        <ul className="list-disc ml-5 mt-2">
          <li>Australia: 1800 316 451</li>
          <li>Canada/United States: 866 536 0571</li>
          <li>New Zealand: 0800 003 563</li>
          <li>United Kingdom: 020 3608 8483</li>
          <li>International: +61 3 7037 3002</li>
        </ul>
      </div>
    </div>
  );
};

export default RVRentalForm;
