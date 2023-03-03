import { Footer, Navbar } from '@/components/atoms'
import { ContactUs, Promise, Steps } from '@/components/HowItWorks'
import React from 'react'

const HowItWorks = () => {
  return (
    <div>
      <Navbar />
      <div className=" flex flex-col w-full justify-center items-center pt-[60px] mx-auto">
        <Steps />
        <Promise />
        <ContactUs />
        <Footer />
      </div>
    </div>
  )
}

export default HowItWorks
