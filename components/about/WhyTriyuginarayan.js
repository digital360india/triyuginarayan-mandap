import Image from "next/image";
import React from "react";
import why_triyuginarayan from "../../assets/images/why-triyuginarayan.png";

const WhyTriyuginarayan = () => {
  return (
    <div className="max-w-[1440px] w-[90%] m-auto mt-25 flex">
      <div className="w-2xl flex flex-col justify-center items-start gap-7">
        <p className="text-[2.25rem] font-bold">
          Why Only &nbsp;
          <span className="text-[#C95D2F]">Triyuginarayan?</span>
        </p>
        <p className="mt-[2.19rem]">
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
      <div className=" flex justify-center items-center w-lg">
        <Image src={why_triyuginarayan} alt="img" />
      </div>
      
    </div>
  );
};

export default WhyTriyuginarayan;
