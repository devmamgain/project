import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ContactForm = () => {
  const containRef = useRef(null);
  const isInView = useInView(containRef);
  const maincontrol = useAnimation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (isInView) {
      maincontrol.start("visible");
    } else {
      maincontrol.start("hidden");
    }
  }, [isInView]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true); // Start sending state
    setSent(false); // Reset sent state
    try {
      const response = await fetch("https://emailsendingtechsolutions.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSent(true); // Set sent state to true
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while sending your message.");
    } finally {
      setSending(false); // Stop sending state
    }
  };

  return (
    <motion.div
      ref={containRef}
      variants={{ visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }, hidden: { y: 70, opacity: 0 } }}
      animate={maincontrol}
      initial="hidden"
      className="gap-4 md:px-[64px] sm:px-[24px] text-black font-Roboto mt-16 items-center max-w-[1216px] w-[100%] justify-center mb-20"
    >
      <form
        className="bg-white/30 border-[#F1F0F1]/30 backdrop-blur-lg border rounded-3xl p-[40px] w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-[32px] font-[500] mb-6">Send us a message</h2>
        <div className="mb-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-[24px] py-[20px] border backdrop-blur-lg border-gray-300/30 rounded-2xl focus:outline-none focus:ring-2 bg-[#F4F4F4]/30"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-[24px] py-[20px] border backdrop-blur-lg border-gray-300/30 rounded-lg focus:outline-none focus:ring-2 bg-[#F4F4F4]/30"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-[24px] py-[20px] border backdrop-blur-lg border-gray-300/30 rounded-lg focus:outline-none focus:ring-2 bg-[#F4F4F4]/30"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full shadow-xl ${sending ? 'bg-gray-400' : 'bg-black'} text-white rounded-full hover:bg-gray-800 transition duration-300 py-[20px] px-[32px]`}
          disabled={sending} // Disable button while sending
        >
          {sending ? "Sending..." : "Send a Message"}
        </button>
      </form>

      {/* Popup for successful send */}
      {sent && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center  z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Email Sent!</h3>
            <p>Your message has been successfully sent.</p>
            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded"
              onClick={() => setSent(false)} // Close popup
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ContactForm;
