"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import relax from "../../assets/images/badges/relax.svg";
import teenyicons from "../../assets/images/badges/teenyicons.svg";
import customer_support from "../../assets/images/badges/customer-support.svg";
import fluent_receipt from "../../assets/images/badges/fluent_receipt.svg";

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

const StepMobile = ({ step }) => (
  <div className="w-[290px] h-[17rem] flex flex-col items-center justify-center bg-white rounded-[35px] shadow-md overflow-hidden">
    <div className="relative w-full h-full ">
      <div className="w-[290px] h-[290px] bg-[#FFEBE3] rounded-full absolute -top-[8rem] z-0" />
      <p className="text-[1.1rem] font-semibold text-center px-16 mt-4 absolute z-10 top-0 open-sans flex justify-center items-center w-full h-full open-sans">
        {step.title}
      </p>
    </div>
    <div className="flex flex-col items-center justify-center h-full">
      <Image src={step.img} alt="icon" width={56} height={56} />
    </div>
  </div>
);

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
        className={`absolute transition-all duration-700 ${
          hovered ? "top-[-2rem] -left-[2rem]" : "top-[-7rem] left-[-5rem]"
        } w-[19rem] h-[19rem] bg-[#FFEBE3] rounded-full`}
      />
      {!hovered && (
        <div className="flex flex-col w-[13rem] h-[17rem] z-10 relative">
          <p className="text-[1.4rem] font-semibold mt-2 p-7 open-sans">{step.title}</p>
          <Image
            src={step.img}
            alt="icon"
            className="absolute bottom-0 left-0"
          />
        </div>
      )}
      {hovered && (
        <div className="flex px-6 transition-opacity duration-500 gap-16 p-10">
          <div className="w-[13rem] flex flex-col z-10">
            <p className="text-[1.4rem] font-semibold mb-2 open-sans">{step.title}</p>
            <p className="text-[1rem] text-gray-600 open-sans">{step.description}</p>
          </div>
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
            <Image src={step.img} alt="img" width={56} height={56} />
          </div>
        </div>
      )}
    </div>
  );
};

const HowWeWork = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const scrollX = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth;
    const index = Math.round(scrollX / cardWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const slider = scrollRef.current;
    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full px-4 mt-24 max-w-[1440px] space-y-6 overflow-hidden h-[36rem] md:h-fit m-auto">
      <p className="text-center text-[1.8rem] md:text-[2.25rem] font-bold lora">
        How We <span className="text-[#D7764D]">Work</span>
      </p>
      <p className="text-center text-[1rem] md:text-lg mt-8 open-sans">
        Booking your Triyuginarayan temple wedding is just a few simple steps
        away.
      </p>

      <div className="block md:hidden">
        <div
          ref={scrollRef}
          className="flex gap-12 overflow-x-auto scroll-smooth snap-x snap-mandatory mt-12 px-6"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {steps.map((step, index) => (
            <div key={index} className="snap-center shrink-0">
              <StepMobile step={step} />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6 mb-6">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? "bg-[#D7764D]" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        <div className="text-center mt-12 px-22">
          <p className="text-[1rem] font-semibold open-sans">
            {steps[activeIndex]?.description}
          </p>
        </div>
      </div>

      <div className="hidden md:flex gap-10 overflow-x-auto mt-12 px-5 ">
        {steps.map((step, index) => (
          <StepBox
            key={index}
            step={{ ...step}}
          />
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
