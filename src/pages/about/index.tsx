import { Introduction, LicensedPartners, Reviews } from '@/components/about'
import { Footer, Navbar } from '@/components/atoms'
import React from 'react'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[60px]" />
      <Introduction />
      <LicensedPartners />
      <Divider />
      <Reviews />
      <Footer />
    </div>
  )
}

export default About

const Divider = () => {
  return (
    <div className="flex w-full justify-center my-16">
      <div className="h-[1px] bg-gray-300 w-[1600px] flex self-center" />
    </div>
  )
}
