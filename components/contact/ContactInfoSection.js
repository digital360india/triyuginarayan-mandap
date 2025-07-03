import Image from "next/image";
import React from "react";
import email from "../../assets/images/badges/email.svg";
import whatsapp from "../../assets/images/badges/whatsapp.svg";
import assistant from "../../assets/images/badges/assistant.svg";

const ContactInfoSection = () => {
  return (
    <div className="bg-white">
    <div className="w-full max-w-[1440px] px-6 py-12  text-center mt-25 m-auto">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-4">
          <p className="text-[3.25rem] font-bold mb-4 lora">
            Get in <span className="text-[#C95D2F]">Touch</span> with Us
          </p>
          <Image src={assistant} alt="image" className="w-[4.8rem]" />
        </div>
        <p className="text-lg open-sans mt-6">
          We’re always here to help you with any questions or doubts related to
          weddings or our services. Feel free to reach out via email or call
          anytime between{" "}
          <span className="text-[#C95D2F] font-bold">
            10 AM to 6 PM, Monday to Sunday.
          </span>
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
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

        <div className="mt-6 flex items-center justify-center gap-5">
          <div className="w-[300px] h-[1px] bg-black " />
          <div className="font-bold">OR</div>
          <div className="w-[300px] h-[1px] bg-black " />
        </div>

        <div className="w-full mx-auto flex flex-col gap-8 mt-10">
          <p>
            You can also fill out the form below and we’ll get back to you as
            soon as possible.
          </p>
          <div className="mx-auto">
            <button className="bg-[#C95D2F] text-center text-[16px] text-white font-semibold cursor-pointer px-6 py-3 rounded-[7px] flex justify-start">
              Book your wedding
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactInfoSection;
