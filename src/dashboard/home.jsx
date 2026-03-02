import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaAngular,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { FaReact, FaNodeJs, FaPython, FaHtml5 } from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiFigma,
  SiCisco,
  SiPostgresql,
  SiBootstrap,
  SiJavascript,
  SiNestjs,
} from "react-icons/si";

export default function Home() {
  const fadeDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const listItem = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  React.useEffect(() => {
    document.title = "San Nyein Phyo | Full-stack Developer";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Portfolio of San Nyein Phyo, Full-stack web developer skilled in React, Node.js, Tailwind CSS and more.",
      );
  }, []);

  const skills = [
    { name: "HTML & CSS", color: "#F24E1E", icon: <FaHtml5 /> },
    {
      name: "JavaScript & TypeScript",
      color: "#FFD43B",
      icon: <SiJavascript />,
    },
    { name: "React & Next.js", color: "#61DAFB", icon: <FaReact /> },
    { name: "Angular", color: "#FF0000 ", icon: <FaAngular /> },
    { name: "Node.js & Express", color: "#339933", icon: <FaNodeJs /> },
    { name: "Nest.js", color: "#e41c77", icon: <SiNestjs /> },
    { name: "Tailwind CSS & MUI", color: "#38B2AC", icon: <SiTailwindcss /> },
    { name: "Boorstrap", color: "#6f42c1", icon: <SiBootstrap /> },
    { name: "MySQL & Prisma", color: "#00758F", icon: <SiMysql /> },
    { name: "Postgres & Sequlize", color: "#00758F", icon: <SiPostgresql /> },
    { name: "MongoDB / REST API", color: "#47A248", icon: <SiMongodb /> },
    { name: "Python", color: "#FFD43B", icon: <FaPython /> },
    { name: "Figma", color: "#F24E1E", icon: <SiFigma /> },
    { name: "CCNA", color: "#2563EB", icon: <SiCisco /> },
  ];

  const socials = [
    {
      icon: <FaEnvelope className="text-yellow-400" />,
      text: "sannyeinphyo@gmail.com",
      link: "mailto:sannyeinphyo@gmail.com",
    },
    {
      icon: <FaLinkedin className="text-blue-600 " />,
      text: "linkedin.com/in/sannyeinphyo",
      link: "https://www.linkedin.com/in/san-nyein-phyo-45b309380",
    },
    {
      icon: <FaGithub className="dark:text-white text-gray-900 " />,
      text: "github.com/sannyeinphyo",
      link: "https://github.com/sannyeinphyo",
    },
    {
      icon: <FaTelegram className="text-blue-400" />,
      text: "t.me/sannyeinphyo",
      link: "https://t.me/sannyeinphyo",
    },
    {
      icon: (
        <img
          src="/portfolio/resume/sannyeinphyo_jobnet.png"
          style={{ width: 200 }}
        />
      ),
    },
  ];

  const projects = [
    {
      title: "InternLink",
      desc: "A full-stack internship portal built with Next.js, Node.js, and MySQL.",
      tech: ["Next.js", "Node.js", "MySQL"],
      github: "https://github.com/sannyeinphyo/internlink",
    },
    {
      title: "Chord Library",
      desc: "A community platform for uploading and searching guitar chords.",
      tech: ["React", "Tailwind", "Firebase"],
      github: "https://github.com/sannyeinphyo/guitar",
    },
    {
      title: "Portfolio",
      desc: "Personal portfolio featuring modern animations and dark mode.",
      tech: ["React", "Tailwind v4", "Framer Motion"],
      github: "https://github.com/sannyeinphyo/portfolio",
    },
  ];

  const experience = [
    {
      role: "Full Stack Developer - Intern",
      company: "Ultimate Solution Company",
      duration: "Internship",
      description:
        "Built responsive dashboards using React, Next.js, Node.js, Tailwind, and MUI.",
    },
    {
      role: "Full Stack Developer",
      company: "Myanmar Information Technology ( MIT )",
      duration: "2025 - Currently",
      description:
        "Working on HR Software System using Angular , Node.js and Postgres  ",
    },
  ];

  const education = [
    {
      degree: "B.Sc. in Computer Science",
      institution: "University of Hinthada",
      year: "2016 - 2025",
      link: "https://ucsh.edu.mm/",
    },
  ];

  return (
    <div className="min-h-screen relative bg-dark-900 text-white flex flex-col gap-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="relative z-10 min-h-[70vh] flex flex-col items-center justify-center text-center space-y-6 "
      >
        <div className="space-y-2">
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            San Nyein{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Phyo
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="text-2xl md:text-4xl font-bold text-slate-600 dark:text-slate-400"
          >
            Full-stack Developer
          </motion.div>
        </div>

        <div className="max-w-2xl min-h-[3rem]">
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
            <Typewriter
              cursor={true}
              cursorStyle={"|"}
              cursorBlinking
              words={[
                "Building scalable enterprise solutions with Angular.",
                "Architecting robust backends with Node.js & Postgres.",
                "Designing high-performance web applications.",
              ]}
            />
          </p>
        </div>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          <a
            href="/portfolio/resume/snp_resume.pdf"
            target="_blank"
            className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>

          <a
            href="mailto:sannyeinphyo@gmail.com"
            className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-2xl font-bold hover:bg-slate-50 hover:scale-105 dark:hover:bg-slate-800 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 p-10
             rounded-[2rem] border border-slate-200 dark:border-slate-800
             bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl
             shadow-2xl shadow-black/5 transition-all duration-500"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-blue-600 rounded-full blur-sm opacity-50"></div>
          <motion.img
            src="/portfolio/oggy.png"
            alt="my-photo"
            className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-xl"
            viewport={{ amount: 0.2 }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-4 text-center md:text-left max-w-xl"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
            Introduction
          </h2>
          <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
            I build modern web applications that are{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              functional
            </span>{" "}
            and visually appealing.
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            Specializing in the{" "}
            <span className="text-slate-900 dark:text-white underline decoration-cyan-500/50">
              Angular & Node.js
            </span>{" "}
            stack, I focus on creating seamless user experiences and robust
            backend architectures.
          </p>
          <div className="pt-2 flex justify-center md:justify-start">
            <div className="h-1 w-20 bg-cyan-500/20 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-cyan-500 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="p-5 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 backdrop-blur-md transition-all duration-500"
        >
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-cyan-500 rounded-full"></span>
            Technical Stack
          </h2>

          <motion.div
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            {skills.map((item, i) => (
              <motion.div
                key={i}
                variants={listItem}
                className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 hover:scale-105 hover:border-cyan-500/50 transition-all duration-300"
              >
                <span className="text-xl" style={{ color: item.color }}>
                  {item.icon}
                </span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 backdrop-blur-md transition-all duration-500"
        >
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
            Get In Touch
          </h2>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="space-y-4"
          >
            {socials.map(
              (item, i) =>
                item.link && (
                  <motion.li key={i} variants={listItem}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center text-sm md:text-base gap-4 p-4 rounded-lg border border-transparent hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
                    >
                      <span className="text-2xl transition-transform group-hover:scale-110 duration-300">
                        {item.icon}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          {item.text.includes("@") ? "Email" : "Social"}
                        </span>
                        <span className="text-slate-700 dark:text-slate-200 font-medium">
                          {item.text}
                        </span>
                      </div>
                    </a>
                  </motion.li>
                ),
            )}
          </motion.ul>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 backdrop-blur-md transition-all duration-500"
      >
        <h2 className="text-xl md:text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
          <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
          Professional Experience
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12"
        >
          {experience.map((item, i) => (
            <motion.div
              key={i}
              variants={listItem}
              className="relative pl-8 group"
            >
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 bg-blue-600 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                    {item.role}
                  </h3>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 w-fit">
                    {item.duration}
                  </span>
                </div>

                <div className="text-blue-600 dark:text-blue-400 font-semibold text-md md:text-lg flex items-center gap-2">
                  <span>{item.company}</span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {item.company.includes("MIT") ? (
                    <>
                      <span className="text-[10px] px-2 py-0.5 rounded border border-red-500/20 bg-red-500/10 text-red-500">
                        Angular
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded border border-blue-500/20 bg-blue-500/10 text-blue-500">
                        Node.js
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded border border-indigo-500/20 bg-indigo-500/10 text-indigo-500">
                        PostgreSQL
                      </span>
                    </>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 backdrop-blur-md shadow-sm transition-all duration-500"
      >
        <h2 className=" text-xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
          <span className="w-1.5 h-8 bg-cyan-500 rounded-full"></span>
          Education
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="space-y-4"
        >
          {education.map((item, i) => (
            <motion.div key={i} variants={listItem} className="group">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-xl
                     border border-slate-100 dark:border-slate-800/50
                     bg-slate-50/50 dark:bg-slate-800/20
                     hover:border-cyan-500/50 dark:hover:border-cyan-500/30
                     hover:bg-white dark:hover:bg-slate-800/40
                     hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-md md:text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {item.degree}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 text-sm md:font-medium">
                    {item.institution}
                  </span>
                </div>

                <div className="mt-3 md:mt-0 flex items-center gap-4">
                  <span className="text-xs font-bold tracking-widest text-slate-500 dark:text-slate-500 bg-slate-200/50 dark:bg-slate-800 px-3 py-1 rounded-full uppercase">
                    {item.year}
                  </span>
                  <svg
                    className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/30 dark:bg-slate-900/20 backdrop-blur-xl transition-all duration-500"
      >
        <h2 className="text-xl md:text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
          <span className="w-1.5 h-8 bg-indigo-500 rounded-full"></span>
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={listItem}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>

              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex gap-3">
                  <button className="text-slate-400 hover:text-indigo-500 transition-colors">
                    <a href={project.github}>
                      <FaGithub size={18} />
                    </a>
                  </button>
                  {/* <button className="text-slate-400 hover:text-indigo-500 transition-colors">
                    <FaExternalLinkAlt size={16} />
                  </button> */}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">
                {typeof project === "string"
                  ? project.split(":")[0]
                  : project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow">
                {typeof project === "string"
                  ? project.split(":")[1]
                  : project.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {(project.tech || ["React", "Node.js"]).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div
        style={{ fontFamily: "Arial, sans-serif", width: "100%" }}
        className="flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ amount: 0.2 }}
          className="text-sm text-gray-400 mt-4 justify-center text-center"
        >
          * Swipe left/right to navigate between pages
        </motion.div>
      </div>
    </div>
  );
}
