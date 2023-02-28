import React from 'react'
import icE27 from '/public/assets/icons/e27.webp'
import icMoneyFm from '/public/assets/icons/moneyfm.webp'
import icDealStreetAsia from '/public/assets/icons/dealstreetasia.webp'
import icDigitalNewsAsia from '/public/assets/icons/digitalnewsasia.webp'
import icAsianBanking from '/public/assets/icons/asian-banking-and-finance.webp'
import Image from 'next/image'

const dataFeaturedIn = [
  icE27,
  icMoneyFm,
  icDealStreetAsia,
  icDigitalNewsAsia,
  icAsianBanking
]

const About = () => {
  return (
    <div className="flex w-full h-full bg-green-500 justify-center items-center py-8">
      <div className="flex flex-col max-w-[1024px] justify-center items-center">
        <h1 className="text-white font-bold text-[24px] pb-6">
          LEARN MORE ABOUT LENDELA
        </h1>
        <p className="text-white text-center">
          Our goal is to make your loan application process quicker, simpler,
          and more transparent. As the sole personal loan company in Singapore
          that provides a truly personalised loan comparison service, we support
          you all the way from application to disbursement. Click below to read
          more about Lendela and how we empower thousands of loan-seeking
          Singaporeans to compare options for{' '}
          <span className="font-bold underline hover:cursor-pointer">
            debt consolidation
          </span>
          ,{' '}
          <span className="font-bold underline hover:cursor-pointer">
            wedding loans
          </span>
          ,{' '}
          <span className="font-bold underline hover:cursor-pointer">
            personal loans for cars
          </span>
          ,{' '}
          <span className="font-bold underline hover:cursor-pointer">
            renovation loans
          </span>{' '}
          etc., every month.
        </p>

        <button className="bg-white rounded-md w-[140px] h-[48px] my-16">
          <p className="text-green-500 font-bold text-xl">ABOUT US</p>
        </button>
        <div>
          <p className="text-white text-center">FEATURED IN</p>
          <div className="flex gap-20 mt-10">
            {dataFeaturedIn.map((item, index) => {
              return <Image src={item} alt="icon" key={index} height={48} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
