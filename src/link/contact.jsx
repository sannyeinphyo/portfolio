import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
export default function ContactSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const [formData, setFormData] = useState({
    name: "",
    _replyto: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      setFormData({
        name: "",
        _replyto: "",
        message: "",
      });

      toast.success("Message sent successfully! 🚀");
    } catch (error) {
      toast.error("Oops! There was a problem sending your message.");
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
      <motion.div
        className="max-w-2xl w-full space-y-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Get in Touch
        </h2>

        <form
          action="https://formspree.io/f/xjkevvvy"
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="email"
            name="_replyto"
            placeholder="Your Email"
            required
            value={formData._replyto}
            onChange={handleChange}
            className="p-4 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="p-4 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-colors"
          >
            Send Message 🚀
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
