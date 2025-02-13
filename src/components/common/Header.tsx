"use client";
import { HEADER_LIST } from "@/utils/helper";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeHandler = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleOverflow = () => {
      if (open && window.innerWidth < 1025) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleOverflow();
    window.addEventListener("resize", handleOverflow);
    window.addEventListener("scroll", handleScroll);
    handleOverflow();
    return () => {
      window.removeEventListener("resize", handleOverflow);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <div className={`px-4 !mx-auto lg:py-4 sm:py-3 py-[5px] w-full fixed top-0 z-10 transition-all duration-300 ${scrolled ? "bg-black" : "bg-black/50"} `}>
      <div className="container mx-auto flex items-center justify-between max-w-[1140px] ">
        <a href="/">
          <img src="/assets/images/png/page-logo.png" alt="page-logo" className="pointer-events-none lg:size-[68px] sm:size-[76px] size-[40px]" />
        </a>
        <div className={`flex gap-[55px] max-xl:gap-10 max-lg:fixed max-lg:top-0 max-lg:-right-full max-lg:h-full max-lg:w-full max-lg:justify-center max-lg:items-center transition-all duration-300 max-lg:flex-col max-lg:bg-black max-lg:z-10 ${open ? "max-lg:!right-0" : ""}`}>
          <div className="flex max-lg:flex-col gap-5 items-center">
            {HEADER_LIST.map((item, i) => (
              <a key={i} onClick={closeHandler} href={item.link} className="text-white !whitespace-nowrap font-normal text-base leading-[19.2px] hover:text-light-pink transition-all duration-300 max-lg:text-xl ">{item.title}</a>
            ))}
          </div>
          <button onClick={closeHandler} className="text-white hover:scale-110 ease-linear hidden max-md:block p-[11px_28px_11px_30px] shadow-[0px_4px_10px_0px_#FF676B,2px_0px_10px_3px_#952FFE] bg-gradient-to-t to-light-purple via-light-pink from-light-orange text-xl font-extrabold leading-6 tracking-[6%] rounded-lg transition-all duration-300">Mint Now</button>
          <button onClick={closeHandler} className="text-white hover:scale-110 ease-linear max-md:hidden p-[11px_28px_11px_30px] shadow-[0px_4px_10px_0px_#FF676B,2px_0px_10px_3px_#952FFE] bg-gradient-to-t to-light-purple via-light-pink from-light-orange text-xl font-extrabold leading-6 tracking-[6%] rounded-lg transition-all duration-300"> Mint Now</button>
        </div>
        <div className="flex items-center justify-center gap-10 lg:hidden">
          <button className="text-white hover:scale-110 ease-linear max-md:hidden lg:hidden p-[11px_28px_11px_30px] shadow-[0px_4px_10px_0px_#FF676B,2px_0px_10px_3px_#952FFE] bg-gradient-to-t to-light-purple via-light-pink from-light-orange text-xl font-extrabold leading-6 tracking-[6%] rounded-lg transition-all duration-300"> Mint Now</button>
          <button onClick={handleClick} className="flex flex-col items-center justify-between relative z-20 overflow-hidden sm:h-8 sm:w-[39px] h-[11px] w-3.5 lg:hidden">
            <span className={`w-full h-[2px] sm:h-[5px] transition-all duration-300 bg-white rounded-lg ${open ? " translate-x-10" : ""}`}></span>
            <span className={`w-full h-[2px] sm:h-[5px] transition-all duration-300 bg-white rounded-lg ${open ? " -translate-x-10" : ""}`}></span>
            <span className={`w-full h-[2px] sm:h-[5px] transition-all duration-300 bg-white rounded-lg relative after:absolute after:top-0 after:left-0 after:w-full sm:after:h-[5px] after:h-[2px] after:bg-white after:rounded-lg ${open ? "after:rotate-90 rotate-45 -translate-y-[5px] sm:-translate-y-3 " : "after:hidden"}`}></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
