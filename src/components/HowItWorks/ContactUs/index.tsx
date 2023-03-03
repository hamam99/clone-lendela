import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import imgTeam2 from '/public/assets/images/team-2.webp'
const ContactUs = () => {
  return (
    <div className="w-full py-8">
      <div className="max-w-[1024px] flex flex-col  mx-auto">
        <div className="grid grid-cols-2 w-full gap-20">
          <div className="col-span-1 text-center max-w-[350px] mx-auto">
            <h1 className="font-bold text-2xl">
              With you from Start to Finish
            </h1>
            <p>
              Our customer relationship team will be there with you throughout
              the entire process, to guide you and answer any questions.
            </p>
            <p className="mt-14">Any questions?</p>
            <Link href={'/contact'}>
              <button
                className="rounded border-2 border-green-500 w-full py-2 font-bold text-green-500 mt-3 
            hover:bg-green-500 hover:text-white"
              >
                CONTACT US
              </button>
            </Link>
          </div>
          <div className="col-span-1 ">
            <Image src={imgTeam2} alt="team" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
