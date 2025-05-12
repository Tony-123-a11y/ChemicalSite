import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ExploreProducts from './pages/ExploreProducts'
import React from 'react'
import Navbar from './components/Navbar'
import Search from './pages/Search'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/products' element={<ExploreProducts/>}>
    <Route index element={<Search/>}/>
    <Route path='search' element={<Search />} />
    </Route>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
