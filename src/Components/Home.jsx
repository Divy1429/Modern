import React from 'react'

import Header from './Header'
import Hero from './Hero'
import HelpSection from './Help'
import Mint from './Mint'
import Two from './Two'
import Working from './Working'
import QA from './Qa'
import Footer from './Footer'
const Home = () => {
  return (
     <div className="app h-full flex flex-col font-normal font-['Montserrat']  items-center justify-center px-0  mx-0 w-full overflow-x-hidden">
       <Header />
       <Hero />
       <HelpSection />
       <Mint />
       <Two />
       <Working />
       <QA />
       <Footer />
     </div>
  )
}

export default Home