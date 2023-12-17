import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Advance from './Component/Advance/Advance'


function App() {

  return (
    <div >
   <Navbar></Navbar>
   <Hero></Hero>
   <Advance></Advance>
    </div>
  )
}

export default App
