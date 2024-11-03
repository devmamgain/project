import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import React from 'react';
import logo from "../assets/Logo.png"

const ChatbotHomePage = () => {
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
 variants={{visible:{y:0,opacity:1, transition:{duration:0.4}}, hidden:{y:30,opacity:0}}} animate={maincontrol} initial="hidden" >
<div className='flex flex-col justify-center  items-center max-w-[1600px] max-h-[674.78px]'>
    <img src={logo} alt="no tech solutions" className='w-30 h-20 mt-12'/>

  <div className='grid items-center justify-center max-w-[800px] max-h-[502.2px] text-center  mt-24'>
  <p className='text-[16px] font-[500] whitespace-nowrap flex justify-center items-center gap-3 text-[#acacb6]'>
    
    <span class="flex justify-center items-center h-3 w-3 relative ">
      <span class="animate-slow-ping absolute inline-flex h-2 w-2 rounded-full bg-[#85e4bf] opacity-75"></span>
      <span class="relative inline-flex rounded-full h-[7px] w-[7px] bg-[#11D17F]"></span>
    </span> <p>Aiding Businesses In Adopting AI</p></p>
        <h1 className='md:text-[78px] text-[44px] font-[500] max-w-[673.97px] mt-5 leading-[50px] md:leading-[90px] msm1:px-0 px-5'>Next-Gen <h1 className='px-[8px] msm1:whitespace-nowrap bg-gradient-to-r from-[#00ffff5e] border-l-4 border-l-[#00FFFF] '>AI Text Chatbots</h1></h1>
 
  <div className='flex text-[16px] flex-wrap gap-3 mx-5 msm1:mx-0 justify-center mt-10 '>
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
      className='bg-buttonmaincta text-white  px-[32px] py-[20px] rounded-full flex gap-2 flex-grow msm1:flex-grow-0  w-[182.92px] h-[63.13px] font-[500] shadow-xl justify-center'><img src="https://cdn.prod.website-files.com/66b3f7d1ff69e1e7133402fc/66b3f7d1ff69e1e713340363_Phone.svg"/>Book A Call</motion.button>
    <motion.button 
      whileHover={{
        scaleX: 1.08,
        opacity:0.8,
            transition: { duration: 0.3 }
          }} 
    onClick={() => navigateTo('#chatbotpricing')}
    className='bg-[#284743] text-textmain-color px-[32px] py-[20px] rounded-full  flex-grow msm1:flex-grow-0 text-left font-[500]' >Discover Pricing</motion.button>
  </div>
  </div>
  </div>
  </motion.div>
    );
};

export default ChatbotHomePage;
