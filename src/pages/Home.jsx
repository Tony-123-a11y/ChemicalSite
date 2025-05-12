import React from 'react'

import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/Features'
import  ProductSection  from '../components/ProductSection'
import Footer from '../components/Footer'
import SocialSideBar from '../components/SocialSideBar'

const Home = () => {
  return (
   <div className='bg-gray-50 border'>
    <SocialSideBar/>
   
   <HeroSection/>
   <FeaturesSection/>
   <ProductSection/>
<Footer/>
   </div>
  )
}

export default Home
