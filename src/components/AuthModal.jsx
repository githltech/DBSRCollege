import React, { useState } from "react";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left Section (Form) */}
          <div className="w-full md:w-2/3 p-6">
            <h2 className="text-2xl font-bold mb-4">
              {isLogin ? "Login" : "Sign Up"}
            </h2>
            <form className="space-y-4">
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              )}
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-md font-bold hover:bg-blue-700 transition duration-300"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
            <p className="mt-4 text-gray-600 text-sm text-center">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-600 font-semibold hover:underline"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>

          {/* Right Section (Image) */}
          <div className="hidden md:block w-1/3 bg-blue-500">
            <img
              src="https://via.placeholder.com/300"
              alt="Auth Illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
