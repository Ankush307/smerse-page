import React from 'react'
import CustomHeading from './common/CustomHeading'
import { VISION_LIST } from '@/utils/helper'

const TheVision = () => {
    return (
        <div id='vision' className='lg:pt-48 md:pt-26 pt-16'>
            <div className="container max-w-[1142px] mx-auto max-xl:px-5">
                <CustomHeading textOne="THE VISION" textTwo="THE VISION" myClassOne="mb-5 max-lg:mb-3 max-md:mb-[17px] mx-auto text-center !z-[1] " myClassTwo='text-center' />
                <div className="flex lg:justify-center gap-y-16 max-lg:flex-wrap gap-5 lg:pt-[138px] md:pt-24 pt-16">
                    {VISION_LIST.map((obj, i) => (
                        <div key={i} className="bg-gradient-to-t to-light-purple via-light-pink from-light-orange p-[1px] group rounded-[10px]">
                            <div className="max-w-[367px] w-full text-center md:px-7 px-5 bg-shade-blue h-[363px] group-hover:bg-transparent transition-all duration-300 rounded-[10px]">
                                <div className="max-w-[96px] translate-y-[-48px] mx-auto h-24 bg-gradient-to-t to-light-purple via-light-pink from-light-orange p-[1px] rounded-full ">
                                    <div className="text-white bg-dark-purple rounded-full flex items-center group-hover:bg-transparent transition-all duration-300 justify-center h-full ">
                                        <CustomHeading textOne={obj.number} textTwo={obj.number} myClassOne="mb-0 text-4xl mx-auto text-center " myClassTwo='text-center text-4xl' />
                                    </div>
                                </div>
                                <div className="text-white max-w-[312px] tracking-[6%] leading-[27.2px]"><p>{obj.description}</p></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TheVision