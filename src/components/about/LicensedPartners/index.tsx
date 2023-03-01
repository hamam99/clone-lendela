import { SelectedPartners } from '@/components/atoms'
import React from 'react'

const LicensedPartners = () => {
  return (
    <div className="flex w-full justify-center py-4 bg-[white]">
      <div className="flex flex-col justify-center items-center max-w-[1024px]">
        <h1 className="font-bold text-2xl border-b-2 border-green-700 py-4">
          WHY TRUST US?
        </h1>
        <h3 className="font-bold pt-12 pb-6 text-xl">
          We only work with <span className="text-green-500">licensed</span>{' '}
          partners
        </h3>
        <p>
          All the financial institutions we work with are licensed by Monetary
          Association of Singapore (MAS) and Ministry of Law.
        </p>
        <SelectedPartners hideTitle={true} />
      </div>
    </div>
  )
}

export default LicensedPartners
