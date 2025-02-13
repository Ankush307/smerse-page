"use client";
import Image from "next/image";
import { ABOUT_US_LIST } from "@/utils/helper";
import CustomHeading from "./common/CustomHeading";
const AboutUs = () => {
    return (
        <div className="bg-[#0A0A2B] lg:pt-[180px] sm:pt-16 pt-16 pb-16 relative max-xl:overflow-hidden">
            <div className="max-w-[1141px] mx-auto">
                <div className="flex items-center max-lg:flex-wrap gap-16 max-lg:gap-10 ">
                    <div className="w-6/12 max-lg:w-full max-xl:px-4 z-[1] ">
                        <div className="relative">
                            <CustomHeading text="About Us" myClass="pb-7 max-lg:pb-5 max-sm:pb-[35px] relative z-20" spanClass="!top-[1.5px]" />
                            <div className="flex flex-col lg:gap-2 gap-3">
                                {ABOUT_US_LIST.map((obj, i) => (
                                    <div key={i} className="flex items-center gap-5">
                                        <div className="max-w-[29px] w-full h-[29px] flex items-center justify-center rounded-full bg-gradient-to-t to-light-purple via-light-pink from-light-orange">{obj.icon}</div>
                                        <p className="text-white font-normal text-base leading-6 max-w-[510px] max-xl:max-w-none">{obj.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-6/12 max-lg:w-full relative max-lg:pt-10">
                        <Image className="object-contain lg:w-[1085px] w-full lg:absolute max-xl:right-[-7%] right-[-15px] top-[-220px] max-lg:-translate-x-9 max-xl:-translate-x-[110px] scale-125 lg:scale-150" src="/assets/images/webp/about-us-img.webp" width={621} height={478} alt="smerse" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs