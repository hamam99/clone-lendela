import React from 'react'
import { MdCheckBox } from 'react-icons/md'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import { Currency } from '@/utils'

const CompareLoans = () => {
  const [loanAmount, setLoanAmount] = useState(1000)
  const [tenureValue, setTenureValue] = useState(3)

  return (
    <div className="flex m-auto w-full h-full bg-white items-center justify-center mt-10 flex-col">
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
          <div className="w-full grid grid-cols-5 gap-2">
            <div className="col-span-3">
              <div className="flex w-full flex-row justify-between">
                <p className="font-bold text-md">Loan amount</p>
                <p className="font-bold text-green-500 text-lg">
                  {Currency.format(loanAmount)}
                </p>
              </div>
              <div className="flex flex-row justify-center items-center pt-2">
                <div
                  className="border-2 border-green-500 rounded-lg cursor-pointer mr-4"
                  onClick={() => {
                    if (loanAmount > 1000) {
                      setLoanAmount(loanAmount - 1000)
                    }
                  }}
                >
                  <AiOutlineMinus
                    size={24}
                    style={{
                      color: 'rgb(34 197 94)',
                      justifySelf: 'center',
                      padding: 4
                    }}
                  />
                </div>
                <div className="w-full h-full flex flex-col">
                  <Slider
                    value={loanAmount}
                    min={1000}
                    max={200000}
                    defaultValue={1000}
                    step={1000}
                    onChange={(nextValues) => {
                      console.log('Change:', nextValues)
                      setLoanAmount(nextValues)
                    }}
                    trackStyle={{
                      backgroundColor: 'rgb(34 197 94)',
                      height: 10
                    }}
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
                <div
                  className="border-2 border-green-500 rounded-lg cursor-pointer ml-4"
                  onClick={() => {
                    if (loanAmount < 200000) {
                      setLoanAmount(loanAmount + 1000)
                    }
                  }}
                >
                  <AiOutlinePlus
                    size={24}
                    style={{ color: 'rgb(34 197 94)', padding: 4 }}
                  />
                </div>
              </div>
              <div className="justify-between flex flex-row mt-2 px-6">
                <p className="text-[10px]">$1,000</p>
                <p className="text-[10px]">$200,000</p>
              </div>

              {/* TENURE */}
              <div className="flex w-full flex-row justify-between pt-4">
                <p className="font-bold text-md">Tenure</p>
                <p className="font-bold text-green-500 text-lg">
                  {tenureValue} months
                </p>
              </div>
              <div className="flex flex-row justify-center items-cente">
                <div
                  className="border-2 border-green-500 rounded-lg cursor-pointer mr-4"
                  onClick={() => {
                    if (tenureValue > 3) {
                      setTenureValue(tenureValue - 1)
                    }
                  }}
                >
                  <AiOutlineMinus
                    size={24}
                    style={{
                      color: 'rgb(34 197 94)',
                      justifySelf: 'center',
                      padding: 4
                    }}
                  />
                </div>
                <div className="w-full h-full flex flex-col">
                  <Slider
                    value={tenureValue}
                    min={3}
                    max={72}
                    defaultValue={3}
                    step={1}
                    onChange={(nextValues) => {
                      console.log('Change:', nextValues)
                      setTenureValue(nextValues)
                    }}
                    trackStyle={{
                      backgroundColor: 'rgb(34 197 94)',
                      height: 10
                    }}
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
                <div
                  className="border-2 border-green-500 rounded-lg cursor-pointer ml-4"
                  onClick={() => {
                    if (tenureValue < 72) {
                      setTenureValue(tenureValue + 1)
                    }
                  }}
                >
                  <AiOutlinePlus
                    size={24}
                    style={{ color: 'rgb(34 197 94)', padding: 4 }}
                  />
                </div>
              </div>
              <div className="justify-between flex flex-row mt- px-6">
                <p className="text-[10px]">3 months</p>
                <p className="text-[10px]">72 months</p>
              </div>
            </div>

            <div className="col-span-2 w-full justify-center items-center mx-auto">
              <h2 className="font-bold text-center text-[20px]">
                Your monthly payment
              </h2>
              <h2 className="font-bold text-center text-[28px]">$3,936</h2>
              <button className="w-full h-[64px] bg-green-600 rounded-lg mx-[10px] mt-3 justify-center items-center">
                <p className="font-bold text-white text-[18px]">COMPARE</p>
                <p className="font-bold text-white text-[18px]">NOW</p>
              </button>
            </div>
          </div>
          <p className="m-auto w-full text-[10px] text-gray-400 text-center mt-4">
            * For a loan amount of $20,000, APR of 6.95%, 5 year tenure, the
            tot. loan payable will be $26,940 with a monthly cost of $449. An
            individualised APR will be presented at the end of your application.
            Max. APR 48%. Min. repayment period 3 months, max. 72 months.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CompareLoans
