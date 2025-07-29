"use client";
import React from "react";
import Plans from "./Plans";
import PlanSlider from "./PlanSlider";
import { SlCalender } from "react-icons/sl";
import { IoPeopleSharp } from "react-icons/io5";

const WeddingCost = () => {
  return (
    <div className="">
      {/* Intro */}
      <div className="text-center px-8 md:px-4 py-8 max-w-5xl mx-auto space-y-6">
        <p className="text-[1.8rem] md:text-[2.25rem] font-bold lora">
          Wedding <span className="text-[#C95D2F]">Packages</span>
        </p>
        <p className=" hidden md:block italic text-[3.25rem] font-bold">
          “<span className="text-[#C95D2F]">Simple.</span> Sacred.{" "}
          <span className="text-[#C95D2F]">Serene.</span>”
        </p>
        <p className="text-justify w- md:text-center text-[1rem] md:text-lg open-sans mt-6 leading-loose">
          At Triyuginarayan Mandap, we have created wedding packages with love
          and care. Our goal is to help you plan a beautiful temple wedding that
          is full of blessings and free from stress. We keep everything simple,
          respectful of traditions, and easy for families to manage.
        </p>
      </div>

      <div className="hidden md:block relative h-[30rem] mt-25">
        <div className="flex justify-center items-center">
          {/* basic */}
          <div className="z-1 w-[26rem] bg-white h-[25rem] rounded-2xl -mr-[1rem] shadow-lg flex flex-col justify-center items-center gap-4 open-sans">
            <p className="text-[1.75rem] font-bold">Basic</p>
            <p className="text-[#656565] text-[1rem]">
              A simple wedding plan for close family.
            </p>
            <p className=" text-[3.75rem] text-[#303030] font-bold">
              ₹1,13,999
            </p>
            <div className="flex gap-6">
              <div className="flex gap-4 items-center">
                <SlCalender size={24} />
                <p className="text-[#656565] text-[1rem]">1 Day & 2 Night</p>
              </div>

              <div className="flex gap-4 items-center">
               <IoPeopleSharp size={24} />
                <p className="text-[#656565] text-[1rem]">Upto 10 Guests</p>
              </div>
            </div>

            <button className="hidden lg:block bg-[#4E4E4E] mt-4 text-white text-center text-[16px] font-semibold cursor-pointer px-16 py-4 rounded-[7px]">
              See Plan
            </button>
          </div>

          {/* standard */}
          <div className="z-2 w-[28rem] bg-white h-[27rem]  border-[#C95D2F] border-2 shadow-xl  rounded-2xl shadow-[#ea9c7a]  flex flex-col justify-center items-center gap-4 open-sans">
            <p className="text-[1.75rem] font-bold text-[#C95D2F]">Standard</p>
            <p className="text-[#656565] text-[1rem]">
              For small and medium sized weddings
            </p>
            <p className=" text-[3.75rem] text-[#C95D2F] font-bold">
              ₹3,30,999
            </p>
            <div className="flex gap-6 ">
              <div className="flex gap-4 items-center">
                <SlCalender size={24} color="C95D2F" />
                <p className="text-[#656565] text-[1rem]">2 Day & 2 Night</p>
              </div>

              <div className="flex gap-4 items-center">
               <IoPeopleSharp size={24} color="C95D2F" />
                <p className="text-[#656565] text-[1rem]">Upto 35 Guests</p>
              </div>
            </div>

            <button className="hidden lg:block bg-[#C95D2F] text-white mt-4 text-center text-[16px] font-semibold cursor-pointer px-16 py-4 rounded-[7px]">
              See Plan
            </button>
          </div>

          {/* premium */}
          <div className="z-1 w-[26rem] bg-white h-[25rem] rounded-2xl -ml-[1rem] shadow-md flex flex-col justify-center items-center gap-4 open-sans">
            <p className="text-[1.75rem] font-bold text-[#A42D2B]">Premium</p>
            <p className="text-[#656565] text-[1rem]">
              For seeking a cultural experience
            </p>
            <p className=" text-[3.75rem] text-[#A42D2B] font-bold">
              ₹6,54,999
            </p>
            <div className="flex gap-6">
              <div className="flex gap-4 items-center">
              <SlCalender size={24} color="A42D2B"/>
                <p className="text-[#656565] text-[1rem]">3 Day & 2 Night</p>
              </div>

              <div className="flex gap-4 items-center">
               <IoPeopleSharp size={24} color="A42D2B" />
                <p className="text-[#656565] text-[1rem]">Upto 70 Guests</p>
              </div>
            </div>

            <button className="hidden lg:block bg-[#A42D2B] text-white text-center text-[16px] font-semibold cursor-pointer px-16 py-4 rounded-[7px] mt-4">
              See Plan
            </button>
          </div>
        </div>
        <div className="bg-[linear-gradient(0deg,_#F6EBC1_-3.87%,_#C95D2F80_99.82%)] bg-gradient-to-b to- blur-[12.2px] filter absolute z-0 flex justify-end w-full h-[20rem] top-[40%]" />
      </div>

      {/* moble plan */}
      <div className="md:hidden flex">
        <PlanSlider />
      </div>

      <div className="hidden md:block mt-25 mb-25">
        <Plans />
      </div>
    </div>
  );
};

export default WeddingCost;
