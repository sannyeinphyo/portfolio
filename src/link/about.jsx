import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMysql,
  SiTailwindcss,
  SiFramer,
  SiJavascript,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const skills = [
    { name: "React", icon: <FaReact className="text-sky-400 text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-yellow-400 text-4xl" /> },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-cyan-400 text-4xl" />,
    },
    {
      name: "Framer Motion",
      icon: <SiFramer className="text-pink-400 text-4xl" />,
    },
    { name: "Git", icon: <FaGitAlt className="text-orange-500 text-4xl" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-300 text-4xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-12">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold text-center"
        >
          About Me
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 text-center leading-relaxed"
        >
            Hi, I'm{" "}
            <span className="text-blue-400 font-semibold">San Nyein Phyo</span>{" "}
            — a passionate web developer who loves creating{" "}
            <span className="text-blue-300">modern, user-friendly</span>{" "}
            applications. I specialize in{" "}
            <span className="text-green-300">React, Next.js, Node.js,</span> and{" "}
            <span className="text-yellow-300">MySQL</span>. I enjoy transforming
            ideas into clean, functional solutions.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.2}
              className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:bg-gray-700 transition flex flex-col items-center gap-3 cursor-grab active:cursor-grabbing"
            >
              {skill.icon}
              <span className="text-base font-medium text-gray-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Touch */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="text-center text-gray-400 text-lg"
        >
          <p>
            Outside of coding, I enjoy exploring{" "}
            <span className="text-pink-400">design trends</span>, playing{" "}
            <span className="text-purple-400">games</span>, and trying out{" "}
            <span className="text-green-400">new recipes</span>.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="flex justify-center"
        >
          <Link
            to="/link/contact"
            className="px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-600 transition"
          >
            Let's Connect 🚀
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
