import React from "react";
import wedding_cost from "../../assets/images/wedding-cost.png";
import mantra from "../../assets/images/mantra2.png";
import Image from "next/image";

const WeddingCost = () => {
  return (
    <div className="max-w-[1400px] flex justify-between mt-25 h-[600px] m-auto px-10">
      <div className="w-2xl p-10">
        <p className="text-[2.25rem] font-bold">
          What Does a Triyuginarayan Temple{" "}
          <span className="text-[#C95D2F]">Wedding Cost?</span>
        </p>
        <p className="mt-[2.19rem]">
          Your wedding at the sacred Shiva-Parvati mandap can be both meaningful
          and manageable.
        </p>
        <div className="mt-[3.35rem] space-y-4">
          <div className="flex gap-4 items-center"><div className="w-[13px] h-[13px] rounded-full bg-[#C95D2F]"/>Weddings start from ₹1,00,000.</div>
          <div className="flex gap-4 items-center"><div className="w-[13px] h-[13px] rounded-full bg-[#C95D2F]"/>Final cost depends on guest count, stay, décor, and rituals.</div>
          <div className="flex gap-4 items-center"><div className="w-[13px] h-[13px] rounded-full bg-[#C95D2F]"/>We offer customized packages as per your needs.</div>
          <div className="flex gap-4 items-center"><div className="w-[13px] h-[13px] rounded-full bg-[#C95D2F]"/>No hidden charges. Full clarity in every detail.</div>
        </div>
        <div className="mt-[3.85rem]">
          <button className="bg-[#C95D2F] text-white text-center text-[16px] font-semibold cursor-pointer px-6 py-3 rounded-[7px] flex justify-start">
            Know your wedding cost
          </button>
        </div>
      </div>
      <div className="relative flex justify-center items-center w-2xl">
        <div>

        </div>
        <div
          className={`absolute top-[100px] w-[500px] h-[500px] transition-transform duration-1600 ease-in-out z-20`}
        >
          <Image
            src={wedding_cost}
            alt="Shiv Parvati 1"
            fill
            className="object-contain"
          />
        </div>
        <div
          className={`absolute top-[20px] animate-spin  w-[500px] h-[500px] transition-transform duration-1600 ease-in-out z-19 spin-slow`}
        >
          <Image
            src={mantra}
            alt="Shiv Parvati 1"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default WeddingCost;
