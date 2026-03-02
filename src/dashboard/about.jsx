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
  SiAngular,
  SiPostgresql,
} from "react-icons/si";
import { Link } from "react-router-dom";

const About = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500 text-4xl" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-4xl" />,
    },
    { name: "Figma", icon: <SiFigma className="text-purple-500 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-sky-400 text-4xl" /> },
    { name: "Angular", icon: <SiAngular className="text-red-500 text-4xl" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-slate-900 dark:text-white text-4xl" />,
    },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500 text-4xl" /> },
    { name: "API", icon: <SiPostman className="text-orange-500 text-4xl" /> },
    {
      name: "Mongodb",
      icon: <SiMongodb className="text-green-500 text-4xl" />,
    },
    {
      name: "Postgres",
      icon: <SiPostgresql className="text-blue-500 text-4xl" />,
    },
    { name: "MySQL", icon: <SiMysql className="text-yellow-500 text-4xl" /> },
    { name: "Prisma", icon: <SiPrisma className="text-cyan-300 text-4xl" /> },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-cyan-400 text-4xl" />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-purple-600 text-4xl" />,
    },
    { name: "MUI", icon: <SiMui className="text-blue-700 text-4xl" /> },
    { name: "Framer", icon: <SiFramer className="text-pink-400 text-4xl" /> },
  ];

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 md:p-7 bg-slate-50 dark:bg-gray-950 transition-colors duration-500 overflow-hidden">
      {/* Background Decorative Orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/30 dark:bg-indigo-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200/30 dark:bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl w-full space-y-12 p-8 md:p-12 rounded-[2rem] mb-24 md:my-12
               bg-white/80 dark:bg-gray-900/40 backdrop-blur-3xl
               border border-white dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-black/20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title Section */}
        <div className="text-center space-y-4">
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            About{" "}
            <span className="text-indigo-600 dark:text-blue-400">Me.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-slate-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Hi, I'm{" "}
            <span className="font-bold text-slate-900 dark:text-white">
              San Nyein Phyo
            </span>{" "}
            — a full-stack developer turning complex problems into elegant,
            functional code.
          </motion.p>
        </div>

        {/* Technical DNA Section */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col md:flex-row gap-2 p-2 rounded-[2.5rem] bg-slate-100/80 dark:bg-white/5 border border-slate-200 dark:border-white/10"
        >
          {[
            {
              label: "Frontend",
              value: "Angular / React",
              desc: "Interactive & Modern UIs",
              color: "text-blue-500",
            },
            {
              label: "Backend",
              value: "Node.js / Express",
              desc: "Secure & Scalable Logic",
              color: "text-emerald-500",
            },
            {
              label: "Database",
              value: "Postgres / MySQL",
              desc: "Optimized Data Flow",
              color: "text-amber-500",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex-1 text-center p-6 rounded-[2rem] transition-all duration-500 hover:bg-white dark:hover:bg-white/10 hover:shadow-xl hover:shadow-indigo-500/5 group"
            >
              <p
                className={`text-[10px] uppercase tracking-[0.3em] font-black mb-2 opacity-70 group-hover:opacity-100 ${item.color}`}
              >
                {item.label}
              </p>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                {item.value}
              </h3>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={skillVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 400 },
              }}
              className="bg-white/50 dark:bg-white/[0.03] backdrop-blur-md p-6 rounded-3xl border border-white dark:border-white/10 shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-3 group"
            >
              <div className="filter drop-shadow-sm group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-gray-500 uppercase">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Status Badges & CTA */}
        <div className="space-y-8">
          <div className="flex flex-wrap justify-center gap-3">
            <StatusBadge
              text="Cloud Deployment & Docker"
              fadeUpVariant={fadeUp}
            />
            <StatusBadge text="Angular & Nest.js" fadeUpVariant={fadeUp} />
          </div>

          <motion.div variants={fadeUp} className="text-center pt-6">
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold shadow-lg hover:shadow-indigo-500/20 transition-all hover:-translate-y-1"
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
    className="flex items-center gap-3 bg-white/80 dark:bg-white/5 px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 backdrop-blur-sm w-fit shadow-sm"
  >
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
    </span>
    <p className="text-[11px] font-medium text-slate-500 dark:text-gray-400">
      Learning{" "}
      <span className="text-slate-900 dark:text-slate-200 font-bold">
        {text}
      </span>
    </p>
  </motion.div>
);

export default React.memo(About);
