import React, { useEffect, useState } from "react";
import bg1 from "../assets/bg1.avif";
import bg2 from "../assets/bg2.avif";
import bg3 from "../assets/bg3.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlus } from "react-icons/fi"; 

const HeroSection = () => {
  const images = [bg1, bg2, bg3];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <section className="relative h-screen overflow-hidden">
        <motion.img
          initial={{ opacity: 0.7, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src={images[count]}
          alt={`Hero Background ${count}`}
          key={count}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-4 font-poppins max-sm:text-3xl">
              Trusted Chemical Solutions for Every Industry
            </h1>
            <p className="text-lg font-merriweather text-gray-200 max-sm:text-sm">
              Delivering purity, safety, and reliability—worldwide. Explore a
              wide range of certified chemicals for industrial and commercial
              use.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 px-8 py-3 border border-white text-white rounded-full backdrop-blur-md hover:bg-white hover:text-red-800 transition font-inter">
              <FiArrowRight className="text-xl" />
              Learn More
            </button>

            <Link
              to="/products"
              className="flex items-center gap-2 px-8 py-3 bg-[#8B0000] text-white rounded-full hover:bg-red-800 transition font-inter"
            >
              <FiPlus className="text-xl" />
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
