import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import MockData from '@/MockData'
import ReviewBox from '@/components/molecules/Reviews/ReviewBox'

const Reviews = () => {
  return (
    <div className="flex w-full justify-center py-4">
      <div className="max-w-[1024px]">
        <h1 className="font-bold text-2xl  text-center">
          We process <span className="text-green-500">50,000</span> loan
          applications yearly
        </h1>
        <p className="my-4  text-center">
          Our customers give Lendela a 5/5 ⭐️ rating on Google.
        </p>
        <div className="py-6 ">
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
            {MockData.listReviews.map((item) => {
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
