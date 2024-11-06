import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const url = window.location.pathname;
  let lastPart = url.substring(url.lastIndexOf('/') + 1);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 547);
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 547);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.div
      variants={{
        visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
        hidden: { scale: 0, padding: 0, opacity: 0 }
      }}
      animate="visible"
      initial="hidden"
      className="mx-auto flex fixed items-center justify-center mt-10 z-20 bottom-10 font-Roboto"
    >
      {isSmallScreen ? (
        <>
          {/* Circular Button for Small Screens */}
          <button
            onClick={toggleMenu}
            className="bg-[#141E20]/80 backdrop-blur-md overflow-hidden border-4 border-[#141E20] p-4 rounded-full text-textmain-color shadow-md outline outline-[2.3px] outline-[#222929]"
          >
            <div
            className="absolute inset-0 rounded-full  border-[1px] border-[#141E20] pointer-events-none"
            style={{ boxSizing: 'border-box' }}
          ></div>
            {!menuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
}

          </button>
          {menuOpen && (
            <motion.div
              className="absolute rounded-2xl bg-[#141E20]/80 backdrop-blur-md overflow-hidden border-4 border-[#141E20] max-w-[680px] outline outline-[2.3px] outline-[#222929] top-[-180px]  flex flex-col gap-4 p-4  shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
               <div
            className="absolute inset-0 rounded-2xl  border-[1px] border-[#141E20]  pointer-events-none"
            style={{ boxSizing: 'border-box' }}
          ></div>
              {/* Home Link */}
              {lastPart !== "" && (
                <motion.a
                  href="/"
                  className="text-gray-500  whitespace-nowrap hover:text-gray-300 p-2"
                >
                  Home
                </motion.a>
              )}
              {/* AI Text Chatbots Link */}
              {lastPart !== "aitextchatbot" && lastPart !== "datascience" && (
                <motion.a
                  href="/aitextchatbot"
                  className="text-gray-500 whitespace-nowrap hover:text-gray-300 p-2"
                >
                  AI Text Chatbots
                </motion.a>
              )}
              {/* AI Voice Agents Link */}
              {lastPart !== "aivoiceagent" && lastPart !== "aitextchatbot" && lastPart !== "dataanalytics" &&  (
                <motion.a
                  href="/aivoiceagent"
                  className="text-gray-500 whitespace-nowrap hover:text-gray-300 p-2"
                >
                  AI Voice Agents
                </motion.a>
              )}
               {lastPart !== "datascience"  && lastPart !== "" && lastPart !== "aivoiceagent" && lastPart !== "supportpage" &&   (
                <motion.a
                  href="/datascience"
                  className="text-gray-500 whitespace-nowrap hover:text-gray-300 p-2"
                >
                  Data Science
                </motion.a>
              )}
               {lastPart !== "dataanalytics" && lastPart !== "" && lastPart !== "supportpage" &&   (
                <motion.a
                  href="/dataanalytics"
                  className="text-gray-500 whitespace-nowrap hover:text-gray-300 p-2"
                >
                  Data Analytics
                </motion.a>
              )}
              {/* Contact Us Link */}
              {lastPart !== "aivoiceagent" && lastPart !== "aitextchatbot" && lastPart !== "supportpage" && lastPart !== "datascience" && lastPart !== "dataanalytics" && (
                <motion.a
                  href="#contact-us"
                  className="text-gray-500 flex items-center gap-2 whitespace-nowrap hover:text-gray-300 p-2"
                >
                        <span class="flex justify-center items-center h-3 w-3 relative ">
  <span class="animate-slow-ping absolute inline-flex h-2 w-2 rounded-full bg-[#85e4bf] opacity-75"></span>
  <span class="relative inline-flex rounded-full h-[7px] w-[7px] bg-[#11D17F]"></span>
  </span>
                  Contact Us
                </motion.a>
              )}
            </motion.div>
          )}
        </>
      ) : (
        // Full Navbar for Larger Screens
        <div className="relative shadow-md rounded-full backdrop-blur-lg bg-[#141E20]/40 overflow-hidden border-4 border-[#141E20] max-w-[680px] outline outline-[2.3px] outline-[#222929]">
          <div
            className="absolute inset-0 rounded-2xl border-[1px] border-[#141E20] pointer-events-none"
            style={{ boxSizing: 'border-box' }}
          ></div>
          <div className="flex h-full w-full items-center justify-center rounded-3xl">
            <nav className="flex msm1:text-base text-xs msm2:text-sm divide-x divide-[#141E20]">
              {/* Home Link */}
              {lastPart !== "" &&   (
                <motion.a
                  whileHover={{
                    marginLeft: "20px",
                    opacity: 0.8,
                    transition: {
                      duration: 0.3
                    }
                  }}
                  href="/"
                  className="text-gray-300 whitespace-nowrap hover:text-gray-100 md:px-[60px] md:py-[20px] sm1:px-[30px] sm1:py-[16px] px-[10px] py-[10px]"
                >
                  Home
                </motion.a>
              )}
              {/* AI Text Chatbots Link */}
              {lastPart !== "aitextchatbot" && lastPart !== "datascience" &&(
                <motion.a
                  whileHover={{
                    marginLeft: "10px",
                    marginRight: "10px",
                    opacity: 0.8,
                    transition: {
                      duration: 0.3
                    }
                  }}
                  href="/aitextchatbot"
                  className="text-gray-300 whitespace-nowrap hover:text-gray-100 md:px-[60px] md:py-[20px] sm1:px-[30px] sm1:py-[16px] px-[10px] py-[10px]"
                >
                  AI Text Chatbots
                </motion.a>
              )}
              {/* AI Voice Agents Link */}
              {lastPart !== "aivoiceagent" && lastPart !== "aitextchatbot" && lastPart !== "dataanalytics" &&  (
                <motion.a
                  whileHover={{
                    marginLeft: "10px",
                    marginRight: "10px",
                    opacity: 0.8,
                    transition: {
                      duration: 0.3
                    }
                  }}
                  href="/aivoiceagent"
                  className="text-gray-300 whitespace-nowrap hover:text-gray-100 md:px-[60px] md:py-[20px] sm1:px-[30px] sm1:py-[16px] px-[10px] py-[10px]"
                >
                  AI Voice Agents
                </motion.a>
              )}

{lastPart !== "datascience"  && lastPart !== "" && lastPart !== "aivoiceagent" && lastPart !== "supportpage" && (
                <motion.a
                  whileHover={{
                    marginLeft: "10px",
                    marginRight: "10px",
                    opacity: 0.8,
                    transition: {
                      duration: 0.3
                    }
                  }}
                  href="/datascience"
                  className="text-gray-300 whitespace-nowrap hover:text-gray-100 md:px-[60px] md:py-[20px] sm1:px-[30px] sm1:py-[16px] px-[10px] py-[10px]"
                >
                  Data Science
                </motion.a>
              )}

{ lastPart !== "dataanalytics" && lastPart !== "" && lastPart !== "supportpage" && (
                <motion.a
                  whileHover={{
                    marginLeft: "10px",
                    marginRight: "10px",
                    opacity: 0.8,
                    transition: {
                      duration: 0.3
                    }
                  }}
                  href="/dataanalytics"
                  className="text-gray-300 whitespace-nowrap hover:text-gray-100 md:px-[60px] md:py-[20px] sm1:px-[30px] sm1:py-[16px] px-[10px] py-[10px]"
                >
                  Data Analytics
                </motion.a>
              )}
              {/* Contact Us Link */}
              {lastPart !== "aivoiceagent" && lastPart !== "aitextchatbot" && lastPart !== "supportpage" && lastPart !== "datascience" && lastPart !== "dataanalytics" && (
                <motion.a
                  whileHover={{
                    marginRight: "10px",
                    opacity: 0.8,
                    transition: {
                      duration: 0.3
                    }
                  }}
                  href="#contact-us"
                  className="text-gray-300 flex items-center gap-2 whitespace-nowrap hover:text-white md:px-[60px] md:py-[20px] sm1:px-[30px] sm1:py-[16px] px-[10px] py-[10px]"
                >
                  <span class="flex justify-center items-center h-3 w-3 relative ">
  <span class="animate-slow-ping absolute inline-flex h-2 w-2 rounded-full bg-[#85e4bf] opacity-75"></span>
  <span class="relative inline-flex rounded-full h-[7px] w-[7px] bg-[#11D17F]"></span>
  </span>
                  Contact Us
                </motion.a>
              )}
            </nav>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default NavBar;
