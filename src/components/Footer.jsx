import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Column 1 - Company Info */}
          <div>
            <h2 className="text-lg font-semibold">TechXpert</h2>
            <p className="mt-2 text-gray-400">Innovating your digital experience.</p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div>
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <div className="mt-2 flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook/>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaXTwitter/>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} TechXpert. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
