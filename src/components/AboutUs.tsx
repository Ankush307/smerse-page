"use client";
import Image from "next/image";
import { ABOUT_US_LIST } from "@/utils/helper";
const AboutUs = () => {
    return (
        <div className="bg-[#0A0A2B] sm:pt-[84px] pt-0 pb-16 relative">
            <div className="max-w-[1141px] mx-auto">
                <div className="flex items-center max-lg:flex-wrap gap-16 max-lg:gap-10 px-4">
                    <div className="w-6/12 max-lg:w-full">
                        <div className="relative">
                            <div className="relative lg:mb-7 sm:mb-5 mb-[35px]">
                                <h1 className="pt-8 xl:text-5xl lg;text-4xl text-3xl font-black text-white tracking-[6px] relative z-10 max-md:pt-10">About Us</h1>
                                <span className="absolute inset-0 xl:text-5xl lg;text-4xl text-3xl font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[6px] md:top-[31px] top-10 -translate-x-0.5">About Us</span>
                            </div>
                            <div className="sm:pt-[25px]">
                                {ABOUT_US_LIST.map((obj, i) => (
                                    <div key={i}>
                                        <div className="flex items-center gap-5 max-xl:my-4">
                                            <Image src="/assets/images/webp/about-us-img.webp" width={29} height={29} alt="icons" className="w-full max-w-[39px]" />
                                            <p className="text-white font-normal text-base leading-6 max-w-[510px] max-xl:max-w-none">{obj.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-6/12 max-lg:w-full">
                        <Image src="/assets/images/webp/about-us-img.webp" width={621} height={478} alt="smerse" className="object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs