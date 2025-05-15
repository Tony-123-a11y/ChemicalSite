import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const {user,logout}= useContext(UserContext)
  console.log(user)
  return (
    <div>
      <nav className="bg-white sticky w-full left-0 top-0 z-50 shadow-sm border-red-600">
        <div className="container xl:max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo and Punchline */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <div>
              <h1 className="text-3xl font-bold text-red-600 font-poppins">
                ChemCo
              </h1>
              <p className="text-xs text-gray-600 -mt-1 font-serif">
                Pure Chemicals. Pure Trust.
              </p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="relative w-1/2 max-md:w-2/3 max-sm:w-full mx-4">
            <input
              type="text"
              placeholder="Search chemicals, categories..."
              className="w-full border border-red-600 rounded-full py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-red-600"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-600 hover:text-white hover:bg-red-600 rounded-full p-1 transition">
              <FaSearch />
            </button>
          </div>

          {/* Sign In / Join Free */}
         {
          user ?   <div className="flex items-center gap-6">
      {/* User Details */}
      <div className="text-right">
        {/* <div className="font-semibold text-gray-800">{user.firstname + user.lastname}</div> */}
        <div className="text-sm text-gray-500 ">{user.email}</div>
        </div>
         <button
      onClick={logout}
      className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
    >
      <FiLogOut className="w-5 h-5" />
      <span>Logout</span>
    </button>
      

      {/* Logout Button */}
      
    </div> :  
          <div className="flex items-center space-x-3 max-sm:hidden font-inter">
            <Link
              to="/login"
              className="text-red-600 hover:underline text-sm cursor-pointer"
            >
              Sign In
            </Link>
            <Link to="/register">
              <button className="bg-red-600 text-white text-sm px-4 py-2 rounded-full cursor-pointer hover:bg-red-700 transition">
                Join Free
              </button>
            </Link>
          </div>
         }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
