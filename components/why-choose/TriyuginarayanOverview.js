import React from "react";
import Image from "next/image";
import rituals from "../../assets/images/rituals.png";
import couple from "../../assets/images/couple.png";
import mountains from "../../assets/images/mountains.png";
import triyuginarayan_temple from "../../assets/images/triyuginarayan-temple.png";
import choose_us from "../../assets/images/choose-us.png";

const TriyuginarayanOverview = () => {

  return (
    <div>
      <div className="max-w-[1440px] bg-[#C95D2F] h-[30rem] relative">
        <div className="flex justify-center items-center h-full px-20">
          <p className="w-[70rem] text-[3.4375rem] text-white font-bold lora z-10 leading-tight">
            Why Choose <span className="text-[#F6E8C1]">Triyuginarayan</span>{" "}
            for Your Wedding?
          </p>
          <p className="w-[80rem] text-white text-[1.125rem] open-sans z-10 leading-10">
            If you’re looking for a wedding that’s simple, soulful, and full of
            meaning, Triyuginarayan is one of the most special places you’ll
            ever find. This is not just a destination — it’s a place where
            marriage truly began.Here’s why so many couples are choosing a
            wedding at Triyuginarayan Temple for their big day:
          </p>
        </div>
        <div className="absolute right-0 bottom-0">
          <Image src={choose_us} alt="imge" className="h-[30rem]" />
        </div>
      </div>

      <div className="flex flex-col gap-32 px-10 mt-25">
        <div className="flex">
            <div className="flex flex-col w-[60%] p-10">
            <div className="flex items-center justify-center gap-3">
              <span className="text-[6.25rem] font-semibold">1.</span>
              <p className="text-[2.25rem] font-bold">
                The Place Where Lord Shiva <span className="text-[#C95D2F]">Married</span> Parvati.
              </p>
              </div> 
              <p>Triyuginarayan is the same place where Lord Shiva and Goddess Parvati got married.The fire from their wedding — the Akhand Dhuni — still burns inside the temple. Couples from all over India come here to take their vows where the gods once stood.If you’re looking for a wedding that’s not just beautiful, but blessed, this is the right place.</p>
            </div>

            <div className="w-[40%] flex justify-center items-center">
              <Image src={triyuginarayan_temple} alt="image" className="w-[20rem]"/>
            </div>
          </div>
        <div className="flex">
          <div className="w-[40%] flex justify-center items-center">
              <Image src={mountains} alt="image" className="w-[20rem]"/>
            </div>
            <div className="flex flex-col w-[60%] p-10">
            <div className="flex items-center justify-center gap-3">
              <span className="text-[6.25rem] font-semibold">2.</span>
              <p className="text-[2.25rem] font-bold">
                <span className="text-[#C95D2F]">Quiet</span> Mountains. <span className="text-[#C95D2F]">Pure</span> Air. <span className="text-[#C95D2F]">Natural </span>Blessings.
              </p>
              </div> 
              <p>This is not a crowded city wedding. Triyuginarayan is a peaceful village in the Himalayas, surrounded by nature. The air is fresh, the views are beautiful, and the atmosphere is calm. It’s the perfect place to begin your new life — with peace in your heart and blessings all around.</p>
            </div>

            
          </div>
        <div className="flex">
            <div className="flex flex-col w-[60%] p-10">
            <div className="flex items-center justify-center gap-3">
              <span className="text-[6.25rem] font-semibold">3.</span>
              <p className="text-[2.25rem] font-bold">
                <span className="text-[#C95D2F]">Real</span> Rituals. <span className="text-[#C95D2F]">Deep</span> Meaning. <span className="text-[#C95D2F]">Lifelong</span> Memories.
              </p>
              </div> 
              <p>Weddings here are not rushed. You sit near the eternal fire, guided by local priests.Mantras are chanted with care, and the whole ceremony feels real — not just for photos, but for life. From Garhwali wedding songs to simple traditional rituals, every moment feels meaningful.</p>
            </div>

            <div className="w-[40%] flex justify-center items-center">
              <Image src={rituals} alt="image" className="w-[20rem]"/>
            </div>
          </div>
        <div className="flex">
           <div className="w-[40%] flex justify-center items-center">
              <Image src={couple} alt="image" className="w-[20rem]"/>
            </div>
            <div className="flex flex-col w-[60%] p-10">
            <div className="flex items-center justify-center gap-3">
              <span className="text-[6.25rem] font-semibold">4.</span>
              <p className="text-[2.25rem] font-bold">
                A Wedding for the <span className="text-[#C95D2F]">Soul, Not the Show.</span>
              </p>
              </div> 
              <p>Many couples today don’t want a big show, they want a wedding that feels true that’s why Triyuginarayan is becoming one of the most loved sacred Indian wedding destinations. No loud music, no stress — just your loved ones, your promises, and the blessings of Lord Shiva and Goddess Parvati.</p>
            </div>

           
          </div>
      </div>

      <p>
        “ If your says Yes to peace, tradition, and real blessings — then
        Triyuginarayan is waiting for you.”
      </p>
    </div>
  );
};

export default TriyuginarayanOverview;
