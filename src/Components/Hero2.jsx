import React from 'react';
import { Phone } from 'lucide-react';
import hero2 from '../assets/hero2.png';
import hero22 from '../assets/hero22.png';


export default function Hero2() {
  return (
    <section className="relative w-full   overflow-hidden">
      <div className="max-w-[1400px] pt-[93px] max-sm:pb-[20px]   lg:pl-[92px]  lg:pr-[83px] ">
        <div className="flex flex-row max-lg:flex-col justify-between max-xl:gap-[20px]  items-center">
          {/* Left Content */}
          <div className="flex flex-col max-lg:items-center max-lg:text-center justify-center space-y-6 sm:space-y-8 z-10 ">
            <h1 className="font-['Manrope'] font-extrabold text-4xl sm:text-5xl md:text-[64px] lg:text-[64px] xl:text-[64px] text-white leading-[1.1]">
              From Outdated To Outstanding
            </h1>
            
            <p className="font-['Manrope'] text-lg sm:text-xl md:text-[20px] lg:text-[20px] font-medium text-white/90 leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4C5B0] hover:bg-[#C4B5A0] transition-colors duration-300 font-['Manrope'] font-semibold  text-lg cursor-pointer">
                <Phone className="w-5 h-5" />
                <span>(123) 123 1234</span>
              </button>
              
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#F6F1E6] hover:bg-white/10 transition-all duration-300 font-['Manrope'] font-semibold text-[#F6F1E6] text-lg uppercase tracking-wide cursor-pointer">
                REQUEST A QUOTE
              </button>
            </div>
          </div>
          
         {/* Right Images */}
<div className="relative  max-sm:hidden flex items-end justify-end gap-[10px]">

  {/* Left Arched Image */}
  <div className="relative bottom-[-10px]   overflow-hidden z-20">
    <div className="relative inset-0  border-t border-l border-r border-[#ADADAD]  rounded-[9999px_9999px_0_0] p-[10px]">
      <div className="w-[332px] h-[586px] bg-white rounded-[9999px_9999px_0_0] overflow-hidden">
        <img 
          src={hero2} 
          alt="Modern kitchen with dark cabinets"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>

  {/* Right Oval Image */}
  <div className="relative w-[222px] h-[391px] bottom-[48px]  overflow-hidden z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#0E7490] to-[#0284C7] rounded-[50%] p-[3px]">
      <div className="w-full h-full bg-white rounded-[153px] overflow-hidden">
        <img 
          src={hero22} 
          alt="White modern kitchen"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    </div>
</div>
          
        </div>
        </div>

       </section>
  );
}