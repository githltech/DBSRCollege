import React, { useState } from "react";


function BookingPage() {

    const [isOpen, setIsOpen] = useState(false); 

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#043873] text-white py-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="sm:text-2xl text-xs font-bold">
          VroomVroomVroom.com
        </div>
        {/* Hamburger Icon (Visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Full Menu (Visible on medium screens and above) */}
        <nav className="hidden md:flex lg:space-x-6 md:space-x-3">
          <a href="/" className="hover:text-orange-500">Home</a>
          <a href="#" className="hover:text-orange-500">Locations</a>
          <a href="#" className="hover:text-orange-500">Vehicles</a>
          <a href="#" className="hover:text-orange-500">Suppliers</a>
          <a href="/contactus" className="hover:text-orange-500">Help</a>
          <a href="#" className="hover:text-orange-500">My Booking</a>
        </nav>
      </div>

      {/* Mobile Menu (Visible when the hamburger menu is clicked) */}
      {isOpen && (
        <nav className="md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="/" className="hover:text-orange-500">Home</a>
            <a href="#" className="hover:text-orange-500">Locations</a>
            <a href="#" className="hover:text-orange-500">Vehicles</a>
            <a href="#" className="hover:text-orange-500">Suppliers</a>
            <a href="/contactus" className="hover:text-orange-500">Help</a>
            <a href="#" className="hover:text-orange-500">My Booking</a>
          </div>
        </nav>
      )}
    </header>
      {/* Main Section */}
      <main className="container mx-auto py-10">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Review / Cancel Booking
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            To retrieve your booking details, please enter your booking confirmation number and last name below.
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Booking Confirmation Number:</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Last Name:</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500" />
            </div>
            <div className="mb-4 text-right">
              <a href="#" className="text-orange-500 hover:underline">Forgot Reservation Number?</a>
            </div>
            <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-bold hover:bg-orange-600">
              Retrieve My Booking
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Reviews</a></li>
              <li><a href="#" className="hover:underline">Partner With Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Popular Airports</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">McCarran Airport</a></li>
              <li><a href="#" className="hover:underline">Seattle-Tacoma Airport</a></li>
              <li><a href="#" className="hover:underline">LaGuardia Airport</a></li>
              <li><a href="#" className="hover:underline">Other Airports</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Book In</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Australia</a></li>
              <li><a href="#" className="hover:underline">New Zealand</a></li>
              <li><a href="#" className="hover:underline">Canada</a></li>
              <li><a href="#" className="hover:underline">UK</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Rental Information</a></li>
              <li><a href="#" className="hover:underline">Road Trips</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Newsletter Signup</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>Car Rental: Easier Than Ever</p>
          <p>©2024 VroomVroomVroom Pty Ltd</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#"><img src="https://files.vroomvroomvroom.com/assets/logos/ios-120x40_2x.png" alt="App Store" className="w-24" /></a>
            <a href="#"><img src="https://files.vroomvroomvroom.com/assets/logos/android-120x40_2x.png" alt="Google Play" className="w-24" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BookingPage;
