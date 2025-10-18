import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import mint from "../assets/MInt.png";

export default function QA() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How long does a renovation take?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      question: "How long does a renovation take?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      question: "How long does a renovation take?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      question: "How long does a renovation take?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-[86px] items-center">
          {/* Left Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
            <div className="relative w-full h-auto max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[585px] mx-auto lg:mx-0">
              <div className="flex justify-center lg:justify-end">
                <img
                  src={mint}
                  alt="Modern kitchen with island and pendant lights"
                  className="w-full h-auto object-cover "
                />
              </div>
            </div>
          </div>

          {/* Right Content - Q&A */}
          <div className="order-1 lg:order-2 ">
            {/* Header */}
            <div className="mb-8 sm:mb-4 md:mb-8 lg:mb-12 flex flex-col items-start max-lg:items-center">
              <p className="font-['Syne'] text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold uppercase tracking-wide mb-[6px] sm:mb-[6px]">
                QUESTIONS & ANSWERS
              </p>
              <h2 className="font-['Syne'] font-semibold text-[20px] sm:text-[28px] md:text-[28px] lg:text-[48px] xl:text-[56px] leading-[1.11]">
                Answers to your kitchen questions
              </h2>
            </div>

            {/* Accordion */}
            <div className="space-y-0 flex-wrap flex max-lg:items-center max-lg:justify-center">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-t max-sm:flex-wrap flex flex-row border-gray-300 last:border-b"
                >
                  {/* Question */}
                  <div className="flex  flex-col justify-between items-start  py-[25px] sm:py-[25px] md:py-[25px] ">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full max-w-[502px]   flex items-center  gap-4 text-left hover:bg-gray-50 transition-colors duration-200 group cursor-pointer"
                    >
                      <h3 className="font-['Syne']   font-semibold text-lg sm:text-xl md:text-2xl lg:text-[24px] pr-4">
                        {faq.question}
                      </h3>
                    </button>

                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className=" ">
                        <p className="font-['Montserrat'] max-w-[502px] text-sm sm:text-base md:text-lg lg:text-[18px] font-normal text-gray-700 leading-[1.39]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button onClick={() => toggleAccordion(index)} className="flex items-center justify-center cursor-pointer">
                    {openIndex === index ? (
                      <svg
                        width="61"
                        height="30"
                        viewBox="0 0 61 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M41.2588 21.9659C41.7922 21.823 42.1088 21.2746 41.9659 20.7412L39.6365 12.0478C39.4936 11.5144 38.9452 11.1978 38.4118 11.3407C37.8783 11.4837 37.5617 12.032 37.7046 12.5655L39.7752 20.2929L32.0478 22.3634C31.5143 22.5064 31.1977 23.0547 31.3407 23.5882C31.4836 24.1217 32.032 24.4382 32.5654 24.2953L41.2588 21.9659ZM19.7153 9.86603L40.4999 21.866L41.4999 20.134L20.7153 8.13397L19.7153 9.86603Z"
                          fill="black"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="64"
                        height="19"
                        viewBox="0 0 64 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M44.7071 10.5406C45.0976 10.1501 45.0976 9.51691 44.7071 9.12639L38.3431 2.76243C37.9526 2.3719 37.3195 2.3719 36.9289 2.76243C36.5384 3.15295 36.5384 3.78612 36.9289 4.17664L42.5858 9.8335L36.9289 15.4904C36.5384 15.8809 36.5384 16.514 36.9289 16.9046C37.3195 17.2951 37.9526 17.2951 38.3431 16.9046L44.7071 10.5406ZM20 10.8335H44V8.8335H20V10.8335Z"
                          fill="black"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
