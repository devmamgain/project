import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import React from "react";

const InboundOutbound = () => {
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
    visible: { y: 0, opacity: 1, transition: { duration:0.5} },
    hidden: { y: 70, opacity: 0 },
  };
  const navigateTo = (path) => {
    window.location.href = path;
  };
  return (
    <motion.div
    id="inoutbound"
      initial="hidden"
      className="gap-4 md:px-[64px] sm:px-[24px] pb-[80px] font-Roboto mt-16 items-center max-w-[1216px] w-[100%] justify-center"
    >
      <motion.h1 
      ref={inboundRef}
      variants={variants}
      animate={inboundControl}
      initial="hidden"
      className="text-[45px] font-[500] mt-20 w-full">
        Crafted for Every{" "}
        <span className="px-[8px] whitespace-nowrap bg-gradient-to-r from-[#00ffff5e] border-l-4 border-l-[#00FFFF]  ">
          Business
        </span>
      </motion.h1>

      {/* Inbound Section */}
      <motion.div
        ref={inboundRef}
        variants={variants}
        animate={inboundControl}
        initial="hidden"
        className="relative text-white mt-10 rounded-3xl border-[11px] py-[32px] px-[24px] outline outline-[2.3px] outline-[#1A1A1F] bg-[#1A1A1F] border-[#222225] shadow-lg shadow-[#1A1A1F]"
      >
        <div
          className="absolute inset-0 rounded-2xl border-[1px] border-[#1A1A1F] pointer-events-none"
          style={{ boxSizing: "border-box" }}
        ></div>
        <h1 className="text-[32px] font-[500]">Inbound Phone Agent</h1>
        <p className="font-[500]">
        Inbound AI Phone Agents are virtual solutions that leverage artificial intelligence, such as natural language processing and speech recognition, to manage incoming customer calls. They can understand caller inquiries, deliver appropriate responses, and resolve problems without human intervention. These systems assist businesses in enhancing efficiency, lowering operational costs, and providing round-the-clock customer support.
        </p>
        <motion.button
            onClick={() => navigateTo('#contact-us')}

          whileHover={{
            scaleX: 1.08,
            opacity: 0.8,
            transition: { duration: 0.3 },
          }}
          className="bg-buttonmaincta font-[500] shadow-xl text-white px-[32px] py-[20px] rounded-full flex gap-2 mt-5 w-[182.92px] h-[63.13px]"
        >
          <img src="https://cdn.prod.website-files.com/66b3f7d1ff69e1e7133402fc/66b3f7d1ff69e1e713340363_Phone.svg" />
          Book A Call
        </motion.button>
      </motion.div>

      {/* Outbound Section */}
      <motion.div

        ref={outboundRef}
        variants={variants}
        animate={outboundControl}
        initial="hidden"
        className="relative text-white mt-10 rounded-3xl border-[11px] py-[32px] px-[24px] outline outline-[2.3px] outline-[#1A1A1F] bg-[#1A1A1F] border-[#222225] shadow-lg shadow-[#1A1A1F]"
      >
        <div
          className="absolute inset-0 rounded-2xl border-[1px] border-[#222225] pointer-events-none"
          style={{ boxSizing: "border-box" }}
        ></div>
        <h1 className="text-[32px] font-[500]">Outbound Phone Agent</h1>
        <p className="font-[500]">
        Outbound AI Phone Agents are AI-powered systems that automatically make phone calls to customers for purposes such as appointment reminders, surveys, or promotional initiatives. They utilize natural language processing and speech synthesis to conduct conversations, respond to inquiries, and capture feedback. These agents enable businesses to automate outreach, boost efficiency, and ensure consistent communication with customers.
        </p>
        <motion.button
            onClick={() => navigateTo('#contact-us')}

          whileHover={{
            scaleX: 1.08,
            opacity: 0.8,
            transition: { duration: 0.3 },
          }}
          className="bg-buttonmaincta shadow-xl font-[500] text-white px-[32px] py-[20px] rounded-full flex gap-2 mt-5 w-[182.92px] h-[63.13px]"
        >
          <img src="https://cdn.prod.website-files.com/66b3f7d1ff69e1e7133402fc/66b3f7d1ff69e1e713340363_Phone.svg" />
          Book A Call
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default InboundOutbound;
