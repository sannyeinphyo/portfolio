import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const skills = [
    "HTML / CSS",
    "JavaScript / TypeScript",
    "Figma",
    "React & Next.js",
    "Node.js & Express",
    "Tailwind CSS & MUI",
    "MySQL & Prisma",
    "MongodDB / Restful API",
    "Python",
    "Bootstrap & Python",
    "CCNA & MS",
  ];

  const socials = [
    {
      icon: <FaEnvelope className="text-amber-200" />,
      text: "sannyeinphyo@gmail.com",
      link: "mailto:sannyeinphyo@gmail.com",
    },
    {
      icon: <FaLinkedin className="text-blue-600 " />,
      text: "linkedin.com/in/sannyeinphyo",
      link: "https://linkedin.com/in/sannyeinphyo",
    },
    {
      icon: <FaGithub />,
      text: "github.com/sannyeinphyo",
      link: "https://github.com/sannyeinphyo",
    },
    {
      icon: <FaTelegram className="text-blue-400" />,
      text: "t.me/sannyeinphyo",
      link: "https://t.me/sannyeinphyo",
    },
  ];

  const projects = [
    "InternLink: A full-stack internship portal built with Next.js, Node.js, and MySQL.",
    "Portfolio Website: My personal portfolio using React, Tailwind, and Framer Motion animations.",
    "Job Board App: Internship listing app with filtering and real-time notifications.",
  ];

  const experience = [
    {
      role: "Full Stack Developer - Intern",
      company: "Ultimate Solution Company",
      duration: "Internship",
      description:
        "Built responsive dashboards using React, Next.js, Node.js, Tailwind, and MUI.",
    },
  ];

  const education = [
    {
      degree: "B.Sc. in Computer Science",
      institution: "University of Hinthada",
      year: "2016 - 2025",
    },
  ];

  return (
    <div className="min-h-screen relative p-6 bg-gray-900 text-white flex flex-col gap-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={fadeUp}
        className="relative z-10 text-center space-y-4"
      >
        <h1 className="text-6xl font-extrabold text-cyan-200">
          Welcome To My Portfolio
        </h1>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 1 }}
          variants={fadeUp}
          className="relative z-10 text-center space-y-4"
        >
          <div className="text-6xl font-bold text-lime-400 mt-2">
            Hello, I am
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 1 }}
          variants={fadeUp}
          className="relative z-10 text-center space-y-4"
        >
          <div className="text-6xl font-bold text-amber-300 mt-2">
            San Nyein <span className="text-fuchsia-500">Phyo</span>
          </div>
        </motion.div>
        <p className="text-lg text-gray-300 mt-4">
          <Typewriter
            words={[
              " Full-stack web developer building interactive applications with modern technologies.",
            ]}
            
          >
            F
          </Typewriter>
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-block mt-4 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold text-black transition-colors duration-300"
        >
          Download Resume
        </a>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={fadeUp}
        className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 p-6 rounded-xl bg-gray-800/70 shadow-lg hover:shadow-2xl transition-shadow duration-500"
      >
        <motion.img
          src="/portfolio/profile.jpg"
          alt="my-photo"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.2 }}
        />
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.2 }}
          className="md:w-1/2 text-center md:text-left text-lg"
        >
          I build modern web applications that are functional and visually
          appealing. Explore my skills, projects, experience, and ways to
          contact me.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          className="bg-gray-800/70 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Skills</h2>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="list-disc list-inside space-y-1 text-lg"
          >
            {skills.map((item, i) => (
              <motion.li
                key={i}
                variants={listItem}
                className="hover:text-cyan-300 transition-colors duration-300"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          className="bg-gray-800/70 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Contact</h2>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="space-y-3 text-lg"
          >
            {socials.map((item, i) => (
              <motion.li
                key={i}
                variants={listItem}
                className="flex items-center gap-3 hover:text-cyan-300 transition-colors duration-300"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.text}</span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={fadeUp}
        className="bg-gray-700/70 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
      >
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Experience</h2>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="list-disc list-inside space-y-2 text-lg"
        >
          {experience.map((item, i) => (
            <motion.li key={i} variants={listItem}>
              <span className="font-semibold">{item.role}</span> at{" "}
              {item.company} ({item.duration}) - {item.description}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={fadeUp}
        className="bg-gray-700/70 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
      >
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Education</h2>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="list-disc list-inside space-y-2 text-lg"
        >
          {education.map((item, i) => (
            <motion.li key={i} variants={listItem}>
              {item.degree} - {item.institution} ({item.year})
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={fadeUp}
        className="bg-gray-700/70 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
      >
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Projects</h2>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="list-disc list-inside space-y-2 text-lg"
        >
          {projects.map((item, i) => (
            <motion.li
              key={i}
              variants={listItem}
              className="hover:text-cyan-300 transition-colors duration-300"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}
