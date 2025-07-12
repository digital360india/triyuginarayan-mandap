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
    <div className="flex flex-col xl:flex-row gap-22 m-auto max-w-[1440px] p-5 lg:p-10 h-[900px] xl:h-[500px]">
      <div className="flex flex-col gap-12">
        <p className="w-full lg:text-center xl:text-start xl:w-[600px] text-[2.5rem] md:text-[3.75rem] font-bold lora leading-tight px-5 md:px-10"><span className="text-[#C95D2F]">Plan Your Marriage</span> at the Same Place Where It <span className="text-[#C95D2F]">All Began.</span></p>
        <div className="px-5 md:px-10 lg:mx-auto xl:mx-0">
          <button className="bg-[#C95D2F] text-center text-[1rem] text-white font-semibold cursor-pointer px-6 py-3 rounded-[7px] flex justify-start open-sans">
            Custom wedding plan
          </button>
        </div>
      </div>

      <div className="w-full xl:w-[50%] flex justify-center items-center relative h-[400px] md:h-auto">
        <div className={`absolute top-8 left-0 md:top-10 md:left-18 xl:top-10 xl:left-18  w-16 h-16 md:w-22 md:h-22 rounded-full bg-[#C95D2F] floating`} />
        <div className="absolute top-[21rem] left-5 md:top-60 md:left-18 xl:top-60 xl:left-18 w-10 h-10 rounded-full bg-[#C95D2F] floating"/>
        <div className="absolute top-0 right-0 md:top-5 md:right-10 xl:top-5 xl:right-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#C95D2F] floating"/>
        <Image src={package_content} alt="img" className="w-[18rem] h-[18rem] md:w-[20rem] md:h-[20rem] " />
      </div>
    </div>
  );
};

export default PlanMarriageAtTriyuginarayan;
