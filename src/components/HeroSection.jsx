import React, { useEffect, useState } from 'react'
import bg1 from '../assets/bg1.avif'
import bg2 from '../assets/bg2.avif'
import bg3 from '../assets/bg3.jpg'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
const HeroSection = () => {
     const images = [
    bg1,bg2,bg3
  ];
   
  const [count, setcount] = useState(0);
console.log(count)
useEffect(() => {
  const timeOut= setInterval(() => {
     if(count>1){
        return setcount(0)
     }
   setcount(count+1)
  }, 3000);
  return ()=> clearInterval(timeOut)
}, [count])

  return (
    <div className='container mx-auto'>
      <section className="relative h-screen  overflow-hidden">
  
  <motion.img 
  initial={{
    opacity:0.7,
    scale:0.97
  }}

  animate={{
    opacity:1,
    scale:1
  }}
  transition={{
    duration:0.6
  }}
  src={images[count]} key={count} id="hero-bg" className="absolute  bg-contain bg-center w-full "></motion.img>


  <div className="absolute inset-0 bg-black/30"></div>

  <div className="relative gap-10  z-10 h-full flex-col flex items-center justify-center text-center px-4">
    <div className="text-white max-w-3xl">
      <h1 className="text-5xl font-bold mb-4 font-poppins max-sm:text-2xl ">
        Trusted Chemical Solutions for Every Industry
      </h1>
      <p className="text-lg font-merriweather text-gray-200 max-sm:text-sm">
        Delivering purity, safety, and reliability—worldwide. Explore a wide range of certified chemicals for industrial and commercial use.
      </p>
    </div>
    <div className="mt-6 flex justify-center  gap-4">

  <button className="flex flex-row-reverse items-center gap-2 cursor-pointer px-8 py-3 border border-white text-white rounded-full backdrop-blur-md hover:bg-white hover:text-[#8B0000] transition font-inter">
   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>

    Learn More
  </button>


  <Link to={'/products'} className="flex flex-row-reverse items-center gap-2 px-8 py-3 cursor-pointer bg-[#8B0000] text-white rounded-full hover:bg-red-800 transition font-inter">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
</svg>

   Explore Products
  </Link>
</div>
  </div>
</section>
    </div>
  )
}

export default HeroSection
