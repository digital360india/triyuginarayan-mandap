import Image from "next/image";
import React from "react";
import email from "../../assets/images/badges/email.svg";
import whatsapp from "../../assets/images/badges/whatsapp.svg";
import arrow from "../../assets/images/arrow.png";

const WeddingForm = () => {
  return (
    <div className="flex flex-col lg:flex-row px-8 md:px-10 mb-25 mt-25 max-w-[1440px] w-full m-auto">
      <div className="w-full lg:w-[50%] p-0 md:p-10 space-y-9">
        <div className="w-full hidden lg:flex justify-end">
        <Image src={arrow} alt="image" />
        </div>
        <p className="text-[1.8rem] md:text-[3.25rem] font-bold lora text-center md:text-start">Let&apos;s Begin your wedding journey with the <span className="text-[#C95D2F]">Blessing Of Gods.</span></p>
        <p className="text-[1rem] md:text-lg text-justify md:text-start open-sans">
          Please fill in the details below to help us understand your wedding
          needs. Our team will reach out with complete guidance and support.
        </p>
        <div className="hidden lg:flex flex-col gap-10 mt-10">
          <div className="flex gap-6 text-[1rem] md:text-lg">
            <Image src={whatsapp} alt="image" />
            <div className="text-start open-sans">
              <p className="font-bold">Contact us</p>
              <p>+91-9023577149</p>
            </div>
          </div>
          <div className="flex gap-6 text-[1rem] md:text-lg">
            <Image src={email} alt="image" />
            <div className="text-start open-sans">
              <p className="font-bold">Email us</p>
              <p>contact@triyuginarayanmandap.in</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[50%] mt-5">
        <form
  action=""
  className="bg-[#FBF9F9] w-[90%] max-w-[39.125rem] m-auto flex flex-col justify-center gap-10 p-5 rounded-[1rem] shadow-[0px_0px_38px_0px_rgba(0,0,0,0.18)]"
>
  <div className="flex flex-col gap-2">
    <label htmlFor="brideName" className="font-semibold open-sans">Bride’s Name</label>
    <input
      type="text"
      name="brideName"
      id="brideName"
      className="bg-[#EBEBEB] p-4 w-full rounded-[7px] outline-none"
      placeholder="Enter Bride’s Name"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label htmlFor="groomName" className="font-semibold open-sans">Groom’s Name</label>
    <input
      type="text"
      name="groomName"
      id="groomName"
      className="bg-[#EBEBEB] p-4 w-full rounded-[7px] outline-none"
      placeholder="Enter Groom’s Name"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label htmlFor="phone" className="font-semibold open-sans">Phone No.</label>
    <input
      type="text"
      name="phone"
      id="phone"
      className="bg-[#EBEBEB] p-4 w-full rounded-[7px] outline-none"
      placeholder="Enter Phone Number"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label htmlFor="email" className="font-semibold open-sans">Email Address</label>
    <input
      type="email"
      name="email"
      id="email"
      className="bg-[#EBEBEB] p-4 w-full rounded-[7px] outline-none"
      placeholder="Enter Email Address"
    />
  </div>

  <div className="flex flex-col md:flex-row gap-4">
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="weddingDate" className="font-semibold open-sans">Preferred Wedding Date</label>
      <input
        type="date"
        name="weddingDate"
        id="weddingDate"
        className="bg-[#EBEBEB] p-4 rounded-[7px] outline-none uppercase"
      />
    </div>

    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="guests" className="font-semibold open-sans">
        No. of Guests <span className="text-[#6E6E6E]">(approx.)</span>
      </label>
      <input
        type="number"
        name="guests"
        id="guests"
        className="bg-[#EBEBEB] p-4 rounded-[7px] outline-none"
        placeholder="Approximate Number"
      />
    </div>
  </div>

  <div className="flex flex-col gap-2">
    <label htmlFor="stayNights" className="font-semibold open-sans">No. of Stay Night Required</label>
    <input
      type="text"
      name="stayNights"
      id="stayNights"
      className="bg-[#EBEBEB] p-4 rounded-[7px] outline-none"
      placeholder="Enter Number of Nights"
    />
  </div>

  <div className="text-center mt-6">
    <button className="bg-[#C95D2F] text-white font-semibold px-6 py-3 rounded-[7px] hover:bg-[#b34e24] transition open-sans">
      Submit My Wedding Request
    </button>
  </div>
</form>

      </div>
    </div>
  );
};

export default WeddingForm;
