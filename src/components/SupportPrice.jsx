import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const SupportPrice = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef); // Trigger animations once when in view

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView]);

  const boxVariants = {
    hidden: { opacity: 0, x: -50 }, // Start from the left
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
      className="bg-[#faf8f8]/30 backdrop-blur-lg  rounded-3xl  font-Roboto text-black border-[11px] border-[#faf8f8]/30 outline outline-[1px] outline-[#F1F0F1]/30"
      initial="hidden"
      animate={controls}
      variants={boxVariants}
    >
<div className=" bg-white/30 rounded-2xl p-10">
<div className=" absolute rounded-2xl border-[1px] border-[#F1F0F1] pointer-events-none" style={{ boxSizing: 'border-box' }}></div>
<div className="flex gap-2 flex-wrap">
<motion.h1 variants={itemVariants} className="text-[22px] text-black mb-4 font-[500]">
Support & Maintenance

      </motion.h1>
      <motion.div variants={itemVariants} className="text-xs font-[500] text-green-700 mb-4 bg-green-50 px-3 py-2 text-center rounded-3xl">
      Suitable For Custom AI Agents
      </motion.div>
      </div>
      <motion.h2 variants={itemVariants} className="text-[32px] font-[500] mb-4 max-w-96">
      Multiple packages to support your custom AI Agent.      </motion.h2>

      <motion.p variants={itemVariants} className="text-[32px] font-[500] text-black mb-6">
      <span className="text-[16px] font-[500] text-black">Ranging from </span> $500 - $2,500/m 
      </motion.p>

      <motion.button 
        onClick={() => window.location.href = 'https://calendly.com/tech-solutions-info/30min'}
        whileHover={
          {scaleX:1.08,
           transition:{
             duration:0.3
           }
          }
       }
      variants={itemVariants} className="bg-black text-white px-6 py-3 rounded-3xl shadow-xl">
        Get Started
      </motion.button>
      </div>

      <motion.ul variants={itemVariants} className="space-y-2 p-2 text-[18px] font-[500]">
        {[
          "24/7 Monitoring",
          "24/7 Priority Support",
          "Monthly Update Calls",
          "Latest AI Upgrades",
          "Data Analysis",
          "Custom Dashboard",
        ].map((text, index) => (
          <motion.li key={index} className="flex items-center" variants={itemVariants}>
            <span className="text-gray-500 mr-2">•</span> {text}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default SupportPrice;
