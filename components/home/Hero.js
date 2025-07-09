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
    <div className="w-full h-[50rem] md:h-[640px] bg-[#C95D2F] ">
      <div className="max-w-[1440px] w-full flex flex-col md:flex-row justify-end items-end overflow-hidden m-auto">
        <div className="relative w-full h-[50rem] md:h-[640px]">
          <div
            className={`
    absolute top-10 md:top-30 left-10 w-[300px] md:w-[700px] flex flex-col gap-10 z-10
    transition-all duration-[1600ms] ease-in-out
    ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
          >
            {/* desktop */}
            <h1 className="hidden md:block text-white text-[57px]">
              <span className="text-[#F6EBC1] font-bold ">
                Triyuginarayan Temple :
              </span>{" "}
              <span className="italic">Vivaah Ka Punya Sthal</span>
            </h1>
            <div className="space-y-5">
            <p className="text-center md:hidden text-[1.375rem] text-[#fff] font-bold lora">
              “ Vivaah Ka Punya Sthal ”
            </p>
            {/* mobile */}
            <h1 className="text-center md:hidden text-[2.5rem] text-[#F6EBC1] font-bold lora">
              Triyuginarayan Temple
            </h1>
            </div>
            <p className="text-white text-[1rem] md:text-[18px] w-[325px] text-center md:text-start open-sans">
              Get married where Shiva and Parvati did — in the sacred Garhwal
              hills, beside the eternal fire of their divine union. A wedding
              here is not just a ritual, but a timeless blessing.
            </p>
            <div className="mx-auto md:mx-0">
              <button className="bg-[#FFB52C] text-center text-[16px] font-semibold cursor-pointer px-6 py-3 rounded-[7px] flex justify-start">
                Plan your Wedding
              </button>
            </div>
          </div>

          
          <div
            className={`absolute bottom-0 right-15 md:right-20 h-[300px] w-[300px] md:w-[500px] md:h-[500px] transition-transform duration-1600 ease-in-out ${
              loaded ? "translate-y-0" : "translate-y-full"
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
            className={`absolute bottom-10 right-15 md:right-20 animate-spin h-[300px] w-[300px] md:w-[500px] md:h-[500px] transition-transform duration-1600 ease-in-out ${
              loaded ? "translate-y-0" : "translate-y-full"
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
            className={`absolute -bottom-48 md:-bottom-12 -right-[350px] md:right-0 w-[1000px] h-[1000px]  md:w-[90vw] max-w-[1000px] md:h-[600px] transition-transform duration-1600 ease-in-out
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
