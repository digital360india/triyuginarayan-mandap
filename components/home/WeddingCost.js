import React from "react";
import wedding_cost from "../../assets/images/wedding-cost.png";
import mantra from "../../assets/images/mantra2.png";
import Image from "next/image";

const WeddingCost = () => {
  return (
    <div className="max-w-[1440px] flex flex-col lg:flex-row justify-between mt-[6rem] md:mt-[10rem] lg:h-[600px] w-full m-auto px-5 md:px-10">
      {/* Left Text Section */}
      <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 px-4 md:px-10">
        <p className="text-[1.8rem] md:text-[2.25rem] font-bold text-center md:text-left">
          What Does a Triyuginarayan Temple{" "}
          <span className="text-[#C95D2F]">Wedding Cost?</span>
        </p>

        <p className="text-[1rem] leading-[1.75rem] text-justify md:text-left mt-6 md:mt-0">
          Your wedding at the sacred Shiva-Parvati mandap can be both meaningful
          and manageable.
        </p>

        {/* List */}
        <div className="space-y-4 text-[1rem] mt-6">
          {[
            "Weddings start from ₹1,00,000.",
            "Final cost depends on guest count, stay, décor, and rituals.",
            "We offer customized packages as per your needs.",
            "No hidden charges. Full clarity in every detail.",
          ].map((item, index) => (
            <div key={index} className="flex  gap-2">
              <div className="flex justify-start w-[13px] h-[13px]">
              <div className="w-[13px] h-[13px] mt-1 rounded-full bg-[#C95D2F]" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center md:justify-start">
          <button className="bg-[#C95D2F] text-white text-[16px] font-semibold px-6 py-3 rounded-[7px]">
            Know your wedding cost
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[600px] flex  justify-center mt-16 md:mt-0 overflow-hidden">
        {/* Image spinning ring */}
        <div className="absolute top-[20px] w-[220px] h-[220px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] animate-spin spin-slow z-10">
          <Image
            src={mantra}
            alt="Mantra Ring"
            fill
            className="object-contain"
          />
        </div>

        {/* Wedding Cost Main Image */}
        <div className="absolute top-[70px] md:top-[100px] w-[220px] h-[220px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] z-20">
          <Image
            src={wedding_cost}
            alt="Wedding Cost"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default WeddingCost;
