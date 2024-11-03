import React, { useEffect, useRef, useState  } from "react";
import { motion, useAnimation, useInView } from "framer-motion"
import AiText from "./AiText"
import AiVoice from "./AiVoice"

const AiTextAndVoice =()=>{
  const headingRef = useRef(null);

  const outboundRef = useRef(null);

  const outboundControl = useAnimation();
  const headingControl = useAnimation();

  const isOutboundInView = useInView(outboundRef);
  const isHeadingInView = useInView(headingRef);

  useEffect(() => {
    if (isOutboundInView) {
      outboundControl.start("visible");
    } else {
      outboundControl.start("hidden");
    }
  }, [isOutboundInView]);

  useEffect(() => {
    if (isHeadingInView) {
      headingControl.start("visible");
    } else {
      headingControl.start("hidden");
    }
  }, [isHeadingInView]);

  const variants = {
    visible: { y: 0, opacity: 1, transition: { duration:0.5} },
    hidden: { y: 70, opacity: 0 },
  };
  const navigateTo = (path) => {
    window.location.href = path;
  };

    return(
        <div className='gap-4 md:px-[64px] sm:px-[24px]  font-Roboto mt-16 items-center max-w-[1216px] py-[80px]'>
                    <motion.h1 
                      ref={headingRef}
                      variants={variants}
                      animate={headingControl}
                      initial="hidden"
                    className="text-[45px] font-[500] ">Versatile <span className='px-[8px] whitespace-nowrap bg-gradient-to-r from-[#00ffff5e] border-l-4 border-l-[#00FFFF]'>Services</span></motion.h1>
<div className="lg:grid-cols-2 lg:grid-rows-1 grid mt-5 gap-3">
     <AiText/>
    
     <AiVoice/>
     </div>
     <motion.div 
       ref={outboundRef}
       variants={variants}
       animate={outboundControl}
       initial="hidden"
     className="flex mt-6 justify-between flex-wrap flex-grow w-full px-[40px] py-[32px] rounded-3xl bg-[#1A1A1F] border-[#222225] border gap-5"
  >
      <h2
        className="text-[22px] font-[500]  mt-3" 
       
      >
        Reserve Your AI Agent Discovery Call Today.

      </h2>
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
      className='bg-buttonmaincta text-white  px-[32px] py-[20px] rounded-full flex gap-2  w-[182.92px] h-[63.13px] font-[500] shadow-xl'><img src="https://cdn.prod.website-files.com/66b3f7d1ff69e1e7133402fc/66b3f7d1ff69e1e713340363_Phone.svg"/>Book A Call</motion.button>
        </motion.div>
     </div>
    )
}

export default AiTextAndVoice