import React from "react";
import { Link } from "react-router";

export const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen -mt-24">
      <div className="bg-white p-8 rounded-lg lg:w-4/12 md:w-8/12 w-11/12">
        <h2 className="text-2xl font-bold text-center mb-6">
          Register your account
        </h2>
        <hr className="mb-6" />

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Photo URL
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="Password"
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 transition"
          >
            Register
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm mt-6">
          Already Have An Account?{" "}
          <Link
            to={"/auth/login"}
            className="text-red-500 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
