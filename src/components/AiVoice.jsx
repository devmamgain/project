import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const AiVoice = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef); // Trigger animation once when visible

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView]);

  const boxVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration:0.5 } },
  };

  return (
    <motion.div
      ref={containerRef}
      className="bg-black/60 p-3 backdrop-blur-lg rounded-3xl shadow-md text-white font-Roboto"
      initial="hidden"
      animate={controls}
      variants={boxVariants}
    >
      <div className=" bg-[#323232]/40  rounded-2xl p-10">
      <div className="flex gap-2 flex-wrap">

      <motion.h1 variants={itemVariants} className="text-[22px] text-white mb-4 font-[500]">
      AI Voice Agents

      </motion.h1>
      <motion.div variants={itemVariants} className="text-xs text-[#A0A0A1] font-[500] mb-4 bg-[#464746] px-3 py-2 w-42 text-center rounded-3xl">
        Inbound & Outbound Calls
      </motion.div>
</div>
      <motion.h2 variants={itemVariants} className="text-[32px] font-[500] mb-4">
        <span className="text-[#A0A0A1]">Fully automate </span>your phone calls.
      </motion.h2>

      <motion.p variants={itemVariants} className="text-[32px] font-[500] text-white mb-6">
        Starting From $4,000 <span className="text-[16px] font-[500] text-gray-400">setup fee</span>
      </motion.p>

      <motion.button 
       whileHover={
        {scaleX:1.08,
         transition:{
           duration:0.3
         }
        }
     }
              onClick={() => window.location.href = 'https://calendly.com/tech-solutions-info/30min'}
      variants={itemVariants} className="bg-white text-black px-6 py-3 rounded-3xl ">
        Get Started
      </motion.button>
</div>
      <motion.ul variants={itemVariants} className="p-2 text-[18px] ">
        {[
          "Advanced Automations",
          "High Quality Sound",
          "Weekly Development Calls",
          "24/7 Priority Support",
          "Latest AI Models",
        ].map((text, index) => (
          <motion.li key={index} className="flex items-center" variants={itemVariants}>
            <span className="text-gray-400 mr-2">•</span> {text}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default AiVoice;
