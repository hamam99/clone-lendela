import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import MockData from '@/MockData'
import ReviewBox from '@/components/molecules/Reviews/ReviewBox'
import Image from 'next/image'

const BillboardAds = () => {
  return (
    <div className="flex w-full justify-center py-4">
      <div className="max-w-[1024px]">
        <h1 className="font-bold text-2xl  text-center">
          You have probably seen us all over{' '}
          <span className="text-green-500">Singapore</span>
        </h1>
        <div className="py-6 ">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            modules={[Navigation]}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={true}
          >
            {MockData.listBillboardAds.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Image src={item} height={100} width={350} alt="images" />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default BillboardAds
