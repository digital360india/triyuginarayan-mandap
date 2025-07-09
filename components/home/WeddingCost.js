import React from "react";
import wedding_cost from "../../assets/images/wedding-cost.png";
import mantra from "../../assets/images/mantra2.png";
import Image from "next/image";

const WeddingCost = () => {
  return (
    <div className="max-w-[1400px] flex flex-col md:flex-row justify-between mt-25 md:h-[600px] m-auto px-0 md:px-10">
      <div className="w-full md:w-2xl p-0 md:p-10 mx-auto px-8 md:px-10 space-y-6">
        <p className="text-[1.8rem] md:text-[2.25rem] font-bold text-center md:text-start">
          What Does a Triyuginarayan Temple{" "}
          <span className="text-[#C95D2F]">Wedding Cost?</span>
        </p>
        <p className="mt-[2.19rem] text-justify md:text-start">
          Your wedding at the sacred Shiva-Parvati mandap can be both meaningful
          and manageable.
        </p>
        <div className="mt-[3.35rem] space-y-4">
          <div className="flex gap-4 items-center">
            <div className="w-[13px] h-[13px] rounded-full bg-[#C95D2F]" />
            Weddings start from ₹1,00,000.
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-[13px] h-[13px] rounded-full bg-[#C95D2F]" />
            Final cost depends on guest count, stay, décor, and rituals.
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-[13px] h-[13px] rounded-full bg-[#C95D2F]" />
            We offer customized packages as per your needs.
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-[13px] h-[13px] rounded-full bg-[#C95D2F]" />
            No hidden charges. Full clarity in every detail.
          </div>
        </div>
        <div className="mt-[3.85rem] flex justify-center md:justify-start">
          <button className="bg-[#C95D2F] text-white text-center text-[16px] font-semibold cursor-pointer px-6 py-3 rounded-[7px] flex justify-start">
            Know your wedding cost
          </button>
        </div>
      </div>
      <div>
        <div className="h-[400px]">
          <div className="relative flex justify-center md:w-2xl">
            <div
              className={`absolute top-[80px] md:top-[100px] w-[250px] h-[250px] md:w-[500px] md:h-[500px] transition-transform duration-1600 ease-in-out z-20`}
            >
              <Image
                src={wedding_cost}
                alt="image"
                fill
                className="object-contain"
              />
            </div>
            <div
              className={`absolute top-[20px] animate-spin w-[300px] h-[300px] md:w-[500px] md:h-[500px] transition-transform duration-1600 ease-in-out z-19 spin-slow overflow-hidden`}
            >
              <Image
                src={mantra}
                alt="image"
                fill
                className="object-contain w-[90px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingCost;
