import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiFramer,
  SiJavascript,
  SiPrisma,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiMongodb,
  SiPostman,
  SiMui,
} from "react-icons/si";
import { Link } from "react-router-dom";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500 text-4xl" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-300 text-4xl" />,
    },
    { name: "Figma", icon: <SiFigma className=" text-purple-500 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-sky-400 text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500 text-4xl" /> },
    { name: "API", icon: <SiPostman className="text-orange-500 text-4xl" /> },
    {
      name: "Mongodb",
      icon: <SiMongodb className="text-green-500 text-4xl" />,
    },
    { name: "MySQL", icon: <SiMysql className="text-yellow-400 text-4xl" /> },
    { name: "Prisma", icon: <SiPrisma className="text-cyan-300 text-4xl" /> },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-cyan-400 text-4xl" />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-purple-600 text-4xl" />,
    },
    {
      name: "MUI",
      icon: <SiMui className="text-blue-700 text-4xl" />,
    },
    {
      name: "Framer Motion",
      icon: <SiFramer className="text-pink-400 text-4xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
      <motion.div
        className="max-w-4xl w-full space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          About Me
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-gray-300 text-center leading-relaxed"
        >
          Hi, I'm{" "}
          <span className="text-blue-400 font-semibold">San Nyein Phyo</span> —
          a passionate web developer who loves creating{" "}
          <span className="text-blue-300">modern, user-friendly</span>{" "}
          applications. I specialize in{" "}
          <span className="text-green-300">React, Next.js, Node.js,</span> and{" "}
          <span className="text-yellow-300">MySQL</span>. I enjoy transforming
          ideas into clean, functional solutions.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={skillVariants}
              whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:bg-gray-700 transition flex flex-col items-center gap-3"
            >
              {skill.icon}
              <span className="text-base select-none font-medium text-gray-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="text-center text-gray-400 text-lg"
        >
          <p>
            Outside of coding, I enjoy exploring{" "}
            <span className="text-pink-400">design trends</span>, playing{" "}
            <span className="text-purple-400">games</span>,{" "}
            <span className="text-green-400">watching movies </span> and
            <span className="text-yellow-400"> series</span>.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="flex justify-center">
          <Link
            to="/link/contact"
            className="px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-600 transition"
          >
            Let's Connect 🚀
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default React.memo(About);