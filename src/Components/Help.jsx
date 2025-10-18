import React from 'react';
import { Phone } from 'lucide-react';

export default function HelpSection() {
  const services = [
    {
      id: 1,
      title: "Kitchen Remodeling",
      description: "Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.",
      icon: (
        <svg width="85" height="56" viewBox="0 0 85 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.390991" y="15.5103" width="39.7291" height="39.7291" fill="#46B7CB"/>
<circle cx="63.9433" cy="34.2504" r="20.989" fill="#46B7CB" fillOpacity="0.58"/>
<path d="M42.9543 0.518188L66.6493 41.5592H19.2593L42.9543 0.518188Z" fill="#46B7CB" fillOpacity="0.68"/>
</svg>
      )
    },
    {
      id: 2,
      title: "Bathroom Remodeling",
      description: "Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.",
      icon: (
        <svg width="85" height="56" viewBox="0 0 85 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.390991" y="15.5103" width="39.7291" height="39.7291" fill="#46B7CB"/>
<circle cx="63.9433" cy="34.2504" r="20.989" fill="#46B7CB" fillOpacity="0.58"/>
<path d="M42.9543 0.518188L66.6493 41.5592H19.2593L42.9543 0.518188Z" fill="#46B7CB" fillOpacity="0.68"/>
</svg>
      )
    },
    {
      id: 3,
      title: "Home Remodeling",
      description: "Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.",
      icon: (
        <svg width="85" height="56" viewBox="0 0 85 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.390991" y="15.5103" width="39.7291" height="39.7291" fill="#46B7CB"/>
<circle cx="63.9433" cy="34.2504" r="20.989" fill="#46B7CB" fillOpacity="0.58"/>
<path d="M42.9543 0.518188L66.6493 41.5592H19.2593L42.9543 0.518188Z" fill="#46B7CB" fillOpacity="0.68"/>
</svg>
      )
    },
    {
      id: 4,
      title: "Flooring & Restoration",
      description: "Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.",
      icon: (
        <svg width="85" height="56" viewBox="0 0 85 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.390991" y="15.5103" width="39.7291" height="39.7291" fill="#46B7CB"/>
<circle cx="63.9433" cy="34.2504" r="20.989" fill="#46B7CB" fillOpacity="0.58"/>
<path d="M42.9543 0.518188L66.6493 41.5592H19.2593L42.9543 0.518188Z" fill="#46B7CB" fillOpacity="0.68"/>
</svg>
      )
    }
  ];

  return (
    <section className="w-full h-full bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto flex flex-col items-center justify-center ">
        {/* Header */}
        <div className="text-center flex flex-col items-center justify-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-sm sm:text-base md:text-lg lg:text-[20px] uppercase tracking-wide mb-2 sm:mb-3 leading-tight font-semibold font-['Syne']">
            HOW WE CAN HELP
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] max-w-[630px] font-semibold font-['Syne'] leading-tight px-4">
            Book a consultation for your dream kitchen
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 max-w-fit  sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {/* Service Cards */}
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border  border-[#B7B7B7] rounded-sm hover:shadow-lg transition-all duration-300 py-12 sm:py-14 md:py-16 lg:pt-[62px] lg:pb-[43px] px-6 sm:px-8 flex flex-col items-center text-center group hover:border-gray-300 mx-auto w-full max-w-[415px]"
            >
              {/* Icon */}
              <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-[78px] transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl md:text-[24px] font-semibold font-['Syne'] leading-tight mb-4 sm:mb-[14px]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-[18px] font-['Roboto'] max-w-[327px] font-normal mb-6 sm:mb-8 lg:mb-[33px] leading-relaxed text-[#737373]">
                {service.description}
              </p>

              {/* Learn More Button */}
              <button className="flex items-center gap-2 text-base sm:text-lg md:text-[18px] font-normal font-['Roboto'] hover:text-[#4A9FB8] transition-all group-hover:gap-3 duration-300 cursor-pointer">
                Learn More
                <svg width="53" height="9" viewBox="0 0 53 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 sm:w-12 md:w-[53px] h-auto">
<path d="M51.9001 5.00419C52.0953 4.80893 52.0953 4.49234 51.9001 4.29708L48.7181 1.1151C48.5228 0.919839 48.2062 0.919839 48.011 1.1151C47.8157 1.31036 47.8157 1.62695 48.011 1.82221L50.8394 4.65063L48.011 7.47906C47.8157 7.67432 47.8157 7.99091 48.011 8.18617C48.2062 8.38143 48.5228 8.38143 48.7181 8.18617L51.9001 5.00419ZM0.573303 5.15063H51.5465V4.15063H0.573303V5.15063Z" fill="currentColor"/>
</svg>
              </button>
            </div>
          ))}

          {/* Call to Action Card */}
          <div className="bg-white col-span-1 md:col-span-2  border border-[#B7B7B7] rounded-sm hover:shadow-lg transition-all duration-300 py-12 sm:py-14 md:py-16 px-6 sm:px-8 flex flex-col items-center justify-center text-center group hover:border-gray-300 sm:col-span-2 lg:col-span-2 mx-auto w-full  ">
            {/* Icon */}
            <div className="mb-8 sm:mb-10 md:mb-[52px] transform group-hover:scale-110 transition-transform duration-300">
            <svg width="85" height="56" viewBox="0 0 85 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.390991" y="15.5103" width="39.7291" height="39.7291" fill="#46B7CB"/>
<circle cx="63.9433" cy="34.2504" r="20.989" fill="#46B7CB" fillOpacity="0.58"/>
<path d="M42.9543 0.518188L66.6493 41.5592H19.2593L42.9543 0.518188Z" fill="#46B7CB" fillOpacity="0.68"/>
</svg>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl md:text-[24px] font-semibold font-['Syne'] mb-6 sm:mb-8 md:mb-[19px]">
              Call Us Now!
            </h3>

            <button className="inline-flex items-center justify-center gap-2 sm:gap-3 md:gap-[14px] font-['Montserrat'] text-base sm:text-lg md:text-[20px] font-medium px-6 sm:px-8 md:px-[31px] py-3 md:py-[15px] bg-[#D9826F] hover:bg-[#dd411d] transition-colors duration-200 w-full sm:w-auto whitespace-nowrap cursor-pointer">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>(123) 123 1234</span>
              </button>
          </div>
        </div>
      </div>
    </section>
  );
}