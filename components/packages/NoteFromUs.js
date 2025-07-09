import React from "react";
import material_symbols from "../../assets/images/material-symbols.svg";
import Image from "next/image";

const Note = () => {
  return (
    <div className="px-8 md:px-20 space-y-4 max-w-[1440px] m-auto mt-25 mb-25">
      <div className="bg-[#FFE1D5] border-dashed border-2 border-[#C95D2F] p-8 md:p-10 rounded-lg space-y-6">
        <p className="text-[1rem] text-[#C95D2F] open-sans font-bold flex gap-4 items-center justify-center md:justify-start">
          <Image src={material_symbols} alt="imag" />A Note From Us
        </p>
        <p className="text-[1rem] open-sans text-justify md:text-center">
          &quot;We know how special a wedding is — especially at a place like
          Triyuginarayan. Whether you’re planning something small or grand, we
          are here to help with respect, simplicity, and care— just like
          family.&quot;
        </p>
        <p className="text-[1rem] text-[#C95D2F] open-sans font-bold text-end">
          - The Triyuginarayan Mandap Team
        </p>
      </div>
    </div>
  );
};

export default Note;
