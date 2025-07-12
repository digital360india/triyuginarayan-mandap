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
    <div className="w-full h-[55rem] md:h-[50rem] lg:h-[640px] bg-[#C95D2F] ">
      <div className="max-w-[1440px] w-full flex flex-col lg:flex-row justify-end items-end overflow-hidden m-auto">
        <div className="relative w-full h-[55rem] md:h-[50rem] lg:h-[640px]">
         <div
  className={`
    absolute 
    top-10 
    left-1/2 transform -translate-x-1/2
    lg:left-10 lg:top-30 lg:transform-none lg:translate-x-0
    w-[300px] md:w-[500px] lg:w-[700px] 
    flex flex-col gap-10 lg:gap-8 z-10
    transition-all duration-[1600ms] ease-in-out
    ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
>

            {/* desktop */}
            <h1 className="hidden lg:block text-white text-[57px] lora">
              <span className="text-[#F6EBC1] font-bold">
                Triyuginarayan Temple :
              </span>{" "}
              <span className="italic">Vivaah Ka Punya Sthal</span>
            </h1>
            <div className="space-y-5">
              <p className="text-center lg:hidden text-[1.375rem] text-[#fff] font-bold lora">
                “ Vivaah Ka Punya Sthal ”
              </p>
              {/* mobile */}
              <h1 className="text-center lg:hidden text-[2.5rem] text-[#F6EBC1] font-bold lora">
                Triyuginarayan Temple
              </h1>
            </div>
            <p className="text-white text-[1rem] lg:text-[18px] w-[320px] md:w-[500px] lg:w-[500px] xl:w-full text-center lg:text-start open-sans">
              Get married where Shiva and Parvati did — in the sacred Garhwal
              hills, beside the eternal fire of their divine union. A wedding
              here is not just a ritual, but a timeless blessing.
            </p>
            <div className="mx-auto lg:mx-0">
              <button className="bg-[#FFB52C] text-center text-[16px] font-semibold cursor-pointer px-6 py-3 rounded-[7px] flex justify-start open-sans">
                Plan your Wedding
              </button>
            </div>
          </div>

          <div
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-20 h-[300px] w-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] transition-transform duration-1600 ease-in-out ${
              loaded ? "translate-y-0" : "translate-y-full"
            } z-20 m-auto`}
          >
            <Image
              src={shiv_parvati}
              alt="Shiv Parvati 1"
              fill
              className="object-contain"
            />
          </div>
          <div
            className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-20 animate-spin h-[300px] w-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] transition-transform duration-1600 ease-in-out ${
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
            className={`absolute -bottom-48 lg:-bottom-12 -right-[350px] md:right-0 w-[1000px] h-[1000px]  md:w-[90vw] max-w-[1000px] md:h-[600px] transition-transform duration-1600 ease-in-out
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
