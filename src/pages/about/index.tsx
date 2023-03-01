import { AboutHeader, Footer, Navbar } from '@/components/atoms'
import React from 'react'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[60px]"></div>
      <AboutHeader />
      <Footer />
    </div>
  )
}

export default About
