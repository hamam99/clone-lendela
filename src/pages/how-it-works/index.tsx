import { Navbar } from '@/components/atoms'
import { Steps } from '@/components/HowItWorks'
import React from 'react'

const HowItWorks = () => {
  return (
    <div>
      <Navbar />
      <div className=" flex flex-col w-full justify-center items-center pt-[60px] mx-auto">
        <Steps />
      </div>
    </div>
  )
}

export default HowItWorks
