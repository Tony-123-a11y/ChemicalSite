import React from 'react'
import ProductSideNav from '../components/ProductSideNav'
import { Outlet } from 'react-router-dom'
import Search from './Search'
import ChemicalSidebar from '../components/SideNav'

const ExploreProducts = () => {
  return (
    <div className=' min-h-[calc(100vh-90px)] '>
        <div className="grid grid-cols-12">
 {/* <div className="col-span-3 overflow-y-scroll"><ProductSideNav/></div> */}
 <div className="col-span-3 "><ChemicalSidebar/></div>
<div className='col-span-9'>
   <Search/>
</div>

        </div>
      
    </div>
  )
}

export default ExploreProducts
