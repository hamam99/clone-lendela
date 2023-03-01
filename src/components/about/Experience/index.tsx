import Image from 'next/image'
import React from 'react'

const Experience = () => {
  return (
    <div className="flex w-full justify-center py-4 bg-green-400">
      <div className="max-w-[1024px] flex flex-col w-full items-center justify-center">
        <div className="grid grid-cols-2 w-full gap-1">
          <div className="col-span-1 w-full flex flex-col mr-8">
            <h1 className="font-bold text-2xl">OUR EXPERIENCE</h1>
            <div className="w-[150px] bg-white h-[2px] mt-2" />
            <p className="text-white mt-4">
              Through Lendela, we are bringing more than a decade worth of
              experience on how to make loan comparison easier, faster and more
              transparent for both consumers and partners.
            </p>
            <p className="text-white mt-4">
              With our well developed model and technology, we have already
              processed millions of loan applications in Scandinavia, Latin
              America and Southeast Asia throughout the years.
            </p>
            <p className="text-white mt-4">
              Since Lendela’s launch in early 2018, we have aimed to merge
              Nordic-inspired user experience and financial technology with
              local expertise in this region. After starting in Singapore, we
              have also expanded our operations to Hong Kong.
            </p>
            <Image
              src={require('/public/assets/images/founders.jpg')}
              className={'mt-4'}
              alt="founder"
            />
          </div>
          <div className="col-span-1 w-full ml-8">
            <h1 className="font-bold text-2xl">WHY WE EXIST</h1>
            <div className="w-[150px] bg-white h-[2px] mt-2" />
            <p className="text-white mt-4">
              It is no secret that getting a loan can be difficult - and knowing
              if you got the best deal is impossible.
              {<br />}
              {<br />}We want to change that.
              {<br />}
              {<br />}Based on our experience in loan comparison, we have
              identified the following issues for borrowers like you:
              <ol className="gap-4 leading-7" type="1">
                <li>1. You are not finding the cheapest loan possible</li>
                <li>2. You do not know how to go about applying for a loan</li>
                <li>
                  3. The application process is too complicated and troublesome
                </li>
                <li>
                  4. Banks and financial institutions are not transparent with
                  you on application outcome and loan terms
                </li>
                <li>5. You cannot find a party that will approve your loan</li>
                <li>
                  6. After seeking help from a loan broker, you get many
                  unsolicited calls all trying to sell you a loan
                </li>
                <li>
                  7. Loan scams are prevalent and hard to distinguish from
                  legitimate ones
                </li>
              </ol>
              Lendela wants to solve all of those issues for you - all with just
              one application on lendela.com.
            </p>
          </div>
        </div>
        <button className="bg-white py-3 px-20 rounded-lg mt-20">
          <p className="font-bold text-green-500 text-xl"> COMPARE NOW</p>
        </button>
      </div>
    </div>
  )
}

export default Experience
