import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import logo from "../assets/Logo.png"
// Reusable hook for animation that resets each time an element enters the viewport
const useScrollAnimation = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Reset animation when out of view
    }
  }, [isInView, controls]);

  return { ref, controls };
};

const ComparisonComponent = () => {
  const fadeVariant = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6} },
  };

  const leftColumn = useScrollAnimation();
  const rightColumn = useScrollAnimation();
  const buttonAnimation = useScrollAnimation();
  const navigateTo = (path) => {
    window.location.href = path;
  };
  return (
    <div className='gap-4 md:px-[64px] sm:px-[24px]  font-Roboto my-[100px] pt-[80px] items-center max-w-[1216px] w-[100%] justify-center'>
      {/* Heading */}
  <motion.div className="flex justify-between flex-wrap flex-grow w-full"
   variants={fadeVariant}
        initial="hidden"
        animate="visible">
      <motion.h2
       variants={fadeVariant}
       initial="hidden"
       animate="visible"
        className="text-[45px] font-[500] mb-8 " 
       
      >
        Advantages That Foster Success
      </motion.h2>
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
      {/* Grid Columns */}
      <div className="flex flex-wrap justify-between gap-8 p-8 rounded-3xl mt-10 border-componentborder border">
        {/* Left Column */}
        <motion.div
          ref={leftColumn.ref}
          variants={fadeVariant}
          initial="hidden"
          animate={leftColumn.controls}
        >
 <img src={logo} alt="no tech solutions" className='w-28 h-14 ml-5 mb-5'/>         
  <ul>
            {[
              "Experienced Developers",
              "Innovative Development Practices",
              "Complete Custom Development",
              "Client-Centric Approach",
              "Rigorous Testing and Validation",
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-3 mb-4 text-lg ">
                <span className="text-green-500">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column */}
        <motion.div
          ref={rightColumn.ref}
          variants={fadeVariant}
          initial="hidden"
          animate={rightColumn.controls}
        >
          <h3 className="text-lg font-[500] text-gray-500 mb-5 mt-5">
            Other Development Agencies
          </h3>
          <ul>
            {[
              "Junior Developers",
              "Outdated Technologies & Approaches",
              "Generic / Copy & Paste Solutions",
              "Agency-Centric Approach",
              "Limited Testing or Inadequate Quality Control",
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-3 mb-4 text-lg">
                <span className="text-red-500">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Button */}
      <motion.div
        className="text-center mt-8"
        ref={buttonAnimation.ref}
        variants={fadeVariant}
        initial="hidden"
        animate={buttonAnimation.controls}
      >
     
      </motion.div>
    </div>
  );
};

export default ComparisonComponent;
