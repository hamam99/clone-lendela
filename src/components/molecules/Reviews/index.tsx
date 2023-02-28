import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import Image from 'next/image'
import { StarRating } from '@/components/atoms'
import ReviewBox from './ReviewBox'

const datas = [
  {
    initialName: 'H',
    name: 'Hamam',
    rating: 5,
    dateTime: '5 months ago',
    reviews:
      'Very friendly helpful and clear about ur perpective.Efficient and fast response to the queries related to the...'
  },
  {
    initialName: 'Y',
    name: 'Yazid',
    rating: 4,
    dateTime: '2 months ago',
    reviews: 'Fast response'
  },
  {
    initialName: 'A',
    name: 'Yazi Akbar',
    rating: 5,
    dateTime: '1 weeks ago',
    reviews:
      'Very smooth process. Thank you for the efficiency and fast process'
  }
]
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
            {datas.map((item) => {
              return (
                <SwiperSlide key={item.name}>
                  <ReviewBox {...item} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Reviews

