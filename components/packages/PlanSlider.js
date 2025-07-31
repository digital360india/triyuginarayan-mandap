"use client";
import React, { useRef, useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    title: "Basic",
    subtitle: "For small weddings",
    price: "₹1,13,999",
    features: [
      "Wedding Rituals by Local Purohit",
      "Marriage Registration Support",
      "Stay for Guests (Upto 10 Guests, 1 day 2 Night)",
      "Guidance for Food/Meals",
      "Help with Wedding Arrangements",
      "Garlands & basic Décor- Photographer-Tea/ snacks"
    ],
    bg_color: "bg-[#4E4E4E]",
    color:"text-[#4E4E4E]"
  },
  {
    title: "Standard",
    subtitle: "For small and medium sized weddings",
    price: "₹3,30,999",
    features: [
      "Wedding Rituals by Local Purohit (with assistant)",
      "Marriage Registration Support",
      "Stay for Guests (Upto 35 Guests, 2 day 2 Night)",
      "Guidance for Food/Meals (wedding Bhoj-satvik meals)",
      "Help with Wedding Arrangements",
      "Mandap Decoration (Flowers & cloth)",
      "Support for Haldi/Mehndi Rituals",
      "Dhol/music- Rangoli/diya- Local gifts (optional)"
    ],
    bg_color: "bg-[#C95D2F]",
    color:"text-[#C95D2F]"
    
  },
  {
    title: "Premium",
    subtitle: "For large weddings",
    price: "₹6,54,999",
    features: [
      "Wedding Rituals by Local Purohit (with assistant)",
      "Marriage Registration Support",
      "Stay for Guests (Upto 70 Guests, 3 day 2 Night)",
      "Guidance for Food/Meals( Traditional Meals)",
      "Help with Wedding Arrangements",
      "Mandap Decoration (Full Floral & Mandap Decoration)",
      "Support for Haldi/Mehndi Rituals (Haldi, mangal geet, aarti, dhol)",
      "Floral bride entry- Reels/photoshoot-traditional attire shoot."
    ],
    bg_color:"bg-[#A42D2B]",
    color:"text-[#A42D2B]"
  },
];

const PlanCard = ({ title, subtitle, price, features, bg_color,color }) => (
  <div className="snap-center shrink-0 w-[85%] sm:w-[350px] bg-white rounded-[1.3rem] border-1 border-[#C95D2F] shadow-[0px_4px_31.8px_0px] shadow-[#c95d2f57] p-6 m-4 h-[46rem] space-y-6">
    <p className={`text-center text-[1.75rem] font-bold ${color} open-sans`}>{title}</p>
    <p className="text-center text-[1rem] text-gray-600 open-sans">{subtitle}</p>
    <p className={`text-center text-[3.125rem] font-bold open-sans ${color}`}>{price}</p>
    <div className="bg-[#FFF9F2] p-4 rounded-md border border-[#333] h-[21rem] overflow-y-auto">
      <ul className="space-y-4 py-[1rem] px-[1rem]">
        {features.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm open-sans">
            <span className="w-[1.3rem] h-[1.3rem] ">
            <FaCheckCircle className="text-green-500 mt-1" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <button className={`${bg_color} text-white w-full mt-10 py-2 rounded-lg hover:bg-orange-600 open-sans`}>
      See Plans
    </button>
  </div>
);

const PlanSlider = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const scrollX = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth;
    const index = Math.round(scrollX / cardWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const slider = scrollRef.current;
    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory overflow-x-scroll px-2 pb-6 scroll-smooth scrollbar-hide"
      >
        {plans.map((plan, i) => (
          <PlanCard key={i} {...plan} />
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-2">
        {plans.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
              activeIndex === i ? "bg-[#C95D2F] scale-125" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PlanSlider;
