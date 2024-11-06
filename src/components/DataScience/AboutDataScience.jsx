import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import React from "react";

const AboutDataScience = () => {
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
    id="aboutservice"
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
        <h1 className="text-[32px] font-[500]">About This Service</h1>
        <p className="font-[500]">
        Got data? Let’s make it work for you. Our data science experts transform the raw data through advanced AI techniques like machine learning, predictive analytics, computer vision and natural language processing. Whether you’re looking to predict trends, optimize processes, or better understand numbers, our data science service covers your back. Find out how we can help your business grow       </p>
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
        <h1 className="text-[32px] font-[500]">Get More From Your Data</h1>
        <p className="font-[500]">
        We believe that data is more than just numbers. It's a roadmap to success. Whether in healthcare, finance, retail, or any other sector, we have the tools and experience to help you leverage your data for maximum impact. Watch the video, explore our range of services, and see how we can empower your business to thrive in the digital age.        </p>
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

export default AboutDataScience;
