import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logo/logo.svg";
import facebook from "../../assets/images/badges/facebook.svg";
import instagram from "../../assets/images/badges/instagram.svg";
import whatsapp_fill from "../../assets/images/badges/whatsapp-fill.svg";


const Footer = () => {
  return (
    <div className="bg-[#FFF6D5]">
    <div className="flex flex-col md:flex-row justify-between p-10 max-w-[1440px]  m-auto gap-10">
      <div className="w-full lg:w-1/3 flex flex-col gap-4 text-center md:text-start">
        <p className="text-[2.25rem] font-bold lora">Contact Us</p>
        <p className="text-[0.9rem] text-gray-600 open-sans">
          Triyuginarayan Temple, Rudraprayag, Uttarakhand.
        </p>
        <p className="text-[0.9rem] text-gray-600 open-sans break-all">
          triyuginarayanweddingwork@gmail.com
        </p>
        <p className="text-[0.9rem] text-gray-600 open-sans">+91-xxx-xxxxx </p>
      </div>
      <div className="lg:w-1/3 hidden lg:flex flex-col items-center">
      <div>
        <p className="text-[2.25rem] font-bold lora">Follow Us</p>
        <div className="flex gap-4 mt-4">
          <Image src={instagram} alt="ig icon"/>
          <Image src={facebook} alt="fb icon"/>
          <Image src={whatsapp_fill} alt="wa icon"/>
        </div>
      </div>
      </div>
      <div className="lg:w-1/3 w-full flex justify-center md:justify-end items-center">
        <Image src={logo} alt="img" className="w-32" />
      </div>
    </div>
    </div>
  );
};

export default Footer;
