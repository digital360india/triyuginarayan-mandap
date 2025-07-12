"use client";
import React, { useState } from "react";
import Image from "next/image";
import rituals from "../../assets/images/rituals.png";
import couple from "../../assets/images/couple.png";
import mountains from "../../assets/images/mountains.png";
import triyuginarayan_temple from "../../assets/images/triyuginarayan-temple.png";
import choose_us from "../../assets/images/choose-us.png";

const TriyuginarayanOverview = () => {
  const [liked, setLiked] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300); // Reset duration
  };

  return (
    <div className="">
      <div className="w-full  bg-[#C95D2F]">
      <div className="max-w-[1440px] h-[45rem] md:h-[40rem] lg:h-[30rem] relative m-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-center items-center h-full px-0 md:px-20">
          <p className="w-full lg:w-[70rem] text-[2.5rem] lg:text-[3.4375rem] text-white font-bold lora z-10 leading-tight p-8 md:text-center lg:text-start">
            Why Choose <span className="text-[#F6E8C1]">Triyuginarayan</span>{" "}
            for Your Wedding?
          </p>
          <p className="w-full lg:w-[80rem] text-white text-[1rem] lg:text-[1.125rem] open-sans z-10 px-8 lg:px-0 md:text-center lg:text-start leading-loose">
            If you’re looking for a wedding that’s simple, soulful, and full of
            meaning, Triyuginarayan is one of the most special places you’ll
            ever find. This is not just a destination — it’s a place where
            marriage truly began.Here’s why so many couples are choosing a
            wedding at Triyuginarayan Temple for their big day:
          </p>
        </div>
        <div className="absolute sm:-left-24 md:left-auto -right-24 lg:!right-0 bottom-0">
          <Image
            src={choose_us}
            alt="imge"
            className="h-[45rem] lg:h-[30rem]"
          />
        </div>
      </div>
      </div>

      <div className="max-w-[1440px] m-auto flex flex-col gap-32 px-8 md:px-10 mt-25">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0">
          <div className="flex flex-col w-full md:w-[60%] p-0 md:p-10 space-y-6">
            <div className="flex md:items-center justify-center gap-3">
              <span className="text-[4rem] md:text-[6.25rem] font-semibold lora">
                1.
              </span>
              <p className="text-[1.8rem] md:text-[2.25rem] font-bold lora">
                The Place Where Lord Shiva{" "}
                <span className="text-[#C95D2F]">Married</span> Parvati.
              </p>
            </div>
            <p className="text-justify md:text-start open-sans text-[1rem] leading-loose">
              Triyuginarayan is the same place where Lord Shiva and Goddess
              Parvati got married.The fire from their wedding — the Akhand Dhuni
              — still burns inside the temple. Couples from all over India come
              here to take their vows where the gods once stood.If you’re
              looking for a wedding that’s not just beautiful, but blessed, this
              is the right place.
            </p>
          </div>

          <div className="w-full md:w-[40%] flex justify-center items-center">
            <Image
              src={triyuginarayan_temple}
              alt="image"
              className="w-[18rem] md:w-[20rem]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0">
          <div className="hidden w-[40%] md:flex justify-center items-center">
            <Image src={mountains} alt="image" className="w-[20rem]" />
          </div>
          <div className="flex flex-col w-full md:w-[60%] p-0 md:p-10 space-y-6">
            <div className="flex md:items-center justify-center gap-3 lora">
              <span className="text-[4rem] md:text-[6.25rem] font-semibold">
                2.
              </span>
              <p className="text-[1.8rem] md:text-[2.25rem] font-bold">
                <span className="text-[#C95D2F]">Quiet</span> Mountains.{" "}
                <span className="text-[#C95D2F]">Pure</span> Air.{" "}
                <span className="text-[#C95D2F]">Natural </span>Blessings.
              </p>
            </div>
            <p className="text-justify md:text-start open-sans text-[1rem] leading-loose">
              This is not a crowded city wedding. Triyuginarayan is a peaceful
              village in the Himalayas, surrounded by nature. The air is fresh,
              the views are beautiful, and the atmosphere is calm. It’s the
              perfect place to begin your new life — with peace in your heart
              and blessings all around.
            </p>
          </div>
          <div className="md:hidden w-full md:w-[40%] flex justify-center items-center">
            <Image src={mountains} alt="image" className="w-[18rem]" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 ">
          <div className="flex flex-col w-full md:w-[60%] p-0 md:p-10 space-y-6">
            <div className="flex md:items-center justify-center gap-3 lora">
              <span className="text-[4rem] md:text-[6.25rem] font-semibold">
                3.
              </span>
              <p className="text-[1.8rem] md:text-[2.25rem] font-bold">
                <span className="text-[#C95D2F]">Real</span> Rituals.{" "}
                <span className="text-[#C95D2F]">Deep</span> Meaning.{" "}
                <span className="text-[#C95D2F]">Lifelong</span> Memories.
              </p>
            </div>
            <p className="text-justify md:text-start open-sans text-[1rem] leading-loose">
              Weddings here are not rushed. You sit near the eternal fire,
              guided by local priests.Mantras are chanted with care, and the
              whole ceremony feels real — not just for photos, but for life.
              From Garhwali wedding songs to simple traditional rituals, every
              moment feels meaningful.
            </p>
          </div>

          <div className="w-full md:w-[40%] flex justify-center items-center">
            <Image
              src={rituals}
              alt="image"
              className="w-[18rem] md:w-[20rem]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0">
          <div className="hidden w-[40%] md:flex justify-center items-center">
            <Image src={couple} alt="image" className="w-[20rem]" />
          </div>
          <div className="flex flex-col w-full md:w-[60%] p-0 md:p-10 space-y-6">
            <div className="flex md:items-center justify-center gap-3 lora">
              <span className="text-[4rem] md:text-[6.25rem] font-semibold">
                4.
              </span>
              <p className="text-[1.8rem] md:text-[2.25rem] font-bold">
                A Wedding for the{" "}
                <span className="text-[#C95D2F]">Soul, Not the Show.</span>
              </p>
            </div>
            <div className="space-y-4 text-justify md:text-start open-sans text-[1rem] leading-loose">
            <p className="">
              Many couples today don’t want a big show, they want a wedding that
              feels true that’s why Triyuginarayan is becoming one of the most
              loved sacred Indian wedding destinations. 
            </p>
              <p className="">
                No loud music, no stress
              — just your loved ones, your promises, and the blessings of Lord
              Shiva and Goddess Parvati.
                </p>
            </div>
          </div>
          <div className="w-full md:w-[40%] flex md:hidden justify-center items-center">
            <Image src={couple} alt="image" className="w-[18rem]" />
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] m-auto font-serif text-black text-start md:text-center mt-25 mb-25 px-4 md:px-26">
        <p className="text-[2.2rem] md:text-[3rem] font-bold lora leading-relaxed">
          “ If your
          <span className="relative inline-block">
            <Image
              src={liked ? "/heart-filled.svg" : "/heart-outline.svg"}
              alt="heart"
              className={`inline-block w-16 h-16 md:w-22 md:h-22 cursor-pointer align-middle transition-transform duration-300 ease-in-out 
            ${
              animate ? "scale-125 translate-x-4" : "scale-70 translate-x-0"
            }`}
              width={1}
              height={1}
              onClick={handleClick}
            />
          </span>
          says <span className="text-[#c8552f">Yes</span> to{" "}
          <span className="text-[#c8552f]">
            peace, tradition, and real blessings
          </span>{" "}
          — then <span className="text-[#c8552f]">Triyuginarayan</span> is
          waiting for you.”
        </p>
      </div>
    </div>
  );
};

export default TriyuginarayanOverview;
