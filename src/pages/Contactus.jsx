import React from 'react';
import Layout from '../components/Layout';
import { IoMdCall } from "react-icons/io";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";


const Contactus = () => {
  return (
    <Layout>
      <div className="bg-white">
      {/* Header Section */}
      <div className="bg-[#2b334f] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <a href="/" className="border-b-[1.3px] text-red-500 hover:text-red-700">car rental</a>
          <h2 className="text-4xl font-bold mb-4">Contact us</h2>
          <p className="text-[15px] mb-8">
          VroomVroomVroom’s world-class customer service team is here to <br className='hidden sm:block' /> help. No question is too small — or too hard — so if you need any <br className='hidden sm:block' />assistance whatsoever, please get in touch. Our team can help with <br className='hidden sm:block' />
           pre-booking questions along with any queries you might have while <br className='hidden sm:block' /> you’re on the road, or about the ins and outs of returning your vehicle <br className='hidden sm:block' /> at the end of your rental period.          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="bg-white text-blue-900 shadow-lg rounded-xl p-4 w-full  lg:w-80   flex
            items-center gap-4">
              <IoMdCall className=" mb-4 text-orange-500 bg-orange-100 rounded-full w-14 h-14 p-2" />
              <div className="">
              <p className="font-bold text-xl">942 517 5781
              </p>
              <p className="text-xs ">Mon-Fri, 9am-5pm AEST</p>
              </div>
            </div>

            <div className="bg-white text-blue-900 shadow-lg rounded-xl p-4 w-full lg:w-80  flex
            items-center gap-4">
              <IoChatboxEllipsesSharp className=" mb-4 text-blue-900 bg-blue-100 rounded-full w-14 h-14 p-2" />
              <div className="">
              <p className="font-bold text-xl">Facebook</p>
              <p className="text-xs ">Talk to us on Facebook</p>
              <a href="/" className='text-[13px] text-blue-600 font-medium hover:border-b-[1.3px] border-blue-600'>start a chat</a>
              </div>
            </div>

             <div className="bg-white text-blue-900 shadow-lg rounded-xl p-4 w-full lg:w-80   flex
            items-center gap-4">
              <FaQuestionCircle className=" mb-4 text-green-500 bg-blue-100 rounded-full w-14 h-14 p-2" />
              <div className="">
              <p className="font-bold text-xl">New to car rental</p>
              <p className="text-xs ">your questions answered</p>
              <a href="/" className='text-[13px] text-blue-600 font-medium hover:border-b-[1.3px] border-blue-600'>Learn more</a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Form and Phone Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className='shadow-2xl p-8 rounded-lg'>
          <h3 className="text-2xl font-bold mb-4">How can we help?</h3>
          <p className="mb-6 text-gray-700">
            If you have questions about renting a vehicle, fill out the form below or email us. We’ll be in touch. Our email address is: <a href="mailto:info@vroomvroomvroom.com" className="text-blue-600">info@vroomvroomvroom.com</a>
          </p>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Your booking number (if you have one)"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <textarea
                placeholder="Your comments or questions"
                className="w-full p-3 border border-gray-300 rounded-md h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white w-full p-3 rounded-md font-bold"
            >
              Send enquiry
            </button>
          </form>
        </div>

        {/* Phone Contact Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Get in touch by phone</h3>
          <p className="mb-6">You can also call us on our toll-free numbers below.</p>
          <div className="space-y-4">
            {[
              {image:'https://test-files.vroomvroomvroom.com/cms/assets/images/global-contactus-phone-usflag--small.png', country: 'USA', number: '888 269 6248' },

              
              {image:'https://test-files.vroomvroomvroom.com/cms/assets/images/global-contactus-phone-caflag--small.png', country: 'Canada', number: '888 299 6248' },
              {image:'https://test-files.vroomvroomvroom.com/cms/assets/images/global-contactus-phone-nzflag--small.png', country: 'New Zealand', number: '(+64) 0800 141 466' },

            ].map((contact, index) => (
              <div key={index} className="bg-blue-50 p-4 border rounded-md flex items-center gap-4">
                <div className="rounded-full bg-white p-4">
                <img src={contact.image} alt="" className='w-7 h-7' />
                </div>
                <div className="">
                <p className="font-bold text-[14px] text-gray-700">{contact.country}</p>
                <a href='/' className='text-blue-600 hover:border-b-blue-600 hover:border-b-[1.4px]'>{contact.number}</a>
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Office Info Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4 text-orange-500">
            🏢 Head office
          </h3>
          <p className="text-gray-700 mb-4">
          Palari Mandla road tahsil seoni 
          district seoni Madhya Pradesh 480661
          </p>
          <p className="text-sm text-gray-500 italic">
            *No cars are available for pick up from this office. Please make your car rental booking online or contact us for assistance.
          </p>
        </div>

        {/* Google Maps Section */}
        <div className="relative h-80 w-full">
          <iframe
            title="Head Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.19224838982!2d153.0057584!3d-27.469402599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9157d7c9e2cb4f%3A0xf03732b80ae1fba0!2s349%20Coronation%20Dr%2C%20Milton%20QLD%204064%2C%20Australia!5e0!3m2!1sen!2sus!4v1694506804561!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    </div>
    </Layout>
  );
};

export default Contactus;
