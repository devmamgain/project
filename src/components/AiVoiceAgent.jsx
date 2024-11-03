import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AiVoice from "./AiVoice"

const AiVoiceAgent =()=>{
    const containRef = useRef(null);
    const isInView = useInView(containRef);
    const maincontrol = useAnimation()
    useEffect(()=>{
      if(isInView){
          maincontrol.start("visible")
      }
      else {
          maincontrol.start("hidden")
      }
  },[isInView])
    return(
        <div 
        className='gap-4 md:px-[64px] sm:px-[24px] pb-[80px]  font-Roboto  items-center max-w-[1216px] w-[100%] justify-center'
>
           <motion.h1 
                 ref={containRef}
                 variants={{visible:{y:0,opacity:1, transition:{duration:0.5}}, hidden:{y:70,opacity:0}}} animate={maincontrol} initial="hidden"
 className="text-[45px]  font-[500] mt-32 w-full">Voice Agent <span className='px-[8px] whitespace-nowrap bg-gradient-to-r from-[#00ffff5e] border-l-4 border-l-[#00FFFF] '>Pricing</span>
 </motion.h1>
        <div className="mt-16">
     <AiVoice/>
     </div>
     </div>
    
    )
}

export default AiVoiceAgent