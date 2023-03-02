import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Icon from '/public/assets/icons/icon.svg'

const Navbar = () => {
  return (
    <div className="fixed w-full h-30 shadow-xl z-[100] ease-in-out duration-300 py-2 bg-white">
      <div className="flex flex-row justify-center items-center w-full h-full px-2 2xl:px-16">
        <Link href={'/'}>
          <Image src={Icon} alt={'/'} height={32} />
        </Link>
        <div>
          <ul className="flex flex-row justify-center items-center">
            <Link
              href="/about"
              className="ml-10 text-sm hover:border-b"
              scroll={false}
            >
              <p className="font-bold text-[#707070]">About Us</p>
            </Link>
            <Link
              href="/#home"
              className="ml-10 text-sm hover:border-b"
              scroll={false}
            >
              <p className="font-bold text-[#707070]">How it works</p>
            </Link>
            <Link
              href="/#home"
              className="ml-10 text-sm hover:border-b"
              scroll={false}
            >
              <p className="font-bold text-[#707070]">FAQ</p>
            </Link>
            <Link
              href="/#home"
              className="ml-10 text-sm hover:border-b"
              scroll={false}
            >
              <p className="font-bold text-[#707070]">Contact Us</p>
            </Link>
            <button className="ml-10 bg-transparent hover:bg-green-300 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
              Login
            </button>
            {/* <Link
              href="/#home"
              className="ml-10 text-sm hover:border-b"
              scroll={false}
            >
              Login
            </Link> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
