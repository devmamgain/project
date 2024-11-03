import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import logo from "../assets/Logo.png"
import React from 'react';

const HomePage = () => {
  const containRef = useRef(null)
  const isInView = useInView(containRef)
  const maincontrol = useAnimation()
  useEffect(()=>{
    if(isInView){
        maincontrol.start("visible")
    }
    else {
        maincontrol.start("hidden")
    }
},[isInView])
const navigateTo = (path) => {
  window.location.href = path;
};
  return (
 <motion.div ref={containRef}
 variants={{visible:{y:0,opacity:1, transition:{duration:0.4}}, hidden:{y:30,opacity:0}}} animate={maincontrol} initial="hidden"
 className='flex flex-col justify-center items-center font-Roboto px-[48px] text-[#acacb6] antialiased '>
  <div className='flex flex-col justify-center  items-center max-w-[1600px] max-h-[674.78px]'>
  <img src={logo} alt="no tech solutions" className=' h-20 mt-12'/>
  <div className='grid items-center justify-center max-w-[800px] max-h-[502.2px] text-center  mt-24'>
  <p className='text-[16px] whitespace-nowrap font-[500] flex justify-center items-center gap-3 text-[#acacb6]'>
    
    <span class="flex justify-center items-center h-3 w-3 relative ">
      <span class="animate-slow-ping absolute inline-flex h-2 w-2 rounded-full bg-[#85e4bf] opacity-75"></span>
      <span class="relative inline-flex rounded-full h-[7px] w-[7px] bg-[#11D17F]"></span>
    </span> <p>Aiding Businesses In Adopting AI</p></p>
    <h1 className='md:text-[78px] text-[44px] font-[500]  mt-5 leading-[50px] md:leading-[90px] text-[#EAE7DC]'>Creating <span className='px-[8px] whitespace-nowrap bg-gradient-to-r from-[#00ffff5e] border-l-4 border-l-[#00FFFF]  '>AI Agents</span> that deliver results.</h1>
 
  <motion.div 
  variants={{visible:{y:0,opacity:1 , transition:{duration:0.4,delay:0.2}}, hidden:{y:30,opacity:0}}} animate={maincontrol} initial="hidden"
 
  className='flex text-[16px] flex-wrap gap-5 justify-center mt-10 max-w-[650px] mx-auto'>
   <motion.button 
          onClick={() => navigateTo('#contact-us')}

      whileHover={
         {scaleX:1.08,
          opacity:0.8,
          transition:{
            duration:0.3
          }
         }
      }
      className='bg-buttonmaincta border border-[#195619] text-white  px-[32px] py-[20px] rounded-full flex gap-2  justify-center  h-[63.13px] font-[500] flex-grow shadow-xl'><img src="https://cdn.prod.website-files.com/66b3f7d1ff69e1e7133402fc/66b3f7d1ff69e1e713340363_Phone.svg"/>Book A Call</motion.button>
    <motion.button
      onClick={() => navigateTo('#services')}

   whileHover={{
    scaleX: 1.08,
    opacity:0.8,
        transition: { duration: 0.3 }
      }} 
  className='bg-[#284743] text-white  px-[32px] font-[500] py-[20px] rounded-full text-left  h-[63.13px] flex-grow' >Discover Services</motion.button>
  <motion.button
      onClick={() => navigateTo('#whataiagent')}
      whileHover={{
    scaleX: 1.08,
    opacity:0.8,

        transition: { duration: 0.3 }
      }} 
      className='bg-[#284743] text-white  font-[500] px-[32px] py-[20px] rounded-full text-left h-[63.13px] flex-grow'>What are AI Agents?</motion.button>
  </motion.div>
  </div>
  </div>
  </motion.div>
  );
};

export default HomePage;
