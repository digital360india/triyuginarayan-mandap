import React from "react";
import Image from "next/image";
import decor from "../../assets/images/badges/decor.svg";
import decor2 from "../../assets/images/badges/decor2.svg";
import bhoj from "../../assets/images/badges/bhoj.svg";
import bhoj2 from "../../assets/images/badges/bhoj2.svg";
import legal from "../../assets/images/badges/legal.svg";
import legal2 from "../../assets/images/badges/legal2.svg";
import traditions from "../../assets/images/badges/traditions.svg";
import traditions2 from "../../assets/images/badges/traditions2.svg";
import rituals from "../../assets/images/badges/rituals.svg";
import rituals2 from "../../assets/images/badges/rituals2.svg";
import accommodation from "../../assets/images/badges/accommodation.svg";
import accommodation2 from "../../assets/images/badges/accommodation2.svg";

const WhatWeOffer = () => {
  const offers = [
    {
      heading: "Spiritual Décor",
      para: "Inspired by the original Shiv-Parvati wedding.",
      img: decor,
      img1: decor2,
    },
    {
      heading: "Priest-led Rituals",
      para: "Performed with sacred chants and pure devotion.",
      img: rituals,
      img1: rituals2,
    },
    {
      heading: "Accommodation",
      para: "Comfortable local stays for family and guests.",
      img: accommodation,
      img1: accommodation2,
    },
    {
      heading: "Satvik & Wedding Bhoj",
      para: "Traditional flavors served with warmth.",
      img: bhoj,
      img1: bhoj2,
    },
    {
      heading: "Legal Marriage ",
      para: "Complete assistance with legal formalities.",
      img: legal,
      img1: legal2,
    },
    {
      heading: "Wedding Traditions",
      para: "Planned the way you envision your wedding ceremonies.",
      img: traditions,
      img1: traditions2,
    },
  ];

  return (
    <div className="max-w-[1440px] w-full m-auto mt-25">
      <div className="w-full m-auto text-center space-y-6">
        <p className="text-center text-[1.8rem] md:text-[2.25rem] font-bold">
          What We <span className="text-[#C95D2F]">Offer</span>
        </p>
        <p className="md:text-center text-[1rem] md:text-lg max-w-3xl mx-auto mt-[2.19rem] px-8 md:px-0 text-justify open-sans">
          We combine traditional rituals with modern ease to help you focus only
          on love, faith, and family. Our team of Triyuginarayan weddin planners
          takes care of everything:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-14 md:gap-y-16 max-w-5xl m-auto mt-[3.35rem] justify-items-center place-items-center">
          {offers.map((offer, index) => (
            <div
              className="flex flex-col gap-5 justify-center items-center text-center w-60 p-4"
              key={index}
            >
              <div className="flip-container w-40 h-40">
                <div className="flip-inner">
                  <div className="flip-front">
                    <Image
                      src={offer.img}
                      alt="Heads"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flip-back">
                    <Image
                      src={offer.img1}
                      alt="Tails"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                </div>
              </div>

              <p className="font-bold ">{offer.heading}</p>
              <p>{offer.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
