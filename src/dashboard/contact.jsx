import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaAddressBook, FaMailBulk, FaGithub } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function ContactSection() {
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
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white flex flex-col items-center justify-center p-6 md:p-12 lg:p-20 overflow-hidden w-full select-none transition-colors duration-500">

      {/* Dynamic Glow Orbs for Light & Dark */}
      <div className="absolute top-1/4 -right-20 w-[400px] md:w-[500px] h-[400px] md:h-[500px] rounded-full pointer-events-none z-0 animate-pulse bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)]" />
      <div className="absolute top-1/2 -left-20 w-[400px] md:w-[500px] h-[400px] md:h-[500px] rounded-full pointer-events-none z-0 animate-pulse [animation-delay:1.5s] bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12)_0%,transparent_70%)]" />

      {/* Main Glass Card */}
      <div className="relative z-10 max-w-5xl mt-12 w-full space-y-10 p-6 md:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-xl dark:shadow-none transition-all duration-500">

        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 dark:bg-cyan-500 animate-pulse" />
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-indigo-600 dark:text-cyan-400">
              Contact
            </h2>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-cyan-400 dark:to-blue-500">
              Touch
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium text-sm md:text-base">
            Have a project in mind? Let's build it together.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

          {/* Contact Info Cards */}
          <div className="space-y-4">
            <ContactInfoCard
              icon={<FaAddressBook className="text-indigo-500 dark:text-cyan-400" />}
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
                icon={<FaMailBulk className="text-blue-500 dark:text-blue-400" />}
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
                icon={<FaGithub className="text-slate-800 dark:text-slate-200" />}
                title="GitHub"
                detail="github.com/sannyeinphyo"
              />
            </a>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xjkevvvy"
            method="POST"
            onSubmit={handleSubmit}
            className="md:col-span-2 flex flex-col gap-4 p-6 md:p-8 rounded-[1.5rem] border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 backdrop-blur-md shadow-sm dark:shadow-none transition-colors duration-500"
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
                className="p-4 rounded-xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-indigo-500 dark:focus:border-cyan-500 focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-500 outline-none transition-all duration-300 text-sm"
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
                className="p-4 rounded-xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-indigo-500 dark:focus:border-cyan-500 focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-500 outline-none transition-all duration-300 text-sm"
              />
            </div>
            <div>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Your Message..."
                required
                className="w-full p-4 rounded-xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-indigo-500 dark:focus:border-cyan-500 focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-500 outline-none resize-none transition-all duration-300 text-sm"
              />
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="w-48 sm:w-auto px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-sm md:text-base hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300 shadow-md active:scale-95"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Footer Typewriter */}
        <footer className="pt-4 border-t border-slate-200 dark:border-slate-800/60 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            <Typewriter
              cursor
              cursorStyle="|"
              cursorBlinking
              words={[
                "Let's fly to moon together.",
                "Innovation starts with a single conversation.",
                "May our collaboration be bug-free.",
                "Let’s turn coffee into magic.",
              ]}
            />
          </p>
        </footer>
      </div>
    </div>
  );
}

function ContactInfoCard({ icon, title, detail }) {
  return (
    <div className="p-4 rounded-xl flex items-center gap-4 transition-all duration-300 border border-slate-200 dark:border-slate-800/50 bg-white/80 dark:bg-slate-800/20 hover:border-indigo-500/50 dark:hover:border-cyan-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/40 shadow-sm dark:shadow-none">
      <div className="text-xl shrink-0">{icon}</div>
      <div className="min-w-0">
        <h4 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          {title}
        </h4>
        <p className="text-sm text-slate-800 dark:text-slate-200 font-medium truncate hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
          {detail}
        </p>
      </div>
    </div>
  );
}