"use client";
import Image from "next/image";
import { PROJECT_LIST } from "@/utils/helper";
import CustomHeading from "./common/CustomHeading";

const Project = () => {
    return (
        <div id="project" className="bg-[#0A0A2B] lg:pt-[130px] pt-16 pb-16 relative overflow-hidden">
            <div className="max-w-[1141px] mx-auto">
                <div className="flex items-center max-lg:flex-wrap gap-16 max-lg:gap-10 ">
                    <div className="w-6/12 max-lg:w-full max-xl:px-4 z-[1] ">
                        <div className="relative">
                            <CustomHeading text="THE PROJECT" myClass="pb-5 max-md:pb-[35px]" />
                            <div className="flex flex-col lg:gap-2 gap-3">
                                {PROJECT_LIST.map((obj, i) => (
                                    <div key={i} className="flex gap-5">
                                        <div className="max-w-[29px] w-full h-[29px] flex items-center justify-center rounded-full bg-gradient-to-t to-light-purple via-light-pink from-light-orange">{obj.icon}</div>
                                        <p className="text-white font-normal text-base leading-6 max-w-[510px] max-xl:max-w-none !tracking-[6%] ">{obj.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-6/12 max-lg:w-full relative">
                        <Image className="w-full h-auto max-w-[471px] max-lg:mx-auto pointer-events-none" src="/assets/images/png/ring-girl.png" width={471} height={626} alt="smerse" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project