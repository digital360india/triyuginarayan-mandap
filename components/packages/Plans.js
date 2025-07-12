import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Wedding Rituals by Local Purohit",
  "Marriage Registration Support",
  "Stay for Guests",
  "Guidance for Food/Meals",
  "Help with Wedding Arrangements",
  "Mandap Decoration",
  "Support for Haldi/Mehndi Rituals",
  "Optional Add-ons",
  "",
];

const plans = [
  {
    name: "Basic",
    color: "#4E4E4E",
    bg: "",
    features: [
      <React.Fragment key="b1">
        <FaCheckCircle className="text-green-500 w-6 h-6" />
      </React.Fragment>,
      <React.Fragment key="b2">
        <FaCheckCircle className="text-green-500 w-6 h-6" />
      </React.Fragment>,
      <React.Fragment key="b3">
        <FaCheckCircle className="text-green-500 w-6 h-6" />
        Bride, Groom + 3 Guests, 1 Night
      </React.Fragment>,
      <React.Fragment key="b4">
        <FaCheckCircle className="text-green-500 w-6 h-6" />
        Guidance for Food/Meals
      </React.Fragment>,
      <React.Fragment key="b5">
        <FaCheckCircle className="text-green-500 w-6 h-6" />
      </React.Fragment>,
      <React.Fragment key="b6">
        <FaCheckCircle className="text-gray-400 w-6 h-6" />
      </React.Fragment>,
      <React.Fragment key="b7">
        <FaCheckCircle className="text-gray-400 w-6 h-6" />
      </React.Fragment>,
      <React.Fragment key="b8">
        Garlands & basic décor <br /> Photographer <br /> Tea/snack
      </React.Fragment>,
    ],
  },
  {
    name: "Standard",
    color: "#C95D2F",
    bg: "bg-gradient-to-b from-[#FF4C0026] to-[#ffb99b80]",
    features: [
      <React.Fragment key="s1">
        <FaCheckCircle className="text-green-500 w-6 h-6" /> (with assistant)
      </React.Fragment>,
      <React.Fragment key="s2">
        <FaCheckCircle className="text-green-500 w-6 h-6" />
      </React.Fragment>,
      <React.Fragment key="s3">
        <FaCheckCircle className="text-green-500 w-6 h-6" />
        Up to 10 Guests, 1 Night
      </React.Fragment>,
      <React.Fragment key="s4">
        <FaCheckCircle className="text-green-500 w-6 h-6" />
        Wedding bhoj – satvik meals
      </React.Fragment>,
      <React.Fragment key="s5">
        <FaCheckCircle className="text-green-500 w-6 h-6" />
      </React.Fragment>,
      <React.Fragment key="s6">
        <FaCheckCircle className="text-green-500 w-6 h-6" />
        Flowers & cloth
      </React.Fragment>,
      <React.Fragment key="s7">
        <FaCheckCircle className="text-green-500 w-6 h-6" />
      </React.Fragment>,
      <React.Fragment key="s8">
        Dhol/music <br /> Rangoli/diya <br /> Local gifts
      </React.Fragment>,
    ],
  },
  {
    name: "Premium",
    color: "#A42D2B",
    bg: "bg-gradient-to-b from-[#ff040019] to-[#FF706E80]",
    features: [
      <React.Fragment key="p1">
        <FaCheckCircle className="text-green-500 w-6 h-6" /> (Customise)
      </React.Fragment>,
      <React.Fragment key="p2">
        <FaCheckCircle className="text-green-500 w-6 h-6" />
        (Full Legal Support)
      </React.Fragment>,
      <React.Fragment key="p3">
        <FaCheckCircle className="text-green-500 w-6 h-6" />
        Up to 12 Guests, 1 Night
      </React.Fragment>,
      <React.Fragment key="p4">
        <FaCheckCircle className="text-green-500 w-6 h-6" />
        
        Traditional meals
      </React.Fragment>,
      <React.Fragment key="p5">
        <FaCheckCircle className="text-green-500 w-6 h-6" />
      </React.Fragment>,
      <React.Fragment key="p6">
        <FaCheckCircle className="text-green-500 w-6 h-6" />
        Full floral & mandap décor
      </React.Fragment>,
      <React.Fragment key="p7">
        <FaCheckCircle className="text-green-500 w-6 h-6" />
        (Haldi, mangal geet, aarti, dhol)
      </React.Fragment>,
      <React.Fragment key="p8">
        Floral bride entry <br /> Reels/photoshoot <br /> Traditional attire
        shoot
      </React.Fragment>,
    ],
  },
];

export default function Plans() {
  return (
    <div className="max-w-6xl mx-auto p-6 relative">
      {/* Plan Buttons */}
      <div className="grid grid-cols-[1fr_repeat(3,minmax(0,1fr))] gap-4 mb-6 items-center sticky top-[100px] bg-[#F6EBC1]">
        <p className="text-3xl font-bold text-gray-800 open-sans">Plans</p>
        {plans.map((plan, i) => (
          <button
            key={`btn-${i}`}
            className="text-white py-3 rounded-lg w-[232px] mx-auto open-sans"
            style={{ backgroundColor: plan.color }}
          >
            {plan.name}
          </button>
        ))}
      </div>

      {/* Features + Plan Columns */}
      <div className="grid grid-cols-[1fr_repeat(3,minmax(0,1fr))] gap-5">
        <div className="grid grid-rows-9 gap-4 text-lg font-medium text-gray-900">
          {features.map((feature, i) => (
            <p key={`feature-${i}`} className="flex items-center open-sans">
              {feature}
            </p>
          ))}
        </div>

        {/* Plan Details */}
        {plans.map((plan, i) => (
          <div
            key={`card-${i}`}
            className={`grid grid-rows-[repeat(6,minmax(0,1fr))] gap-4 p-4 text-sm text-gray-800 ${
              i === 0 ? "" : "rounded-2xl shadow-md"
            } ${plan.bg}`}
          >
            {plan.features.map((content, j) => (
              <div key={`feature-${i}-${j}`} className="h-20">{content}</div>
            ))}
            <button
              className="w-full text-white py-2 rounded-lg self-end mt-2 open-sans"
              style={{ backgroundColor: plan.color }}
            >
              Select Package
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
