import React from 'react'
import PlanMarriageAtTriyuginarayan from '@/components/packages/PlanMarriageAtTriyuginarayan'
import WeddingPackages from '@/components/packages/WeddingPackages'
import NoteFromUs from '@/components/packages/NoteFromUs'
import PaymentStructure from '@/components/packages/PaymentStructure'

const PackagesPage = () => {
  return (
    <div>
      <PlanMarriageAtTriyuginarayan/>
      <WeddingPackages/>
      <PaymentStructure/>
      <NoteFromUs/>
    </div>
  )
}

export default PackagesPage