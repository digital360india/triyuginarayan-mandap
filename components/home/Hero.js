"use client";
import React from "react";
import Image from "next/image";
import shiv_parvati from "../../assets/images/shiv-parvati.png";
import mantra from "../../assets/images/mantra.png";
import temple_silhoutte from "../../assets/images/temple-silhoutte.png";
import { useEffect, useState } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 0);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full h-[600px] bg-[#C95D2F] ">
      <div className="max-w-[1440px] w-full h-[600px] flex justify-end items-end overflow-hidden m-auto">
        <div className="relative w-full h-[640px]">
          <div
            className={`
    absolute top-30 left-10 w-[700px] flex flex-col gap-10 z-10
    transition-all duration-[1600ms] ease-in-out
    ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
          >
            <h1 className="text-white text-[57px] ">
              <span className="text-[#F6EBC1] font-bold">
                Triyuginarayan Temple :
              </span>{" "}
              <span className="italic">Vivaah Ka Punya Sthal</span>
            </h1>
            <p className="text-white text-[18px]">
              Get married where Shiva and Parvati did — in the sacred Garhwal
              hills, beside the eternal fire of their divine union. A wedding
              here is not just a ritual, but a timeless blessing.
            </p>
            <div>
              <button className="bg-[#FFB52C] text-center text-[16px] font-semibold cursor-pointer px-6 py-3 rounded-[7px] flex justify-start">
                Plan your Wedding
              </button>
            </div>
          </div>
          <div
            className={`absolute bottom-0 right-20  w-[500px] h-[500px] transition-transform duration-1600 ease-in-out ${loaded ? "translate-y-0" : "translate-y-full"
              } z-20`}
          >
            <Image
              src={shiv_parvati}
              alt="Shiv Parvati 1"
              fill
              className="object-contain"
            />
          </div>
          <div
            className={`absolute bottom-10 right-20 animate-spin  w-[500px] h-[500px] transition-transform duration-1600 ease-in-out ${loaded ? "translate-y-0" : "translate-y-full"
              } z-19 spin-slow`}
          >
            <Image
              src={mantra}
              alt="Shiv Parvati 1"
              fill
              className="object-contain"
            />
          </div>

          <div
            className={`absolute -bottom-12 right-0 w-[90vw] max-w-[1000px] h-[600px] transition-transform duration-1600 ease-in-out
             ${loaded ? "translate-x-0" : "translate-x-full"}
             `}
          >
            <Image
              src={temple_silhoutte}
              alt="Shiv Parvati 2"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
