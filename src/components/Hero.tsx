import Image from 'next/image'
import Header from '@/components/common/Header'
import React from 'react'

const Hero = () => {
    return (
        <div id='home' className='bg-cover lg:pt-[100px] sm:pt-[179px] pt-[163px] bg-no-repeat bg-center xl:bg-hero-bg-img md:bg-hero-bg-img-xl bg-hero-bg-img-md relative overflow-hidden'>
            <Header />
            <Image width={164} height={164} src="/assets/images/webp/hero-side-layer.webp" alt="hero side layer" className="pointer-events-none lg:pt-[52px] w-full h-auto absolute top-0 max-w-[264px] left-[-8%] " />
            <div className="container mx-auto flex flex-col items-center justify-center relative z-[1]">
                <Image width={404} height={241} src="/assets/images/webp/hero-img.webp" alt="hero" className="pointer-events-none lg:pt-[52px] h-auto w-auto  lg:max-w-[404px] md:max-w-[388px] max-w-[256px]" />
                <div className="relative max-md:pt-[13px]">
                    <h1 className="pt-8 text-8xl font-black text-white tracking-[6px] relative z-10 leading-custom-md max-md:text-[40px] max-md:pt-[95px] ">SMERSE</h1>
                    <span className="absolute inset-0 text-8xl max-md:text-[40px] leading-custom-md font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[6px] top-[23.5%] -translate-x-0.5 max-md:top-[70%]">SMERSE</span>
                </div>
                <h2 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold sm:leading-[54px] text-white max-w-[637px] text-center tracking-[6%] md:pt-2.5 pt-7 md:pb-11 pb-[82px] '>FOR A WHEALTHIER LIFESTYLE. ANYTIME, ANYWHERE</h2>
                <button className="text-white mb-[50px] sm:px-[34px] sm:py-4 py-3 px-[25px] bg-gradient-to-t to-light-purple via-light-pink from-light-orange sm:text-xl font-extrabold leading-6 tracking-[6%] rounded-lg transition-all duration-300 shadow-[0px_1px_10px_1px_#952FFE,0px_1px_5px_1px_#FF676B]">Get Started</button>
            </div>
            <div className="w-full h-10 bg-gradient-to-t to-light-purple via-light-pink from-light-orange"></div>
            <Image width={164} height={164} src="/assets/images/webp/hero-side-layer.webp" alt="hero side layer" className="pointer-events-none pt-[52px] w-full h-auto absolute bottom-[-3%] max-w-[264px] right-[-7%] " />
        </div>
    )
}

export default Hero