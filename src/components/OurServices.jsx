import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import chatting from "../assets/chatting.webp"
import voiceagent from "../assets/voiceagent.webp"
import support from "../assets/support.webp"

const OurServices = () => {

  
  const headingRef = useRef(null);

  const inboundRef = useRef(null);
  const outboundRef = useRef(null);

  const inboundControl = useAnimation();
  const outboundControl = useAnimation();
  const headingControl = useAnimation();

  const isInboundInView = useInView(inboundRef);
  const isOutboundInView = useInView(outboundRef);
  const isHeadingInView = useInView(headingRef);

  useEffect(() => {
    if (isInboundInView) {
      inboundControl.start("visible");
    } else {
      inboundControl.start("hidden");
    }
  }, [isInboundInView]);

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

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#services") {
      const element = document.getElementById("services");
      if (element) {
          element.scrollIntoView({ behavior: "smooth" });
      }
  }
  if (hash === "#whataiagent") {
    const element = document.getElementById("whataiagent");
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}
}, []);
 
  const variants = {
    visible: { y: 0, opacity: 1, transition: { duration:0.5} },
    hidden: { y: 70, opacity: 0 },
  };
  

  const navigateTo = (path) => {
    window.location.href = path;
  }
 

  return (
    <motion.div 
initial="hidden"
    
      className="flex flex-col items-center text-[#EAE7DC] mt-20 md:px-[64px] sm:px-[24px] font-Roboto max-w-[1216px]"
    > 
    <motion.h1
      ref={headingRef}
      variants={variants}
      animate={headingControl}
      initial="hidden"
    className="text-[#EAE7DC] text-[45px] font-[500] leading-[50px] md:leading-[50px] w-full text-center md:text-left">Tech Excellence, Delivered</motion.h1>
    <div 
  
    className="mt-16 ">
      <div className="px-[24px] py-[32px]  rounded-3xl border  border-componentborder">
      <motion.div 
          ref={inboundRef}
          variants={variants}
          animate={inboundControl}
          initial="hidden"
      className="flex justify-between flex-wrap gap-2">
      <h1 className="font-[500] text-[#EAE7DC] text-[28px]">Available Services</h1>
      <h1 className="rounded-3xl  bg-[#E7FAF2] text-[#22A16B] font-[500] px-4 py-2 w-[110px] text-center">3 services</h1>
      </motion.div>
<motion.div 
    ref={inboundRef}
    variants={variants}
    animate={inboundControl}
    initial="hidden"
    id="services"
className="grid md:grid-cols-2 md:grid-rows-2 grid-rows-1 grid-cols-1 gap-4 items-center justify-center mt-3">
        <div className="relative rounded-2xl shadow-lg overflow-hidden min-w-[220.8px] mt-3">              

      <motion.img 
whileHover={{
  scale: 1.08,
      transition: { duration: 0.2 }
    }} 
    onClick={() => navigateTo('aivoiceagent')}

    src={voiceagent}
      className=" cursor-pointer rounded-2xl object-cover  h-[558.4px] flex-grow flex w-full z-20"
      
      />
<div className="absolute inset-0 bg-gradient-to-tr from-black via-black/30 to-transparent flex flex-col p-6 z-10 pointer-events-none">
<h3 className="text-[22px] font-[500] mb-3 mt-auto">AI Voice Agents</h3>
                <p className="text-[#FBFBFB99] mb-5 font-[500] max-w-[320px] text-[18px]">
                Build personalized AI Voice Agents tailored to your business in just 30 days.
                </p>
                <button className="text-[#EAE7DC] py-2 text-left font-[500]">
                Get Started
                </button>
              </div>
      </div>
      <div className="relative rounded-2xl shadow-lg overflow-hidden min-w-[220.8px] mt-3">              

<motion.img 
whileHover={{
  scale: 1.08,
      transition: { duration: 0.2 }
    }} 
    onClick={() => navigateTo('aitextchatbot')}

src={chatting}
className=" cursor-pointer rounded-2xl object-cover  h-[558.4px] flex-grow flex w-full"

/>
<div className="absolute inset-0 bg-gradient-to-tr from-black via-black/30 to-transparent flex flex-col p-6 z-10 pointer-events-none">
<h3 className="text-[22px] font-[500] mb-3 mt-auto">AI Text Chatbots</h3>
<p className="text-[#FBFBFB99] mb-5 font-[500] max-w-[320px] text-[18px]">
Utilize our tested AI Chatbots for your website or social media.       
   </p>
          <button className="text-[#EAE7DC] py-2 text-left font-[500]">
          Get Started
          </button>
        </div>
</div>
<div className="relative rounded-2xl shadow-lg overflow-hidden md:col-span-2">              

<motion.img 
whileHover={{
  scale: 1.08,
      transition: { duration: 0.2 }
    }} 
    onClick={() => navigateTo('supportpage')}

    src={support}
className=" cursor-pointer rounded-2xl object-cover  h-[558.4px] flex-grow flex w-full"

/>
<div className="absolute inset-0 bg-gradient-to-tr from-black via-black/30 to-transparent flex flex-col p-6 z-10 pointer-events-none">
<h3 className="text-[22px] font-[500] mb-3 mt-auto">Support and Maintenance</h3>
<p className="text-[#FBFBFB99] mb-5 font-[500] max-w-[320px] text-[18px]">
Consistent updates, performance enhancements, and fixes for seamless agent operation.</p>
          <button className="text-[#EAE7DC] py-2 text-left font-[500]">
          Get Started
          </button>
        </div>
</div>
</motion.div>

      <motion.div 
          ref={outboundRef}
          variants={variants}
          animate={outboundControl}
          initial="hidden"
          id="whataiagent"
      className="relative rounded-2xl border-[4px] border-[#141E20] py-[32px] px-[24px] outline outline-[2.3px] outline-[#222929] mt-10">
  <div className="absolute inset-0 rounded-2xl border-[1px] border-[#222929] pointer-events-none" style={{ boxSizing: 'border-box' }}></div>
  <h1 className="font-[500] text-textmain-color text-[28px] leading-[30px]">
    What are AI Agents?
  </h1>
  <p className="text-[16px] text-textmain-color font-[500] mt-6">
  AI agents act as digital workers, independently managing tasks to support business growth. This includes AI phone agents for call handling, website chatbots for customer inquiries, and email agents for sales support. They engage with stakeholders, delivering efficient solutions that enhance business efficiency.  </p>
</motion.div>
      </div>
    </div>
    </motion.div>
  );
};

export default OurServices;
