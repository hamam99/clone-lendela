import imgStep1 from '/public/assets/images/step1.webp'
import imgStep2 from '/public/assets/images/step2.webp'
import imgStep3 from '/public/assets/images/step3.webp'

const listReviews = [
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
  },
  {
    initialName: 'C',
    name: 'C.C',
    rating: 5,
    dateTime: '1 weeks ago',
    reviews: 'The best'
  }
]

const listBillboardAds = [
  'https://sg.lendela.com/assets/img/sg-mrt.jpeg',
  'https://sg.lendela.com/assets/img/sg-moneyfm.jpeg',
  'https://sg.lendela.com/assets/img/sg-bus.jpeg',
  'https://sg.lendela.com/assets/img/sg-car.jpeg',
  'https://sg.lendela.com/assets/img/sg-busstop.jpeg'
]

const listStepWorks = [
  {
    title: 'Applu securely with Singpass',
    desciption:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates ipsa voluptatibus fugiat laboriosam vitae optio officiis magni, nemo aperiam temporibus voluptatum atque distinctio iure eaque ad aliquid impedit aut?',
    image: imgStep1
  },
  {
    title: 'Compare tailored loan offers',
    desciption:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates ipsa voluptatibus fugiat laboriosam vitae optio officiis magni, nemo aperiam temporibus voluptatum atque distinctio iure eaque ad aliquid impedit aut?',
    image: imgStep2
  },
  {
    title: 'Get your money',
    desciption: 'Lorem ipsum dolor sit amet.',
    image: imgStep3
  }
]
const MockData = { listReviews, listBillboardAds, listStepWorks }

export default MockData
