import React from "react";
import Image from "next/image";
import about_us from "../../assets/images/about-us.png";
import namaste_gif from "../../assets/images/namaste-gif.gif";

const AboutSection = () => {
  return (
    <div>
      <div className="flex flex-col xl:flex-row md:gap-0 gap-10 m-auto max-w-[1440px] p-0 md:p-10">
        <div className="hidden w-[40%] xl:flex justify-center items-center">
          <Image src={about_us} alt="img" className="w-[350px] h-[350px]" />
        </div>
        <div className="w-full xl:w-[60%] flex flex-col gap-10 p-0 md:p-4 px-8 md:px-4">
          <div>
            <div className="flex items-center justify-center xl:justify-start gap-4">
              <p className="text-[2.5rem] lg:text-[3.5rem] text-[#C95D2F] lora font-bold">नमस्ते!</p>
              <div className="w-[2.5rem] h-[2.5rem] md:w-[3.5rem] md:h-[3.5rem] bg-[#C95D2F] rounded-full flex justify-center items-center">
                <Image
                  src={namaste_gif}
                  alt="gif"
                  className="w-[1.5rem] h-[1.5rem] lg:w-[2.5rem] md:h-[2.5rem]"
                />
              </div>
              </div>
              <div className="text-center xl:text-start">
                <p className="text-[2.5rem] lg:text-[3.5rem] font-bold lora">
                  Welcome to Our World of{" "}
                  <span className="text-[#C95D2F]">
                    Soulful Weddings.
                  </span>
                </p>
              </div>
          </div>
          <div className="flex flex-col gap-4 leading-loose text-justify md:text-center xl:text-start open-sans text-[1rem] lg:text-lg">
            <p>
              We are a small team from the hills of Uttarakhand, closely
              connected to the divine land of Triyuginarayan Temple — the place
              where Lord Shiva and Goddess Parvati were married.
            </p>

            <p>
              This is not just a business for us. It is a blessing we carry
              forward.
            </p>
          </div>
        </div>
        <div className="flex xl:hidden justify-center">
          <Image src={about_us} alt="img" className="w-[300px] md:w-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
