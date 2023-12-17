import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Advance from './Component/Advance/Advance'
import Slider from './Component/Slider/Slider'
import Discount from './Component/Discount/Discount'


function App() {

  return (
    <div >
   <Navbar></Navbar>
   <Hero></Hero>
   <Advance></Advance>
   <Slider></Slider>
   <Discount></Discount>
    </div>
  )
}

export default App
