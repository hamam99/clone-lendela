import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import { AiFillStar } from 'react-icons/ai'
import Image from 'next/image'

const Reviews = () => {
  return (
    <div className="flex  w-full h-full mx-auto bg-gray-100 items-center py-8 justify-center">
      <div className="max-w-[1024px] items-center justify-center">
        <h1 className="font-bold text-[30px] text-center">
          50,000 loan application yearly
        </h1>
        <p className="text-center">
          Find out what our great customers have to say about Lendela.
        </p>
        <div className="py-6">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            modules={[Navigation]}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={true}
          >
            <SwiperSlide>
              <ReviewBox />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewBox />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewBox />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewBox />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewBox />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewBox />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Reviews

const ReviewBox = () => {
  return (
    <div className="shadow-xl rounded-lg p-4 justify-center items-center outline-1 bg-white">
      <div className="flex w-full">
        <div className="flex h-[48px] w-[48px] bg-red-400 rounded-full justify-center items-center">
          <h1 className="text-center justify-center items-center text-[18px] font-bold text-white">
            H
          </h1>
        </div>
        <div className="flex flex-col gap-0justify-center ml-2">
          <p className="w-full font-bold">Jad rawkz</p>
          <div className="flex items-center gap-2">
            <StarRating num={5} />
            <p className="text-sm">5 months ago</p>
          </div>
        </div>
      </div>
      <p className="text-sm mt-2 h-[100px]">
        Extremely helpful and great patience by Wani, as it was my first time
        getting a loan, she guided me throughout the ...
      </p>
      <div className="flex gap-2">
        <Image src={require('/public/assets/icons/google.svg')} alt="google" />
        <div className="gap-1">
          <p className="text-sm">Posted on </p>
          <p className="text-sm text-[blue] mt-[-4px]">Google</p>
        </div>
      </div>
    </div>
  )
}

const StarRating = ({ num }: { num: number }) => {
  let data = []
  for (let i = 0; i < num; i++) {
    data.push(<AiFillStar style={{ color: '#FF9529' }} size={18} />)
  }
  return <div className="flex w-fit">{data}</div>
}
