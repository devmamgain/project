// Footer.js
import React from 'react';
import logo from "../assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 flex justify-center">
      <div  className='gap-4 md:px-[64px] sm:px-[24px] pb-[80px]  font-Roboto  items-center max-w-[1216px] w-[100%] justify-center'  >
        <div className="flex justify-between items-center flex-wrap gap-5">
        <img src={logo} alt="no tech solutions" className='w-32 h-16 ml-5 mb-5'/>         
   
        <div className='flex gap-20'>
          <h3 className="text-gray-400 mb-2">Menu</h3>
          <ul className="space-y-2">
            <li><a href="#services" className="text-lg hover:text-gray-300">Services</a></li>
            <li><a href="#pricing" className="text-lg hover:text-gray-300">Pricing</a></li>
            <li><a href="#contact-us" className="text-lg hover:text-gray-300">Contact Us</a></li>
          </ul>
          
        </div>
        
        </div>
        <h1 className="mt-16 text-right text-gray-500 mr-20">
        © 2024, All rights reserved
      </h1>
      </div>
   
    </footer>
  );
};

export default Footer;
