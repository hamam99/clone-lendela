import {
  BillboardAds,
  Experience,
  Introduction,
  LicensedPartners,
  Reviews,
  Singpass
} from '@/components/about'
import { Footer, Navbar } from '@/components/atoms'
import React from 'react'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[60px]" />
      <Introduction />
      <LicensedPartners />
      <div className="bg-[#f8f8f8f8]">
        <Divider />
        <Singpass />
        <Divider />
        <Reviews />
        <Divider />
        <BillboardAds />
        <Experience />
      </div>

      <Footer />
    </div>
  )
}

export default About

const Divider = () => {
  return (
    <div className="flex w-full justify-center py-16">
      <div className="h-[1px] bg-gray-200 w-[1600px] flex self-center" />
    </div>
  )
}
