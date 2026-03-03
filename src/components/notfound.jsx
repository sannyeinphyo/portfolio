import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function NotFound() {
  const [displayText, setDisplayText] = useState("");
  const videoRef = useRef(null);


  useEffect(() => {
    const messages = [
      "Why are you looking for a page that doesn't exist?",
      "Tom sneaked in and stole this route!",
      "You've wandered into the digital void.",
      "404: Page vanished like a ghost.",
      "Nothing to see here... keep moving!"
    ];
    setDisplayText(messages[Math.floor(Math.random() * messages.length)]);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          entry.isIntersecting ? videoRef.current.play() : videoRef.current.pause();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen  text-center px-4 overflow-hidden">

      {/* Video - No shaking, just a clean fade-in */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <video
          ref={videoRef}
          src="tom_sneaking.mp4"
          poster="tom.jpeg"
          muted
          loop
          playsInline
          className="w-64 md:w-[28rem] rounded-3xl drop-shadow-2xl border border-slate-200 dark:border-slate-800 shadow-2xl shadow-black/10"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
          404
        </h2>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-md mx-auto leading-relaxed">
          {displayText}
        </p>

        <Link
          to="/home"
          className="px-12 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}