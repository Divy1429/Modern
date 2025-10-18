import React from 'react'
import "./App.css"
import Header from './Components/Header'
import Hero from './Components/Hero'
import HelpSection from './Components/Help'
import Mint from './Components/Mint'
import Two from './Components/Two'
import Working from './Components/Working'
import QA from './Components/Qa'
import Footer from './Components/Footer'
import Page2 from './Components/Page2';
import Home from './Components/Home';
const App = () => {
  return (
     <div className="app h-full flex flex-col font-normal font-['Montserrat']  items-center justify-center px-0  mx-0 w-full overflow-x-hidden">
       <Home />
       <Page2 />
     </div>
  )
}

export default App