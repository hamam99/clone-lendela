import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import icLendela from '/public/assets/icons/icon.svg'
const Footer = () => {
  return (
    <>
      <div className="flex w-full h-full bg-gray-100 py-6 justify-center">
        <div className="max-w-[1024px] grid grid-cols-4 w-full">
          <div className="col-span-1  w-full">
            <Image src={icLendela} height={32} alt="Icon" className="mb-4" />
            <h1 className="font-bold text-xl">Lendela Pte. Ltd.</h1>
            <p className="text-xs mb-4">(UEN: 201801220D)</p>
            <p>10 Anson Rd, #05-01</p>
            <p>Singapore 079903</p>
          </div>
          <div className="col-span-1 ">
            <h1 className="font-bold text-2xl text-[#adaba7] mb-4">
              About Lendela
            </h1>
            <ul>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  What is Lendela?
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  How are we different?
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Is Lendela legit?
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Is Lendela safe?
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Lendela review and offer
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Contact us
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Partner with us
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Blog
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Press
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Privay Policy
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Term of use
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Acceptable use policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h1 className="font-bold text-2xl text-[#adaba7] mb-4">Loans</h1>
            <ul>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Personal Loan
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Personal loan in Singapore: A dedicated guide
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Personal bank loan guide
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Debt consolidation plan
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Debt consolidation guide
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Debt consolidation plan calculator
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Cash loan guide
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Urgent loan guide
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Immediate loan guide
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Best renovation loan in Singapore
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Renovation loan guide
                </Link>
              </li>
              <li className="text-sm">
                <Link href={'/'} className="hover:underline">
                  Renovation loans – How to apply{' '}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h1 className="font-bold text-2xl text-[#adaba7] mb-4">
              Stay In Touch
            </h1>
            <div className="flex mx-auto gap-2">
              <Link
                href={'https://www.facebook.com/lendelaSG'}
                target={'_blank'}
              >
                <Image
                  src={require('/public/assets/icons/fb.svg')}
                  alt="facebook"
                  height={36}
                />
              </Link>
              <Link
                href={'https://www.linkedin.com/company/lendela/'}
                target={'_blank'}
              >
                <Image
                  src={require('/public/assets/icons/ln.svg')}
                  alt="Linkedin"
                  height={36}
                />
              </Link>
              <Link href={'https://twitter.com/Lendela_SG'} target={'_blank'}>
                <Image
                  src={require('/public/assets/icons/tw.svg')}
                  alt="twitter"
                  height={36}
                />
              </Link>
            </div>
            <Link
              href={
                'https://directory.singaporefintech.org/directory/listing/lendela-pte-ltd'
              }
              target={'_blank'}
            >
              <Image
                className="mt-4"
                src={require('/public/assets/icons/sfa-logo.webp')}
                alt="sfa logo"
                height={36}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full bg-white py-6 justify-center mx-auto">
        <div className="max-w-[1024px] flex gap-3 justify-center mx-auto">
          <Link href={'https://sg.lendela.com/'} target={'_blank'}>
            <Image
              src={require('/public/assets/icons/sg.svg')}
              alt="sg"
              className="drop-shadow-sm hover:drop-shadow-lg shadow-lg"
              height={24}
            />
          </Link>
          <Link href={'https://hk.lendela.com/'} target={'_blank'}>
            <Image
              className="drop-shadow-sm hover:drop-shadow-lg shadow-lg"
              src={require('/public/assets/icons/hk.svg')}
              alt="hk"
              height={24}
              style={{
                boxShadow: 'initial'
              }}
            />
          </Link>
        </div>
        <p className="text-center mt-4">
          Copyright © 2022. Lendela Pte. Ltd. 201801220D. All rights reserved.
        </p>
      </div>
    </>
  )
}

export default Footer
