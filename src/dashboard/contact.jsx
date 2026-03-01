import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaAddressBook , FaMailBulk , FaPhone , FaNetworkWired, FaGithub} from "react-icons/fa";

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

      setFormData({ name: "", _replyto: "", message: "" });

      toast.success("Message sent successfully! 🚀");
    } catch (error) {
      toast.error("Oops! There was a problem sending your message.");
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-gray-900 text-slate-900 dark:text-white flex items-center justify-center p-8 transition-colors duration-500 overflow-hidden">

      {/* BACKGROUND DECORATION: Breaks the 'box' feel */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-teal-400/20 dark:bg-teal-600/10 rounded-full blur-3xl" />

      <motion.div
        className="relative z-10 max-w-4xl w-full space-y-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >
        <div className="text-center space-y-2">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Get in <span className="text-indigo-600 dark:text-blue-500">Touch</span>
          </h2>
          <p className="text-slate-500 dark:text-gray-400 font-medium">Have a project in mind? Let's build it together.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          <div className="space-y-4">
            <ContactInfoCard icon={<FaAddressBook className="text-teal-500"/>} title="Address" detail="Yangon, Myanmar" />
            <ContactInfoCard icon={<FaMailBulk className="text-yellow-500"/>} title="Email" detail="sannyeinphyo@gmail.com" />

            <a href="https://github.com/sannyeinphyo" target="_blank" rel="noreferrer" className="block group">
              <ContactInfoCard
                icon={<FaGithub className="text-slate-800 dark:text-white group-hover:rotate-12 transition-transform"/>}
                title="GitHub"
                detail="github.com/sannyeinphyo"
              />
            </a>
          </div>

          <form
            action="https://formspree.io/f/xjkevvvy"
            method="POST"
            onSubmit={handleSubmit}
            className="md:col-span-2 flex flex-col gap-4 bg-white/80 dark:bg-gray-800/40 p-6 md:p-10 rounded-[2rem] shadow-2xl shadow-indigo-500/5 border border-white dark:border-gray-700 backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="p-4 rounded-2xl bg-slate-100 dark:bg-gray-900/50 border border-transparent focus:border-indigo-500 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-gray-900 transition-all outline-none"
              />
              <input
                type="email"
                name="_replyto"
                placeholder="Email"
                required
                className="p-4 rounded-2xl bg-slate-100 dark:bg-gray-900/50 border border-transparent focus:border-indigo-500 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-gray-900 transition-all outline-none"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message..."
              rows={4}
              required
              className="p-4 rounded-2xl bg-slate-100 dark:bg-gray-900/50 border border-transparent focus:border-indigo-500 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-gray-900 transition-all outline-none resize-none"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 px-6 py-4 bg-indigo-600 dark:bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-indigo-500/20 dark:shadow-blue-500/20 hover:bg-indigo-700 dark:hover:bg-blue-700 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

function ContactInfoCard({ icon, title, detail }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800/30 border border-slate-100 dark:border-gray-700 rounded-2xl flex items-center gap-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">{title}</h4>
        <p className="text-slate-700 dark:text-slate-200">{detail}</p>
      </div>
    </div>
  );
}