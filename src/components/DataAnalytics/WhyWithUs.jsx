import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import React from "react";
import searchicon from "../../assets/searchicon.svg";
import collaboration from "../../assets/collaboration.svg";
import maxvalue from "../../assets/maxvalue.png";

const WhyWithUs = () => {
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
      className="gap-4 md:px-[64px] sm:px-[24px] pb-[80px] font-Roboto mt-16 items-center max-w-[1216px] w-[100%] justify-center"
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
        className="lg:grid-cols-4 grid gap-3 mt-5"
      >
        {/* Individual Item Animation */}
        {[
          {
            imgSrc: searchicon,
            title: "Tailored Solutions",
            description: "Customized analytics solutions to match your unique business needs.",
          },
          {
            imgSrc: collaboration,
            title: "Personalized Collaboration",
            description: "Close collaboration to understand your objectives and challenges.",
          },
          {
            imgSrc: maxvalue,
            title: "Max Data Value",
            description: "Solutions that address specific requirements, delivering maximum data value.",
          },
          {
            imgSrc: collaboration,
            title: "Seasoned Expertise",
            description: "Deep industry knowledge with technological excellence.",
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
};

export default WhyWithUs;
