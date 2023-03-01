import { Introduction } from '@/components/about'
import { Footer, Navbar } from '@/components/atoms'
import React from 'react'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[60px]" />
      <Introduction />
      <Footer />
    </div>
  )
}

export default About
