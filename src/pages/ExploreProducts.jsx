import React from 'react'
import ProductSideNav from '../components/ProductSideNav'
import { Outlet } from 'react-router-dom'

const ExploreProducts = () => {
  return (
    <div className='mt-20 h-[calc(100vh-90px)]'>
        <div className="grid grid-cols-12">
 <div className="col-span-3"><ProductSideNav/></div>
<div className='col-span-9'>
     <Outlet/>
</div>

        </div>
      
    </div>
  )
}

export default ExploreProducts
