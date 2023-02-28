import React from 'react'
import imgDbs from '/public/assets/icons/DBS.webp'
import imgPosb from '/public/assets/icons/POSB.webp'
import imgHsbc from '/public/assets/icons/hsbc.webp'
import imgScb from '/public/assets/icons/SCB.webp'
import imgUob from '/public/assets/icons/uob.webp'
import imgCity from '/public/assets/icons/citibanklogo.webp'
import imgSingPass from '/public/assets/icons/singpass-v2.webp'
import Image from 'next/image'

const listPartners = [
  {
    id: 'dbs',
    icon: imgDbs
  },
  {
    id: 'posb',
    icon: imgPosb
  },
  {
    id: 'hsbc',
    icon: imgHsbc
  },
  {
    id: 'scb',
    icon: imgScb
  },
  {
    id: 'uob',
    icon: imgUob
  },
  {
    id: 'city',
    icon: imgCity
  },
  {
    id: 'singpass',
    icon: imgSingPass
  }
]

const SelectedPartners = () => {
  return (
    <div className="mt-10 mx-auto items-center justify-center">
      <p className="text-center py-6">SELECTED PARTNERS</p>
      <div className="flex flex-row gap-6">
        {listPartners.map((item) => {
          return (
            <Image src={item.icon} alt={item.id} height={36} key={item.id} />
          )
        })}
      </div>
    </div>
  )
}

export default SelectedPartners
