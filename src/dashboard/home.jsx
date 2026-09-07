import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaAngular,
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
} from "react-icons/fa";

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
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 600], [0, 400]);
  const y2 = useTransform(scrollY, [0, 600], [0, 300]);
  const scale = useTransform(scrollY, [0, 300, 600], [1, 1.4, 1]);
  const smoothY1 = useSpring(y1, { stiffness: 50, damping: 20 });
  const smoothY2 = useSpring(y2, { stiffness: 50, damping: 20 });
  const smoothScale = useSpring(scale, { stiffness: 50, damping: 20 });

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
    { name: "Angular", color: "#FF0000", icon: <FaAngular /> },
    { name: "Node.js & Express", color: "#339933", icon: <FaNodeJs /> },
    { name: "Nest.js", color: "#e41c77", icon: <SiNestjs /> },
    { name: "Tailwind CSS & MUI", color: "#38B2AC", icon: <SiTailwindcss /> },
    { name: "Bootstrap", color: "#6f42c1", icon: <SiBootstrap /> },
    { name: "MySQL & Prisma", color: "#00758F", icon: <SiMysql /> },
    { name: "Postgres & Sequelize", color: "#00758F", icon: <SiPostgresql /> },
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
      link: "",
      duration: "Internship",
      project: [{ name: "Intern Link", color: "bg-blue-500" }],
      description:
        "Built responsive dashboards using React, Next.js, Node.js, Tailwind, and MUI.",
    },
    {
      role: "Full Stack Developer",
      company: "Myanmar Information Technology ( MIT )",
      link: "https://mit.com.mm/",
      duration: "2025 - Present",
      project: [
        { name: "HxM", color: "bg-blue-500" },
        { name: "A365", color: "bg-blue-500" },
      ],
      description:
        "Working on HR Software System using Angular , Node.js and Postgres  ",
    },
  ];

  const education = [
    {
      degree: "BC.Sc (Bachelor of Computer Science)",
      institution: "University of Hinthada",
      year: "2016 - 2025",
      link: "https://ucsh.edu.mm/",
    },
  ];
return (
    <div className="relative bg-slate-950 text-white flex flex-col gap-12 overflow-hidden w-full select-none">
      <div className="absolute top-1 -left-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full pointer-events-none z-0 animate-pulse bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)]" />
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full pointer-events-none z-0 animate-pulse [animation-delay:1s] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12)_0%,transparent_70%)]" />
      <div className="absolute -right-20 top-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full pointer-events-none z-0 animate-pulse [animation-delay:2s] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12)_0%,transparent_70%)]" />

      <div className="flex flex-col gap-12 px-4 py-4 z-10 max-w-7xl mx-auto w-full">
        <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white">
                San Nyein{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Phyo
                </span>
              </h1>
              <div className="text-2xl md:text-4xl font-bold text-slate-400">
                Full-stack Developer
              </div>
            </div>

            <div className="max-w-2xl min-h-[3rem]">
              <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
                <Typewriter
                  cursor
                  cursorStyle="|"
                  cursorBlinking
                  words={[
                    "Building scalable enterprise solutions with Angular.",
                    "Architecting robust backends with Node.js & Postgres.",
                    "Designing high-performance web applications.",
                  ]}
                />
              </p>
            </div>

<div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 w-full">
  {/* Download Resume Button */}
  <a
    href="/portfolio/resume/snp_resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 w-48 sm:w-auto text-slate-900 text-sm md:text-base font-bold rounded-xl md:rounded-2xl bg-white hover:bg-slate-100 transition-all duration-300 shadow-md active:scale-95"
  >
    <span className="whitespace-nowrap">Download Resume</span>
    <svg
      className="w-4 h-4 md:w-5 md:h-5 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  </a>

  {/* Contact Me Button */}
  <a
    href="mailto:sannyeinphyo@gmail.com"
    className="group inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 w-48 sm:w-auto text-slate-200 text-sm md:text-base font-bold rounded-xl md:rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800 hover:border-slate-700 transition-all duration-300 active:scale-95"
  >
    <span className="whitespace-nowrap">Contact Me</span>
    <svg
      className="w-4 h-4 text-slate-400 shrink-0 transition-all duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </a>
</div>
          </div>
        </section>

        <div className="w-full">
          <div className="flex flex-col gap-6 p-8 md:p-10 rounded-[2rem] border border-slate-800 bg-slate-900/60 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-slate-700">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
                <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
                  Introduction
                </h2>
              </div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Available for new opportunities
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight text-center">
              I build modern web applications that are{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                functional
              </span>{" "}
              and visually appealing.
            </h3>

            <div className="flex justify-center">
              <p className="text-base md:text-lg text-slate-400 font-normal leading-relaxed max-w-3xl text-center">
                Specializing in full-stack web and mobile development with{" "}
                <strong className="text-white font-semibold">Angular & React</strong> on the frontend, and{" "}
                <strong className="text-white font-semibold">Node.js, Nest.js & Postgres</strong> on the backend.
              </p>
            </div>

            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-6 text-center pt-4 border-t border-slate-800">
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Focus</div>
                <div className="text-sm font-bold text-slate-200 mt-0.5">Full-stack & APIs</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Core Stack</div>
                <div className="text-sm font-bold text-slate-200 mt-0.5">Angular / Node / Postgres</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Architecture</div>
                <div className="text-sm font-bold text-slate-200 mt-0.5">Clean & Scalable</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="p-6 md:p-8 rounded-[2rem] border border-slate-800 bg-slate-900/30 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
                Technical Skills
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/50 bg-slate-800/20 hover:scale-[1.02] hover:border-cyan-500/50 transition-all duration-300"
                >
                  <span className="text-xl" style={{ color: item.color }}>
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium text-slate-200">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-[2rem] border border-slate-800 bg-slate-900/30 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
                Get in Touch
              </h2>
            </div>
            <ul className="space-y-4">
              {socials.map(
                (item, i) =>
                  item.link && (
                    <li key={i}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center text-sm md:text-base gap-4 p-4 rounded-xl border border-transparent hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
                      >
                        <span className="text-2xl transition-transform group-hover:scale-110 duration-300">
                          {item.icon}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            {item.text.includes("@") ? "Email" : "Social"}
                          </span>
                          <span className="text-slate-200 font-medium">
                            {item.text}
                          </span>
                        </div>
                      </a>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>

        {/* Experience Section */}
        <div className="p-6 md:p-8 rounded-[2rem] border border-slate-800 bg-slate-900/30 backdrop-blur-md">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Experiences
            </h2>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12">
            {experience.map((item, i) => (
              <div key={i} className="relative pl-8 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-slate-900 bg-blue-600 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {item.role}
                    </h3>
                    <span
                      className={`inline-block px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase w-fit ${
                        item.duration.toLowerCase().includes("present")
                          ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {item.duration}
                    </span>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-semibold text-md md:text-lg w-fit transition-colors"
                  >
                    {item.company}
                  </a>

                  <p className="text-slate-400 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>

                  {item.project && item.project.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-1">
                        {item.project.length > 1 ? "Projects" : "Project"}:
                      </span>
                      {item.project.map((p, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-0.5 rounded-md text-xs font-semibold tracking-wide bg-blue-500/10 text-blue-400 border border-blue-500/20 transition-all duration-300 hover:bg-blue-500 hover:text-white"
                        >
                          {p.name}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.company.includes("Ultimate") && (
                      <>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-md font-semibold tracking-wide border border-green-500/20 bg-green-500/10 text-green-400">Next.js</span>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-md font-semibold tracking-wide border border-blue-500/20 bg-blue-500/10 text-blue-400">Prisma</span>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-md font-semibold tracking-wide border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">PostgreSQL</span>
                      </>
                    )}
                    {item.company.includes("MIT") && (
                      <>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-md font-semibold tracking-wide border border-red-500/20 bg-red-500/10 text-red-400">Angular</span>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-md font-semibold tracking-wide border border-blue-500/20 bg-blue-500/10 text-blue-400">Node.js</span>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-md font-semibold tracking-wide border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">PostgreSQL</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 md:p-8 rounded-[2rem] border border-slate-800 bg-slate-900/30 backdrop-blur-md shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Education
            </h2>
          </div>

          <div className="space-y-4">
            {education.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-center justify-between p-5 rounded-xl border border-slate-800/50 bg-slate-800/20 hover:border-cyan-500/40 hover:bg-slate-800/40 transition-all duration-300"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-md md:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.degree}
                  </span>
                  <span className="text-slate-400 text-sm md:font-medium">
                    {item.institution}
                  </span>
                </div>

                <div className="mt-3 md:mt-0 flex items-center gap-4">
                  <span className="text-xs font-bold tracking-widest text-slate-400 bg-slate-800 px-3 py-1 rounded-full uppercase border border-slate-700">
                    {item.year}
                  </span>
                  <svg
                    className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
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
            ))}
          </div>
        </div>

        <div className="p-6 md:p-8 rounded-[2rem] border border-slate-800 bg-slate-900/20 backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Featured Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative flex flex-col p-6 rounded-2xl border border-slate-800 bg-slate-900/80 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
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
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-indigo-400 transition-colors p-1"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {typeof project === "string"
                    ? project.split(":")[0]
                    : project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                  {typeof project === "string"
                    ? project.split(":")[1]
                    : project.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {(project.tech || ["React", "Node.js"]).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
);
}
