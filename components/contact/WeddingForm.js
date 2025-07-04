import Image from "next/image";
import React from "react";
import email from "../../assets/images/badges/email.svg";
import whatsapp from "../../assets/images/badges/whatsapp.svg";
import arrow from "../../assets/images/arrow.png";

const WeddingForm = () => {
  return (
    <div className="flex px-10 mb-25 mt-25">
      <div className="w-[50%] p-10 space-y-9">
        <div className="w-full flex justify-end">
        <Image src={arrow} alt="image" />
        </div>
        <p className="text-[3.25rem] font-bold lora leading-tigh">Let&apos;s Begin your wedding journey with the <span className="text-[#C95D2F]">Blessing Of Gods.</span></p>
        <p>
          Please fill in the details below to help us understand your wedding
          needs. Our team will reach out with complete guidance and support.
        </p>
        <div className="flex flex-col gap-10 mt-10">
          <div className="flex gap-6 text-lg">
            <Image src={whatsapp} alt="image" />
            <div className="text-start">
              <p className="font-bold">Contact us</p>
              <p>+91-9023577149</p>
            </div>
          </div>
          <div className="flex gap-6 text-lg">
            <Image src={email} alt="image" />
            <div className="text-start">
              <p className="font-bold">Email us</p>
              <p>ontact@triyuginarayanmandap.in</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <form
          action=""
          className="bg-[#FBF9F9] w-[39.125rem] h-[60rem] m-auto flex flex-col justify-center gap-10 p-5 rounded-[1rem] shadow-[0px 0px 38px 0px rgba(0, 0, 0, 0.18)]"
        >
          <div className="flex flex-col gap-4 mx-auto">
            <label htmlFor="" className="font-semibold">
              {" "}
              Bride's Name{" "}
            </label>
            <input
              type="text"
              name=""
              id=""
              className="bg-[#EBEBEB] p-4 w-[31.8125rem] rounded-[7px] outline-none"
              placeholder="Enter Bride’s Name"
            />
          </div>
          <div className="flex flex-col gap-4 mx-auto">
            <label htmlFor="" className="font-semibold">
              {" "}
              Groom’s Name{" "}
            </label>
            <input
              type="text"
              name=""
              id=""
              className="bg-[#EBEBEB] p-4 w-[31.8125rem] rounded-[7px] outline-none"
              placeholder="Enter Bride’s Name"
            />
          </div>
          <div className="flex flex-col gap-4 mx-auto">
            <label htmlFor="" className="font-semibold">
              {" "}
              Phone no.
            </label>
            <input
              type="text"
              name=""
              id=""
              className="bg-[#EBEBEB] p-4 w-[31.8125rem] rounded-[7px] outline-none"
              placeholder="Enter Bride’s Name"
            />
          </div>
          <div className="flex flex-col gap-4 mx-auto">
            <label htmlFor="" className="font-semibold">
              {" "}
              Email address{" "}
            </label>
            <input
              type="text"
              name=""
              id=""
              className="bg-[#EBEBEB] p-4 w-[31.8125rem] rounded-[7px] outline-none"
              placeholder="Enter Bride’s Name"
            />
          </div>
          <div className="flex gap-4 w-[31.8125rem] mx-auto justify-between">
            <div className="flex flex-col gap-4 ">
              <label htmlFor="" className="font-semibold">
                {" "}
                Email address{" "}
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#EBEBEB] p-4 rounded-[7px] outline-none"
                placeholder="Enter Bride’s Name"
              />
            </div>
            <div className="flex flex-col gap-4 ">
              <label htmlFor="" className="font-semibold">
                {" "}
                Email address{" "}
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#EBEBEB] p-4  rounded-[7px] outline-none"
                placeholder="Enter Bride’s Name"
              />
            </div>
          </div>
          <div className="flex gap-4 w-[31.8125rem] mx-auto">
            <div className="flex flex-col gap-4">
              <label htmlFor="" className="font-semibold">
                {" "}
                Email address{" "}
              </label>
              <input
                type="date"
                name=""
                id=""
                className="bg-[#EBEBEB] p-4 rounded-[7px] outline-none uppercase"
                placeholder="Enter Bride’s Name"
              />
            </div>
          </div>
          <div className="mx-auto mt-10">
            <button className="bg-[#C95D2F] text-center text-[16px] text-white font-semibold cursor-pointer px-6 py-3 rounded-[7px] flex justify-start">
              Submit My Wedding Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WeddingForm;
