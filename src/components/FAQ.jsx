// src/FAQ.js
import React, { useEffect, useRef, useState  } from "react";
import { motion, useAnimation, useInView } from "framer-motion"
const faqItems = [
  { question: "What types of AI Agents do you offer?", answer: "We deliver an array of AI agents, including virtual assistants, recommendation engines, and chatbots." },
  { question: "How do you handle project timelines?", answer: "We implement agile methodologies to achieve timely delivery with added flexibility." },
  { question: "How do you ensure the quality of your projects?", answer: "We perform regular testing, code reviews, and quality assurance throughout the development cycle."},
  { question: "How often will I receive updates on the project?", answer: "We offer regular updates each week, including comprehensive reports and demos." },
  { question: "What is your development process like?", answer: "Our workflow consists of requirement gathering, design, development, testing, and deployment." }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
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

  const variants = {
    visible: { y: 0, opacity: 1, transition: { duration:0.5} },
    hidden: { y: 70, opacity: 0 },
  };
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='gap-4 md:px-[64px] sm:px-[24px] py-[80px]  font-Roboto mt-16 items-center max-w-[1216px] w-[100%] justify-center'>
        <motion.h1
         ref={headingRef}
         variants={variants}
         animate={headingControl}
         initial="hidden"
        className="text-[45px] font-[500] mb-8">Popular Questions</motion.h1>
        <motion.div 
         ref={outboundRef}
         variants={variants}
         animate={outboundControl}
         initial="hidden"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">

          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`rounded-3xl bg-[#1A1A1F] border-[#222225] border p-4 cursor-pointer transition-all ${!(openIndex == index) && "" } `}
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center ">
                <h2 className="text-[16px] font-[500] ">{item.question}</h2>
                <span className="text-[24px] font-[200] ">
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-400 ">{item.answer}</p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
  );
};

export default FAQ;
