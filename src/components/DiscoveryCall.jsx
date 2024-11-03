import React, { useRef, useEffect } from "react";
import { InlineWidget } from "react-calendly";
import { motion, useAnimation, useInView } from "framer-motion";


const DiscoveryCall = () => {
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
  

  return (
    <div className='gap-4 md:px-[64px] sm:px-[24px] pt-[80px] font-Roboto mt-16 items-center max-w-[1216px] w-[100%] justify-center'>
      <motion.div 
                   ref={headingRef}
                   variants={variants}
                   initial="hidden"
                   animate={headingControl}
      className="flex justify-between font-[500] flex-wrap">     
      {/* from-[#8B7500] border-l-4 border-l-[#ffd900db]  */}
                    <h1 className="text-[45px] font-[500] ">Let's <span className='px-[8px] whitespace-nowrap bg-gradient-to-r  from-[#00ffff5e] border-l-4 border-l-[#00FFFF] '>Connect</span>
                    </h1>
                    <p className="text-[16px] w-[275px]">We're here to respond to your queries and discuss how we can help you meet your objectives.</p>
                    </motion.div>
   <div className="flex flex-col justify-center items-center mt-16">
   <motion.div
        ref={outboundRef}
        variants={variants}
        initial="hidden"
        animate={outboundControl}
        className="bg-white rounded-3xl px-2 border-[#F1F0F1] border  py-16 w-full"
      >
       
       <div className="mt-6 ">
            <InlineWidget
              url="https://calendly.com/tech-solutions-info/30min" // Replace with your Calendly link
              styles={{ width: '100%', minWidth: '150px', height: '630px', overflow: 'hidden' }}
            />
          </div>

 
      </motion.div>
    </div>
    </div>
  );
};

export default DiscoveryCall;
