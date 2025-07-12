import Faqs from '@/components/home/Faqs'
import Hero from '@/components/home/Hero'
import HowWeWork from '@/components/home/HowWeWork'
import WeddingCost from '@/components/home/WeddingCost'
import WhatWeOffer from '@/components/home/WhatWeOffer'
import React from 'react'

const HomePage = () => {
  return (
    <div className="w-full">
    <Hero/>
    <WhatWeOffer/>
    <HowWeWork/>
    <WeddingCost/>
    <Faqs/>
    </div>
  )
}

export default HomePage