import React from 'react';

export default function StatsSection() {
  const stats = [
    { number: '540', label: 'Projects' },
    { number: '16', label: 'Designers' },
    { number: '7', label: 'Years of experience' },
    { number: '1415', label: 'Kitchens' }
  ];

  return (
    <section className="w-full bg-white overflow-hidden max-xl:px-[16px]  pb-[63px] pt-[90px]">
      <div className="max-w-[1276px] mx-auto">
        {/* Top Content Section */}
        <div className="flex flex-col lg:flex-row justify-start gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16 lg:mb-[50px]">
          {/* Left Content */}
          <div className="flex flex-col justify-start w-full lg:max-w-[624px]">
            <p className="font-['Syne'] text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.2em] text-gray-800 mb-4 sm:mb-5 md:mb-6">
              MODERN DESIGN
            </p>
            
            <h2 className="font-['Manrope'] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-gray-900 leading-tight mb-0">
              Kitchen and Bath remodeling made easy
            </h2>
          </div>
          
          {/* Right Content */}
          <div className="flex flex-col w-full lg:max-w-[569px] justify-start space-y-4 sm:space-y-5 md:space-y-6">
            <p className="font-['Manrope'] text-base sm:text-lg md:text-lg text-gray-600 leading-relaxed">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.natus error sit voluptatem accusantium doloremque laudantium.
            </p>
            
            <p className="font-['Manrope'] text-base sm:text-lg md:text-lg text-gray-600 leading-relaxed">
              Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="w-full ">
          <div className="flex flex-row flex-wrap  gap-6 sm:gap-8 lg:gap-[150px] xl:gap-[243px]">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col max-w-fit text-start">
                <div className="font-['Manrope'] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-none mb-[6px] sm:mb-[6px] ">
                  {stat.number}
                </div>
                <div className="font-['Manrope'] text-nowrap font-semibold text-sm sm:text-base md:text-lg lg:text-[20px]  ">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}