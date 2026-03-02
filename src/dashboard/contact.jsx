import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaAddressBook, FaMailBulk, FaGithub } from "react-icons/fa";

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
    <div className="relative min-h-screen  rounded-2xl flex items-center justify-center p-4 md:p-8 transition-colors duration-500 overflow-hidden">
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-4xl w-full space-y-10 p-8 md:p-12 rounded-[2rem] bg-white/70 dark:bg-gray-800/40
               backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-2xl shadow-black/5"
      >
        <div className="text-center space-y-2">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Get in{" "}
            <span className="text-indigo-600 dark:text-blue-500">Touch</span>
          </h2>
          <p className="text-slate-500 dark:text-gray-400 font-medium">
            Have a project in mind? Let's build it together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="space-y-4">
            <ContactInfoCard
              icon={<FaAddressBook className="text-teal-500" />}
              title="Address"
              detail="Yangon, Myanmar"
            />
            <a
              href="mailto:sannyeinphyo@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <ContactInfoCard
                icon={<FaMailBulk className="text-yellow-500" />}
                title="Email"
                detail="sannyeinphyo@gmail.com"
              />
            </a>
            <a
              href="https://github.com/sannyeinphyo"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <ContactInfoCard
                icon={<FaGithub className="text-slate-800 dark:text-white" />}
                title="GitHub"
                detail="github.com/sannyeinphyo"
              />
            </a>
          </div>
          <form
            action="https://formspree.io/f/xjkevvvy"
            method="POST"
            onSubmit={handleSubmit}
            className="md:col-span-2 flex flex-col gap-4
             bg-white/50 dark:bg-white/5
             p-6 md:p-8 rounded-3xl
             border border-slate-200 dark:border-white/10
             backdrop-blur-xl shadow-xl dark:shadow-none"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Name"
                required
                className="p-4 rounded-2xl bg-white dark:bg-slate-900/50
                 border border-slate-200 dark:border-white/10
                 text-slate-900 dark:text-white
                 placeholder:text-slate-400 dark:placeholder:text-slate-500
                 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-blue-600
                 outline-none transition-all"
              />
              <input
                type="email"
                name="_replyto"
                value={formData._replyto}
                onChange={(e) =>
                  setFormData({ ...formData, _replyto: e.target.value })
                }
                placeholder="Email"
                required
                className="p-4 rounded-2xl bg-white dark:bg-slate-900/50
                 border border-slate-200 dark:border-white/10
                 text-slate-900 dark:text-white
                 placeholder:text-slate-400 dark:placeholder:text-slate-500
                 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-blue-600
                 outline-none transition-all"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Your Message..."
              rows={4}
              required
              className="p-4 rounded-2xl bg-white dark:bg-slate-900/50
               border border-slate-200 dark:border-white/10
               text-slate-900 dark:text-white
               placeholder:text-slate-400 dark:placeholder:text-slate-500
               focus:ring-2 focus:ring-indigo-500 dark:focus:ring-blue-600
               outline-none resize-none transition-all"
            />

            <div className="flex justify-center mt-2">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                 className="inline-block px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold shadow-lg hover:shadow-indigo-500/20 transition-all hover:-translate-y-1"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

function ContactInfoCard({ icon, title, detail }) {
  return (
    <div
      className="p-4 rounded-2xl flex items-center gap-4 transition-all duration-500
      bg-white border border-slate-200 shadow-sm
      dark:bg-gray-800/30 dark:border-gray-700 dark:shadow-none"
    >
      <div className="text-2xl">{icon}</div>
      <div className="min-w-0">
        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          {title}
        </h4>
        <p className="text-sm text-slate-700 dark:text-slate-200 font-medium truncate  hover:text-blue-500">
          {detail}
        </p>
      </div>
    </div>
  );
}
