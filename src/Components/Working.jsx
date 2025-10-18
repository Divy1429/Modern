import React from 'react';
import { Phone } from 'lucide-react';

export default function Working() {
  const steps = [
    {
      id: 1,
      title: "1. Contact Us",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      id: 2,
      title: "2.In-Person Consultation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      id: 3,
      title: "3. Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      id: 4,
      title: "4. Install",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      fullWidth: true
    }
  ];

  return (
    <section className="w-full bg-[#F5F5F5] pt-[51px] pb-[75px] flex justify-center  px-[10px] sm:px-[15px] md:px-[15px] lg:mx-auto ">
      <div className="max-w-[1272px] mx-auto">
        {/* Header */}
        <div className="mb-[20px] sm:mb-[20px] md:mb-[20px] lg:mb-[20px] ">
          <p className="font-['Syne'] text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold uppercase tracking-wide mb-1 sm:mb-[6px]">
            OUR PROCESS
          </p>
          <h2 className="font-['Syne'] font-semibold text-3xl sm:text-[40px] md:text-[48px] lg:text-[48px] xl:text-[48px] leading-tight">
            How it Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 mb-6 sm:mb-[43px] lg:mb-[43px]">
          {/* First 3 steps */}
          {steps.slice(0, 3).map((step) => (
            <div
              key={step.id}
              className="bg-white border max-w-[413px] max-lg:max-w-full flex flex-col justify-center border-gray-300 py-12 sm:py-[48px] md:py-[48px] lg:py-[48px] xl:py-[48px] px-4 sm:px-6 lg:px-[38px] hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="mb-[24px] sm:mb-[24px] md:mb-[24px] transform group-hover:scale-110 transition-transform duration-300">
                <svg width="85" height="56" viewBox="0 0 85 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 sm:w-20 md:w-[85px] h-auto">
                  <rect x="0.390991" y="15.5103" width="39.7291" height="39.7291" fill="#46B7CB"/>
                  <circle cx="63.9433" cy="34.2504" r="20.989" fill="#46B7CB" fillOpacity="0.58"/>
                  <path d="M42.9543 0.518188L66.6493 41.5592H19.2593L42.9543 0.518188Z" fill="#46B7CB" fillOpacity="0.68"/>
                </svg>
              </div>

              {/* Title */}
              <h3 className="font-['Montserrat'] font-medium text-xl sm:text-[26px] md:text-[26px] lg:text-[26px] leading-tight mb-[6px] sm:mb-[6px] md:mb-[6px]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-['Montserrat'] text-sm sm:text-base md:text-lg lg:text-[18px] font-normal text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row - Step 4 and CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[13px] sm:gap-[13px] lg:gap-[13px]">
          {/* Step 4 */}
          <div className="bg-white border border-gray-300 px-[38px] py-[47px] hover:shadow-lg transition-all duration-300 group">
            {/* Icon */}
            <div className="mb-[24px] sm:mb-[24px] md:mb-[24px] transform group-hover:scale-110 transition-transform duration-300">
              <svg width="85" height="56" viewBox="0 0 85 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 sm:w-20 md:w-[85px] h-auto">
                <rect x="0.390991" y="15.5103" width="39.7291" height="39.7291" fill="#46B7CB"/>
                <circle cx="63.9433" cy="34.2504" r="20.989" fill="#46B7CB" fillOpacity="0.58"/>
                <path d="M42.9543 0.518188L66.6493 41.5592H19.2593L42.9543 0.518188Z" fill="#46B7CB" fillOpacity="0.68"/>
              </svg>
            </div>

            {/* Title */}
            <h3 className="font-['Montserrat'] text-nowrap font-medium text-xl sm:text-[26px] md:text-[26px] lg:text-[26px] leading-tight mb-[6px] sm:mb-[6px] md:mb-[6px]">
              {steps[3].title}
            </h3>

            {/* Description */}
            <p className="font-['Montserrat'] text-sm sm:text-base md:text-lg lg:text-[18px] font-normal text-gray-700 leading-relaxed">
              {steps[3].description}
            </p>
          </div>

          {/* CTA Card */}
          <div className="bg-[#D9826F] px-[38px] py-[57px] flex flex-col items-center justify-center text-center hover:bg-[#C97763] transition-colors duration-300">
            {/* Phone Icon */}
            <div className="mb-6 sm:mb-[23px] md:mb-[23px]">
              <Phone className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-gray-800" strokeWidth={1.5} />
            </div>

            {/* Title */}
            <h3 className="font-['Montserrat'] font-medium text-2xl sm:text-[28px] md:text-[32px] lg:text-[32px]  ">
              Get Started Now!
            </h3>

            {/* Phone Number */}
            <p className="font-['Montserrat'] text-xl sm:text-2xl md:text-[24px] lg:text-[24px] font-normal ">
              (123) 123 1234
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}