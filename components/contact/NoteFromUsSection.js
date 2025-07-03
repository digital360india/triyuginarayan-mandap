import Image from 'next/image'
import React from 'react'
import material_symbols from '../../assets/images/material-symbols.svg'

const NoteFromUsSection = () => {
  return (
    <div className='px-20 space-y-4 max-w-[1440px] m-auto mt-25'>
        <p className='text-[1rem] text-[#C95D2F] open-sans font-bold flex gap-4 items-center'><Image src={material_symbols} alt='imag'/>A Note From Us</p>
        <p className="text-[1rem] open-sans">
          Every wedding at Triyuginarayan is special. If you choose this path, 
          we promise to walk it with you — not as planners, but as your companions 
          in creating a marriage full of faith, beauty, and meaning.
        </p>
        <p className='text-[1rem] text-[#C95D2F] open-sans font-bold text-end'>- The Triyuginarayan Mandap Team</p>
    </div>
  )
}

export default NoteFromUsSection