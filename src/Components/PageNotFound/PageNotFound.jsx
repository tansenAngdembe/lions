import React from "react";
import { NavLink } from "react-router";


const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
      <p className="text-2xl font-semibold text-gray-800 mb-2">
        Oops! Page not found
      </p>
      <p className="text-gray-600 mb-6">
        The page you’re looking for doesn’t exist or was moved.
      </p>
      <NavLink
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition-all duration-300"
      >
        Go back Home
      </NavLink>
    </div>
  );
};

export default PageNotFound;
