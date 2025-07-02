'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import package_content from '../../assets/images/package-content.png'

const PlanMarriageAtTriyuginarayan = () => {
  const [loaded,setLoaded] = useState(false);

  useEffect(()=>{
    const timer = setTimeout(()=>setLoaded(true),0)
    return ()=>clearTimeout(timer);
  },[])
  return (
    <div className="flex m-auto max-w-[1440px] p-10 h-[500px]">
      <div className="flex flex-col gap-12">
        <p className="w-[600px] text-[3.75rem] font-bold lora leading-tight px-10"><span className="text-[#C95D2F]">Plan Your Marriage</span> at the Same Place Where It <span className="text-[#C95D2F]">All Began.</span></p>
        <div className="px-10">
          <button className="bg-[#C95D2F] text-center text-[1rem] text-white font-semibold cursor-pointer px-6 py-3 rounded-[7px] flex justify-start">
            Custom wedding plan
          </button>
        </div>
      </div>

      <div className="w-[50%] flex justify-center items-center relative">
        <div className={`absolute top-10 left-18 w-22 h-22 rounded-full bg-[#C95D2F] floating`} />
        <div className="absolute top-60 left-18 w-10 h-10 rounded-full bg-[#C95D2F] floating"/>
        <div className="absolute top-5 right-10 w-32 h-32 rounded-full bg-[#C95D2F] floating"/>
        <Image src={package_content} alt="img" className="w-[18rem] h-[18rem] " />
      </div>
    </div>
  );
};

export default PlanMarriageAtTriyuginarayan;
