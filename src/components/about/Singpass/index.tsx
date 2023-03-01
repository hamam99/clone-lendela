import Image from 'next/image'
import React from 'react'

const Singpass = () => {
  return (
    <div className="flex w-full justify-center py-4">
      <div className="max-w-[1024px]">
        <div className="flex gap-2 items-center justify-center pb-4">
          <h1 className="font-bold text-3xl">We use</h1>
          <Image
            alt="singpass"
            src={require('/public/assets/icons/singpass-v2.webp')}
            height={24}
            className="mb-[-10px]"
          />
        </div>
        <p className="text-center">
          The Singapore Government has authorised Lendela to use SingPass after
          strict and thorough checks. Using SingPass with Lendela is quick, easy
          and secure!
        </p>
      </div>
    </div>
  )
}

export default Singpass
