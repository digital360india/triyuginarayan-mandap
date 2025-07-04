"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Logo from "../../assets/images/logo/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const menuRef = useRef(null);
  const linkRefs = useRef([]);
  const [isOpen, setIsOpen] = useState(false);
  const [underlinePos, setUnderlinePos] = useState({ left: 0, width: 0 });
  const [animate, setAnimate] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Packages", href: "/packages" },
    { name: "Why Choose Us", href: "/why-choose-us" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, [links]);

  useEffect(() => {
    const activeIndex = links.findIndex((link) => link.href === pathName);
    if (activeIndex !== -1 && linkRefs.current[activeIndex]) {
      const rect = linkRefs.current[activeIndex].getBoundingClientRect();
      const containerRect = menuRef.current.getBoundingClientRect();
      setUnderlinePos({
        left: rect.left - containerRect.left,
        width: rect.width,
      });
    }
  }, [pathName]);

  return (
    <div className="bg-[#C95D2F] h-[100px] w-full ">
        <div
      className={`bg-[#F6EBC1] h-[100px] w-full transform transition-transform duration-1600 ease-in-out ${
        animate ? "translate-y-0" : "-translate-y-full"
      } flex justify-between items-center px-5 md:px-10 py-3 w-full fixed z-30`}
    >
      <div className="flex justify-between items-center max-w-[1400px] mx-auto px-5 md:px-10 py-3 w-full">
        {/* logo */}
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="Large Logo"
              className="h-[55px] md:h-[80px]"
            />
          </Link>
        </div>

        <div className="relative hidden md:flex space-x-10 space-y-1" ref={menuRef}>
          {links.map((link, index) => (
            <div
              key={index}
              ref={(el) => (linkRefs.current[index] = el)}
              className="relative"
            >
              <Link
                href={link.href}
                className={`text-[1rem] px-1 transition-all duration-300 ${
                  pathName === link.href ? "text-[#A42D2B] font-bold" : ""
                }`}
              >
                {link.name}
              </Link>
            </div>
          ))}
          {/* Underline */}
          <div
            className="absolute bottom-0 h-[4px] bg-[#A42D2B] transition-all duration-500 ease-in-out rounded-lg"
            style={{
              left: underlinePos.left,
              width: underlinePos.width,
              transition: 'all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)', 
            }}
          />
        </div>

        {/* Mobile menu icon */}
        <div className="flex items-center md:hidden">
          {!isOpen && (
            <div onClick={() => setIsOpen(true)} className="cursor-pointer">
              menu
            </div>
          )}
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 z-10 top-0 right-0 md:hidden">
            <div
              ref={menuRef}
              className="absolute top-0 right-0 bg-white w-[250px] h-full z-20 py-10 transform transition-transform duration-3500 ease-in-out flex flex-col justify-between"
            >
              <div>
                <ul className="flex flex-col p-5 gap-4 mt-10">
                  {links.map((link, index) => (
                    <li key={index} className="my-2">
                      <Link
                        href={link.href}
                        className={`text-[14px] flex items-center gap-2 ${
                          pathName === link.href ? "text-[#A42D2B]" : ""
                        }`}
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <span className="text-[18px]">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4 mt-10 p-5 mb-7">
                <div className="flex gap-4">
                  {/* Uncomment when you have images */}
                  {/* <a href="https://www.instagram.com/" target="_blank">
                    <Image src={Insta} alt="Instagram" className="w-10" />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank">
                    <Image src={Facebook} alt="Facebook" className="w-10" />
                  </a> */}
                </div>
                <p className="!text-[12px] text-[#656565]">
                  2025 ©️ triyuginarayanmandap
                </p>
              </div>
            </div>
          </div>
        )}

        <button className="hidden lg:block bg-[#C95D2F] text-white text-center text-[16px] font-semibold cursor-pointer px-6 py-3 rounded-[7px]">
          Plan your Wedding
        </button>
      </div>
    </div>
    </div>
    
  );
};

export default Navbar;