// src/DataScienceFAQ.js
import React, { useEffect, useRef, useState  } from "react";
import { motion, useAnimation, useInView } from "framer-motion"
const DataScienceFAQItems = [
  { question: "Predictive analysis", answer: "We bring you value by extracting insights from historical data. Our forecasting models can help you with improving Sales, Inventory and Process management." },
  { question: "Natural language processing", answer: "Our developers provide NLP tools for your business to help you gain more from the data with Text extraction, Sentiment Analysis, Text Classification. In other words, we can parse PDFs, extract key topics, understand clients’ intent and make a structure from your unstructured text." },
  { question: "Optimization models", answer: "We help various industries with resource optimization. It helps increase the management efficiency of leftover stock goods, improve supply chain and logistics, and allocates time and other resources. "},
  { question: "BI & data visualization", answer: "Visual charts, tables and dashboards allow you to understand the information collected from various data resources at a glance. Catch your insights with DATAFOREST." },
  { question: "AI Integration", answer: "We offer expertise in developing and implementing AI analytics, machine learning models, and data management strategies to enhance businesses' operational efficiency and decision-making through data-driven insights and automation." },
  { question: "Machine Learning", answer: "Our machine learning algorithms analyze vast amounts of data and learn patterns within that data. This allows businesses to predict future outcomes based on historical data, which can be invaluable to traditional mathematics methods." },
  { question: "Data science as a service", answer: "Data science as services allows you to get the most out of analytics, deep learning, insights finding, and more without building your data science competencies within the company." },
  { question: "Data science consultancy", answer: "Use our data science consulting services to learn how you can benefit from the data. What would be most relevant to your business now, and how to smoothly implement data science solutions into your existing system. " },
  { question: "Risk management", answer: "Our data science company provides scoring, fraud and anomaly detection solutions to predict and protect your business from third party attacks and unexpected data loss." }

];

const DataScienceFAQ = () => {
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
        className="text-[45px] font-[500] mb-8">Data science professional services include</motion.h1>
        <motion.div 
         ref={outboundRef}
         variants={variants}
         animate={outboundControl}
         initial="hidden"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">

          {DataScienceFAQItems.map((item, index) => (
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

export default DataScienceFAQ;
