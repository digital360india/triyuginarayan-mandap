"use client";

import { useState } from "react";
import Image from "next/image";
import email from "../../assets/images/badges/email.svg";
import whatsapp from "../../assets/images/badges/whatsapp.svg";
import arrow from "../../assets/images/arrow.png";

const WeddingForm = () => {
  const [formData, setFormData] = useState({
    brideName: "",
    groomName: "",
    phone: "",
    email: "",
    weddingDate: "",
    guests: "",
    stayNights: "",
  });

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/sendWeddingForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Form submitted successfully!");
        window.alert("✅ Form submitted successfully!");

        setFormData({
          brideName: "",
          groomName: "",
          phone: "",
          email: "",
          weddingDate: "",
          guests: "",
          stayNights: "",
        });
      } else {
        setMessage("Submission failed. Try again.");
        window.alert("❌ Submission failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong.");
      window.alert("❌ Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row px-8 md:px-10 mb-25 mt-25 max-w-[1440px] w-full m-auto">
      <div className="w-full lg:w-[50%] p-0 md:p-10 space-y-9">
        <div className="w-full hidden lg:flex justify-end">
          <Image src={arrow} alt="image" />
        </div>
        <p className="text-[1.8rem] md:text-[3.25rem] font-bold lora text-center md:text-start">
          Let&apos;s Begin your wedding journey with the{" "}
          <span className="text-[#C95D2F]">Blessing Of Gods.</span>
        </p>
        <p className="text-[1rem] md:text-lg text-justify md:text-start open-sans leading-loose">
          Please fill in the details below to help us understand your wedding
          needs. Our team will reach out with complete guidance and support.
        </p>
        <div className="hidden lg:flex flex-col gap-10 mt-10">
          <div className="flex gap-6 text-[1rem] md:text-lg">
            <Image src={whatsapp} alt="image" />
            <div className="text-start open-sans">
              <p className="font-bold">Contact us</p>
              <p>+91 95575 36477</p>
            </div>
          </div>
          <div className="flex gap-6 text-[1rem] md:text-lg">
            <Image src={email} alt="image" />
            <div className="text-start open-sans">
              <p className="font-bold">Email us</p>
              <p>triyuginarayanmandap@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] lg:w-[50%] mt-5">
        <form
          onSubmit={handleSubmit}
          className="bg-[#FBF9F9] w-[90%] max-w-[39.125rem] m-auto flex flex-col justify-center gap-10 p-5 rounded-[1rem] shadow-[0px_0px_38px_0px_rgba(0,0,0,0.18)]"
        >
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Bride&apos;s Name</label>
            <input
              type="text"
              name="brideName"
              value={formData.brideName}
              onChange={handleChange}
              placeholder="Enter Bride&apos;s Name"
              className="bg-[#EBEBEB] p-4 rounded-[7px] outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Groom&apos;s Name</label>
            <input
              type="text"
              name="groomName"
              value={formData.groomName}
              onChange={handleChange}
              placeholder="Enter Groom&apos;s Name"
              className="bg-[#EBEBEB] p-4 rounded-[7px] outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Phone No.</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              className="bg-[#EBEBEB] p-4 rounded-[7px] outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              className="bg-[#EBEBEB] p-4 rounded-[7px] outline-none"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-semibold">Preferred Wedding Date</label>
              <input
                type="date"
                name="weddingDate"
                value={formData.weddingDate}
                onChange={handleChange}
                className="bg-[#EBEBEB] p-4 rounded-[7px] outline-none"
                required
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-semibold">
                No. of Guests <span className="text-[#6E6E6E]">(approx.)</span>
              </label>
              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                placeholder="Approximate Number"
                className="bg-[#EBEBEB] p-4 rounded-[7px] outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">No. of Stay Night Required</label>
            <input
              type="text"
              name="stayNights"
              value={formData.stayNights}
              onChange={handleChange}
              placeholder="Enter Number of Nights"
              className="bg-[#EBEBEB] p-4 rounded-[7px] outline-none"
            />
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              disabled={isLoading}
              className={`bg-[#C95D2F] text-white font-semibold px-6 py-3 rounded-[7px] transition ${
                isLoading
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:bg-[#b34e24]"
              }`}
            >
              {isLoading ? "Submitting..." : "Submit My Request"}
            </button>

            {message && (
              <p className="mt-4 text-sm text-green-600">{message}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default WeddingForm;
