import React from 'react';
import { Phone } from 'lucide-react';
import hero2 from '../assets/hero2.png';

export default function AboutMintSection() {
  return (
    <section className="w-full overflow-hidden  bg-white max-sm:pt-0 pt-[153px]  px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto">
        <div className="relative flex  items-center justify-center">
          {/* Main Content Container with Gradient Background */}
          <div className="relative max-w-[1276px]  w-full max-sm:pt-[20px]  bg-gradient-to-r from-[#2C5F6F] via-[#3A7F8F] to-[#4A9FAF] overflow-visible">
            <div className="flex flex-row  max-xl:flex-col items-center max-xl:mb-[20px] justify-center xl:gap-[110px]">
              {/* Left Image Section */}
              <div className="relative z-0 overflow-hidden top-[-165px]  flex items-center justify-center lg:justify-start">
                {/* Arch-shaped Image Container */}
                <div className="relative  ">
                  {/* Arch Frame */}
                   {/* Left Arched Image */}
                    <div className="relative  max-sm:hidden ">
                      <div className="relative   border border-[#ADADAD] rounded-[9999px_9999px_0_0] p-[10px]">
                        <div className="w-[332px] h-[586px] bg-white rounded-[9999px_9999px_0_0] overflow-hidden">
                          <img 
                            src={hero2} 
                            alt="Modern kitchen with dark cabinets"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  
                  
                </div>
              </div>
              
             <div className="w-full max-w-[664px] flex items-center justify-center xl:pt-[105px]  ">
      <div className="max-w-[664px] flex flex-col items-center text-center justify-center max-lg:px-2">
        <p className="font-['Manrope'] text-[20px] sm:text-sm font-semibold uppercase tracking-[0.2em] text-white mb-[7px]">
          MODERN DESIGN
        </p>
        
        <h2 className="font-['Manrope'] font-extrabold text-3xl sm:text-4xl md:text-[48px] lg:text-[48px] text-white leading-[1.1] mb-[26px]">
          About Mint Kitchen and Bath
        </h2>
        
        <div className="space-y-5 sm:space-y-6 mb-[26px] sm:mb-[26px]">
          <p className="font-['Manrope'] text-base sm:text-lg md:text-lg font-medium text-white/90 leading-relaxed">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.natus error sit voluptatem accusantium doloremque laudantium.
          </p>
          
          <p className="font-['Manrope'] text-base sm:text-lg md:text-lg font-medium text-white/90 leading-relaxed">
            Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4C5B0] hover:bg-[#C4B5A0] transition-colors duration-300 font-['Montserrat'] font-medium text-[20px] text-gray-800 cursor-pointer">
            <Phone className="w-5 h-5" />
            <span>(123) 123 1234</span>
          </button>
          
          <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:bg-white/10 transition-all duration-300 font-['Montserrat'] font-medium text-[#F6F1E6] text-lg uppercase tracking-wide cursor-pointer">
            REQUEST A QUOTE
          </button>
        </div>
      </div>
    </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}