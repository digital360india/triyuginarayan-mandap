import Image from "next/image";
import React from "react";
import thank from "../../assets/images/badges/thank-image.svg";
import tick from "../../assets/images/badges/success-tick.svg";
import Sloganlogo from "../../assets/images/logo/logo-slogan.svg";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center items-center bg-[#FFE4B8] h-[80vh] m-auto mb-10">
      <div className="inset-0 flex flex-col gap-5 items-center justify-center w-[350px] md:w-[800px] bg-[#FDFFF2] rounded-[22px] p-[40px]">
        <div className="flex items-center justify-center md:justify-start md:items-start w-full mb-6 md:mb-0">
          <Image src={Sloganlogo} alt="imah" />
        </div>
        <div className="hidden md:block">
        <Image src={thank} alt="image" />
        </div>

        <div className="flex flex-col  gap-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Image src={tick} alt="image" className="w-[70px] md:w-[45px] h-auto" />
            <p className="text-[28px] md:text-[38px] font-bold text-center">
              Your request has been submitted.
            </p>
          </div>
          <p className="text-justify md:text-center">
            Thank you for reaching out. Our team will connect with you shortly
            to help you plan your sacred wedding at Triyuginarayan Temple.
          </p>
        </div>

        <Link href="/">
          <button className="bg-[#C95D2F] rounded-[7px] px-6 py-3 text-white cursor-pointer mt-5">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
