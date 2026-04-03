import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Rooms from './Rooms'
import About from './About'
import Footer from './Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Rooms/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home