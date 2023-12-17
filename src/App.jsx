import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Advance from './Component/Advance/Advance'
import Slider from './Component/Slider/Slider'


function App() {

  return (
    <div >
   <Navbar></Navbar>
   <Hero></Hero>
   <Advance></Advance>
   <Slider></Slider>
    </div>
  )
}

export default App
