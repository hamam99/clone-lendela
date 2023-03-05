import { Footer, Navbar } from '@/components/atoms'
import { Form } from '@/components/contact'
import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { MdOutlineMail, MdLocationOn } from 'react-icons/md'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col w-full pt-[60px] justify-center items-center pb-20">
        <div className="max-w-[1024px]  grid grid-cols-2 w-full gap-4">
          <div className="col-span-1 w-full">
            <Form />
          </div>
          <div className="col-span-1 w-full flex flex-col gap-4 justify-center ml-10">
            <div>
              <div className="flex items-center gap-2">
                <AiFillPhone className="text-gray-400" />
                <p className="font-bold text-gray-400">PHONE NUMBER</p>
              </div>
              <a href={'tel:+6583125704'}>
                <h1 className="font-bold underline text-green-500 text-2xl hover:cursor-pointer">
                  +65 8312 5704
                </h1>
              </a>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <MdOutlineMail className="text-gray-400" />
                <p className="font-bold text-gray-400">E-MAIL</p>
              </div>
              <a href="mailto:contact@lendela.com">
                <h1 className="font-bold underline text-green-500 text-2xl hover:cursor-pointer">
                  contact@lendela.com
                </h1>
              </a>
            </div>

            <div>
              <div className="flex items-center gap-">
                <MdLocationOn className="text-gray-400" />
                <p className="font-bold text-gray-400">Address</p>
              </div>
              <h1 className="font-bold text-2xl">Lendela Pte.Ltd</h1>
              <p>UEN: 201801220D</p>
              <p className="mt-2">
                10 Anson Rd, #05-01 <br />
                Singapore 079903
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
