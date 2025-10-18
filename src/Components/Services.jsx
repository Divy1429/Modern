import React from 'react';
import { Phone } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Kitchen Remodeling",
      description: "Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.",
      icon: (
        <svg width="85" height="56" viewBox="0 0 85 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.390991" y="15.5103" width="39.7291" height="39.7291" fill="white" fillOpacity="0.9"/>
          <circle cx="63.9433" cy="34.2504" r="20.989" fill="white" fillOpacity="0.6"/>
          <path d="M42.9543 0.518188L66.6493 41.5592H19.2593L42.9543 0.518188Z" fill="white" fillOpacity="0.7"/>
        </svg>
      ),
      isGradient: true
    },
    {
      id: 2,
      title: "Kitchen Remodeling",
      description: "Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.",
      icon: (
        <svg width="85" height="56" viewBox="0 0 85 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.390991" y="15.5103" width="39.7291" height="39.7291" fill="#46B7CB"/>
          <circle cx="63.9433" cy="34.2504" r="20.989" fill="#46B7CB" fillOpacity="0.58"/>
          <path d="M42.9543 0.518188L66.6493 41.5592H19.2593L42.9543 0.518188Z" fill="#46B7CB" fillOpacity="0.68"/>
        </svg>
      ),
      isGradient: false
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
      ),
      isGradient: false
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
      ),
      isGradient: false
    }
  ];

  return (
    <section className="w-full h-full bg-white py-[78px] sm:py-[78px] md:py-[78px] lg:py-[78px] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center flex flex-col items-center justify-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-sm sm:text-base md:text-lg lg:text-[20px] uppercase tracking-wide mb-2 sm:mb-3 leading-tight font-semibold font-['Manrope']">
            HOW WE CAN HELP
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] max-w-[630px] font-semibold font-['Manrope'] leading-tight px-4">
            Book a consultation for your dream kitchen
          </h2>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col xl:flex-row gap-6 sm:gap-7 lg:gap-[7.33px]">
          {/* Service Cards */}
          {services.map((service) => (
            <div
              key={service.id}
              className={`${
                service.isGradient 
                  ? 'bg-gradient-to-r from-[#153A50] via-[#328290] to-[#46B7CB]' 
                  : 'bg-white border border-[#B7B7B7]'
              } rounded-sm hover:shadow-lg transition-all duration-300 py-12 sm:py-14 md:py-16 lg:pt-[62px] lg:pb-[43px] px-6 sm:px-8 flex flex-col items-start text-start group hover:border-gray-300 mx-auto  w-full max-md:max-w-full  xl:max-w-[415px]`}
            >
              {/* Icon */}
              <div className="mb-[20px] transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className={`text-xl sm:text-2xl md:text-[24px] font-semibold font-['Syne'] leading-tight mb-4 sm:mb-[14px] ${
                service.isGradient ? 'text-white' : 'text-gray-900'
              }`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className={`text-sm sm:text-base md:text-[18px] font-['Roboto'] max-w-[327px] font-normal mb-6 sm:mb-8 lg:mb-[20px] leading-relaxed ${
                service.isGradient ? 'text-white/90' : 'text-[#737373]'
              }`}>
                {service.description}
              </p>

              {/* Learn More Button */}
              <div className="w-full flex items-center justify-center">
              <button className={`flex items-center text-center  gap-2 text-base sm:text-lg md:text-[18px] font-normal font-['Roboto'] transition-all group-hover:gap-3 duration-300 cursor-pointer ${
                service.isGradient ? 'text-white hover:text-white/80' : 'text-gray-900 hover:text-[#4A9FB8]'
              }`}>
                Learn More
                <svg width="53" height="9" viewBox="0 0 53 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 sm:w-12 md:w-[53px] h-auto">
                  <path d="M51.9001 5.00419C52.0953 4.80893 52.0953 4.49234 51.9001 4.29708L48.7181 1.1151C48.5228 0.919839 48.2062 0.919839 48.011 1.1151C47.8157 1.31036 47.8157 1.62695 48.011 1.82221L50.8394 4.65063L48.011 7.47906C47.8157 7.67432 47.8157 7.99091 48.011 8.18617C48.2062 8.38143 48.5228 8.38143 48.7181 8.18617L51.9001 5.00419ZM0.573303 5.15063H51.5465V4.15063H0.573303V5.15063Z" fill="currentColor"/>
                </svg>
              </button>
              </div>
            </div>
          ))}

         
        </div>
      </div>
    </section>
  );
}