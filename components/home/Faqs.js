"use client";
import React, { useState } from "react";
import { Faq } from "../../assets/faqs";

const Faqs = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleFaqs = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div className="max-w-[1440px] m-auto mt-25 px-4 mb-24">
      <p className="text-center text-[2.25rem] font-semibold mb-10">
        Frequently <span className="text-[#C95D2F]">Asked</span> Questions
      </p>
      <div className="w-full max-w-[1000px] flex flex-col gap-6 mx-auto">
        {Faq.map((faq, index) => (
          <div className="bg-[#FFFBEA] p-4 border rounded-lg" key={index}>
            <div
              className="w-full text-left cursor-pointer flex justify-between items-center font-medium"
              onClick={() => toggleFaqs(index)}
              aria-expanded={isOpen === index}
              aria-controls={`faq-content-${index}`}
            >
              <p className="font-semibold">{faq.question}</p>
              <span className="text-xl">{isOpen === index ? "-" : "+"}</span>
            </div>
            <div
              id={`faq-content-${index}`}
              className={`transition-all duration-700 ease-in-out overflow-hidden ${
                isOpen === index ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
