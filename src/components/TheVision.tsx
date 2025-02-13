import React from 'react'
import CustomHeading from './common/CustomHeading'
import { VISION_LIST } from '@/utils/helper'

const TheVision = () => {
    return (
        <div id='vision' className='lg:pt-32 md:pt-26'>
            <div className="container max-w-[1142px] mx-auto xl:px-0 lg:px-8 max-lg:px-4">
                <CustomHeading text="THE VISION" myClass="!mx-auto" />
                <div className="flex lg:justify-center max-md:justify-center sm:gap-y-[84px] gap-y-[88px]  max-lg:flex-wrap gap-5 lg:pt-[138px] md:pt-[128px] pt-[88px] ">
                    {VISION_LIST.map((obj, i) => (
                        <div key={i} className="bg-gradient-to-t to-light-purple via-light-pink from-light-orange p-[1px] group rounded-[10px]">
                            <div className="lg:max-w-[367px] max-w-[350px] w-full text-center md:px-7 px-5 bg-shade-blue xl:h-[363px]  h-[383px] group-hover:bg-transparent transition-all duration-300 rounded-[10px]">
                                <div className="sm:max-w-[96px] max-w-[86px] h-[86px] translate-y-[-48px] mx-auto sm:h-24 bg-gradient-to-t to-light-purple via-light-pink from-light-orange p-[1px] rounded-full ">
                                    <div className="text-white bg-dark-purple rounded-full flex items-center group-hover:bg-transparent transition-all duration-300 justify-center h-full ">
                                        <CustomHeading text={obj.number} myClass="mb-0 !text-4xl mx-auto text-center " spanClass='!text-4xl' />
                                    </div>
                                </div>
                                <div><p className="text-white !max-w-[312px] !tracking-[1px] !leading-[27.2px] !pb-8">{obj.description}</p></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TheVision