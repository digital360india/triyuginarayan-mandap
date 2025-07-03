import ContactInfoSection from '@/components/contact/ContactInfoSection'
import NoteFromUsSection from '@/components/contact/NoteFromUsSection'
import WeddingForm from '@/components/contact/WeddingForm'
import WeddingIntroSection from '@/components/contact/WeddingIntroSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <WeddingIntroSection/>
      <ContactInfoSection/>
      <NoteFromUsSection/>
      <WeddingForm/>
    </div>
  )
}

export default page