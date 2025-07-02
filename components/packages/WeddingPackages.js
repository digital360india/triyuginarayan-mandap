import React from 'react'

const WeddingCost = () => {
  return (
    <div>
      <div>
        <p className='Lora'>Wedding Packages</p> 
        <p className='open-sans italic'>"Simple.Scared.Senere."</p>
        <p>At Triyuginarayan Mandap, we have created wedding packages with love and care. Our goal is to help you plan a beautiful temple wedding that is full of blessings and free from stress. We keep everything simple, respectful of traditions, and easy for families to manage.</p>
      </div>
      <div className='flex overflow-hidden'>
        <div className='h-[300px] w-[300px] bg-white shadow-md rounded-[0.7rem]'></div>
        <div className='h-[300px] w-[300px] bg-white shadow-lg rounded-[0.7rem] z-10'></div>
        <div className='h-[300px] w-[300px] bg-white shadow-md rounded-[0.7rem]'></div>
      </div>
    </div>
  )
}

export default WeddingCost