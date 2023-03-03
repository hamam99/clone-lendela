import React, { useState } from 'react'
import { Stepper, Step } from 'react-form-stepper'
// import CustomStepper from './CustomStepper'
// MultiStepForm.js
import dynamic from 'next/dynamic'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import MockData from '@/MockData'
import Image from 'next/image'
import './styles.module.css'

const StepperComponent = dynamic(() => import('./CustomStepper'), {
  ssr: false
})

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(0)
  return (
    <div className="max-w-[1024px]">
      <h1 className="font-bold text-3xl mt-4 text-center">
        Find a loan with Lendela in three simple steps
      </h1>
      <StepperComponent activeIndex={currentStep} />
      <div className="py-6 ">
        <Swiper
          id="swiper-color"
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={({ activeIndex }) => {
            setCurrentStep(activeIndex)
          }}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          modules={[Navigation]}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={true}
        >
          {MockData.listStepWorks.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex justify-center gap-10">
                  <Image src={item.image} height={450} />
                  <div className="flex flex-col justify-evenly px-10">
                    <div className="h-[300px]">
                      <h1 className="font-bold text-2xl">{item.title}</h1>
                      <div className="w-[300px]">{item.desciption}</div>
                    </div>
                    <button className="rounded bg-green-500 py-2 font-bold text-white">
                      COMPARE NOW
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Steps
