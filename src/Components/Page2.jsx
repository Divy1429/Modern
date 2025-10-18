import React from 'react'
import Header from './Header';
import Hero2 from './Hero2';
import Header2 from './Header2';
import StatsSection from './Texts';
import AboutMintSection from './AboutMint';
import ServicesSection from './Services';


const Page2 = () => {
  return (
   
    <div className="app h-full flex flex-col max-w-full font-normal font-['Montserrat']  items-center justify-center px-0  mx-0 w-full overflow-x-hidden">
         <div className='w-full bg-gradient-to-r from-[#153A50] via-[#328290] to-[#46B7CB]'>
        <Header2 />
        <Hero2 /> 
        <StatsSection />
        <AboutMintSection />
        <ServicesSection />
    </div>

    </div>
  )
}

export default Page2