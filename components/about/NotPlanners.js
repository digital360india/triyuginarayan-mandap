import React from "react";
import Image from "next/image";
import star_gif from "../../assets/images/star-gif.gif";

const NotPlanners = () => {
  return (
    <div className="max-w-[1440px] m-auto mt-25 flex flex-col lg:flex-row items-center gap-6 md:gap-16 px-5 md:px-16">
      <span className="block lg:hidden w-[3.75rem] h-[3.75rem] bg-[#C95D2F] rounded-full">
          <Image src={star_gif} alt="gif" className="w-full h-full object-contain" />
        </span>
      <div className="flex flex-wrap justify-center lg:justify-start items-center text-[2.5rem] md:text-[3.75rem] font-bold leading-tight w-full md:w-[600px] lora">
        Not&nbsp;
        <span className="text-[#C95D2F]">Planners.</span>Facilitators of&nbsp;
        <span className="text-[#C95D2F]">Blessings.</span>&nbsp;
        <span className="hidden lg:inline-block w-[3.75rem] h-[3.75rem] bg-[#C95D2F] rounded-full">
          <Image src={star_gif} alt="gif" className="w-full h-full object-contain" />
        </span>
      </div>

      <p className="md:mt-[2.19rem] max-w-[700px] text-justify md:text-center text-[1rem] md:text-lg open-sans">
        We don’t call ourselves “wedding planners.” We are facilitators of
        sacred bonds — people who understand that a marriage is not just about
        lights and music, but about blessings, rituals, and true beginnings.
        Whether it’s your daughter’s wedding or your own, we’ll take care of
        everything with as much love and honesty as we would for our own family.
      </p>
    </div>
  );
};

export default NotPlanners;
