import React from 'react'
import Navbar from './sections/Navbar'
import { Hero } from './sections/Hero'
import ServiceSummary from './sections/ServiceSummary'
import Services from './sections/Services'
import About from './sections/About'

const App = () => {
  return (
    <div className='relative w-screen min-h-screen overflow-x-auto'>
      <Navbar />
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
    </div>
  )
}

export default App