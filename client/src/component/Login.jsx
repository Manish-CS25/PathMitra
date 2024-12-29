import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white p-6 max-w-md rounded-xl shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="relative">
            <Link
              to="/"
              className="absolute right-0 top-0 text-gray-400 hover:text-gray-600 transition-colors"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Welcome back</h3>
            
            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors"
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p role="alert" className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  This field is required
                </p>
              )}
            </div>

            {/* Remember me and Forgot password */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-pink-500 hover:text-pink-600">
                Forgot password?
              </a>
            </div>

            {/* Button and Sign up link */}
            <div className="space-y-4">
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2.5 rounded-lg font-medium hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Sign in
              </button>
              <p className="text-center text-sm text-gray-600">
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="text-pink-500 hover:text-pink-600 font-medium"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;