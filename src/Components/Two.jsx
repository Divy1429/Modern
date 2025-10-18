import React from 'react';
import { Phone } from 'lucide-react';

export default function Two() {
  const stats = [
    { number: "540", label: "Projects" },
    { number: "7", label: "Years of experience" },
    { number: "16", label: "Designers" },
    { number: "1415", label: "Kitchens" }
  ];

  return (
    <div className="w-full ">
      {/* CTA Section */}
      <section className="relative flex flex-col items-center justify-center h-[326px] w-full bg-[#C9BBAA]  mx-auto overflow-hidden">
        {/* Background Text */}
        <div className="absolute  inset-0 flex items-center justify-start opacity-10 pointer-events-none">
          <span className="font-['Syne'] ml-[93px] font-bold text-[250px] sm:text-[243px] md:text-[243px] lg:text-[243px] text-nowrap text-white  leading-[1.11]">
          Mint Kitchen and Bath
          </span>
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center  mx-auto text-center">
          <h2 className="font-['Syne'] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[48px] leading-[1.11] mb-8 sm:mb-[34px] md:mb-[34px] max-w-[700px] mx-auto px-4">
            Book a consultation for your dream kitchen
          </h2>

          <button className="inline-flex items-center justify-center gap-2 sm:gap-3 md:gap-[14px] font-['Montserrat'] text-base sm:text-lg md:text-[20px] font-medium px-[31px] sm:px-[31px] md:px-[31px] lg:px-[31px] py-[15px] sm:py-[15px] md:py-[15px] bg-[#D9826F] hover:bg-[#C97763] transition-colors duration-200 whitespace-nowrap cursor-pointer">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <span>(123) 123 1234</span>
          </button>
        </div>
      </section>

     {/* Stats Section */}
<section className="w-full bg-gradient-to-r from-[#153A50] via-[#328290] to-[#46B7CB] pt-[158px] pb-[129px] px-4 sm:px-6 lg:px-8">
  <div className="max-w-[1400px] mx-auto">
    <div className="flex md:flex-row flex-col max-w-fit gap-12 md:gap-16 lg:gap-20 xl:gap-[82px]  justify-center mx-auto">
      {/* Left Content */}
      <div className="flex flex-col max-w-[624px] justify-start">
        <p className="font-['Syne']  text-xs sm:text-sm md:text-base lg:text-[20px] font-semibold uppercase tracking-[0.2em] text-white mb-6 sm:mb-7 md:mb-8">
          MODERN DESIGN
        </p>

        <h2 className="font-['Syne'] font-semibold text-3xl sm:text-4xl md:text-[40px] lg:text-[48px] xl:text-[48px] text-white tracking-[0] leading-[1.11] mb-0">
          Kitchen and Bath remodeling made easy
        </h2>
      </div>
      
      {/* Right Content */}
      <div className="flex max-w-[569px] flex-col justify-start space-y-[41px] sm:space-y-[41px] md:space-y-[41px] lg:space-y-[41px]">
        {/* Text Content */}
        <div className="space-y-6 sm:space-y-6 md:space-y-6">
          <p className="font-['Manrope'] text-base sm:text-lg md:text-[18px] lg:text-[19px] font-medium text-white/95 leading-[1.35]">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.natus error sit voluptatem accusantium doloremque laudantium.
          </p>
          
          <p className="font-['Manrope'] text-base sm:text-lg md:text-[18px] lg:text-[19px] font-normal text-white/95 leading-relaxed">
            Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1  sm:grid-cols-2 gap-x-12 gap-y-10 sm:gap-x-16 sm:gap-y-12 md:gap-x-20 md:gap-y-14 lg:gap-x-24 lg:gap-y-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <div className="font-['Syne'] font-semibold text-[50px] sm:text-[50px] md:text-[64px] lg:text-[64px] xl:text-[64px] text-white leading-none mb-2 sm:mb-3">
                {stat.number}
              </div>
              <div className="font-['Syne'] text-lg sm:text-xl md:text-[22px] lg:text-[24px] text-white font-normal">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}