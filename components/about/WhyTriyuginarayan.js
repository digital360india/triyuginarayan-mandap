import Image from "next/image";
import React from "react";
import why_triyuginarayan from "../../assets/images/why-triyuginarayan.png";

const WhyTriyuginarayan = () => {
  return (
    <div className="max-w-[1440px] w-full md:w-[90%] m-auto mt-25 flex flex-col md:flex-row gap-16">
      <div className="w-full md:w-2xl flex flex-col justify-center items-start px-8 space-y-6 md:px-10">
        <p className="text-[1.8rem] md:text-[2.25rem] font-bold text-center md:text-start lora">
          Why Only&nbsp;
          <span className="text-[#C95D2F]"> Triyuginarayan?</span>
        </p>
        <p className="md:mt-[2.19rem] text-[1rem] md:text-lg text-justify md:text-start open-sans">
          We don’t do weddings everywhere. We serve only one place —
          Triyuginarayan Temple — because we truly believe this is not an
          ordinary wedding venue. This is the original mandap, where the eternal
          bond of Shiva and Parvati was formed. The fire still burns. The air
          still carries the mantras. And every wedding here becomes part of
          something timeless. We live nearby. We’ve grown up hearing stories of
          this land. And now, we’re here to share that grace with you and your
          family.
        </p>
      </div>
      <div className="w-full flex justify-center items-center md:w-lg">
        <Image src={why_triyuginarayan} alt="img" className="w-[18rem] md:w-[20rem]" />
      </div>
      
    </div>
  );
};

export default WhyTriyuginarayan;
