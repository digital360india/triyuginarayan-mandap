import React from "react";
import Image from "next/image";
import star_gif from "../../assets/images/star-gif.gif";

const NotPlanners = () => {
  return (
    <div className="max-w-[1440px] m-auto mt-25 flex items-center gap-10 px-10">
      <div className="flex flex-wrap justify-center items-center text-[3.75rem] font-bold leading-tight w-[600px]">
        Not&nbsp;
        <span className="text-[#C95D2F]">Planners.</span>&nbsp;Facilitators of&nbsp;
        <span className="text-[#C95D2F]">Blessings.</span>&nbsp;
        <span className="inline-block w-[3.75rem] h-[3.75rem] bg-[#C95D2F] rounded-full">
          <Image src={star_gif} alt="gif" className="w-full h-full object-contain" />
        </span>
      </div>

      <p className="mt-[2.19rem] max-w-[700px] text-lg">
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
