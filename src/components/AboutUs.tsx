"use client";
import { ABOUT_US_LIST } from "@/utils/helper";
import Image from "next/image";

const AboutUs = () => {
    return (
        <div className="flex px-5 container mx-auto pt-11 pb-[78px] justify-between flex-wrap">
            <div>
                <div className="relative">
                    <h2 className="pt-8 text-5xl font-black text-white tracking-[3px] relative z-10 leading-custom-md max-md:text-[40px] max-md:pt-[108px]">About Us</h2>
                    <span className="absolute inset-0 text-5xl max-md:text-[40px] leading-custom-md font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[3px] top-[33.5%] -translate-x-[1.5px] max-md:top-[70%]">About Us</span>
                </div>
                <div className="pt-7">
                    {ABOUT_US_LIST.map((obj, i) => (
                        <div key={i} className="flex gap-5 pt-2">
                            <div className="!size-[29px]">
                                {obj.icon}
                            </div>
                            <p className="text-white tracking-[1.5px] text-base leading-custom-xl max-w-[560px] font-normal">
                                {obj.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative">
                <Image width={478.06} height={478.31} src="/assets/images/webp/about-us-img.webp" alt="about image" />
                {/* <Image width={635} height={679} src={aboutBlueLayer} alt="layer" />
                <Image width={635} height={679} src={aboutRedLayer} alt="layer" /> */}
            </div>
        </div>
    );
}

export default AboutUs