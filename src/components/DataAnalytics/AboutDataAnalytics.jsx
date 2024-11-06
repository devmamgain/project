import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import React from "react";

const AboutDataAnalytics = () => {
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
        We build infrastructure for data aggregation, analysis, and reporting ensures even the most voluminous and high-velocity data is organized seamlessly. Through a commitment to time-saving automation, easy-to-read reports, trustworthy data, and value-focused analytics, we empower organizations to make informed decisions and plan future actions based on historical insights.

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
        <div className="flex flex-wrap items-center justify-between">
        <h1 className="text-[32px] font-[500]">Our Data Analytics Services</h1>
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
        </div>
        <div className="grid md:grid-cols-2 md:grid-rows-2 grid-rows-1 grid-cols-1 gap-3 mt-5">
          <div className="bg-[#141E1F]/50 border-[#2D3535] z-20 backdrop-blur-3xl  rounded-3xl border  p-5">
          <h1 className="text-[20px] font-[500]">Data Warehousing</h1>

        <p className="font-[500] mt-2">
        We believe that data is more than just numbers. It's a roadmap to success. Whether in healthcare, finance, retail, or any other sector, we have the tools and experience to help you leverage your data for maximum impact. Watch the video, explore our range of services, and see how we can empower your business to thrive in the digital age.        </p>
        </div>
        <div className="bg-[#141E1F]/50 border-[#2D3535] z-20 backdrop-blur-3xl  rounded-3xl border  p-5">
          <h1 className="text-[20px] font-[500]">Data Migration
          </h1>

        <p className="font-[500] mt-2">
        Our Data Migration service empowers you to upgrade and enhance your data through digital transformation. Our automated process ensures you reap the full benefits hassle-free. With the advantage of non-disruptive operation, high security, scalability, and reliability, we help you oversee maintenance and ensure a smooth transition.    </p>
        </div>
        <div className="bg-[#141E1F]/50 border-[#2D3535] z-20 backdrop-blur-3xl  rounded-3xl border  p-5">
          <h1 className="text-[20px] font-[500]">Big Data
          </h1>

        <p className="font-[500] mt-2">
        Our Big Data solutions not only mitigate risks but also provide deep insights into operational processes, customer behaviour, and more. With cutting-edge tools and the latest technology, we make your desired business outcomes attainable. Our expertise lies in organizing large datasets into a unified, invaluable resource.              </p>
        </div>
        <div className="bg-[#141E1F]/50 border-[#2D3535] z-20 backdrop-blur-3xl  rounded-3xl border  p-5">
          <h1 className="text-[20px] font-[500]">Cloud
          </h1>

        <p className="font-[500] mt-2">
        Cloud Computing Services enables our clients to explore and evaluate the opportunities the Cloud offers and simply transition their business by maximizing the benefits. We offer a strategic assessment of your business needs and a customized implementation plan to facilitate the transition to a Cloud-based model.  </p>
        </div>

        <div className="bg-[#141E1F]/50 border-[#2D3535] z-20 backdrop-blur-3xl  rounded-3xl border  p-5 md:col-span-2">
          <h1 className="text-[20px] font-[500]">Data Quality Management

          </h1>

        <p className="font-[500] mt-2">
        Our Data Quality Management service serves as the sentinel of operational accuracy. Think of it as 'rescue management' that steps in when challenges arise. Our expert team handles extensive quality control, migration, integration, data governance, deployment, and archiving with precision. Trust us to preserve your data, enhance security, and deliver immaculate, tailored data for your review.  </p>
        </div>

        
        
        </div>
        
      </motion.div>
    </motion.div>
  );
};

export default AboutDataAnalytics;
