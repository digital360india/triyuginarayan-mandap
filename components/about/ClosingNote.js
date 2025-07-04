import Image from 'next/image'
import React from 'react'
import mail from '../../assets/images/mail.png'
import logo from '../../assets/images/logo/logo.svg'

const ClosingNote = () => {
  return (
    <div className='text-center mt-25 mb-25 max-w-[1440px] mx-auto h-[38rem]'>
      <div className='relative flex justify-center '>
      <div className='bg-[#C95D2F] w-[25rem] h-[25rem] rounded-full absolute top-5 left-24 z-0'/>
      <div className='z-2 relative'>
      <Image src={mail} alt='image' />
      <div className=' absolute top-24 right-10 space-y-7'>
        <div className='flex items-end justify-end'>
        <Image src={logo} alt='image' />
        </div>
        <p className='text-[2.375rem] italic font-bold lora w-[20rem]'>“From our <span className='text-[#C95D2F]'>home</span> in the <span className='text-[#C95D2F]'>hills</span> to <span className='text-[#C95D2F]'>yours”</span></p>
        <div className='flex flex-col justify-end items-end'>
          <p className='text-[1rem] font-medium'>With Warmth,</p>
          <p className='text-[#C95D2F] opacity-70 text-[1rem] font-medium'> The Triyuginarayan Mandap Team</p>
          <p className='opacity-70 text-[1rem] font-medium'> (Companion to your divine wedding journey)</p>
        </div>
      </div>
      </div>
      <div className='bg-[#C95D2F] w-[20rem] h-[20rem] rounded-full absolute bottom-0 right-24 z-0'/>
      </div>
    </div>
  )
}

export default ClosingNote