import React, { useEffect, useRef, useState  } from "react";
import { motion, useAnimation, useInView } from "framer-motion"
const Testimonials =()=>{
  
  const testimonials = [
    {
      user: "Evan Tran",
      role: "Owner Of Byron Medical",
      message: `Looks fantastic! 🔥`,
      message2: `We've definitely noticed a surge in leads and business growth over the last few months!`,
      response: "Thrilled to hear that!",
      avatar: "https://cdn.prod.website-files.com/66b3f7d1ff69e1e7133402fc/66b40ba952becb080f77aea6_f88b8db8-5471-424d-b539-d30d24c28bb6_thumb.jpg", // Replace with actual avatar if available
      companyName: "NovaHealth Solutions",
    },
    {
      user: "GreenPeak Innovations",
      role: "",
      message: `Our chat system is incredibly precise; this has been a huge help!\n`,
      message2: `It truly made a significant difference, thank you!`,
      response: "We're glad to support you! ❤️",
      avatar: "https://cdn.prod.website-files.com/66b3f7d1ff69e1e7133402fc/66b40bdd1f468a1bba5f05c5_wilson_security_logo.jpg",
      companyName: "GreenPeak Innovations",
    },
    {
      user: "David Cooper",
      role: "Manager, Jili Properties",
      message: `Chatting with your developers was like conversing with true experts! 🔥🔥\n`,
      message2: `The quality of your work reflects that expertise.`,
      response: "❤️ We appreciate your kind words!",
      avatar: "https://cdn.prod.website-files.com/66b3f7d1ff69e1e7133402fc/66b40c11dfc6a09777ae702d_1602045350418.jpg", // Replace with actual avatar if available
      companyName: "Copperfield & Co.",
    },
    {
      user: "Aaron Taylor",
      role: "Owner, River Cities Systems",
      message: `Your support team is amazing! 👏\n`,
      message2: `I just wanted to express my gratitude for the swift bug fixes.`,
      response: "Thanks for the recognition! 😇",
      avatar: "https://cdn.prod.website-files.com/66b3f7d1ff69e1e7133402fc/66b40c9bc95cd589a46fa06c_RiverCitiesSystems_Logo2022_Final-p-500.jpg", // Replace with actual avatar
      companyName: "PrimeWave Systems",
    },
  ];
  
    
    
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
    
      const containerVariants = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
        hidden: { opacity: 0, y: 50 }
      };
    
      const textVariants = {
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
        hidden: { x: -50, opacity: 0 }
      };
    
      const navigateTo = (path) => {
        window.location.href = path;
      };
      return (
        <div className='gap-4 md:px-[64px] sm:px-[24px]  font-Roboto mt-16 items-center max-w-[1216px] py-[80px] text-black'>
      <div className="flex justify-between items-center ">
      <motion.h1
      ref={headingRef}
      variants={containerVariants}

      animate={headingControl}
      initial="hidden"
    className="text-textmain-color text-[45px] font-[500] leading-[50px] md:leading-[50px] w-full text-center md:text-left">Insights from Our Clients</motion.h1>
      </div>
      <motion.div         ref={outboundRef}
 variants={containerVariants}  initial="hidden"
        animate={outboundControl} className="lg:grid lg:grid-cols-2 flex gap-5 overflow-x-auto lg:w-auto w-[80vw] mt-5 ">
      {testimonials.map(tests =><motion.div variants={containerVariants} 
      className="px-[24px] mb-2 mr-2 py-[32px] bg-[#141E1F]/50 border-[#2D3535] z-20 backdrop-blur-3xl  rounded-3xl border  p-5 min-w-[400px]  "> 
      <motion.h1  variants={textVariants} className="text-[18px] font-[500] text-[#A1A1A1]">{tests.user}</motion.h1>
      <motion.h2  variants={textVariants} className="bg-[#1A1A1F] border-[#222225] border-2 text-white rounded-2xl p-5 mt-5 w-[80%] text-[16px]"> {tests.message} </motion.h2>
      <motion.h2  variants={textVariants} className="bg-[#1A1A1F] border-[#222225] border-2 text-white rounded-2xl p-5 mt-5 w-[80%] text-[16px]"> {tests.message2} </motion.h2>
      <motion.h1  variants={textVariants} className="text-[18px] text-right mt-8 font-[500] text-[#A1A1A1]">Tech Solutions</motion.h1>
      <motion.h2  variants={textVariants} className="bg-[#284743] border-[#1c312e] border-2 text-white rounded-2xl p-5 mt-5  max-w-[300px] ml-auto text-[16px]"> {tests.response} </motion.h2>
      <motion.div  variants={textVariants} className="flex gap-5 mt-32 items-center">  
        <img src={tests.avatar} alt="companylogo" className="size-10 rounded-full"/>
        <div>
            <h1 className="text-[16px] font-[500] text-[#A1A1A1]">{tests.user}</h1>
            <h1 className="text-[16px] text-[#A1A1A1]">{!(tests.user == tests.companyName )&& tests.companyName}</h1>

            </div>
      </motion.div>

      </motion.div>)}
      </motion.div>
        </div>
      );
    }

export default Testimonials




