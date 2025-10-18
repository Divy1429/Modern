import React from 'react';
import { Phone } from 'lucide-react';
import hero from '../assets/hero.png';

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="max-w-[1512px] mx-auto max-sm:grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8px-4 max-md::px-6 max-xl:px-8 py-10 sm:py-12 lg:py-20">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col xl:pl-[91px] ">
            <h1 className="font-['Syne'] max-w-[615px] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight md:leading-tight lg:leading-[1.1] pb-3 sm:pb-4 lg:pb-[17px]">
              We Build Your Dream Kitchen and Bath
            </h1>
            
            <p className="font-['Manrope'] text-sm sm:text-base md:text-[18px] lg:text-[20px] font-medium text-[#707070] max-w-[624px] pb-4 lg:pb-[21px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="inline-flex items-center justify-center gap-2 sm:gap-[14px] font-['Montserrat'] text-base sm:text-lg md:text-[20px] font-medium px-5 sm:px-[31px] py-3 sm:py-[15px] bg-[#D9826F] hover:bg-[#dd411d] transition-colors duration-200 w-full sm:w-auto cursor-pointer">
                <Phone className="w-5 h-5" />
                <span>(123) 123 1234</span>
              </button>
              
              <button className="inline-flex items-center justify-center font-['Montserrat'] text-base sm:text-lg md:text-[20px] font-medium px-5 sm:px-[31px] py-3 sm:py-[15px] border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200 w-full sm:w-auto cursor-pointer">
                        REQUEST A QUOTE
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="order-1 md:order-2">
            <div className="relative w-full max-w-[696px] mx-auto lg:w-[696px] lg:h-[732px]">
              <img
                src={hero}
                alt="Modern kitchen interior"
                className="w-full h-auto lg:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}