"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WeddingCost = () => {

  return (
    <div className="">
      {/* Intro */}
      <div className="text-center px-4 py-8 max-w-3xl mx-auto">
        <p className="text-4xl font-bold font-serif">Wedding Packages</p>
        <p className="italic text-lg my-2">
          &quot;Simple. Sacred. Serene.&quot;
        </p>
        <p className="text-base text-gray-700">
          At Triyuginarayan Mandap, we have created wedding packages with love
          and care. Our goal is to help you plan a beautiful temple wedding that
          is full of blessings and free from stress. We keep everything simple,
          respectful of traditions, and easy for families to manage.
        </p>
      </div>

      {/* Floating Cards */}
      {/* <div className="flex justify-center gap-4 px-4 mb-12">
        <div className="h-[300px] w-[300px] bg-white shadow-md rounded-[0.7rem]"></div>
        <div className="h-[300px] w-[300px] bg-white shadow-lg rounded-[0.7rem] z-10"></div>
        <div className="h-[300px] w-[300px] bg-white shadow-md rounded-[0.7rem]"></div>
      </div> */}
      
      <div className="max-w-7xl mx-auto p-6 ">
  {/* Header */}
  <div className="grid grid-cols-4 gap-4 mb-6 items-center">
    <h2 className="text-3xl font-bold text-gray-800">Plans</h2>
    <button className="bg-[#4E4E4E] text-white py-2 rounded-lg w-full">Basic</button>
    <button className="bg-[#C95D2F] text-white py-2 rounded-lg w-full">Standard</button>
    <button className="bg-[#A42D2B] text-white py-2 rounded-lg w-full">Premium</button>
  </div>

  {/* Aligned Content */}
  <div className="grid grid-cols-4 gap-4">
    {/* Features Column */}
    <div className="grid grid-rows-[repeat(9,minmax(0,1fr))] gap-4 text-sm font-medium text-gray-900">
      <p>Wedding Rituals by Local Purohit</p>
      <p>Marriage Registration Support</p>
      <p>Stay for Guests</p>
      <p>Guidance for Food/Meals</p>
      <p>Help with Wedding Arrangements</p>
      <p>Mandap Decoration</p>
      <p>Support for Haldi/Mehndi Rituals</p>
      <p>Optional Add-ons</p>
      <div></div> {/* Spacer for button alignment */}
    </div>

    {/* Basic Card */}
    <div className="grid grid-rows-[repeat(9,minmax(0,1fr))] gap-4 rounded-2xl shadow-md p-4 text-sm text-gray-800">
      <p className="text-green-500"><FaCheckCircle className="w-32 h-8" /></p>
      <p className="text-green-500"><FaCheckCircle className="w-32 h-8" /></p>
      <p><span className="text-green-500"><FaCheckCircle className="w-32 h-8" /> </span><br />Bride, Groom + 3 Guests, 1 Night</p>
      <p ><span className="text-green-500"><FaCheckCircle className="w-32 h-8" /> </span> <br />Guidance for Food/Meals</p>
      <p className="text-green-500"><FaCheckCircle className="w-32 h-8" /></p>
      <p className="text-gray-400"><FaCheckCircle className="w-32 h-8" /></p>
      <p className="text-gray-400"><FaCheckCircle className="w-32 h-8" /></p>
      <p>Garlands & basic décor <br /> Photographer <br /> Tea/snack</p>
      <button className="w-full bg-[#4E4E4E] text-white py-2 rounded-lg self-end">Select Package</button>
    </div>

    {/* Standard Card */}
    <div className="grid grid-rows-[repeat(9,minmax(0,1fr))] gap-4 rounded-2xl shadow-md p-4 bg-gradient-to-b from-[#FF4C0026] to-[#ffb99b80] text-sm text-gray-800">
      <p className=""><span className="text-green-500"><FaCheckCircle className="w-32 h-8" /> </span> (with assistant)</p>
      <p className="text-green-500"><FaCheckCircle className="w-32 h-8" /></p>
      <p ><span className="text-green-500"><FaCheckCircle className="w-32 h-8" /> </span> <br />Up to 10 Guests, 1 Night</p>
      <p> <span className="text-green-500"><FaCheckCircle className="w-32 h-8" /> </span> <br />Wedding bhoj – satvik meals</p>
      <p className="text-green-500"><FaCheckCircle className="w-32 h-8" /></p>
      <p ><span className="text-green-500"><FaCheckCircle className="w-32 h-8" /> </span><br /> Flowers & cloth</p>
      <p className="text-green-500"><FaCheckCircle className="w-32 h-8" /></p>
      <p>Dhol/music <br /> Rangoli/diya <br /> Local gifts</p>
      <button className="w-full bg-[#C95D2F] text-white py-2 rounded-lg self-end">Select Package</button>
    </div>

    {/* Premium Card */}
    <div className="grid grid-rows-[repeat(9,minmax(0,1fr))] gap-4 rounded-2xl shadow-md p-4 bg-gradient-to-b from-[#ff040019] to-[#FF706E80] text-sm text-gray-800">
      <p ><span className="text-green-500"><FaCheckCircle className="w-32 h-8" /> </span> (Customise)</p>
      <p><span className="text-green-500"><FaCheckCircle className="w-32 h-8" /> </span> <br />(Full Legal Support)</p>
      <p ><span className="text-green-500"><FaCheckCircle className="w-32 h-8" /> </span> <br />Up to 12 Guests, 1 Night</p>
      <p><span className="text-green-500"><FaCheckCircle className="w-32 h-8" /> </span> <br />Traditional meals</p>
      <p className="text-green-500"><FaCheckCircle className="w-32 h-8" /></p>
      <p><span className="text-green-500"><FaCheckCircle className="w-32 h-8" /> </span> Full floral & mandap décor</p>
      <p ><span className="text-green-500"><FaCheckCircle className="w-32 h-8" /> </span>(Haldi, mangal geet, aarti, dhol)</p>
      <p>Floral bride entry <br /> Reels/photoshoot <br /> Traditional attire shoot</p>
      <button className="w-full bg-[#A42D2B] text-white py-2 rounded-lg self-end">Select Package</button>
    </div>
  </div>
</div>



    </div>
  );
};

export default WeddingCost;
