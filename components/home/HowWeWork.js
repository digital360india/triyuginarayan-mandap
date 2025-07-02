"use client";
import React, { useState } from "react";
import relax from "../../assets/images/badges/relax.svg";
import teenyicons from "../../assets/images/badges/teenyicons.svg";
import customer_support from "../../assets/images/badges/customer-support.svg";
import fluent_receipt from "../../assets/images/badges/fluent_receipt.svg";
import Image from "next/image";

const steps = [
  {
    title: "Reach Out to Our Devoted Team",
    description: "Share your date and vision to our devoted team.",
    img: customer_support,
  },
  {
    title: "Get a Customized Wedding Plan",
    description: "We'll tailor a plan just for your needs.",
    img: teenyicons,
  },
  {
    title: "Receive Transparent Cost Details",
    description: "All pricing is crystal clear and upfront.",
    img: fluent_receipt,
  },
  {
    title: "Finalize and Celebrate",
    description: "Get ready for a joyful wedding day!",
    img: relax,
  },
];

const StepBox = ({ step }) => {
  const [hovered, setHovered] = useState(false);
  const isLeft = step.direction === "left";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative h-[17rem] shrink-0 transition-all duration-700 rounded-[35px] overflow-hidden flex ${
        isLeft ? "flex-row-reverse" : "flex-row"
      } bg-white hover:bg-[#D7764D] mx-2 ${
        hovered ? "w-[30rem]" : "w-[17rem]"
      }`}
    >

      <div
        className={`absolute transition-all duration-700 ${hovered? "top-[-2rem] left-[-2rem]": "top-[-7rem] left-[-5rem]"} w-[19rem] h-[19rem] bg-[#FFEBE3] rounded-full`}
      />
      
      {!hovered && (
        <div className="flex flex-col w-[13rem] h-[17rem] z-10 relative">
          <h2 className="text-[1.4rem] font-semibold mt-2 p-7">
            {step.title}
          </h2>
          <Image src={step.img} alt="icon" className="absolute left-0 bottom-0"/>
        </div>
      )}

      {hovered && (
        <div
          className={`flex px-6 transition-opacity duration-500 gap-16 p-10`}
        >
            <div className="w-[13rem] flex flex-col z-10">
          <p className="text-[1.4rem] font-semibold mb-2">{step.title}</p>
          <p className="text-[1rem] text-gray-600">{step.description}</p>
            </div>
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
            <Image src={step.img} alt="imag" width={56} height={56}/>
            </div>
        </div>
      )}
    </div>
  );
};

const HowWeWork = () => {
  return (
    <div className="w-7xl px-10 mt-25 m-auto">
      <p className="text-center text-[2.25rem] font-bold">
        How We <span className="text-[#D7764D]">Work</span>
      </p>
      <p className="text-center text-[1rem] mt-[2.19rem]">
        Booking your Triyuginarayan temple wedding is just a few simple steps
        away.
      </p>

      <div className="flex gap-10 overflow-x-auto m-auto mt-[3.35rem]">
        {steps.map((step, index) => (
          <StepBox key={index} step={step} />
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
