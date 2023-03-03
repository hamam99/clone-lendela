import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import imgHowIt1 from '/public/assets/icons/how-it-works-1.webp'
import imgHowIt2 from '/public/assets/icons/how-it-works-2.webp'
import imgHowIt3 from '/public/assets/icons/how-it-works-3.webp'

const Promise = () => {
  return (
    <div className="w-full bg-[#43b649] py-8">
      <div className="max-width-[1024px] flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl text-white mb-6">
          Lendela's Promise To You
        </h1>
        <div className="flex  gap-10">
          {listPromise.map((item, index) => {
            return (
              <div
                className=" flex flex-col max-w-[300px] text-center items-center"
                key={index}
              >
                <Image src={item.icon} />
                <p className="text-white ">{item.description}</p>
              </div>
            )
          })}
        </div>
        <Link href={'/about'}>
          <button className="rounded border-2 border-white py-2 px-16 text-white font-bold mt-10">
            MORE ABOUT US
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Promise

const listPromise = [
  {
    icon: imgHowIt1,
    description:
      'Don’t worry about getting contacted by multiple parties trying to sell you their loan. Unlike other comparison websites, we keep your contact details hidden to our partners. We will only share it with a partner once you have chosen their offer.'
  },
  {
    icon: imgHowIt2,
    description:
      'You are always in control - there is no need to choose an offer if you do not wish to proceed.'
  },
  {
    icon: imgHowIt3,
    description:
      'The service is always free for you and there are no hidden costs. We earn by getting a commission from the financial institution, and you do not pay anything extra.'
  }
]
