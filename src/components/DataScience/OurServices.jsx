import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import React from "react";
import searchicon from "../../assets/searchicon.svg";
import collaboration from "../../assets/collaboration.svg";
import maxvalue from "../../assets/maxvalue.png";
const OurServices = () =>{
    const inboundRef = useRef(null);
    const outboundRef = useRef(null);
  
    const inboundControl = useAnimation();
    const outboundControl = useAnimation();
  
    const isInboundInView = useInView(inboundRef);
    const isOutboundInView = useInView(outboundRef);
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
  
    const variants = {
      visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
      hidden: { y: 70, opacity: 0 },
    };
  
    const itemVariants = {
      visible: { x: 0, opacity: 1, transition: { duration: 0.7 } }, // Slide from left and fade in
      hidden: { x: -50, opacity: 0 }, // Start off-screen to the left
    };
  
    return (
      <motion.div
        id="aboutservice"
        initial="hidden"
        className="gap-4 md:px-[64px] sm:px-[24px] pb-[80px] font-Roboto items-center max-w-[1216px] w-[100%] justify-center"
      >
        <motion.h1
          ref={inboundRef}
          variants={variants}
          animate={inboundControl}
          initial="hidden"
          className="text-[45px] font-[500] mt-20 w-full"
        >
          Why Partner With Us?
        </motion.h1>
  
        {/* Outbound Section */}
        <motion.div
          ref={outboundRef}
          initial="hidden"
          animate={outboundControl}
          variants={{ visible: { transition: { staggerChildren: 0.5 } }, hidden: {} }}
          className="lg:grid-cols-3 lg:grid-rows-2 grid gap-3 mt-5"
        >
          {/* Individual Item Animation */}
          {[
            {
              imgSrc: "https://cdn.prod.website-files.com/65d8ee5f025f02594c614c12/65d8ee5f025f02594c614d5f_1.svg",
              title: "Gain insights from data:",
              description: "Our data science team helps to extract valuable insights and patterns from large volumes of data, enabling businesses to make informed decisions and gain a competitive edge.",
            },
            {
              imgSrc: "https://cdn.prod.website-files.com/65d8ee5f025f02594c614c12/65d8ee5f025f02594c614d74_2.svg",
              title: "Ensure Scalability:",
              description: "With the exponential growth of data, businesses need help to handle large volumes of information efficiently. We provide scalable data science solutions that can address big data processing, storage, and analysis, allowing businesses to leverage the full potential of their data. ",
            },
            {
              imgSrc: "https://cdn.prod.website-files.com/65d8ee5f025f02594c614c12/65d8ee5f025f02594c614d75_3.svg",
              title: "Maintain complex data structures:",
              description: "We apply techniques like natural language processing, computer vision, and deep learning to extract insights from these data types, enabling businesses to unlock valuable information.",
            },
            {
              imgSrc: "https://cdn.prod.website-files.com/65d8ee5f025f02594c614c12/65d8ee5f025f02594c614d73_4.svg",
              title: "Automate data science in business:",
              description: "We help automate manual tasks and optimize workflows, allowing companies to streamline their operations and improve efficiency.",
            },
            {
                imgSrc: "https://cdn.prod.website-files.com/65d8ee5f025f02594c614c12/65d8ee5f025f02594c614d64_5.svg",
                title: "Streamline real-time decision-making:",
                description: "Making real-time decisions is crucial in today's fast-paced business environment. We develop custom real-time analytics solutions that process data in real-time, enabling businesses to make quick and informed decisions based on up-to-date information.",
              },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#141E1F]/50 border-[#2D3535] z-20 backdrop-blur-3xl grid gap-3 text-center rounded-3xl border p-5"
            >
              <img src={item.imgSrc} alt="icon" className="size-28 mx-auto mt-10" />
              <h1 className="text-[20px] font-[500] mt-5">{item.title}</h1>
              <p className="font-[500] mt-2">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    );
}


export default OurServices