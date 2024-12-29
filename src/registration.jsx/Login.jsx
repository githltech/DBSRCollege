import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center space-x-4 mb-4">
          <button
            onClick={() => setIsLogin(true)}
            className={`py-2 px-4 rounded-lg focus:outline-none ${isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`py-2 px-4 rounded-lg focus:outline-none ${!isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Register
          </button>
        </div>

        <div className="h-80 overflow-y-scroll">
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
};

const LoginForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-bold text-gray-700">Email</label>
        <input
          type="email"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700">Password</label>
        <input
          type="password"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        Login
      </button>
    </form>
  );
};

const RegisterForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-bold text-gray-700">Username</label>
        <input
          type="text"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700">Email</label>
        <input
          type="email"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700">Password</label>
        <input
          type="password"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700">Confirm Password</label>
        <input
          type="password"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Confirm your password"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        Register
      </button>
    </form>
  );
};

export default Login;
