import React from 'react'
import { MdCheckBox } from 'react-icons/md'
import { useState } from 'react'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import { Currency } from '@/utils'

const CompareLoans = () => {
  const [loanAmount, setLoanAmount] = useState(1000)
  return (
    <div className="flex m-auto w-full h-full bg-white items-center justify-center mt-10">
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-1 max-w-[500px]">
          <h1 className="font-bold text-[32px] mx-auto">
            {`COMPARE PERSONAL LOANS WITH LENDELA`}
          </h1>
          <ul>
            <li className="flex flex-row m-auto items-center">
              <MdCheckBox size={32} className="" />
              <p className="text-lg font-bold">
                Receive multiple, personalised loan offer
              </p>
            </li>
            <li className="flex flex-row m-auto items-center">
              <MdCheckBox size={32} className="" />
              <p className="text-lg font-bold">
                Apply, compare & choose online for free
              </p>
            </li>
            <li className="flex flex-row m-auto items-center">
              <MdCheckBox size={32} className="" />
              <p className="text-lg font-bold">
                5/5⭐️ rating on Google Reviews
              </p>
            </li>
          </ul>
        </div>

        <div className="col-span-1 max-w-[500px] shadow-xl rounded-lg p-4 px-8 border-2 border-gray-100">
          <div className="w-full h-full grid grid-cols-5 gap-2">
            <div className="col-span-3">
              <div className="flex w-full flex-row justify-between">
                <p className="font-bold text-lg">Loan amount</p>
                <p className="font-bold text-green-500 text-lg">
                  {Currency.format(loanAmount)}
                </p>
              </div>
              <div className="flex flex-row justify-center items-center">
                <div className="h-[32px] w-[32px] border-2 border-green-500  rounded-lg bg-white">
                  
                </div>
                <Slider
                  value={loanAmount}
                  min={1000}
                  max={200000}
                  defaultValue={1000}
                  step={10000}
                  onChange={(nextValues) => {
                    console.log('Change:', nextValues)
                    setLoanAmount(nextValues)
                  }}
                  trackStyle={{ backgroundColor: 'rgb(34 197 94)', height: 10 }}
                  handleStyle={{
                    borderColor: 'rgb(21 128 61 )',
                    height: 28,
                    width: 28,
                    // marginLeft: -7,
                    marginTop: -9,
                    backgroundColor: 'rgb(21 128 61 )'
                  }}
                  railStyle={{ height: 10 }}
                  dotStyle={{ borderColor: 'orange' }}
                  activeDotStyle={{ borderColor: 'yellow' }}
                />
              </div>
            </div>
            <div className="col-span-2">RIGHT</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareLoans
