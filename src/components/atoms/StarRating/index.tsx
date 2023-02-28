import { AiFillStar } from 'react-icons/ai'

const StarRating = ({ num }: { num: number }) => {
  let data = []
  for (let i = 0; i < num; i++) {
    data.push(<AiFillStar style={{ color: '#FF9529' }} size={18} />)
  }
  return <div className="flex w-fit">{data}</div>
}

export default StarRating
