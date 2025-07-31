import Image from "next/image";
import React from "react";
import contact_us from '../../assets/images/contact-us.png'

const WeddingIntroSection = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row max-w-[1440px] gap-10 m-auto px-8 md:px-0">
        <div className="hidden xl:w-[40%] xl:flex justify-center items-center">
            <Image src={contact_us} alt="image" />
        </div>
      <div className="xl:max-w-3xl p-0 md:p-5 md:px-10 flex flex-col gap-6">
        <p className="text-[2.5rem] md:text-[3.25rem] font-bold leading-tight lora">
          Begin Your Forever at <span className="text-[#C95D2F]">Triyuginarayan Temple</span> 
        </p>
        <p className="text-[1rem] md:text-[1.125rem] text-justify md:text-start leading-loose open-sans">
          Planning a wedding at Triyuginarayan Temple is not just about dates
          and bookings — it&apos;s about starting a new chapter with peace,
          tradition, and blessings. Whether you&apos;re just exploring the idea or
          ready to book your date, we&apos;re here to help you with care, clarity,
          and love — just like family.
        </p>
        <div className="space-y-6">
          <div className="text-[1.125rem] font-bold open-sans">We are happy to help you with..</div>
          <div className="space-y-3">
          <div className="flex gap-4 items-center open-sans">
            <div className="w-[13px] h-[13px] rounded-full bg-[#C95D2F]" />
            Choosing the right wedding package.
          </div>
          <div className="flex gap-4 items-center open-sans">
            <div className="w-[13px] h-[13px] rounded-full bg-[#C95D2F]" />
            Understanding the rituals and temple process.
          </div>
          <div className="flex gap-4 items-center open-sans">
            <div className="w-[13px] h-[13px] rounded-full bg-[#C95D2F]" />
            Guest stay and meal arrangements.
          </div>
          <div className="flex gap-4 items-center open-sans">
            <div className="w-[13px] h-[13px] rounded-full bg-[#C95D2F]" />
            Marriage registration support.
          </div>
          <div className="flex gap-4 items-center open-sans">
            <div className="w-[13px] h-[13px] rounded-full bg-[#C95D2F]" />
            Customizing your ceremony with your family traditions
          </div>
          </div>
        </div>


      </div>
      <div className="flex md:hidden justify-center items-center">
            <Image src={contact_us} alt="image" className="w-[18rem]"/>
        </div>
    </div>
  );
};

export default WeddingIntroSection;
