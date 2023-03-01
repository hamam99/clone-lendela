import Image from 'next/image'
import React from 'react'

import ImgAboutHeader from '/public/assets/images/about-header.png'

const Introduction = () => {
  return (
    <div className="flex w-full justify-center py-4">
      <div className="max-w-[1024px] flex flex-col justify-center ">
        <h1 className="font-bold text-2xl pt-4">
          Making your loan search simple and transparent
        </h1>
        <div className="grid grid-cols-2">
          <div className="flex flex-col col-span-1 justify-center gap-6">
            <p>
              Lendela is an online platform for you to find the best loan with
              one application - free of charge and with no hidden fees.
            </p>
            <p className="">
              Unlike other traditional loan comparison websites, we guide you
              from the start of your application to the time you receive the
              loan from the financial institution of your choice.{' '}
            </p>
          </div>
          <div className="col-span-1">
            <Image src={ImgAboutHeader} alt="about header" />
          </div>
        </div>
        <div className="flex justify-center gap-6 py-10">
          <button className="bg-green-500 px-8 py-2 text-white font-bold rounded-lg">
            COMPARE NOW
          </button>
          <button className="bg-white border-2 border-green-500 px-8 py-2 text-green-500 font-bold rounded-lg">
            HOW IT WORKS
          </button>
        </div>
      </div>
    </div>
  )
}

export default Introduction
