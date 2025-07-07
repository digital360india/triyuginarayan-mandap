"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";
import Image from "next/image";
import Logo from "../../assets/images/logo/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { TiHome } from "react-icons/ti";
import { IoPeople } from "react-icons/io5";
import { TbPackages } from "react-icons/tb";
import { FaHandPointUp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";


const Navbar = () => {
  const pathName = usePathname();
  const menuRef = useRef(null);
  const linkRefs = useRef([]);
  const [isOpen, setIsOpen] = useState(false);
  const [underlinePos, setUnderlinePos] = useState({ left: 0, width: 0 });
  const [animate, setAnimate] = useState(false);

  const links = useMemo(() => [
  { name: "Home", href: "/", icon: <TiHome className="text-[1.5rem]" /> },
  { name: "About us", href: "/about", icon: <IoPeople className="text-[1.5rem]" /> },
  { name: "Packages", href: "/packages", icon: <TbPackages className="text-[1.5rem]" /> },
  { name: "Why Choose Us", href: "/why-choose-us", icon: <FaHandPointUp className="text-[1.5rem]" /> },
  { name: "Contact Us", href: "/contact-us", icon: <IoCall className="text-[1.5rem]" /> },
], []);

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
  const timer = setTimeout(() => setAnimate(true), 100);
  return () => clearTimeout(timer);
}, []);


  useEffect(() => {
  const activeIndex = links.findIndex((link) => link.href === pathName);

  const frame = requestAnimationFrame(() => {
    const activeLink = linkRefs.current[activeIndex];
    const container = menuRef.current;

    if (activeIndex !== -1 && activeLink && container) {
      const rect = activeLink.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setUnderlinePos({
        left: rect.left - containerRect.left,
        width: rect.width,
      });
    }
  });

  return () => cancelAnimationFrame(frame);
}, [pathName, links]);


  return (
    <div className="bg-[#C95D2F] h-[100px] w-full ">
        <div
      className={`bg-[#F6EBC1] h-[100px] w-full transform transition-transform duration-1600 ease-in-out ${
        animate ? "translate-y-0" : "-translate-y-full"
      } flex justify-between items-center px-5 md:px-10 py-3 w-full fixed z-50`}
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
            <div onClick={() => setIsOpen(true)} className="cursor-pointer text-[2rem]">
              <GiHamburgerMenu/>
            </div>
          )}
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 z-20 top-0 right-0 md:hidden">
            <div
              ref={menuRef}
              className="absolute top-0 right-0 bg-white w-[250px] h-[100vh] z-50 py-10 transform transition-transform duration-3500 ease-in-out flex flex-col justify-between"
            >
              <div>
              <div className="flex justify-between items-center px-5">
                <div>
                  <Image src={Logo} alt='img' className="w-12"/>
                </div>
                <div className="text-[2rem] mx-1" onClick={() => setIsOpen(false)}>
                <RxCross2 />
                </div>
              </div>
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
                        <p className="flex items-center gap-2 text-[18px]">
                        <span>{link.icon}</span>{link.name}
                        </p>
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