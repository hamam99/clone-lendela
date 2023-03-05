import { Footer, Navbar } from '@/components/atoms'
import React from 'react'
import icGear from '/public/assets/icons/gear.svg'
import icForm from '/public/assets/icons/form.svg'
import icHandshake from '/public/assets/icons/handshake.svg'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import bg from '/public/assets/images/top-wave.svg'
import Link from 'next/link'

const Faq = () => {
  return (
    <div>
      <Navbar />
      <div className=" flex flex-col w-full pt-[60px] justify-center items-center pb-10">
        <div className="flex flex-col w-full max-w-[1024px] ">
          <div className="flex flex-col justify-center items-center">
            <div className="w-full text-center py-8 max-w-[700px]">
              <h1 className="font-bold text-3xl py-3">
                FREQUENTLY ASKED QUESTIONS
              </h1>
              <p className="text-center">
                Here, we are answering the most frequent questions that we
                receive about Lendela, our loan application and personal loans
                in general. If you can't find the question and answer that you
                are looking for, please reach out to us anytime and we will
                assist you on your inquiry.
              </p>
            </div>

            <div className="flex gap-5">
              {listQuestion.map((item, index) => {
                return (
                  <button
                    key={index}

                    className="font-bold text-green-500 h-[75px] w-[230px] bg-[#f8f8f8] rounded-lg shadow-lg hover:border-2 hover:border-green-500"
                  >
                    {item}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="h-[1px] bg-gray-200 w-full my-10" />

          <div className="flex flex-col justify-start items-start">
            <h1 className="text-start font-bold text-3xl">EXPLORE TOPICS</h1>
            <div className="flex gap-5 mt-6">
              {listTopic.map((item, index) => {
                return (
                  <div
                    className="group shadow-lg border-2 rounded-lg p-4 w-[310px] hover:border-green-500 cursor-pointer"
                    key={index}
                  >
                    <div className="flex">
                      <Image src={item.icon} alt="icon" />
                      <h1 className="font-bold text-[17px] text-green-500 mx-2">
                        {item.title}
                      </h1>
                    </div>
                    <p className="h-[70px]">{item.description}</p>
                    <div className="flex justify-end">
                      <AiOutlineArrowRight
                        className="group-hover:text-green-500"
                        height={32}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex w-full justify-center py-4 bg-local bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${bg.src})`
        }}
      >
        <h1 className="text-center my-8 font-bold text-xl">
          DON’T SEE YOUR QUESTION LISTED? CONTACT US{' '}
          <Link href={'#'} className="text-green-500 underline">
            HERE
          </Link>
        </h1>
      </div>

      <Footer />
    </div>
  )
}

export default Faq

const listQuestion = [
  'Am I eligible for loan?',
  'What is deb consolidation?',
  'When will i receive the money?',
  'What does Lendela do?'
]

const listTopic = [
  {
    title: 'BEFORE APPLYING WITH LENDELA',
    icon: icGear,
    description:
      'Learn what happens after submitting an application on Lendela.'
  },
  {
    title: 'AFTER SUBMITTING YOUR APPLICATION',
    icon: icForm,
    description:
      'Learn what happens after submitting an application on Lendela.'
  },
  {
    title: 'CHOOSING YOUR OFFER',
    icon: icHandshake,
    description:
      'Understand what to look out for when selecting a loan offer and the steps to take after.'
  }
]
