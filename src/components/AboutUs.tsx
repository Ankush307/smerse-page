"use client";
import Image from "next/image";
import { ABOUT_US_LIST } from "@/utils/helper";
const AboutUs = () => {
    return (
        <div className="bg-[#0A0A2B] lg:pt-[140px] sm:pt-16 pt-7 pb-16 relative overflow-hidden">
            <div className="max-w-[1141px] mx-auto">
                <div className="flex items-center max-lg:flex-wrap gap-16 max-lg:gap-10 ">
                    <div className="w-6/12 max-lg:w-full max-xl:px-4 z-[1] ">
                        <div className="relative">
                            <div className="relative">
                                <h1 className="pt-8 xl:text-5xl lg;text-4xl text-3xl font-black text-white tracking-[6px] relative z-[1] max-md:pt-10">About Us</h1>
                                <span className="absolute inset-0 xl:text-5xl lg;text-4xl text-3xl font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[6px] md:top-[31px] top-10 -translate-x-0.5">About Us</span>
                            </div>
                            <div className="lg:pt-7 md:pt-5 pt-[35px] flex flex-col lg:gap-2 gap-3">
                                {ABOUT_US_LIST.map((obj, i) => (
                                    <div key={i} className="flex items-center gap-5">
                                        <div className="">{obj.icon}</div>
                                        <p className="text-white font-normal text-base leading-6 max-w-[510px] max-xl:max-w-none">{obj.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-6/12 max-lg:w-full relative max-lg:pt-10">
                        <Image className="object-contain lg:w-[1085px] w-full lg:absolute right-[-7%] top-[-160px] max-lg:-translate-x-9 max-xl:-translate-x-[110px] scale-125 lg:scale-150" src="/assets/images/webp/about-us-img.webp" width={621} height={478} alt="smerse" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs