import { StarRating } from '@/components/atoms'
import Image from 'next/image'

const ReviewBox = ({ initialName, name, rating, dateTime, reviews }) => {
  return (
    <div className="shadow-xl rounded-lg p-4 justify-center items-center outline-1 bg-white">
      <div className="flex w-full">
        <div className="flex h-[48px] w-[48px] bg-red-400 rounded-full justify-center items-center">
          <h1 className="text-center justify-center items-center text-[18px] font-bold text-white">
            {initialName}
          </h1>
        </div>
        <div className="flex flex-col gap-0justify-center ml-2">
          <p className="w-full font-bold">{name}</p>
          <div className="flex items-center gap-2">
            <StarRating num={rating} />
            <p className="text-sm">{dateTime}</p>
          </div>
        </div>
      </div>
      <p className="text-sm mt-2 h-[100px]">{reviews}</p>
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

export default ReviewBox
