export const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen -mt-24">
      <div className="bg-white p-8 rounded-lg lg:w-4/12 md:w-8/12 w-11/12">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login your account
        </h2>
        <hr className="mb-6" />

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm mt-6">
          Don’t Have An Account?{" "}
          <a href="#" className="text-red-500 font-medium hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};
