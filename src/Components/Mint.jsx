import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import mint from '../assets/MInt.png';

export default function Mint() {
  return (
    <div className="bg-white w-full">
      <div className="max-w-[1512px] mx-auto px-4 sm:px-6 lg:px-0 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="flex max-xl:justify-center xl:flex-row flex-col  gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Image */}
          <div className="order-1 lg:order-1">
            <div className="relative w-full max-w-[743px] h-[480px] sm:h-[580px] md:h-[680px] lg:h-[636px] lg:w-[743px] mx-auto overflow-hidden shadow-lg">
              <img
                src={mint}
                alt="Modern kitchen interior with wooden cabinets and marble countertops"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          {/* Right Content */}
          <div className="order-2 max-w-[624px] lg:order-2 flex flex-col justify-center">
            {/* Section Label */}
            <p className="font-['Syne'] text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] font-semibold uppercase tracking-wide mb-2 sm:mb-3">
              WHO WE ARE
            </p>
            
            {/* Main Heading */}
            <h2 className="font-['Syne'] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] leading-tight mb-4 sm:mb-5 md:mb-6">
              About Mint Kitchen and Bath
            </h2>
            
            {/* Description Paragraph 1 */}
            <p className="font-['Manrope'] text-sm sm:text-base md:text-lg lg:text-[18px] xl:text-[20px] font-medium text-[#707070] leading-relaxed mb-4 sm:mb-5 md:mb-6 lg:mb-7">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.natus error sit voluptatem accusantium doloremque laudantium.
            </p>
            
            {/* Description Paragraph 2 */}
            <p className="font-['Manrope'] text-sm sm:text-base md:text-lg lg:text-[18px] xl:text-[20px] font-medium text-[#707070] leading-relaxed mb-6 sm:mb-7 md:mb-8 lg:mb-10 xl:mb-[42px]">
              Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6 xl:gap-[31px]">
              {/* Phone Button */}
              <button className="inline-flex items-center justify-center gap-2 sm:gap-3 lg:gap-[14px] font-['Montserrat'] text-base sm:text-lg md:text-[18px] lg:text-[20px] font-medium px-6 sm:px-7 lg:px-[31px] py-3 sm:py-3.5 lg:py-[15px] bg-[#D9826F] hover:bg-[#dd411d] transition-colors duration-200 w-full sm:w-auto whitespace-nowrap cursor-pointer">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>(123) 123 1234</span>
              </button>
              
              {/* Learn More Button */}
              <button className="inline-flex items-center justify-center gap-3 sm:gap-3.5 lg:gap-4 font-['Roboto'] text-base sm:text-lg md:text-[18px] font-normal px-5 sm:px-6 lg:px-5 py-2.5 sm:py-3 lg:py-[9px] bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 group w-full sm:w-auto cursor-pointer">
                <span>Learn More</span>
                <svg width="53" height="9" viewBox="0 0 53 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 sm:w-12 lg:w-[53px] h-auto">
                  <path d="M51.9001 5.00419C52.0953 4.80893 52.0953 4.49234 51.9001 4.29708L48.7181 1.1151C48.5228 0.919839 48.2062 0.919839 48.011 1.1151C47.8157 1.31036 47.8157 1.62695 48.011 1.82221L50.8394 4.65063L48.011 7.47906C47.8157 7.67432 47.8157 7.99091 48.011 8.18617C48.2062 8.38143 48.5228 8.38143 48.7181 8.18617L51.9001 5.00419ZM0.573303 5.15063H51.5465V4.15063H0.573303V5.15063Z" fill="black"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}