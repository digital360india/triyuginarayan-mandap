import Image from "next/image";
import React from "react";
import mail from "../../assets/images/mail.png";
import logo from "../../assets/images/logo/logo.svg";
import message_frame from "../../assets/images/message-frame.png";

const ClosingNote = () => {
  return (
    <div className="mt-25 mb-25 max-w-[1440px] mx-auto h-[30rem] md:h-[38rem]">
      <div className="hidden relative md:flex justify-center ">
        <div className="bg-[#C95D2F] w-[10rem] h-[10rem] md:w-[25rem] md:h-[25rem] rounded-full absolute top-5 left-24 z-0 hidden lg:block" />
        <div className="z-2 relative">
          <Image src={mail} alt="image" />
          <div className=" absolute top-24 right-10 space-y-6">
            <div className="flex items-end justify-end">
              <Image src={logo} alt="image" />
            </div>
            <p className="text-[2.375rem] italic font-bold lora w-[20rem] leading-tight">
              “From our <span className="text-[#C95D2F]">home</span> in the{" "}
              <span className="text-[#C95D2F]">hills</span> to{" "}
              <span className="text-[#C95D2F]">yours”</span>
            </p>
            <div className="flex flex-col justify-end items-end">
              <p className="text-[1rem] font-medium open-sans">With Warmth,</p>
              <p className="text-[#C95D2F] opacity-70 text-[1rem] font-medium open-sans">
                 The Triyuginarayan Mandap Team
              </p>
              <p className="opacity-70 text-[1rem] font-medium open-sans">
                 (Companion to your divine wedding journey)
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#C95D2F] w-[10rem] h-[10rem] md:w-[20rem] md:h-[20rem] rounded-full absolute bottom-0 right-24 z-0 hidden lg:block" />
      </div>
      <div>
        <div className="w-full flex justify-center items-center mt-10 md:hidden overflow-hidden">
          <div className="relative">
          <Image src={message_frame} alt="image" className="w-[280px]"/>
            <div className="w-[200px] absolute top-32 right-8">
              <div className="flex items-end justify-end h-10">
                <Image src={logo} alt="image" className="w-8" />
              </div>
              <p className="text-[1.5rem] md:text-[2.375rem] italic font-bold lora w-[200px] leading-tight">
                “From our <span className="text-[#C95D2F]">home</span> in the{" "}
                <span className="text-[#C95D2F]">hills</span> to{" "}
                <span className="text-[#C95D2F]">yours”</span>
              </p>

              <p className="text-[#D29276] opacity-70 text-[0.625rem] font-bold absolute w-[250px] open-sans">
                 -The Triyuginarayan Mandap Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosingNote;
