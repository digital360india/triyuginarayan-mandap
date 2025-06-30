import React from "react";
import Image from "next/image";
import about_us from "../../assets/images/about-us.png";
import namaste_gif from "../../assets/images/namaste-gif.gif";

const AboutSection = () => {
  return (
    <div>
      <div className="flex m-auto max-w-[1440px] p-10">
        <div className="w-[40%] flex justify-center">
          <Image src={about_us} alt="img" className="w-[28rem]" />
        </div>
        <div className="w-[60%] flex flex-col gap-10 p-4">
          <div>
            <div className="flex items-center">
              <p className="text-[3.5rem] text-[#C95D2F] font-bold">नमस्ते!</p>
              <div className="w-[3.5rem] h-[3.5rem] bg-[#C95D2F] rounded-full flex justify-center items-center">
                <Image
                  src={namaste_gif}
                  alt="gif"
                  className="w-[2.5rem] h-[2.5rem]"
                />
              </div>
              </div>
              <div>
                <p className="text-[3.5rem] font-bold">
                  Welcome to Our World of{" "}
                  <span className="text-[#C95D2F]">
                    Soulful Weddings.
                  </span>
                </p>
              </div>
          </div>
          <div className="flex flex-col gap-4 text-justify md:text-start">
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
      </div>
    </div>
  );
};

export default AboutSection;
