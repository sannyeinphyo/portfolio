import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  SiAngular,
  SiPostgresql,
  SiDocker,
  SiVercel,
  SiAmazonwebservices,
} from "react-icons/si";
import { Link } from "react-router-dom";

const About = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skills = [
    { name: "HTML", category: "frontend", icon: <SiHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", category: "frontend", icon: <SiCss3 className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", category: "frontend", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
    { name: "React", category: "frontend", icon: <FaReact className="text-cyan-400 text-4xl" /> },
    { name: "Angular", category: "frontend", icon: <SiAngular className="text-red-500 text-4xl" /> },
    { name: "Next.js", category: "frontend", icon: <SiNextdotjs className="text-slate-900 dark:text-white text-4xl" /> },
    { name: "Tailwind", category: "frontend", icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
    { name: "Bootstrap", category: "frontend", icon: <SiBootstrap className="text-purple-500 text-4xl" /> },
    { name: "MUI", category: "frontend", icon: <SiMui className="text-blue-500 text-4xl" /> },
    { name: "Framer", category: "frontend", icon: <SiFramer className="text-pink-400 text-4xl" /> },
    { name: "Node.js", category: "backend", icon: <FaNodeJs className="text-emerald-500 text-4xl" /> },
    { name: "Mongodb", category: "backend", icon: <SiMongodb className="text-emerald-500 text-4xl" /> },
    { name: "Postgres", category: "backend", icon: <SiPostgresql className="text-blue-400 text-4xl" /> },
    { name: "MySQL", category: "backend", icon: <SiMysql className="text-amber-500 text-4xl" /> },
    { name: "Prisma", category: "backend", icon: <SiPrisma className="text-teal-500 dark:text-cyan-300 text-4xl" /> },
    { name: "Docker", category: "tools", icon: <SiDocker className="text-blue-400 text-4xl" /> },
    { name: "Vercel", category: "tools", icon: <SiVercel className="text-slate-900 dark:text-white text-4xl" /> },
    { name: "AWS", category: "tools", icon: <SiAmazonwebservices className="text-amber-500 text-4xl" /> },
    { name: "Figma", category: "tools", icon: <SiFigma className="text-purple-400 text-4xl" /> },
    { name: "Git", category: "tools", icon: <FaGitAlt className="text-orange-500 text-4xl" /> },
    { name: "Postman", category: "tools", icon: <SiPostman className="text-orange-400 text-4xl" /> },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white flex items-center justify-center pt-24 md:pt-32 p-4 md:p-8 overflow-hidden w-full select-none transition-colors duration-500">

      {/* Background Glows for Light & Dark Mode */}
      <div className="absolute top-1/4 -left-20 w-[400px] md:w-[500px] h-[400px] md:h-[500px] rounded-full pointer-events-none z-0 animate-pulse bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)]" />
      <div className="absolute bottom-10 -right-20 w-[400px] md:w-[500px] h-[400px] md:h-[500px] rounded-full pointer-events-none z-0 animate-pulse [animation-delay:1.5s] bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.12)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12)_0%,transparent_70%)]" />

      {/* Main Glass Card */}
      <motion.div
        className="relative z-10 max-w-5xl w-full space-y-12 p-6 md:p-12 rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-xl dark:shadow-2xl dark:shadow-black/40 transition-colors duration-500"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title Section */}
        <div className="text-center space-y-3">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 dark:bg-cyan-500 animate-pulse" />
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-indigo-600 dark:text-cyan-400">
              Overview
            </h2>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-cyan-400 dark:to-blue-500">
              Me.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            Hi, I'm{" "}
            <span className="font-bold text-slate-900 dark:text-white">San Nyein Phyo</span> — a full-stack developer turning complex problems into elegant, functional code.
          </motion.p>
        </div>

        {/* Technical DNA Section */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3 rounded-[2rem] bg-slate-100/80 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 transition-colors duration-500"
        >
          {[
            {
              label: "Frontend",
              value: "Angular / React",
              desc: "Interactive & Modern UIs",
              lightColor: "text-indigo-600",
              darkColor: "dark:text-cyan-400",
            },
            {
              label: "Backend",
              value: "Node.js / Express",
              desc: "Secure & Scalable Logic",
              lightColor: "text-emerald-600",
              darkColor: "dark:text-emerald-400",
            },
            {
              label: "Database",
              value: "Postgres / MySQL",
              desc: "Optimized Data Flow",
              lightColor: "text-amber-600",
              darkColor: "dark:text-amber-400",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-[1.5rem] transition-all duration-300 hover:bg-white dark:hover:bg-slate-800/40 hover:shadow-md dark:hover:shadow-none hover:border-slate-300 dark:hover:border-slate-700/60 border border-transparent group"
            >
              <p className={`text-[10px] uppercase tracking-[0.3em] font-black mb-2 opacity-80 group-hover:opacity-100 ${item.lightColor} ${item.darkColor}`}>
                {item.label}
              </p>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                {item.value}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Skills Section Header */}
        <div className="space-y-6">
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-4">
            <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400 dark:text-slate-500">
              Tech Stack
            </h2>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All" },
                { id: "frontend", label: "Frontend" },
                { id: "backend", label: "Backend & DB" },
                { id: "tools", label: "Tools & Cloud" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                    activeCategory === tab.id
                      ? "bg-slate-900 text-white dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-600 dark:text-white shadow-md"
                      : "bg-slate-200/60 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300/50 dark:border-slate-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 min-h-[140px]">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  transition={{
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 },
                    layout: { type: "spring", stiffness: 300, damping: 25 },
                  }}
                  whileHover={{
                    y: -6,
                    transition: { type: "spring", stiffness: 400, damping: 20 },
                  }}
                  className="bg-white/80 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/40 dark:hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/50 p-5 rounded-2xl shadow-sm dark:shadow-none transition-all duration-300 flex flex-col items-center gap-3 group"
                >
                  <div className="filter drop-shadow group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 uppercase transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Status Badges & CTA */}
        <div className="space-y-8 pt-4">
          <div className="flex flex-wrap justify-center gap-3">
            <StatusBadge text="Cloud Deployment & Docker" fadeUpVariant={fadeUp} />
            <StatusBadge text="Angular & Nest.js" fadeUpVariant={fadeUp} />
          </div>

          <motion.div variants={fadeUp} className="text-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-sm md:text-base hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300 shadow-md active:scale-95"
            >
              Let's Connect
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const StatusBadge = ({ text, fadeUpVariant }) => (
  <motion.div
    variants={fadeUpVariant}
    className="flex items-center gap-3 bg-white/80 dark:bg-slate-900/80 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 backdrop-blur-sm w-fit shadow-sm"
  >
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
    </span>
    <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
      Learning{" "}
      <span className="text-slate-900 dark:text-slate-200 font-bold">
        {text}
      </span>
    </p>
  </motion.div>
);

export default React.memo(About);