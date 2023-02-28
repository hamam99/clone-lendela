import React from 'react'
import icStopwatch from '/public/assets/icons/stopwatch.svg'
import icMobile from '/public/assets/icons/mobile-2.svg'
import icWallet from '/public/assets/icons/wallet-2.svg'
import Image from 'next/image'

const data = [
  {
    id: 1,
    icon: icStopwatch,
    text: '1. Apply for an online loan in Singapore by filling out an easy application form'
  },
  {
    id: 2,
    icon: icMobile,
    text: '2. Receive offers from multiple banks in minutes'
  },
  {
    id: 3,
    icon: icWallet,
    text: '3. Compare offers and select your loan preference online'
  }
]
const StepsPersonalLoan = () => {
  return (
    <div className="flex flex-col w-full h-full mx-auto bg-white items-center py-8 justify-center">
      <h1 className="font-bold text-[28px]">
        ONE APPLICATION – MULTIPLE PERSONALISED OFFERS
      </h1>
      <p className="text-[16px]">
        Three easy steps to the best possible personal loan in Singapore for
        you:
      </p>
      <div className="flex gap-[64px] ">
        {data.map((item) => {
          return (
            <div key={item.id} className="flex flex-col  items-center ">
              <Image
                src={item.icon}
                alt="icon"
                height={128}
                className={'py-5'}
              />
              <p className="max-w-[250px] text-left">{item.text}</p>
            </div>
          )
        })}
      </div>
      <button className="bg-green-500 w-[200px] h-[48px] rounded-lg mt-6">
        <h1 className="text-white font-bold text-xl">LEARN MORE</h1>
      </button>
    </div>
  )
}

export default StepsPersonalLoan
